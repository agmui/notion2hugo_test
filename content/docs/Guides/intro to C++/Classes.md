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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBFP7SFT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr4mT%2FlUtX7cgZPeMCeDeV2UnAZfWt3L8ZuxGbr26ihAIgC7VxBg8S3ES9%2FqkG3Xo7evfZ%2Bky%2FLAX6dMpNSlQxmcEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKq6MBDSmQ%2FizW2NICrcA%2FYELiksEGs7v3iRV%2BdMPNcdJdMH8UDRq%2FfnUacgj4lgk3i4RCu274GYT%2BwNGm3dvK6bTMxaUsheVfMWf%2BWu04EfSYTsfsR3HYntCGiugtgTP6a9ubQY2DrJyTaSb%2FgPrDwSE7124XU8K8mA2ZY%2BramDldtkPvoQxTKoJlVvwJAgv33AIjQVDKiTOt2wFMGKafuTtRGRG06lNwR2bhJg24eM8mXM4VUE5YC%2BXbze09RrqnYTlYRmHjBqpm0hmznZVO%2BTWL1jtItr66MmPyBSWDjg9hmTkY6JwOmjyAwMMeD0jF%2F5BHfMeITXaaH0bjZ8l46q%2BT22MUpLHm4KxRIBrhnVd6OR0Nm7rBnLui9dYxekUzqTZUg0Uwd%2FOc5rjx4n39w7eZt8aGhPdO1lTJsTZA7If8swRaBzfyKAvUzUNw%2BDbx0s4gdmcWZk3EKJNjqTWBP8ie6G3PpaVZYWcKlmJzZ4HfK3kF80mSIq55m6EGOrrwE1bLauVQuAFUKoq3OuLHac9Y7dI3Dl5U4FKrPjWENcy2b446H%2B7aBODbvN8yHwIoOx4wuLn7QQbZP3yXq2%2FlR2pY5ABNzpnvmNUpIFQnQbecXEvLczKK0MRfZxR5gRml15KRI%2Fl57Xrlk0MJCBhMMGOqUB0R%2FE%2FA8PjmfEbuDctjdRlHyyCpSIfG0OGEME5fi%2BE61uzBkpU18FLN5wLWR4waV9XTuXN4k0tts8l5ahV6JhHY%2FdB7%2FrecjyXuw1WBeoa3%2Bjg1cNZ%2BmjAPcqLDjiJ0zqZ3ePgXDO1vIzPQ54wGAjkNKrQbhW2XztATH9Oc6ZLVl%2FnoNEzlTW79pQhwhzgkXqkruDGt8AqlbscrCZUDJ1%2BQChu9Tc&X-Amz-Signature=47daa849178e2d88e7ced7e3fc889095274f27ebacff146283c190a645e17e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
