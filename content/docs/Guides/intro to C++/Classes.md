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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS2VIC3K%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIDz3bQOQCXqDUhtjOlFJtI4Bk6ejUitU4FE3R426vfrEAiEA0nw4O0duCCm35RMWRi%2B4wrPSWKs%2Ffr8HkKKeODY0Kvsq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLNMNZOjdv11QlLJbSrcA0ld897iJ6F1O5tw%2BmPGXQcheaxqYpJHYWyrWaGVUXydFCa7gFjbe%2BNEMqZSazQgduzEc8lT4OmK%2Bb7EKsr6aVcaqvUBXJR5TX4qsARHrAs4s7%2FFcPAD5eJtwWb0mWLZZpH%2B84lTHpHuvFS3x5TMzPijhxQUmW1IDeqbKS6dTj1jng6O3%2FFuwCGordJSTD9eef746FWOtcLJ64CrsOKv1HBiszy1f1%2FXImBMqOpLoTQceaRQj4E7L0tMkzjhvi8rTB%2FuNY20zuXJd0hxEaYDf2npeN05%2ByJHTGogGcMfniTNcdFI6j0a%2FLq150m4SapB3k2klsjww4SwETrA%2ByFTk6u8adeM7P9Nx0e%2BeAbRPqBlXodxxDdM9e2Z6dn6%2F5Zcsq0y6B8%2FJYzOPmg7TrzNqQAhaTD0VBXnO8h7MU7yjcFv3toiwsEfAo%2Fc%2FfIGccdOlnae4wvpfF8gNjQArsYOiCZlThyTx%2FJyij7qpNRSUXLcdAt1LPF1p1unbHUWWFta8XyI1sCyc3o%2BiNcv7u3L49YDb%2FKNU5OyQEml8EFdGK4wpa3VjScje4zrA9N2MOEM5nd3tqF4OGdf7uGFpXpSIs3vXTygXfXfuaQoTUyma6VcSerhlilndp%2FNLb7GMP%2Bx88IGOqUB3YIs2PsgiaVC6O3nl1sYWZR53ksX%2BpevjTq5sy%2FdXo5cNLhyJ2O7Yj7PweXOrITRDNFuX%2BV5FCPBahbJRXlkg1rB3k0gZm%2BeWbZPKh6n%2ByGivVDtX9l9LoyUe2JyN5yzqRRYbaI3xWpKs8eT2N6y9b130DXiJpeH687C8LCdO5oOZCFBzLYV9t2y%2Bnmv5Xp%2BfJoityou18v0iy6eKwdkAcAJe%2FhY&X-Amz-Signature=79cdf55857935ba57489eb51d50e2dff2fb3ff92680f23036f5a5463b2d58722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
