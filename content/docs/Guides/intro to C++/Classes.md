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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SROAFOFS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCm9HEBiUuD1UvTIOAZtSJyHFylWW5gGcBlUxfLGI1eCgIhAO5Se0kUSX%2F4bfGt6IXczxqjnruQkZTaM51uJqRvrVPbKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2Bz6ePTw5R2NOm1RYq3ANwVxyyQ9zBr6qcIe8hVWBfp42TI3zNn%2BNBNfRng3QChO0txgwPOLgkeJrkvziUlrwlFzqr9LaJIGWmWl2Ccp1O9NJMVUvuDvaSo5hC0Up9qWaDzgONsFxHSpKr5rTm2SbFQ6pOo8dpvC7L1Q66mwT%2FMMBoS%2F%2F8fpv8w3hX6hzLUG32InSXSJWrAXwjbr6N3zhSb%2FUiETAsn2%2Fg11801pkHxjnfEK2QfG%2BvpzZHFmmcqdBInOFqyOCetOvY8NcDFNPoMcm4bGv0AdPFrLSS3gyK7qhrS1DkLKxSdQHVCi%2F6Xnf%2BncMmTv4dHtbIPVdgvFcel4GyH8GxduX2CLMNCLfYpAdc7vJ4y0YeBCKGlEFjre4Jj%2FrKiE3kItuTj9fz7GetD0WCQdM1tx6ZNai7UTVCIVk1KFUCiOe0XfmKZsDqKgEmqOLZgNIdAarPMNGCbAPix10F485RpZ3g7xJezG1XxtCZh0bVMDhzM3yISWb2a11vJuGGXIQRmPxlUOguFFzrwqN9yxNEBfDAHafaZT5uy86lhpQhitsMljfbUrq%2FU1N5wXnCWC9ZVoxmuCXo72yi03bcAfEQVEe3jH2BnlGNykD50%2B2IV5zfNhU2kX8EHN50cqrj%2FUHpNYKE3TDW%2B%2FW%2BBjqkAe707NvxEvaRQu975oT%2Fo9evUBbgJkxC8aeMWw%2FcMf0w2PvEIsbTBYDZuLf7vPK4b73rRBsAwcxTBPlSa6llsCUHj8A89IkFbZVK9zTwHPtp4AqyreGPSsjBA3Sjnd6wS1QsTKnrEgKQ0EA6OkIsnQ%2B8257%2FLN0PCol9hhWzNBc37nFj4yJf8wtif%2BQjmJ%2FEMaAiXJ%2F%2FJurdPvh%2FO3yfR5RmFeOs&X-Amz-Signature=c71fae9cb78a9c407fc5c48b7e65de265bab252bc354b47e8b458c55884659a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
