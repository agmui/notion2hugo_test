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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGNKSWC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF%2BzPBK1xBRiB2e6sKYATJ2C0PYijje78x0TtGNglc5yAiASjOGLQYlR5maoNkgkT%2FkI%2FQ1d1pmB2wW%2B0yCo76OREyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMB%2FFFyXnsjHbvk%2BdcKtwDd7c6Ys6ZPBo0jU%2FEXDODel7SfoQNR5hAKKR9CDELeX%2BTl2nLiTMexDw3P0wnAd3IqwQF2SUbl%2BRcPnuyu46ThEQQv71yusQUlREroi3ll2J02I7xPQLxdtQ0rqjXE93QFkfCR3ZMZUCfYeuVLFUtk5dcVy1lmEA5zZzb83nSsJpQNVMizf4PD3%2F2VhttXXu9zbUeocgoflotfMeRPmAUFJvc1pg9mH5cbupqo8UGumY5j51Ydylojii8X%2F0T6NzZkztobjeEFYFzoSnpWctOoYw9rPQ9bHunnGuJNWXg1owH0uN9mAgYOpTQjPGjEHmmpk0LAzUbcmbrlCu8OxzBXKPjwahrl7wpoDiH4jWzdwPNuEtc2c3rWUnMMna%2F71Uio2YvIT3%2BfqTs5dyPANUlucBakYT8c%2BvYpqEGlN1IUf0y1bp2ql2RyJO%2FikC6xeFQS6hCttNKQHlxYVkcI0Bz0hJVC4AtMyXpe4bg1XRzUVqHjhuZec9Jqgqs6Q37M5ZRkOGQXgpuZSP1OPVZtytzVSukBjyQr6Xif1BCGv3BZs9JnHXdT5lhmFQwtfdUghAs6kKpfFgAvC%2BxW5kw1qaV3IMc0Km50BFbg%2Bgl9ELkUsBl1X7X7keSo5zDhCAwuYS6wgY6pgEFj9s%2BM%2Bc%2Bem2I75KYY4GagzPoxAo4LH9I%2B%2BmJC7hQA%2Bw8kZNtQoG77GhgWnXXE0HiCfIHx4bruGfQk%2BN1WscMgdT8I8P5J2aFFOAUiGwNIUd0RIpWgO94Gj4tIn3ELXwyEjIPUshmsBno1BbnPIRw0du2Gk24bPZvhbwerHXMLCz6o9LsanKTl6JFPOG3dSE1IJb4kfDniFjXFBOLwlDBDYJtkSAX&X-Amz-Signature=95b570069f7ab8df5bd9674db97d599d6e183a164e984e41c1cab14a56486ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
