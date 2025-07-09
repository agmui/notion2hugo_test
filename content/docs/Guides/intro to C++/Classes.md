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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W572HTFL%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPbKgbh%2FaY5%2BJjk5WDyksI2QOyKpyllpBI0Tgxv%2BX0tAiADsB8zqTtWXtqjarMmP31No5JWWcV6SUMEwmUGhvNCnSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmPg06Dc5zdThhlzlKtwD%2FRxSxKAptgpjgAbCt%2FbWBtMa5traO6o3dgjXlbNVMupsV%2FXkUmudtMO7MSHMUZhKF%2Fn9QfYtkHnjVIacRqc0AvRDUOP7HupNC01AcL%2FYHpSXuLiJNZlYgCYh%2BgqahJEMCczVO9wRh5znZ%2FvXurkIG4aJGDOHoKmVAE5CMsEeZVq4hhHllP5fn%2FL%2FvJkQ0r388chH%2Fq1VuheLh3eZ%2Fl4sNprakEc38%2FZ5mNkNEFLSVAt9OcGNySTlQ9Z0SVOQ5yamfTbD3nJivXTckJe5%2BFFp0MVBOdexot7rQdvd0%2F%2FTQbtQdG8f%2F9ADBr9W0zl0EpAj0ufI4jxKqQU3BrO4AMxVWGwLhwzoIWedj9%2Bkdok8E4bFJfPAlUV55LVZvVTCAIQSiMfJpjQXdAFpx0KywRBIUkncg59%2B2Fa8THkkBmWsl61yk1lSyM0GBiE0q6aIhp0yAI%2BuCHUTx4HlySmY7WXnTlv6GZ1v1cHqI%2F4%2FECh%2Bqjf9yIwZcf5WMudVVI5%2FXDsNd4CuyhpTcWgJ%2BUHFgLN3mNGCC4V5Vd7jG6GJw6B4Y71WGRZXt6MJ3XCO94HbUeO%2FUtCBNkvdcrvWKE6WgNAFSqZQrPj3sva7MXN4LJ7Z%2FZ8JwxTkL7iEt8%2FTksMwwPS3wwY6pgG0iNWv7%2BENkKlx16aU1sLbxG0a8415CK%2FZvhWWRp2O3xe9G2h%2BRflZX4GSxPJBYsWJ2spVPpT5m1FsGk5lX0jrMWa3FQydlZanizKyTdnKvRoCWEBxlk%2BLtFaMHDwjXk2N%2FOElpFQf2UxvKAO6CAO7HgEN%2F1dtW%2Bii97SiF0VDqv81Ca86gXY5FMpuVqEvHpNG05sc81gCpDtrHA0E7zxyBH%2BWCupC&X-Amz-Signature=a3a94bdbf8f77358dc171ea3042dc09cce9341036b832e8b6d470f94178d4ff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
