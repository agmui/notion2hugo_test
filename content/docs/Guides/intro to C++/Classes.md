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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFRG7Q4Y%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnESpdOPNCk3jFDVubm6NbJZc%2FDX5Ap0x%2BrLgXuK%2BGTwIhAK8Hd7Smvfkxv5hoDSvED1T4xMF0LoQXBgB%2F1QbB5dnEKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjOGGbrxRdbzaIGNUq3AM8UpEOJNukY6PpZKidQ7pbIMEZjeAbiHIC1%2B48bLqVPbZdgFjTsMD12dCIaWX6p0qJ3iQ2I92NAEUaevvqnMKRU%2Bg0eIqMtoqzxgQQBzWooV%2BZJU6yOJ%2FnlBiu7bmNjfEE90xo6b9IbfKLEYu7HhRgO2AB16eQYwtasPzJy3x188H3YnDfseq248qVcqf48LS14yJ8MLnF78U528jOZnFvwnqt0FY4gYS%2B3K8jxSLu6SUjTN0dMGXmmcG3DjiiWhCQ3C5SyFPwnZvP5sciuVD65p1fLxlHfxxw%2Bi1TrA9hIITLiGrEzCMLHGKBNCNwG7%2Bf%2B17FBsF1xBPRwwNTsaADS%2BaA2yoy9xIgv8KptnvAm5wM7QXoVKoKPU1k%2FWz1ZwFhpnH1nU3ppIbHqbLDXOJ703zk0xNaDAOVsYyPoOtLENI%2F3u2IW4U9wSr50lhOWgrvUZLdy9Bp%2FdIh4tyhWA49NH3q6yWNe%2F%2FteMlXyCgqQj2DMIiGEFMttJUKfPibb8b9hilMrFx%2FRUwWpE8xhG7%2FcFaq%2Flrvq3g7pkFYsFvhRMXviddPvIU12zFSuaIw%2BnW99%2BIojN8napog1MjEuyxmqT%2FJ%2FQfko3jqaMX180vV5whad0%2BXZxNokiK45zC339q9BjqkAUZspOFmA8G2k0zKawh7fh7KrXl3bD474j2cKsG0FFf8N5FounE99fZjQEb1F5SYbDiSW4L7X64D7o07b04ch30d4nAgOIRirPnGeGesVwmQYzyJkplfDTnVty%2BrKxC5Wj9lfDCTnyp0kINTx7OjHKz7uJTFRU1PSN2VK4eA7%2BeUhf4KVCp%2Fq5ybNsw3dhkqo686oiHPYRd2K42s%2F702OUcI5O0O&X-Amz-Signature=30ab9abbe4759a297a319f0133d338167b8d95a039f2a8ca9a936c717f4bb633&X-Amz-SignedHeaders=host&x-id=GetObject)

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
