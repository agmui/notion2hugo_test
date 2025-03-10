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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJJ4NFM%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDW%2B4Oh46H%2Bd%2Bevw6%2BdP6JX4CeJlMTuWWY6Gb5SRz9seAiEAyREqoUDMU560Hu%2BFxwtJl9gS4iZTZccWDsYtvutT2DIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmGr71ZfZcsssyNLyrcA25C4fxyjAZVA3t2n3x50OD8G6hIt1F08ffb33Z3%2BxZS%2BHbJFaU9CLEyLQ1LT%2BN21q7jRdqld6hhRkDMTlKc4pI14%2Ff9QQXXj3aYvC%2FWiyMd2iLcCZi7LYeaE2diohGqxn%2Fn8Q8gtyPeE4sDC%2BxkhyC6btOjZnt%2BbsytIxWWD%2F91vX0zpOebc5yCiHxItJA9bybU9E9PwQ5fVZDQ459MF1Hv61UQbriL3IYiz%2F5psRLOqB%2Bmk4gAjTNW345VLiGlf8MQDPd9w83kyIb3B6gyGYtddwMbTBm0ayoB4NaxNh6mni3IpDPXQf2OoIJkD0PUvhDJ25eGDjU71Y7RsPXeL0jsvtIva9vStX54Pt3DV%2BiYaq1uGqy8rB9lKpMFL4M%2BuI6VbfjftQhFBRzYO5p91KGptreZ3vf7E4zvCxVCPCczGx%2FLSwtNqcVg38JnDJzbCIwQ0%2FQxgUGBgEbvXFC1UZEzSsVqeSL7Q9HfwPXOvBoodhQoS5%2BCrUfjKmZGCj%2BJKAwauKZyly7xrhH2VjdTIH5QrBCBOOn30PgLKUDVOqG4oox1fMm0PUwIlqsKnYv1rYLP7GLQO5ScxC0v5FbeuNvT%2BkgDOyIHXris5j76GAdOW7yi34c9bu2ZLp1VMOfour4GOqUBHxjc6RblSRg%2BjuLhrJtkIL%2BQ%2BRkvlNIfQ4g994acGkLFuZD2oQKC2TOXLlOqmGr9Wxf6iLiq6HBY4Huse9lyYc%2B5jOfkIq8k9N7A%2F4vFO6z8ejoj%2F3WOiqrVm6isa70Th2RzNTTWmSsLvoXWwwgB51jJT60vZIDMfrTRWqt2vrPJ9hVkihhch%2BJiP3ZSy32094ojxbEDEsmwZJiAJl0i1OtvOVxV&X-Amz-Signature=89ffda7fbd696aefa482761404872a97e69014948411a9ac948f5225a66e1f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
