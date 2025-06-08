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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWHOMRR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsy238bea45RP1NQEa08tcss64C9SnObliYBRZKGVDmAiEA%2B%2B5409p7rUkkSx8QBt%2Fmj3zfxGsPFuMxc0KKvN2LfAIqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAiyDZmjFs%2Ba5LN5CrcA%2FTlBI%2BqzaHnOxxs3O5ZIe7yRSeHP7gBGKgqzkkdqcIn6RXaCP%2B1liJ8YGhekR%2Fl0UqNtHPQQNAdd5614BIJXo0eL5L2JqJ1zffH6Qh9OK7sWf1v3SlN%2Bw%2Bpf3CagcCC637Qov67C%2B7ZyZ6%2FvLdyxaEU1wu%2FpGoVNooV9%2B%2BdgU9vRdAqU%2Br99T9erbjsGsydFvi6GidNELuBTUZyYkPhxHMzLjSQ084WNZTcHjNkhRGXnOa9Ljaqc3agVjIVR2jXefJDmDEcRvURtBcV6jvm%2FlUDTnZNJjXNe3MEBAq9n953rcGXRJVikkfbDWjG90sN%2Bfafkb%2FShvjtjev4rvoYQknutmDSgh%2F6ZRpXjOZ2c2%2BD3d%2F4p9rUjfy2W3t1ffPzy2s3wUiw%2Bo6HbBllGistsLfwpnYKStWFi6fbiIIr%2F%2FmI3ymxuV77Ew4TaCL0CMuHa%2B8HbmPhquK4q9wuS8djoa9uSVStFcUFAQSAyFKdKQshTqMRB2jbnyMcpxLriWWE6bxZ10wuPQz%2B%2Fwo0DriN7h9J%2B1ZpfS6pmQgJeJC%2BcSsoDfvrigjtkdrDrwV3D2C3KgtjdQBBzCOiW6eBz6x50DiLSzid6UqhmyU6CZ78HkP2WUYOB%2ByBuZKLfaDGMPKmlcIGOqUBq9f49%2FxZJXx8Pr1ght8RTsZsOp96Iu%2B60ep2tpAQmd9m5hFjxBU6Z6nzYLzfWFmWwhMJcJoLLVfZfj3O1WVXDRepK5os5i1mwA242cyaNy2zhpbboKs02kLx4WCy7r4bFQ40gtVcO1lPwX32h96Wy2fGyFp3CJCc1j%2Fe4guUBBMNZgsuC1fVVAf6L7QwKvG%2BW%2F8OhESp%2BPDKmKKldVoC13VYcAtw&X-Amz-Signature=0c58718529620cb336f3a2197ae515258313bcbcb0ce3f369851b3e6b442ece7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
