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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIOPYIJF%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC98djK5Q9JWPcORM3mQoAUgF0TI4DGKcOGIegYhtOWGgIgTgZI1Cb2iyToXLBqScl%2Fo6ukERR2q2ajxzwUzf3lr3YqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCI94VEJPDw2z6XnTircA12%2ByzrsCdCLWP2%2Bf6aFZY24L9UxrduXs29PfrGx2tpjXFBe0g%2Frqc%2F3cRpco60FhwuM4Sw%2FMkMBYBJ8u2gUMRwPFOqK%2BA6YIN2IY74syo%2FThU0neVPSaTrprimwkbOodrWddnU0FJXVM5aUgFt%2BaDSFwFci10mYO9p0laQE37B%2Fe4FITvOog2DN3eCT3Dle5wa%2FbQ2wFW4cqo4df%2BwMbhTfOOdT%2F2ZbH5NGQkBfjU5i%2F%2BRrn4XYHSwj61RU4TMd6ro1D8QWeuEyB8J6LbxKTFtYloUZkIGCbqdAXXvyvxLA9o%2FpQNFwEFjqGD%2FfVX5Kh9yWwGfOZayJCblVLyvPrNbk9geIKSWeHCAoHms%2F1CVknv6KXCQqSXjkaSlhtteWIgB%2FwTGeWQo3ek2shknOdPFZ8z7cBdCFDx%2BzJ2EXLxXxCQhRac2B5feukEp5Aed7KZLLSAgISZQqhDMaHoHpv0IQksX6AMaMJAUfp5cEEWW6tHp9ZYEa8Tv%2BiO0EZrVS%2FvnIXi3n3THJz407h4jpPFxjwxfXDIV%2BvsD3ZXCPQJsFnk1b1WHdOVKq4Llxjvjt6%2Fc1YydmwFMiB%2FNgi3JwEMCxfsiD0Dag203FtDWgRqOQ4EYYwooL7cBGuWSfMPqMtL0GOqUBxioIIIhV0JsxItrQQVCpNZthlj19OcxorPox4jxyU14ln8SB49D3iSInmAfRArzkOi81aD0bGzt2MZkQZS2c0FYLcPsJC4FKqXX43kljyfn6s7EeRNQ5XcFq%2FHYsZomKczhNwutyIaY3muMnMQiD%2FK3q6Ib6zTkTKkLGfLwbUAA0qo%2F5qNXpFDL%2BQFY%2BZuzt7PmwYew95UqMNeWPMLmnQ6pDt1k4&X-Amz-Signature=c2a90f79c8ceb09759811f609d9b0224b58a6656517793b61cf8c7a913d2f668&X-Amz-SignedHeaders=host&x-id=GetObject)

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
