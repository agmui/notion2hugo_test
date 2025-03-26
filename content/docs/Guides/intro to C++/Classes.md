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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHQWMW5%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFT6Gv7NiO4xGiIOdWR%2FZlUwYonPMxsnxun21WAxnQmfAiA%2F1Pq9fDv%2BlC4yRMDo0G39TvH%2B1ZPL282TfmOY2Cp78yr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMgKKvkpIAMzwn9YeMKtwDZNqD3hOjH7AFOAsfPtLiVIevikvxZHeOi%2F%2FIqLNDr0b6HOyiSl8oAk1jaFpk1j%2BxvRLiJz%2FvT6G%2B9FjmQKR6ac0ssmqxefTCbo7MRbySxM%2FmkgMNSog6irL0L18lD%2FH7NsuLjuVjrASs8JioH3JkFneSWaFJCbUuj%2BVR6YIK9%2Fhj7ojytOg%2BLmKj8ZCkDedQGgCF9%2Bz02wdLGcgI6syI1sAILGkffTwS4b3Rndj1yZdKGC3p%2FpU4UVLmNbsBuXSgPqG24w6QMKiz1PHG8W8wSIz7cpceDPFz5pW0Ec9I6V33qELc1LMSiUe10xPYcyLN6PGUwDXQjEzGO6d0YdAVGx2VhTGehD%2FpWfOABJHVgl5F06qCwuw4GeRAh2o90kImkv%2FOBVsZOUGOOgBrVA4s8RX9N2%2BLKgdyX6Brefy%2BJCoPzQ1AG5Nec%2F1SLVPWx9B7Uj3peqBu3brCRLpC04rmXmRrP9yJd63yX%2BEvof%2FO1XuRxAIgTsNbnseVefK%2B61J%2BSoQqq8UIwq3%2B717wgoqA7wYtctxrz4wLUob46%2BG7eCcRX7N5lmK73IQGUI607M0ovrjX%2FxOr5pL%2FPoDTUe8Pb38gdKZNRhVi%2BIsAqiJXpJtqG2xscQwTa3qGpwYwsPyPvwY6pgGVliTguh58CpZ%2BC60WJV9oibkta1oMTolK7aZUxAdNQ%2FV%2FJ0LMILQQlVZQIZ4XoJHZhEde%2FBb8Wy7c6KjVi5gLrRpGY35mhC3a%2B1PN8jjcnCfja0mGi7iIZgUztvnxcdtDrogtK%2FmXSTwQH8PTAdGpPUOLUnnF4al0m%2Bsd0j0hpum57Y1ztDcrUKjSbxrkhRBjZkYShBUSXRgov3faAiqO3ibV%2FmuM&X-Amz-Signature=ee2c56ac5115a73244dc37107406beececd54343dc7e5460d2eac0faf10c0fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
