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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4AHGIY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIDB31r%2BYoonfkcMx2wjMz67f%2BMZEOjgMd95i3GWKpK9ZAiAIhewF%2Fx0xZ0DGozLhYMd%2FknVqr7M9wbQjsGJAuUDUSCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF1FumUHW8G6I1wNxKtwD%2BPTuO2qS2OXO%2BP7IiMkQ7ASpYE71MoD%2F%2Fp28jfLCOMoPUPebZPDwhCmJElf8MLn3g1cmQOQLFsfftB8uWSLQ027cy8AjV0fgkDn8B7uhHNHj26Z9EvTmXssT%2BSV%2FdBTEg8Xgu6S4iYTsHYny7ai0o3p%2BWANouxVNnqxGXjG0BF9DMKrFHzi%2Bi6MG23RB0AfJv7MD5%2BTMp7TS4II%2FSWSh4RYzRP0AMeowvxbRtBNsMHuz4%2FGLnI6hc9BEkn%2F1JzYxTVRnNAYtzUvCyd9VNqDTZVpFyyTTAHVXpj4gedFWriplcjKDYkBLjSayskYghUK4SD8bVA9JAWplVsIO6vultOL649M%2BPj%2Bgb9Ub%2B2XI0AMRkffiN5FnOHyAdk55JX07008Ulitl3B0%2FydRc3ijz%2F%2F0KTLSdSt0cPg9IhGM8ZmLr3YXTWuutRd%2FZvuxpT0VWKveKkuvc7E5i5QEwHAUOEGyNxmeNwwyviPACpqp5AYI0cWYAm4%2B%2F9A5Mq2xdQ7v52Qiv5%2FzpB%2FbEeRatBn24KKKIdJNwXwMl3mBwd%2BsdavC0rcGqEEWfwroSphn82AfavlFoifKKyEMS4cDwV8sHaWkvZ9Rhdr4Y714iMx1FSAW0xFLuguMEui7TviAwoKnSwAY6pgHJziPrMzdaM0E%2FwDn5kPZ811E8ckIWuVp5%2Fn57Pw9lfPwBiw19C2aF3%2BtvJDhgttAY2lIwIJBJCJQEtidNAWv0XSZdiDi1d0f6KInsrhhEpPl0zkdzA16LiSlbKXON5Ars9flYDG44oEBrQEyToSlfT8TnuoH%2Br7%2BltKi%2Bb%2BuWU2xUacGetRmUi2gjUaNKa9Cwm5SuEEepJGCaaFWfQ37UGQfZSJFo&X-Amz-Signature=a1ab198d334ca9ee9998200d42cbe433704fdaf648243f6634c81bfba0427939&X-Amz-SignedHeaders=host&x-id=GetObject)

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
