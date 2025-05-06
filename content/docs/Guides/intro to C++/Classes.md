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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JURFPWJ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6rWRI4YhzgJRGwqecdhXUx5ERSSuiwy1AuMUg7PipFAiEAnBwlc5aSdCnGvzMyjJwtFWGjMPftnDMpaMq8zd9rjrEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGMe1LtU1LOp7TMcpSrcA8dVAn8L8iEysSk8eCvNMRejwCCqCxStDBbtPnL1GEeIxoWDx%2FDW%2Ftq%2BADcFrHbzu7iUn4YL%2FtdqjMJkjzQDL1wXfPWvBoBJvDq1v1EIUwqflk17g6a0vlYBx5mmz%2F5xq2oXyT8km%2BU%2FJyAx0XjYoicIw3HEQmuxY%2F%2FZKcxalF8JD%2BDL%2BKUWR2undPrX5Uk7b75oyDumOsGogc3RLJLlFvMcKdpRkkOxNoFVn8bUZQj5Uafh8xEPuItTWi3A3aW3QC0gWRQeyiqzo3A%2FboAxu8TQsZq%2BSyvWO5IxNZHSsp%2FihKitIreqhf5CiotcclSnQYeCt2s334j8%2FtLD4m0HjOu57IcO38KhFOAHPEM62roTyJHfYn5XLptv4IK3F6RIhFLaZ4ux0U3HWX1li6X8cwj7aM8urZuBsvUKpOvn4ZObY7wwAY01tqTq4DGssjY1bhXg8uZlCB9b%2FRfVTzrriZZfxgg41m0vm2QnCaAqMJOL2SSbJxhsPy%2FDQEISX2tXxZT7ZW2zNtoADPa0INN56dbqP9S3vMXKnkk2YgbYUzr1bzJXSsSEqfHX%2BcJMIs%2Biu0udltDylG0QPenCZLLwxT2pvwOCXVlete1OtHuaaH6L9dbom866MDU3wTneMOKz6cAGOqUBaCSBxJel7BMaLLXQhAWU%2BaEP%2BOIUv%2BQXzCSQe5uY%2BEN4nXOpVsNQJTOcZcQ2QCGAhZ4OgF9z29uBXjNF%2F0ReP6pScu2MZGmxnvvlWrL%2BeaHHdVOSc9ruWQgXJ9UsoQXUNLeP5si%2FKcaZ1ke%2FnzzX%2BDZw8TE0DK4HC%2F0FBcWstZhmbEBxAdzhndT3P%2BPxu6dBfM5g1xnwKPC7QUcxtbFbfRasae4G&X-Amz-Signature=e7b02ee4e2f3a75b3a6a753a46b53d5e4807662c86a8455c582044db651ae1f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
