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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7T43I6C%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCRCGI3lCRFJfAWwqkJ3amZMrt1cAeTwbzzRrsWxR8z1QIgdGfOVmvo49aZqpCBO2apS4s1zQXK7ssNWtpq0QbR%2B%2BIq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLBW9FFPkd3z7ah0SSrcA0bqUOS5vuRlON58fDeWkqey%2FS26ugrOLYLcZp8ujbMHUxPC0RRkUHvpdOuoS%2B3EFt4nWjtSJeNMfLZ8%2FfBw421WYzPcKwU2UhYGxQmGVCm2hdoKpWlhBCACSKeU6N5IS6Vi8TiWzaUxLFDfkkkrI12V3FEaNie9yTYZ4JKISQdafS%2F%2Fj21u%2F%2BK%2FkkqiM6Qvi94nz5LDDKwJWLZw0KmIVcSqBxjh9c1RPhkUYGY6x89X0O2Ob0QOSmPvEJySgr0EHJKuNMyDVqweRDc7PSCV%2BEYDAyP9NYFiUnkd8ZezJWUBzsyGXxrJ9KlS8DHnBbcql%2Bse7SMNmicpcFgNUCjm8aWaVo4Nzi8oPDLiz89j%2B8pB1ve33dwzuoL5ZQfUaaq02EZib2CBsVlfpGUuGB01MPQD%2FymqNQgicUdxiRHTEkOxHjcLu91lWC%2Bd7XsHNq6MNYbQartdzxDvLCylO7NizMESbAbAe4MAVb37OFC%2FrLvXEN%2FT9onVQFMLmC5C31ZoWjv%2BgsBQ919hrUEwA80nIenLelKN0VxY3oM%2FnOKy5Wu01i%2FIq%2FgDcGKNN%2FRkG7rKCmR3ThrxepQt3AdbYJMMWJab4%2BZog6bH0EpCFXs5DiI1XIjA%2B%2FcJSvWzxwUsMLif%2Fr0GOqUByWKSkzNdmsRqPNDw0TqF1FkWRSq8DGP4trLiBBVWAxNV8YUCowgpSr%2FYNVqe7OAB5poPc1O8XgJ5h1afMjxMX5fhFB0olBtpIQAnnd8h6fOE4iEe2aziktMYGX5vqe5YC%2B7F4t4gCoAAcqtJ5Q3vnL55KqONWsvoxUR14sbvW6xDEGx9qBknyILayhqd2%2FL6jrsCpKKMDqNs%2Bgo%2F1r28LA4B3HZx&X-Amz-Signature=e2b04f54c3085f6d151c345127917ab623b7b6f387dbdfb46ab1cd0d66036502&X-Amz-SignedHeaders=host&x-id=GetObject)

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
