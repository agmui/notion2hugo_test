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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBN72ATN%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWgeFMnlQrVAgb5XYSSsJc3k32ck1JYOHWyG6vfuuN5AIgEL3jcty%2BTzl3hqII%2Fl5hbKT5lFyg0QAG1EGp%2FDcTCnQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKz0WxgAYbYN8PFKSrcAzTbzUNpZfW88aBFatVBh2AojicsUF6NxhUXn8empviiX0352Cl4GRedReHJoc0N8VrrJJsaU53ITSIJqsk8MDl7VXVynxBAYEyU041Ymy%2Fs624kIKQ7KM5BdJ6e5R2yr%2BgjbBFS7qiR5sgY1a4DQxFZaCyb3NpNugbLmQ4noyXiCYgxqXiTYu2FkZTZdgILA%2F%2BfyDLQvqhXIbAwtwskV4hjMbD0hKG%2FfVfi88jN1DD3OmFryTQX1WWGlNp6uL6nksS9DWC9tvOnCM08xGhvKHCSeHHzUHclcEjSStwrC817FRxcJEzVn%2BGcI4JuRMEsTrlxoFf97lR0hlU6jBL3Tuh2w66JF1NJoQ87D6mmeafWrZuPe8MapuYMb3Ag3yBXeAcAiByFgJZH2avS%2B60krMdDgVbNYktbsj5q8DZUxxcS4%2BlcD7%2Bdnq5y14kRe181MhRY9vFZeZSG%2FYfYVrSnoFq866aqgxSLS3e0tJtxWxBCfCLAW5NqkvClSxqteDN9MYQesS2Cwi%2BlST%2FqX4Pc1JiQepQozRPpu6OvnwWKytJCp6uX2ePYrpPAK%2BdtXGVbYthRtnZCcOu7O6H7pYrRMpLHXff2vVAPdf7Aijv%2Bx2a2iKYXkWCJMn%2B%2FJWssMKCmlsUGOqUBFQqp3S32w0SqYUoKYisBOjvKq9v%2FfSW%2B87i%2B%2B4lcsOJNk4W4Uo4oYBjqlSPPj1A%2FO9axMQ6lTd%2BUqO%2BR%2BpMdUsQ6W%2FzbeQGu1dVRYFNU4AbqqzYSZkDqWqOky9R4SNuj9T8xDUjo9DY81%2FL9iFsyWbnNxK5aLYKnO9NL4fkKEWnfe1I0JEkKxC9dy6v3nztYp4K7k8My3htKfn3Vex9IJ4TtqVQW&X-Amz-Signature=e51a4969373d4e9c4c2f7c7eb2a873fbfec96825e3802cdaa4c3b63f7de5d5ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
