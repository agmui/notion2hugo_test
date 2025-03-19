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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNCNFWZW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDIJy0h4MfgIXdjO%2Fbcz078LhZWnr1O8CuAul%2FbvvIelAIgB8krkYU4FldCSRV3UZQADd1t7dHV5yIw0w7OO6sXkRYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLY5RUMkH1TsBUrY%2BircA8nMpbuGq4uGnLGcZt5RM4U8zeKypQhLapfhhCvDF5qHeecMVSJ6J%2Fo08m0yp4CkM%2FViCEA7MT1nOZUbD9KsfNTry52ZVwQC08%2Bpnq7%2Bmm1%2B48qnaWoYUwYBYooW%2BW%2BDiCGV6U9lCOafxF72XMcFfZvIcCJBnXlU1xGUsQKR9WPqRA5bvVQkkFpuOlY7ngkUQaSDW%2FV29A1ubr2oxbdBHAYUgE1Ibqk4mqo%2BTV%2BRN9YUDo6cZpPwIxIJB1WBHCB4tospXcNiy%2FQsUcMCpFhRncDfuWWfIVBBlaEwVUB%2Bd6x%2Bs7Gveo6%2BDqLok15pyN7OMZUbIdJlgwX1kjUxG5GutEVtK%2FepmQ5gqZuhvarbMZuLf30cQSofZNZyjTTE6eBCQgFB1XgUp%2BPmXFa7GBXMceBjOYCs60Kw2g42V88e3qyPNgt4WmtqzvTGfcu6vafWlMwLzu6Lw42s04zmPPl5EHMWXIqSLDYaAJDl9DXBAVJ9uzBBAtLutRZQVzd%2BhO4KVzauZFf9InTeYz%2BDkGz4NfbwRMrbWaCQqLphbYmuBE0QDhFoPBnxNt2JS2%2BMmvSFyfKTSjSUoMdXa%2BPxZhls%2F77miKnafNpzUyHgBjMkM5RN6nRmWOXDXwxU3TP6MKzA6r4GOqUBU3E7NrYTKkCYvEwRR3dhjgbxcZxawN70QgnmDWCtH0EFxmJhyB%2BLjUkkM9hlhvdcuz1Wg5Eh1GZgIh9t%2BVfWl3InBEkIv6oLfrUfoZvO%2BmgXC3faSdE2MxPnipqo%2FeoHEiQ6ReIUCB5kFPKNvMINKZ9KSsK5LhzvHUTTDb4GoVNe15mxSW%2BXbXAr8rGsQhMU1iH0nhr2pfRjYZQnwxrAqY%2BLjHrw&X-Amz-Signature=49518739a9352adff670e3dd4057bbdd6428e4b5ec2715f3a82e988ef51deb14&X-Amz-SignedHeaders=host&x-id=GetObject)

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
