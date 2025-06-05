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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P2IQ7WL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHxNBXkIa4K9RIXgNbyqzip%2FLCdvOOgZAQ1cZeMFxH0GAiA83jqsZ4X3qFE7YrpJcJtK%2F7jldcpBZisdbXDwKG%2FKRSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMLTICatF2AKRc1YCsKtwDzU%2FJxLIaFXp3%2BpYNgoCKXEsXGEatH3ASEU564SAvegunigsqC9idCrm%2FFmOcqwS2qL3u5C1p28mgFfj1LLtHkImbsNtjJ1IEyC%2B%2FGWvT2%2BcnSMTdJL2LWDipIH01ewVTGlpaTOkUcQLrJ%2BJMcuz6xoGj9oC1Q88rfj7netCJxTMlyNSc%2FbUwPh3jSSj4Qy62PYEaL5EwcGGlhkXWWLHrWnouwPKSngYt2t7Ph3E8VLe5f9%2FRc08LjtsLqQcfOLSFkYtjqoksv2ccYGOA4Ef%2Be6i5JL1ncpK8KArH3KWys3Bbeun0KA83tY3%2BZUUElSp5Ix5oAnZ3aljHR6SDDh3eh6FFNL6vsvuRueHCQpDGXnFGeO7yiBvAiQwYgDEA5a7dQmoW8r1XYDeRbrRl1y11ulIgk68%2BuL7XDjKS5rV88g6MhN1HVqzs0nRhdyH5bwLN%2Fac3%2BLU12EANSTppyB57p7mH1ji1cSfjYXXfovTTBMJnuAW01Cxjh%2Filxm0kWTPCkZQjAiLm3Y5ibXOcM0ziKBZi2hJbqRqbZbIKl6fgIRLJyp%2F8qZrvoGLWmUUir3jOzU3lm2ebieK6pP%2BDFPJWxqaLT4GukaxAA%2FkrVxJMU42a6sQQl8HzanySY30wh4WHwgY6pgGiBfIfihgaSaVoTjOXNkNdS4zs5TDx%2BC2iX7qUrehJDE5vfaRtG4cJxTRNaVIzmnoTXw4dSyeexOeo7OBi%2BV%2BaKRrZEDWWH8i302Ro2aLe2iQOeuX73oYfQC9U%2FPAyd0q0ClM1xx4gr6sQSsEBQKt%2FQeuH0NyVIiDwNYoePcIGoOVUkGKeakZaz44A92oRhD2G0ZtnSTmmCwzQxobyIMgrHuEXgJBR&X-Amz-Signature=e9095ac7efe2b718dca5079ec794534c239156b32a160b8a36d53cdfe6cf6f80&X-Amz-SignedHeaders=host&x-id=GetObject)

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
