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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFDT2NJO%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIA%2FK5VE5lTH7W0W5VBJDCA3f8qYmc4ifIcxjxlnbTmMsAiANQzgJZf9PxKi9Dv5kICR%2Bpx%2B19wGYoF9rFAW9rB8G6SqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUNKfV%2FGpSrlHsEL%2BKtwDJHC7h%2BFRY9ohrEXZoKGGArNVX5DrBwB9q%2FijB5YyhVQ45JaaSA1Fgp%2FWODv6TU165TQRyESuRjKWYEZ8aZKdt1KzMyjN0gTxjIHlQjCJTVOn2%2By3ioVDDbAviVQkPD2BV1yncDI5Z9a6EZxGor6TlvHK%2BMHUMyUA9prc5Q3OKVFcvtQb97nnq0xlGhNbqQSwqD9prfKCG6xqVbPAvtVUugVxmYccsFJ8hh4%2BxOP2mrZPu0ODyutvOWfSeLHb%2BUXiRQn5SiQh33Hk4FBGrpXl17yxbXV1lWxm4m8jtVabIo01eyE7Hjdru8%2BGlUHv3FfSDwZrUcL4OlAp1PABYWaFx9hNkFm2lB1HrlHu86QQKlLoTEvEcO0mLXin0F%2F5H5EnWwejvddh9JuG1g071v0%2B%2F%2FF6GRFAOqHHeLgMvqdRz4i0xSh142KLl5pHHkxl6oH%2BWruIkTVMP3yUFesKVXuBPOBFtmguG0vrdt3yVfLZ6xkNgZgXfGAau6Df%2BfN922oROZPyNuL3E2n4ttqV3B8UVyIVz%2F1CZ8nIL6KJ77%2BOEMECSpyCnKSqWrlrsvIMsNpP9Ypyt8tbSO1U04dsHW%2BbKAoGeyVmlWwvtopycHcH9ahRuG0Kjx6IfwH35t4wr4TxvgY6pgGUBG%2FyVaFiOvzWMucLnhp%2FPZ97G%2BBcgWPF1%2FAVqX1%2Fv9YAePQTc3ymEQX8zOahHA1JeOObJ%2Fz7lP7cN1%2BG8AWBdrnT%2BJNSwtcxt%2BranMTYJsbSmGnN24Z2gB7bXbVaLjB4QmSU1mX6y8NORK6zh1e96XrmUG6ux5pnhtVq5QUhHdJNgf9MNFUiEWVxPWdjyBuQbMd8JS8gYJtHiDGRLVf%2FUJ9sJfNE&X-Amz-Signature=51be35917404c0e004063490221dfd2a89d017503bb480775c2a43ca60335dba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
