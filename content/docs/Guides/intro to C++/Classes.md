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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIT55KAW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCrcOXKNs2p%2BXpf8WL6Sr%2BM5qXQgjph4xHd9i17hgfE6wIgS3HZLTLePt7lhHg3F5S0lGUYjWOFTiotIl7jG%2F4dt1wqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGckS3shOMvFtL8bgyrcA48I%2BjhF2EHkNqLouN%2FjY7%2FKTbNA48TNm8Odu5wf8MkyY%2FlIjRX3U3y9fb7kizqTWu0MErHZKmeCrlYEZU4Eq1QqhD7ThE%2Fqio%2Bss28X%2BAoCgc4VR7HxlFV5aTNSj0U2%2BMYC4%2BrirontaPuO79dgQwyHpBYJ2uicCL2v7vOf3QgdX5wV5y3Io8MNamzIdJZYIeFyn1IUX6ZTKqhF4JCBcSZ%2FScVwUYdI6OY3MSNrh5%2FxF5jtxSKkE1YLxK32zX8eM%2FhJdaHvSurRbRZm2fnIN9fZwgfl%2BNp9Y1S2av%2FymOz46fxmSAOexl9DJ%2BK4nnOseERuAygBrW45%2FGoAOtzD9KICHOelJ8HN6BLnjVp1IH2fySFHOny8rnDUp1Ot8tCJ%2FMwYt6BXSGGIGqK41Pz3cmPpqFv6x53nkpX4NlqcnPEq7FoqJvbJihkaK0RblXx1rKsgSbbYxr7xDzXCMqDSKiEURxkX9%2FnpyTI0i7pEOWDD3qkZXtE%2FQ2Y%2FOE7G7XQxekP04IpWYYrpBzJEq51KcwpdfQmle25quLJK%2BOglL%2BswKVbqgo1alNTcK8udBy4rzCvSPy63jtggmGTGee2olU8XMGGKmU%2FsQ6WynpsMzmRkBO8FYJKAl5KLQEZwMJGezcAGOqUBUR0rHOnfjm3lkMiMwRiUQ4EqNYAIjHwnclcYZi%2Bz1l3jt96%2FhG%2BPlkBi8Q9IjPRF%2BH7TRvePlrTrhtLoR3OzaU%2FMnQXjXA4I9l5WbHBnKKjI9%2B2GWuJksW4StXTrrkJU0sM8fBsxmFieYLdcIfumlt8RKsixqGrVuOA6c59IT0f2XRsD3GmYWeEXHt3a%2FwPFrmKijuc083z3IeAEeq4BH8Ze0OLR&X-Amz-Signature=83f1ec493df99d1c57e8ed26efcfc804d3cbd4ef9226b0fb4907b0e682fc1ce6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
