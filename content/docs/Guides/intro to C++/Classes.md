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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3F777IK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDpb6yeXElPHeNKv1M8qQTSbmy481e4krE%2BW0Di%2FMqkIwIgLG5op0XEQNmStqllrK2Alq7wAin7BWNMluq2azZ4euUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWoTVC3fpad2jDG1CrcA9TDg%2FLkfHjE2uCN8BFF%2FSKH27Rq%2B1c1bVDN2DpFjyfsBahznHSEhhs8jOYRF0kEWgS7n064R877WbEoNriFZjh8em8qifeXdNApsfBDrrXe3EYDj73%2FJW7GMi%2FT84jzR9HL%2FEOvglnB2Tm1N9jyFSPDADbGvKr2r%2F2ZUG%2BFOOfHXeeDszPoW%2FViXKYaFe3tD%2FGgP2LVVHbhtl%2FKzGnE8u0hGPYTihCyAZScLNEz3TzHZIuovMUsip70o5HJEPrfAjuIAjpMHsp7sAWwR4hux9fyaSb9t75eKbbDBG9oVD2sRylgq53tyciqHq8zRqb6ig1EzKrQav6UvMhBVkr3gQTkXRkI%2BCdJXbSqbQm7B2rXFm3k0WlhSxBEzIf5Pux5xXJF3a6XHPrYSdkr%2Bi9X8fqQVDVT%2BECb9PRqGjCm8V0dXVKAZ2TotxaeTp03MmaMyjJX5920%2B0gcsXyrqrpr1%2B%2BhNsnv5gbNJiK8%2FIMW5cNCFR2YtPAz7IHRYP94A4GNhgZGuaqdoK3g3L3NdSo71OVcMEWj54p4DCQwsegQ4c1gO3%2FNQuld0SQfbGfE9akcVTdiViolsIzwUQmKInI%2BBb%2BrNTGJir%2FRgDnNgiPhSmbTeBTyENmBCpQ7Jh%2FOMNnLvb4GOqUBGwVxm2ilZlbrOR7AeititenCH51%2BIAPoq4ynVnR9BoMwRNM8SnIoNSZ%2BVGFFfgChYfNSU4rF18j5KTB04DAq0fMtW68WO6k8LhHLb9y3z8Z9x8MmEk%2BdBR6dfkiOVwEoRepWE1131bZDB1oJbR8s1nLe73zCxPLYEQpPXYwL5hlTxki2envhDQQoS13jW3n6lpE9dXq%2B3g8OXgpDUl8UOFQAtbDK&X-Amz-Signature=01fca479beaaefccac14616739a3e3f0be23ad932d309e513b66fe7dfc22a206&X-Amz-SignedHeaders=host&x-id=GetObject)

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
