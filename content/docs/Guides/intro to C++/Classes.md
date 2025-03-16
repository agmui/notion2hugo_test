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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RD6F5V%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYd7jmBePl5y%2FiMVw%2B9g1a888wqWN%2BN%2Fdey%2BfCU0n6WAiB%2FSs5UPHhavn3%2FP0PYSRlIjLwZGCS4qMV0taBZpy9zTir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMCBD3IxY4cilg%2BqsSKtwD2aPoKW5%2BR6iihWhxxEmaM%2FvB0%2FpkpXVlyHOV2fI92J%2Fskt7g2xFOdrmy67e%2BAKeILzwpGmsyzU1%2FnKDDHeRADXq7B4758LC0%2BR%2F1LdKKVltGI33QMSavwo6lMizXdtx%2F%2BnzEfCeZ3VFK27hTsoACvnki%2FskEs%2FPNMm9eSBePwX5YAZdR2FR5sjos1XF4aTl4w34u5vMOf2VShSoXatD%2B3f9gA67GrGtHY2Yswklz%2FpzJP6h9WCuKYPHhq56EBG8PpL7y6cJQLoyxsnWg7PbnB5jc%2FZo8kD1p5U0y6gTQYd856OPoytbZFtg03cRWlfHIvM20XuqFNnyclSYwKvUzgITJOMmGiqhhj%2BpW2%2FW%2BF0qIsEZj1HcF2QFRbNOrdMSvYWM8W5yvS5LM4nh9ZSyM8jFJn75aAUJP6xEnhCKflZYUUv0WNKYuHRqKXj5WjUzuyksjuWV%2Byelav3xc1unMyAClfGegpuMYcNVrSNWwbVk3g4tlrqKkgT31OhIBk1YYJKSsMBBDAzUgklniDLc%2B2SXvUmFUr7VAzSG0xJnD6ay29CymglJTfk7fs1V%2FwcBHlOxbVFeHi6bksifZoTE2b2SnhC4hFhclU717DoCbhcd9NwogUCMwqicTfUYw5YHYvgY6pgF67L358drge%2Bu6DVcyE19zzxzc8FgXFlahGHBjK6Ggydq7tQt2jmyjQ5gDTnbzh%2BXD4GfNmaJpVZR6eY9c1zHQpGS31vS1tj3qxWDLaz0laDWMZjjHgzlwySMwLUBlMjP%2Fwir9r5PbgU5m%2FE%2BJekxhoKy%2B96mkMENIkVymDW1TGF%2FcBovD%2Bg5eVSFaiKnYvU7UAOlcUavKLCwBqe%2F06haJN39PfUZo&X-Amz-Signature=3548351f6bfe6c638a9aaa3e076600009d0d173d347f25098be402a3a5939f67&X-Amz-SignedHeaders=host&x-id=GetObject)

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
