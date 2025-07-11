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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466753TCIXB%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxVOQ3Vp88RD7N11M1ksDD9luAy5l1J0OzLLXOtbmBkQIgSvd7m6%2FzTsMYrCYK4TZLt9bgIiBxver%2FyOgKg6zc%2BYAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmJzYAlCSVh917I4yrcA3XSd5J67bBxGeJCNhAMD%2B9zhyhBUsmcMIPL8%2BygSdt%2FHg6HaPFBJyG%2FGmCTDUEPLXdwTKPYEBwC9lxvI4nh8HH578p1COag60wDJ0q97YyKLLxFgHXt09%2Fl5GNtePSr0NShWoF0QLXtNh%2F7%2B4PmQ5aqfRMaqBUICdM0q984XxeT56O6e9Z4htIAftDHce%2B57iSDTVZwN7mUFMuMVUCNtRDWA%2FjN52ZL%2F5loIAnpcR6gVrAg%2Bq%2B5V09N4vblOq9x78%2FrMd2BKJWyl7zi1LetlrVRRhEWhl%2FKbSvGgKR%2FJtS%2FeeEckYEft1NfBlYMln6qVllQkG6jL5UccOwmiPcCSFGjGrxcz37Nk1qpBKSwRcYp%2BcyfpJAeKhFJqbtPrqMj6UB2JDhfwhcaKnTHdq%2Byv6N6tCM%2Bbrbfsdi4MNKwmsWp%2FzycADa2UmSauLFJafItvNaRePr80TpphoWJKTPKGPZi8DtaC8AsPT%2BgNQeK6Z%2BndhroFxSoaCZFwTrsUA2Thi7kAwcqnnoM2EVqFCa7mj0Yuj%2Bl39t4xLA8pQE5om1M8ls3nxUpjnRb1hqZgL71z3qsjI1mrLSJlrb8x5EqkoEfjGHyVp%2F48AKc9O%2BRYorVa%2Fyst1I%2BtzrSdvghMPWDxsMGOqUBoVi0VISR9KHeZWscbOAUuRkIpXluPO1YGwGm%2FoLc9XANflXz7clBEsK%2FkeF0mIfExSOEHLiW602pNpVf9NKM5eI66MuA4LmcHOjNpS0x%2B65V2VyWY4NQ44IM%2FHVb6tld6CsUoDn6ov7HQHTnJJYY8E9rlOrFtudw0gh3zKdc%2Bz6POSQKxcFxpsia6H7dDftaahdIMfEGqR3twEcw1mCe7%2BtPE8rj&X-Amz-Signature=9d1c092f7ea0c4242e8fcc26ee0fd33b3795637ec7b7374c2dc5c01a4b8c5952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
