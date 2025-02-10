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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWIPB4IB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgKMXMVGyxqSljgukd8tTTLItA6n%2FiFyXco3BeT8xjRQIhAOJHC2EZ5Yu19%2BE%2FlIt54ygnUt5YLbet8QVo5uItQkcjKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnAIWsoKq4TzO1Di0q3AOBX13871UDitsDXNkph6tKMxPo61sK%2BBbMHmLWSPtVFMyAXHGw2fXhhH4ap8%2BXYOx3PPJF4AlqQwF55My7qUxpUvJPRFCPgYu%2FcF8hehi31G9GkBUEQa0D0T8oZ7VX9xw%2Bz6f3mA%2FoCRFCM31pUn2yDLPvK%2BSh8ENzIyf0AwE8x%2FehCZs4gbUmAevxXQm8XgpHaB04Y4VWQkw1RG0SYMBQQUqTrJhp9Paih3HGHIo2Jnxt7KH%2FuUaeH5qfdHwAREVHp3QYg58Oqc80S%2FV7bMgT1J9R04mxxGGvpNwhXJnIAKU6PDNOS4m4nxosXneiz4Gc8DNaGmBehmbhG94TQ5adq1NWbVBXohum0QK1SyCfOw1i5tk3gn5XT1NBbWS108S5nANyKyO70TdubfNFxojxMzi%2BG%2FxdIyatbBOdIOmB%2B%2BoQdfAdJNGuW9djREFgs9vHPEmf54wCBTvwtfoKog1bPKqKCeAdTqgRNqNxvjnmFeXmuP6EfJWLzZ2xyg%2B1xKZ%2FVOlW7W0iYezVdrKp3hpCu3PlNZv84QMB782ztpWTkOdeGDT5ryY5xbgrt%2FVcxkh00EwrDV0bnHPlGNuEBpsXzQB%2BdRnySfziHAmvFeigF7Myu1gxA9ICYyTtJjDHg6i9BjqkAaSTTrn%2BcLMwUBG6EEUx9Y1n3PORptwc1%2B9tNplgqx3RuHOkqJTUgwtshzw8VS8oMSa9cNoMAcJysI6leXRuJojPBa1gTC%2FoZ8ZdEFP7q%2FfexneIZPto3gQ8%2FBMLPYmx9r37QdQf3JbJ23p%2Bx070%2FVV9RGfP6Y2K%2Fr6OP8BpJ%2FkkSVpFP4hVu5HLQ4CD0%2FZemxL5AoF0YKBb%2FQKq8avqFk5MfwAN&X-Amz-Signature=70cb6484351be974685ab44ee13c4e14a9438c4fc794cdc8b958c9def513f5d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
