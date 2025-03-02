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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LGVHPJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb29kleGthVn%2F1aaJ%2FLMmiSJJgImv7jsyujGJeE8hEGwIgFZ8KB17M2vgqDZ4PPqgFd1abtZvKe8AXIPC2XIiXuZYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiIi0iB%2BJU8SnyjPSrcA%2B3EgefV1yrmQurCuMPXghwWgW3Imf8y2twzrm1iA6BRbNeR7EdNE8jXx2Hgff8F0IoeZtp9s5hvTMnIx42ZDNOGb%2B0rESM94XTFAEd8Bb4VkaI90R18c2cg1%2B5162tNPaIQxialcnCHoTkcnmfvw1FYvOHqH3SXHKcOaIDRoW6lvMeSJJJhwLmWUc5IEhJXbDEBrxyjfJCejAjvRZC9BX23e9PIQMWdM%2BL5Wui6QNEC6CYDLcPx72FWwumvAr6aj6OgXBihhEhajjyJdnxcGH1u3o%2B0KdhyPOECfX758B7PMu5t2Wmp8jvwXk8YbZ3X9uhh9woiBfa520rNSdx%2B02Z%2BNXMxrcs7xtjNZM6b0wla5oQzhA5dKhSRbDhKDWGO4tYrg%2FE%2BeNBwXh1purZZbNVHh%2FyoyCrq7L4c2l1QqoH9xdKexHBWNf5sdO%2FONsvEhUn0fce%2FZ5fgFCruOc1CvhkfdaNaaeQIHg1gomqKnP80YxoBwX8isVZ%2F7%2Bx%2BqRRpJlsfbtE6K%2FyhpmXof65AX6L8yZNeY12lqJfc8qjRsfHi9FCwSc25cQwuluwNcw8ZZWxEBgO8Uvh0pdarvFwoJ%2BPxfbjZ0e0v2FpP6lyiiES0ZM51KNjPYNd3KZT2MJGfkr4GOqUB5fK2O56j1T1q6j%2BWtjf%2BpbkJ4884qPkYv2%2Bgp6PdPAV4VPyLD5TdhYW5iNfwMvbfbLwfT%2BnFoOzK%2BurxwTWvsQ6aZ58CfJBVJgDSOgeN4ZQ5BkLEPxfbBw%2BI%2F%2FT%2BpEQT%2BkkKvC78fDDilD7TfQH5yvjBuLlvXictZiyycqLII8YCv407CuozelIJbJkI4IM6qF%2BO8QeWpUKRHC0y59gJJYv598Ae&X-Amz-Signature=1d3277e729a1211f299230ff55d565c03d741557a85c6056d35a2a510c83f421&X-Amz-SignedHeaders=host&x-id=GetObject)

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
