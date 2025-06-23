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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ULPMCK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCBXslddI8roX57xaoXuZ3FaOr0%2Fv9HhHV3lMdL5XHasQIgJ%2Ffdon%2Fy9jjaq9w1A%2FfZE4RQkaFaRccdzV8V7E3lO%2B8qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNjn2Ir264j94InJyrcA5%2BNPWo06etcyfGDqmnFsFr6cRDQg0x3JfIF0BJPoerJ%2FQQLMEkRdt237CarIwQ78t%2BfaAykbfRHtOUGDFNHbzbbYnZswDUXM9YozpNKQleRpMChDy3v%2FAbbJ8DG1qBqTS3IST8%2B8DZ4B9R9YPPx7H4hP3xS4uXK1BqDpfXb683LwBSI%2BwIcZSiOms65fblZc6JqjS7qhxBTVKHkk5SU67yDo7inUFLyUBwvK8XJJ9L%2BU9zONBeKY0RNWlXvv9VINLiAuQYNmbIPk4ccdlP%2Fr7Bnz8dmVKsOEhX4nmy9MWz1aI0DTTyHfVEK4CBp8CXMo1wyvFLrXcCh94NYaOej6%2BzFFQlZVPrmLBaIpbjNrFJ9mxfeZcY%2Bal5q3BNPnIWDMDCVyF0H6ghS2zpm6E5Yh0dRkJDlBeQQ23aUzsbsJJ%2BSdbxJeeiLEFewon5IdsLjgE2QVpx%2BzTS%2BRmHelcEmtLoRomujZbZvZY8fJCjWrnj9DaGxGj1DtXehILgmsRgpMcYyQDJAipETZogXUe7b%2BMbQ4qUgg%2FtPNpZGMh2uuWd1W3IZjUxsDQ8Sj6GWobnTtrh7b3G2IAJghYynYM47NSrx2kMjVH217GoLpFUgnZXPM7QwH1cJCVHPOn7iMMXP48IGOqUBrwc2WReLPmXgO5KW2oYUybs2BaTo9PUkxTMEfeFHbEIB%2F4B9984cp69wzfea2uuA6MyFgV2DK7e8kJXOgm0Wws4UH6co3OjdpQ6HZ0VpwjIYBp%2F1eu7T8aF0QoSu%2FjSJ9zgbV%2FV2lie5i4%2FaZzM237OUAOp0ZyL9LM%2FhU3qnVTtXfNCE7rk%2FlgDfYlwa6m91ywOfDlnCcySj%2F%2BNn99a3k6CiXmQ0&X-Amz-Signature=b4b9de52537986cec14ec6e8fdda677ad8e85ff12b45c5a4e063043bfb269b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
