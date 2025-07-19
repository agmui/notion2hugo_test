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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRUISJI7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQCNJGPvPu5XZVlqU4hFRMupkTW%2FP8uavi0GMKAYFjBQIhAIEudo5q1O%2FOvRGZ8aQsRagoln6%2BhoNRQKZcRvoqh%2BZ6KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBN0OwEjDUMJuiLPsq3ANSSYkfW60JfQhCaBcUNk%2Fsj5775NJ%2FiRGXxVfFPRHM9c2F872PCmCAjtqq%2BQKHgAjBMdoiNPrAdEak1u1Pr%2FNXXTvjyR9wX7kRkRZAYq0D9E0GhBx2o5Kje29UDjYNJpVHM%2F1IQxZ5hcPXgEPl72Iu%2BSRZr5dmCDYi64EUcOUyiPHvgEUmwxbWF06lmyPVluwlzTc9CusMEPXyeu1nQPZa3gv3h3oOOREj90mI3Le5HX9CP5uRYPRID1uRxMnXwe4RaIiXH8KDR%2BIrkJvBYiVtbvV9EzE66%2BEGSKEcunGM%2BlyFkz7OyoJ14XJW6XdypUb%2FqcuCoBKGxrpOG996sYh2vGuH5%2FZyPebFTY8IpmbAVzrpATpZwGpd%2B0ewz2R61KvT9MH5rWXQQ%2FCDEymvRjOTMkurixxKZ7ERJuVxD%2Fje40Ja5R00B9kJKGPtPEYG%2B0wxBlnLONfzDjYjwAuZtZbYeKRC4TeY691NtDwievyBgQSNI8ME7gbfsUY67uDMfG6GWUI1GTjvvHvGtn4wfnFpJO8sTeCSf%2BzC%2FWgBQdPuRdu1xIINTkj8LkJR5Xv6OTqLeok9ZhVekkruaaNfVItv3REfr7th4hNUNNSvWUDbFSJdiQqRAi8gb%2FjXIzDHr%2BvDBjqkASQH9bwG8eyCVx3dtnyh%2FEt7OthGD1HO4RCQTxy%2BQiKrSrJI9lBoxxSGSNbzxn7PoYxfdEDSHxDC8vIlitvxpceQWuNwGLbVYUgmMrYIWQGPH7xkjNx4Uh6%2B1MEhQ8K7rjhc7qoIySPwt2kSLYFELznzxXvDAZh5XboLEK8o8IIsxJLkCqIo1206fuZCiMmVjIgQ%2B%2F7dVhVHsJyx0MJTLHxO8EYs&X-Amz-Signature=10873bc31fe3c3bd8140d037c883b8f83d1352e106adbdba133df1a486fc0979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
