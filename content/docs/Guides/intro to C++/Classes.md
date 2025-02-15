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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LOLVV4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIArsHGhYRHOpz8yE0Ka3Q6K3Gzpzk5%2F0RIRMGO4ooPznAiAohdVurkWfP4qg%2FU2MHgzovo%2BR3HEfFXMcS1fxmu%2FwYCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMPCEnzXCmNBJ7tqeGKtwDIBk3TQD%2F8MJRB67Oi5BqrcHlp6MhV0ZVIW6GTyyofrpROBv8G5351qrW8JYEX0xtpgR2FaVQAQ1Hi54ZX94mBYFcyTizTkO1y%2FqL1EQzN2XSzo5r9ws4MgFW%2BSoJavFsI2DuZDoyXOSc0wXiZkiyk1s0WYMPTfXCI5FyUytoKOqXxjAzWUmnQJ8FB0f6%2FZHExA1kzPwBFoCIkzZJ7Ibzb0s3JvxWY%2BQaPA8qwsFJ55XS4Xvh%2BJlZ3dZe%2Bx5yalzfqtKW76URRCd8dcFkkWqQ63GbMyJvgl5xzNx2NZJainafgpy%2BLIOq934uOr0IbXP0nJN8OoSlcI31a%2BzQcBif7Q2TRb4PV2iSqEknOX6v6wdle3MJeTejqfEPqbz%2BwwBvy7C6YCUyywta60wpWgERNSpD%2FmyfCYeF%2FtQ2GarjaxmEv%2Bimgc52klIUi3bHIUI4GiziEMoFBYIlJwPLxYw7RzTpbgz9vIKzf7CID5w4dQBou9c0PyMiborBBG71Jdg5IjLigCsedVBH8GYjQAL%2BjzjmFMMBU7g6BhOGBl3Pn2Z30jPN6rFl9CUEVzOqkWuIxXLJRqkQjxANtmxkPJJRZiaQnC%2BtMPfgBQ%2FQBuOBDsbln1w5hphPGgjzfPwwrNnDvQY6pgF4dILkazoiOexeOH0GK5VnQRlW4v6ME6E703n2IHn4Hzz%2FVLAdxQF0c5gb64pUSIfyB5t6Y3i%2FgKwDEckPOdTxpxE8QmZbDaTTGHKsbQh7r8ie4Q6eiWP7Ji%2F9EUABL3q1Q03DT5T2w1QyG9oQnXBokxoFpHTJ8crKvbCddx73I4Oo4G8%2BcG39%2BZ%2BtgAlOrdYrr4yfW39gHnH0ZYQQ5CdUohY4pyD%2B&X-Amz-Signature=b9f0a3d9eb5897d0be3c4552d65824f2b1dcefe1fd5d6d5090cd29ff53144b53&X-Amz-SignedHeaders=host&x-id=GetObject)

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
