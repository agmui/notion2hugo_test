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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFV7X2QH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCoM5Xbw11GKjjvpPzQDVxYs9cSzOGRN6EIsaZ91TPtwwIgLe1JTlGa1OUZJ28YUuwV9qYC0ZWDJ8KEfFXHkZDM%2FFEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNernvXJ%2BGeG06LUvSrcA6gQnUepkx3gIamSPNNmgoMKELCLmlBAV7Z3Wo8HwvifLiv0UOF9HDQD%2BHwPshtUSiTJAYu8JScj5SCOhkHYNU5y%2F1qIwUgYbppTJ%2BVe6BdyuJZdQSuLLZ0Z3%2BqeUIEyj5oO9fJ1ro%2B7AZJcNdE54GplVma1ziBYve2ceEBZljhxwjhkLgQ3EWy5bBdvkJ%2FjjM%2FWTd%2FiO2jw7s4%2FqFYniDbDF9a4yB1Z29pxxtG5wjJ2gVrtEmH5k8kDTn3vuOGHj43kXoloK9ZaxQmsMTNzNiAQEkAsv3V4%2FlqAkt9gYAIHOsYzjHpv9E9kTPnaI2rezzKxC7yAdqRAet7tK5%2F%2Fg2JE8EhiYG5buWXf%2FirUzGCmoCX7OrKPt9fIbJoeyVohL5AzBm9FSkwllm88l6LyDtIZv6%2FZnB21sPE66pZLxlgtLVnkNQNXSKXCj4iDOBWJ%2BSMej4VduPkI41jYELENS96juDMOdu1U2rSIQidwtkEm%2BZN7eeDEvjHhvYJ7z%2F8beaDkwI1U4g0uea7POj2u2%2FN%2Bpe8ByjGEaXhOTJdVMLyVLdukk%2FqgCplcmUK2ZKK%2FH4xFKg5VgRx15%2BknJS83MPdjzktNmyk0lOs3pixRWWnJBROZWDxUBJ%2BqzPCnMNnfxcEGOqUBwej26o7ajjGfK8YYTpLuN%2BouMHJC3hEuXGTR4v0GUAqhwRNNv%2BfRVbVw7LYEuxpumiTWLGqXWfZDcWEzMi81QoKu0vpLja5P2E0KX8oiHUrxMuYUnUw3MCqdXrWHHnE0IA0lxfHFm1r3iEzw6sRAuMGPKc%2BcmIXY6W2sNfOFwwpZeD%2Brk%2Fhm9wsmNCCahBThygPPCnYdn3EB2CU47YoLKgeRaLtD&X-Amz-Signature=947ac950df6eb37bba0fd6e36a9c2baddd27a06e5f2e77ee611cc8c0c61165cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
