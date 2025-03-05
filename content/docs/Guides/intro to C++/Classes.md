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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQGRDI2V%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC56OkOT35siZnIcKycCQwQZHCXKzRCFPGSj7VjLHF%2B8QIhAKPT3jBhL5ILK0WQWTQkai9m09ioWPy5DM3FW5%2BNzGBRKv8DCBUQABoMNjM3NDIzMTgzODA1Igw3TZwz32JE%2B6cmpagq3AM%2Fp6CbN0Fp8HZcv0IWU8mFNHIUVutbLPMm3G0oVrslyeGRduJf6IFB5YqX5S6SxJLVJ9NDpCwC4VwPJISGhR%2FbCYBMIa7xv5Ozp42WPcSWrkHP%2BeBDYr1gZaYjfegJsGGOQzr3iJOoEvT9MO5K4D%2B4spSzRuYMXkmRvQwNiMuo7HiAsnQHdn1ZDzhcCjSZUP3CckEbFRpFfMM6CyLDv9LlnjAn2rCFlmr2XBIGlRBsSDe%2BYX%2Bnc9iUPY9EQ1CnhCyUdNjOD7dHjsFuJfflSknNIJR0%2BZy%2BdKI%2FphyePtOv5nQe2MOD17CDrya4g7sv%2BLR%2Bnf2Xk4c6jnaDZiPTcpiVx7xW%2BLjha3aeytP3OIVNxGATcgIzaoHwU%2B7CeS6t6Ui9Q3OmjFX3fveUumfvGzm9nvkuzYLfpggABmfwTGt5kBnxos2xvmXg2ggct41x59pHHQt54SQGAyPM5vUYykjX32X02r8hTd2HqFd5IZLTIh0ei1kWvJhs0397J64dGK4XEZRT7TUz%2FI3rTI30mX9yG0jGprKKHCgD%2B1Lh5TS%2BT94YOQ0EyZBm9UG8pdKAHajepPnbEpqcvB7DimCxKU%2FEVVT%2FQzwO3X4TpJYuKKIiIDh8rPj4at7KoqXLxTCL9KC%2BBjqkAXtt6ERvCkzMDMrpj4Vt9lJEASoKGx01Buohkv%2BrJMZh3q31Mt6UKKG8XheSp41FeVUiULRaODUOYapVVjEJRfX0LivkIw4KEaNdnMclovApcQnlIOmVMrDPubgE%2BOnzgnBH6wEQZuxKbaEiMvwXwqxeu%2B2Qtaq7a8NrIwF4eNU3%2Fwes3L9sMMjr5iM5ojdp7vRYl0OiuiavUsxzFj2KvHDYlKsS&X-Amz-Signature=272d3a044d50504fed2d6121a2f960bef6338a8760c50a40e3bac93cfad85c52&X-Amz-SignedHeaders=host&x-id=GetObject)

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
