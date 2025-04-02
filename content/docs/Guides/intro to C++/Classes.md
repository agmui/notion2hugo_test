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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNSE52TQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFrHdZoWHTKD6wBA7ppo%2F%2Bcm4hF%2FCh4EVV6WldjBXUH%2BAiAak8n6JtKocXLoJ7PYEVzxbmOsQY3cMeuDP4eeUkFiViqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKdoF%2FmFUFGQvrrpgKtwDpITcYKSoU%2B3ndkyMxWbitPZ%2BDAg8WKW%2BjFtK6J7BF3goJPv5RJtacL0NoiXYL%2BynY2WCzscOeTc%2Bd0iBsUoW9sHno7qSie02mOOV3Thg5FtN6Dre8NbXqUXCfVtVbIXJpXzG3KYQfpu%2Bq2QQqRp9sEIieg67cVa91DmI55R%2BoQpmc4WH1mY83EmD4KHWvOuA4nyhC8IhaS7hN6Lqz%2FRrNj1U%2Fggx18fRPIUQswoMtJhTcyjVq8NB4xW39WwmP5RqOIQqH9vuOeUwFQZ1ZeNR3j%2FOO3NSDVCJVxO0ra%2FCfUeQI9bt3M0qs3Q6uwV8HHT58MRDwXTLedjJfwJUNXdYdVQEEJEnaZZFlMjifj0Zzwuncb%2BRBYmzxRHquQwVJTvpxeR6W0Jmmx7IBCHy%2FJ9kCdEL2thMqwADdGFRAm1kS%2BBy14nFUUyLJ8kg3qRg8LW2NreoMWEgZOGQskvmniBqkeYMSgW9QwUay42Grbz3heXKMOSHR3QzIPG14ycaVl%2ByUq9id6KayB0Y4jEZ88UyPyLHRrdDpBX9GksHPh8jj0nhfNgJU%2FpNy2WS6nzCK480cfW32%2BlXDwR6iif2oP1YRFisWBSpteCLI47Mphm9Aht%2FMK99FanwtYs%2FC74w%2Bei1vwY6pgEg1RL0dCU5o1W5tBf52LasFNW%2FbzFD2xvl4qny085qfjsneYyXo30PInUVG7UN4EFdP2w3IheQVq5IdhI8REDfBt8NGf%2FaOAqd6LhLsmIuz4cCoPNb74tP5XZgdeM0Lcr8fE8cJ%2F1mKdDV1OUru8By4nmdqAThIWIDq5b01XYL7hCTUPSyaZiU3t%2B0GwyoLJZR3%2Bjtg2R9RmLWygAADvEyS3V1jJSD&X-Amz-Signature=fa3aba8ae19a8b3ed6e4442db86cf354c79bbe9a2aa84bdad27fbcf022f2a50e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
