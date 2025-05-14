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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNDMBEXG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDLmF1RJKTDNKdU8BOjBSP5LkiOygaOYj%2F%2Fy3qhV2HM6QIhALT6v823CT6eZ4Emei3PM01mAzQqP%2BJ%2FZU36Mr0vBf%2F0KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBV3LCMnVc41tWK64q3AOBl3VGMZt7VwkNHQCPS%2Bcs3uGKUM2TBe8LYCymb0d6zJE%2BA9wyZLA%2BeDVeFUdLgSAchNHtKJQEWNOAFrAwBVs3okqYzSNfY4QkTaU%2Bl7KBx6bTSsGfDb3hx5g9JQsJzlh%2FjDXjmQE6CxpMk8fD6NGeIGSTRK6jGaEN8h3%2BT8J2bHJoRiuVFJHi3pSRaE8BO%2BhwWTiLLgfgwfcT6GR4kV99nUewhiI7hKjPREbCPgyeZV2IHpPu0R96yYg5oX%2BLcIXcDc3%2Fn15PFA%2FSsv1tKIgN0NndLI0aKwzl%2F8shaUeCWiLMuY7rIWTJfo4YV5whJL6p2TMlj9JOehb9QSip8hG%2FSIvZxF54PkUSRez4UGT%2F3nPJw3%2FZECm%2FAOcD2pTxbqOfpqb7aTqdWE84vLYJe9yyyqFA2banc1GWxHsEw2ABMkbudMPCeaTS7xj9ZCaRSC5uqdBikF2SLGeDrGdKFT9VdGknQPtsqDTTfo1qPTX5bH37poTNsy3e8W8amLDj%2BfThui3s0xyC1CBxmv5eZnG3oXxoNe%2FLDQvoRthL3fs2PDjOG6Pw1F7aXe8fDRIII35vHd96lutNqBnDUkLWKt9ejSBJRHtMZ0p5QAtw33v%2BXZMp94ETbKFLxpY8pzCd0ZDBBjqkAXFNCkEnE0xZsB9CN9AszbSTQt1NNhXkisO5ofcvTbB9wyXiqt%2FSEyEQ9rC%2BH7fM049yIt6jlL%2FCXcLYElQOgjTIgZ%2FwFyxpB4b7iXyTOWKX2lgeI7G8a2%2F6l1T5G6KfY7j%2F%2Fs4N3gp5fF9z8Y7pUhcFjKWdg%2FSBP0JBg6Xy3uqUTfvWUUi%2BrSPPg6Y08neRyv1qrsS2qXuagYJxWIvvMkCGilKE&X-Amz-Signature=521a7e586312625fba440a8f5fb47e3ccd78a659a567f6c13c81988bd5264b81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
