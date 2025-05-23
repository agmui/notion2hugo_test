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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7TXDTAG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCQPbEVLL52gG9mvkBaPsDF%2BWiNWz9H6acS5RMoBd8BsQIgEhr6fgTOz8kODxvPihErhPvQ9hD5MoqMm5BFmMfQrCIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpd0vL%2FoHLzUVgfQSrcAwt8bnWoayakVjxHByZn2A5DNrJbpoMVLckkbqGcwVrdpb8jCY0N%2Fgny9bzGcydWjUEARN6hNkw6ZEZ6Euu6ZMMSr00%2Bn8mCkU2CIpNv2LaRQ%2BlG6XdGLJIHcrpjA%2ByGSe%2BOH3zzD6ucKNsZpPfadcbgq5jhoXq6xXjcF%2FMVUvA8F93D%2BS3WjlAJIs8lmVqfxbjUaSDy%2FKQSKL9lrsdLAdZt2Jh4LCmW5E5mIAILzlElc7giS8G1OY6vN289erjM0hQBfFa2vUpi1GkGHSpmgyO%2BsPznZ5jkJqBOYpxiPvr5QMtMeh6lzex8TaHfWZmmTaWcwsdCJEENgaCyWiRQDp9xkVZxGt3qT9LAMa%2BZ%2F4SIsdBgU74OTFNzIrth7J3J1Xtmm3f12sla7kmR1q9fGck4UxtCzfXByXOR0gpVU8koB9yUOn8Fh6k1%2FzJQ%2FYVjQNa9s%2BeFzaPuWaWkwwFuEb%2BhgyfIGqDAVdLXUL9wo0Hr5PX02AYrKS9PYnVPacZHncz1UwwsSz4ZK5xNrgRRKFVDSBXdCdjpzK%2FMqSYTdjiW%2BAiPjF13XZzGxEhQ62lEYmxuQH5QpY8GPX1Rx8D8buPD6ZV0bOzHjZE7FeJOxdxEIZXyFus4tgxRAAZJMIqiw8EGOqUB8ZESwbyBfN1WcGOjDi4LnUalYf7LwN%2BjBE7NYIrTuFphw5Qzrgvr7qIBr9MvOo6pmaF5D08x2dTr8N5V8MNF0wJuCiw%2B8BQBCBJgYwtIjA6G9fL6tNUxSxHuECianfkmxA0QsCILagdJEb5UXFD7C2oIkdJrRYUnx9QJRktIb%2FfoMcerQK2ka8yISHaDFiya3n6viZry34gLSzp7A48zr9TSjWbM&X-Amz-Signature=ded20da2eb30824e032e5a80beed6f3032e22e0b0c7ff020a298b5113bbe4a81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
