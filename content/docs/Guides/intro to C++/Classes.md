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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFLUJ2EQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBSJlZXLOhH17UguM2poWcScxVbiyuYZ7xFyeL4R6GZAiEA7dDAtf6DS%2Fn9IY3fEMiCW2tc8T8179j9mUF%2BDvj%2FPEkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHS7CIu3Sx%2Bv4qx23ircA4yL6ZowFVT6C0uorsEVdcr81PKA7Wn%2FZe9l3BryM01dfpx8d0JIg2WP65JD4rQ%2BHftOFULbsZjPepuwGT2gpvV2323IoALKZ6%2BzwFpGmBI0mvzizHS5%2BsbKtuXFzcP%2FIM0XH%2FPSW6U7R2zy2SD7wm6BVY3fIdvn%2FUBf5xWuh5dVIsoByDAorswr%2BiQTgFapgbYBsqww6GDrJi%2FEj5v%2F6tt5iPw%2BEFR6TEq81OfOgWQ2F%2Fk2dUw3A8I0jyiiyNFAH5W7oP8HG31V7IrlYresLxbTgIEaotRj2Q4m%2FDRc5ZEO1Rbg4ALgVVLjkAxaUuNOd0r%2B9Aoi11l36APMQxZYwqXhhbeKDH9DPJwzUbQ09gEs7yw0nnymm8tNbzyniwHc30CW7kf5AoptFLUoW2SFiSIvlZojP8FSr1kE7Fdos5iQAJP6ib%2BNey%2FZa4gCMAjp1%2FAMGQ1dnGV9tEZHcsG3lBO6xT1scv7yoqnp9YmYMLl7Ayp3bWAGX2G7D%2BYDMxjqQPNB4stLy3lnA5NlheiaO8xOwnz4c%2FXxUVZsSCWkfV46ldGU7%2F%2BzJthOYndWGOXV%2Bw%2FZc95dPS9lmEu2ddhPtC8pxbeez0qkxN%2Bu9g7HzItFvH%2Fi%2BB8XhHWUmiQ3MJmW6b0GOqUBUuaicr8OEsEoR6tpihoe7zTEuBRftCy5KFJ43xiLagYTQCvZDXytpvdLuwEGumnNqTzbhzzAib7puesaKwNq6ZcSTjlxCMGCWTohjg1vNJ4yvI%2BR7EMCiLFWAhSgtj1OCt6E9xj7tpqQAWkGjY0g4p%2FZhr%2BhnCFFdU75CFzdLTRxKCqJZzjgA16Y%2BLb%2Bn%2Fp8PjXLrohglXfisYQ9%2FwqFvH5VQQCx&X-Amz-Signature=5c687cf95b165c13ea4fa84c6dc9146ccafb49b48b3d5a76354af5438e356c33&X-Amz-SignedHeaders=host&x-id=GetObject)

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
