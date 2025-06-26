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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQOZ3PC2%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHtFldclvog8EIFvHWploO7SLF%2B9wO6u1t5Uw6mLTWO3AiEA1QzkxqzTRi9Fl8DxX2ApTR4bePrlhaqwsmnLR%2F8j6rkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDG3Ilfcyz3VJkyGkYSrcA6I3p7nGKGg21BGI1bfU2nDd8k6U93xawcNGJcQMjZdwL%2F%2FlI9rjhZEcNS7SH2hVjcnb2otOJQRwH37O%2BqFeMVNcRsyLIIgkyzJQcYMQz6lEpir5oxmQQK7bqKZHsd%2BwxLUZ6BQb%2BiNiI%2BPjHxPH3yFpww2%2BHr0X6pUXeVxtMd8X9wSCJXwWv3KdOS0LDJiX5SBS93gxLVZF%2BZh%2BV9GV9zWOcNz2w2aUiipdW2IJrfsGwkgRudqPqPQlU%2F74TXyLlTSZ2CkD%2FlgHxHgYhGqT%2FyFBXK0GeMdxe%2BXOmmR710ECzWe5keMXfWypVa4JcslRGXg5uEEBUtOwR69XYMFFSYBamlgTBfCAB%2FKF2CY1Uas89I9fYUTojatDiDeNf5emg6Wetg4F9zs7Xu%2FmDj96CmKnISGMexRuuv0V0c%2BA7XSgzYWEdMV6AOOLWVUHeiEa9U627y0x%2B1%2BfxI8VMNFSTEz6sk0z4YeWm3IkDZhOnpGPsJQ1Yl%2BzuV%2FeUIXIWvQiZEVsIhPSfNFAk5UEM5iOWKXCMb3b0EFbGK%2Bi1xBb8iBAE5tDicql064I97ZG8swcHgVdBZYs8YBPfZMUYcEywCsRnGlYT2%2Bx71fkRgsVRcOJGvFy%2B2FMFX08PeM1MLWx88IGOqUBIVCwyRJfAlS0jvnESN3GX8%2FPXETvSqedHORqWAcioOw7f5LytKx3a%2Bh2%2Bw%2FOQmHaYN4UNT5UkZyPDGysvKIZ9%2BTmP51n5jJl2mlbPXpB0uJJ4SFx39GXrcUtG2Bh1d0QNj%2BSXOwKB7Uz30v86PL5ziq12dAqy1LewJMU%2Bc5XtYJkt1amPcaD01VQW%2BuNPQBWCendLvAeht5Eaoj8KlFSvGSuwDWb&X-Amz-Signature=f7712d795fe06c8d4a114ab6e4ffd840bd41ce54efe782178352826c68485a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
