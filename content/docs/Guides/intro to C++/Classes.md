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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ALYR5ND%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIA8oZb%2FAvPZTT8EZM4N8UWpMDaI%2F1ytI%2B4Nrs0Pn3LC2AiEAojy4BG1tdyb4w1RgtxJwnvmhNgj2dXh7cVTUzM6VPaIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNXnqnmUHr1AkZhVsyrcA1fLVHRUpYLv3rxVtdI2AgCmk%2BlrTT51kG%2FVRJdcbifn6fCRZ8YSmxnwemHqU92Zukz7%2BaRcW3Vr5le9XEtWe4w%2BHPXMUBjYzw9v08%2BNu4fCBgKoSDenXp54BmMmOJDzW79G0Pu6brnJarlxvnMkq4%2FBP4hPSInaC7keFyUMRoss%2FqTSRVtzTpKA7Vnc1%2BLSIjwA6SF%2FkcL9GyHLknG1m%2B3X%2F7yO0yIgxEOAvY5o2AIPokXWXpBOF8hBPDRI%2Bcpp2hFMqJ6FKtez%2F2HiWFUtg46v070wFePM8DUYS6QV3a0EU1XSvUzZynF1vfZEXr3QCjhBPF3UGW8fS9y7YgDSjD8FwBtFA4ZNhs8FuJZP91uV2AYprmenyzVjgCFOKRJHNWONvjrgGLUaeOcx0hyqGngVArUNc%2FMrElT9Ocl4DdMZh%2BZUreoz7NMmiiYQCVRwWjS1WnuhYu7Jb488NCe58cTctCyWMbBJ8j8bH148OATjJmNTaoYHT1gzq41zZDgiedPiPDbFcoPQbCAar0JVim%2F4ELYvRU8KoytEVTr2hhfTilDBuYb4iU%2FpbDBvC0cNxcUOGocxYhykU4tT0e8%2FpLLvCN8EithG1wlStl2G2%2F5woxkXBHUKmt%2BPWAn9MKXJmsQGOqUBARqScBAw5Hvoy3Jo5zBvGGuNaUgDuyOH4jFJV%2FBsNuHgZkWJZXQicT5LcQlkOP8WBOy9zk%2FAwYChBFVRUsEcmaprEBu9d7u9ffp2WltcRax%2FXeQS8c2P1s2TIitZr6A96jIkpEJBAFNXIq%2FQimDYLOUwpGS0yRU%2FJj3Qii9ZsPFh%2FpjdlG7ZDP4mz6h9EDXC1kgAXk2bkfXOSIe1IhMZI53OnvFj&X-Amz-Signature=8309275e1ce65c18d9ca324739cfa9a6f2ba9e5203e332bfd91741dd4919452f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
