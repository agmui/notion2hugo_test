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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNALRWOM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCXEeXBInSGbbDAuVCwCMjwIRxUMxtkuoKDr1njMQQ%2B%2FwIgFdXyC6C%2FM7A9aSkYULKHb4N9qOzBGCi5p1d83F9TwG4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7nF%2FhFwYfnYrPTlyrcA3TBS5oUGB%2F5Jfwwevbe6If94YTkEt5Czyc7IcRZFED0ym%2FLa6zg5j68Pp94fK2bEvx0idIANQ0XibYdPrUHmIIg0u5V6t20VUki9JPBCh1ceI7QkguZjGZTWPNku9AWKqzdR3wsmNj2GWMK5rRDxG5dJMX2jppOimSkLqunhkZpslfNbrDoHaYjVHKVTDrm8ZjV%2BP%2F8ftD%2Flq3678bf1LfHAoJadvldG342Fo2qu%2F5jF2aPv1q0iQAYVm6PtJKl90KcQiHMW7OiWJZApfCXTxbO%2BtiPhavPHt%2BB8zxws0nHm6xdFfGRApA2Xt%2B5XnnbZu7%2F3D0%2F%2B8ApfTwnc7s%2BQ5SKT73MjNfi8c92h7a1WZgNeFxGbmLqtsRq5oMFzXqACVZ5WWmy63%2FMu1q6pV5jwn3W2NPjiLyJbS50j8f8EiElejIAhHB4LbW2uYlORVcA7fze27a52UWg0HwQ7XMxy%2FYURrrP3FjLlivyZyN5copfcJ%2FlDlTxdo1Y6xi9LF7Tfu%2FwHTgk1HFzZVLv7AZ3pmNX2ygx%2BagXGAYagG%2FLgxmvFnhCVB3L0vquVT45wUy1jlu2%2FNb0bXby2G3%2Bp4TvnmBsX3F0V7paoseejZ5JWuSfc1kIh2MsviBt3AmBMNDptb8GOqUBNtLqm6N%2BKrqgYTCIMhXJ%2FFe9PoGb3cTdTi3yXVyi57Ho8qC5aJchUj4EqNw4gX8eatbNmS0%2BKsNmE7U%2Fx4XI3d4d%2FeVqhXlGJGmbbRPFKAlHoAZdyUcvF8Zst9Cis4uIiwCfbHjmLroobcznVf2IS%2F2Akkrys93Ml13iyxdUoo1MxbMYeuguy0WYJNYZEMRk%2FPijx%2BAbhu8C%2BU7KWIDQM4VxHseu&X-Amz-Signature=c79a1f8e079e6d1da3b5ebad656c1b02269f18a7885e519c0a230c57f0e2241b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
