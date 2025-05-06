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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VJNNARN%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVIVue%2BNtQ6CxzZqKpwmjmDVIKtsteTJR6m9gB4FJa4wIhAII8AyYC4S11%2BqwlJFZii%2BxEPQkn1ZQqNXJNhUk9bMBkKv8DCEkQABoMNjM3NDIzMTgzODA1Igyh6EU%2Fa3Glx%2B0ixuwq3AOYmp1s%2Blbj8HL3NUNGSt%2B5CyNxjX2nEQugwpu9qDssgt8pEFuI3dvX36tLweTxBuFh4QXUfFfbXDh5Fr%2Ft1htVxL5OWfnGHgwuGSt802pBcLTcP2Ab%2BQn6eKhd37ynekTit3qb3nmicv21tBlckL2bl3IRCv6I4CFzlhvYvHoZ%2F8ZRLuvkDxicq8ik45gWHN2QU51LS2Rz5V3%2B36kCtAkxc5ognU5B2Lx6aOgmVdUhsKx%2FJSRqLRjStFrxPYlqL5aqTmSVXyVfLJWgpITJYddnM%2BjF2dK3Mp9n5aHVIwwS4oXWUNNDgXAQRsybjbYEGWLNZl2vT%2ByIUAe%2B%2F%2B1d9iOr5kQg5Gp3cwjgkq7R%2Bm%2BhhbMghuJj3zeuseJVpThQgxtFcy0tDAHQSMEc7HIFKI5X14HPh91dMI5nTbNsMfIj%2BExYy%2BEVoBKLht%2F5jUm%2F%2BgqKogj149wfkh5kRQkkxM8KHPP0pyDY%2B4lVO2fF5g5%2BMR8J3QA2y313WVlfUZssFrVWhXy2exiclJ%2BlILZhgN745FzRfiETCtMYAvvexCohGTnbYQ6QdmTv7TgJ906ddDeQkStHFEnaHn3XhQ5ISVz51LZUZrihqZuhuu0NZetqeDqrBXjiH9EDMUD8fTD65ujABjqkAX2Jyss5V%2B%2BptN7ai2AmPA4DA5j6VNQrUUV1w3MzUp8mF47LaDCnL2MfIWSTCXBuFCJVmXjGSkxjolCoqyC9fGlijo2XcMkK7Jnf5QnYQZjPbTM1HCvD25n9O1aSY84zRajPIoEtDq8dfRJVVBiO9Rowr5q37VXRrQLy0dyQgzM41Y8CXQfKS%2BPi2OTl7Y2%2FF2dLPzFhqip5XYNKOc%2BHKzN6cpVz&X-Amz-Signature=ca5f961c1cb5194b493b8c5d1209e254c2f23f7cefee0e2a3ef3b8db60e75ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
