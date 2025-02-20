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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MX6BCRA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQrdaIaS5rnkXqoPA4OOU0LtFFyvZZReloE7rrGOvhIAiEA1FhGT5589qdbAalOo8RgWZ9FZYK05G2buLULbM9DuGsqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmeNPQs8d5q2l6IkircAy29QF0WmcWE4BxZe%2BH%2FzqTaUSMH1lDuRnsJB0IYXivLDX%2BmZI8J903IDb%2FXp%2FkULYkaXviA3wLRdrPyoEjU8OpHaMjp4CzqmSEVPZ1A6nehNwG57gx3sWgEymz1aZ2ukBvgwshJ3v6Zjf0Bd%2FOcn0PFPF7OJK%2FjCC2BffFqvjf3BEJCNxuUPrnijXUgIAiOStxLwniEAMfObbv13WGlDXtRJzmAd6QohyuIGaX%2BeSWWSMW9jTbqVNL6kyrR5mYDObChSTKr0G9wXYuG3s3akCPIcLAmFzghMjQ4GUUqVggz5ppBa61nB8tlHq0W9B4DRESP%2FVirEz8ZBsG9tpLBrJhMe%2BwcRZfAuIYr50GZLDcCZgoQ%2BfQ%2BVK5B%2BsozYWrAluMyHvF3AHJI17L8WzUJA0XjKypwCKWVS1DXQGJXfFINb231jI%2BCC%2BQPKZQd500wk824ZTDe01GZWA393wwNVGD2IbGTNPgSnHC9TSmz8MW9oeUNrvgoMJ4Nw46VxEwVB%2B3tCGCfshUnq6oRnRIGh3o%2BThK4HZSVvB%2BTjcYOIhtf5e7BdKcR1uNNPcvSI08124NK4AX1znQSavD%2BH8QFBcMIjGMQEQUfnop5V6twwIf9iB2onMYj9%2Be3hMnfMK6N3r0GOqUB3H3VSDdGMJz7jroW3Ditvjhp5y1XHO1oOLCu3y7rDe%2BC2DmqsN%2FRlts9%2BmA91rhNAxN%2BtPeI6299f1SmlZtx%2Be7y7d6zO2PUMN4BoIhT9CMgg2Ui5M7zGlSeDyvWw6wF9YMb2xOnw2TtGUiVGS9NOwV9ApG99sfyJYhamFOydnvtkjLBpQ%2FshLvZ4TfvluQ%2B9dEdEmSNm2TpI5%2BlKqnoB8O1IlH%2F&X-Amz-Signature=df1f6e8e03df56959bba768a8dc7cb16f4513947b2ba0ecfc6f8d2838cb8866a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
