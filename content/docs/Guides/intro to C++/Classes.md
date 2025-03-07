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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IDRGT6W%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHc08WAa9tAv%2Bgeb%2Bunj25%2Big7mnsgeGLmjrk3kxgFm9AiEA3Tph5l7dZiruiSXAA5D1p05FW3OFtvC3i0WH8Z1dKhoq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPyTieSaSQj387s1iSrcA4rb8nS03%2B2NEQP0tTHJi1DOGqBYhTPlKNGSxF4fqJwWuTdMGInUY9no%2FE3UyC0CCphTXcNrMV17qiBakvexW9LBtoxNI639iUA64%2FApcqKSPK55v90pKqMrLfL7%2FZunyCCQN%2BqRDyfJZpbyeEFEr5dMpreQo%2FMkB%2BhYepMHrj1DAYjPbmxqr%2BQVvwK6dMb49zNWjZfBSoEVbE0%2FnuioCjA5ccqUtpuMkg%2BF6M%2F4OoA7Vg%2FtOZG9qevx83CJepq0%2FL%2FDYLUSGwru8Nu%2B3Exnfjar12IeIZ2cZQROmGFQMt857qDWiCO9h49SZyROeerf3qdMi%2F4pnWGTFs3dhSYXPTFyjTP7jUjR5thsaWLOyjQzTNXUEs%2BCqVxrqvE607e6YiIC0LGC%2Bf1as0S%2BvNVWShUvG6TwuxfsHzei79RkTygFZmSjZ6UuVUT7DpusO8Xtrz0lnNeTlmtdYo13ON%2BNER6Vrvi0l48i6Dg6vhvFMdq7rFg%2BL7pH9cDj3uFdkWVcNy6fSnkcYRTExcLoFYhYDGSAEldnbKDYg3Aq6Wlm5lE38XfdWKOYX38xXGZFxKiZ5pnuF9nOyCDHp8gQB8EvyQl9LsWo90yzsuwau9GXm1Vtkf5qzG9WgMVhM9tPMJXgq74GOqUBo%2FINXj8YliSt4fJGH0mgMxwbR6HTrAx5iozYt7dsEXa7WbB7CjSgdse5UxaJaYevC7lZIl%2BQ45YxqT5YzhmSlM6TjZBRvbSVujTLmPl0W%2FXaR8pkKZR4Ib4oAmhJcwIiaDRXE0VctaflDQCxUQqp%2Fng4p7WhDyM2gdEutk3hw957BDDZmBpbl6nejbrx0Pvh4vkMg4s03GbtEg1ozc9i2ZQW3BA7&X-Amz-Signature=75de8747f0f23323ac261032fce9e82bb893feed8e5f1e8951bb60d2f997b1eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
