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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUM3TBAA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBE%2B3scsg%2FIph306qrwiUCuUtCcLJZwbE19YAJwWEf0AiBm8EXNryla2h8Xn42cmHa4gVVmGR23htKA7oMpy9YXVyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8KdYeYAvGCvcZq%2BHKtwDhhrpTOdDew340HIuTA5xU8%2BeKKYNzbYxfq5VqnGfcrBgv4VklwFx0VqswTql53SHDyL6hQKR0l49A%2BCgCbksVZOffmrf1x2DTeyrooF2SLwMW%2BTIXoejh%2BEdmib9ivdUSR1IKM21xzFwbdGU%2Blk1w9jBkb8CKEn3c0N%2FlmGF5a7yoHrJ6jJUJ3sMM1QWuvDotEUe4Ck5Cx1ngJnSeSQjweJ6wMUdGolp0s5p6RNd2EbZ7U7IHfoXzYaA0xgav8575TCyursasGP8ZN1LDILYAd4pfoycqpaXKztmX7QhMDTXYWAxP7L2BRaJYPx4XTg6NLoDTdNvFWwJBnJka1%2FLHfgWo4NdqnALGM7iNX0Br0LRrK78knt%2BYVJYH4VuWqBeBTwHfVf60XGrtgQuF8lfbcn%2FWPvA6Sc2fhBxLmL%2BGqZ%2Fk9nK6PnuHkK5gARDC2yXWwNcVBvbAUqNQcyzepA4gTZ3qPfRnyZaR5Z1YnUJs%2B6yBrrpMt5e217%2FZIFCi2Z7HjLLrou4DifMKuicJDGfGac4XDDKkSb1393UzP%2FrxU1f6TreqFPr8pQBxFgA2TVPt%2BZfTBVSlj3lLRBgA8DDG2yZknt6LDGFZcLsvYIZ%2FzLHVRxOlQrFTDHDFkMwufvswQY6pgH2HPdb6jbSvWb1Gv%2B%2F4IlnZrYvwIydKNJmI%2BkJHCwMmdiKICGRHc%2FN%2BJeHSDphIXW6%2Fvk%2BHr0DAGP8ldXmeghKFmbg7lI4aZOjgAn2pTdRHeIDyGPpOeZ9tvyEA%2Bq1%2BtEKZqIu19BvWQzznFJxmdLG9TVyw3BKSFndl5iFaxrjSNz5WykGFjdxr0dx0sSK1ZMVRIR3OevkvlmgZpOhyvhlTD6odQJS&X-Amz-Signature=e5a516e8a2c4bd3cc8a1c4568a787bcac66c8d0da26e7948f2f398b6605c270a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
