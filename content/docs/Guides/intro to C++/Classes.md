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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD26C5UP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSB7gQCRxZpaQr45famLysYhuVIfx7Zyk48i9NRk0wCAiAGTzdQOIejjyCE%2BwaLR%2FGW4KJ34yb2GnkfqNroQjNMQCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMtBkO2w4jxbbHi%2F5cKtwDUDFYOVrEsCVzHDlz5eRjVdGwMxF4LSMQqzOX2QkC25D7urdBRbyKgmezA7mbBMRB4%2BM5DngXNb%2F%2FxcpjDXMQDNfAT%2B1yBdT0xLTrNhxh6FfElJgkGeg1ave%2F7CvZIRzhnu%2Be8uR1%2BktmG3%2BIP7VR4Cb63k1sriix61v3fmkzCnCQJrgnBlCjQ5TlI9fPgo9gx4rsQzsyOWve0bkaIFwVb5VAOOjBCj7k3nKMRrt8rdHZ9WFjWmyuruOSwstzWioN8TfptumaeCdikBgOLZ1p8PFyDZV4nHbQ747hLz4LTg%2BlHk4VDYDnvPk1qIwTmkJxTsV38XS5s9cws%2BFwpcCvpZK2Um3rc%2BS%2BFfS6wxDloMBNPbCFJVBZWtJ9%2BNnqhDEFBjPsNMAqqnAd5HrG9o59o2liUOT58SZ8ZHtj%2BzwT5AxJMotfXtCZyVajUeKNGe1jFBOi0y8RCaHGe5oaE1i04aW0zeh0dsZcZwbP01Aoh%2Bmily51BWoPDTBa%2FEcgPFFFRFKQfOdbpqFkJSKsj26iwKRTx0SZq80WF8i6v1%2Fj%2BXwgEiSMcizi6H%2FZnKb1faVQj6px8LB%2B8yNuIr9hwCxzQxa5H1MZGic6VimyyvdD6KiCu96qe8JMZWDYb3ww4tDwxAY6pgE6azhCUeh5jYefwwAN51qpTjp%2FxDE7D3e3%2FZf7zISGgQHJiOo1sl5v%2FbktxeqRmXhsQh2ccSq3yrCSNp3l7PblUvQFRxWSqj7UpBRUqvLMnaiQ0kxGPe92Lsrv2R6B3mcEST9ws4easg%2FQHIjxRrfUJvWN%2FNPldMqVNdMkumW9M1RgcI%2FIAzZSEqtit4kWsiCUlZxxdRyMbagNQ09VLcih4P9643GN&X-Amz-Signature=332bf6ced37911f809e98e95f776082a756cb61e567bf7a7a7041ac4f2b2269b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
