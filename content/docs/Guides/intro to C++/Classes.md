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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GMB7EMT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTxzkEoy69q%2F8CTjJESkBNM%2FJaQSX3BzaIUiBJKX0AGgIhANjkWEACNPYVb0al5H8x%2FAc25YigtLF8RO93ToyFb1J6KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTUh8x%2FxRHfeaACegq3AN0kRWvxq9ZLMvAmEIMeodFMA4hHE74%2BlDew8EJJT48NsklBhdEcQzAX4lQDbCcbR7WK8JgCwEVBQIubX2WemEPUazwdPBcMwbC1g4Tezzne%2BM9qsUO309KydnIzqCpSclkfwbDuphIMy6iQBSwKjxgOAR2B%2Bsmvw%2BtmHabJz91cUEvB4geFluieN8TwjSU5XpICGjYBzhHge4J0sahmNtLbSyWG%2BqozeM8O4uk7Y1ao3jyHaJN4zWeeESOI%2FIeK8pq5vr8RplDcN0BcdigfhXqxsShHAxpC%2FfvPD4s%2Ftrmo%2Bd3oibuNHw1Z2%2B1gWxFnzU4J2hiUVqc0kmf%2Febm8mHH6RVPBQgU5U%2F0h%2BzOGkNmiDJ8gkx7dM4Jean%2BHoSqY4FzVvuj2t3VtQn7Qm8jSVdB%2BZqHztPI%2FdbwL6NVCI8eB4xHMNByqbxgM0oy8EhiR5vlf6b%2BDHN5bhVLVqKtor8OnAOMVz%2F7qiw5tcHzgOOUYFx2%2BPscN6ZWGdEBaDSceQ5nMTVs9fmhKAJ7U5jk8PyzcX7R3qNcIKzIioaZC7MxdT2nY9ZcQfBkb7mpNSG%2FdX1JMWskhHgJ4S1g1USUB3qOGV6etSscQf1uCo9rFyOJz26enFfRLudGfzB16TDB6MHDBjqkAff4whAsea9%2FEGqrUVqfAXNjTbC2iXTX0qD3VOHqvJxr1g23un9luX9oMqGgZv6FsEodt0SRHLnQC%2BBWcSi0hEolLyNNbcvYBUub5lIZbAD5Uvr7z9NTKlMLjjixchxz9qHNHhwHQRazKYaMmB625wk1oj4f%2BCsRiyRPBnvmFzI6MPzodVkZ5Ib5NWhBr14Je1y7niKZ9DJ6foacqTZOBB3liHqA&X-Amz-Signature=8f1ee82e2c019d037c091581a45b68225724bc937f9b44cee47dc9c58b6c4fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
