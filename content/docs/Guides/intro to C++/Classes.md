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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H24ALWV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCSq2pJm946MToZxHG5kuzYc8YnKWfInHadOURbEj2IrwIhAOvJXWt5mS0aOqxE0sj5pKRiUnQZrptdhMstjeUStnrFKv8DCHUQABoMNjM3NDIzMTgzODA1Igw6LETpMcZvwgdLOygq3ANd1pao%2FD1HUnJV6BKHG%2FiUB4gJ5bTGFENGG8bE2UElqNFnGlbAG%2BqoN0nN5jw0iUPvaR5ppClN%2FAoWQl6whs3eb39x1GlcAac%2BvS2SOBq5bRpyE1I%2FBctumT0zCTZTkLo6EcMu%2BSAu37077SaOsnpygNMZZpLSt3UbyuEarQ15fm3EYAZV%2BEIXVknkS7IcmMTH6re7G4C4yrPOtjV2S1AWxos8n1gCfAiN3kfZxEVC%2FCHhqkuSTlRCcHFJIaexBYo%2F6c3Sn7sgXSCrLU9I2WuwFxKz2fP2lXgbWXYt%2Fu2MSLgGxO%2BSbyn8s8sbKeVrn6TPrpbOFdWnEuVU4XjJuLXhPYtwOji6OM5f0YscdHuZON1AUl9SQdZeUVB5pj9ja6%2Bd2u6KXahy6lkP9Y%2Fh5T1fLVWPAKcRMn58kgJOy55zgHU9Yt1tIQu%2FUW10U%2B3aoQ%2FdgqWGtYkscCh9TZSZiJZTuIRwC99ol3gC%2ByP6Dg5eUNokVqpzWvJxly6JLRkq1ZDesgwy%2FuuWA9u%2BmzILL%2Fgf51csOAh8w8Zydj4TiTXGsVH34R4wXl2pPluB4X5sln9CrfanVsFnsqJZIO2lAtL4UwC98vItYYKLuaT43BDH2Z%2FyLJdSUiGI6L%2FE4zCdtZ%2B%2FBjqkAb0V1y2TJcm51qXG7ZP5WQ2S17ENUsJL8rmeAiVcQkex6wSROiOrrHMdMCb2tNCIGyP120Q7bfDQg3XWtVshNF6AcLUJ53Ka0WeKEmK1ZpGPiLxA5OYmO8KHOL5xcK41KTVJLiVyW4hGooie3cbPxdQHssAHtjbxZmumBN%2FBCHMctWZiXQjEEPizfvcLzzVGc%2FHbnn1qRwi8YkeNvReYt4sJu%2FD7&X-Amz-Signature=9f3fe00939ee4ba3b5987802c2c759ccd8a14e8ec1b9535cd3d24eba671003a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
