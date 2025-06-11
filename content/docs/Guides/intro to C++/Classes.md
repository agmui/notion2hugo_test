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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZJMVVBL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjEQS%2FdS%2BiKvujgm%2FjD3uOp0vWMJao0XFYVbEfuo0vQAiEAiOv%2Bae7oW7DKVT64FNAIxAm13%2FjYtft4FoBGyPfkuQoqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPji2fbg2jOFTMU2%2ByrcA9S1%2B5DC6bxcxMFg3QNnARceLBNKwnlIrOxlXwPg%2B%2FXerFVLUd7Ub7wlFsprlbkI2hNozJHRygmshiZi7FG0wGVgb3FGOeGXkDg0LYjCnjQFIp8HzuER2%2FuzkD5hDZa%2FTbrFJk0Yk1UMys7RLoYNvgItA2JzGEsG4mn52ToHu8zgj%2FyXL3wsC11UsYgcDZXPqb6AFJL61odB%2BHxe92171IMtiTqOIcX051oOQVzWD5%2FbpfMbMacfaq0n4IjeltpT5aPtEpSJaEmCX8jumBESvuL5bvfqEeVXPALis6BJ4aniz81RiJBX58n2UHJTJfJHIhacjXvFO9DiQhwKsz9MXZ0kkUui%2BXPRx9%2B2ylD0AyucWcUUSVIlfM1NMpKd2HXxGmhcpIT5nUv%2Fbk8K46g3K3Y3NqFw5p4Y2rSL3Bf8yy0Hsu9jcHQfRIoAJk6tAFH3SyxNEw%2Fb%2BGbEZa4INM%2F4841PWjpt21eCrvxWcX5V%2Bt%2FnUV4%2F%2FF5NFiVbjtBUlQ8IgRsufYhbVNhYHaf8IUVUiZfiF2wdBPrz4XDdOZA2K00be4S3V4AinQyxWHpdtx0w%2FxsP33CACLpYIaD4spJaZ3EyN0eax23KMCAInoZX28nt1OwB9K2CdvcWN9bmMLXJpMIGOqUBumLJO4fq8617ZhgdHxnIIdK6vI%2FqiBndPisyPqW0pBSOV7xxTeL6AXX%2F7sNT14VBs7rHaGHi3C3HrKWn0yL27URtSLVYPOa8abfkxBWrd26O0rqh%2B1ACEBnLVSYO9%2FVsTyni0gr29%2B%2BsRWE00Tjx48OVI27DP%2BcDHrCyF54woM6pvuYhgWvPDM7TD%2FcEZDa6203%2BsiVp4UXH2MFHzesmGVbgMBQc&X-Amz-Signature=d372ad6cc71cc302ad0f7ea3d81ba8dda95031324ac48a65663afe9da7ce6b63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
