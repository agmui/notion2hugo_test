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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7PAVV7Y%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhd%2FleX659UUrH8E3q2x0XJvhVN%2BuAC6s34vrbeBzo6AiAr9qODDFyQ72FWXlXywYobayQyJakw2FlXi2XCC2IQzSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ%2Fxm3qZiZp4W4Z9FKtwDXnokyySaZq%2FDm4pFWh33qFAsoMO5bgFGpHRke279SMNjs%2FFyNIOUlz27MX2WcAD4eKe2a5VyNMh7iQqRgF5sEQUYylZXcyH7LZsbAtfngY44sTh2b%2BbW93J5csGMDRZwgrsQD8eloPHnnPnhjhrAkc6GWAubfgjaehjlOnrLopViFSO3awW0gzIn9YiZ1ikjlT4ppSIrN%2B9MX00zjT800RgpMGBGmFZU9VJ92I54nVa7ytQ4H8Xht3C5%2F6AHk%2FiEsg4zzy6bLOl0iHdVg8lU1kKL%2Fjq9VnGKssmjUy%2B%2FTyea89sbYcCGoerkuQhLHI%2FdPRP6Fb7ZgZ2JuiK3FEq2eUpTYKKRtzyO7bwo%2F1xkK1XOlQLdtn2AfgCFG8r%2FBuT84hMJcZcvYBkGc6F4ffDiWViBW5C3CgnfY8mBqSgpADAOURfduDyMWu%2FEKP53V5pH3Zb1Iq1JaVpjGLexF6SJahgo78mSdPmmmAEdtb3yTRytQ9nvqsdsrSuic9MsekycUShUX3D4B4E0WhbCMRQ9tR0fjymatfRHpNKxUZdYibHrDVvezvJAfx1L%2FQBl75t6WhjA%2BHa1r32beIuLIIaBxAwqqp67tmlhuVOvDFN0BW7ts12WsZ91XO7%2BT8Iw597%2BvAY6pgEPXlALEW%2F5izdf2AJdoW87TNtDEu1kq2GxVKk09E4hNJswiPKGyChuUmBvk%2FX%2FAzDVfdvwkYVtfsZI6bFpkDpVfuPAwsgCP3n4LsN%2Fdb2pIqxG5e9du%2F%2Bc8OPoYCJTguZoDc7APH%2BrIm%2BSiboyJLxsmnTJBq6VTYuLLqZdznk4Gc4nLN0rkh72N5fL%2FM%2BP2NqmqHmwaF9Y8dW6nqGxDGdSqXFHs6OI&X-Amz-Signature=6b7f6d46082a96998584997062107199191c21c3b97ad718bcb148a0f36b8a98&X-Amz-SignedHeaders=host&x-id=GetObject)

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
