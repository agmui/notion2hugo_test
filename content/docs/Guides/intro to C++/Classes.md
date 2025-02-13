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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BLCFPY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYa4F%2FoKA%2Bw%2BcPaPeMLwpa5R7xVGR9Y4kQ1NastdJxGgIgDr3qyBq%2FyhWIVdG6EC2qCVr5eC5u%2BsUP1z%2BigW7FyCUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElssMt4hnv3O21qcyrcAwELXhbvGIr2PqD%2FslK1eTclxnz%2BR6MBa%2B5nwwgG%2FIhk9hHd1Ah4QgEKRCQYp4pyN1rQHIRkNgEB48Un9w7Y4mRUqBGIMIPTVH5bxksnSori9eItLRRPynDEphpgp53SPaIZR%2FZCDySv4pUD8x5tabdlwFSR0%2B4KFrQ%2FpFoVH5oSQYkmoZCY1CjLCUXUZpNf3WelgVGxyGpROn2%2BPXxtYBhM9vtJGgTD38TTALMOy948PKUAVyw%2FWnm1RG1ChQ1T5YfsIVed9hdHeRXEb54Kw2MRdeMtrnU5mHIq3ypXPGS1TZcMUtHPxfNEtbspUAxOBJaH5wxfc7SMKxgH15ppMimAq60UZ%2Bk%2BfADBP3eHZGwKG30RUw8jRWp2rM9uqw5er8HvurJwCDJer05sPMyUuVyDD7XsmM6md%2FWEGXgMwHNlsmQ1JsUv%2BXb4lkrUmwaEfOS4gXiXSSNqUsvez1lvJ3Kabrv9%2Bc%2B4pC8QMfaxst20yPTaFHEjwdFEenxEcA%2BkjKvOLRoToQ5GDRFAZTT4rNysp%2BaIaonP2a01LujtLP%2F2LgIz0kti3KInlR%2FscMyZNW%2Fwnp92TFK4UU1B5GOGM9rSW2sf7cxt75LRcLzqK55fe%2BCP%2FfkLrullIeFzMKOPtr0GOqUBoDSwL%2F7551RhdCZzb8PQh%2BRnSRs%2BrFbh9o%2BnsXMvViyWGzYa69w4j0M%2FSOsL0IW%2BmL3fkD1U0wZ%2B9RKT2e0f9ryRNia0tgNRdEBgcMDPdPsli6%2BI7NDzFSDJ1roNMkB0nyFRaMsYEM1lD11Tb3dMW4XndS2DHHhRttJH6RauVEdx6PD2%2F%2FQq8DtAyjASoFPBHc4UCaHSUivix%2BaV4y9HzIOJB7sc&X-Amz-Signature=739384eccdbade1b3f315110f61cd1293c38335fcfe00659817ab402dd9e638e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
