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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4A2PL6W%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDfRyn08jc7woAjs5XfgTvdC8sASdUL8gmJWZQAqjDPbwIhAON%2Br1tzCrWEvLRiBZVIfnAnOyndfWhpvkDpD5SgrBCKKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuK2p%2FJNz8Y7JGlQYq3ANeiKvzYADsVRv3zel7ZO4F4KOK5%2FBeOrUgCJcGBvtoHDBr1IXUALPuYNk3QeejDrDkQLSNt5EhSPgOmJb1h6VaOGzYoQjg%2BdWLVprZgVTpHao45ZpyEbRH4E1NN1TlPODKs4tzacF%2BPfY5nAl5qAqkpCu2JaycBkYMyEc5VDGAojMf2b5mzIj9iZPggKpWRn6k0Z4KMnOczM75q51WymofJeEWPepZnFBoKCAk3%2BG2hR11hy0ELN2UF6rXxa3L7XImdiAkuJadqVPK8WOaRBQhMSpf7sQojZwT9KnZmwzj3kRWYPErxxeZEcGW0S80502J4l72J1LRlmtDu2HRsk7ct4hMYMHJOewK34XFkjUHbPjHVnKGQER3u9kwqNKRJRdJISfYcb0ffS5RMMM96%2Fp90OKK%2BHwBQVbSYJ5IPLYAzUjIv8jtG6vKxRurT2trz8apJ0NprgKutBizgodDwALHW8kZVKluGGezYzwe%2BkFQ0Do7%2FLugEQpsbwtL09oj6aTMOPOe4hR3JFhOdR%2FxS1PwFb1MrtpVN1AUib9S7zl0BHOw3w35G%2F0ZCwQjQjP1J8cni8%2BgeTfeg%2F7olIJHjNARotJ0eDjZguBXUnFtOXZn%2BPk%2B05%2F2QOZx7T4R%2BjDSv8bABjqkAbPyC5zQECyGA1otUln6bMpm3incvamxa%2Bt7iW9IcQeVTcj%2BNZXrB1YBM0jj%2Fd0uokBSJfCAdRzUQr6eLKey%2B8nC2yWGlUWEZlUbVncdU3T4bpiX%2Fx37SFdTPOpZCHRYl7Z1fvDscF20pqN%2FGbL3syWUkDjF2mHCPI3O0xfhmx2kCpCOrzH1VaArcED0tF6y%2FUpC6PcDJtTa0Kd8am5bsjrK%2BO8c&X-Amz-Signature=0b60cd087f0d283032e0f745cce571ee69739d5a5893305d19d11afda8e2fe41&X-Amz-SignedHeaders=host&x-id=GetObject)

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
