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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665FIH5WL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBH4fT2x7eteHKy0pE%2BKvjtlVuyeuf8365bwq3L%2FWKmEAiBAQ6l7AimZlKEVbohlWVdNfT8XBXf8jsLFWMqPjFP1aiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkk54TgnrIr2mu8pYKtwDNspsMFri%2BCMERZgrFKiKL4OTep%2Fvz6pMC2eEvQjuI5Xc8yo%2FMSnq5J%2Fj%2FybJEc76vBHsClGZ21e%2BM8R4J1s70CF4BSMol6%2F91bt4YRBBiLBvmCossPmGioVG2LafNwJsJbKf90onj5SPf1BR5Bycvd2SLuMSz5%2FWy31hLy2XhW1yW11KOxVxrRyO6NaL3og9ZnF6qkOlsmK0NMKKIO3qMLDhZeqFv%2F5AaA%2F7VfJctJV6uMd674AkT%2BGW9eoEqyPLZjHVYX0zm5vxXGqVC%2Brq27cT3k5ux951JSFnIiDreJd6aHdnTYgIc9zVCBZluXCPK%2Boqb1q9sY1x3FovYBa%2B0OgQqWeEnpDIenREyVtlXjvImapMWji6ZiCILmEyheuzc4BXTo4sKrWghMfKMwogv5WUvdF4GTHdBWJQBhENS1iI5%2FDSRvx2V5m6NwX5PgVU57RKjRpGLYQzUM399A367HLJJXBe%2F7M7USnYntWvJLGv2kwEOwYleqUtHMUmSA4oE1KDFvs7IvO78uRD0kj2zsQrPj7iSSZ5xhOHgc04gHZSQT3Ecdcio9JsOpRTbJWwXtDk4sTiyv0lvJKLb86XQdtig25wy95SqfSHVPpfhFf1oZN4tY87jkJfV5Qw%2BcrYvwY6pgFUJCvjXOZLsjT975HulUYpH61BQFjyazb7U5mbZoZEAnw%2Bs%2FTssQ9kycdJKBZJmAU651QSi66HgZbOIDr703qggXgk%2Fwuhijuy4WSm8l46SONf8zi8pXZ9mgNosionMhO0bYVrLkE2kC2gfCrWRRLOojyW%2Blfyp637H2VPOKhlIwFyTzdo0N%2B%2F7acdTlXy%2B62wm35G8YjXtkNVF9eVqqFZjlAhJLfA&X-Amz-Signature=9c29c99e14afb69ef665b812830c2a349eaf58dfebb828e166bf0d324ba5201c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
