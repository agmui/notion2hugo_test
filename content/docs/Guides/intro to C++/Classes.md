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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTWAACHK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDbyT4QHX1q2lyhUOQPkYv%2BjOGZlRHlG7k56LoS2vludwIhAMnLnRBqqfGyy4l%2BYFq4MP965asW67MRmZ8UPYyOhPeBKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAVzrCKlyulP4EeX8q3AOaxfgFQBpao2%2Fs6qX0JaWr7SgTXapxqutwm1Sx%2Faob6NrVbap%2Bw69sXdMEm%2BeqTOf0e4TcUN9o7Yl37Ui21u7j1%2ByfAK7Nr%2B66PixVWBkasvO3diQW%2BTj5oAwEmM6BbX5DnhlTch2AJejb7LnwTZJX%2FdX2F3OGV5kDfcFLa66vHbMfdjDDgRM54UrCDPPJ7j1dv3l6%2Fcx2nE77IKqo4KDlRELUfsSG72dc5Qpc20oOwYHrN3p8qgsfa0eIlS%2BOi%2BDLjgn0RHaYeyi2mEUunRWWTEE4XZhrQX1pa5HiLcIWyujTq6ny6rgqAURR1ScQSUCSqTl%2FC0KeFDiGvfykcjllFdZ3uzHF0yjFk053w%2FTu16G3jwJFnMXd%2Fqky6Lni21rDbi8OyqR0K%2BRHnUw8vQxCw9lHkxvBr6wRwtzarIqFEKBt0u0333XUr%2BiqVC1LC8F7EuJEYDPdhcxCkVr8EVpBEemOoMhXExBR2geZciarmuXZ%2Fn4OXeiyxRHVLsDEMcXUvR7KQYs%2FIe0o0kVPpg6q9261xoUqGwEAo9xU0q99ICj0lx2%2FJ9Tsjh35EybLtfH5Aexp4fEBDyb2sF62Ov%2BVDjR0ygtqyMwtuBr8gIXiwOChzjoBp6UeBOC1tDCOhIbBBjqkAVk9hBm5Bi%2FRf8TuiON0fafhus5Z7oyWCD2kCco2q%2BPAxP6tVl1MjAZ%2Fdu9W2YdDdc%2FG%2FYvaOxy%2F1TZkMj5zW3mXHZ%2BN1%2Fz%2BiYgSUlH4IhhGFZBdXgO2PehvImogUeyBdfQVXj%2Fsn%2F0JUyYMYmCLIoHAJ6qt%2BkD1eTUW416kIJPoRmWWtzhgtowd2GFcuXehHModhKurfcqaxsX4cVzfMe%2FaLyoU&X-Amz-Signature=0ad7cb8ebc300ccbab447cd62280b96c277964ea26dedad00f32146091260aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
