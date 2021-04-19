
package atmm;

import java.util.Scanner;
import java.util.Date;


public class Atmm {

    
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
       String name;
        String password;
        
        
        
        
        
        System.out.print("please enter user name: ");
        name = input.next();

        System.out.print(" please enter Password: ");
        password = input.next();
         
        double balanec=10000;
        String freindname= "";
        String freindIBAN="";
        int n = 0;
        String s = "";
        
        while(true){
            
        System.out.println("======================================");
        System.out.println("               FCIT BANK               ");
        System.out.println("======================================");
        System.out.println("       < Enter (W or w) to Withdraw   ");
        System.out.println("       < Enter (D or d) to Deposit   ");
        System.out.println("       < Enter (T or t) to Transfer   ");
        System.out.println("       < Enter (H or h) to Transactions History  ");
        System.out.println("       < Enter (A or a) to Add a new account   ");
        System.out.println("       < Enter (Q or q) Quit   ");
        System.out.println(" ");
        System.out.print("    < Enter your choice:  ");
     
        
        
        s = input.next();
        
        if(s.equalsIgnoreCase("w")){
          
            
            System.out.print(" Enter amount of money to Withdraw (up to 5000)");
            
            n = input.nextInt();
            
            if (n > 5000 || n > balanec) {
                System.out.println("you cannot Withdraw mour than 5000");
                
            }else{
                
            }
           
             balanec -= n;
            
            System.out.println("you have Withdraw "+n+"and your new balanec is : "+balanec);
            
        } else if(s.equalsIgnoreCase("d")){
            
             System.out.print(" Enter amount of money to deposit:(up to 10000 ");
              n = input.nextInt();
    
              if (n > 10000 ) {
                System.out.println("you cannot deposit mour than 10k");
                
            }else{
                
            } balanec += n;
             System.out.println("you have deposit "+n+"and your new balanec is : "+balanec);
             
             
        }else if (s.equalsIgnoreCase("t")){
            
            System.out.print(" Enter amount of money to Transfer  (up to 8000)");
             n = input.nextInt();
            
             if (n > 8000 || n > balanec) {
                System.out.println("you cannot Transfer "+n);
                
            }else{
                 
              System.out.print(" Enter your IBAN to Transfer to: ");
               freindIBAN= input.next();
               
               
               if ( freindIBAN.length()==10) {
                   
                System.out.print("enter name your aacount: ");
                freindname = input.next();
                
                balanec -= n;
            }
               
               
            }
            
        }else if (s.equalsIgnoreCase("h")){
            
            Date date = new Date();
            System.out.println( date );
            
        }else if (s.equalsIgnoreCase("a")){
            
            System.out.print("enter name your aacount: ");
                freindname = input.next();
                
                System.out.print("enter pasword your aacount: ");
                freindname = input.next();
                
                System.out.print("enter IBANnumber your aacount: ");
                freindname = input.next();
            
                System.out.println("Account has been added successfully");
            
        }else if (s.equalsIgnoreCase("q")){
           
            break;
        }else{
            System.out.println("  you entered wrong input! ");
        
        
        
        
        
        
}}
    }}

   
    

