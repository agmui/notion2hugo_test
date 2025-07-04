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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3YK5YBB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDxp6srqdoKkrVjfwCiPqB%2FFwa9cMJoXNE3Q9Qu879oNwIgJDeXv%2Flc%2BaiPY7N53QL1xetQMAOK3zZ15hc7mlHjfQcq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMO2365TWKxeQCqsSircAwdEgD2l6xNEkzqvQxTa4zgWXDXS2ggFjPqw4SryJD%2F2D%2BCDUueutYlTHlr6wMfDnq%2B5FP14RnUXQgl2uX6YpSOZXfEBFXYXXxEM6Qgep8IlNmlzdfQKAC%2FdPu%2Fiv1K3BukFqwp3gEIQXWbF4Go8ex%2Fw5tghLSX%2FwwWRiUgs%2FpY1lP9%2BZOELcvFmxzdeDUZ%2FV%2F%2F3zPZHy2WvHFxRCqEI7ZMzzpbo73nzfD4tDpyd3uvTp1y8jWmD03%2BqPZ1lyPWagMXKEnWFqtVc0yK79OnCA%2FSiPdzjumKPZmy47rQ2Y%2BBmZeIX3wWdmDQ63Hb9oj1%2BH6P77oYS4pH3%2BW7WU2M5TeQoUGJCAoiuHknnRy4HMY7XNm30BtlKcGECJCpn7KP8ra7cN1SjdPbn6KX55QFeYuYFkdyWgHY9VqySLf%2Fy4WTPUZaZPT93ByeHE9bNNPJBHS%2F7MQQwV5gl5wOXZdFJHmiTcJzUdttkijV9ncw1cXjH%2B3aNX9xhOA6Fj4JhkWxWlmlIith0YaOnWJcbhWR13ze6gOJY%2FfqjHgGqau4UO3JIYIElJtkkUlmziJ4xuFyM7ZsqTHTMg0%2BxO6N%2Bsmgncg9LLI7nTZ%2Fc70SyBqFw46T4VfmBePFsHIxjafMQMIK2ncMGOqUBawPWzLTEe2okcRQnkhPjZabBEBmqJ6H4UkjSdQrYDbEOmKYpRsibqi4hY9NHU1oAscPhG4JR0XA%2Fp820G3%2BAxJsuRLo6dvi67yXRmTmCSyPyqOXv94XlOZDbmMOEye6nNR4fRqKCuWsfaqs9NqrG9eGhQbxVQWZ%2Fh7URDjgcctlRL1c4woN4me8D4llIWr%2FyGehRmrhM8Af1Ok7ympLi7Nrrbl4o&X-Amz-Signature=060fa18219d1f16f1a55d78bbe8503097c78b05eb167852e62388045aeed93f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
