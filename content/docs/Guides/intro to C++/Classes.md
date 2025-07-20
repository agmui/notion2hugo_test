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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEXHA6N%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCghDjJ22Q9covseLadindRrbIm6tedEnE8VAkL1OKdhwIhAORn%2BhJ%2Fl03r42mdIRtu6JIZHg5tKV6jnnj%2B3IZm2VUVKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyGBMutFSZDaEcNEAq3ANzjjOAgJiQPJvF8r6K0MvjpQ0EATZUioffcyHD6doM9LZMVQguRh2oZgzYqXyg%2F6wvcVV%2BtjMgnIR3a1yqA22LK7kwWe3Al0KrIQEcteTIOqBWBYWjxEnviaWxwcl5EJbU2b35Bg0PV6JX9XvpkgfkbGkxEzfxDLf9DbIS59sWdr7R1nnHFehm7R%2BTaUPMjkk07Jl8zyMfnp2lpd4ut5zX2am50ZMSBFFYBBt2p%2FwkVZGV%2Fq1jZDvB4o1c%2FtoAL3hhuVFXyobCP2rLieFdgNPZtTJxtBM8CNKb7rsEo6LLUML%2FoXtAYnJdoXE7liqQJeoTZWSFypt3pl2kJKn9PYBoXZTqZwjMAdZExqWgG86Ae69zayJV3EtIYqE4rbZEVR9LoEMxHxcD1qMFtsI2VmGqV93soNEvWqyy7RSFs8e1mdrfAaD19iSsSKh0LQoYXZ8nMf0XqqJbRDdGzfeXIczjbHz9nxThancgerW7VkWb2jwhfvBesN3K30BxMnwhPuVVtsa%2FKIkDgVZl3b%2Fe%2BuDlYdhjf3toNJimsra31aBlCmr43U%2FmeDGycOKJdtAK%2FTe6fI36nEB%2B%2B5QTYdbaSlfklWJinxSAZ8iTxDikxXrM4YwBdVJX2gSh7VLPzDCS3%2FPDBjqkAZQgVpHH0aholRbZWP7Cxb5BjKZI6sNYe6yPwfJuhx34wnyfc4qxklDt8I8BE%2FWuGrRhxZDt8820mtI0N9m2Orqn0lhS9O%2BOfvwpFz4vXVeZRzT2E9SClNARZOlddgeUQ9epvU7411GXus96vVWT34JQPHSdHOZF%2BNlCeG7FVSXBPGMk0rRfdFWJkEtdhbGFdpMpxc1KfBmAZc33LNCmkgiGwn53&X-Amz-Signature=aba794258d5a67a9e90fb91c2d1fec32d6270bf75e0317ba5ba494666106293b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
