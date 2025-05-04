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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHHDH5V%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T110244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCID4IHhZGAA83TCaJvGkyJpKVu3GIuW3Z65Y%2FsXo%2Btd73AiBO37grpkcIqpJRMknOwwZC%2Bjp1aBra3zhNAVPye0eJSCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMTwFv%2BNWrjWTXlAKHKtwDHJKPF8xzZajsmkONFC9GU85ubfFzkf4wXDYiOQCGMRXD5ceRit72GFNM3mwI40mV%2Bu4jW2f8s4tUXLmL45T%2BDtZvUQM9BdknElrmX3WZP8p5xyHPGNQnO0tjYgeYcmmLLZvR1u%2Bd5XOSIjsUvmN7JWt4U99jiViwN%2FNyjD%2Bf3ofSc%2BmDQy%2F04%2F0KkfHvRqeu7Mm0JxOLIE3hkPjRf%2BUCtkAKtc3lhGuLYsVx5xsUr%2FjK%2BMxeZ0r3y%2FDCetTUadoSmxZjOOTxwOiYIDRnE90L9FqZEDNb3FjsWdwXwP4bVjGXY5jkFIvlIVXaIYbDidYt09ioZkC8HT%2FyH0mdxDW%2FaKOB11zo%2Fr2bLjOMqFAY16rb3KfaAAjB%2BS%2FMJGCfq0MdhumS0x7quaKp1z8Ui%2FJJaLymIM4U7H23rFYx%2Fj7BX2U8owg3fXRMB3U3KNkxNj%2FHvS39sduHSkZj9n3JWZzNLp9EPb%2BbuNAbw5l1HK%2B1WWRqse%2BNcBogrcyCy8k3m5EX4GYNJ5x6h8OXqXX9R0srx1n%2BH5fEdKvLWWEOrt1mUmH8BInTOEU8gQKqUhYg2ou3R0wI%2BrzXX9VNybP1A4nqplbyJrD%2B6jaDvjV4ych2wpt5qe1%2BF14TdEZR1u0w64ndwAY6pgG21g9XCfWgS%2FTwBgbuaZy%2Fa7bRhrWFuKAEGhmgQgw6KqKBrq3bMrJnmWdulZyRRxotAUd1jHxPpoIO4Bd%2ByJ53NM3A02FcaB2EqaPNvpA4hGAS1%2BdWzlgi1kpeb5TxrWjYEPkXnwTRgM8eXFhdpndZ6rCb5B9ZpZE%2FVVQwOW6kJc%2BZ%2FOSgogSZnpFni7yChx%2FUMUD0c1aivCSt5SfLA9YKtY1LLK4O&X-Amz-Signature=0f0731291ee12bb2c213f35e5a48cc01453b5b9e2c6b6f9840492658f8409070&X-Amz-SignedHeaders=host&x-id=GetObject)

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
