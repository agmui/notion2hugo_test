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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFTAGRMH%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSVESV7nJlvKkNpFSCyYvt3ppwJ63xTgyCU5OvS8Rz6QIhAMZsSjsJiaD79r1qNhCK7JgXsiLO2gRSlQODgrXptYwCKv8DCFcQABoMNjM3NDIzMTgzODA1Igy%2BgWNNxe%2F7hjjft58q3ANY4k1rjb7J2zHaIAu5fKFahtMxkqLcvfU%2BOLHvqgzaQTnjn%2FaMJ4IFfZLNFA17b1igJio%2Bj4KzgTRFmWle%2FuUO4OyYYIlyRnt54Ft45gtAFXEnW%2FpCW3u3IpBgZEyCRF3t9y05GRiSD5ZbUL%2FkrCi45%2FGdppb4yzsFPcgaFXbzV%2BmMdXFR6VuxehHhVnG4YhRGulnt0OLsI0gQraRUOV3S6AYG5RtSIArv7dat6JK43MGXEMZ63FAGCEaybRiblc3nWeKyxSPlND6E%2B3MvPsH0h%2BhIoNFmWzhHCJD%2BZuNKDE%2BSWuTIYSeqSFM79b2k3svkhFWicbJ3%2BZAnElTly4C76ajTXyK0GkKJA%2FUC%2FpEezMIpaLTyloLE9V%2BKRQlrw4%2FViVQ%2BmszxHz6eG9lZ%2F9w1KWoTuva7KCOvzX4IyGZGZN2A2sDzvkkuKIidnk2U26s2SPnR1biXrbxut5O1qXwb8h0Ua4iEScn86g3q4HcpjzpJXhtHuR3pbPTqUZPpNRfMcDbBAjCDDTpeZKl5w1NO58k8t3OSJR8XncWAtRlvpToAwM1jZSASe8i0s4biWZ5Nru7SJgJkZ%2BT%2FGoEs4OYfgJNfbE5a0o5tBKH4pde6g%2FPbN%2F8z%2F%2BkQNZUx7jDGroLABjqkAehQxPnfregcsUFXRkdMfwMW68ZA2eoekAekwwy5ix3aYijxUVAMR0pFKhAfHb1dIosKPd8gih8qi9pcemtl%2FZ7tfC1M2FmDq8c7M5i%2BMZRcCkgdr%2FZ2ffxDwdYZteAUQeLuwGLa9VE2FOTVzMlBKvETiLpP7mbE9%2FTQ9EJhamjT5wipASpEMr2efslF3NaMKmmnWrPwpB8Suj79Mp%2FtnFg4jOql&X-Amz-Signature=3ae51d2b50b2845127311cb50f5e1d3dc8148bbf91f29fc3a01671700826d1c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
