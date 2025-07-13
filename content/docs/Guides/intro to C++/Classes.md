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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EHFHKRA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDuv%2FtG5o4mynb8pAsGNwMLZnoOY8kCgzv9k7ckO82dCQIhAKGVSY%2FjlP2qz8tzH5FBcrcbxmyGjaiEiqOJbBP1NXz4Kv8DCB8QABoMNjM3NDIzMTgzODA1Igy73%2Bmf48kxADbPfTMq3AN4QhXjvet9MJB3pqENqIeH6ajReJiavFFamUb8YiDCGGIlZZhddKk53KKYcQVsRn%2BexTCrHv%2BZsjFids1ZraPn88LegEGOKDbBfGGbUSV47Z%2BftRK%2BWekDClo2q%2Bv3MKa0onIrJJKhqYbybOp%2FLgDlHBab3yunt70StCS6Z3SyxsatfGuYy3e9agX8WKsAD4M7uRxRyuKowbaICs7hR9yOw8ounchruidhUw8C84kxfFHcshx4SqO1a5tmrioBCEiaQsiDqX%2FUI60sM0qD8rN5AjW3OyoAOB6kTH%2BE%2BH3E1YCWScXFadwGctnZDhqcdRQBZQ6dHYCDu7ntpmwC%2FH4phGX9XbBhnjgTIZm%2Bg5K5rmDcY2fvkVg8b6b1G8ChPX1XBTRRGpz38gjmt1wRsZoL3pEV87T%2FhP5S7VV107YtRPSXs0gVYaI1CK97eFRi%2FmuZvbGS%2BpsYtnZkMXrtqbf0RRihjPlALNsELQR%2BZaRwCuHT%2FCMLgu1QDsAU1MxTb%2BD87l9KxgzCiAZkcPvuLcnI54samk9YV4ok9c%2BqTXEq3hd0jqjz%2Fb6WkymcenD8LhIBjZLVKGzY7K9rINgn8g9mkd%2FoK9APmXsD47tC4OheUam09oKUx3SnuWumnDDIyNDDBjqkAaPUUZaoFkUv7K3goxcYtUVQ%2BNYCtl%2FGaAKporLU%2FPHDeP7wFpGVlPdp4eLBFVWXYuW0PQILoNplavnEz%2FcyOeHrVC9j3Xwkc8uUPYvAt98skoWfXiQIci3pfmQYtkOfakrqyhlefeoePgrZAXgEQJnkZtgF8scOxtg6MtvM13qUlF7l6YIub2L9uAjvamEpcydrPNG52hUTz56ySuH8%2FLo3CX9l&X-Amz-Signature=e1d945993ce0334e4c8439889d76f659514b3e70aa4f9c3daab7059daffb1069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
