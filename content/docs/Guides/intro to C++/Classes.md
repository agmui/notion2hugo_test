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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG3UIOC2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfOgZuTbp3weFeNy1IIT5RFsQKsVwa6jZxIsMbInnI5AIhAP9gnZHfFdC8zgqvCbA4qU55rQOM0JTN1luwUoMN6BZOKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHYm5BKD%2BMdeJ6HE8q3AMpvKQTSuvpICMuhsN1o5CCg%2Fu8dcBNGP8%2BFymVIk42hZerWCJijbvc7kAVeNj3TWTS5b448jmexUy%2FkQzYYXnTi2eLRjToe0Aq2ARpQM7rtDiaNgRZonm0c3qXfugWqZgC%2BDJo2tsLTtD5a7hAmSAGW0jNz6Br2NY1N9VMHYUlACSBzhe43GVyHxZ3qFi0Z8JJtqB7vYGglrhT8Bcc4slknSTX0xR8z3ApOkirqbXHfW9hhZWYGVn983zyeKDhuomK8Sd%2BPVqMEzLd9ozDPt4%2F1DyVXp9V96KDXw1VKEpOOIdqsOaXjvsW%2Febt1GM%2BrAKvOcDhgDqzsQkEuCpA7P5QKqM4dlNxpnbcThSYpNHMZv5FPXG31ARuGPah5MvIrYNsok%2Blt4m2yeuFNLOIvoPJo4SDRCrG48sUkgLYiCDyApcib75im5i7ZTbgVdvv%2FDpVNA3FfCCszAInrrZACRSvNCSVu913MR6Irrfsn2%2Fweu4jQOwJmLm5uM%2F0WqfuSqQri0p2kYo17Ph3TNY17P3f3ynaJse99vgc%2BXtYk57HxAkB2FRhiTdz8BXcqpKS1%2BPyzJmoGcTkfEtNVo9Zs6tAoCDW%2BNMgfKqsQkbV%2BEGuPqTNwmhKYq25%2FpBwXDC8%2BJzCBjqkATjVD9lnnDzbAQsvHVRs39dGmLa6aLbreyOgbH%2BKbNQ1hoEQoQTCfDVWyChrUW8qJ%2F67AgbXsyhgzgLj9e7le0VxCMdiCR0c0OtOJE5B7%2Bl8lgCM9IbP3fKmsTXMOrJ3C93yFjczzmIOyakU8e%2FYYl8Dyot1VbCYsOzhvn%2BQO1ohQvW3XA0Jlpwf%2Bxb8mW8UWGHi4dPkXIWSsmKQulTPrJL3hwEY&X-Amz-Signature=13403317889902cfa079190f5461b4de1d73175f8bca5dacea7878160d2ff653&X-Amz-SignedHeaders=host&x-id=GetObject)

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
