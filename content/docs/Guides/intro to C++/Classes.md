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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TER7Z6ZG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDVmXaGFcfN8BVKlQVRwmtu1RPetZCyDnyUwc3ccjfVmQIhAK9vrrLkooA1BJtPUB3yd5SOW7AZV5PAyCXz30XSCne2KogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw1S2XyIN2laB2bpsq3AMbWbIkFGgFEIiR2dYDTa07DQcSCxYcAaSl%2B4AO4Xg%2BqqtopynYiyq3jfkvyHunFWUmRjt96gtw2vbjvkRu%2FTGVEgYp9Y3raOhOk1lZkJZIiOfylXV7zXlhOZdbPRe%2B09%2FEAETsCTp4l9OSw5vYbJWkniR78LLoCRwHxcdhcRvG9EE1kGxgEoMOYTpbXcL5EkgWfRhU2fog8E%2BJeEDNATrQDNigfXqtF23022tiWr%2BNifYyHZH%2F81kCQVlWydxgWmpoLMKj95o7LUYIQfG4U0SNpw5R3CIZUNg6XjdUlO2%2FVyXA8GSYbcAPXMEzPCUXZF%2BZ6jLmo7mXp2T1DmS8cKjXOimVtsHTUdDDu3L9%2B9Lfb6Gk1ErFWDE1oaZCY%2BSqGJ0yUnrw6nHGzcjtqAdJAN%2FHOsILASwLof6rbhq7L2FcvZ%2FBkbD5ozwGtxR7rt0ECJp3EMgtGajMjpcolzS%2FyHSkGsMOZbK2%2FIbPve%2BXybfO%2FdMxIyWYo34nKfLzHUjiZ8hBNApVqyQpM9oIEPyOa3qmRG5OovDB3K0zNA%2F2GRZOT30%2B9s%2FRLitHeleQcWS8IpvIoPlg32GCS3vaE%2BsmjJyqsQTWDjwPIIK3wgbFpvh1wB2zgcZkIkqTx%2FMhNTCn%2FtK9BjqkAU4yDsrPbXN4EUUMGKoEGKMBXZHqjUp879WAHOlUdvOzAwmQgin%2BKEumv91lqShP2y40a5bWV6BcMkhgrBwSt2yJTExYUXU70A8DzbZ0WZanq5yosJLw%2FRMP6qOq7S1r%2FnOkjeyymfnNEQP0kwZ8I%2Bni6AP6GBDBQ519JbhOpwJDr%2B%2BcMq2rFdxP3iY3gc6ziBIeflldUTrYtOmwnGPOl72WzYXJ&X-Amz-Signature=b015467d7fe1e2295242a94de2de7580573f10c73526a471e28285d4a2aa595c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
