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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CN6AONY%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG52Og0r2vpkTRxa4EFMEke2u2l7sSA4tG5CjRYsoK3NAiEAvt1LyzkkED%2B9mh5VJQP0TnYpTDJSyY4eaA538F8W%2FFYqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOa0j%2BPChnUeJ8M36ircA%2BWSOhGUUKZM7Mkuw6WvB6JsSHOHSA50QFuH6xRboZKjbEjl9jFmYgDCsYetI9gNZuWTZfWoBG57H30vGL%2Fy451Z9rHfxR3FI1G46E5ycIvlJqGU4JEyBppR5aZozQclhXIetob10kB6qFxorf%2Bv%2FlZedNw%2BGrQxNmYsEuO%2BmXRsWT3CB7qOr8Fdg%2FLP4F%2BU5HCey5l7dlQLtSBFZxGx%2BqWYLwHO%2Fpmqa4YjKeULtKj4YAKhxnZguY%2BYJW2pLtpKoZpVZ9qWsTod0TR4yp1%2FwlNBr4Ek3LF3SVhsEbrjziFjPHUH3F%2B65H2pvEUAN0KWrgRldXQhTYbqYO3O80Klb5Sk2Gfa%2FBi56JgsFrdKuchxRGE8koeAYNprzI0lcctmrKjGPRH0y%2FujoRc3C2%2FOFMmBoZz4YOue3Qpj3gLIW7z2Cvbb9mwsuCmSx%2FEcS2TAneKkpQQejO5j5oUNV7Nf1XSkEIOwf4xEOrw9bWUszyUpzKH3jknuds2mlwAqcjzQCMaw5lFXQf9DgIzkG6J5Tvf41w3O0dPvA7G%2BIUU%2FaKWd3VKBMOh2a9%2Fb2fzljqx3sKhqkdXnYQlTyEERe162jXzgCG02zuBRsQdtDz7fBgCRlS0n0BMYQHDirz2bMI3Aw8AGOqUBp%2Fmo2n9D0%2BnzSGtA5RRaRShxW2wQXgTvp0cDOH7%2B0SC7Dchd33Setj5n4O4AmK64qc84w5Ks2PfKmHXx4x1Uh6OJcUFjl2pMyV%2FEqedg5V%2FQDj5giaX29ygQmgat2DITZnHMUSZw4CPvjObAsvoo0Q0zJzizr0BBngSSD96oVGfjx8ATJ5gTf6AJmIMkvFMMPftZskmofh3al4d6BhIJMlE4rXNx&X-Amz-Signature=6fd5489388edd65079dde35d6bd6a2555d555fce56da4657ebb7a5b2004e6c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
