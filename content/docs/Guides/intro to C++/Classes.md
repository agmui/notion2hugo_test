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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XEWMH47%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx1mJZLnK2DhKxcjza1iwc0lRdq7v5ZHmbQLZJWGkcewIgB%2BtNdBpnF%2B2%2BsziTL3XivbP5pul6sqkege0GlM8LY6Iq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIsLPSamyalBZmQxWircA6%2FhzeR%2F2YKRQMaeDWwPzadmwIeG40c5fZf3GeVY1CZzC%2BLem%2Fy4jsXaxmF7h3zRTOQotkBS3h5SEzrishrhYPWjfNYcsKtvI6%2BeHp6sw3%2FglNTtZrGZL3dSPrGvETQp22ALKMx02CqTSHSIVAj2ENdhRVci2pdMSKzfmRcr4kksDkcI4FM3nNEdK5E%2FRWjgbC0jQksSzE62bDhWk0l3u3%2BECe68xWPsKowtWaANoCThuwul1UZb2XDlRjVXKK%2FJ%2BrXzJybw3kFu3gAfhi9i2y5toITYCnopUZT6viuugMOU1fQK0sPYM3h3AbDJhO7HX66tODxxUTdTpoHnjkbBAS4ubGJx2GuH3Nu06jan7jkpu9iRGtQYYdqVWB7%2BWWFd39RwXQp1itm4FfarRf70u0v4VpStqiRnwOeyFNFGvBBn%2BbECRcM6vb5KuCJMlJlscsCezqBkCL8s%2Bo7ZzSjxQ5mhFGhfRcJ3Cj1VjPRVjbwUmoYXqaC3W%2Fc8uHTdm2RujLJfLcI8oV17FDu9Hwa4BylzfhgYWzHCCiKeM%2By2pPDxxhU7R7BgdI7mzDhEJEjcaaSibyBXuqc9ZgdSsupnMjybnQmEWnacN5T%2B1KdtFiFwZP2Dxm6KVk9%2FZYdFMLLOp74GOqUB%2Ff5Uc6iJKoQhZmGD%2BPTDUECkrSuHsoZZiYFqG%2FXPNVAYj%2Ff2vTTm%2BnD3u32Sq1TzjsMpNLtLBHKvX3TfTVSFm0ESX%2FeQ1isZr7h4Sc4s6KfAeD6oWimk3Lfml6rcueMS70eO5UXqdMbfQtBawEd45vdHjrAVvIEhxbNAXlsA0kll7KuzWYRalsxE3Ql1vXtVBBDzGMYpZko%2BxED3ZWLP90qrZaLN&X-Amz-Signature=44263225aeb41119f8368b3478af961116aa4a698b915868a17ef692686a5220&X-Amz-SignedHeaders=host&x-id=GetObject)

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
