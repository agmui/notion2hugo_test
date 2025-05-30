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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXDRUB2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSrTsF8EGLuHmTfJm6VZ%2B6sGRPApjjEIOAvS6hKJC3yAIhALI%2F%2B%2FyqJT5pQe5P%2BB6qGCDAkO%2BnVZM%2FGdhjIGwSdqYbKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlsez8DzWIBhrR%2BJ8q3AMoC6MVmuqyRuF74WjD3Rp7XHzz%2BPQ7FTlohyq7U3nb%2Fmxbpt89rk4z8HBtxdECvhZ6Sbm0LI5h4jl7NbdjKXgmTyBjqfVlCabZ42Swmo%2FVCrYpmy4DnsonRAA4ztUO5AT35lj%2BrSZCg%2FuintlbJgAVni91qhpwPjlPJ1%2FzT0y4xDRScSzXbdSVcl7Joj5um7ygc9F9nSyVwevdimFwQ2z60fbQUDar%2BTCMChSLAXZTtOSuyEEw9MfiqScXDXpnx2Krxn7Q%2FAPCyasPOhlezFvdxCRE98RVuHc5s2LrsAIIcw42Z%2BaI1aeSFfH4gjJsrWlJlxw70zvZ92LxWDOmCeaogqmMchslr0OFhuFyVTUK1A50E1k2aEkMG45KRGECrszKhwdQLlfthJh7GhX%2FzfcVazQIu1DMiLTCuzCfkrSksePZbb3D4QvSUFJyVqJpjzJ7tMoF3ryHOJWZjFW7wZm1FCKm0d%2Fgbvw5YQtQFPYrFWlcb8n%2BGepVyvozUej4ZEki6YPkJcCRT%2FFp%2B40UDZGxYf2eQ463bEPeXd8UuTklqONCWFcxjpSHkFBMDAxa5MkHjRuaGEtPUF1lfshveRSPhaCjryBywX8DHaRndEl0iI%2BtZ48m6kgia48lizCVu%2BfBBjqkAQFX8T7ud2gCtYEh74i1h3uMv7ugMFs9S%2FIQEQsIKvINzcle0147GkcXlEcLr4cVzP%2B%2FomOUmoJvnjQkIsDYkoSYh079S7Xow26IxEKahMvvjqJ5bOpm%2FJQ%2BzkMmnBSF6blbuOQVW81D6yK67NQLueihDfc3tNgMCDIlTq%2BLJ6nbjjk9xTcFoDq%2Bd%2BDilycat9gFflV5jeHa0EAs0lZSqoe3C%2Bon&X-Amz-Signature=a2f7446886edef2be0e1fad3b4dbae4478890b5593ad243c004bdf963a9dfd06&X-Amz-SignedHeaders=host&x-id=GetObject)

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
