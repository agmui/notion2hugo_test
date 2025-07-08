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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZG4ARL7%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIF4hlnI76%2FOHnINyLu9lmG7tFZBIf2cGa57UgrFyM02%2BAiEAiHlRjzt%2FxUB4TnTlG5HLupaDaEKIQbX%2BEIYXwL1nVPMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOXoFpfY%2FYnnY4XKSrcAydbaraj5%2ByML99r4NOZAhD7pg6%2F8Xs9ox1qOi%2B8ZLih3ms%2FXoDlaOYKsW3AyOdiRG3OlAooYO19qq1wFddGnguDaeF4iwCzkHIH5p1ncWwuQvD6IeJUpTxAiDSmUsqolxsAiTuL%2BNlGfU9dcPNMpc%2FVm72LhMXFd%2FNpkr8ad%2F8nUrqyjftgKCLUgHnA%2FV8jZ9HRwm7Ok4UBDf5Uoy0jfM0BInIXMbCt2r%2F%2BcCJkJdsRu2HyBpG8CQMLN6B68Z9tREbV8cFr5XJchPVcXjYW4RDjtZqrLbzvRd3wr2oZ5M6eMsOrgnCxiTOutgN%2BPAjYcUCHBDn5WaDehu1zVsQNMMVdRhdJJekre3Fw9oBNYhvPLiLUGlH%2BwS7VLkx7jurzd1ejTa2EzoPxVPbN1P8Qf5KlN%2B%2FZJcLDALkRhsfVnoDdzT38J4cgCOAmjKO%2BUcMGd3MC7bvZDw6FZ2X8wd2NM9z3SkqjNrznKCKebhw7BrNEAmFvB9s2RW04GPutN5ur6yhIuwt90bergyvhMOVHb1rOLGICSYThoNUkdTQwmwxahOKMPtUqziuoRJ7xsvhtqRmNEViTstNhcAJ9N%2B7FSIdsEJ3UrROXnQQTV%2B5wDkFDLsT4ktvHPT2GaLwkMIqFssMGOqUBtRYcSwl%2BYr%2BjKAk9pPzHLFpXeIPjfsVIBYn98NaOqa9tSCAEpgGvSWTbY3Ccly4CjrWZtsSsFDNtCZFr%2BgjMFsg1ZKSArvDTTwMtcH%2BvG%2F1euRLgXwq39Zy2Z8znFJ8kDWMzJneSeQjZ%2BjMlMaA8JSEinfclGsa5gxiQiD0%2B8GJLtba8OINh93Je3814BucYrDx9n0i4CAJR4XpjlzwyMHC8iCQl&X-Amz-Signature=233e390abf67e489a3eeb40b53bdfee7d9c185c3d5a1a090594e0059dbb264e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
