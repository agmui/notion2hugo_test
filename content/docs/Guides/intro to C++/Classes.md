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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RXZEUIR%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCP%2B9nt6Dvn8C4HH4Q9HlMNTf5kQbkZq%2B14xECUXcow4wIgLpuN%2BVTm0sGfRZL2oZrk58h8YxjG0QIB0BHgw%2BvOJNgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FFlBa6zp4y00DSlyrcAw5YLxW3iqaInCT8rrxtUhiuo0BQPdZ8IfSRI9L6pRSA%2F7%2FThjEasfvqKdjIkpDlSQ5gzBTro6fJFQkQCQu1gjBm8HdXjcqhc0%2FFNZ5SWAmTDTL0kovSqPlKXdJY8%2FHU1ymjn8utKOee8c6a0mns1pKJtN%2B2I5HFMQJArc0iQ1%2BTH0%2BZEUCbQPnQm%2BTokjRlcL1R7AvrXRdwQLouRXDG44dQuFmIaWhDSr0W9E72%2Bah91Ze4RlzXUXeza%2BP5AvsuFdA3TwMoJIyJMpNKgbcuy5IuiWFakZioZ%2FaYngUAYQbZwxD5UwfFv%2B3rsty0PrTSLyBQ6nLIkCbQqwl4yI8OD%2FBcRAnzKHirG3HUGVK3sBt4qdG2sdHYmCrduyUSK8FFtm6kqVkn5X0d7fHJlIm6RGYwcLxOzlJtM6tnhNdGasQKunvQAp3rPv7THuy73wj3lgfK%2F%2Fx79asemmS0%2BmdHUK%2F%2FwKvQW1tZVwsspMv5BYyuMUIZiEvbs21PrFyrxfsO79C3eROsNgEhXhJx13KLHeS8vWSH9o9UMBkcq4ZBezqJ2R8GsqwgoMQKDBhH8rnHwoTvsVUJnXaZjy7MHG47g89W2YnPYCW%2BCfK9geJ6pgFmRvk4UIcsguvus1S6ML%2FalcAGOqUBLmQ1t5cDvhZixXCsgwDy7gHHP7fbOFF5mZ0W0gRFfyUbx%2BGp6bdF3iNFG1okkKqsyRKbYtjpFzhgpukhj0IEWRGh78nInnDbcxo5mgSlfXScReQHMxsRdGSJZ5OUw544my1T9dY0r0j%2BvCu%2Fxjx5yhXQbuTIERNz9g7lwEfWeS%2BcMfFbzpc7C1xGG%2FnvwxDdfLvzrMxkO%2BlW%2FhrPkwib%2B9kFt0Ya&X-Amz-Signature=71217dc9376775f480ae0ab5ccb7c4d7bb82b37a7ce40177c88c9d6558991b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
