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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQNSYYG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLUAX5YVQp67jWxeLUa0mm0XWaZKQ6VcsIbOhkAHbqqAiBH0AFomOxxDSPBaDJ9ZgafcOs%2BcBgQcfmCMIH5a%2BatECr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMsFqRIoVdMfYZl%2BoTKtwD1lB%2F86qmIXOJQazuKl5ykzGNan59JmQadhvSe%2F7Bul7mAp7Js6j0lN%2FH3OZPDF5gecgdaWpPpWUM9%2Bucq4vRVzIN9UZ90i3WaeYU2ZmsnI6h2Oowz9M%2Fr9Q5MPyiA2fG87pc4hv9r%2F3VAsoVucROG3uGsT%2FIuL67AsM0siaYbuhD35lEsLObPCfawYRjJ0cco2yXxu%2FajuXNsDovlJqrxRCh5p2SRKyQZZSN1igrx4pOYJU8ao85KOtRdd9efTg40yYMrMeoOOc83zcI8kllMl17YUkmn1x%2B9Rm%2FpYdktN1pG0tqpZS%2F2lsRphPDF7TET3xBPasunhEJI%2BHFXAdMWKU%2BtGlZ59r0JqsfGOyXGLF2FWHWKnGoaFA7W6lIV85AZGUoL%2FfgnI1ooBsxsnnRZtjrXhCa42tT5PqFAUHVlmhNoykwCmTmSRCt0C9AXcUfAwpr7%2Bq4LY8qjdRNVnVekzRC6rBwd5xWohMDTzegQz58G%2BT0BMOKCjSSxnczTK%2FSOtg1a0zHGbKMTyOnPvkMa0giY4t%2Baww0aIoaymQaKSUP7jD7GjivH9x%2Bqxi09Hr7TSmY6MVa2zzl3qVkiwQgE2mJsMoZrnEIPPxhzyU9vAYwXjN3vWjGqzwCqxkwkJCewQY6pgEatc%2B4Hni3oYi7F46cbaMWrQjnlPnfhwzV665EtKRM15Ft15fp8%2ByutGEHKzIDPsDqKRwhm9bak%2BczbcRON8VZiFw7fUktvjKt0Xn70nkWdBjESeOBhFURHs8KZPIqOuSR3zph2UGYiSoZIRP%2BM%2FZAxP2KPrLGO8NbI2lPlSU9AJQoskhMgjd7pAV95ZKQ2SzOsKffo43xM1kKybp7GSTgea886elf&X-Amz-Signature=c76daae572fd6f865d085a181a567c08ee3195f819989ba4fe1e50bd44a0d59d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
