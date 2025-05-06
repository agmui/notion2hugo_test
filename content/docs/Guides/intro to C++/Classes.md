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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674IANR2D%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBq2zKp4OaoHKaafIIw1ASubGqYmSv3YkXZL%2FwLM8OeqAiBbV2H7dLFmrKZwrMPnfz4mndu5jQb5LN8fe2gLKJfyfSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMwIfE1JmboqkRj15IKtwDVH7bJno3%2B9mwRdNOcFVhdRyY9nyt3A4FEDxDmEXwym5VVLSL8bXGDwq4F7UO8qMJytQLcMok%2BXQXhqY%2BT3HT%2B%2BIYeA68BRpDCgmEn3i5p8FP1j5F3Y1iiy9RJuIr7YGC9LJT5KTZsDXmHzCqUakEBm8f5lwi65t8i3sQZMecKJjuCL8IdDB22Gmp63aWpBxz8DGp%2FGjhoQJ5LNuGS5a7Q6%2Fo7MyAIWJYmW80S3L2RwkXkwNppeF9pOfIsvXyx8Z2v5X4oCdr4gc0NrJ6AgHxPPJS7UrVxfKQqbhdIwmOVwb17xisx5DwIV9UnhWpD8PhitcoBR6Wumg6RyGfEBcVnc%2Bg62fzEZdtjYJnB96FOvYO6VbMufI3FKYJb56jWXIvxdQKvOCEwGGZiPKruTZbiYWQq3smt9AtVK7cJUu%2BXHg3DpFZ3c7jPXBszLJhfgns4Fgl4ViB4FHRRSKxaSNcp0fp%2B8X1XeYQKXHsjw%2BfS49lc6LEOMbCGy7yfvEvm%2BZt6%2BPb8iNRcxhO0jLrfr7AQNTiek1C3WNdSx3z8%2FTozbqRCuhKjjuPvaf8OAT%2BCVojQXul%2FExAHeTUxCzBJwL%2FBRNzEvn0YQfHPDHtEYTfUha%2Fq1gBxMAvcqHbdCowxZnpwAY6pgFlvDDwem1EBF%2Bn%2FT0u9J1jK7n%2BoSIDLHmkNJ6mUPUlPixRKpUL7td4jzeRaWssmzzHBv9IraoaAZ82kQnCiagGEoYkmpJyrxWCBv3XjaHMLOAKFMEXfsz0KJCyrpN395q7%2B7LH3HWAHq%2Bzp0KdyOYxgtJivsg5zeyGrEKcrXwQXH%2BnZKjiZIt9GPhOkhE%2BIRceUMeUmMMbjHV0Uyag%2B9TrCKtI9eT3&X-Amz-Signature=6401d299b000136d3e973bd6fb590be9c3aa8ba2aa7284b360c4168e1564dcb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
