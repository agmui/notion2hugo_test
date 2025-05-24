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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637P2LOTA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD5mDw56gv3m%2B0fuYk56aviB4UqhfvJFe8Hja0dNSe7TwIgc87%2B%2FH006SYjEmg8%2BpuyiIiZbRJDBswajNeeyMdfl6Qq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDElbX6U8O8DmdDWciCrcA4061HqxsDQABak3smOxZGBr71rqw4wFaD7Xl2ooo5TRpb5X8XEoxkrrQCYdOuJkgBSA7Ovh0jVEQLRh534PtKQeBNJufaDlY9qhtMp265r4jlOnL4fWzJY2FFN%2FfOdIzsa16W5xKBn5fSv3D2wB%2BsjjJYapUxnAkbljfJFhPRwtxgAVhvlCvxyr68%2Brc2GlGlLjah7Upoc6daXvplfFcjYqx60kdLMF4Qv9ktZ%2BC1x6Y8QPa00JthW0PX4kcn0sgcK2zehaK7mOIKRLxmumAcyyD%2BcyrqGIwpsEwzQjRgaNVvgdeOiXxUn7VTaKXgDCMGBxiUKWeK%2BlPynItLWqccJ%2F8UyQ3wwxlMJ3szMWXTPhA9WQ2xWOlJGr3cFx6JO4sH5WZ5uRn2bhVVB1B%2FhPybVyruXGxZjyrCsZfMoA9jPNy8%2Fhsqx5na69NVRZO69I3bK3DtrHePJbNzT%2FnherAHxHR%2F66szMIhlZ1UlICtCpGle%2FtvbcYAKEl3tltyxrx8hHcvvMtpOHo1t8bZ974m7eVtfFMViR48tqI4an2yRmCeI1jUtQ77ixJ8Hk076E3aqCxSpahN%2F6r3AuCuC8ZWx56DegfaZ46%2Fjm4koZItRo1uoteaEBp4L2KQn4TMK%2BAxsEGOqUBTMidhxT5W2biIKxTfuLG04QzuBIUaVJ7Nlnn7YsVMWv5xHp226nCt1Is8PdYd8zRj8XkNFvxrfRg4V41hmrl8%2FOhzRksOZKLCHMUdCogPPDE5kNqonSc0Tt%2BOlBuKKGriFS7gJs%2FS7wTfwt%2BcxnVT%2BqAKMKxUIvEKT6nJYPhF2Hd2gHETPn6nKU%2FvC4Thc4T%2Bcqi3mC3DHqFuY8O0jtvr5YlAeRz&X-Amz-Signature=a00c42d0751563c07141655a797eea022a892aecd1ba30d1e95d70299845ea4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
