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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JD2J7BY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfBSqfmBIELWGILkJuVpndQKGlDgGl5HcBJUTk8Vhf9gIgYwSzuyL6nPLsBA23FawKaAbImKOTCWG71P%2FS0Mhtc2gqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNc18e5nNAGXRwN5%2ByrcA6zYns1V4SDmIHHV4SQt2FWBzgr3YA%2FCBP4YNs99U1%2Bl3Ad8EAfMsNoxuGKKITtFA%2FAiv5WnvXXDj3SxM3XYAIVFi3vi9HqcLwiYGwpuuGPddj0SAdY3ijoag%2FhcWgfwVbKW9szdreRDZwNEZW9ZUCGXut8dOEZy4GyeCAehYsg49qdZGWxhqIdB4IFTVjHF7ruUk6hW1zLWj%2BBzaH7hPUuPlDbUP7bvhka16gNbaE7b1qjY2Bk5%2Bu1D35Vr3e9QFsGURqY1lI1nBsIN5%2BgJ%2BPAptNH%2BDAwfLysKPo9jytSNEECfCNjEWxP959sxKS%2FiYZMudgxSmFkVmdhbbWUKXh604PexoXooHgMI9BeELdsHHy0EG7g6NrLWAiaRNtZ2T%2BD8vnn%2F7nweq8z6yM9EXDoqcAIHhLIDJyKMUJF6QOrz4ZPXLvr4PGVaptc4YTUBfaZ1XRlySXsMptgDqs5Rmm8Mb4X1a5QoMRUYa%2FilTbbxpHj44Htc440t2vxCDyYH%2BwrwkYlwJufj%2BrB4tYL283oglUzComtFFA1N%2FjhFQyV0tTiNQYenY3ayNuWR6sZmZBkfEhWCddkZBWF4uZsLHUaRAl%2B7V9l%2F1pgelyhk8l21sCWoyvfWfH1hagW8MIDYjMAGOqUBH11KCQ5yLqn9UzRIqRroxkhjCFk0ZwB%2BDNLJaP1KgMlwj8LYYBJsEK11%2BBDOb6frRq840KE5SS2Aq05kC9MMsWxJXWHcmeDAQeoeZBFGqoU3R2VV9x1gsH7U5B9R%2B41fhxktQ7D5Gb3hWsVTxUZCBFQXdbrN6HYbPenowPaV34u5RUPdzxkSfwl2tBrqvnOLeMpsQuLOb1wJdpkZbfOlLFwaCtad&X-Amz-Signature=413efc4b8d5e316dacd27edff0b11ebd3b35d71c69ec1cd8e48097471a662b25&X-Amz-SignedHeaders=host&x-id=GetObject)

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
