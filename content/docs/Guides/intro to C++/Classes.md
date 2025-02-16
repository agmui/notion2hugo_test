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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEH3F6QV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDQNvuKpWMS%2BFuWsalL5BICrHOfNYvbdlQzbHU3x13nJAIhAKyqkljCje0%2BpJywxaabONA11yPgnjURtH%2FZR27xN41SKv8DCF0QABoMNjM3NDIzMTgzODA1Igy1Wzxd1OmogBaZe%2BAq3AN4hG2%2BM8%2FbcEDPpvNrBgS5ALm4jDWqwBi6xUVQktXYH99wNwIsF6zfe1sXAqBeMgvGjE%2FfsyokPtxKLM9ADrYi5PQ0iklL%2BqvnkrFZxVtKiCG4qS0AjW0vmDoK2byJnvAiHT5LWJkjUpogZ%2BpNMpVn8%2FIykQBOFvmL3ZdRDC9STRwihaZxT1Ewj79m%2F8UITmeCED%2BCMLjXGkiKqIwBWTDWoGVASGe9EAL3b4W%2B%2FFyOw3DGfklECEhQHA8XgIg7ONFacAly4mSpYHd6%2BfCpg5bWvtg%2B6yDmUl%2BwPkLRZhTSzT8svSJC%2BKVdx%2FXjisejas8K9LJq9miEPXBSjNyx1LLBFSNifyHIqyKy%2FeAFOAasZZB3X%2BN%2BBgU%2B6YedNgQ8ZzGp355S8a0GWRUXqV396rVzBPkqPC1LRnc2I%2Fpxu3s%2B7hRZof%2FtIOi19uxfdleoRBYZe8enBuSZlfM4SS9Ig2KCNqS705raf5WauERAQaz%2Fmv187VmjeYgZW8mrsDVeKSvoW8HYVmzV6s24OMrkZpPbDtOnf3zOQAHJtP83qAGg%2BbO5aRGSoQ4t2yRnUImSsNL3ij4wdiPakUHGCUX%2FYV7epG%2BuVSWoJtF%2Bmjq20g7qbiEUaQA8IXlclPt4dTCsmce9BjqkAXs0Tgzut368TDhVCs%2FUWjiAL21dIHVwYTN15%2BusUEAJyFQmuZ99Wujf%2FPZECrM9fbJqVmSFevm3euoL8uBRcvEmURDOX6fpZEvDT8um7CU6Sy%2BV%2F%2FJqDb4XtUDGMPX9PWqyJAOwH5luWU%2Bu3aFQ13hWRPBp2QMQ1Cpl8iINdR13mQrSbMz%2BzJzz4pNrICHdFBlhdbHcbP8JbhjIMh5Xhwvdq%2FAG&X-Amz-Signature=8dedc306c311cc2b176f4450223d37fd1b45027a340bc72de4a3f046fe7892fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
