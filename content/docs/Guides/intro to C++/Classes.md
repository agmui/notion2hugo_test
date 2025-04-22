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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466747FCITQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDG5%2FqZbQegRCZMy8UG18VSGMCEaCPMRznA%2FGxDp904bwIga6P7tnuAdZ4CfmUNQi0D8f%2FjkxI3BLzXRZktDtZZsSMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF7TIS%2Bujthlp%2Bx3ircA7R%2FQO72uPxq4y4py8i%2Bbarefe2LUqCXdIGBY3veIHhQmHrCFfgu6%2F23foroReikNfrcbWi%2Fc8fJRpUsYz60TUbHgLUKuB2DrRp1M5GI38%2BW4tPRckksLLALUSpTAmUkloFHRSHfPUOiOHQ40QX2iEKvxNAVirVnG340uU2UpcjoslSWDrRoJ69YYBCRmiZhZUZEQMRjNvn48sEtTs%2Fqtu8qvpFst7RMNmT2S%2Fpkxbz02Xu9%2FknijZ2ol8wmNdDlBy%2FqaIEOlJkcsib4L4I5Z%2BIfvCCgjNJRfvmUOgeb0lysjr2uFG84VOmVu1Onfh3CAChNsiQ%2FyxOQ63mn7r6E7VbxVB%2Bdo%2FXih7LDBqMqpgOAr%2FQ3Yaq7Ix6h%2Foc02utUEUd4nyh1%2FDn0j36WZAGROTp%2BRfMRXfAT6v%2FtUK6GQmraYnB3F5EuzXHhbdC4Wmhr5F5BXMMATymJNReJJs%2Bmq4F8sZ%2BVpy5a3sr6d4hYMBwqSE8L9bvIKIUl%2BAjZsiFGJv3a2yeFoQimptvAC5k8Y%2F5QX%2F4%2FpTiwHTYoZ299PH1QVg2iRyv%2FwTEUn5UN6aqTWsOnyG1afZcWOPAB7284MysD0RGJGm%2FESYY6tzf8m67AStY322paEsjFFXfNMPOInMAGOqUBt%2BByAj0Q3ud8qS2GAj2d1xYKeeeMQnSicbumeOyQXPqGyVof4VuVUdXL9%2FuskfZ7W9ZAtY%2BirepF3uReFXAF594I2Of7uiMYP%2BOHBdAgPYMZ5%2F%2FBS3JyWoQECKTwgQd2cxjZuDYYuBK%2FCeOpZnAsqR3oF08nfFk50p8kwo%2FKDECa4dgZErlG%2F63iytFFYs0qG%2BsTsOOLHzRoOb1N7ZCi0JCloFBq&X-Amz-Signature=7e3bbcc6820883941cb08bf9f6ed34535d34ddd2fa26ac894e668360d2d65442&X-Amz-SignedHeaders=host&x-id=GetObject)

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
