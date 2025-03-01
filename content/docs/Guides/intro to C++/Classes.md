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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH6V4VKZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDsCW19Z1%2FTzHLMTjqrWHihYmID8qoGv3S6w5eTh718LQIgaNG61q4UCJWTLa2Mcr9gogsurBEBzdzham861TUR0%2F8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErXEP7ir4wohJT1eircA7ZXY2jVf6c0CZJOPdssC2l4g9u5xwCK0xDQR5%2BALc1qQmUUhuaoGoNDITRtpq1BhIq%2BDoIne7%2ByrJqG46OvdSSxFYuvuOfbaVMOtkXGjCHrLxQ1JdZjOCxasqfIOpEWBO3bE%2FwgFVzU1DqFUANov2OkmCrR8j2blqzIdUQqSTHgTY%2FMQq2VIoFGsi669sqi%2B2vqlEALa2tg%2BKJ51j82xEOr3h0rXEoNMnk8aGIoCiQj5Ts4W%2FwJ8xC9n3UUcHdBzRO5l6QT1DKsP8vBSFmlOfZxTjf5Lhx846DI5M5Le0GIUwSJKVoP67iU9x7ZaNjKGoOtzOTcfBNR%2FC7KJOL38vG9BMukAs9w5jjeuHWKqovEPFfV8LC%2F3FN7coabC6wQs5VqGwD9HKNtSBC7NAkcrj0rmpj7zfCvhRqQzn5pj7FlJCrMzq7SeuunUxb19T7%2BVHb5ATI3H2qEyrK2m44Smb%2FK3RCggIMaaciks2PL7cdRYqWgdDTsmbD14PDIks9nHgzzdyWYrPDa4DHtuP8ke7RXMJ8qY68u%2BE4QV9Q%2Fktqrkqgkva837hRpRQ40PMjIcUXUxqITdsOAogZlnStDUjx8V18DPOr5%2FistNBHHnX4Ua1M3AALyYOiEx0SzMPzxib4GOqUBqSgWNyQ%2BkWfH3qLLiLupESTLLBJWOkz3UnTGguBzduR4NkL6DlgUNLapQZVo5Xc%2F%2Fb%2FoJZ4LGvdiOFOQpOR9aCNzq85tA9A2Kn1ZViIo8MIyaKw6gqOYE6CFIhmgyTFXdUTMDrfHyliWjm8ds%2BctRXWJXOa1FUKcspK6%2BHacONRbOx1wgbuAbYIiH81uEzX3bkWp58Sk%2Fh94CnMTu6WQTOVRuzte&X-Amz-Signature=63994f424a45135c0edb650a8ea1741c3109fe76064a8b2765228077503bfb6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
