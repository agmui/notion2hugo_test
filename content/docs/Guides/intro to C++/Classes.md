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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643SKPSL2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBBg7gGjkZqnxXHgHA%2FdlDjJKCkYfIjwwUf7OyAqUdMfAiEA%2FhX08LOW7LKNNaMIt7WA4hpQPcI%2FHRGF2%2FFGaA%2FtZPsqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7C3toQVun7TNKo0ircAxvH5AzJr9ey5V05yYmBiVyiy8Yf2jN7VO5CCm1BD7Xwj%2FKwc%2B6bOw4Vnx01aOhueaOpkYeDG1bvW3PMPtF27gXXzb9dw84NniDJ29EEHYPBlYtr%2FSyZVRjHR3I6L84HYqn1LpDkD1V1jOybU5Da7gBf9nK9Fyocz5AehAILqgSoL%2FLJePzx5DYJkWNdhaVzuYnt%2FHYUuq%2BPQMjsw3JXpU%2FwE4zcxH6vrQDxnt07yccCTOg4GnLNyxlzjBwMQOWxuibwE0XOB7AFJzCqe4DDyWLIuw8qhIx6K9reFNPTPdgnlLw6gyiFAHDbvwKj1CHZAarw5Xqcr6dWcqkPAgND2SGZ7L7qLnI3X2wJQEkQoPYcTkQFC%2FHl3ElROOClMbkf5c6XnlY7mf%2BUsrIQfMtxp1M%2Fq1GEOHCKygrG1BRrYmsz2GMpgcRqezrZUHWkLx3Apz13x4CiUwV33ORH6P%2F2JIKirwV5wN3XMHJk7jMPtAFouYGdys0f%2Bu%2BOzsaqsE8v9cevqwC0o8WVvquq%2BoCFtBS57ebPpAF%2FkKRDkDu%2B5QCgcaGxvorNcEui%2BCbrq2llIwFhDGQTJjBDKIld%2F9%2FYPlq0zX%2BCPdlkPsjnNpERHdW0L2wQXUfS4ZrXUfzAMOPlrr8GOqUBS6g%2BAUeuXCIoL%2FFh7aIB%2FzmE%2FAcU56yztHLOgBwbI8iC5svgNflo9L5vWykqui0NH2t3t7k8ddQ6wuhhcE%2F%2Bb2G6OgIb%2FnroA51MyFcroRVRLUUhmIvU3OktpEd4grZ%2FKwPc8D5onQJA49ujPDh0xFy709PwGSQwCtbyQvyA%2BzlLQHDnNNvccIr5C%2BSW8S4%2F9Nxqedmc9yTg%2BuP8WNZQb9%2BqTDXg&X-Amz-Signature=004fa82cbee645b88204795a17264b97536922027e308a32d0caa842bd2eaf63&X-Amz-SignedHeaders=host&x-id=GetObject)

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
