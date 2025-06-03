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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFETZ6KN%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T132552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEaxQ2TAT5csF7kkulA50S7wcsB3eWrAoIYC5MOcS9KIAiAnrA5sGIPAF1ajEAGeal%2BWVX%2Fu5ZpCVIujpQlsKy53zir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMFS254okesfi7XsTgKtwD78XTGF1MPLWz6Q0hCO9qVlRzy6IkQ4fDO6gw3dScrrjGQs%2BopVXKjCjL7RJwqw4yrCng3V9e8zrexz4NsHQsyOntcecM9qND8eMdFgIn3zmVYltuxBaBGYVUMG01eWLJN8os0hwRqJNfdJwh%2BiR5qlVW27dnUlR3pllcU%2BqGkq1oIgdfx0DofutcVTaAE2FXqZoM%2FIoUWHpAT%2Fr1VT7M%2FPrL3qrtBIuy3cfCKWeZdcpNcAIoWJYHwZOpMlwTnQnPfQk80a41JQeGDvhQVUAiPK6iHPRGFjPHO%2FRIX0kirllgRoDQ1lgLdVk0M8sdfEFwWmWj3XfTB70uli4g0AuUlIS7b%2FU45i5b7M%2BBYGI%2FPpqV%2B0yna9Bq1tVR5OjftFH9pSWhwVHc%2BtGd5T9nThyVqeZvT7JTnHIk0drsh88IyKdrA%2Bm1L6nQfD8wrB3epSG4TsCBcLkwClQRYoc4ScY4LBl3B5tRetvMWnuYSvvx5qnB8Doa5NrzWpZkp4sK0D1hUq%2Fs3U%2BOy917lEFDwop2nORtUOF%2B8oClbVJ%2BE5Pjy1QwcmRtY76q04LKcH1W9GqR10y5lzomLa1PL5u0ff7kuhKV1y1H0BK8eL2BEIF8vQUnjAqiA%2BY0rUA3tdgwn%2Bf7wQY6pgG89PlXGwr8h1pGyi36EzbBhEu6%2BcglWCsL0MRwBYUaeheh303lgEv8rqjVlnl5gYAcvG6BmYSIMpP%2BnibXlUbe9UOflTq%2FOCD%2FCS9lHS3tZQ7vBsya8LpbHRQmamC5NWbhNHCz8H2drwpzSVyu6iLTqS0YGfqL3PWuUHWjN%2BkAe4Psq1i0Xj9S%2FqKcCBe%2FVOahJzKvhM1zz0lmb8iYvlkEE1YTGM4M&X-Amz-Signature=dcd4f4a6d218dd139818fabba631aa57b609a6e9a6c1d0a38f203f8fc0488a58&X-Amz-SignedHeaders=host&x-id=GetObject)

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
