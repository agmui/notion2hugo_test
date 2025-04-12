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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VUZHYSP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDaBagtw5fjJm1hal90nm0qYF1C1PKtyQiOmAty846vOQIhALsv4zhgZag2GdoQ9VfY2Ei2FWUtnQqVY%2BDn6L8IlXhOKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU7zTvAa8CwB9sszQq3AP5dM%2FqBYtX9A354AESjNwws7sTA31lWBLsnxVr7UshxyXlCzfnS9rSMgRkKk6gESQJyqJ3K8HQTqYLF6bPS5PomAYdQ%2BQxIyoTaD9B7c4gYutxviSd%2BTiKrYKOiTaZmO3ZeemBfvNk657e7Wt5jQ5ioBdWjFmSQPRlvRFp4ia0lx2%2B9vDOIwt%2F4cRSI8WyKOWnqsK9390%2BDLFnllhiogJzKAFP2WNd41n5vODVABqQ4n6npud3cmVV2PnBPv%2F7K5Anhy%2FEIlwGMk1EkdkVrcI097t69aH7t1HeuMhtgOngR7%2BRMsr4Dc0Xu0pgcJ0an5o5rLZAzLgJ5PsBJbhKHTR9ZyVIOsdRIoQd1t3swnrELyuOvSyww3ONUcx0gxWDRQ18Nwg6YTaXzBSzUARglVcAY19%2FfMcfIiyn16%2BsoqC9AO7FRiB0DJ9kPNsNKoVU3mB80swb77dsytrkHHUGfnZqE1ytVf8Aqdof6YLg3cYGtGIgLxRmuO4NGCZ7jCFu68Pi5S%2FzHT3BYUfwZn6%2Fw9ryyOsUg2r0%2Bq9EyjYJ3BKJ7tJ3Qm3Z0hBMaL8kgYcYTwvnVB8rybAajLeu3BGakTv9ViMl2b7zwrpYHkYre5bq6ZYT4cZmf7ztf3hymzCTp%2Bi%2FBjqkAU24KBFRh7Y5z9sBKxsbXr6GORzceqZayp6M%2Fg1ok7yh2SelSV3jSJQlAwJaXldzkTIyVf3E2wKN5zfFMUg7IKOJReklU1%2FS6OvXJfhX%2FeluVoI6qUmgI6akgerj4SU2bJLR7NTOJGHxN9S8rSgr2YmTV8QQCJJiWEoSALRz8bqkB8KG8yhgup2%2BcuGtOHEY1d%2FWz6a5Sd9Hdtex%2FpBsCUzknL7f&X-Amz-Signature=25da52106d24f4329593a75ecb1d198049171f61340e0519ba979ff4d29fc310&X-Amz-SignedHeaders=host&x-id=GetObject)

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
