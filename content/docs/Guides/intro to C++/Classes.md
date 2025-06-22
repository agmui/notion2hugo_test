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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSAFOL2E%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBg7OTzB%2BsreBmz%2FVYPRcQVeOlBvG0uBxCSwOn6VQnSaAiBhExe3T2OrtLYli6HEcmGRRfn9ZJ3rJnYm66QO9Cy7pSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFemX6W7V068D6mK7KtwDontyGigXHxJ0DeUgBOon7%2FB2j6w7PGgom%2FfCG5m0Zk0GtWjV0mqkfyNG0NRt%2Fq1wMWDWMaHyDSoojMU%2F3w%2BjIYLjd4XB7SeKurdiISRz6aXWj3CicLoVQhU4iPWiuvt0IX8YMWVsoPtufGbLBYRHB30EAXxuwzzYUA2l4MKF%2FxKBBawhee6j%2F6zmJIag1tGL8wVfrFcCxJKL11O0c73HNpr0769GgwCocK5ONM2aG5BWGHORE%2FfOhHNFKGbp9yeECCZKdhneCPsGOXCkwtSixRXrctlU7Qa3SxgaMLPvQvNa13S3nfg9VoprVPyRfJs9ZYBc3lLLKkR89TI50c2KlwzzUl7cub5uGY5AifCwyagVxtMUvc%2BcBlv%2F1m8XrDUqu07qThQMrCmWAf3pVL0dHzkejPiiLie1%2F5XSd6LOINY4T0G9goPleAxY%2B5JlcAeRkcFx%2F%2F8DPju9Cw0sk9SyK7CHB3ah%2Fc1kH6q8GwupBeTECIjJFr6TjEHo7TnziOAP%2FWHcT7rEmSae7jQ%2FgfgvSHUo3Emk6Kc1al61v6n%2BOGank2KUtYIrSnLgkGE7wVAQhEA9UOc1ToJ%2F%2FxjJ2GP3pW9zKpVuFsbApVKs1JtFv35vDFq6RsrH33wCQ3Aw1cjfwgY6pgGsF1zPxbOy2Hr9%2BHHCCYLZO0%2FkVlKfh9jllDhfuBDEQXxpkO7x3WbnOtci68nrM4U%2FHF9C2ew%2FFshxzvvZZmXFqcK4R0j%2FFrj5F3VsLZepswQz3NDQ%2FQ%2Bts1HKrMSCl3PP1Maq8YzX16YW8L24f%2FSdZAf5yrRxSycOqH3M7B7nKN2FJlDDO62EhczjlvDTu%2F%2FrDy3qFGQXF0dokQ8sP9pCjiEVydKA&X-Amz-Signature=1532c5b46e47d35907b7d6e6f47d3fb3557dcc7df60c1e80ed08a73d5983b104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
