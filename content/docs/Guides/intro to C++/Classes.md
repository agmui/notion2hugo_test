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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMPJ57I%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDC20m9ipRihdpn2SFKd%2Bq1xprCxdH%2FgFKpfcw837ytWAiEA8JhRTGetJJpkKe9upP%2FhvLbE4jdVxkEslGFfvlE9r%2B8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKD3A57nSN%2FR56JVyrcA7nfHaJt9o47laUD6Ydki5xRdSaJO7jl0YfeVxwcNXaYMw91jhV3DNeAslDhM50Xmal2i5UMVDf5m%2FUywLu10n%2B%2FkwlBmg4A7xuhwKCJVlqiA8LUk7kpruQqv1ovogGL5f02HMolOZx8qNWoBhORa0qweFYx%2BSgcGAOdOYoewwC%2BJSlNLWX0nUfs0N3wwtY6yzQsg%2BP8EcdRJNL8DrXoDG7yX8WE6wMZ5B9Veg%2F6DxXqBhjYKzuAr4SOgWo%2FHmF2MroeYNMdPTwDLOAd4u9vHdr%2BhGFaV%2FxmrWiG9TjVfXyuUkrr%2BIt8SH%2BJ1mR3obJomT80CtvnvBO%2BORUMNL6IF83Vz4IEUTBWEw5%2Fmt6NHbimre09C5ciHnooGnYHPaCUOTeJSiVh0qDnvot5xfFXO6ewOAOrd0OErhTadVb3M9Ie%2BK6m8YldMdfjo%2BbQ1ijQBIR%2Bovg%2BLRKLW972LRQWvGp7rvwzb7%2BHy21zIrVxHLZqzOLPKdjHS8ba1%2B%2BGl6yRmVqnOcf4Pahv9N6Vopvyn4OHasQYuIOXDLNIwmG88Dp9h3YJ7SOmGBIBTU45GO7LAAjafCtrBJgmXrUQxvxrLpjf71ekUYeqyf7SX2QbxfTSF26UW%2BzuB47xw8cyMLHZ88MGOqUBIgl3xNIEN2pyotwQ0HfxKfRK8QI4%2FY5iSDSVzFV6eSbvrZR0Dn7hjRP3%2BeLzYN5komli4uzbVpmfXTO2nqxt%2BNh8JUFbssQSy6wMeGD5QDZ%2Bl9bUFI2pOq5EFQWQVLnRt7wzRPEmGUpdg0OGMXIM59O5Go5VFzBmwqNe1TiGKERiP1XOld45VkO7QTLJTyQm9Gr%2BdNBcQCZ4tEOFEjDEZn3L%2Bt9G&X-Amz-Signature=cecd69ef3f81687e760ad68a4bbbd24d75f6cf7cbc4a01dc33c13c57054cf98e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
