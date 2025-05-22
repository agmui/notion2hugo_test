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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4TIYAUK%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDQYBOPQs%2F%2FPZjnfb9lUxrzWAzqFTBuizQCMZush%2BXoMQIgIa0ST4wa%2FrXMzGV1IwlZYDCMIzRsd6oXJRmJPoRrlpkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNvFGdsV4xY3LtdZyrcA6610hDyoJ84ndcTeMf5kc%2Bbw34zOyCQQWCFHeCRzDdqy8P1hEchMEngeawXj0eXtKZ7S64CCiBrTGXhETYIzEb1XavMbWwDCSI6sVgWjvCdkrE2jnr3d%2BzmfElMemqbB27a4llIHZ%2FOVOsnPgyyRC7UfzIB7sVjiv01kilJnfIWBSCBz7vjrAfXPNxC3h6YXKa70tncnjpyEBwWousCYCrTCRBGEckLka11EKR%2F16gV%2FlKE5TqYMEsJD3F6Y4qhnCNQBJGbg0uYf%2FtdfAkAAIIljlJyQqlHT2GQekqakLsKB3TyQ7f34egM5EZjQ%2FJhx2NcCk2PZKS43Lxq4G3RPpqalS1bIShIxveL%2BOUDEAkA8hieEz%2B0jqPZ%2F44s0WkIRV484wh82X3HcIY%2FxYe8XFwQdOh%2FLUC60968KSfI6LT4Z%2FjhlmzTrAhztCLnXsn0EQpjzcRcirp3MMknB7q%2FfAQOvnx2TBBwi05EuNDI%2FevkhlOMWXUM8KinGh3DgqktmQo7pNmhZQiQPjtgrcpCSerMum%2FgVdOll8KbPRugLPkTJush83l3lO6xfe2rAQNHRL3D75%2Bz5a0CPAVaC80nJQ5Cu5%2F6XWzbth%2FdgNKlAcK3Go58CQqX1bEKK3xOMLDFvMEGOqUB7DkUpdOTUFl9MktoDlaRWp8RwT9b5%2BemTviwHLkwg0VW%2BNprgiLQf7LW4G7Ysq1GlfAFVK0K2xQoGP2RKXvhZGqbCTjjzhRBKl3%2Bcv%2ByXaOHnd%2FUc1eyAkCnf6SDYFnQODm01asPd7TEgvmchO93edXPPvujoVE%2F8Mlf6%2BxrcFyj7wLnYu%2BcyqAhCmdrlchXIh9RUJpSBbWmJfJ1kPQoxBGjCFaP&X-Amz-Signature=48bfc08de0d2d15e0b97ff0556b4d7a87a455e79b5b9602779708b31d12e63d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
