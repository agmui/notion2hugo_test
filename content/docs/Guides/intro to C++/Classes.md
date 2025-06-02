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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZWXA66M%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFNee7ZfOsB%2Fk00JBxW5aCCsfpjYu9Eue%2BKgTOpl36mXAiB%2BXlF1g6vpte4pM9QJIYwmDfFhsaVpq7Fd73D7ssnGvCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFwnam09%2Fm0DLeaq1KtwDFOoWxyrAFlsWYD%2BdvZfJQE0jX4eBBl1mxsrx73CuTdnlBb3IJapIgFE1gqKyMN6StPTULaQvx8A%2BgQ1ADOY6Pi9SX9UrUGhmfJoCs7tLVnM1CJhAEYCSpffQ03I%2FBJzUdFcfLT2OpqzWqomrUMGLzu4C4CNAJjl1Aj3IzSlwZUQ50VJ2bHqHQuURAJQdXS9TF%2BDlPKsdUEc9QjZywKj23PQDkQMaS%2BcSt7xQNjrTbJhaWymyWoLVsk5El3fVYGHIux%2BQFePPjMzZ6VG6YxL6KkumFh6nKjz8fUZqB4ZEa70chGJd2wrWsXWZulkNtWXU8HEQB2poAt1nNv7Cdh4mcrf1hi8G6HUniTngXgv2REB0hMhXYXvRkGrYQ3Tp%2FvrPgoZYQlxVQ1XskaGDHXXZ90dwxIN5QLueMxWPHt2rlTgfcNR11ZksFns0gXiOy%2B8vPAdMVGYpESixII9aekwO3MS5DLWXxcCDNSmVoW02N1dGuHHuNtD4GnOWiSlXyXyhm1asQUR1d1Ks3Pp4tdqyzqNOEkCzOMPAbU24t7um2Nsqr%2BHPbU3S%2Bo10vGHjXBH9si0q78vyHj%2BqXAFaMvdcPm%2Bpy9oOAz7VV8RP5sgRzlStv19cuwqMHue7ybww5JP4wQY6pgE50Pjvs4%2B%2Bp%2BA7teRdM56OF%2Bq7YHxqalp39YPFmmbeZh%2F1zXamniE%2F4LBjIAkx0Yvi%2BRKr9M0xfWeI3%2BM2fiDsmp3w7XKzCy92IA4uPAR14j%2FdWpHHyLvfQWPPq5hIksI9w9alEhDwSy80mSYajxw%2BLv9p5QM5RDl3HBEof2ArpCMA%2F0jt36DUr%2F%2F3yLbOpgnW7u7m5liW3CwL8NsBGXRtRL2Cvm%2Bm&X-Amz-Signature=8e588fcf73fc864710e20945ffca8e762355bc80cf723ac1f278c88479b9c621&X-Amz-SignedHeaders=host&x-id=GetObject)

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
