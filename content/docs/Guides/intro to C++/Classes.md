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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7SFJ7O%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEBBChokCtBnPHTkmFMLafl2cdFo4rv0%2Fk4Lff943F7QIgYZ7Hm%2FHgxpR3Glmusmqnr9HRtF%2Fmev6bAmbVoDkLqS4q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDObNXynoPkXljxwsuyrcA5kf4TeAGLWxGiVMxOblH0LBrVZCitG8ew1XIEJDe5%2FDyQ2U61IMpUhqujTTenBtzRFUUpjjRm5wQwEYua5q%2BWDl7EQpgTeWcGrQ5djTnVn%2FEbfdYKIrLrjASUySmQbfpqmNEQb011prmRiLDpvlFSECAVQwGHT9Zjf%2FcUvagb3yqTEV6Eo3yy4DhlDWdcFW3FR6%2FtkfezrI%2B%2FZYkRJxuWWjXTHXaFSK8kfFpjHu0j%2FJj%2F5X%2B3QuOyTUAGBpS4DGFj47w%2F9oYDswL9OGkqBkl6AvJJoNY%2BFUx8Rik9QwsNo8KWszhn9ghLoYNIbFfO9GO%2BZH3bZWoHFJv34SYmO3mduUjDCvUbCNkeTLi9vh9ZCv2Ie44yhUrjE7MJAtkzYlw7SOhAoIiV%2FlNNfNH7ebmoOwrMVGG2nsLgY1S4jI0Bi1U940deq1QSiGquAlTc%2BAa9utkwn%2B4d5WBhZFUVCclJ40Gakp4G05od%2Fot2%2FpVhMEmJnIbNfacHixQoMaviDvTGOpOW5dU2bEx4ZTm%2F1FfXyRFqZdCtnwS4p80SQlpiJBt6n4ZmGflZHZmdyya4uZ%2FxunGdyihBJn4wVmC1DqtwcXjvyhEK3AgDoFrKUZNrodMjr69uBAAwF%2FvnLyMJKUvMAGOqUBV1UCIXQRwJu8wNolU9ynTKsSl31qXPge7urxRPz9ItCNVIg7BQh23YZVugvzQmmmKK%2FQQrOoNOohivI4dVukjEho7mt2l87jix3fKMLio3SbXKyZstdNBuGCP8EbfFVdvsgV8qMRc3eiStVvhtijXZmNupn5KBCeBvnQPWqkpB%2F0nltUP4bjbbFoqJe0UUiwu2Vu82ETwxOfVOnprOjFz1%2BvbPqB&X-Amz-Signature=841b5248194f81b5a227aaf4c59b1dbb65ba614fa952d8ec529b8fbffce82f88&X-Amz-SignedHeaders=host&x-id=GetObject)

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
