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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EVE425X%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC0gKTdM%2Bs%2FFmkvncKcTwCvdLcMQ0vvfqmSa0VhhiK4owIhALHQ%2FVQjqIPgXs6q7f4zo28A%2F01Su1FPGCC6wxYQ9ISVKv8DCHEQABoMNjM3NDIzMTgzODA1IgycRHxdBXw1MGEKT5wq3AMkfRSr5YVUQ8i1IN6DsVFnr6ekBhGyMMs47QLcQuwVoGMSsaQiKRm7aRou6gwSZ%2Fv6DNd5veEIYYdPzFa8BgYiIyF8GWni16vLrnlyg3qhcDU7ziseFY2tW1R00H0cJXbwiEYFzrXtc5LhG%2FUwm1Tnc5V0UlM6jzIivMQg4XJqkWOfpO%2FPFCT842z2WMnKCQ3oms%2Fe13Cu7HSuufNwMquTaR7%2BYGDgloW%2FuHEkHD5LqIyYyRwlULZAe6NFfYnfqdcQHW33jMRC0l4SlWZVjzQ2OlzYfB20jzy42zP9vJxK2R1wzpxR1sJwQlSerQWrdznr5XzUeaSDy22%2Bmygr6xEGgS71kBijd2K3p4%2FdxbofFnKPZAfStD8k%2Ba3Q7qKsmN%2BSAHLMJYcVis%2Bdf4jaI5uHqca%2BZdigMqs49W%2Bpw8J1Na5gEpugazYXSA88fdtutcv%2BQ2sSI%2BHvSOYrP%2Bg7lUdVzmDA8uZ2dVuuoWNR1JsWc%2ByojfHoSO0rggTxnqOzplE2%2Fk%2BvM0ObTirdkPVOEvRyAeitkxgjjtw%2FZ6eIycn8H1e%2Fk8s8Vf96g%2F98peCrFf6Cvdpjd8Z6Q4O1K6hFPn9hrfOUHFoYB1unhZuTcUAG51YLn9EQsW5HjzxAhzD4%2Bpa9BjqkAUUwq9adQSmc7C7DGsoBwcrfwJZB1eqT5V0bL40auaFPRqgP7MJfVBPFJ9%2BMCoPAFEIQ7%2FNgyhTY%2BBF8xBrgqpisXFgqsOak6EaCWOzdwfFiBRa9smMoMinN1cIRUTEhj2djWMnY%2B%2Bh%2Bgody3YV4IsK1Kb0gV8F0%2F27JVNEbuJNw%2B%2BkNcLUldWSvyXo8QPmehUL0t%2Fh55k6oV2kHLdjFxWwYZn2s&X-Amz-Signature=e133e1526b7be3e3584104c5dd241a3ed0c1813a87c718149de3b37199745cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
