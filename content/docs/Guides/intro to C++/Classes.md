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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643BTJMDU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNvunpTVUBg2YOcnj1AwG8ksSReFGHhOnSFp%2Bprf0tCAiBeUvw1YGLfuMHIst%2BL%2BHlpf%2FXpjhu9JWDHn94Mq9ixKSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMRBurB6XwWHVWiffBKtwDI9lbrRWTJ0%2BwOTsv1gqP19IbbutHPMi4cbThJyHkcZquuUqeCfw%2FWKcBXf4C0ZaYXdNoccacZGXpsRedvSSAEsp%2F2mWhJnqeu7o6t7K%2BBxoQ74oNE5O5L516HVnbW%2BG%2FQeiqdo9EeUWitv2%2FrMzRbHaYR86k5X7nFFoWChm0CTOdzxOZXgSLwZ6gcMox9LiBQP3qwlZ7SMmMd7%2FjZkRvSvO%2FsooDeoO430GEjI8nbOJlMzBcm4im2%2Fkn%2BdhW1w1VjjWnoEpr5N2DLi%2Fy%2BmP%2BGxMEQtL9zfiDxMY%2Fk0XsskW4a1WaNZjaUTnyiGaStQiGYxS8wM1RNUch8tiXl0ENOJ26GnG6DJbzkq0lXdHMNf%2BcTEl5%2Fu0S618ajXCRDIwO3%2BjLrZFW8vlJqNM8%2BuooGyysqRFHflcRnQBOMmW%2BHESq1a82eJKrDiL%2FsiFQeXGPoncnd%2B4Z1ccoq%2FQ1LArqtk0z3nf67oXF60IsOE1aiqcPvulKH%2F6vSZl3syP7srUoIKD%2FXvhOYqj9H79s9eDscidrfpd4inQ51sDj%2Ftr8AkQ%2FZaIAAzDDe4ikr0VA%2FJHYNBZgyfTrgQ0B%2Fd%2BymT19vhdJBp5jkN2c9QIBwOLHHU4qi3g1Wy6MNFhjnx0w6ZiMvwY6pgHt95eXJZjMX3NpI0kbhUxYL4VZv%2B3YGx%2BCHSzK2yrkkBItyJ3lVJx7sWZbFi9EbTPlI1bdu4UgnQMWM71zYhNpRtYYep8XR8hSnFeioOzonW4NSxY%2FhImHiTZqXG2buz0DnxRY5CCRgQfB9FE4W2uzL%2BazcA92hCT1BEYwvv%2Fmm1gYl%2BW8ij5RBUFEiAHfqKUoLoMbMMNLI%2BFHnFOf4C0W%2F3cHPIgr&X-Amz-Signature=607f500e0977f43213d91d2318a36120382a8cdb5d668867c8c8e016d0f7089f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
