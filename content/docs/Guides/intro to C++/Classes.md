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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNK6GDQY%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDcVnVBj3W1hs3ZnbocvuZ4S32ENJzdK3Z%2FOdvIzGEFxAiABtlJyKxnBwX%2BUPtAKhFW3NJl7x4rVeVwAnxyDfjLtmiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYOnu%2B11xGirf6mIUKtwDuv%2FD21ttHu8SoM5hioG%2B3Tv%2Fhj4GBB2EvsKHo7tePi5KwH5mk0Mm8Dwse8sD9Vw01GiKZgCNTHV1jwLao%2BTx5yKCInBFNpRusMw4YX%2FLquP%2Fz65YBFosUVAKsIS%2Buy7Unn%2BRwB9oTnfzeGgnTBgL4RzDrB29IUfJ8EMFlPRplqWiECUFdvGfVrJKabnSV6AqvlWTYV69AK%2Fn2H81boHlFraRgewJC3jwe5CVPCArVmdJ1kuznGfOZtaXN4De%2Bqs2N%2BRiWCLOoQ4oHGyWl75gLk%2Bdw6OTWGcCAQIg91w92DcrzPW6II6xMoVIQSIuor7j1J4wWRwGBtu4Gz8RTp6ofqutlllFe53rMtx%2BB5ihlqomiRsNei5%2BA3XuNVVVOvMnSz2QfIwIDGOKgixdWzL30STLVkif%2BTI%2F%2FfGh3A9Y5tYBAnS9iIQ%2FeBbW81bmnpcliR53aRQjnhDCfwooosru5KnYVVA59EsDGXK5%2F6oY%2FW5ZA8el0gMDdIZ3IOX6a2aEeXIOEu9Q%2B9rcxAiGjd3O1FiatXxbSL1POZzUgKqGTtvA6rMiFWXnGtbe4zJeUuR1tV3oHucsvjdW59gOWrNc3cj%2FlGpHfafW0R1cwpc8pS3TzY2PnsmjC5A9pKIw85GKwQY6pgE1QcZ85r2HdzcOOI4LWu2ImtdzdHLVf96IoczLGYLHFW3wXEkxwABzO4W%2F7hIkzHZR9xZL2eR7ZXt6SV8UU6P%2F7hPt6SL0M6GKS12fz0lYvvRyrkLYjIsBEw5E1aEgocelQhKDg3AnEjj9mpG5QXEkdC6wd5G5h2GVklT1gx8IK0gH%2Bmneydaf0gwKH3A30q8IQu26%2FI4LzVhu%2FhHcGrxDMuTNn9Ys&X-Amz-Signature=72e882ac5ea507e0b7188f918b4b2d65ceb84deb6e1f1fda8febb81fe72d21bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
