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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634R74DI7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSPuiA4AyQz0Jqxu5ou%2FxWULY3tIPatQCmiedXk3Cd9QIhALcW%2FBFxGAb5ZA1Ygmnh0JNiO4%2Bakz1fa7RnW5tZaNYOKv8DCFkQABoMNjM3NDIzMTgzODA1IgwNUV%2BEjkfZG1XuZ14q3AOfr366F78FZKQwvJISDR1w7zRccbjpGPhQBHYlJf7%2BykCqWQ0x50HoTxPXdUiDoQY26k6v9aVNBpQWHzJFyZkTlMuWFKjvIqtlPKCY6Lr2VJIEmec%2BwC8%2FVhQ43%2FMRV9QNy%2BEmvsQhv8X%2FPD45Ry2gv1dQE1xqGq5Vp%2BowzkS4Jb78VsJiv1r5LvHcAWu828LfCJjvtIQJe%2FAILUkVCbwkQUPidGT3KmM5xFz1j3sKncAbX2Mj3xJ6JkMh9nEToZWuB8sdI96SmE56RvoNkIA9mw9PeOG4rXNBDbj0ZW%2Fp4xEZjZe3zGV3mnsZtOEkVcoQX1yjN1jd63jazvG5%2FWgsp7hpBKSezvt7IjIM88gcSmN3lpjooZ40WzBOurBi%2FpYlH84MWhzFmrA5YJp8ONifS89Y34uKr5XBbvJL%2FV8HFTMU6Xuc4IPrQ5F6eWzSHGnP%2B1BWGDkKh0bRZMJEnDVIul11kDR2BOzVNMb5Z4ZinJCKBHTjO4pNaZ%2FNDvJpcxJs7KmoKIxdjE8v2Fu16mvNbt7XjK4wH1hFylVfSLwV5f37LVm46Wqs0i%2FYszp44xd2U939vud1cq9uNEK2xKs%2BNPmvS3Tr5sRVAwGsGLeY19qJdc4pkX1fyugfyjDKopm%2FBjqkAXs9YsR3kmXfXnN3dt4eYJLrTjk44lOgNUOrSavl2m%2BD0bJWEe%2BOKs%2FXeFHORteKFuzEhgD0qZF1GcvXT10fQBsfj%2B78l2dARKbfwOx8%2FePcuqF5N4CV5nWWTxuagJWhUN00%2BLZ3%2BGY7MlzawSOHCSuySkn9heblyBHTl5QHncrM9G%2BngO90N706NpMnLEY8pI73nYW2vR3eAnQI81Zs0ro1WlGM&X-Amz-Signature=fbb697dc64aa21ffdc8001af8b19b790d31875ca5bc7d903f1563f661d24793f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
