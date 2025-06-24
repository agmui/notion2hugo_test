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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PULF4HE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCzJJAgz%2FHpgRDb4l5fiJZkNhwbd1s2VRZKVSsDe1ph8wIgUyLcaEgWVYlbygFBFjNgd%2BGv%2Fs8olxltJRqsJUEXE00q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDObWIjTflywvZ3Xg6CrcA2kUOszJ9q8CNnRE0oDzfGutZ%2FwQMrWMGMoRKBsna5AjSTghbAgwL6icZ5dmf%2FMmSfFnMh9qZcoRnddoGjhKSH%2B5wnq0ZU41%2Fg3ygC1eAQIBjCklH%2FvuOnRWVMMO46VBkoEX22BtRdVsWXQllm8ToroAZq1EOzk%2BsPy3cFMAeYLhSU2HUS6%2BOUP87OJtBySIUD2NZSCn4TVgDqWlSYS3aKrpg86HR9RUV1NEQ05aXk1ZXhNhLHozlSCXte0DxYj50BhjzyfMVM20BWCmMqe4qJoKYrNR%2Bgp%2Bsjwp4dakaessPPYlWfCYRwomlI%2BSsL3eLRsE015PLqrupShMbxG5hau5gUcZBxDLzSUKMiO2DjHagQfmKjVEAXR4KhNbnPuuzyQXI3642VTlF7bsPXhe35xxQ22oimAyUTdXR597JXKI7mEiqOApfgWboEbIOkrSE5DmRjn1bYICGlLeX9p9KxzVbslLNMUV7CvRy6ouKtYV%2B43jH9qe4xVDS3DiIj1CyHH5KaRbwZUtGsq7d0EH2pdPMvdNFs8om1ahnBI8ce6NtR8avXw02JtTT6p%2BZo6gepg%2BGkmqpbxkh9Ohd7PII1kXASQrTBr%2FRGx3U47k7gf3%2FEfJhvK4QJE3kVh6MO3H6cIGOqUBhvP0eJ%2F1noUdZ7fSCHR0a5Z%2FV%2BSWhIQCo8Ep6jEEaFee%2F5r27YQBMdeAec0cdaK86WAq%2BYuyYtRI29ig2hryIhoNYObPX6sgtFxgO7MdNBmlbTGYdhvJF%2BGrPtKhUG2udf1CfM28RbXVpwTUqVCFLVTJciGPy3wSK4RInOL2P0EGs%2BH3vkcqJ0A7gFBpwbfsQuXWMRlCretHJwXKe18wBuGR5Zut&X-Amz-Signature=a0315988e48867e7ab8df7f14f5af6721464cf9e6f1054cc07c079afac472b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
