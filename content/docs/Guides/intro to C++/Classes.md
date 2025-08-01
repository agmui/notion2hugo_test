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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQVAP6D4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu1xKVe6x%2B3eHy1ttfEbRVHyri7QNrp%2F1j6VawQQ3wxgIhAKKZA%2B5cGVCQJnovDBYpuIDo%2Bnv5R8%2BQ0T%2BZL5DrFLBHKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdSuKgYoS77NhL8oYq3APDu3%2Fjy2orbgovUZv3dHQi2eZVNdFoG%2BwspOKk8n58iWh2UzTKvOYCQRq2Egjy2XaJ0XJVi4wf7JjYatdbvFwLWxkt90TttlcUK%2FfeP74Mqbd4277VD%2BJdLWBzlgfKXGINgZR9AIQ7TCMsYMjMzwR%2FCnzcIBJRRcMoIf9VadK6Ke5nNP1gwcbShsYHIJzwZPPyYssdOwKcB7sNsNnp7QmYnwFVXcfQrP13U3QWp0V1LRbMGcAr%2FbZrmVpqfuPClQN65amNgZD%2BcYaayKzULpbAuTmtaIoksO5E%2BnWJdXxbYqBd9Gi8xAGu6OSNmb2RQmAdIRnfHv1glmFijx45ZXMNqgntXjlSdp7zabQOD37utwD%2FHikDASMOnto8N8ETl5pqK5msY4%2F6zE4%2F%2FJl85areLEsYs2mQ3WmYknJ6lr7xVrwrk3%2FCLEUUlYp5jrdiQXV3d4noGoK33pqU9izviHBmk%2BQOxgtW4grFoKZnguY0sa6ManwlG8pq%2B0Datd7Hpya%2BJc1eST5jeB8BGzsqCdbQnIvk3mvfJZ0%2Fzs9LlkIh67n68BzygT8iRlvcIYMD6QIGEw%2FIdZNnUazWJ%2Fkh%2FbDa2YGmGak0cZ9cOv8tCoSwCW%2B9mk8a%2F3t0kmNeFjDlkLLEBjqkAQRiYTUBCjagB6ps1Hw%2FbHWF07Jj2TUa7lhEgZra1gwO%2BexiY5zyRTkryBPXEowrESwPqFpJrfYhznqwNUdeC2L0xkg%2B6%2FJ3DKe1XGHFM%2FBx66TEvff1Wy0s8i7RajQ39amz%2BXabF%2BQg3s5By0VDyNtZE%2B8BYV2xKZbKQN51vv1sZBZkdQS21Z%2FlRVC2RsyozIecJgoZbsaxSkyjJFhZdf6ahVCD&X-Amz-Signature=d9e5cf15c6bfc5f019035be8033a12c5fa45a839a2af57f4202a23d66c825240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
