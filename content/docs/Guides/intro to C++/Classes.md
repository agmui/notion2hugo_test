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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3MW43B%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIG06soxqfOjiTR9MonF%2Fc0VFQQM82W7LTi9pHSCw6BmkAiB2DUczADMCwaJWZvJ9Ar4Pt25K8HIZV%2BUGtBf3eN0a1yqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvi%2BNb5kaTvzYwFiQKtwDaOZx2sKRTBi7ofOZOnu5CzZccSXAqEHChHv06Ea6egzk2yqV%2F%2BC3ghkdK9G8bHm265LsDGEnKtF1fIRCvn2ZNX2DH9d2N0NtUIpvCy00iTtxyarz3mVEcdAf4r49iwJ5XDO5zn7RDBxxtl1c%2B37DOOmZpPIEQUYOC0tvSDi3Prxgz3IJpZPMcbGkyA7cYMLKIIdg8oRYHJPtNU7mStBTQm1BNfTh0%2FG6fCebmV5YJ87MkW5cO4XhecdgO%2Fw5LllMtLSi4AS5rO311fMiD1Ecj9gBAO7x0MljNQjnzpiWuXkOT4%2Fz3bnkqbesJ1xhKzhwpPfo%2B9Xv646MQwiHkxNtFSO6Zs68TQmCjHnkhO%2BigSLnTONWwnqGls5I5rjYUwELaoxDzG962vzTae4sXUAZlPLJOd22yKkNBXvkyxmRYqEokXHBSAz7hV0eCCTgeoSdJ%2Bw18WUkQwsJ5dUe13zAnHvEF7QexsQCWoNYRYMTZq1oTjP3F42aGlCUFJUocBqiCYix%2Ffx%2BKKLaaYYJfELqQOxVMWr7F57qSqZqu4GjnN%2B990X6nDR81koBT4LH%2FbRa2a3yrp35I9q%2FSDTXFRFoi5%2BKIBVPE410sTPPvL0T8tAtmGlzdpTS0cdQ34swy9qVwAY6pgG9snv1aLCK70eDDQjscKEGMsdqOU5YlCzR2iyAHH6vkrLdiM%2BpJSoQ46C%2B004SpJIp%2Fr5wKoPD2ssJ3t7HA6RTKK32zQDwcNKv%2FJE93w8wgMUpr9Ymf8ppcK%2F9WX9r41Kz4bP4A6fvwrDDY1HO%2BZK6vN3FnxYcVMoZt%2F95hk6Adsx5%2BfIWNOmF%2Bl4I%2Fm16NIxU8iyUMk%2BQ%2FPAZxpl9aOnF6g%2B8Rpyd&X-Amz-Signature=c482d63cb2e97a596275dbb61fc284e79c1a5a1a9e46b9db93342bbc5790d17f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
