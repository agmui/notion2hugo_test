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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4M3ZJV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIGGhLOubCpu%2FhfGgmGIxOQVRWQe1dnCYXZs31ldxP%2BvSAiAK%2FYeVa8a9DjBhf6BVoElCZaofzuOWRKHr4AWdR%2Fft5Sr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM%2FqMpawmTe8fKQGagKtwD4Pe3Xl1Zv%2BSWVcfnD%2BJGv2VLyj4Qb1NOrwrqQjiRQ%2FkwpMzRg1tCcA1vSSZQNRC3K8BUHyuSO8j%2BV1NKDc3SHkWq%2BogavGxOWT4189vKUIw1ts8zTohWXHP3AwQ3r35Xv5cp%2BvfrvD%2BbGftPeYbRXkU%2FA%2FCVq4cH41Uflje4DSauI0gVAXotOaWFCHsaftV4ryxQHuQO%2FUfbP2TxGIEy8LZkGJQhx%2BpHznjf4usUJvEFSmqAkxHX2L6uKnseM5ARGB3uwsFGU66hGkPP4re%2FDTwfIb2X%2Fu1hbcB2aKskIcFDw9Om5BQCMZlMkcXD9DS38ZnFZ%2BcLUwUHZvrJFtbKlX9Iu2RDViamLJoXp2EPCto81B%2FJ%2BWjYhFGBo5F0lu2EeKUJ2Uclvy0t7BxgCCNW0m%2F2Unl4LbdsfDbk3TRlDqc6%2BcLzPSuV86x3%2B3ZWOBax8GUMxIhH9dvvo0EWYdNymMi%2BB%2F3NjMYNIxB1%2BEL4k7%2Bd%2B6XtNjj58zLN%2BasT358t7EcYV20Pkfchl2M4JFDnD7b8E0S3PkZEJFmBU3AkbxX3CyXhNQIBv4HAoADu67O9eKH9RJ05lPpb%2BV2C27JqyfWKm7R6AHVB7xAjpjRloILxlBj3ds9NyFynCt4wvo2ewwY6pgHa7sBoMsZtsslLHex%2B5HKLwAPE8IdbmvD8x7M156DunxGwZS6PuFjj9FcP6KrD7kKj1FAD87LD17VSJO%2FkhMi0yx8UsuTHmW1fxQT27w8Fj74yhAXnmEuPdD%2BIr2b0dS7ggWEQ4ILYjtbC%2Bcqgrbo6iMP79ZED8WXfon1qn74dvYDlarnS8BuJ9%2B3XzKd%2BozdfDfrInCha8skklXyWkiVXAT4safis&X-Amz-Signature=1787bfc2dde77791ab570781805e04024adb96004aaa79b2a08bfb0c58145f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
