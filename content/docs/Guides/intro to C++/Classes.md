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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25ZC43J%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BUiWdKjwbT0VZo0yKzDuCxrbWiS72unAH0dMIU%2B0H3AiBIKJMmIXTYBz1BrSFaYMmXxQTJ7eSiD%2BANSJSxnKMKKCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM84%2BnPzdl2Dv0Oyq9KtwDqbG5GH0%2F2vIrqwkFJhO%2BQTJZ2M7ki38kRAZflVC4kSS5NT3nhJAN5f4Rr7FZsekLBq53fesYY9FYoQPtmLQP0FHMGbsMw%2F5IwDNj0O4Ibzo4kUW03zVz0VTZfFlC%2B4iY5fgU1GiiIpz64K5ov9hOA20YQ%2BBw07%2BDGcZ43gKLF9N6VEaqG37%2Bu8GMOc4vpPkwbpQMMhbwBmtCc61idhRQNyBDC9%2BDZFKNk5nT2sAdxtSj8psfwdDtziVYtpj1SldzetR9uW8w%2BOWz5pYqh746hCoxbROB%2B7d12MYvKop7yM9lH4U473WhZQjZmCU4avJCuwTHP9Y5Jtw43eQz1b5p0vVmpg%2Bk4PM6%2FgmsBDZRFzYxU8BsRDKJAdIrJRp2siDg3xxszZzaBpTFMBKrcGy%2B2PiZPTKU9vHkII8qDSz0GWSaQkjZWghu50ZASHh%2BAFCnKJZxnkjEW8HLNa5DHRJEQCnIRMxtRLq5ygJ92OFhWQb%2BgcsAkzJE5rSXR7VcrQ4oVzP%2BECXninu7avYNkBW4YvYf4UniHAC6rqyVMgDe94FhOopEv6uCSGWJxtXXj13xuAvzyz0vgx8WrpRRkjHT8LmPpT6AHTg3I2nu04TZSVdnyo78WZu4%2FHk3RWgw893kwQY6pgFAa8Td8KRO%2Fcee%2BjcsgqRBKRhtpbfmCR3iNTQlFgp90IaYgd0RxSp5iRzj2ZVncys83iBiBIEyhPvFFD1OA%2FhihtRg%2BPyGoJK2UmMm%2BIMhNXw%2FPJhS6yTPPaje3Fvsz8Xjb37lAg0zUfdDWZ3wuT6SutIyE4rq5mV78GwBiho4p8z7Pby1GHO3jSJlMkgJ3ddWCxPfns7%2BrdWTI6WUGRhOUr60bj4v&X-Amz-Signature=5d55346321260765147b3805d61e69c9569e822d24f6d8b459374ad7562422e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
