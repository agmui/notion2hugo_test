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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFGWN4JA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNE%2BoPMw6RQaEBjULib%2B85iI1eYJYWyIfcLxSqH3co9AiADuZylSQ1%2BCdivtWX7mJwd6M573%2BFrQl1b%2BMjKIylD0CqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVpxDVNmhSm6kGaknKtwDEVxz8tU5Qd1dg2fSnB2GcXENd4FPHimjLnKfmFyW9b4ZmbEJMuo%2B171t%2BWxNj7RT0R8H7O4GMRAtJoG5CXhH%2FomNXsTSKtrz6rx%2BGRjhFbRqsohFhbzMrkGZA1FY%2BOMw7FxxFug13%2BUjXEw1mAl%2BwgPZNZobfhsUHc9Fkr0pZeVtQSyuuIaXmOwovVbwH8F2ZuhITtRdzCpgW%2FyzcyPNTRVbrxbhClrMZLrp2bbaa0OnGJvdOHb3%2FaZ6MgC%2FCLGxazHuDj%2BaHvMcVLkT4rcFiDiEz3mbhtSl1d3e75sUqu8O0IZ8JsnV3H7CX8t9rucYFytQSK3zAOyHpISj4k7pmaAT7lyUgEolqa%2FlhaYldf7uZhDiMQxeHrAJwgO8Z7f2ThGSfmCp0VnxNwLv9BZPp15e%2F5kST608tC5igdJcA7Qho3MEy7Ys4jDJ%2FimljC9BVluZe0bYnv%2F8Q4%2BWhFTDr%2FphCJRxHTQ5QJi%2BECCKNV8SECnJDVa0A6K3h%2Bjt0eFVW4HfsVl4Ibz4B2geQSm%2FaOVX2pJrr9004J%2F44haX9Vx0Bg%2F0is%2BTlWiTaiQXxy37785NvKeAoRgpdkwiVndufRK4Am0YUnry0dh1ztMxTVMBKI4sMqlwLZXTuQwwt%2FKlxAY6pgGP5g0aZVOcEo%2FL0jl1gFt1DwX1G5Vu6la3ZmD7XtTnhzvFRBHT5bbONbJ51eoSUhcCRdUa9dXnhabrqWw%2Fbyfq1zmHFdHJhlFrgYwkvynOyH1YZLdVTrBE7bWnNMhq%2Fw0D3G%2B1VEi%2BCj%2F0RhfiECFZglztqabVcTxV%2Flh4wUjvFMiYU%2BOjWwUORttzm7do6nqxKNzTwNnllD6Ru5bEb%2FMMv%2F6XzOX6&X-Amz-Signature=1e0fe731145252eeaec4f071ac1b7b235c02f19727f33483c204861d93dc6a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
