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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZWCX5C%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0HHIfk%2BB7IYVRBw25HVd52WK8z%2FWhcyL43Qdo8cWGFAiB2aZO7CuZAsp4nEP%2B6A2w%2Fn9KEOrEXAPBCFYopXQfvWCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMyHqfpDbp4z%2B5sviEKtwDygSJMSnyAaaP5fCOPTa5Ar7km%2F7IhsPC%2Bg4aNq4Dse5DVacu4T2leaJXjI2dbOrxfNm6FzHe0rZpfmDdGNGYMfTgq98QGeuxS7QBohYZiWNHQ5b5e1ny59CGKNtDm1iHpj%2BzXirUwU7T%2FqKzf0F2ViK3zdCUSak2ZoRZX%2B8LzYz3CO8CixV9ZQOYK33CMwDZyOi%2B42OIWfX%2FzisUywL0%2FzWcVzqCk162NySM8rEnsaU8y%2FKHK17XbOBiHBxQA3lGEXoW04NjvBjYwA9MiMR0HybbzBXlP3LSzYOHI1o3N1sZ%2FZJYAp6QOwTxMPWkA57AUcCxKx1K7kBlAcWzka3AwmlT%2BBOqemwPGMkC3EysjAQZp%2FJN0mOyPnkp4FUsq4LTrhbnItWq9F1o6iyPsHbBXjsDyII5PbW8WiJvFfklHU2z06zB64QnbyRx6SjUru5ObCpapUrxryfzaQilGaN1TirznkSHLKUxlCmVbSY693cgtxU%2BZgYeW%2BoTSvzLDzqkAN966cYZS3iCnoyMeAksFbpyqFwkNHkiWbs2v8Qo0V30jDOnIfa%2Fc6mYfp%2FgAeu90llnw8dyGldgXz55m%2F0TkqBTzg8JPG6y7lkUh2bqH%2B9clHXvEGUHB7%2FVCOMw1YXOvwY6pgHb7cDkeKCQu1PPKwGU0egi3AGt7VlDzhR8JWzMDx20ESf3o5sf1Q8iGGgsDzQ0qnQ6j7I05MFmPhbWTovbT1IRMIyP8JZk8IMP94o0hEnpQIKtZeTrl%2FFqbq25Li1oVJpdNpzx3G%2BFuTugmtkoMOWWOvokLPdet2DVygOAHP4%2BCnMRdsysrVFy8ZyS7d62Kg6ZSTAD5zDi0lX7rj1nIYvq75IbyIwa&X-Amz-Signature=c5c7263f43d1a687398c23d2d7a671341d7bec7ac5709465d3e982c56e0ff045&X-Amz-SignedHeaders=host&x-id=GetObject)

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
