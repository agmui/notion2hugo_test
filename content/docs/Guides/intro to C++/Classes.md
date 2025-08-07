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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK2QMPSW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD10vgXk%2BwoK%2Bb5nMclO9TMgbPcpRsugJiQTJ%2Bro%2FW8vwIhAJX69g8ntZAq4rUzz%2B56j2fLleNJFof23P1gK%2FrDKlsuKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX5hq2Am1i4vddITAq3AMtMEthavfmGSMR6xCqwadU2U4WKuoxyYasccy1csEXgm5gFqJPIQLewVP996sHqMa17rYH9fTmk9atBGZRyLrCJ0Q0ps9R9AnykfsEp7V%2FqnG%2BPV8gdsKUBMnYTWyIVbliLysq5UYASV567gxw6EuEUEI9kK5SscBIYz%2Fssb9%2BMz7iubZsnRogY1Fpw7ziTRRfkScK4x6HURbCJ396c9F7mfoRspLCrrRmxceVdwQv0ECZOytR9kMkaqERVdv2AWJgWUqDCNFBE30Izbo31z1u43RpNJ2unJLE3wk2%2FqIO2t3yMGwKGjpGkUkrY47BDiaZjDKAgN0dOYwjXhHj%2F8qRfxc7SJ9U9KybiMo6bDQy4QkwOJCxu2pnMlzXbb5BxVabBso75%2BPQ%2FwwNLTecCeIEoe1MOsPPzhh2tOFt8cCId3KJQ3CqKcyI7gThZuy6LxMvpDQW5VETGcnzbER03PJq5MOUHvvcXKaC5gW9ibYuVEzIaAMbTO5VUVA207bwkePggLj8RH1JGMR5DpACoiSoxKAzoQWZ%2BLxnRana5EegIe%2FjWY1aUJL5YR22Zx%2FxVWPRmCXsJrPW6bwyrskQGyGG%2FTHYKGQUbIY7jLtN1nLY2Pakb7Cu3hFTC049oTCM%2BdLEBjqkAZcgWwT45E7fvtTZt7WlA5E3iwdlcwhcbjnf8h5r0j9Ws0AB0%2FiHtCHkpTTuk2a5nkjTzhNY%2BELW9SsP1ZNk7tigNz6PZkioVSMNBKYNcYy%2FweQxLXscxZYSL8KSEZXY58vZReJPxefNFXM4sKjl6Kyav1rJAhBKYM1TKX06xBNSyYqJ759dyc%2FOuXKd2424RJq5%2BfPXnoAvDclaBcwJx1tWTzOX&X-Amz-Signature=c7d74084bfd4c9fa9c9e08b49eb7e4480a480f88c90133a2ccfa170c048e09e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
