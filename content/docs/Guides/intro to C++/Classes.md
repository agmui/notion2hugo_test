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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QROX7HSV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDr4YEFkwNJF94InJWIgG%2FfBiQOE3dyMOpRchfOZuQIgAIgbEhiZck0mDZ90er0j8KGT%2BT%2FFs6uYkWw59gRIayyPeMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrX5sbXlL06dl8ZuSrcA8zBJQpA1KUrEnFCIQg1lfkOjCEwX5Kki1ui1dxyKrk15Y6SKnqMwrCc1bR%2F3tVpTuvgpJlDIMuExf193GhxQCMTVph0LbXLrRm4ZXFrWWaGwEotpLtClS%2BjH7F6xxeKFIL2Pv9dN7JGw9JM9CpEterFNEa5x7nKYbBHG7SpNAO9ORJbhWS9xwPwiANGAMNGYlVrupqQ7AH7p%2BBgiNsIrFRJ2jwmRuJNOT1%2B8eKLNUkCzXoLKQRGX%2FdITEX9qPLZ1CFdaE12z8mBLtErc3Hl93xmLG87q2hQFWAf%2ByTX4tit3ZXdLwaYgfSgp1R0qUXtTVLldHQvGFDb1BiTAImyVe%2F8YWdzgq9CRY%2F4W%2Bd%2BmJf5a4nZNwJFkK6u%2FFI35wc2XrsU3vRZ0jcRkt3%2FajWekEIfQzMpCAhFm15cIAtV8FXvIkILVLdbDUW6GEL%2FjTKSRF%2BpknFf5RqaPzZp37SBMBLVhruqOljC%2FLgSg2Iqazrhz207NUaYC4TzylFfIYCMS5jhH8Y1z1qMFkdoguncG0wgH2Qohwnz4d5EtJ5kp9VLMAdK5Nz50k60XT6H5sxRokwYWMFljeHOZGlpiCM5n999yfwnm8Ih%2FK8j8xyziGPj%2FDa0h7j%2FNdX1XlrCMLTVm70GOqUBkkNg2587wn9SPg1V271PUjnj0nWsD5h7IsHe2OTqklbh9wADlXRNZi%2Bn6pE2ryKyJc8i5l7Zbt4ax7a9mzMHWeAY5CxHz0M%2FkJVLYnGsGBdxUm2ud%2FHzEQpK0gKL0qOkoQZYOsMWSVydDZPNCFOATPcNAs%2B88OLYZGj02O%2BO%2Fbl53BnJ4a63rTzmLK8PFlt1XwAj92SRAatTrrCZSPj%2BOhRI5LyX&X-Amz-Signature=6104e49924a6342ac4487aead3bff809a610fb49176a38c96a1c34f79a3153d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
