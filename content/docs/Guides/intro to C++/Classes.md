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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBXERTG4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGl0n219dY%2BxzozCoEoft%2BTvPTZtWxKqZfXhHXg%2BwDzyAiEAhkAIC2aD%2BjrJt8Z7%2F8sONgdNBFjqYd5W3al5V7vVrJsqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDJ4PLtEqpVM1tknSrcA%2BslJPc6c%2BGA%2BhmyXVjbQICr16FdqwFDSupTYYthTRjYjLJDveOYXqnDTmk73XLLEZIUokQp%2BJr3eozXZHB7eUU0idm93piBYn%2FgtWd%2BVfyo7n5juPyCmXMk8q5CM2CgCTcrZ78uw%2F0ZMtEAyFv6PQzPdbr1LdAZgilT%2F3NKS2pdvc8HM1CHYiu1DPIhyGEpaJ1fzsJy7I51O8cZhPfMUamGUm8KODodk7l2FwyAFHltdhsjGqK%2BXIys%2FhpC8MWfdadCo7ULfvBVrnzahfKroz%2Bn0XvJPQvKLcbjDkRsmk9iodoJsQkXeKRpYfx58Vw8cyJExAUnVJ99UbyZQ17D78H3w%2F3PVV7WEz2P%2BSYz5A8BpoxbFZuxRuz9%2FSBLJxILvp4OupVJecAalvaeNy40xddLT5F5DEUVpRgn6lNXACeVA4Bp5279WbjEM8UF%2BOrN7oqO1%2BwVpBnXxQ5AyZzP5FsYaoMJNFWes3ZEZ1dPZXYBXHTEKPBhF6pvAsg6whUR1ZSmi%2BrpGWS0ibKeJyC14z%2FRjzXg0Exl0pUDmgiMZgOZlG%2BB4wrKq9cZU9OEw%2Fo%2BydYVaoNF4oLPL1nTAHSu1RfMK0RijoqkqR1NmVk77aXVIi5TXOgZQbqS8YJOMP%2BViL8GOqUBsyxkTVpggxgPJUiXdAJyqRiZYtybNp%2FeNLO6cc4DQFnYmNMAOHLQlcLpT5CpZdpV2HvPMnu79OodVdPMbnVyVxef1mO%2F8i5Axig4Og%2F%2FatAEzPH3wwksb8AfsFY0rkOg0tQLXyOTKgdTqu3E3u5xQO4qpvMlSV3CXXWS%2FbKmiA70pR%2FHyxpTtUTQpmBUPquwfp8McFiqR%2B%2BaXk%2Fx9m%2FNxbHd45lM&X-Amz-Signature=578b3802209de495aead1fcd30c186436875d3e92493d3e93ad71d3953d9d7b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
