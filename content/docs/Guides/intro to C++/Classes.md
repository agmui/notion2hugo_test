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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGIQCZUS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAm4by6I4ccvVEPq4Oh2yn%2FVUAprujUUnFfpGLmmhHeIAiAZe7orSq5tIUrMIRADzWi1EkcnCURBhdEWEy8mNF33CiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRelUe4ghoIjAFpYlKtwDjmffCAMG%2FXDnUAJn9ghoGRKi0Dfff8QQIlxQYFRG%2BHo3RYNb0rq4gFf%2B5iq434qYB0OHP3T%2FZuvJwB59lMDXqmXFOy4yJM792yE%2F679xSdb3AsGRf1C%2B77n41bVStdeR5xp%2Feo1nRri9silECy5NM%2B8HF4f0Y7VjiWuqUOgf33fEw4jcm%2Bh4j%2FOsrvIgIVEyF%2FxhLIwke8DGon8A2XoRdOfFqIKH4eDF2lc8cVpXH8gYCAdGOByz%2F4G6Xm1PDC6H5TxgPr1pJhLYQJUqNuZuxXxMSLVVwABXzou4ne17sWmu0s1kWMGvVPgKPxoamrNmQqJ9o3E%2FVG9VaiffhBiAkA62XE5RAyQF%2FicTmR9wn0f3Lj5Mb6eifRJVkVaLlW%2BFKq%2BP5jYzxCbgp6VDxgRJFZ46LgbnevEIHQmpq9c841r6A7Ae757CKQvQJJzn7WzFwddTpffDT7CJlIq3PM94N9FAS%2FsDFO6qEksRos1wy1XwT%2BpJjIQ3Ys7Byf6uQrF%2F7lbPXP00pCBXmdt3Y%2FWwzuTxU6Bg5mOOo2%2BHrsEa9PSmKAzFAlfgAEtonR5DwxwkI1ksHa%2BjCa6cek6ALFKT6dW4%2FcqbeHI7nD6X1H%2FG%2FVrnp%2BdvKofb9o82YcEwiuP9vgY6pgE5X3HyHiTUVwO9nJOeQxDvStBcVZBjpZc4oEU95B3XJyEcLvAZI0UlDUxmWO0B%2BjxBXMmY54TWLar7XdEaQRaJIl9sVuMwFzRb84dvzC%2FUd2tU3VBekh4RwUNIaBlKAYJClEjjnsffHqJAr6rxnETrvvOmuO3Bu7ch51TIjrjLZBDcbkDbN5NXY%2FpeFYGkFnlsCzz010y8cIXgo2demC7dtCSgam5I&X-Amz-Signature=98fe05aca54dbebf0bbdf6fb19ddba2eb3802bf4a16c9f0f783fee0f9cf42bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
