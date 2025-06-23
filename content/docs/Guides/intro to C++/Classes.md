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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TKO3LER%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIGzFfd9ZWqicHgQMwNxEVmyuFm4BYFBTOohePUKwWaNKAiAZQGZjdazpikD17rO1e38n7CPSsyQ8OnKYHzqyyGPqHSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMGGMZg2%2FcHhI6QtAoKtwDmLq1x6ra433UeSY6KXIrA3agTsIwJHD7wpHn6LjFvMC9k4TyUtX02RO7dv%2Fy%2BznAH6V6lx%2FQQ7B9JPWLTopBFZKH09eQkGqKdn4vOB%2BNHlQWDxcuBps6Vqwd%2FuFWSDdmDrTedtvfWZlq%2BU2t2t6F1lgPrPwlQ959wJUmQ7tfv4Ku%2Fuoyrz32tkmwOSyi651EZP1gX0nwX2lf8ZzV1YBw93TGQlBB0XRXnqvreriMXlWAaKJWDdw8tw5RmccTajUbs7wGkJa9%2B43jUAJPkbaCX5M%2BYzG2ERqrSsMyREim2UWLWCp5zXVXJOCutN2QzD7irPy1H4zc43CAGRuItV%2B6sXjntv4mkAh6TekaLvbUgLSELGkkZGw2H5Hg8HJTSB4IxJs56HF%2FUQzfr2Mj6dV0pyxy8wL3ZauKUkeL7z5%2BoFNJKRVvwQ%2FgI%2BBVrh8qmJC01phZrF%2FSPUNTbFhWADT1oxtZbqX5s79a%2FabFF0XCVXbj3eV0ndp5Xo%2Ftb7VLiqfFZImpbqcz95%2BEZ%2FSrtlerzfd2nZM7amqaR628aYm6YGh2gAH4tRCJIWssxO8cQoBgvYO95iBmYld6C6mJrq0gyhKjHHLJQ3sqOSIhxthCdravS%2Fkr90qy%2F0JFPq4wzPTkwgY6pgHOLil0xAHGY4hWeihi6h3yU49ui9Bds8rcUnxmcgUrGhSoqWV2uA%2FhW1ORM3KFj%2BI7sIYjOeY8jGBML%2BZM%2FQ2XntkR%2BSvHiIVsgCoZWDIFcMnzoGB2xNw%2FU8g%2BofDsAgoro9i4%2BLhRIt0kZvM3s4rSqQ%2FOCMNLavosjHQXwaGWXX1XkGSSZOlEqxoCbcDChI%2B1YwVJM3CfEs0Q7Qtwis5HE1Nk4LEZ&X-Amz-Signature=5114b0664965fff845b0d766c21aef851b0873ba6cd516d5a667127cd430b9e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
