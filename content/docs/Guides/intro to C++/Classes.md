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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7JXRVP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGW9Ao8EjDSYZFB1q41xJqnFXHR7uuAJ2MJGmTLSrMXQIgE54UpdkE%2FAr7DY%2Bp4deC%2FQYZYgdb0%2FRwiN6x1DIPeNsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5ErLzwPuwlHxr6tyrcA%2B16unqCyFkTk1HybH7NNZBbu71xwGpPo3HEj1BNKcvmRpSi%2Fmdr5NWPG%2FaiYBsMV17gTJspuyqK12JYk%2BtINAYun9eBBrH3Fr%2BTMSzOy2K9iglsAhnmUXgJuOTQx1WafSnEeW8XEtUdEBn7yzI11DBsevnUrGsuBZi8yEvSlWpPITmMFQgXj%2BzjssduYhi55lT5OSTc2TAX7D6XOU11g44RSPrD1r5d8un2BzfXpqObxds9js4HGNBHdh6FhLwnjCTt%2FIeTQXpG5Qs7givDXdpb0qhYyaKF7oqw%2BQw8MGH1grnaFIZT%2BY2l5gUNOuXgiBtuveuQUfNMJEWgrXvPVOYeJLyZ6UwprBGb8Uo8hnBNQt4gWDIuIXC7o8S3b7mF8fjhUt8LkzK%2BBSEtxFwdJYs4zB2XPgF0bkEXrB4o5UlQDqWEUzAfeX1UMIQaaiaR5djrfgSrPJ7fM1naFmCRmoIvGamxh6fg29H6Hkph732PSocbjPnzFRsxSJxjrJaMdY4kdzcUu76k5UhnRsysbMkVqQB%2FH4ivuwA5Ffq71IOL%2BF5mlSv8x3dgMBfrEX3sPpbkt9xHXE47nAudslzLup2PyI9qawRd6ldnIj42ELSOl0YOvnzNdUMQEpbbML3Mr8QGOqUB2Bro8%2BAUVMGw8b%2Fa8WayKZEN2gep99DOjLsJHFKVeAGGdzOy1QWwycTGcpMhC5rPJn1p6RM6Nn0xrAhBzJlIAVEJmHXvP3bJlzF%2FWaw5QIuR%2BGHdEbffGEmZQdlwLSAhFSPOyrSaTMqSIEsjrVRuSq9BhCrzgldbffQtgLDeh1slZF9gFCcDHpktdwjHIdpL43XBXgJ9btPS%2BP1ClDDPxVdp4zCD&X-Amz-Signature=5b0fb7efa69cb61683501a788f31f01890f7180c6241eaaf04046a6fedb6650e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
