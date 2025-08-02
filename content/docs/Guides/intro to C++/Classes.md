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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAXBXDI2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrai8pK5bQyfOyA81vQQtVhYeck8XoGdJd1oFRpDvoMwIhALQP9UeMNa00UXxQbgTDygfFMxieCij1%2BNmyAGy2bs3vKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweH7jTg1TKuVX%2FgfQq3AN9qGYGFzNtaCpfhbD2vRYshBjq6%2Ffd6X9Js%2BYUwwb9SjRVNDyPyvXMwQzRK%2FQMq6lCea5CbV4M29MbjRJtGucbJnnH2GiBQ6xgQVkU7A8zgtNAzlMizsMeXj9boAZV6r4uunidu8xbf7LD2Gucy8bbdelqf4YL1%2FCPausVH7TLtjChZdHRZ37D0In4to43xrPBrnH5SBssFyyDW9jiXj%2FBb0f6bN6XjjqvFsU4yy0M1ba%2Fv8QhpXxNqN5tQzkRjv7eE%2FqTqG0cr%2FUv3XIN6CUSA%2BHAXPTHNlCoUl23kCZBFwjdv29vLizz%2FCSQNCVmiG1cfZT4gDnY7n2b8a0t%2BiOSJPZH46EYIXT2KJcCwTVJsq3TF88fizWpb2Kxvvz5hfU%2Bm1WBmrrB8tRRTfXR3UBHtu2NcXf9VM3gTaCIPXDztBrUDredI%2ByhcCkIjfXVhZUrjDLu1dDOByNA4TUATODmzyMwzjmJAOGcmrYQik4Q%2B6pUrCxLu4ezl4z6rfQXgAYlo84O9Igne0ByQ18FahUEZnkCLINvecDbCcux9yNSoX1dFjFrtQ0NhEM9ys0%2FAknEUZYHpPbcwRA48Lztw%2FZfawhqZsfSiTTMXyLjs4tqmx3ZdosV0H0%2FrcC2CTCQnbbEBjqkAfJtLXNUBD9xbHBNyz%2FXmpIttG19PlpAFQHhCnNvpf1H%2FlwwNreKo6Eu2dvYNTy2j9a%2BMEQArwB77VaQlUq8ArKgWiMkDSrxuxjm%2FhpID8ZICJGAz2VW1piULJebi3raVPZVn07qGiaGbFHWnMd98083bpBg2rG%2F1j5Fp3nrJMR4IcDa5jFTwrhJzqsD%2BBYVEI0z%2BhRNjaWDSFo4B56mkFRckIez&X-Amz-Signature=8d36b3495ab376bfb978dce6a8b2af74c1ae25e2ccb5c349c400081af9b2d906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
