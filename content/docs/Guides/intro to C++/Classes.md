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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642KDDJOU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDYtbWi6NkEn755VJfp20yNPqIqo3fvFzzjGQp3aK49EQIhAOPIUKw9kOS31dPNa1SqoSCO7kOou11kQvprMtA5IWMGKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2MxdIg3e6kMdu%2Ficq3APZneE66K5sFRm1EFFkHFKQpWEyg1QBv%2FZjjR2Xk%2FTafhGkrqTxv0Kc7IpUW%2FyiJJpFW3k5NqegAZj80NpBlbUyj5UCIAtoFsdGOTc58nL7LAxRgLtMi%2BAfo%2B1PbBKootiKRyoUw31HGZOXiIVJtrXj0YCHVARdbOe4psEHlMKgVabc7iHUYKVw8tYHAFZqHsea5Z0%2FeD0n5Lahp31BVh8kS%2BJ%2BXkjRK%2Bu0ojPUTFKWSUDBeAywOPFxevp2qulUwgFtLkxF0GOLdxScWhDPNWCEGRY9ZnDAjOiO%2Bnt4j1b1Wr%2BUSmap1Iuup7Kn2TfyzRdC8vLoWKBlbxNzcR20m3Wl%2BUG1lXBSAvYoLZH761Y1fbmV7pv%2B1iHDTYGH42duMv28XCdphv9hs8krMazIzEv%2Fbij%2BlREbizTOsKI30RpiDl%2BYpTS%2BvK%2F%2BjCwed3lFbrrT2cLHFANCQCgVqSMp10tr3v6mOd4spMphoBdHkfEj9pgfyEgKp7EY8PyuNTu8W2qgOM5WMUaSS1lp2%2FKNtbzpfd%2FpvywAQzajUtew07rlEE3i%2FMlYdkpMLIPnQXVxPc2uGjP5ntDO0WPJ%2Bn8yjsRZAc2dJPBlnfX0xFLPel671a9FqLIgRxyT1IrhJzDgsMzABjqkAXX23QmyasaU6VQnCOOtnkDfvjqn5JPCyYddyav6drpA%2FqP0rxkV21QG90HUvmEOxkRSUOd0lKaFMD1TYuzzUZ2%2Ftc5YnwDBQIQf2daWKxpITJ6YtAF1r2CoGOQG47hyVWBhXpqDASd4LatcqJCb4M2Atze%2FhFkmLxsM2J60bItS0Qm0lDpkto889bGyHOG2nhQ0N2QXMpmZg04MtU2cx8h14AHS&X-Amz-Signature=397c5b6d06c40ed1271fc12859c2ca1700341293c0f3a61b4431a8886dfb68cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
