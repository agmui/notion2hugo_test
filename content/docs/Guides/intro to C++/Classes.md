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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TLJNV4B%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFe3fjZCL8OmXz9cUFWUIpKFMYOnoOfcmQQhkItKtOO9AiBjBFGnVMOlLiqCZyC9fe%2Bzf3yjrcwmrO6I54LqjzDnayqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyyVz0nFCJamwpMcyKtwDJ9LigSvG4HYOcxGWytI%2BLsMH%2BiRnuOWjvrspvzRVhSuCkR6wyvTqDTx3C8b5W64HzVEzclP4mlyFHFN6WYng7ugQOsaNvWSWEJaEWiqO%2Fvuth1ITAv2KUXkd2XsIjSoZH3RQJpx0spn628c8QBmwITcR5Lw5R%2F5PHgQHV%2FAATPgQhibkSSGEw%2BZvBsNePvJzvVysYA%2FyQkllZhAbp6oyDsEC0OwzHypWIZoqRNUdBeI2Zai%2BOI%2BJoyTaZ3WD9fMJkLd%2FWqRoj8AjxQpieeKstz0MuMXEsDKsAD2JwVIpCAN35sLgRVgFeXVknQ6tL4Hths%2B9j%2BJpSgS%2BMF2nf9S5lylzi1KRLm1gv24lmSE45%2Feof4pgjA1%2F4zb1QsGktzfPcNlRdq4%2F5DmvgnvttijmscjvbTLZFLgFBmhk5V7qAzJuo8QPxZ84pMkUSg6bzRaYGu5IMcrfI8qItkfcb%2B2lG9IIZ823Cwvpg5yo2ITVuWmLaueAIg6m1g7vdltPZ4vp%2BkMRYdv47TO6ADAwoM02w9yEAKsDHlsLf7ZIN7Rato%2FdzAODmGJ35wAOsBa1i1LHY2wOaZxz8tiWX6fCDm3Wvo%2FtO5lTxEbIM3rn7vn4ghmdcE%2FNQrv2%2BIuJtVww7pPEwAY6pgG1m90saI82vMaQ0wMcAlOLo0OCJUQhXyiMHRBT15DBKLqF80FdcTcwLG0vICr%2F%2FSL%2FRSSWA783nKaSxhA1U%2Ba3rE0qjD9rBCjsaKsBGjaYt1UpY%2Bdq3JZqG%2BMnuYtmyymiIhNL9J9Dw1RjlfWiLY7Kx%2F8qlZAi16QDz0QeodRjw5JVsdEEKUqKrTvehSRLsq4VQUplGkqZooQpmajJsmtFzUHr5xfl&X-Amz-Signature=24000e81baab2351ff1a49722f4534ff1728355dd926d50be47c5ff76df3ba9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
