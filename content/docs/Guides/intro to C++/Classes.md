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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637DNLPDE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEhkdWji4dXZJagmBUYpJOLCiV4wduAGkGjHpBoAEFkTAiAbgnOOHmzrZn6Z%2FRsijYEgKh5LF%2B7PpXCe8wH0U8MwSir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMRt7cnx39xHq25YcbKtwDgWj50IIVm4XPWy6XDY%2Fn7syddA17jEVZEplSgO8vhTQxThQDR6n3Qy2jlHRMUQoYHhIY9pTJ7KBPy3N027dHlzD4X8A%2B6ftCnZh%2BOeUxZW3cnk%2FrkVu2eSnnMFzDBLJEMU8ZCAaE9w6Z2HqXHNjgEYOC2tUeCmtaEZP3mxEPqLQI7swCk58CAO75INFQWVKKL58Bph3xMV7Qf599iu63WA6lRhZNNv5dUL4KVcvxxKzkj89OZ6ryUjFzC85X5O%2FK4dElsUSjr8nJLN1xVT7RiP6Go2swigNcHE84vEVtv1GBolbdpbT%2BCdDM4aSS4sT79TYJyAISdYRa6WbG%2Bx7GlTvffIqk9jcPSmDZM%2Fkhe95VB1FbON7LhVaRyDy5vTxotgAei0bXNrAem75YYi69Y90k0oHGyvebFxpOLVsHV1ZhERCM2ycxQKADcvTJnXyPy1HUdQ4lHSUBWgvfd256za9UPpTxNFPdIa0zGOlENa17UhtC3oGzyeToQY%2B67kxl62COSOvHHnX3CJ%2BqMjHALZR%2FFmhqDY9l8pMEP0Q3S%2F49%2Byi6nC5HYnRfA9WU0reILj2Gb94lffikiaBKCP6%2F6JfH72NHPXs3Uit1%2B9y2Eqzy%2F6TAM7SVlQJsmncwg7uWxAY6pgFYvT44u11kBi3wljA8AwfEsiOh9VVoE9AMsIwFMiB9yvr1kWuoftLE0VQqpnMCTjSeij%2F2XpYmzjEDAM6l2KTVoC36GPUQvhpsQwgDdXBKuHjr5KuSTemEb3zHW1RV8r4CUJWCrkU15X6Fq69VSMk8b9bmmFkG3OOWJDGuo5MGq0V29C%2Fnu6EPs8ySWU5Xofq2VrZAh48jHzN6403cn3Acd3s%2BNDSY&X-Amz-Signature=7a6766f1acab67e56a185958fd68105ec9055884e2d7ba972f2dd27ef8b81435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
