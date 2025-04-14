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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656O7ZBRJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1cXRl%2FIIB9Ytm3wEFsrIeUtUjvVd9Ed5Za10v%2Fco0fwIgNURPy6L37MPwz5N5ub8sgFnAazlRdMANbbYuBdMtynoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPbYYOnSEr%2BOJcCb%2FircA6IfEi13ZC3pwsw2xTUAo6mrEvZlN26pJyywBRir7Xy7j2WoRqDOKHcxh6DtpEL5MtO9SQep8OLJ3EomylUCdX%2FkdoYQb9elk56DeT3urLRs7OuK4%2FfBuufdctUns3QVQQYfQY3lDxPaBbtRY0HH%2BvojaA%2Bjk%2B%2Fpsb0k10al2GBC2b1KXJ6hREgknCriQIMRCs6o1H%2F8rG%2FF%2BAASP8R0gvpFb%2BCuavs72yorpLvsWc8Ryjzfd8AkiWnexb9UKJ%2BF4VGP8EH6CNeXC6mGxbja%2Fz1MyqAuCXcrix4DgdqGHcL9JufF0oCeGM%2FWA8P7u9E4J4fO4nA4e4rNasoKik0IXqwgSGgNKpHxs2hvLPi6QEFO22azWiGp%2F9KHCSGW4ZF2RLRE%2BIhAadC9RhdLsi6iDAoNGFjC0u9rjbHfS3R%2FPQZL%2Fho53FLwRP%2BGeKbcRTwwYdyMO8MjIG%2F0apv00AL%2Bb5C1R09%2FQrGehpGHZtokZ%2FJjUXt%2BIMKZCElTYj8abrkX4%2BclKOefdyGlIGHutSqAlfoKXanG5fy2N%2FuBvfi4wSoKQe9rf3ZJv9nGVX4A2R6xQnfPWl8ZEtZPZyDxpM4pFXUpj6UUlPYnK8XsAIBer5QigGUzK6IzLsJDdrMEMIj69L8GOqUBdr7tpWqnJr3XM9HyaP07BqM9ZuhO3avx63DEa5c9ZAbyQf5%2Buw98CoufNbYenK67u1K9DmMIDZ2zMI5TYJAyfbOyYcOGrRYCTxqip90AiUW9fZsryoJiwWF61aIoNeR%2FxNQCmGzKdrA3lVR4VC2LhX73EiidJz3Pz3wEckTa9XZ0Q4zmW1HcUWg6vbhf%2BXyx%2Fhf46s5M2CPzKTejMXM%2FNevU9Vaw&X-Amz-Signature=1bdfe0fd90fc2505eb7ac349c33370fe62c15354f8acc4847e28fc102ba19cbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
