#include <stdio.h>
#include <conio.h>
#include <stdlib.h>
#include <ctype.h>

void main()
{
    int i=0,j=0,x=0,n,flag=0;
    char ch,expr[20],id[20],search,next;
    void *addr[20],*p;

    clrscr();

    printf("Enter Expression (End with $): ");

    while((ch=getchar())!='$')
    {
        expr[i]=ch;
        i++;
    }

    n=i-1;

    printf("\nExpression : ");

    for(i=0;i<=n;i++)
        printf("%c",expr[i]);

    printf("\n\nSYMBOL TABLE");
    printf("\n-----------------------------------------");
    printf("\nIdentifier\tAddress\t\tType");
    printf("\n-----------------------------------------");

    j=0;

    while(j<=n)
    {
        ch=expr[j];

        if(isalpha(ch))
        {
            if(j==n)
            {
                p=malloc(sizeof(char));
                addr[x]=p;
                id[x]=ch;

                printf("\n%c\t\t\t%u\t\tIdentifier",id[x],addr[x]);
                x++;
            }
            else
            {
                next=expr[j+1];

                if(next=='='||next=='+'||next=='-'||
                   next=='*'||next=='/'||next=='%')
                {
                    p=malloc(sizeof(char));
                    addr[x]=p;
                    id[x]=ch;

                    printf("\n%c\t\t\t%u\t\tIdentifier",id[x],addr[x]);
                    x++;
                }
            }
        }
        j++;
    }

    printf("\n\nEnter Identifier to Search : ");
    search=getch();

    for(i=0;i<x;i++)
    {
        if(search==id[i])
        {
            printf("\nSymbol Found");
            printf("\n%c at Address %u",id[i],addr[i]);
            flag=1;
            break;
        }
    }

    if(flag==0)
        printf("\nSymbol Not Found");

    getch();
}