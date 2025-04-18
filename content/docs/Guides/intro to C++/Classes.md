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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KGQDZNJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNYpsKV6%2FKnpAfPSqJqzd14feP9DjktLqU8si0c2PMgAIhAKM2RIn0xZc2f96wJBR%2Fx74KsGrNvVqyUdp0keHpj%2F98Kv8DCHIQABoMNjM3NDIzMTgzODA1IgxIqty4A%2BVoL1p2BnYq3ANQUiaLColW3mgej0iUHAjvKvG6ZnxaIImLx9qVl0LB7tp%2BV4UrVt3E%2Bt6UojURkdhgqHemVBXKlt5pohJNDL1B68bwnr4GTtkw0dGoUHFdknSyFh4jnrnYCHrg7cul3vzeezCuw0e9U4t78otnwoba%2BZtdMl7D0kmx6CRrWhzisJ%2FW%2BuHDPysrCNdx%2BAt1m80Y033oQkRvpnYrqYdepj7Kz0NSb1jBmTUU8tj9sW7fyNuSmH4zlI%2BaAQJCsBLpF6BxGaibt9M1izH7Y4P3IDvXJyOoLt7GA3JVeSCTLq5qhkNvwV4c6qFEu9Fs%2FWbQVE9C%2BOAohGCLPSvw6bpWEHmbWkhBra7WeEAi1wMbOAuaSgDBUWZIYZSe7%2FQ0FW4CqQ9RXY%2FkoLwDjRdWrg1IBR%2BoL3xiClIH3aX0thoCjVkB3yzg2lDtL6jry94mY1peSYh4jGlgYVmS8SwE6B3F0HQ8EMyJWeHGCrn7xfh%2FzBC1ml5V2vi5LuC1JlPEhEhW6SzJre3KzMr%2B8YN7vypf6hd3MyLYvV1H6Vh2DQzcDgSS6e%2B5o%2BeoqaFsIOsbFfPizvDoibRxKSVN1zndYv3RoN9mDzjsBFWDg4PSZmTDk%2FGnhNUS4wQGh68fQy8kajCnrYjABjqkAabxTItFAqXmkwZ%2BJ3MHXLb4tjyd6S7IPLJRcJu2hDOp9HZupwN2wl%2B8SrgzAxl6w4fT3CScUztAwIHOCdhBmoBfG4PVcqM%2FGnakd76OUFA8YGua%2FIcEnRFv0DYH0iwdOgFrwDdIaxvo9VYJveKsoxylPfcdGI0nJ0NjitT%2FGk8qwyTWJ5VqXq9Dznt%2Fyn1zEK8UL2O%2Fz4zxAIj5Nf%2BdTAc9B3co&X-Amz-Signature=4f72797c7999f49e452bb7a3749edba3807f15353ddd283714498e2a87580018&X-Amz-SignedHeaders=host&x-id=GetObject)

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
