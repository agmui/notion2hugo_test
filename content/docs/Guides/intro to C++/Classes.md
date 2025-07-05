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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QE45RVY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCsA4eGZzBX%2FXa0Nd1UKAyi9iXVRmdkzz6I5X%2B7QLseYQIgSPquM4bkIHfaOeaNjmYRT40rLts7D33OUGw7xaZfj5Mq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAJTpin5qh1KfmuI7CrcAxFTI%2FIbo%2FijDA%2Fq7i5vukh5S%2BX7G%2BFXhE%2Btq1nEOA7bzRdC0QUOR1Wz5FWi6Jp1xKbTbrb6QLDX%2FERq0RK1u53pFJ78vs2QJTI%2FWlpMQMg9BqOZkJCJ6JcfhneheIigptWCjvy2o614cgC5z%2BzXgfLsvS2j3%2B9r590sihHUmr3SyZRfuirzndJZjy7CPbw%2BWcJJXtxdAQyXrZzMjIYtDWJBHG6W2RkoRhv2RPmTRncF5E6qORtCJR3wkEaZjHYJHPZOhRL7Eb3HyN%2BXlrrarOhlCe%2Ftv4DbrgYZN4ggjTHyDid0oHOxvtCvXX8vPDs2czduI6odxjVkUOLVCu38DqfMboxDmrr6g4ms6uqOHMPQz051MmXEsz6mtXu7PrOnY%2B2xc2MJpZbEAlr9ck5J%2FpZ2ZT9eXfkiS8VdSaqYHRyBPxgRgcy7pGZ5MWYh%2FVK8BLg5B23PevGAs1DwrFIjk3pot3zjkmQMv0x%2BUUqASuAoIfTmntEDJkUL4OK1N2mkA8GBAqphWfj4GZ7rO6W5WI8BKo%2BVxc3JOHCx59Pkg3cyrlrKX3l5FcQVdgI7D3PWJSkom31c9x0WJ9c2n7fREkIo3RA0fUpW11NMMwPMMKPVJwU0gEz5GJk5hgyOMMnSpMMGOqUBHqnJ71xFwsltqhcdk7mYb6jgDA8zbvpsGkR%2BG5iR08ElW6b%2F7D7vjhxMqEvwQKGQFf%2B0DWI8Avx4wz%2B6Fivz%2FzTINmhbjd74R2MOEXwjSOQveAsAIwmIXZFm0spYfEOWAZs%2FFO69dI48eGr6m%2BNK9PFkotfE%2F3ztCnwKHOfqeWxdaqF7UGAsededyJmd0TCDia9rMeymY0i6nY1xZszPOiqWyGy4&X-Amz-Signature=67ecc592e4f91ad36ad1b7fd638afbb89e1f3e7a5915eaa540d44dbf3235da4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
