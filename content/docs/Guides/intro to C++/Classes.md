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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQFHGYA4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0zzf9tEOGX8VEDrPCjEUT%2B8ckyIPOC697avKUMfb2DAiEAwTfLC8mQZITLRoUJzxVZYpc4eRz5C5%2F0efm%2FSFKpKIkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlv4BPa%2BgqpjkafBSrcA0Dp%2B6mYtHtOW3gj4dtXqc5JUwz9CYze9rEDl2ATxpEn9s8HV3I%2Fi3WCRCqqZdeDxHTfa09ixBTT364PF%2F%2B7VydzSJ%2Bq39XymHQOozCxDwEkG5xRGyj09bm6sV%2F5wkgBcuroWibZB0022LL%2FBNkxbV7ZvhpU0TuuMylvYVRbv0oVlyj5cNBVC3853gT9yR1CXzKdgtI3flcxrgHGqYboWAqqvlE%2Bt3Vwvy%2BmzhubBrPR7rufbDILL8FkR1MfL5dmdm1iKEMrreiGtk%2F8u1wzKIRO0Ypon%2FFmhOitmgN44OElcim0TfIERL8hHTMhTKGduIk2ABSBsjrNUKyNIn5Amf%2FggdAJCU2izOkGuttLQSJSunkvvZA0zb9rkNyi2dz%2BfikvxEzfT8GgEaVh%2BM7mMy0yYP6ld3FJdfLIASAWKbMQSfq%2BTASiRB%2BSnG7TP4P41PNNIkjsu7Si1EMUtoRKk4PNYAVTjjoSMoi%2BUf%2Fj%2BZmGzfRdaInKsP3KxCkQfrvKMQq9OBLBfOmQXzYplc7SV%2FPagxBCXEqUSWA7Kf1e%2Ff%2F%2Flek3PpZQvKUB7uqP2HgB7oF56LjbpUnBO%2BU8hGte75Kvg5TeDGExM607NQ%2B2gV48wtXO9KqcRbtsKEkpMMag%2F8IGOqUBq%2BBD%2BmhWPZtO7pX7m4swa%2Fik9LWEiT53stbs%2BNk7SE9K22vOh%2BGAdzdtnKq1mlrYsINIQgQYKeNKpfJeZ6ktO%2F%2B5l8gh7i3XHnVVO6CKLKE00t2YD5NMlpVJhrHwWaY1VvoSfknhd%2Fj1GRJZHLkvnArXxBoA3wMug2SBkk1EGlSk3Luzi165a4HpJfBRJ3oSFpzOkmgsThEmAhT2Nejvr6Imexl3&X-Amz-Signature=b80724a5de86fc690a73b9bac7c715809b8fe08b45064d805ca3bc23aaecb8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
