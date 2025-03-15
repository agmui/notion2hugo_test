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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U3VULJ3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJ0zOOsKaqPZFHtG0AxAOGZXxX8Ue9pxVxUEF4BBTjFAiEA0y2UvoUXFWPvI2r3WnD8BQoqa0pdZiQgPXak7AzLBWYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJT3C8WnCF7V74FM1CrcA%2BdADSK%2B90Wba0u%2BKkjT%2B%2FZuRHHk%2BtSOqRV8lp3n%2Fuya%2ByvYA%2B3TAEfLskN4NNecMoznvxlt6XqXKuTaCzaC%2Fn6h1kVeeSWGI96x7mPYhYZzX1FE%2BsDFvItxH6PEVLmylbuXeDrQpIU1ayYNG0ceMrkjyJzF4dRnSunopvtKbU8ure%2B2uBVjmDY1okNdR32xuK3Rq%2BTop5bWSKn3nljYdzrie2078l4SoFaDsLOA7iHj5sp77PAbU2hyseMqR8yEjLZF6iMtaQAGaMZV3KIdxNmNzS8Kq1G5XGmwCGp7egC2BSjxiHrxxnJtqMfjaDhmnjMlnPyVO5kThCgbcgzllTsLmSB5UCpdET7fYTTkUVLk8BO%2FpLQRKhXuaXJKhDnwX1g8%2F0rxDfBYPLT%2BGpOpTSS0fgj6KxUn2mO12EKsI7qIBn7QFQl%2BBM0Sulb9EWZAygTJVeb0PzCbHvBzVS5Q%2BG4rKZps6mi1sYGs3%2FhFY87cxySYtOqNDKJ0BND%2Fw5JHxiwCTjiq1qFZlZt818CcXxclWHWic6372siGan35NyLL91M7B%2FOl%2FDLmbGzTnXzDxhV5Rr%2BMZtdowQmMvLB3avtbfKiQw17%2F1F9uTkpDqFFCAnuD4Q0Z7whv8XQ5MNCB2L4GOqUBJHiC7%2F7KqrnIV2XsbsAZBc8pafYaVyRU0SXriufH2LbyTYk7O%2Bha0IJOk78QgkIiaI%2FaFnDpeyRWgNHkqipzklb2Khg8gjpfGF0sqyEohoW8cCEQSQMF5u9F%2BrPzSpcvY7MyFLSEsPjOpQo2J1j1k8aJRlkwSrJyQOitOiX6B3aRgr6oIQHeRHbnx7VoKC1qGy3X0jZghJ9M4yc%2FD9RWghubD6Dg&X-Amz-Signature=f101d803a52fd50840db3dd6b6242aecf0d036655d9f16df5f60e9836bb60f8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
