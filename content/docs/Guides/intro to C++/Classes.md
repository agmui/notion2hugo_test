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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634FZBNCA%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDEZD3Up2L6FP61csIzfqEi%2F0SLfY4L4d0zHHjWmZzEkAiB9tMLONVyg11DDyJyJMY3q%2F8N6Aq8BC5gID5LYiWJBair%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMy2FNfl30PtAYHI%2BjKtwDmRpPZU5jcw8ggkFQP0X2shU8jy5Y3sn8%2FgVsNdtCGsjkb%2FH6US8%2BOpDy%2BldOr8jjbATexXIuxJt7b6Uyh1eRWVXQj4DjqpafGy5q6SLRARp%2BEQnLbAag1RGZGJj%2BPegj%2FGpXUDi9QBm1%2BaCE%2B5CzKGatW%2FsrAHDI%2BKwMmPR0oOCOsZLp6k1d%2B3IJMv6PXye6GArBZxWjyFYNrur6snW60HGw%2FzNzvxL1MRRHfu1T4CRkEcB9yxm5HTtluWwHaOOkG%2BKScX8vb%2F6j1JVP6ghDj3y6LbmuB1zq8HRjGdG%2BDg0MBmBdst74qM9ZCeePEEsuJDW02KdBrqLFztrsysJQ5dRuh6cGkgCsQQIPKm5mEQK%2FvppazXk8BRoetLwFSj0gHS1YRuiy1Uhy4EGACTz3emAKgFTPj4S2guEnjxWeKVfliz1%2ByWVGKKGwGXK7W2TtsAi3%2FPazqLR2XDED6BaSGtnfAekDH32sUOrhC99OXIijEY%2BXIclOFmMPKwFskA%2FC1rMaxcnFghS8kiTEZpvjSGxZL4NYtr9MzpK%2FA85z0uOnpL8tXDbanjOnFA9zMmvHue1EM%2BMjdKyLuzP9aDHxObmgmzVtrt9tfE9T6UMXRVWVhcnGQ20SJyCRslIwyZfPzAY6pgGetWwd5kf225IMptMT0CilP%2BKbSHaS1d03fXw1mCZ4PvoKtPLxymr8grzuqCPc8YIm8x7%2FEjN0DrRR1hzJ8G%2Fsid0fQwe4O5aAI7iziT0OTVGGsNolBXy3wx8VpjZSJLvteWa6bvql2mZ30Yjq%2FSZzkwJuDqIbTeOtlr5E8AZ77E2P3qLOdHvpt0PrxQilz8N4u5Z%2BxNFUJvO2K7hxWYlWUA37Da3W&X-Amz-Signature=fdbfceaa000e6a67200e0ae655f72d34e4ebbea713974c6deac7d34b78a298ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
