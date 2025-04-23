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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKEETZTW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCdmV%2FpdH%2B1Fm2Xeol8OWAsqtliPBHCdTSTC3RnU48QOAIgWpub4JGyTm8NvrOX4G1Kl38fGdxW3k6q4PyE9fqTJzkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6V99WbPp%2F65sjzWyrcA3F5YIEiqXjQx733bLZ6r2yXYJCWiqkWPG4rkoSiNVj%2F1GSzbTs6KH0Hv2S9eH8ApDp9dLLaG7%2FhfA4dB7mX7pRVlrkOEVpg5pg7CFhak0eWvhfz3Wa2f6%2F2EufVBdP%2FbgllNeGGikVqU97VJRsQk1tRrn1F%2BQTzFb7Rdp8JFlRwLWLdlryZgK2QLUWdBLX7f3jNgwd32QaUrgdQgww5AYOBGXr%2FjLlze0m%2BQCKC48hnCQ82hi12gYufkb5lDjonkC8tE%2FGLhJVUIOkbwjfCbsevLzboUenPrAvbb1iNmrWQaKEhMP3OoKF0cBwmKFLxvv51AkC8eKJp3A2rFDm0w6idYs619XXjxbWoiJlWq6OpfH2dQv%2Fsxn1l2%2BakEKp9wfxFyIogY0edA4LNydA%2BkCnSQlpTzMRHvLkhwxzmKS6g72q%2Ba%2FWZiB0Y9nUbxL6ytUy6xoJ%2B1srsGRW%2BCGQSnOjAHsrUbp36YKiVDTwnPAoEe8EkQG4944k%2F3vfoD7PXAu5MmKMk5rI6NKLpzwH4NLaVT17FHA1%2FxLERLM7i9VUQMoHHSw%2B2tRtgmW96C84OsysUgqLKa7WuQagf5fU3WYPPKQisuWO5d%2BlHOD4D0J9HpCCSzoKjkDvX1fm8MITzoMAGOqUB8%2F93O54E9aaeOMzyMbtKPuIK%2Fd%2FnUHO4r33cqUGSvHddVOArruyZUkI78rioUAgPQ5IQb2Gb8xfWRIyV98HOyyIScrjDd6xeb2QdCCKEUDmT%2BRzDayOCr3%2FvMYqVzhg2UMPjN5Sc0%2BRBJ4T1gJGpaMjOeJ8%2FGSK7aazC7FdRC325Azx29uoZp39VSWmZqxavGCW%2FdDFUji7xzysnYtMu7DnofxaF&X-Amz-Signature=93adfceee86d875ca313bcd8cf5363fcca4db7c27c12352690552e5afb8be5a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
