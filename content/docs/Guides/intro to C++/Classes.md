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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLP4RZK%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgzi4zCEWYvOT2jxCAab6ZrlwP9dPXOHQ5XPU7mRgEpAiEA5J3ABApohrtRWio7ia7lDSjw3x%2FVCkwvnvglCTz9kJcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyM%2BLccEYMClamvBCrcAwuOIH0wtsqVr7otT3FQsEKF1lonsNOo3pqfTugDo2X9o0sm%2FdrEyHDf9Zz%2F0zTNGXlOmR0TPlHSGxll0SPwxauyRBTaedYq75zHUq9nCzpw2Hh6ENjuFXUCXTpso2Rv9DQhsa4a5pgXd%2B96Obu8xnP4oCGr0ZzVt4%2FqZMgUOsFd2dhsj%2B6axR4%2FrII8%2FFZr6TNrDflw3KrptCRwAsdzlx9man1g%2F%2Bl3KjBXIg2ZOclH4mhcNHjtixyXG85KeGAcGPGcHa9EtTFr5Fn8FoZrTlw67qLsCn1ft8o83HQtAIenbJ3l4lpqMwc4sHNiUIVpvHTfb1ebU4pWexgE1oJ0jNil1wPIugFnPtjdwvlkd%2BsC0yv%2FqsuIjfA8L3lMH0cZijdaYdqGli2i4xLMqX0pyiPhwpEAveZYPEB8vtT4jCSA8U5sZbhymkTAjuLlfLyd7Yc79DdG5bBDNq4QWgtqs%2BADONWRQ3md0ZY035VVHU5IMknGmqzR8w8i3TNxZnDIMCRQpqHTBv1LiExH11wClD9J2QN2QZ3I1rvP7lSQgsDaQbbdBCTs1cLWbm7twTgESM78vnrK2FhUzBbRLt5BZtq1n1A56hfm94DzQQIgSY6fw5JkHYlh7MVhh%2BU5MKP4mL4GOqUBwlQm%2FaeaiJ12IJbr1G7fUQoozHMwyClRrS0ctsgQmAafENhT1NEjG0kiwz7ydRV7%2BTk0cU2EIA8M2YzYHErvNImQMfhGxSPspVKUK7Jdcs9NAxNqq83s%2BHITpaOu0J%2FY%2BQxKqAugzoZ6RCLlfOcLH0Z7lM4d7x3mu8pR9hfeZjRFkndKki%2BJu76WyKOuAoqEXJyK46AUCTstLu8sDNMVtD%2F6eyeA&X-Amz-Signature=8cdb6c2a06962b9a821986ffa53873d5c9ab2a8fe689c24677c92a229332c578&X-Amz-SignedHeaders=host&x-id=GetObject)

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
