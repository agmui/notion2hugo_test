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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM2JO6T%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsX3wP%2FONHcVAwAfWYpGOquzJUp%2FdmBqwvhhobwUA6iAiEAujUPuSrQxpq67coI0lj0qiCFD2uC5oDWQI7K1fekTJcq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNLwuCS6BHAKkrGBWCrcAxxueCGwNQ9Cef%2FVoakm3xvb9hUFjlDJmqiG3xxjoxDRl6V1gNDyt8ty84Riz8jVEsgL63ReaWRKNlnzWHWqM0ZOyY416uXE68nNkfn0Rj%2F7ltwPA6hB5E2DpnY%2Bn6iG%2Be0v0oq7jBjIqrpvZOUqvy216Nw%2BsaAfTFy5%2FoSeF9izCTX8VxKpptnTgK7ybkjync9d5PgQY%2Bj29U1i0SFUTjLdmTlOZ2cC4h%2BKBrwflnLdqbqOG4aKWvtaSgiloKTfz5kB9WsC4zuH0Mw%2BHQvwUYXKQ4QGrHyN3YWg5BG4Ns4niDyTRkjeZ1kJov1dXOtcWgN6hOJ9rbIG8umgnvjatqFmhPXz1K59zK0GdmEuF%2F75zqgwp%2FkBSMjO2GeGu2fqX5qfwl0WlVaSr7Ka5ZGicf2TqdAMLPrpRIZmw6QtHwicjEMRG5CD%2Bfle%2BDyPXfNX7sQchzi%2BV%2BwMetmcfZOrD6tGoRC6EJaJYq24BWqEPU8wxyxVpBe4jpKKSdjAKDKtj0tvaBEoFIPbMYc42M4qyL213tP%2B28%2FN9QIAHt2I2GP5FnYPXet55%2F%2FErHeAB19Lg%2Fz1Z85gkTz%2BAypyWhXFdoqM36oqb48x%2BfajRrhIZh0%2FQxqn1oryjh79kjIQMMOE0r8GOqUBghp2lBuBILmDATw%2FHA%2B1QayspL3tDite24LxJ5d%2BugqfcEdXPvPl4akPJ5ePAmtHOUg%2FqrhMp7YtPFVQ%2B05XAjpt9IBiFiA%2FsYRYdE9LtTY70KyRa3kePw9ekPnCnyZ0coJ6Xw2pda5ghBCk8xJF2WTYPOQ5DVIdKbGssa0PpBnO%2Fy%2FDxuEzDgqfQYx%2FJm4AOI5e9NggW2KBqWHlkhy%2BwYbUumDS&X-Amz-Signature=726005926734dad313f4857f7a0e82aad3446573fbbecea93e7c458ac04e7456&X-Amz-SignedHeaders=host&x-id=GetObject)

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
