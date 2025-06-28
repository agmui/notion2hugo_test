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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U2ZF6DQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLYToSfGPcPsUBXzo0RaGxqay1Mx33eDxCmF1%2Fn3kJJAIgOXSkrjxX5FZFV%2F8r%2FHOXMVkXOMPjraTNZ1KLsOpskSwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTZ74%2FJ4TCZ4awYQSrcA3Nytwossumg%2FZrB6TT2Z%2BDWtWXBhA%2B4SNofnZTyyni14dXmBmaszDn%2ByhFa9pXJZmDMJEQMTad84ehiG0si3TeeSt%2BtIxzqiuHjLWHafusoQGq2pC3tu54oFr3AHHiTt2p3Icd67dhszEIs1QQDjuMfsP%2B0yb6ZX%2FrSyMnbo0JvlCpBI6U8ziBaUraEnWzjt1%2BDs9mLXiFFwYmKJgCT7YOfsJu8cZrn33omaDJRG4mD1Fh9LOciZYNME13iSeTNCPT3ZEg0CTkykE9WJcjZp44l81r3dlLZhe4PxaNacEwrZypbfZJWR5XzJH9fPeXLP8T17ve5VJp5Kc9n1lPBfsWWxOwqeCjzMyhUt%2FdQLxs%2Fxo3wISrJyv8B6aWRXEmux6TASdS4lt9GjQf8QEHNXmwfW%2FEWKjmfVEnwrQrS0k5pR%2B6ahg54UA7l4pwYm95pFdCittKzlNML0PrTQhiKSMAOJUX1GBzjn%2BkxTCwsHsn3fhVmjgPGSx5xooDZnjvmYJ0FSvTObwlj4qwylISIusbmj5S0Y2QA2eGxaAo3miOnsk59RL5hAjfRJg9vMWX8eDj4M5HqKefwbEvLGePx%2B8MNBbiWHqhHVBILBNAye1TdL4YtfaUMl83piiIAMNfW%2FMIGOqUBkAK2lr2qhMyTbln3sCAHNQ%2F0uH2aw%2B5bQDoonIIjlz4DJ9RD3im21fqZZdg3RGvSgGPbvXgW%2F2pDX7xl%2FASUCFh8RUcXXtt%2FNYc3aFr9nh3DJrWZbewIbruLnn3wIWFJzXeBL2ETHOP9AT0vIHIsvqkSqsIGdO3DQknQ3YuVdIzH1WRWjcruNq8WhCTBiR80lSbBFmORMlIkqK%2BGuuWZ%2F2scfxLS&X-Amz-Signature=f1cefb5518d74e7ea58840da459a277b0a3150921cb8d666de9baf781e017729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
