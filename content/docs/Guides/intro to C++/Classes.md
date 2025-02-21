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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLYSIQTT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLAwvY71gWIkdACsIbGbsgsnOIGYRnssEJRG5FZTnVzAiBZg%2FWsWfXoGgV%2BkJ8Tu8FqbUnsP2O72P%2FdoLOVX958KiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML8gS2ZFmXUVw3L%2BCKtwDXBDgCAQdnkfaBnSREaFc64dt43wmXaEb7rXZhQUsMQLwFYv3ih0rdYnWgc8VAb3b3YTYOJCdJud%2FpYIVyIZYmmVmjzPyE09vToy%2BUdsN64LORf5sm%2BPsQW%2FRSCTSZexw5DhRSzlX3zq8fNYxHPNycijNKja7F6nH8WkWJ%2FbPBWajwr5uDYNVp0NYgG5pa6tSf3i3J1Wli4UHYwuZTHPmVPQ3Dv%2BDVvkJtVGo%2Bns4OQix4YyUrCITSvA5IYLD3n%2FFWEp8V%2F8nGCsuxAyRL9Q%2FWQyN%2F0YQt4Vsz12eVP086OZWTtqqvVrcIR%2FsqtyBy8lChZSIMKPwIEXPtEYLSxu3IPwZVCKEHset8RdR9bKRtlCLNW%2BQMZ6sBmXIPghlvZAuR6XgPumTOcOAQCNB6fr6dAGdo4Z2ryc5gZu46x9CeUBEa293MNwRODwLRxF%2FJj3bZV%2Fkzwp6qwjcF0nsPRWN7XqrVA61dF4U9%2FUBfeP33tJysnPewi9WPNfjyIqrmL9srPYzmHFDNyX879xKdOCQgtlxyNr1sGSy%2F0bYjUwsmiB324KnRaZpFQsBJD9Wgkk9WeLo3H3t0ZuyIBMoHxsVYthN5LDnOS%2Fl09kXvOIeixQoncTJi8%2BYRNMBKmEw%2FYPfvQY6pgFBPsbbQ7YEyZzejTtJZLs2ZQyFVRgzuI6iWQIAoAv0MyeRUE40UwerUSzJVMt%2Fm8ROszzxiV3nJpw5KZ6GVJLRUMk01cuxtH3B4gy%2F0qw%2FH3qndj9B9clHAM%2BuAY0doROAAgpd1500hJGPeGV2bcg%2Bf69OODhPc0ghceGWX84pIqBectYR1okPUBN2Zh0fmZBRVEtBKN0%2BA4cfxHsWk75v6mxivT%2Fr&X-Amz-Signature=0dbce02b63dfc6d23b3271418d133fa9a3badacf76734fe359b43a606076d40b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
