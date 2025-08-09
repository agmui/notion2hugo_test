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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTVHZMVR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHy%2BhlJuXZFA%2B1e%2FkPhbfw4kxLgis7lo8wLXXJLBAfHICIH2esMs31YJ8Gq6N%2FU6rYC0zO2Gg4%2FV%2BTMxYBZ2W3l6gKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHWVgZJkenPrEjPFAq3APHjBvpAc4e%2FZ0E53RcVGJv0FQGZwk2PK0Rd0fiPPqrOHoURoMmlRLqOmSrVZNMhW7g8fXBiFYBRCMnQvDg63bksSLSJajUWxJUYr1SrjaxF1ZPq9Gbpefhpc56lJgPG%2FLpZQPgFRMK7ciQmJQUTjt74%2FJjkhS7hz9WzwM2%2B6LNJkANW%2FiZ74tXRS3qAlpdwAfzCoQrjsr2DOk6Ei9jId9ZYbMYMs5G0snAHjbBIUhTDMhFh2aJClUP8w8RMDcRpB%2FVqkcmzlqAuhH72lMljfvE826DRsaIP1CFz1AKKiXo8VOhskuC7S91zFLgkkLZvxrQI5EFgZOxe0Gcb%2FN23iuUDiMrFPxVUruY%2BRURsrdr95mcDJfTyMB8gqRxSzp%2B5QIKs%2FUOeWL7Gm7wbJl4I0W6khu5PXLox6mlkH6glGJGJ%2FgJyl4DrHKNzXkczImfz2tpgcHd%2B90bEFtLXdyw0lFCXtc5OjEKtGfg%2FaM67HxvCh8L1En13TxX7Ry%2BumONhYK1w%2B9cDDY01cdcf6sjIL7e2ErBC4kXvRYY4g331l4ty4y3W2mMatrhsh8WnIuOlZS6kJopWuzuSItCUt%2F8gJFmwzJQvRXm8R12GLY5bUhtK78zEdsFh2ftQ4zf8jCs69zEBjqnAd4NV8ptkmJOtLWjKkTvMI6CicaqsO03%2FIcziTIhi5ucEPjxf56SM8mqpmw2Yq7VtU1dL5uQLn4jjN9anma%2B3aSgr%2B4XgTE1fOXjYBoFF5lVjogA7TawM6I5HGF%2FK1Op5hJ2g6v8cdxK3xEATPFInvqBR9F3r1PfYQPWJ0Gb%2Bj%2BY%2F0vHBITEKG9AKP2S6yrJYkRFrnrotYmCbLddMwjhE1L%2FQoulTXTZ&X-Amz-Signature=3e366872261c35b407d7e434aff0ff04f77de2ccac59ecdf3d9eb0c0e043ed90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
