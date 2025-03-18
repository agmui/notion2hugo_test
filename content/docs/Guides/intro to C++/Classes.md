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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEB36FD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRmC5KW3mUH0XKTuQegOiwoRdjVOP%2FNK3%2FBQAXHlAd5AIhANs2l%2BnEdmTgmYAHiFJHVJdnOxPKxj1p5B0GzxMyXl1yKv8DCFgQABoMNjM3NDIzMTgzODA1Igx5HsysrcGKrn5YHr4q3APLJwhp%2FKXchWVqRhJfC9lcCaQVl9S3tSHNbrYdfMOQ51eK4V0Azgw%2BGqO4CUiv0Hn8MG8PcNdb6efFaIpURijWW%2FpZeajxk79KffnmmXLPzS1E0HpiS73pAqaw8zgtZ3nSxuqsKiSOcqfsXW%2BJVENV6qHU1dzzBPhHosY%2BH9b6jAUoVgdDs0Dcsrx4MP8hnfxA%2BI0vy5QjcKPiwLw3vVBIoVQKVhJdq4PxQRpMI2iwS5Y9QjbozheVn%2BIlujbVxlSOG3JICVeYFi1K5%2FeikLdrnAqPYX0MA3C3HXsd5WLLzQN1sjT15AueH2dWBajTXjycYWiIwgB1OhWKqBQGAkctI64w%2FfyDmef7uPRWXLTQdkhh1X6aCV8yZQqkhH9bhtU1CEBjQ3%2FYTQfL0vgkYbcSMur2JlcY8n3GhuSRTrcS1UmznyEYFdy5M2Nk%2B%2Fq9hmHSOEkMKLMWTZSpu9NkRDrSjQzBMeU8CGb6%2BdNUUnm4U9bVjTrFwHs%2F7iE1RuiORr8%2FHQ4Vj6c44ZyD79xipxr8y%2FuOBpfhbWFB1%2F01oVPHn9cjTpzDd%2BzSxBcbh200UXgRuv0qJmrZSf2JAOY4w1GNPrTUeu8eQD6Wf7IYPslTUrKm969NH9AlW1hNpjCftuS%2BBjqkAY9ChVPqkmhbmH7RyKcHTbSVfnJJD%2BwLgCpTT1w%2BgkDV%2BOAYwX%2F4pjdcnjcWjIkCpeqnrgN%2Fe14nQM3blwxsEgY8kKxYuh8WbQSpAd4ITLeXlHysasy5%2FsoiJsqIwz3yrTFdYYy%2FO3aazCrC8XtX%2Bh1BQ23tv8eiks0X8baHZ%2BSxPx%2BFQrGzVkd7PcavasGoGRBX4vHESgi2Cat8ABN2iGN5Z6d1&X-Amz-Signature=210691b132ccb4ef92c9f67fcaf73b0a37cced8ad4a141af02811883fdeb7ae2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
