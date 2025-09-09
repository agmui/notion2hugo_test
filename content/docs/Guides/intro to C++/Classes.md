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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666E47S65%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGBayHUtxiIJikLtT2HDT2ONUx1kkLXz1z5ydVG%2FKf%2B1AiEAndRkejvyL6IWXLCBn%2BCPt0frWcnYG66oi0yhR21Kzs0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJATLrR3kdjgYcVxmSrcA71VaC4AJJlmCMJ3ddVpFKxLWrSJOzyhhw2RXWCwrvfmg0UvSbEW7lkmgSCChT9yLIM4ALlXtuUF8Kvt%2Boaadf4S06pCSXnWivdjnhexL3DTt0MjM3rruQD77zWEZ2lFxCL3azrvpThkcEqtCjY5jD0PrnfHnn0cHdhxEMXvilrCfLX8sfim8sTyR4mTYdKrrNJ9OzCbiI8%2BCLrQUxCMgkZr221DEDRmWnXQviBJo8sBNYA3Zj1%2F37%2FvvshPfIxd%2B6Wx6XhoaegMEbVtxtiKrwypzaCciLxa5332LD%2FbXpkmTbpJfe7WOoCfwOfIFqsT1XFAYIvcpuYW9bqLD1P4MulO6UNiWxJdk2W3LjxhmMFTWLyBhzpuf%2FeCAe3U2ot1AF1worZIz398NPKbldDOpTnxSIbGonooiANV4SnjkXUFD9UyJVNqyY34nf4IfmSuCCd61faj2HwJSksWTLwMwZIzclfM3K3a%2Bwq46ZXemPZh%2FAGPJOqbBt3DCEhI67aV70YKD5A%2F5xphu1ozu6vfZnNPO77%2FqMzPMksCZfDVTZZvOoeDHAIT0iqLrIBFxHEAjkRPVsCC9PJNI%2FI%2FJdKEMOv7PfU1p1zDZJaYtRGuc6WadTPbopS3rUkCkC29MP7y%2FcUGOqUBTkKXzZKQ5MgAnOY6ZX5L5KlyZjbL1k1gFPSzT%2F%2FWyEnNybqUJm04gh8nZxzd1ZH8O6lPN1RBNhxFXL7oTy6xke%2BO%2FW8UQd%2FNwCztwYczLI4Ce9hi4HpCEeHDyFUSExVxNMhJ%2Fw8lPj4iA0dnJ6%2BjXJ0BHi1WfeRvju2RSE6JSQPVZpd6t2HNminHTBJgPL3p6BPFW6YFhzFCRBkQ5Tl00Yxtggx3&X-Amz-Signature=b238868f4cdd06601fe2e7b0e234f3a959b27bfe74e104ed76397fb091e929fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
