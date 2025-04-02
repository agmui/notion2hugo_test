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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CALQYJ6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGX%2FtGzDoMR9u4RlufNpLQeDyztZNlnO7fVyyIAgF%2BTVAiBcMIyt0oABSL8DvwUgqWR1Wfa9rhInj37nWa7CiG%2BMKCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo%2FmabKrQRCQMuL0kKtwDnf4T5MeEWgiRoSpRdJaF8eAjtxOM7MNBqVfE0aFp4B9DX0LDuQYKY3LTIlG92OdLtghTDIf8CP7cmHk20MFfR2ohy0k3SgLeOzEkcLSogJGGP2%2FripgnrECVT0%2BeFfotZdcxtdJpiaZ59%2BRmW0qc1SHAwcCz5QO8Y9SzTRzDuPlBX9TGJDOGL0E2hE8ZDCrzBM%2F8xX76%2FvOko7BiyOZTAgXI7Ww4OQeMtazXA7NNOFhM1bKlPH%2Fk0N7Wo9IIvG51pi5kqm27b7m27mnBk9T%2BHeUsRFnIVqrc%2BsiTYph%2ByRq4g3J%2B4XJjBpYOMnjVpObLJhbhF%2B7wvpf%2Bp67zDdUM5CdOowFAMiGyaCSpq3wowvvl1XYleQ9DyQHON73KJPTukrpw7h8hzvR8ogSE%2BKZXlG2ZGuj%2BrquKKKQ%2FH9cJcBEbPLkOp9vHsBoKAnJ4aA%2FQre%2Bv2WbLGseDt97pDxKArap4d8LJtM6oORPMwwnFolnsIuNgR9eDofr%2BzK0AKSlyr3S%2Fb3RrmC7rJB6wSo8VH6tYap4TUsKs5fcemhJDJFVZhSbGHQFu7x3%2Fio%2BuYFvZ%2FrWF5NENiDEYSLyuEt%2FzViYl8rDRZsFMze9RzFdyMckfQQcy8BqqkHmhj3UwkPu0vwY6pgHK2vj5gu%2Fo7N2g2tXq25YJ5oKffNDpHr7VoGws7oAdA3OHZDmRvh79H3ucMJo02IRWrNXZ2IORTsGKnPZ04l2GGg13IxL8H4JCecPCe03Vp2oI8tQAv748e5A54bosBFXSjMPIzeUuooA3JbGi5eRQVLyXPkEe9ARzos0uX%2Fb%2FQNkE0L1CKS8NEbag3hFCz2WZR362aoS3Nxjc1K2PmW6T1CzRaY%2Bo&X-Amz-Signature=e4513ba3c9c080505c43e9b3bf0df0b637ce6ae685466100da415ee7b83801d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
