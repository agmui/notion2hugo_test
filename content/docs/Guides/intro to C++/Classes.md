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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRZBJ27%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCID4aUanNQiSdBbz113xc4XzTdwdtA93IOTjQuC97N0MdAiAJ8s51fw4VJdTEktekqYLRCjdUYrVXwDnW9pTHL6GogyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNVZhe29vlL00w4LeKtwDTGpl2SkLTFIzfPuTbye9OmhyWI9bhspUxZvGF0NIrVqQUrRDYYe%2F%2FyiEg0dZcWS9cLyzZpWbKCnJ9c1FblI5mvy5CsEmBklPXdpiD00hKwHoZB9dmP69ltDQnIhffAE5RePXq5vmB%2FQrf1B6x78rR5coHLi4bongTKOidSOLy4hghcN9qC8DOQ4LvjUAwgFMYhpD3%2Bz6GmNFHOgI6KXnxw9hHRIVfufCZvR8WmqwoXwjYbdtz8QWRPnef0AJINSrgu76gmIgUJ0Txqe7HIVaY%2BmOhwcxj8Pa5rM4wzOPhuOO4jpZC0PIm0FxJUJkJ9Q6OfaTUAnTSQXZhi8yTEuIr9AebAy664ROqJ1VHHJRvEnReJd1ZYjuDY58gMisF6E4I0WzR6Dywcx4%2FRW2BOGmW8TYwc7bZJHBnihpmFSqsXe21DbNaWzXvaTjXPvllfMtlMd2j1AhJkyJ9sgNN1DtvVcXSU9s5gB4uB76bGNdxHHkB7JGKOvwgXK4te7f9PbMnjzfLgnwwOkjVXg1WEyE5Llz%2FQN9eR97kaJvhP7CqnK%2Bld6ezXU8jbECYJaSjemxK0xKR5QItZ89VpbxNR54CGAizRav%2BtmK3r8%2F1pSFBDzl2yST%2FcOicF3rKZ0w8pqmvwY6pgER74%2FvWGFGy%2FqFM5OKrbRvGUtbjKW5ojc7rhF0pj%2FJAXvhO%2B9XSUAtlMpkWJD9uzv2ZTqV9p6dOtf1qtbC4EbjaxGYkzFjaS3gPwQTevwfXGIlUtl1YhZLNFvEXIycSF7%2ByAvFQ5kSh2%2F%2ByJ0nGto82fiqURCbU3rG%2BBf%2B027YAIc1FGkweIJmKUD3vbDjRPmnV0SjVJ6Qe0vj%2Bw%2B4onIXFQYgScNO&X-Amz-Signature=7c3d8fe0923c173b0c064d67f46a5a95e867bbf675f773b25b97635790813428&X-Amz-SignedHeaders=host&x-id=GetObject)

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
