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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYEFQWK2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbwfMQnh4xMs37Epo%2FcVn7HGnIbhxk%2FLz9C86ciFfEAAIgVZWRlADmBXUU4dvctm2SowFg%2Bwf6sqVlItwBrNTpq%2FoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6XJ8YlBhPN9v55XCrcA%2BtRBVM2VKnMCvM2sRSSi%2Fx7B9I6be332UthKsbMLJYwyGQO7GttKdMdXt2zbXE7HI%2FKCY8e%2BKzn4wRmip4za4nELcLZ2d6H1ZK%2B82BKAHRI7GyhoRS2BDKDCFCoLmUmgMeUFvAuwWOmP%2FfKoMhApQVblI77OGlqXrBYG01YIOzDOFJLPsuxTj7PE%2FijNn4KNortkFIEGsTHoVwRhUNrkvp8py4D4VTd93h7RPS7rT13h1ss0r83PvfNiPq%2FXrd48tI%2BXYx2us5MzSSActuXy1iQ1YRRWT15Xs%2BLHK7nGUOY7Q%2BQ7Rz9kOHRSUKMvsZtuQRwbdAoCo2v5NyCX2HDazGwVlsnkAemAwSv6DTii6jYD2HDB%2Bl8ZhIg5qQ4gv0%2FpZ4F8z4uan7u4yuCzuxarcJWoKKdQBFVbNseFiZ9Gt7uicR0SXiH1Fc%2FLI%2FKD1zISkODCjiJVVSiZ2TY3cyg7HnWdh2g15%2BEojU6a0CNy8jtUL454GMI5Bn5TG1fdat7Fz%2Ba8U89hSo7%2B64NSRHHyI%2F%2FaCRILnIcNxbNTxMJX1aGBgdqki91ojj5Mpi1LPXNNGRKtsqXXXwhZ4aYedrTIkaeQMfjwBjvSDYgjmXHefBjG%2B9fVi61k3cZ%2FJuPMJXfn8IGOqUBu4J9t9q2%2FqApFYN7Vt6Cj1L7Qk3NtGQsWXEGkDx3w4MNF9jANB3Haw2SVreCDtyx5vqRA4XpXBRnopkT6wc9sXYPdSXUAzva3E%2BR9YaxtcZXfgyoCQZT1rzfXgUyegnWJFKBrSxwoZUjpCMYK4TgzPurAXv%2FKaFS9uePbS6o3vZOOGZY7nT%2BRF1fdnVHAtP76Q%2BG2qyIl85nOETvOOSJmmMdTipn&X-Amz-Signature=2182fbe8dba39a888cebdf2f8fa4f6a1d6cc360da48c810482cc2c54522dad25&X-Amz-SignedHeaders=host&x-id=GetObject)

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
