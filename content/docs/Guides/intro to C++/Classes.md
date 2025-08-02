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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDEKXK3A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKe9fjnph%2FKW2O28qD8gf0FimgaJozt0sVaNCTaAfE1AIgAk9dIWNfp%2BeC6LaGX6AndkyYdK2nZ5b9ejUQ5iozYBsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDECN29by7ElTU0uRICrcA%2B4Et4fRZlR%2BNL8EEpVw7FAqHiBogUAbrlhvZU%2BKn8%2FLx5lAmOpLDBy51EXIUvyrYgq0dsjGZqRtyufuTMVaWZ5ZOrowexcFHmYl1moU56yH9dJJxBF2v7ntHmNlSUPSN6kqVeO6TwNT3GP3S%2FNzCAHSnLR0aWRKcLNtN3JTX9ZiTWACPIylQUGuGU43uDOLi8x%2BV7Sj3km7JqPX2NArwUKmwPJ4w3dVYo8D9rsOwRotN6DeIEMAxcrEC32CTMpZorCedCsOY5U3Au%2BJUipFsSGVkHZikTrrBRAMydysGBCncx9x452CowycBIGdQ%2Bnzx3CQWLYe6%2BUEKHRRPvzErb%2BoKZznXoSCO80r%2BxCuJM7UpJaiKlySyZJXPRComVj6RYYAbS2wksYdlaMNC3ci3nZPjOLwgLobClSxIlAEQUbBZ%2BVDEPEs%2F7YRLkcZtctgUXVhOvMCNZaQ6Y907cKscxIuWUobqV7SIo71vr2sL%2FjwQiOj5eUEUVKTEgjDuTOP5abws8F9l0BnRj4GDe5XjajtK01bSdOXqgn%2FW%2F4Rizze85xm1RmR5ZQt%2FEA5K3OHPCUaUbwBUqk21DnXvr86kEXCV%2BUhgVnLYujAZePdqsRR8uNsZqGfZ48d4Ez1MPTvtsQGOqUBLlILqcNePww14LqmvfVOV%2B9rHtSqZKyneqm7H6KsZ6vvu%2FjP8jjUj2egH0gqZRafe085ibaz2P8z5nyHXHVzDrQ8Sy9bZ10xGu2%2BC%2BqXBd6Yn8EPmjKCoIZhKPjWrU%2FsdEVHpTaN6ykxnTE568DwsOZW3BiKdotjohUzDeJcMqMG1Bnzgzx22%2Fcyn%2FJnoYbbSiXMBehbC1HFx2zy4BALR%2F%2BjOcn1&X-Amz-Signature=b811d127ff29d217031497ee27f136cf3b885e168ed8218f7b08976cfd1c73eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
