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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A4D4Q2N%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmPu0mH%2BEGgbLEhSJCbQ6o%2F5qxjSsdM%2BcQFStiWuuJ5AiATeHDmw3grxyHdS76UnX2uAIBcrk31HUC58tiBhe5dsSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTh79bCqUrUnoDLjXKtwDTqdM73uKZC4pedHqidTeJXcm1a4QGUmEzZ7EyCgjz3w2njguwRAEU5yTYxRqb%2BZqmt%2BlOH6UkynlWk33T1qODA4EqiWAwBiY89z%2FFPlmN3r%2Fmjryg7jIKUZA29b34JnrWnWtXH7Omq5CHFZxQo6XgV0fhG9w8aHnTmIAf3Q1VlR4DWZIVkof27XXycYWUni0NxK0sp3U%2BWYpQXMNpm%2BDJTm248MH6QViS%2BYS5xzS%2Ba6tnpgGjFGnDSOHIzz%2BQsIy%2BfRCFe3GSpBdD%2FJ3dZWz940%2B%2BF2hOw77mDIdIjoLkDHwwA%2BPncM2ILHzf6LiSgoABicDNC3NdD%2Fw4m2HI6Gg2qFOnWI8QGBSslxjbM8a%2B9PL2Qh3dLDmhMqaN%2BkvKXtQYitM%2F9%2B2%2Fj19Lus6U%2BZhOtOK3jTo7vo2BB60%2FOhGI8QMZH8%2BV8EH%2BcXpq%2FWMmWeP2JWnQSEp0IKkiv9COsYcpbuRes0MAeIa2772q8nkfE8Z3w%2Bz3U5IobYpEhMnMir8CMyCabaDkbc%2BYADIRviw%2FQe8D%2B1d46ci6tTo3HhJgJnM2jEF8ItnXB5rQXb%2BIlia9Xi4z98kUo0SAnWyFJryhDrGbUnNWSuGA66LQQac02Su9dtJEwlQYk%2BpOLgw0bqEwwY6pgEOFHrCUJ1RquuPh5XauCc10nQm4LvxNQB%2FG5Uhw3tI0O5vD0PbU%2BIWzFLagVKw%2FLeHWT%2BjVrZhYvHH13wresIqsm12KwZweL2fRO7lBUmoBNxsu1qdgmy%2BpxtAQvogTOWjddjOdyALPRX8%2F7td4F1Q6ZgAvYG4mEV8CoBdF57h2qsAAu7iEngc6ZubF5WIWCcHayBJKQAAVGNwuVoluezdwar%2FctdQ&X-Amz-Signature=a9aa2423051cebadbd4e02f9bbda3c0fb3f48c101a845981062ad6bf3268e759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
