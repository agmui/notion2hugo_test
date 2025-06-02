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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPCUT3L%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHbwty0ekIMx4kDW%2Bb7y4KCEns2r1Bc5%2B3e5fXBUsOvvAiEArHGBhEofp9yElhBXjdNC927odPIgW%2BR3tgan%2FSZEgCkqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFh5hfVPKLnntmWtrSrcA3acfaS2YoaeOLLGgFCv3rW%2F0%2BEEPJqds6wUeF8ygdoyezUeletMZRVrLYW%2FHtI8bDe7TqOgjcsuoVY0xmHxDVFPQbuyJmOB1pb1RJkkuT2PHbgduC1w8nxAMjMNaj%2BCsnCWcCTSSoACpFTiISUGU2DvXxUUMqwXQJzJF%2FakJa3GISmboEAvZCUJvUhqLKeFnEvU6E4CnSWrUy%2BQLXGwyjhmCSu6kINVZ56rbNQrYdrV0Maz6O2igDcetVkWJQLYWVj6vvOVKEA4na%2Fx6LLhBCj5uCw3YMjwoxA1JeuiiIfqazu2y7BilmnRbGb8oxu%2FxJLb0yM9HbzAJGTNT%2B0mSTlRN9oOxj0XU5IKlzP7Mv5xgtPZYyYcUoiaHVQWHsrjHKm4k3Mvg2kEZiMCxvqjCTYnGb3qyAlX7x7RrT3tdMQFYqjPxz7Q83MPuTX5BCd4wK1UY0NDUYOYmVU9VJCRSvYHRNglj9UflBbtSGWN47HYHwD1LfC50ns0cYVrotCQ%2BIn82gomVMmmd4vBXaCwK792f7mNrQXQLwwLon7jbOYpq7xh%2B%2FFM4W99LacC6OWiY0FMyXHikqXXOHxHubw5TMQDPBO5BWJZUp3qiveArhmSzmOwKEQmWtq3JztlMM709cEGOqUBP6EOq6cYwo%2BAraD9t4R%2BYHswaLA2j1kJ%2BM8ls27w%2BXMEs%2F7zhuO%2FCI0ei3kyLhZDr%2BFbCFecpmUqGbeJoD0PKbO%2FstnmHMR2Gw4QTHw2Uq%2Fl3EqFodR4jIgSh%2FIj7KFtpqKVMFUfP25rmbxVKcq40v7W9Yrfe4VqfjGbKDPnm5%2BM%2FlUHVIyR7IYN4txH8E2sWB9huuybD4EbHqdjy1Rpg9z2%2BtUX&X-Amz-Signature=608015c830d1385ecd9aa001dd803ea2f2907e9f98495895f3949d2709798137&X-Amz-SignedHeaders=host&x-id=GetObject)

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
