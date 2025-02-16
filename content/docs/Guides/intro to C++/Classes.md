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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RA4RRFY%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCiJQMjwUPfN3HWQsr2gSAxeN4TbioOfuzER3oSgnxW9gIhAML%2FbOIANkFWDdq4SA8cdjGEc%2BRNY8MFn4Nx28MI09fuKv8DCGUQABoMNjM3NDIzMTgzODA1IgyFgkOq%2FRYHn2SETEwq3ANAv1%2B6l%2BVZeT35fgKOGsKAQey3SwuO%2B9pZ4dxZbTBqn2Zja3zPx%2Bg6D1f86R0aoxWiYfYinnVtH%2FZDTy%2FyBivAFO6w1%2Bxo8Ytsw4VryY8FWtHUpoPFkVFLddOa1QymMk0J8lzm4558yr%2Fcy1stwbiSVHMaywCqZYRGxMFIxWXXHVYIZ5pTl5vc%2FRAzcO3HhrvlfU0F%2FHugfQaUGfUBLdlcRATGYVz%2F2ZVMZDAx39tv5QY8mVwC0EWHmIOTpYWWCqYWlLC8CylMWx%2BgMSahleEUwNcge9OauLnJZahrMwus6%2BTZJNofYdsoskCUdf2XwgsHLjDYlkDAPRXzJE1RifII7xwvuUEAItUkcUMytzMyh1324vKjx%2FJNoB9dJAUnP0N65z6%2BSOqnLH2WrVaHEmNXqTw8NurnU0a6amXZYOfnr6nfVcchgeWaKdIg5thIuLoqUjoiv5AmPR5zrGwdTHo0LOOX8m026RUc4l8PQ%2Buys%2Bbkuj86%2ByrxEdbUdMtHQJG%2BEg0kVnkmxMRzt8jydrnplqL42OHnIaknwH2knKpfIxmU0XpGuU0O9d2Lpm%2BXFS1%2FYTyor1hqR1P3T1z6Bx2Y1CIrP%2FoFuNBuuvNTj8TyTPcQdVFZFg2QDdB92zCMiMm9BjqkAT0rzYarkROYpjWnZfrclemtHun69Mp7zoGqxsSvqpLkXmZtmSnPbam5S5SS3ArOg61%2FgqZiPccM6FQzlFT%2Fb2C3scaeF0ImUrbVbzrRxaAtNs9YAEEmo5XfoZnUu7%2BrHM6dZfHSrG0mhYymnT4wulHL1Gy8mnUI84o11o0wcbGyiBIK3xvqKDJ5LK2xnxutlwU2HkufEvv7J6wRlWB9ZqFfdnw7&X-Amz-Signature=a2c5b72664e9304782159ea4be2e7967f78b6a6099cefbfbc93a78f86bac4ad9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
