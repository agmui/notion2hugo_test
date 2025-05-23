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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBJHSTM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFgf0zKWiZPpuvP278gCvpjqPGNIraZUvsFtkdUoXO2SAiBdpa45zSNpWDE7lwWy4GcJ9nbjN7KXN1h5sk6Lcl603iqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOW9REaGKq9nADz7QKtwDoG2zhjdlJLlGmF6v6b398pi8huovwsqgs9nFx%2F4IXsCiAEoPyQd%2BNf8O50RgXtCjO4PTBEle5B%2BDhhrKO36tL92dzP4rhN1HVuzjBbOzwT5sVnxkgiyWB%2Br3ZsWQPTvPTUXdKPCJht%2ByaarnJVcBCck0GPqkpRmL8Sq72jPD5XrOwJjk6A40%2B49T8tx85PSyJYMg2QciBeHC8rObwZUapNfTEixATnTnGbPLIKUbgMloD4SWasXBib1NUKz7Mv0k7NwDvFUUQBZhS5xMhsK1Y9oyZWkNGT6j1YgB8DW2FXSXk1tZnT1WHDjjnSi9u9D7gdLYu0fHk%2Bre65rkXiJzG5WO4ir0B%2BZyM3Zxly8zUCUEavcx0SJv%2BAUwxwjSg6%2FWlTLcD7bHpgB1l8JazV%2FsKv6xtXPluG9Peu2X45zQBliHG26mp69ziJYCfiBfrDisLj2GjOOTx6iFSY4q%2BQ%2FT0kLFYEFQEv2mqVlJ42SO1Z6CDU1zS9OOFB4djzB57tWoLgBThfKHeUSqT0E2gM4bhtHb5tn4TcfF07cd4qKDx39%2BeLFhyY%2BQjG%2FqV9STpq31uMqZBUgRA1wFtWrDEvi3SV6y3bhOBLobmfYGu6IIa%2BJBFoz2om%2BFQ56qtAgw1NjDwQY6pgFj24bBb7JbOfCCPYNbeToeLHk1WKhPDUuABNuqQR41WrXm%2Bo16tqUWHTHtMCZc6I%2FixRdrCA77sthToZwTWCTPCGEOgytrwGUqeOgRO9m%2B7lIlrPVeQhJazv2lzI42WhwY0PYaCNnkazr25uXmnX3JNltQU228d3WW85QNuBcOmk0vGXvgvsL0baqx%2BLcSLJYppDFDwrnHHDccvHaCVy1vJu1PSD6%2B&X-Amz-Signature=893da7eeebd1eb8c904c356561cf6367cfe2fd2cddaa1e3c0085d29681a50cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
