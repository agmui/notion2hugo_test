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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCCN5VBH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B8w%2BlMloXpbV7cscMkIF11wsVeX3c0OW961MPLQoYCgIgdO1J3o4rBUfXUukLeY6sd4gvzpkJT5woxuwpY%2BYCg9oq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDEESGz%2BvrmtUSR%2BHTSrcA%2FJHjg5QZMZjJJ4M4EIhoIFJ%2BhSft5OXAsZSTmgmevrPbQZbTG2kbyiDQERtbrN%2FVM3vKvF%2BaYhQ22JnQ3h%2FWTLgVPYP989I2hoDEWiYTy8bREj8yRQ%2Fih%2BtxSs6Lbk6bM9BMGHxkddTO88%2BFRPMeD2EsqrW0aqP6Zp2wKPqmJD%2FTtdYGeYYinQRi9lt9cyJFkGwZ7oHNBs5lNMip0thNxAqXpXSU%2FuQLkpQsbr2W%2BsNLFJXwv52u5V3vn3Od8cDqp4Z%2FQnB2WO1ESA%2Fg5aTuQ%2Bw%2Foz4h9aUzChMC2Y%2BXQVHRRdfA0u13U14%2FrEVQN36ajpiOGRYFSC4zXfjyi3QKbfCnA3sMWYUasLniiP49YKB6CfvbF3CYEw4QMS4JH%2BXSBT5TyidqaUQ9Z4XoPOLCpYmtVp4NrOqKAS08hBcfASC1JG8sN2%2BaLl4eTSefvpvhKnEwMlRk6uE7LEL2CpVP0BBT4aNdwWxWiEwv8S2Qa1%2FsDPd3hxcWIsXdvkGIdqBrzBVd%2BByzzAc1A0q9Ev8NaNfnh%2BZn1o4rLWFEshj0g6d%2B5ymd4XEpygv%2FBSZrnV67KeYWczyZn66nSi9WeHXfKuZ%2FTZDuG%2Fu%2B41eWjhWyznBG8h%2F%2B2GmNucO6VH7MMCeuL0GOqUBQ0zkKpOI0ilfVvVhuOkL48WgSa2eVxfelp5icfOwumwo%2Bqzj1J8GxQCjR15aSn8LF7mvNI%2FHyARwvush5k%2Bl8SMNLrFIixqkE4IeL8gzpHj3MwbS0GPntFCcQRMrHvbF5k%2F1ebL8f10HYMJg7x9tftRDcQQLZkdqix%2FvQb1uJfrUqNPArQd%2FyBXoXTIDt4fwHKQvFjCDQCpPI0vGlLoMVHHT1A5a&X-Amz-Signature=6b07ffaa17ccf84e49e43a7ae2bc91f6120821bfed8bb75325f37d91e68deb34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
