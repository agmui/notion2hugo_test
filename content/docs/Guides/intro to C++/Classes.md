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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ARGIPZ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbeL7rWYT9Cigz2jik8Leup%2BZ0a01pvBH45VO45D4iiQIgcUmls9aJOtoNEpjkkTGcXAgUSgq4oGjGoYs0WN66SDgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDC0XHfNzgo4QuD%2FBByrcAz1FJNQSCkWFMNWwvHJKa6sKxZK7lPytaml0rUHLGI32V0foVduB4uZO%2FEIIymJi9KFhIc93pCLK1RJUBYosDWp6vbIhGh7wrvFjcGYqV1Ae9IMh0M%2BODoiCalJfiSffjmKIFfQQ0ByiySRIeLVXmsbZoKoF3rx6BVMLrOu%2BHI2AM74Q87ViYkhtHSWGaR%2BQdKgfNAfj9LDKc%2BhDIDYDmoPZbyd3WPDZBKN4d0Z2BDa79ubxiWpWGCGZn0A%2BG7y28iQmDplcJjyd4%2Fxq2AUkb3AtPaEWm7XzG9kEFKa3gdwjNrKjoIi3trEpPMMxrO0NUJLpz%2Bq502b6GfTEW0NPYO8A0JWCln12ase3Q5bcPWDxlauKlrHPn05F38wYN8xD3AfvMjC6Jtilwsry86fNpCDXCcRgiaH8vAM4LvS1kWXJyenRU4KGQ%2Bz7ZL4lb9PrhmRJhVnfs7pPHlK7ABTUMlkyu%2BU%2FqcMLBuuGKSXphWmttVOqbZtMT%2BV5rc5QJxekoKiu%2BkCcjCHkT6rij3Oovq%2F1%2FeGgZYhA%2F0fNjrhm0Yjowr059EdDjQrOT93Z6EG%2BoMGIGNKmixNIZvtI%2BVaX%2FdplRGy57aROUqaOtzyscn5K3iZ87l2wTW4ZFxBwMNXXwr8GOqUBr0HzrpfCm%2BpOHu0%2BwliMfrBd6mjY6PaHLGDIbQ%2FQ5xmWyhejjt%2Bkk%2Bg1rdiGZJ5bU1nGYzEsCgQ6VvEgeYP8%2BZB7hMtWjeBwA%2F4K6ZwHM2vfeXsO4jiInYRAhDPfUWejg2%2FQdGs%2BOgAXeSLkhi27RVh%2BSjG10X2leEsWu9bMnqSdk0%2F0slD%2BsLRqJDczTKAT80t%2BZC%2FLAMBt1riXTLnAXn8Xv0%2Bt&X-Amz-Signature=8e34cc1ec7e37e5c85d8da1e7e3181a61d31ab4bdab6959fa32d5888358eebb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
