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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ACAQ3WG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCID5iTLEpQGEYPDD80n7uqWbVGU4RqcCUR%2BmKnXC1rrkrAiAB8SbiexsHEbTrMdtV0a8jpvo2wRSIumEAJ6wBqEmbEyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvs8tHvZUw9%2BhVenJKtwDDYMSSX1agNSF7x0UD1v9qt8NL2nrbWFuFQNPCrx0KJUtr48mz42BHAH0L4LDhOIIRmiY4DDXmL0MOqIALDmwIk0kGwtP6TJfuUbHC2de0Nbw77lfpg4xMiztORISI158GSnykRP%2FRLzzOIQ5YIftmg4NLwsRI2Uah4GXG%2F%2BdwsUT5WkSk0BVy%2BjXs8crkOZUCHPwbXivu1JfOj%2FejCjkTSlcxFmmtuZaNWuWDiRdtnh%2BTXydcuHM%2BUJLXNN%2BsjkJ116aXKFy8qt8J25N7G%2BbDraeOuEhWyj7x0sFl7vNHr4Gewf73wKCnt3%2FdZU5HehQGmusvvi0Ew2uwcn%2BIU5VwXzAC0wGV4CNdVZMz9IQFCacOZZmq5c8G7XVVSiNcEvY5H5ffw7Fd%2Fch6EBtuxJxqKwlFqY6%2BbROeJVIRwVrVrOo7W2pjKnUD7OuC7c6SsUWFmm90Nn%2BaFF%2FjhhiyZorlPz2Kvtf1hoJuTiVjkz0JPUP0wVxL9Rjob8HvXUxMxnBQ000R1cnUgHCi8EvO%2FxKXqprqXTiZf0JoYGhuHbysPscDyZkUnhlZcrZAeY7wDSPkEaSE3%2FIYcJtyD6EfNYyWksCeFMoujkDfYGaQJWkHdup0O0lnpM4g7aDFHkwqqSSwAY6pgE4RJMAbzXtYHJMmN4be4e6RTaQA4%2BcAtqUapLBQ0aiYsyr2iwWIFfNil8qDxG90EyN1RKtd60IH3WB8avRr1%2FlQEyoNtufzthTOYo8jTE1hV3digZsqIdxSk7pQrhMNDQGhWSmbCYykWKngpu%2BjTG2mWOpwitpSUjndqWsd71PZX9AM8PJBnPkfeCvsukioh2VjoNRuASMro%2ByB7sB70%2FQPBDTxwZE&X-Amz-Signature=b91197e2a7ab7351d9bfbf8d0afbb87ef190f6958ef0df4d6a15dddc248382eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
