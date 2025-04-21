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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSYORC3Q%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIHbRjRfP5Z6aib%2FBbhuRRaCSBeHH7ntDwTTl4TMkX48AAiBCDqlTxCPgqI%2BK99ShijN8bPrwfLUSAB9EH3%2FrzuX%2BMiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjB3BQjCEC18j5NRCKtwDEtMm%2Fsf7PhyyOyfzLmY4odeo1dmbx%2FAc%2BLJqg8ojmOazH7tna9ZG4hnjuxvs%2FUf4%2BtNe%2FYvi%2BqkbUkazX5vULRp9sjvNv1uy1udFNR6pp3uMwX2oCzCPo3FOmGXsjHwEnClZHIotjvcDh%2BP2WsxVWWG52iXIS9%2F5r1MY%2FcmGwyOuFYLWFy%2F7R5mszwUgHcfCnqEPnq2yAKA2t6UrFQTkdjqlkBrTc4120CFCbFWiTnZPbg5H9fFRxXHoWPmsGBEOl%2BdE44297PWPQZrdPhPUqQbql2b4ZKSRQ3dmYaDoSpNAR%2BuB%2BPJ22ARIO6ODMamEhsTTm%2BBr%2FeLZbOrTEMMAaBQ6V4sgh5eOUzrE7K6l5vAkYhkIhiDjuJXHgu%2BI6pgjfqJjA6HPb7Qu%2BULu6w0Q4hEw%2FsBXmGJ%2BqURojDpTECc%2FkZ06TKoune7u9YeFu2a866G9nxCJx7hoHUtYdReb1wmKkvj1D8Ezbdp%2FjHzUywFB0zc%2F8zmMWooJFOGr9rr9dDc52voXwikNW4EqV5cyo8pnZrAV%2Fpx%2BE7WsfUa7wD%2F%2BfWG%2FAV6Pjfo99GZgGT2EBmc0DJxZrS3xSJcsYB35vboT9An2i2heSNd%2BnVDssmrATeHrCcPtzaCXnYQw%2BoabwAY6pgEkEJ4Y1k4tQg0RnZrgYWsOE9kvR9DnEnjw3j46WQl3z0Da98Bs3t3mkhttWlSFMTeqsmz9ypd%2FO6%2FNGOb0tZ1R1UkyfWHRZC41xi7XP2AN5fIwQhG7plMDMqvh73co9PdaMxL68MBhY5QMkSRSg6eKNtm813gvhn5IzDwzibNXzxOOI8oOFfp7Hz0%2B00jjsEcRi%2B800Dy7Ah%2BT73cY69iNlC5re7LW&X-Amz-Signature=1419bf03ba97731a6f6e85bf91beaa867fcb83dc8bda665a65acb2c13521cadd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
