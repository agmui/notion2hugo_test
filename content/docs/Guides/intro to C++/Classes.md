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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYTX4ODU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYszbQf1UpdKeAPqrLBZmRWAp8dhJsvDNu7fVRiLN1KAiAmLqgDGObnna3w9vHUW1pj1hq3LMRVcmYAZMPVgwxZjSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvTtmF1nz3N0ShHnzKtwDlQvh%2B3TKmiH5kONzhlD%2FtudXqp7FYJbw85qTZaK%2BUTFCRK1azrQPYyaz1fT%2BKKJhXBdRXQU0Kcrj8evYq%2BmtI4xSgSs81trAwW4zkDqwMKHkQ5xMq90iVg7dnDE%2BL1fdqss6LoqDOW5yicqnefAyHkUsVYlPXb8V5k1U3rbKCjLHJ1%2BdHOVHLOeMlVBjmlM0yn5LX2T67DCkXQ%2FSKW9vavdn7eOCruWc9hgdCzx3mxlAjuEtJCH5SYlUDXhxQkuuPqNBz8ly8JtOthVtN2B22XcjDcoKySLenhmmq%2FRxtbA07%2B%2Bs%2BhBSIqMUFlTbqjLCmAf7PJT0u2G8%2BrZ9pZDrJGjV9F9c3H9UxVScnqtc72SEEoFbxFgtuFjx5FnKYhL%2BtCXD4K8Tr0IUCzDfzCyUOvKNHZSyHcl6eqZPYUM%2Fb7%2FPX6g70ByidE9ejqWijE3iWPU3IozGjaDpzvdbtnbypzV1QuCcPuSsvzCumtQRpLD5ReAghe7J%2BjgWSHegUxGUCkuLyLVeq2W7kJI3GEhg6ZxJ5EbOgf1pu6lFH%2BQKDIFH0aGqBfVdxUFkjkX4GVLFukcy76Gh37aNLFZrOOV8AIZsD7VO1CliiJzThpXsn55UrtnU6BXixghXRWAwi9aewgY6pgH%2FV96xvOgGsvUSj48y9E0HiVBZkGwNGj3KQQ3xP558M5xNQLwBgqdP3f%2BmDFdqFH0Q3vUf0el0IuMIhCOlPkXLt%2ByKWkxoR33XB7vyhmbLyjA3BJVxL8Cp1EJbYxYYmj8O0c6y6zOniZOM9mToudlD1%2BN0Qu2M3aofLeE3srV9rG805WqYIHDWSICFRG9lPh%2F6WANbrq%2F3pnWO3O07QMsDbX%2BGw%2BMh&X-Amz-Signature=0fbe2b50cedfaea050d6873c86baaf00cff2de9165f0b08916ed9fa830555948&X-Amz-SignedHeaders=host&x-id=GetObject)

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
