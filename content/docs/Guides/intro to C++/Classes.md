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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFEGNNBZ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnKPV6FFjOcquxak3zC9rkMLl8UbrI%2FeAxzW4rB14ILAiBGNuST4rr7Btv9x7bW5GH0kN1FjFBZf2bAF5OC1%2BTmiCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrJ430ge4c0uqu5I4KtwDElwNBJyxeoeN1z2HO9mkngWSrB9fCMvAaUoWghVlK9MEjgnoIJWOp926pV4OGDaq8rSzcm9LJCmDYFyvmMHQ3kcNAlUQb7exJzRc%2FG1OD7FwNZFMeb2bULHweSbsZBjkLog6ZdPgkaa2c1wNeCD37IMvu4htaOhWqGIn%2FlCi0iO0%2F4QhV7MHgSAQLDv3blBp48qomAuxlE9we7fen%2BODKjchc6J%2BBYZ1n0LS3hYw%2BYQh09QzfOs8Fe%2Bg612ZCNA0ZZAA12G94NKrxeFwmRHjNz%2BIWI1V%2F2Bn9UHmVCM4GyFG3IsT2eQn9oyltLURgr423d0PmFCOi%2BTB14Get%2FMpfg3%2BX1EyWdb9EQc%2FmLsT%2FybLKfk7l5XfIAwtdXi4QPTll9T9tbQF2jLHipNfi2QOwhWXDAdzcYWY60b0RLlXgdnuBQNtDIfjm916tsLdKzBQkrYaIPnNHXBywCEk2vkqQHHqKbjwb8UPtNnNqizCnBNoBzcbvotCDeObjVccsHvLCFZtrfrNv8jjXtkc0QFiXbCviFA0Xg4aFZD6GrgQur%2FjlUVbQaU%2FZ72ffZSKKtTDzRDpypkALQYQGXemUOqCKu5zavEjh%2FdJvJvHARUFhRpLZEgUO1GXKBDBClQw07GHwwY6pgE2L9g7LIRtwIvdyZQvf95b%2FBsVWfHrCR%2BW6H7AvtAJtV5vmr7CLo7HS7klOGBjXYhBdF2R7ER250DHfYdQsw0mKn2TFCZOA7qVOAQyQe9fVGoPTdjzk9YxFX4kffqEGLq26OLR2WioUiR7fEvOJcQiPRU%2FIMcWp6EKyKEHoBCIMDrw9FmXuS%2FV8NTYLSSdV%2FU%2BgP6nCl8wL8nnAvtAnhVqJruzijzp&X-Amz-Signature=01f3f51b70cf46bdd88f9f3c9db9c9e07de5b707bf52e1dd34db5607b881bc8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
