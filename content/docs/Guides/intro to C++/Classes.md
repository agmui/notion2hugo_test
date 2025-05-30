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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZGT5DEH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtv%2Foaid78XnljVS9qdCSaLVDbaxljEO9SSa42qGu6ygIgF35gYyp7RT3Tmi5d%2F3%2B5x4R8S7dO%2FgS69j5btg%2FJJ54qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORIpNmWSvjODjMfvSrcA9K04C4MvYQsneIXU5FG55amz9NKIk5LODtpfgNPz%2BOuImPKgaRYDy1G6ZonCwotbDLPy%2FE8Au9itPe0xOSkXr1%2BValmQg1BtgP%2FVXA7Z4jYSBAzKuXqenrxWP57UlAo3OlCJ7pb9wKqA%2BSc8j6YFQRwzTm%2FJ3HEQNmPHZH3KzbJbjsiAXZfeQZKpwY%2BDs9EGPyOj2l38PFF8b6SlwxmxmRoUjt0dUNpwA3K4PrJV0%2BlajVgbQbAme%2BNwdIvWYqjAkaStCFozwS18WW2KsPC%2B692r8WAsFLknfM0xovKQE7HxVqkvqcSoIJBr3YSOyfdFuUDLstQcPvh0QpyJCI3c%2BJfRQVHAjXQ3fB3%2BpKphB%2Fye9OaRBhOb%2Fk9MNDMEvU%2FgdT6CdHsLF1dVYj1GRYjincTJ6KiZwPKnSbAUIJalpmfoaEFA3iB87U%2FCOobudSfMGvQyq%2BBBZ5M1Qej8dAovyp3KnGD1Fy6Cmb1ZA3eyFI2eLCRsCvrf9f4c0hlFHFLW%2BRiphMB8xe5B5OGrk0cNyCaOg7dsQF8RrgDyWMfqfmReaM1g6K3BaRL1PIzj11DnJAG5t5kcqx1utB8ZDzVZMyiB82%2Fwc0fuRoxzyFvCG%2FNu1nxZLmW2STSRHM%2BMJLx6MEGOqUB3zLcQvi5zSkt5qJF2savGD%2BHBjUeqJiwRPuMjtKLOIghwX3yvesbMbEaepZin6xKSaq%2Ffc17nVqF%2BxIyi2KSsKgK0BTY6H63UPyRSo3Jz0GjlK8Mvt%2BV2I3iif%2BTvusq0aDDZb%2FIuQzmTCx6U%2FeGaLkz9oI2jbXSrrSESAexxjblGGRdaNQ2Jh8xQjwEjRuJoNx3Ipvu7KEJCZ%2FKBt%2FdCee6BfSa&X-Amz-Signature=d5411d0d5c4e6591eb0b5f6cb30a30146e43a0c65281771adddd55a6c88bf642&X-Amz-SignedHeaders=host&x-id=GetObject)

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
