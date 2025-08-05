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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDRLQIF2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCdLGbVCr0sOryyDAER1d1gb00aUjYDcVHaR7Q3Vt8FeAIgQEyP7ueoO3wXyW1BpBbQD10tyZQh6WQjlzIp2%2Fkjy3Uq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOLz%2FInkSxFMsrW7aSrcAwrxBM2zz5EmJX%2BXNv1Z8du5pvifFKJr%2BlrAKp4cyGrZKH9h9WUyKez%2FPFda4jsjs5Cc0xEeol8ilfb2NRTv3g8ZPhtWlyNjJcvyfteXICsMj9XdmS%2Bgdt5v96%2BGWRo1%2B%2FT49uikJF8Jlpbk3uyt4SoQ%2BgPbGuv7Ysa1ZucKPP%2FuwLJwp%2F0rW5bR0quVwZ8ybA0x9KyNEihQiSo3ET9tjtl9RSywYGmsl3%2FdvnRfbXa0NDzUL1ucsR%2Bb81EkPULFds3%2B35R8Zs4gJKGaSou20sQJlVD7hX67CNTpbsjwXqeGNj72AlwDdQcR48eE06967auxhsjuLSKhSLuN%2BUjm2B5tFyFPjDFnE4M6KSOSogQigdeMxLMbkO9YCX1VvUB6XUBiC0agb2u2iM%2B5EBavBQ%2B7Zs9ILS98mWxCQVa4KG5XvQnMON39ib6ooVGWXdDEcvPSLbjAoZDniGmQtuFZ%2F1pBJ6xTOSPh1zql05rGBgG0zNdcy0RsoZJDpGHAwB7NklTyhAAryx5FYUcmoIls%2FS%2FWHx8KIO6qyC1RibXxtCFcIQ9H7UnGbCHqhoRs2Bf1LU5j67IXbctSSSRIoZwodXFRc9e4LcUfnZkxzcBdrxp8Z2ARcZiKS1DTsV6WMKqsx8QGOqUBEowTF8czEwAx963LCw%2FviBniT2k0cJdtfmjCjSYpdEsARzYzOZduea73rNlhcwmKKkdk8xLEXvSY1uyoBR3dbITE9B749SygX9yJSPHj%2FGlbmDPXRY0djde%2Bk0KCzXz%2FesNrhz%2B99565d1aZeoGUa71hZWbjQ4I4vS032Fi5UYVuM0lPcdP2nLy%2BtC45t303X3vDWLMntxNYjt%2FdA8MVlg7SZ9DX&X-Amz-Signature=32a87c2dd4da91bc3a71df8ddb72d59333f1cea4b8940714dc49a8cb216d952b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
