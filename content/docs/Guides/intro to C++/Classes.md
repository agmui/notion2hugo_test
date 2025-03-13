---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBA3KHH6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKfI3g%2FnJ1QWABoe%2FW4d%2BAreg%2BXXudVEqco7EcpHC4uAiEAjIBIfx0EwNy8ZJ2PHub3Xg17DvDKSh56Rq%2B8gANcmY4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQdxz9aSHIGNbMRlSrcAwr1pTBOqg7McszTUkrMiXPV3q0vf2UK2TMeVSTM87oG0UodoWR%2FMoDRX6jy5f6DabtkYqKdBJdmIPwMYTBEv976IJ%2B3gO%2F8%2FAY4QBBbDePfdyby%2Bzsc%2FxurZZ5U6L2xJfqO6kwvh8vGscWhATfub4SEmKHBP5M6%2BkjDAIDCxtDrx9OQSlICRW76jO%2BYBYiT%2FZ6bj1STtkWKup%2B9rHKCGnEpV4%2F1grFB0gc2GTFVSLUZXJFpEiasYMcO8RrAi0to%2Fyg4eR0Qtu3cyAelSNFuJa4Z67LyXwsaOsYa4Ea6FtF%2Fx0nZrK6mO84B2gSni23hUDCoF9swk%2BBMrc%2BrW%2FqqRs48z1fsasKUD%2Bl37k7pbspoHDuBQnwNfh0ofbPuVtGvkQZxsd8bNw26uplBQL60QEadKziPI4T93%2FUIz7yzwgQYTq64pgUF7mJ6%2FU%2FjSGeIrMrAkEk%2FuYlJE0lqVD1FA%2BAYpDCR2VngUSk6MhB9rH2FmA6pvUpe3ueiUaq846nai6Dz8PJi3E90oKkj4cAyhkROr4TOfc6bigl26%2Bks2H7bZA37W1NxaxBzeKqzYcg57TOJwicHAnHspHFxhia7NUezCytbUqKYM3cCvcO8nu%2FZlpQFCG1gXOcCM5PQMIiHyb4GOqUB51rdtrakNKlpEL21aomVbASbX%2Boao%2FwCcTZBEMsyZvOdnQMHJFQNJvLfNMwVTUoZYBobZavJnp28gkcDOjIwa4W8v4HjlmvnFEmjPBjjsSxm2ie8N46l3ZeKtMBNiJcRnSfmRBMobSDV03ggq9B58kKEMwVUGW0vr%2FSR5r0nV2l6Rx%2FK8%2BnHUEwuH1cOK73asLVBpce3TFuLY22rXdN5EJC6HkZe&X-Amz-Signature=9ce45247d28ed9eae50bbe27d33f17d7fd0f68b81458bc53bba9acdaa58227d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
