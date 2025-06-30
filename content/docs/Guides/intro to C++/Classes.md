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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFRLB4HA%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5dLJ29vxZZe3wOS0pZQnPr%2B4wauwtoSs9mkb2ZFL4%2FQIhALFp4gq7M4bcMfGUeCCxFkh1LsGz0WGUIeshTJ1isi9GKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4wGG4Rc9f0Qz7Wjgq3AOqpBB%2FZpM2NdWVvqMksyaPUT5VfcI%2F4xpYU53GyM5zXXg7Dplk%2BlkQ6YjNB222jzdC0troH99nAjWVHsUh4f9onlf656B9Rfbb9jTemWh%2BdFd%2BCvJaXJcFj%2BAlwz8MMwZuzYOTcRbnzsleSjLMkbT0yt2%2BLFZR68nb9sMMhWPcp%2BcQBFiqvgXASKOVwrysv6lwB%2B4VVMANoKSKRhjV7rvxQsuBkmFoBU8eEITOPLX9H%2B1Bobt390ESe5Y%2BKjthcK3tCx5ZFkh%2Fb6Rf8Z%2F4I8%2FXOReuP2%2Byzv7gn3ylmZur49%2BBKaDaq8IPGSQM%2BbwgEZLp%2FoBWVQ3SPAT3jpRb9Sb%2BSUAYsPpi8k3FR1M%2FASpp0CiguEBgea4swSn%2FiSW%2FIZZ9I5vtzHJM8Vhs1e%2BkES17pjj21qEjjYVlMmPtEzrAFiZc7uTnUA3AckDjxH%2B43gJg4tTK58Gi%2FnxQQQIh2H72WQrHtlD4For9uxn7ZQ89jEDB5jQZBW2yi8IRZvHrUCBd1GIDbuUsruSPtxrKUBfDXq7WyyDB8fMdxhv%2Ft1CGK%2BVY7%2BxzCqFj4P3rAQ6z%2BdtHC4avJNC7d%2FLTObeGoWi%2By63qi1CRMcOU9dWLuSBicYp9sDE7FT%2BeRNTm5TCZ7IfDBjqkATPNwXi8KM2XajnT%2Fo0RFfQmwwFmTynMiTp8jC%2BETTt2S%2FzR4tAaoGLsWUILwo979Ewv7xm6yvzTDS0N1g9TzHOw%2FPnEtjRFknZ73QLKjXfHacJLS%2Bl654LoDs5TSkXzV7vdD6gOY406P%2BzPl47uyYCbG9fTa2LzbTyAiUY%2FcUiCHtiFX1h9c1dlElKKZFA64pM9mst5lxQh9YgZh9zvHZQAPWOS&X-Amz-Signature=ef1159258ba3e5705687df7dd72463f6ff974bc85fee1c09eff32c2d3cb178dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
