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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XBS54MA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfCFTZmkvetF0x6TELnm6QqxC30cFWDSQMdzgjiNSAZAiB0AHCX25FKe%2BD0%2Bb2amrGlbh0xybGorrIxzRG0VUJfRSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMhcP6BYzVtJ2QRuGtKtwDPJkIs5WSJEASYO%2Fmq3c%2FqrTvKu4vxS1bBbUOuHvajq9S3dt9BL2jJYqlBJmwtMTLQlNYWUjsVnydFipgqqC896OU2GBu9KOndZpBkLyrmyDFhYDkROdIA5xzkOCtAqzDAizQQ4qb9bQsTIjV0pRcIPwZdnHi9okGGFF1NyMsxgRW%2BQVO0rS6CCC5RSw76%2BA4DoPKOIMMa6mSxW8m%2BaJPA1LGkBanIVi84lyedG7S9jV0IIylhO7pG3dEY7bkzf1Ue2Xjf%2BgoG5Ik%2BoGmSJIccPu9WWWjHtPPh7kPEAbdLNYxNG%2Bvy%2BwpfLmqtZ2etKWnkOwzUz%2BGFMtHxHR5D7jAUvZ0y%2Fcf5%2FIA%2F%2B6bdABC4oNezNWAz1%2BY1OkMBd0jewy0EpJsVG%2FqGG396rUD4hc9E%2B72YOEFeejJn7nOGnmUulFTMtssi6o6DNLjavRFaFja5yKatZYcLGAaVEEJGRPJJzU51nq0q5lkiNi%2BfKdCJ6V1OSjyCvX14t12WMeEPITxmTZ2vUUIM%2F6wvm9CTFFZFtOXc7S%2FubJsNP7rQdOQA2KHc5udp211QfhfCmWyTtN2OhNqoWl6Jl0PrjarEOmtRzX%2Fp9zlXvtqhnpZ0QXILFHf%2Bfj59Sffgbzps2kwq9HwxAY6pgE1d89j%2F%2BqLYwR1Q4EPtU6jfmghbLw%2BDp%2FIWc6ToLegNNOHGxTRr8qtvrLvKetandOFB3CVyEKPLStWcJr82mCXDSmJpK439yx1XKytHehrprhz7ipBGDWr%2Fhd%2FXgtWLmek79iNYDr11BAJ%2F3wIfzVnnaiXHDxIjDYBPOYOlHhFkyW4uglS7wyk1Z7JxIhO3Ce1A1MVVijbzG5748uVNgPy6E0nMDfG&X-Amz-Signature=33407049937958db2e34d624fe2ea6ce178afc20e99dc683523d6ba95209fe80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
