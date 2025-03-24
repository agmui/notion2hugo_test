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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HC5QLMK%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaU85msYfXXIXXjBmunD7kgvWxH9HtapnVaqD0ITemQAiAkCD%2BicrcmI5449sUQGmHjZTNHJaGHf0bzNHWGFARQnCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGTYnbD8UaiNPVBzFKtwDYeBdnJ8NnIaJPnJGvdXYEnacqZ3mQ0Cts0Ep7s3%2FBfAe%2Bl404sQ4xjeNaPJEwYoCQqcEs9gU%2BHOj9jGttsFRUXIGziRMg0gNuvsTrIHQgL06aVfJPI84xECyJX33qDb0WXJ3xIU0Wm7%2FvcjP66BS%2FbVAX%2FAQCiGlbjU9AHFU90raBvyXaehl9mnYygMmAV4RqdOkNQDeAGNt8CQow8bdtDpiVNQzarYsTQFo%2BNteExjJFGVeaGv%2BZ7q9QiUYWh7VlZ5K6yE5%2Fzqt7V9gY9mnPO019dPdVTl6wFhShx3up%2BTdIZZXwIQf2UJQV%2BJUcOpBpKD%2B7qu1VF5GBrt3fm0GiDJ1CtNgTJ2K2UfSWwJbO4hdIU2MvpBdS0FZhNZk28AsiujAWwaCncx6wvMwQoW%2F675nBR4tw12%2FI29hDXKdjsz4K41X24YbyNmrJvY2tr2Ww2ebyIRAWdsIfA42c8GlPGmMIBhJGE9ehzDR0eifbPLfSKHKFPFT%2B7PxozatBsdoEfEm%2FqZw1%2FmCMCYQZgepxeOSAoTKuu7DXkUFnSIDf0Tjlj8vaBxKLT3dEzpiPUO6nbbFbQe%2Fm%2Fg4D4juVCTaD%2Fub0EONaTRN5KzmCLjkvTNa5NEN7fxkNuknNUswxbiDvwY6pgGBAD3dFXMWTWvklP9YAKn9VAgd%2FDUHs76Ehs2SVD1ydd%2F7S%2BfEztFx%2FQmCJzyCZH0x%2FVCdmmKhLRu%2BFwaXbD6QIrY60nRYH39D07JkXf2Jcz4g0tyA2BWLazTTNmgXc7kxiPhzblgiaXjXFeUvZJbzEo8aYG7dfDk5YdH6GqdM2SCgMaw9SGWiK2n6IvDYJJ8wT1%2BxkPgigbeaFjGR8JIKEn%2B5RRtP&X-Amz-Signature=f991fc4ededa3f8cee724fba409e1977f0d22868f4e21c977c0afbf52d0f75de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
