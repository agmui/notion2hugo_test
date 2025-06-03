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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQT2FXP4%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC5BbQsf2wD0vPKe5G0X%2B7vK9DeGJkuWDryf1kstV6P3gIgI6HQpLEB6hCcgd6pn42ZOzG4CBf5vLH5MMfofS4ApKsqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIuG8IrVVGcyKKSPSrcA3eTSl8gfUk7mX6CTKJXqpdcthXAFVCjJk5LIFrB1En%2FlQ7xLacN%2F%2BSR5Bz7HjHga%2BEE%2BXH0ucOKbCHsQ%2FcqVCEkL%2FBxBPtuqlt2a%2BR%2BscC4oE%2Bm8ruWr6i%2Bn9VMrC5i%2B9lIvHWX3py5XQ%2BeLWW2yJV10eBsIWrDh2sb%2BqJK2nxfJA%2FDjck66reDwFa4%2BY%2Bc7N8hjDRrMaNEw63BZyGEWmeqHjVXv2O8ALyNlM4NMMPdVEaWCJ%2BBVQxsEJviGfxWjj%2Fk7ePEZ0SdFaR3WiRVxT9hrL0PUBwZdvDWo1otzgqg%2BwrYdndrtVAnLS%2Fpy65c57zTLvxSbAZ0SSbarY9XT46OOgelnbeQT3LYRJ0EWdxyc6gwMC2FW364NYEXZp6VC1q5b9Kpk0QuX1LmymGtvo5A3k32R1AJ%2FDCEmJexqnKU2q2wmsj4GRYpp1M0AH3U0aekAx4UZv%2B33Hw8dcDaHPQFrQto2npbA2lCsuBhJm7SXGBoWqsXNBnU0tXxVMZ3hC0DnpgHETmk6o19TYPbZNNnmDsULFVm6qdue0ALOabwIBWZ3dFSwIFIirdkxWWE%2B8WuFS715KY7qmTPhXbpGrRwE%2FLjfaEW8C8%2FAMnSPoodCDBqBUMCj0w3kGRdMJ%2FE%2BcEGOqUBvB2a3AowjWqS3CD6KkIUF8OUz4bfk32zV%2Fw9nyhw1ipXicSqaP2Y4Jm%2FSfgGYLFFnm3ACj3nDxSV8YG3HPocYtwoOFzeMC0uSlwCEOmZ5xx1rLu53lNKN7%2BG%2BdBB6rLQ2zxzXsBUCk46B5Q2bnnZXTWq3QcGmlFEZd%2F%2FH9cfkbtbHciAjqynDeg29cvy8Jl%2F%2B2jsAI3NyA5Yvkc25lZUqTz0r4EF&X-Amz-Signature=1089de82b7b82b7e1b87718a40895982855e87de1f9ca4dc60bf9273137c6784&X-Amz-SignedHeaders=host&x-id=GetObject)

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
