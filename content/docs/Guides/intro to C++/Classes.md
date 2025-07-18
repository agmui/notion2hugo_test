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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RLC4C5Y%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDw77F44VyZlloQskD1f9hO%2FOrZxGKXxLyi7nSIM0QlhQIhAMphNBiM4YiRBKTdDfBH25QOUeNhEn%2BbdSSnv660amAGKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS%2B1YeHR2tedb%2Fqxwq3AMmstJQDS9PvBIsxJDin4vi28s8yav9F1cl5xuppY8avkD8UVdz2jpBqal%2F%2BM73UKltIKSPFNaFLcbS%2B%2BPSZ1hEMJCbM3WaogzGT5k1CobHSw88UoYtSVhNgArBpZRJn44ABwcYHpEa%2FMTSmuHFyFkmnq%2FoYSw65uQ%2FEuPouAJ0prS6MkkLsCB4Z18G8HcXdjHEibAnWdaqPfd%2BABLMMkgoHSwo9pYSpJohFA5bM5xVTf6f0tbDRMxQzwEjyWWkrOCWmq0wsaiEkqpDoZxv%2FRkXO2HGM%2FM2R1Ajj7R2zLi4L%2Bku0FLV7LZk4Whdh1ixS13fdthnrHBSMl7OHtai2WmUJzzX2buMBrvg5YdUAa1RwKSdD36rCiWj868H%2Bp9IY%2BizanqhsZfTbA7cDCuAEpl3AIKREaleMKgExFjgOAVJmmOFN36nwwwh4tiyE7McpGWGNosBH%2FVWzoGw5oDTDCslj%2F5Ufv6rgJpebsIXr8KSR%2BRFHNutUbI1KeDVDoX%2BIo3N3Yng2vgJolIAnP7SI6vHLhUasDPj1foKVHsWARwLwjeoCaDK%2FJ6B0DemjqhClOjOKRjwf62e0X7dPpm88cAWkhYP6s3dNvfvstTlfcqHAzbAfR6Q%2FyJ426LqajDMiOfDBjqkAVmduorDQtMRnebXaJ79qSBXWf954aOvHOHHlzCvc%2B6GWq17da1fq%2B7Xe%2BBA2%2Fpr3gsMNatASwzSAglWqrzbnrMmJ3tZdUMEJ2iwCKaoE2oxlrLSlflZiIt2fk7%2BbeTn2xJLfM2OhOIf69Af7Xw6pQvNjrDra61Ty2OfbjuU%2BJUpwVlGZ%2BrnhmRuAw28D5WYTmAMkdU%2BFWbVVBfwYAPnWFhZ32Vd&X-Amz-Signature=0f785c00dad731cd7685728f3b7315a9432bb87a8be12c9eaf54d8e2d160b8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
