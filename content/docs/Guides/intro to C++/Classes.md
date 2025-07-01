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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z5RCAVU%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBJdU1kXrXI1LV46mwUpQwbvdpjwO%2BMnH2nrzbINeAsQIhALBEm5Hdz%2FIjBV04XTdB5f7f1%2Fm6iMlMHK80fpGgU%2B0QKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9Oi4GZA9iXyDzJa8q3APyn5wPOIGjSu4Q7GyydAUCN6OQb9RKbrWu2YWgO6NTZPq9bG2IP1oFxgfwbI1KozCidbBFzZLOw3npfpjtst1dY1OJnQqao%2F%2FPYWcbHlcjgivkdlzI0oANvbXIexFa8BfsbFEgmZ%2Bd7J8UMDD5WH1AYjzpAalY3EizEaqxRqiF7XD%2FX6gJ3gpxdl2%2BQROjxcfURCSNMrZQJjIK9w6EzNG8yfuGitxwq3irLwlIyPfWfh7vvE7nG8P3R8ozm8EFpqyYhHPxy0no70Ok4E0pJbihkfQKY9z4y%2FEU5FSc49yfqcVy9dk2yi4ziYrEcKNPIAklHPHil9bE4CEhdGFvRk3Vd8DQlJqWchmep2ozc37li5r0l4OVS%2Fh9uthQUyOnCmrHUyTsy1h8eTQjGkC2mO%2FavI4NVyVbNhXF18V%2BgxLfoBdxpJGVfJGwX7MNgUmFvmXLVyNZdABJZv5zPn1x3oirYOvffXg8xNBV5SGC5Uq4WPF%2B9AnGOrkC8o2lIGzi9aGzKeE%2FbFDzSZm6qr9BocS6eT4vqn8CAgeIgVS%2FK6aZGMVXKBlF4BDuFhncNReIY3A%2BirUhkwRqtjKRkEHs7W7%2F8SeJCYkfFqZHSIpNB8ITpulEupUVcKSmyD%2FBmjCDiJDDBjqkAXLPToyA8dq3CcwV2p0yhkXbL2lA3%2FeE4F8VIssWEi0D1OMJrJGTwjaFNmG554%2BqOPS6GRr%2Bu111oRw%2FNGDOQ7xuuZvDCPY7kgq70plQtf5kBgiwgINttlEROi3phikTjGEHva0ZN%2FtG3T9mTvQNEl99hC6mFxyNBCXgyhNKSct9gTi4mC8HPeByrosB6Ob1zaZ14do2hmonnX5faIJcwu%2Fe4ybb&X-Amz-Signature=6337ef6c334f532bbe6c2c944a38dca38e1cd9dd36bdc5243d842c523d3431b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
