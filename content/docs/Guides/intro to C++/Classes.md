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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AXDINZ7%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIEtrJCg%2BT%2BTRJgUSiSE1GZGul%2FjfOxAgn1oOtyVd69eTAiB%2FC%2BXTBHgrcIb0ZyzJOFTbjhPi%2BZV7biR7ExUAXdU1USqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu64z%2BgmE%2BuPADa42KtwDrrebuI7mSt3Bh823jUkfSUso36hTAXpOvwbSG2tIZlxtPcmOVfzHCKla6EAN5xF07Gh%2BMgL0eUS9OAWVdTlvs9eyiRA0UqQBHYcjX2oAmsRk1%2Bypfjn8QYt9fWVTpSIcDvNo%2Bfv6D8EPF5jIrFWYUlFDwbwtcsg7QCA0FCCV2HjrCzfDB66uuIip%2B63tLD1LD%2FZJBvBcVHZVIltqr6iLQqPbizJrweIZSIYVWuSlT68Hz7aLWUvHBD6ATMVEkDq4%2BplMShJWrhjoDaAfMFpHBqfjaA9J6i9n8hpu53rg319z08hQ7vyxyhtriGtagJYsXvrFTDwpwk1nCfl%2FtWBgASYOU1HMPyypA%2BRfFkwUF%2BrVhqgflAg1DmHxEpCN6vgGwSUgCyivxo3wyYeocmNO1vl8H9qx3iS5rzMaA4hKmGpbhUiQuPhkNgQlNDgHI3AY52TvpZfzBYyaeNbhfvBmZ8KqoBBJoj%2Fg12inkItaFdyBpstTVmVNyf1PrAdaMLj%2F4jMsFwBWpcq%2B6enQtyufrJiDtJOG8OjwJYPlkRdWNEBpAysbx68adiYUwOhRgXThZnuXLQCNOI90K0fNm7FYYkAQEKqkxX3MQBrfLjSIBN6p9N%2F5leslRh3Kgigw%2B9KZwAY6pgHMeS37PmJPNVoig0HaXwTIwvzCSE7OFYby%2BNDLIjO%2F%2Fb%2B9fcJSiSNGyHYzlkH1QfoQ3K12zcCdjgPgLTkMpucFXDnfQ0NdywfX1embZ4fQf0peMtjlTFGgwMjq2WdgRl3T1NoAp2Cg5%2FuBcQCSFX1KpwgpbGobS5F%2BzuEcjw7q84u6mYVRYOKDvsfO6PbMuMaCMwMno2klIq5dEAnBt7RtHnuZQBij&X-Amz-Signature=99bde0d6bf58b4a625719cef026ea585292514544d9205d87d7280668180afdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
