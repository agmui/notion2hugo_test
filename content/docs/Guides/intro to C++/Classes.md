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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K6DIB4P%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzIdSVpbKBM%2F8pmx4%2B83YPUHNRTEPQAeeDkKbnc%2Bos9QIgCcGX7goAra6kS6RST33uPnwxaCgFnbtu1OyBhaspjHMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDFZI9iONYEiyxq5bNCrcA21bVFqE8Dn8r8cg016EC62I3%2FkhVpXu1E%2B5b8dl3cj4dm%2B523X6hbYH38UCLQ%2BLvob%2F5v7G7Q9A57YoMVRhGxJkRzNLxqjm2FNexNCHes1pI5kMLzef3Vbcp%2Fts8G5ZZs9jf6d1w5z6g%2FEGAZEAvb1F62Z9B7K6qhToxLFh%2Bhj8I5CO%2Fb41K1zVXHVLsGXoaTTXjZKJ2NPZ8%2FCd1q9j4Vc2nxqIuYPqC76lcHpSoE1NdU%2FZMiljy7hNGfi6671oqfnzCNMtImHrZx2iO8pHJ0efEnJ%2BtfQfRnvajti7%2BGoPRko%2FFpcTvtPfxBVSOPzTzoyWQ4aNBH8PChESmC1IQISR7JID68hFsMCnqdzuncVC1cJVdPl51e9DdZ5kTlLGoKvhZKPemRNDqzsKl%2FpIGYltHx2TXXNt%2FCAJgABJKdtXOjMweXHdKRYk4oZjVeEfODHlkDw%2B3cPZfjAkx4lkqXfwXk28GIYB399OSmrfbDKKcmHrg5s8%2FKV%2FQavgnnEQT%2BQqZJEfvaGiMOiBDJTlAKK7Z9%2B69zz%2BvjVIhgyn0iPLWVoLcPwSehVgjkRJMJVePipeiaEfHQl3qUmfgZQo3SVRGS8lNuFF%2BtaXJBNlvrz8Xfvd7DQxoUPsWx%2B2MNa%2FtcAGOqUBYaXKdOkYMm4HIGK4HGc7PWRm8Ne%2FxzE4431wcM4mWbf3mu%2FpZZwxZ7uGS3pbXXTLSRqPN3N874PQLZTcdT5ap80uldr6yg8en4%2FeIm4X0Uo2l9CpHUbFTcB6L7hPbozqiWTERIcLvv2mmgg5%2BxQBRk1N%2F5KZewSNCkQ6RNbxrsPdlFWnVernA7anY5Q%2FclohP0pB%2Bzw7uhvyhDBurlkl%2Bl1hGqIc&X-Amz-Signature=71e6ff8387d93f5d59c1033752139faa715997d14813f8d8d043663ac5c7d026&X-Amz-SignedHeaders=host&x-id=GetObject)

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
