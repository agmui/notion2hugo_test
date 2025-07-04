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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3O42CAP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDsLNXI9kKeARTS3JZsgIF%2FI%2F1G%2BlsXU8HNt8N7mkh9TwIhAMMCr8hYy6YZyyttrh%2BVImDZ9SUUFSLcW7zFA4%2BOCzltKv8DCCsQABoMNjM3NDIzMTgzODA1Igx1KHNZqHQ9cwJwoLwq3AMw%2FOyklZ5c4777j593Ml0bcg80RMxILAMWwCPT%2Fe1g4J9CWdUDSQhDAC0x%2FzXlYf1gtSLcm4a2%2FhhL9tjwN0zjs2tbnAIkUR7x2bu6xUQByF7aXwkFNjy9toeeiAifSbVTreDVR17p1jHLGLp4wAVPY0NEU9Y4vQkaCVCi6uMciwlAZX0JxgHpwR6qc17WVU6TjgqrzjFw9BOULv19I4s6yhoE8RPOg1oi2XF3eEh4W6L8lNnTemUITdABicUAbxGM4jFkpKKcP85YWVH7YUmtKk0yUHeBAdL7Iz2FqY2UenomzgHQvwOOEUJiuwDSmrpGoghGmkAJPQldw1xhy7v8ZYGYRRn7GDR9MFxbxsUzWbnl6upHJJi%2Fm45KCU2wNiFPlZnDispCi%2FTBa1th9WXFc0YFhU0bBY5zkLsZnBojjt7y66GNJwJc0F2attYeQEETfGURsDhdHNvsEMVJrAnlsEmGkP126nXRrR%2BFIsOnuFQufAZjve0W%2BbJEkN8RxUQrHrXQ%2BoU3wPLnb2I8Sy6IgJXxQbDigMv%2BfJicdzzACKCTw3Zq8kJIoNPAOtX41mI5mtGjL19MWSKIu5irdWHiclArqotr1qwucXslAyR2uix8A5MlloAjJ6zlUjDOvJ7DBjqkASjwKDBKpcptVJ3aWqJSViwYwvAyZYZ%2B0unP2%2F%2BEVZTBIAQgzRd1T0oOW5iN02Yv6kor9nW6bPbiWLSTCTGE8e5fTS4lt%2BwMLUwPwCUoLvcv3SBwtuF5HYdvkVp4oiM08ZbfFDCB%2BZ%2B0JuQw6DeizvYcBLl9L2ISzAzDn3mSw7bWeuRxKjqn2foL8yf%2BcDLi28m%2B8v0tFmXkOwqqMBx08jfgm9hr&X-Amz-Signature=02c9c15d565de8da466809b5619a15146435c05ef2dd71eb592d9930450a99ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
