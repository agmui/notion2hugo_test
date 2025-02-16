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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD3MF5QZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIENZvmtKU0raGQJ2E2FGNQR%2FzUmGqrFClS5ZSgTs2EPzAiEA%2BSq8Q9rmikx43nvuZwYqBu6WH4ABIrMargKCdHFtxqsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM0rcuJFUs5v%2FtdLayrcA%2FFqFUArpEa1W5vOw5NH38CDr6WfCfTbJ6JKaOHpD0JFcNNZ2UlSZkhrM0tjYAn2bRdRZb7hNbEmrgJPzIquCx8WL46VdJdGp9NDhJ1DwwWy2%2B0Qour5cfjo%2FbClAIQvvlla7J2%2BSeNuiTjFoKnbnVmKOZ8ikXC7EUt5KL5aktejh1ANE8%2FiuNZMnCt%2FkmyrWs5nleqtGD%2FClWKyqmhZONl24BSBauYim3%2BY%2FuB91yeLsiGwuUk58bHxp8nBAbu%2FOlkRq%2FbE3M%2FZ86a4CUnTlA%2FzP%2FdKa%2F5tBABEGS1SLkeu96F0jTF83V09AF647Vj3lV%2FOoWOYsPNfXhqImT7CpkuhqaSUCjmw%2F4EAE1LeuuzdqoicVO6Mb4f90q9b2r9DR9gvDr4Hhd%2FbtgJ7RZjZWEO67bTWngGKVlSXYroHRluQPaxnFgewgDnsd0LW7DlxIkvNx07ZfI4htSbk19mWuADRHbu%2F9leijYQBjAjzKN%2Bc8R71ebhEXCkeW0EJCEC3ekZprPfqmihJXJRC8ymmWzd%2F%2BFJfSa%2FxC7zWU8hZhrMnc8hiDfdVTxU0KJ5yak2uFGYIF%2FgwZ%2Fqx4R3K%2FhEt%2BHohKaaRsbUEbaXshLs2bbBJygO2MZsp%2FYWvBeBoMJiix70GOqUB90M4Ysbjh0Ldpl%2BLBgCv5%2B2w%2BjtpK7MrRm%2FP7SKXrGWNZd%2BuPi8peC3hNtzrlFoQVds%2FNFbGFKeUFx%2BcpQV8o0mIdIpRRsna3AnpPB4KJB%2BquRiMKLfct70z39XEka3jayPwUSGQCi3omMY2UqxB6Vype6KsK2n2MzfQapJXgkhHO8EiUD3LWbB2eQZDESm8%2F8yGd3bNk0SJscdAB5%2FL%2FWZxV9o6&X-Amz-Signature=e9475c2ecea5b7f1315252501c7d640beef633da2124d5cc2009a18a65c3971b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
