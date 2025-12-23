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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646F4LSK4%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBMmPTE2zUABQ5i0Ts8fMjMC8p8k3VZ5rYGeDeZi5EOlAiB%2F7a3N0c%2Fl%2BXLy0iuadn9JGDGsEX1%2F%2FOgFXRrSjUbyyCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIM9Qe9rCcoYTovBsS%2FKtwDhJquCxWvLJrs79YGoHNKKSdqTefjtDkg1TTz1n9ZEBKZK%2FHsAJ%2B97JF0i82%2Faqb8sr2viTXBe4bnHaNGYSjqYwvrGdVSFMkQh1WDUL%2FUaOcfN0lL%2F6NX%2BPBD4%2BRQ0ONXHBOxYlv%2BrsVyp7xLIO%2F98tDzuU16195%2B7mg0xL2UQNCG2hYDE%2FkfdCH6gtuIozeC8MswLtdfL6%2FC4U%2FHgLVfiYMj7xTvMAopwYGSXu%2BpOb95ajlbcrh3ZSlKKT0ZtzMnP%2FD%2BC5IVZy0A4xcDQshqosh%2BOwIczDGsRvxfX5SdzjGb37dJ5AejmLmP4q0X5Bd2Iyc4XSlqBJFNPyvbKxESrbFdz2KTQfMGdV5RF00AyRcmUlGWLK4Drv18Us%2BYXdIzNZoVhBS1Fu1NxpwiXW1VhaId1Vn58T%2BJ4YC6UKW3iZKSR4WxuBO9cdnzPcQygcCeXh%2B6bdOnrM6ainBjCr38me58IA22dM9KcBFy7Ce38Ybo5nNo37EWJ9Xbzav8yA9j1N206qtzppJOBWQo6n5NQi%2FZgbI6hY%2BDmXLqkgHPYgtjvm6UsU%2FgY2NpV1Rptb%2FngD%2BsIMyBbh6wCw33hNfNHiTz28YoR2rckPmVyav2xj7MICpj2p7zmYLD5EcwvuGnygY6pgE7ihkOllr4p7%2BWylkBOOdfJRlFNuLxF46GCLFhXzzoiOkkfvnmF1GIKOYrNGodVShuhHPI5ne1wuiREDD8xmBY2AHYiISUJGOCpJEVq%2FzWgddhbulaIAT%2ByzHXmLuRO2EeSNfQshCdpGPOpFUH0j0VAzCePd3rhtX%2B96JXvd5ZzovZV%2BaNIJonk%2B2BkDcvIzHwdo5oVxg6w45Zm4EEIckV0kwsiPm%2B&X-Amz-Signature=9672c648cc9a42a7f7cf0bc96b0c8aaec979fa749ccc2b11b6f2b5aaa4cc0398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
