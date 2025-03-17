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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDU4C3K%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICf7Vsgn6EUu3HvxN0cP1Ag8bovEATjoqplq9fxeYQWaAiEA0wJCot12Agg5U54GhUKOGIgvdnoWojisXeK2t%2BWwVO4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKZbfmJmZN8isCtnSircAy5Hcygds5UjWtIaFalf0J1zvnoxzYXHMurGrA7AwDglP6q5eDXa%2FE85myaf5qgEJjb4af%2BQT3zjl6hUS1bDlai4ZJ8j%2BzQMLu4o2cuY%2BpYAifqNb%2FwF3TPcDEgKg2QTLBnL%2FYlmAcNYXNzD9nCfBML6JXT96NURDhyg6UoKRlXJEXKfHke62NkJZIE6WdSRwmXRzUwl1t9CGh0BhxLncW%2B6bAvaEsVSMvpG4QlyVpbBxFC4ykkJH339VXlN%2FaIWXYrzO%2Bcw%2FPWF5fKnhXN15gkXzXpS2qBvgs%2BG6JT0tAPEp2jTEepyfJYKc6nyrQuhrxwc1GLnf8GmQFS0gTiP0z%2FRHUVPr02xgnOfEn0hbRO21zqRs9GXZMx%2BdeVLyVpq%2FODgFoIghBW51WsWsh%2FDOpvZYrTAf%2BxEdd7E37n69b9fvB9AhaVHQMqXqKW7ediB%2Bi7VFVnm4thDg0d1u7rFut9Dod6B9fuR0FZeoJFVboOn2HX%2B6ui9%2Bmfi9uv7wGE7QrIJXQo%2FR82bKDUAZJxDN2NYhcfHJOMKuDhdFRqNeU7NZHOFYQnHS7N6IRc8m6CYjZh0QQT0KMRTVAWn5JrBtuyFyNK%2FHF6WoS3EEYBumpAumD8UwjvnP6HxRPx%2BMPLF4b4GOqUBqxfw5YrsM7rRp4ZsMbiffLeMsHZBybf7OaSsMf2iKdW%2Bm2L%2BHkgJcVmHVj39akvclT9bkjTH8mQQPJQTNA7tlj68Pi1gw2PF%2BC3%2BYnBKPvctswBmU8OJ0MZFVxOX0Thrbo%2FmeUu3%2F0JaKOmtGHODAn73o2tSd89hnbmtmHJ2STfAo2gFmK2YLPwg6ZbcJax3JKiG3lIw38kou1BE9VUmi%2B19ZOsD&X-Amz-Signature=b86b38962251815b4a8aef3a44fa23481b37264b991ee46dfb6d0c5570e160f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
