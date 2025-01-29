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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GAWOTVL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHzEY8QKjOuQjy9F7iDk83EMmuVshdSbBrZKHjMPT180CIQCOUyN2cCUyFBzhZiCsgoObXfkooRQ9TkaIQuFg6TC5EiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrixIJzderJv7bIofKtwD5QZwlZkdLcUmTd2O1uLIthmRTCspxafcHhvlzJzOtIEQ2BBxKN12hGSB6M37%2F0jY0clMEOdiKeaocXPJ3IsdFzZ7Cm04GOoR4entj%2BuplSO5TYmfmTyaxwy4N2scFst0I5fxEJ1%2FxPviuI4n3D93N%2BXhZ53jlIEKEKa8wwK7YkP2xCDYOYdXiEntNEW93zuew2xjocPGa9lZMC6YS0uUlxM3QsAZa7JmHp%2BZJW54GcXHgUheN4YMakVRUIqfGACUS%2B7rtSvh80%2FLAqQqisiej4VHr0kVSNUcKWFQVAnB6YtnqJci9t2fMcW4O8rxxyxVywL6c8QEcTaELU7wQ%2FdCUxwCcDI3Kf2ep1uOk9w7UgOvI%2BBET%2FRqr0lR2cRMxNBllA1JAR3IRWDGw879y6zNRjlzkvj6nSY4dmpBeaM4MW%2BH7TBzclgyWFgYigGsQY5%2FQ6JXyv%2BB47AKTPnH8zNQGqtVpPxY0D4bfumxT%2BGNi02Y1wTdrMdfJRapN%2BcZC00Pb8iWEeiKdUupPHGB3QCzmIUysy%2Fbi1jtxNE%2B07YxcTMlKMycUXmPQN4%2FE5VNN%2B9SyPplD%2BBdszeccvlXglQ01554uvtTZGoK5ZpdVwAtry5lQ%2F31e%2BIke0YcwfQwgNrpvAY6pgFNHmpV1Mg2BXL8H%2BKTywXyEEnoCANDszTsS8oAXH0obb6ZPFK7z02nSx16G7bCaE%2BqbbZznNHa4AVN6dhLvBQQ5%2Fk9V%2B1mYbaR%2Fff7Br3mGjLk2WHuc91HlMdRXoXfgSAW82N6C7D0YKudWk61rRJSwYKaDlzlZtO5pZ4dtotQIz3ghb2jS2CJ87yZPKyymNTZEUWpCbPAWLJOb85mVGSBv7UqSUTt&X-Amz-Signature=e961dcfe628a3da8e8c84e914cbaf64e18291ed3bfaa8f3491068d0ef45f33e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
