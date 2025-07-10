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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VK43GUN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Lz4hTJ4iYxTwa%2F2BuZO7CRmcuuCGveq1Ul4o6pqjzwIgdUgDOiZgmEZ3%2FwyyVgCLsLCgbNghXqShvgwZAkmTfwwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYDsL8DEP9D4EYc1CrcA4IJLGp5I7xCPbK10gr53jWNnLx%2FwviDJgU1kyAmWxaq%2BXPyjNwck%2BXKECDJreZxPb4vKGqW%2BGMBkEQnjvUdFWuGdgwbXOkXfQCcPWsbMlTu%2FszuQnqrHjFZfYjJNYhz0mkmMymuqPFNuKT%2BFitHvAPOWNkvuIEN19eS599zgIFwFopBE5I36mECc5JwsePuQqwzX9ew8BDtU1IFV5UJPL0lmYahhPZ2ZPbVjQHn2WKwqNWMZia3a6IWXbV42KhXZtIzJtjgf1QhPkWZ%2BlURV7jf3kjkcPeH6sTm22cT6%2B3ofNuja8O5l%2Fl8nDALX9rOEZ4YRohW8xqB%2BzajDQfTLvIOKL2nHK3o6Qs4nbn1t6nSMHNkcWsXuc5VPTsnjuXuisolRY9%2BkljTpjxagXdsVGy3xzn8ATgl%2BhNBKlhzqW%2FIpnu1dCBG%2Bk7XKjkWqsd9CazLjxpZxJO6uFlne5UDUE26Y3wBS62%2BCdk5cXQ9ZnBGfUdLkXdFdxUBwlAGDXhyBOifBNld4zmWMZ7v%2Byy2SkHbjZrQcQQ%2FbVn%2BTcBkaAr9pwbMFsmVBWUKnsgM1n841S1717gm6g%2FVzfg1ehbUTGUCPqLM2TwhSE0prBNhCpBCsTvYvARaiMfiHBBjMMHNwMMGOqUBg%2Fnmm1%2FSLJIc7d9ysJwZkY7RpoojtgLQFbpftbXnXqfMwObhwFGpngGv9wfhcKq2JluxJnCNQXLs49%2FOI%2FZzFCEdILew1VD94Shf93yWLmeHZzV8C3JuwmPenkV3lhCxbBoryrSFy3YJ2q1wSOjvRI5pObFUsMaHiNHO4g3pNxgrhPkdlcr75%2F4BmSK0HqlFM5pQb7DWvoDwnjxt%2FuoKrXk8OiLW&X-Amz-Signature=578a031245042e9638015445b25df3a67a880e27780e8834e81edcffbeb3fe2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
