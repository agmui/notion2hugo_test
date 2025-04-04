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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCTHEZK%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXglJYV33%2B537yXWwXSl9yrtZi5cPASCgeslZAoxVqLAiEA7jQJ8RzwO2Vh2BgwBuBYhskZjLO2xQOBSpULAaMyd0gq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDCiIbj7zzheO3XcSrircA2q9dYKUyITvsOO4%2FSALG1GSrVikY3udf3Jsug5ncf8cjzWc4G6wEmrJDFcn5OJKSqsDLnwRSKIneO%2Fxco%2B85vyFupeN3ZEIaWZ%2FiNEwgST%2BLT5SmFWrRldh5fCa4MzLMOJHjD%2FLBqSn9Y3P88DjlQ8GMWgpz9VQlcVXLJ5XGKahRzefZzM%2BNuNb5PnnU0VeGvNS1KFL%2BxyiBHorPz50I8ToDOxV3CdU5CUa6LPN%2Bo9AQ0CPQQrb8ilLwwNkIRzMXsWcyJNxOJIoUwHsCgaXzGQPtz7nIckR%2FSQZSCb3CJrDtK9QIZIvExHHlWtklvcddZtDByC7LKu9txxCMjtBbKumSssoHHyetBlH%2B4gIgqLbrXcs1z%2BM73y7eZF61Ru7cGwaDBGDYTR3bWlyW9p%2BbduxNtF81qJ8O%2Fvz5bO6OJfqsE4J9UWDto1%2BS%2BoB9iNF%2FiAuoFMUu4Jc%2BAC2soKAEcY0hz%2B49tla98TI%2BUigSjbPjvRHAJbls9CwELIbB8gUUChOWB9HLj%2FT6GyycMOPgJPsmie3yvNJj0T6qlsl7GqIMewqbBqPJ0imfgT8aWxhZ2odxlZp%2FaUryVW9hgUdDvGIqAmkldbL27Nylx%2FWmIyGpZ0ZUTH%2BgrF4HQk5MLvuwL8GOqUBGHsyDzzYbz%2BqBNe8UG%2FwxDpzeIvStaJUFZpresZUTQZy%2BYGbqHcSFtEcfU%2B7ga%2BXITWygt65uw8DhMPWPm8ewIFr5XGwgaz0cZNp0bECWKAx0O4kW2QiHWaNufAwDzXbQlzMQAcndZSLdUOFPjgNv3cUFzBoSKoV5V2VxaY%2FoAWbGxltm2P3buPp2H%2BRQU5YOeUdu4PQcoaTLMS5MRUzl7KuI%2B3q&X-Amz-Signature=06b3dd29c4f85dc505b4af13f7f7756183447720c4273412b1abcae3eeb4b120&X-Amz-SignedHeaders=host&x-id=GetObject)

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
