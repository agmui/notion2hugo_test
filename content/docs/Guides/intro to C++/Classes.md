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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4DTK5Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGr4ShvvmhYeedo%2Be%2Bqb337C2QRLilJMyy9Te8kIxXCHAiB1a%2FEtwpbtexQlsJOAZa8bdja2%2FMdiOgNIQgVVfr9DeiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMolsjBO4Vc%2F8DlXEqKtwDDUwBXGuYL6JiyFirI9Y7nNwUnxKj5Aruy71DjZOqj9aC983fa%2FaoeDmjsyRJVRUSh3hUxSNPj8SeT8XQ8%2BJrTG5fqszB0%2FIh%2FuUTMlKGge79d2Xy2ViEbxdchoz%2BTn1Fq%2FJ4jbZtpiXcWKdFrcNzFXRSKzfr7khMv4Bcv1MTHAR2YxIsAgvyoeVjcZRk1SCSo4PTAOVgHfqog9ZTnEP1dR2n65X2hXqkzUNt9iYy7A6TcDbsdOrr5%2Bm3k6WDreBRjtFPmBMJk9R1g%2Fkzq7Xd228ZvOnh77pLDQTzn47UW%2FWalnIhYxjs%2Fbb4BVW2QWKCncH8LXC2Bk0taMf5m%2BCAiPT7IYeXIzbDxXhwbepBpS1209D%2BzG9EKaBmc5h6GO5YxmtoKHazDojGrHZjRaI47rji6HUTtWFlQMTM%2BBfmqmrjoOMjOPDmtlpP4vXBovpTb9rZJLzrFrmzhk8ed3%2BYXoVH4EB%2B%2FNL13nJU%2B2qODOiagRIZakRv5dGOT8%2B%2B7BTPp4nptOFcj5QPxKMDV13NC%2FRdt3%2BzrMQeVntTkbUXOBS6J1nSmyKVYq67qy%2FVnFW2nSOTo%2BJAy1%2Fe5HqYHaP4dT%2BaDM3mEIW8aiXKN7dspLqMWZ3TvWEL1wMamZYwiPWwxAY6pgEL%2BinEQfqrxwy4nEIeVV%2Bg0BCzTp7GKYpoBGY5zwEBrOSOl0FEhKoi4MZafM2bb8pAeZ8jOcEhqQQn9UZ27MXY%2BJvNjfBkCd1DRBfJlig51cmn1tXhfWrTVzdKkovjoC%2BDiUDvqfBKuWkLpD%2BXy3n0aWZaJ3sLKlvf2pUlJJ9a9%2BSib3VtJBTXu7RwYngi9KMJcJaR4UZ0nondXlYBg79zKWEo1V%2Fs&X-Amz-Signature=70d7ff0a7b2c6186b9e16f04e4f2b06e33b3da8030b1d053bad7132139a4c979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
