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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TJHUB2I%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAjhdxmzgJ9Xhm4XIrswJbfX8pBmQfFM%2FAz9%2BWqgqbahAiEA3gUvnHodeW1c5CSBiq0ITZUMfxSXypiv5h78u49TOaEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLg0ReSRskhU5FqpTyrcAz%2FJA7I30SIIMpze3o1G3AUmX8H%2FvYkpUEaBx%2BFDUtyvYndTCZh2ee%2FVOhvHRRX89MzDvyITaxAvL4XXaBgVbiVTg78W%2FIhizsil0BGPeD%2FrFKjkob%2BJnhAfcXge4mGwyVYCxbdeycd9d2wqFPEgij2jSKEwmP9zFr4HJ6hZU9impeGygnYcm332Y8cjdFEwT10O7l%2FfIgcqRBGxySOU3K%2Bm%2BMSgiFn66oLGePk4ywVQfgGa4ju%2BbcAolzZUmfqveWNrWoWDT8Kxyr73Ple1nAou%2B4M%2B4MM%2B4bqNksGu51IYZqT5vwc3EQarXFHqaxsQTMNGnkngo3aO5nesWHd8OV2vQimyEjVlYOSFVi8QHQsNijE1%2FF19P0c6A72T21VQWkiArjt6oUTUmtBTBjvUbL75Nh2PpArLAXmET8i6%2B6pmPuXgTkOi6cFckoVdVbBVw8F5hF8W2dGke%2BDoJj5UYGX3AxTqQcqVgD011XONTHybzbllduOSjfr%2BkSuO%2B6%2Bsxg5C8Y%2Fnee2rr9FFYBRc%2Bw4bskGCYGNaL3Lrpr4uSiIoF0YYrXgQ%2F8xdmmxRSXFjqiClCFbdh2w2davUUoCtKVDPRBP0PB6hEcXqke5kQnkTIL8OXzEmJ5crS62NMKT7lr0GOqUBUj8XKNjRceqGxOTJyVFNxa95itBv%2BhrBCPtRMVPkjW63%2BSzIeyjcL8mSromomn9%2FIWysVyJqu8L1OZrVVtI2HXDLLL%2F5hvYu0DCohHiwtr1wT7UROihYMKs5Cf4UlTrDUGl3uLkhI25vQ9lEa5kU3y84%2B9jdXJ9MjtTbpsHTCBDh9gAwnymxv5SMNX7NTH3fbmnASX9knI7k0w3uHacXR2roLUGE&X-Amz-Signature=09a25f78e80ffee8f086e6e27a4446bdf2a558bac7e22049aa509f700db58c5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
