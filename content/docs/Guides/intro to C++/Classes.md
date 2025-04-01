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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRU5NR2O%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCICpY5CHM6k%2Bm%2BLNajllJk5pe%2FyIG0OQFRaVI41u%2BzB7SAiAQGzrg5olUnW%2B4RQaZvI1DAEPyQAZpILKIB28SuzGPdCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQvQI5Vu%2BiRv6tXcKtwDvqO0kyDZBpfgIbdmAjwXX3v%2FZFq6j8UHz5hsokh5Dxy98hp9rHuXTMk0Z7mCUPunDWTYoPGNqsFD8bMdDH3BlcwtpP4Izi0%2FGTdnP%2F9XBHakgmW7GZQ7JJ91HYBAA1QlmiyN%2FhC6y%2F2ubKD05GUow%2BASkI7VQD3%2B2zTNWgtI%2FMwubppJNtltP3Z4HhGdwK1hw0TMyKPHXq8tCIStvfN3%2FF%2Bk%2FzdeXQmaE4r3XBaOMUOOFEaIZNtCJ5hWZi8y5y3sMbbNTrkqJxFP8nQ%2BEiTdvr1NA%2FGqSrTS%2BHNevUU5UKXHKPtsYW%2FfM1ATAUCb5CU6vXmAqQRSx5j9UVo4XGaefzB7IxiOPMKuC7wH4EHzkIQ3zI%2Ffqxj%2B5FzdFUdPSS6a3wFqUKlF1KB%2BW80Bg%2BQ0lLAgO0gwjqk%2FItB9zI2jjPnbgv1nWePbOh0F29738%2FaWDLOMwcAUxoBej%2FEdqRZIcNJsCAdeUVuvHEAbMkv26K9eU%2BmKLZykWpOzNoMGb1CyiW2IrOAW%2BkX2eIs1tUH7zb2XBFnxrEcz0YKi4IJLPADWK9d%2BVQ6DIleXiMyz2cgDGTjNA%2BFjKfIZAy6iDixA0f8btUlZszTNBovyt%2FlqLNVKtSyBtqLE1VQrlI8wutCvvwY6pgGfBZqMxbe16BWPDUuQAJF%2FgvMUgpeUgA85CRY4OSI2%2BZy6Mc%2FKS4q6vsSPb%2FlMuY%2BECE12U9%2FAP0QtwCX2vAvsGFm54oN5WUl6PRjEGxbkbhs%2BKXgA5wgbcrnCExBzMzT81%2BvVuVUN84QRp1X9DgLduC7WVP6vemdBz3H%2BPibFH3JlfcwJSAjak56VvnnYh8tXsu056vPKbFpSQvow3xII%2F8AlSKNU&X-Amz-Signature=ed18bf4970aac3201675f882a36d3fa078407f5aeb823fc0020890de7268bd55&X-Amz-SignedHeaders=host&x-id=GetObject)

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
