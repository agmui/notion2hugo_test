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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDZPDQUY%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe43dNmKBP1tzHOo9W%2B27YF9mSd%2BP%2B96uqnyRu0zMFSwIgXOrg7clysgvHvYzFN84cefBXCYT%2BqqPvDh8NM7b3k5sqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtjOfOG039j%2FpDp1CrcA6A05xxJYx6S4Ns4IY4wg0N%2BrsF7me80A%2FACKZGxpZcNkKfMlRpxh1FMzHw%2FamMeAvueIpEibh96aTGrFVreHe%2FKnQ7%2BhHWTur%2FtEV%2Fz8woibP0RSuBrG9rPEAmPG113JYfAWqKSTUFLDRecKUUApCsT5HwQBaQomgiEh%2B7EPf5hXYpSB33Xjfni6FcRvkmP77xOE2TAvS7yoWVJL1UJuTfXMdZhvtQMnArlKUkAiYDPkqWToQRLlmQKgQopQYvLS61FIJO%2FqJoe%2FjN%2FtsMmNk5JErSLUWawAdURw1EJxE12Sj3sK9ywvp4CSXcECJZH6WKnPZWOfYhJglMtx436qdDrDIJj4YPIg6qsqgReLaqfH5lKHlc520LTFnZvCgRZ4RceLvmQoEGxmrqOJHqWuYwl8HoK2mnfr3Ew6TXsV5uVUXfnaLmGQsL%2FqCcagUBQcr%2FRP%2FpKqNJavORRmthQtIM9ayJnYIRb1TS9VmkHbWPNgBJuWSKPbkHRd5VNmw9WHR%2BTGVTu9g%2Fy2YV8UQoBd7tDF8aYZxe4VHCSPLvB1OOdwxasn0H8%2FhD46aid01HSgLVM5S62LSXLx%2B%2Fwva8CPAw4fUzHrzZjpuDfGYfIuU6gI6TGoNRezgTk9Y9IMLrD4skGOqUBDe0PV7jfK%2BSGNn7be7TInGI1OYDJr2Ng3lRQln25eAH%2FgMQUI9APyjg1qwkTvfTz%2FX4ima91t6DezTGG%2BeVjKAIl%2BsroGjn7%2FmoNU%2BZLUi4mYbIqvNv8FzmnuO3g3bdSKywogdMkNbiS4mlxoYlWMoX5%2FVPIeXmxoxmW6OJINXtdVh8GcnCKeptavfRAB2c%2FD6yNSLKW8H4aGlHVdNDVkxEMZWAY&X-Amz-Signature=72d18c4f71ca76d5a80ac59f4b8ee82bf8fe42d0a7175703d9e96fd754472988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
