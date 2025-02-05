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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZABW5C%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDYxEFBO6lZFRJqEv5uLUKqD%2Bv7ssdqTfem3WNEMy6mOAIhAIZ3DGRqFbO5d8DE5qMrmwweNLdBkDUd1EecRDi%2FXTbkKv8DCEoQABoMNjM3NDIzMTgzODA1Igxocl5enUfoZkeHMjkq3AMyRlcB112Yxku1K5QkMEQjs5dSSg%2FuZ8IjmU%2Bn6F7HQ8wRCaRndmAnmstMIvgcwQaVCULCvXVa7NysQ01EKNlj11xH9CPK0IrtYAPYrWUXvssN68baRzeNDkwtJrsmsrRBvayRGtUjVnKpLPnJDfthee6ISnx%2F8wurAWaPVSA6jt5hWsxUEtIS3%2BAJImpUj1LEN1qfvUI5dClAXnmq2rBv8g1mRlQ9uxWMJ3nhXpITOhzNQl4jPLilGfT9YL32ghTBJ7JHEx13rhG2KnMgAxM23CJQjbMjOQ5YPTPJWexHE%2BDLbek9pzlyHKN8eAA4loK1LFaSyqmpB4xpZ7VBihdLgOy1geX9QjR0BHMlwLedK7zRY6CZzuwdPSj8OceXLDr%2BjNXDzzig5uq5oUsXPhqH3afaW756sHqayElI2DBR0JH8sWmLqgutlTr3QjoD64a7eNipLvCxpYfUgKot7DB%2B00Pnm08Rnwy6w%2FbPBhgLZcAy0xMvEuwU%2FTemS4GnVAPTaM1417ygLxb5pn%2FvMrCyXYpVqaAOskDzYFan2oCY%2FluWI90qGQf0ma8pB6u%2BEZnWUmZE%2BwV74u2YK7V%2FABQpDCVHuJsiMMMJ8vLHYbn2P%2Fu4tUY%2BxGEV1WEZTzDqu469BjqkART39NRQ3WROtrihmLW6cM6n4KXJldOdeImOpduki8alBjIVGqdgwDQPDSzPZH%2FU%2FM7DqzSUNi4DQfQX98hg19tghOWrEu%2Bk3ETry9fzaz6oTpQqNUuWnQE%2FVxwjzZqA4yyBW0HfGp2zdNpL0c5KlrqqtNfNiz9A5o9DgGyKcKduj8enmEWdJwUmJI3DBYxh%2Bbo1K7Icu5nyRt%2F9xNapWtkkj64L&X-Amz-Signature=ad6e64eddf485cca57c323c7bba5daec674271889855d4bb02510ee6cc632ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
