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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667COWECHX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoXiRb8oAY5kuBTFf8F%2Bcwz0qaBKCJ9UFXGCCzHoj2GgIgAWgUU6YYhG%2BjCKgVW3CiL%2BFgqCjb7cOeEx5Y0jdSoC8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAIdTOmeOZF0D5p%2BvircA5qL4wFjf9ze6KY0msEVgKruHG2nas72ilhDPoMmxdHsNHzytw%2Fsj5MPm9jkw1yWATIcMb0nJYQja%2BasUEnFbRlU56pf4xCFCeFCdB35RAcWMeFNFKfcApAd5XAFbFekFqFT1WKjvCQe2FB0A36BvnwWFu12srbWOkwpZEN77HfrCbHawWww%2FsJlHsCn2c7OQ%2FcBM%2B2edZ%2Ftc3vsDqOvdY5rjKsVqXOW4mm3BbE%2FjUmmNjT6%2BB09NJ2bp3VO2cDlkS%2BL8dWUmlwCdbAhMGEHtr2vV7V28ewXjHio2UUxtvTxczZzJdKyBLWrkCQIryHYYGIcMqqg%2F868DJHafJ4ddcl1Sl1t2ITsvjVNzduwwi2czxE%2FWF2jMdorE53Q72OQy49xKg%2FQb3VMHxmFaf2tRm6ugPB4wJzzs70HdE6LftS3IbvyQuo%2FdsuatKbEyq3Z0T822V4mcjszEJLFpW%2FV6gK7nRTAU2HK3yYeISlUWTzwg%2BK9UjR9%2BaPCFxM1orQqb0VNm%2FWQUh8n5k5PN1WMJVtY3gvp%2F8JyknUqK7ZRUcqjFsDV1y2PGVSn8KHLXkd%2Br2ttNBTtffT7zQFQLjc068yZkAhltTUidomQR0W%2FK6y%2Bnw6N5KWiJ7fDAN9WMJLcmb8GOqUBuH99ujyO2X0jgfG935%2ByO3km2hrnMI6Vz52pwp%2F1fpHnqo9LsM4HY1wgTUTesb6eTTWxk372t0Ga2u6f1v%2FMcNvvmNTxgKcdImytpaDy7w%2FexMxx8yp89nbJgWLbO3zN2plCAQA3UPMwtGluGG4MOQ4R2XZz1nwmrusXU3kIzq3ycnjlKdspNJoGKGstVllufDz7QNXE0R5r%2B2jFyhU0XPG0DNHS&X-Amz-Signature=e8fd57b1886e629a11c74569408edb34986aa000380cfe8de7db9c2944ae5c38&X-Amz-SignedHeaders=host&x-id=GetObject)

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
