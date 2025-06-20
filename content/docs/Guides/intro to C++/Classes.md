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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HYTXUUA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNIdfl4Vaw0FSEO6ne6wsuEgN5vwzI2KQMNvoi2niwrAiA6UYbEwIyOAMFzwk%2F8wq9FkYpN2lPO4jmtKeNk8ICOhCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr7CLXz%2FxTlTNxvteKtwDdHy5NjKeUaHLfCaSMttFibm7VVpwt6OG5iD98ZfWPy3h%2FfP11cfF3%2BCEfM%2BHXs%2FGf97u68aAaf9DQkcims1quQSEesOWvz1ap%2F9l2Nkk%2FNIrUn3d7nPTug3MIcNv9xzIxltEcec9hlu7fkOc6Z4pzt0DQ3T%2FmtUOwQNlotXeNoIgXYuiS7zHdO4SJu9MsYFvc8LKdu31HVx%2FNMZrtmfMx5YtTz4p%2BnaWuru%2FzFzaz0jCM53oZIkuaG0hX5cAnAgCiASNzPzJu7XX%2FRGcaXeWhtqjppFbYRPjBqQgG0xXrUPVBTDUfXIa0OGzkcg%2B2eyHGeMhy5SsWdI3sgf9kH1KPciGn7VJj5fN7UQ7WhJl8QK8vO3kK39g%2FyIAZJlmHy6RGU7y3G6XXMv%2BBdMLlPU%2BSXVnWFYFISZrQtCQOcZJWRuQPqk8MmRGA8xlrpy3ltBJe5mqrXYtwuFonnqfC64tV%2FIupnkD%2Fse6L%2FjhCdK56rH%2F5tp64h%2FhDRjj8nq3xv7H76Rq8cuX8BCFOFXiQSGLnE1rvKLVusGvBUuTjrDEAPvY%2FeaRikIcTmLFWoYWRit2UAxalieIkgXBtQ3jbZ6JDjUNvxW85rRt8FDkX3Sq8b7zRQPML8vyjyP88yowt7PWwgY6pgFW%2BfEVYwS1nA%2FpsYJjnbEsXNqE4XyLe38V7jvWFKcY%2BYvphVCggQeavEBtIvaURV78ce7fX6bB7Wb%2BReLdgD56MwTgTpPwOXxh85EwSOptv%2BOyok2snORkMTlmez8nCBUwDAtuFvrHRJ%2B89X4kOHe6KqatczslOyw%2FEPdD5cVbizxcXzz%2B%2Fesd%2F1dgTgRf30Mo4Jd%2BrhhtcsWtUKF2rRfQTL2N60UX&X-Amz-Signature=1bc897948ad2dd8a8d9af84c486f8cb6a1a7567144ca881cd301fb4e4dc98777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
