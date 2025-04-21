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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AG7UDI4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDf5Kam3chUiPtDOO66U1mgW87I85HeaEpIT3fL8EHRBgIgYnlaGDdsmlugdeVaNuiF8FYjpl3nKVCHJ1rEhbapLWwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2CLI14n5Om9ntTmSrcA%2FvXUTczcfvYBLxiWutv4ugW%2F9Vbr1jaomSieh014HOpTg3eJMbJ7nV36h1ZVjEmUwSSSRqlddjUwEG%2Bl5%2FD8gAh5oXAFIy8476P2tHCJKZBvNxrCH6wtUybR8JiUg0WMZ4mHWTDvpJferLS7P4j8wIF0Q5AoTGgJfJACFvmCL3pu5wdf%2BaZGD4BHgt8HHxkt5yTdcoZJDS1yDlq5spd%2FcHWkl7MXN%2F2nBLue%2BjvKXT6bDVeAwjt5Wh%2Bsgl7IzhhnbVhaIZTxx4akyPVhS1AFsIY0AnqwcCQVXZRSVFsbevSAIsljKmwUnQSW03SFw1WLSWcX%2FftZpkhWvDtzfL7ac%2BnKaVEX9tMcUDuQjl3tN%2BuiXbfuy6CU4ut%2Fz42BoltEIfuHAstW%2F4FY0cKfgU3zylCRwUxeFbdCMaVk4crIqpyo6DXXJqURoIQj9YWEOwoe%2BLxhVEcRumthxqGDeILRkQmY%2F2k1s6pWABk7T7%2FFgZK7E0sVBpHqah%2FbCUoNJXmYJDHZ8Sos7eDz3FBByeokkysgxcXQ%2B8iEgLy2En1La686LOo38peGOJRV6TdJQIzTYWc%2BgvZfLbfabNYaE8zij9k0ASf1kwWuL420zuOIhdZfheLc%2Fz8uGS71yhLMN%2B5msAGOqUByvqbN0OYEOVl9ddF%2B%2Bn7%2FXUNOyoBLWodTfxyglmZMjCItPzJQYIY%2BnvxMSzrBbtF2xEc8ouHKYWwaQ3H9IknSBcjpBd9UPDfgUTVvH%2F8IGNIKz2wk4LPjg%2FTcQR9dYJkFCq0Yb2LEdiXXi5MpgoQGxnLDkX2bdROEKGGTUBo804BZApT7V4osE7r9%2BhuebYak6Lw%2BEkk78tVUngmJO6QJZvBThLt&X-Amz-Signature=51f7d8c3c5696bdeefac1bec4707f9aa0f0b3487463c672fe3bdb31768f9bde7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
