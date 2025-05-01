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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU4TZ2K%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCS0w1NkWed5FvHAgE0TkpJlRxOeIzKPFFu0ynLCCT0mQIgRISsqR5iqLtoUsT%2BKBqOzYc4X9wpSdoTXr4ZBxzoxCgqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKUdwMw1%2Foqiff%2BNSrcAw1Fn%2BecMCxKyEt4pjNKeH9neikMpQGK6c%2Foal9yZWd0pX3rSilvRzBp6nQ3KewA7CRoU%2B%2Bto4jdHeuRopOFSQIiAxx0y5xhRTCSapTv7BJjkKaxPbFE2E4MgocZ5j2cgoof5jaTQfinkbyvRmU5tAsvE6JbwiGB0McVotLo6g6%2BK5Tjp7Yg1KtqMU9zD%2FVct%2BfDbeSVw5NQH3Wbr1SwCnwKpsxPwQ%2FPwu6cgzowvrYxV9jdaNWd0edWiTCAeEoZxLw%2FaVrsKPVz0O63rQZ9Cc2uqqGUhfY8Y4cDJLL8do%2BUV2ZiDDy5pNSC6eAQ7qDUefYw1ru5FNL5JLUzR9YJLzZ1N0jH%2FOP%2F%2F7wFpx5hrzoEWGOvc%2FYKrkKWMQmcl0Q0GohnZbGSTS82M%2F%2Ffar1gwT%2FnaWyr8Jr3JcrGy3JivsDgkFMAKccpn8zEl%2BnQhU3tq%2BThAASn06ixuzxDlGtouEt%2Bd5Qem%2BDqK1BTL3zgPDWXhO7wEQOJdALQ7H5IBdZ4UhzYuvBrm%2FC7iH%2FhLnhbvIh%2BWCvQA6HVoHPH6wfyR7T5mjNbbldws7EdxT%2BYCyxOPOwl11jGvcU%2FvCw57h1RJa1TUtfFUavwChxRSN5QmZzMpEPdGrYbUux%2FLbX2MOWFzsAGOqUB4FcHLZxFa4AwfBv37MlzJxThEosNDp7XvWpY%2Ft1Tx%2BscQZ%2FotgT5EbfnJ1iuYna6z%2FNVV4IHDlMZRRIM6oA%2Bg0Wdb3Xw8HR0F27H4YKhiW5t6RHV1%2BY0FytDL9PZFIDA%2FujWJq1k9RGmzqPikveTd%2BmWC%2FMc3H9ZN0WZ6Qgdlzt9mLFqpZwwyxpU99mDLbefVhxcZTGM1tJzXRdK8BtM%2ByT53MJB&X-Amz-Signature=81d60b40c36690571f888e48d32c2b3529dd6125241473a9ac6b4077a29afb46&X-Amz-SignedHeaders=host&x-id=GetObject)

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
