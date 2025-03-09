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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4QYCG2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDgWfgMhzXReq%2BlDhNZxdBeiiMnJ9KJnfYNWemhh4%2FnzQIhAKmP48CjjfKYPoRzG%2BzcAukUdXiKPEYGSsX9wVC3rGaxKv8DCHAQABoMNjM3NDIzMTgzODA1Igxv8PoLuHOAFjRfiicq3AN69sorDae%2FJ1q45SPUCvFqE7W3PjRrNbrolPqsCR7A6FIw0%2BW5B61CgVfddpv8siNFgmclGE30Cy4XcvQ4ZGxOxeTdrN0xpxvwTYRKQmq1mOj8kQZAKPWGGS6dkxzRTZHMVsnWqtzM3SXto3T%2FkcNyToK2sTJSQHn3BSDiy2olCbOjUKlzGuIXyatbaSgmNCTWFPA0P%2BtEn0JI1KyX7%2BF8BGd2CYAY7eW3zYWi6a%2BrawFAE8iY0iGRf9SfY9QAhL3hvOxDE750lUm4Lf1VUiuuq8Lg9AZxc32ykqtBEKdz9W51aMwz5ST0YtXa2yX3ThF5Nz8D0N%2Fx94M9726xoE9ZzJfafjILBicrP4X7cFsADtjx8Xs3x0FOdv9j3Pm%2B5C2SfahiGUys5FCnUpH3hhkIO2%2Bc5c88Q71uTBNdWo%2Ffg%2FqFW3IDZkucyWD1G8FXpEwU64yJEFEGSfQuMw9G1pkOwYy20F%2FcpdzSRihzZN0BK%2BlWvAirn9%2BxpOjyvLgr5Y2KEPwvQEhf1bPTPpWs9vlYLGVIAITBTwuH4YEvEb4j44xc2r41Zm5gXbkqdPqweUrQKn3BecwXOkrdyM0eSVCIERqR8ffEQtQzx7I93fhVU9jbkPyLv%2BDRmT6yhjCz67S%2BBjqkAXWL7l9DyDQsLiDQnWxMu0N%2FLDyW%2BvfK9DFZ%2BcaZWwn%2BCb%2BXDJwOGJMMrCiGO52hKrhnqAe%2FYaqkp%2F5DzEoaat4r6GI4LyCePX7%2F1oDVGiqybBl%2FlXycncwpa9MCZLUN1gMxmCcxy4sQ2ZIRJmFkrEqffng5US%2F8ZUb%2F5bwex6Zl8pdtnqdrGf6tjlQYS2IKfzaJ4cDlWYnv0YgipnnKmtJhwH1l&X-Amz-Signature=2be4985647cf722f32ee62490574f776de0eaa130e97fd93d8833d85d20f7f9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
