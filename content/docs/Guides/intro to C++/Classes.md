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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IXGKBBI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFz1aPJ%2BVmuw99IbMEAKHPKwWDCaCq8V%2FrskUlt%2BXznSAiAtUm6bVekNrbis41mECDtiUF1zEigH7ycCKTPCg6mNkSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8oldwbqgGNvOeOrYKtwDvfFq5aELGWNY7pGUQjgsSY6ouPf5qsMj01V2YB4l0Lmr%2FeTbuwbC4QSWmNCjx0siZwf2nIji2pk6q1N9W7E%2BP46DSTvhNpot2GZK8RLuq7NgET2luZmrlf4oZ7F%2FdkA33smRQQXl2BCKEjWtYzJrmEIpyKESuclyL%2F4rQnBW3DALHk7EwP67lA72gL%2Fto%2FUg2ZuADjyPgyZIGr7Met%2Btel0hHA6LoMeWBu81CaLKVqcPC%2BXL4H0vaWwWGAVrPsHY4rXsQ4PP2Qja7%2BN0Kx%2BJUWFJxZYs9Krlh%2FfSs8whly0cHa2cAZeMyL%2Bk1TcNrZj9yoYt%2BEIasbj1u6MizWQL3laa3b4wZC6Bdz0nwXFja57EY4y5fcjBCUJoJJVm7JP8bTKtKnCmeuG%2Fq6%2Fd9lvBI4WYeecn2W20tnIGfrYTI3q6yoCri1B%2FcqjXlbQasSMT0Zil8Gg4isF%2FheYm2m1U3bAyR7J0iUj3s512Oz4mFJHXva7lQ%2B5PAOWYOsQ3Uy1jxasZzqqrgBitq0s%2BVBEiJdvKCjbv6WequVfIzzU5Fi%2FGZtVtIH4G8mNWAUxtLJIjlQkFbzGeX%2BEvjqo9%2BFyY%2BUJ6vN4JOQLKbNFhreIw%2Fd%2BzukH%2FOjOkWHnjDskwtPf3vgY6pgFCT1kA3qNVTTDM6S6xCjjpd6Fa0cpQH8Xk%2F8reIkyZIoZLWWY65P8%2BiCTo1HJdmrCjKCPGR6c%2FHtUK0XOvR9VPcn25aogJiuEYefModwrC9s4Q8zyV%2FTTdNdS9jRjGBEufAVBEViCmApDnYKdne5eJyhvJn6Mxccu%2BQFlVsdwsmVBqC%2FUSPd6lzW11RLlC5CT1hy5IuoEYE4hIq7vNMoX4xmK0KXlK&X-Amz-Signature=ad11498c0e6f62a6f72a03d31d09e581e94e7727ec68be5fa1702f87320f6f86&X-Amz-SignedHeaders=host&x-id=GetObject)

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
