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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ7SXKYA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIEzL2VHmEhpvftjwNQ8k6WYUJKvY%2FS0g7VyJM6aEaIxrAiEAwqBAvFnDBPLtXdfMs7Aj6yJT6JtWVCJnBzwdiKHRRzAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDEx65H8QEZSePhjv9yrcA9F3REDL2udHua5b7MsJ6nGu0qGnBoBzNvg%2FdAcbY%2F5yX95EVDOcorCUsi3jX1RJoAw9oK8dCnDIAyg1IE8TxyLoxpeSxTeI4g07ARKes1wmz25qiXx1jF6oQ65M6ODd9YOKdnBYAMFz62hTtwi9s9Eb7jQd%2BEok3VYA1JKcCijS%2FUPa5jgCJ1si9QPO7XCxKys7SALNBt0ooULjhvd%2Bbi1Lc5fNH9KFT6i7HLoPZ8%2BegFsOSmRtLYWwqxtxTrqfkVXHBb4iIT%2BSeuDOvnq91t6h5fAnZtL1%2BKqfASdwqrlgcRI1cj0AePO78xuKvKzgFylQdFHfeT8GpqrtiXkmttu%2FWdfbvQ9lLMEdYYRWNjx3W5Xi320NxmhSEHXK2fhWOdHs0InwSfHWhQcrUsAUYsd5js8D4ploLBF5AirS4sw1gBogQv4RY7tpWDRHO4YRuNA9DlZ700sx%2Bm4NtwYOKDdiDKtmo8tgzJKwCoWYThhZdsn2xMV6a378c0e7%2BP98nako4empBLWEXKoDox%2F8LguOb2D3qGhVGS6MXxUsWtEvwYIwzPpfTOvyeuZqGiBIQcmFjXaDqv28szHK7US1m77FdBxl8kbKTTSdgk1qcOjzWmloPX4rc0LPVR%2FcMMWHksEGOqUBSi3PanlFcxi6KHP5o6Hg2gELAASkuCX3dd%2BN5Mn%2Bn07Ir%2FKpjS146SyPGP76eRosq9r9G3JLwRD5Yv7sGYJOPcRrziNxiHNX8%2Fj82XxT7fgebRqG%2FAn2A5pfuJGNpHMqAGW7yRu7mVJSNi%2FegI6mW3b3KkY%2FlDejR0L41jzr2b8HZMA5zara%2FFXCu1chQ655PRFCQt1yYfDYT25mCvSPJKThR9WU&X-Amz-Signature=547f168b73350c98f865708db364ef4936bdf47303511c6a81a62b729f16708c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
