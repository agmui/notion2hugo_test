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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GBGIZJR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQC17oLeUNiXap%2BIlIc4FgrkLFidPjur406VnRs5e6d3IAIhAJWiVkJd5H8TsIcDU5aIzS%2BNeING2urB61C5Armuq8KGKv8DCCgQABoMNjM3NDIzMTgzODA1IgwsrSzdoelj0Zupn48q3APWzDDKZM81c2KCUuFKQG4O4bj3GLXQlTlxVFXiBq6Hry7sQJKL8C9NrKy260xIoIvVnNC%2FCDn1J7bSKfx4GHw7M5edaMAxzYBKvqoXGNc87kkDtyyRpS4QJ7Eca%2BUCaRi3dUSXvVikKafcLBlzzGohbcJz7XcIxotViKZwGJN7seGjqHItA0wwqTIw4cJpGhhbnu1HhHmVg1sEk%2FXnALsCYY1uyY8F%2FvfrC%2BDbBD8SqIoTFF1UEnkS60VfveBhS9x%2BGjOIa9mnZL36I68O1e72U9aGn4sDSK5sXm8v6QxiS2KaA6C6ql15bBZY1quJGWLnGAyoyZjpQ4arm6nI4rCBGttCN1G%2FrAFAk1jhnaZl0wrKi7lxq1zbPza3WW5wa3AIhrSA8qqhenWWNvB1X%2FvHRkBGJ1aa41QHnsPMoSq9nolrMpMg%2BYgMWMnM7TWz%2Bn1YnkCdShzsIbKtuVPTzt07va%2F%2FoO60dx9jVJa%2FFuDJaRVUBS3LLVr3wWFhbwa0nUIh5DBdyBayALqOcSd7%2FiscYYufgbxMolu7pU7fi6ct2jaxkUk6BV9phVMehmXffZdnc3mrRSMWkRJm4QP7fr2cOjuwRaIrANRr74xxw8RneLs7DBBeC6KjUpdXkjDh5v%2FBBjqkAV%2BjKK6Alx9Mqj9jfFX4LgJtIrn%2BXNeJk5KKS8JgjYYHk964uEwGayvjF3ZZXbXs%2BCwZM8NlxjSRYlq6bMdHhwI9hqK8BbPB6bKpaZ6tkm8Mw5ezz2rQsSVhJ0ZCXDdpQfsuSfWbt3XBatOQv0kQ%2B%2FBEnpUes9%2B2gAq4Bqo6COV%2BVjXSkAhUPY67%2BWkkbBmosiex94JAQbPleZu29pi0Eh1dW3Og&X-Amz-Signature=148c0b10813c5745b9f1c7841e083d066e0c3953a9350bb27f140e9644bc951d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
