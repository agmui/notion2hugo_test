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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HTCOUYK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIBW6ISRnDY6dal11ul%2B58zvyKfOx4%2BXwAH187rtwyt8WAiEA6NSU55%2B1tyfS2YlPgyGxAEkQdJ3SMwMppF91i4MhQZAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrnDxtYSB8Ll%2FnuLCrcA0L%2F2NS8duhR5z%2F2zMYASF2OqYcqc5m1vMDLsr8D8GKhG%2Bah%2BtUlTjfLvkzGO8F8IEu9Ddtr2eRI1tZgXt8XQukTKjSM%2BTxoqI1BPiVENx1lI4ce04WFZyRf6t6uNFtixj7E1K%2FxZZJAZEedGpXvIwGrBoGPkWd5spHaDWJte%2Fja4SxlzqnnTP1I1pLxSeAGYDQggblEeVkNMO1lS%2FHrb2NsN4XScmv3tnMTGmcNewOavSX2DcvCBlKSWMEhCgdtBJVNw7CS6N%2FNiW9RzJ1UCZpDIEsRPRiZ5CclsP6G6Bv6NgMboNeTby2TrWtHSkQ64pPLQJ9KUKP76Nkk6txPGwZxF8bZrXFh1Amx1PdLW3Mk7lBnaV6VTVmuw0rKa2vQEdfwddHwoocvV3tK1hDec30fsD0xpd5TiBZJlZ%2FXP%2BBx01yWTfHFXQQ2kru4Gm%2BFIGj1tZleO%2Fprqvd9xweYXPk%2Fp%2FpmyDOidOOu8tcmQ7CTsW4DjkyHosSWXpVRLHuyf7qGP02Zk1PbQMNJaK52W4C%2BJRyiapCC0tovNRq2KeSWhDndBcVkAYwmGccFnjGP%2Bhqm3Xcci3BlM7SFdCyPug4PKalNTY77jdP9AEd9WLHWnrlUWc1PQXymGtHRML6Dj8AGOqUB5VFSIV9jX4%2FjjKBTWRBAQeBr7vV7DdxHAqZFfjx360C3kiPjb9qvPYlxA2fTE2zHbYoEFxVziVXLJ9qEH3UUpC7%2BfZ209I9yIH%2Fzqw9CefqMuXVPrxOg0J5bMFqPt0Ivn5JpJ5J5o%2F7dl6hsNJN7KZJCC6rJDqkJpP4CJcqSs88CJi3X4B5HAGrrjd0cH6AKek1WwEWaFvb3bfPwKJykzedQ2u28&X-Amz-Signature=de37efc7d71654bcf5c5bd28a99b11be58aa896a80ae4f6e86d42f2a92d0f2f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
