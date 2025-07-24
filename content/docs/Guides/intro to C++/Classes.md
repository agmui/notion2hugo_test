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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RP6PUA5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCID%2BNdWmEa0mrt07ILb5guy2xBGaJyzQfi3qKpimAzZ2uAiA2ImftSzeB8UJrRyR1YZGtXVaL1qmBhQYBUXxnmKkTIir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM0peSR5BzAdEo7IgBKtwDNDzHEuPxlFsxPUTwfpdjZZwjDcAQJKex1AuexC9iXsin4qbeTcsYYulYxiiw2lx5vscmng4KQJhag9D8DFCMg4ggVN0BXQly8W7Gwc8ygyzvFcTfiMYF8jWSvR5zDejTnp%2Biip%2BVlCTBkbu7VIEgau4HGhSBVE8lWcNVlf8%2FoRz5E7VRKQNiImSZHcbKX6sAJbo%2Fk5KcAQxnxp8dBoCul3IEThjb1UqfHROWJB%2BIEAWjH7QYB9x2j%2BggbbiMaWFQ4vHDyuNsGPSA%2F7vmqO7JVaDMD256pikRVM5BeRulCAjzO6qgRdmep1OHpwxhuuM3wVJMJRGkOY%2FgRNYDL15pmx4XDom%2B5TwrbcC9w2jwJ1B6xmDXP57z6JLaWED2bV5hxa4f5PUZDtX3ZnUlzAYQuuhGIbno9rdtbhTNEoatBzXPkCaLAAs50AVcifpPHxzN6cTVegtJnzbqkVHafDEoJxMPhK5WuWJthzxv2RPBV0D%2BcTBKFyjKsn6%2BAg4jFk%2FDPwTnzKrnfC%2Bp2xEC8VAl2tfLXG3ZZ4hSstNJfk7OYylxw20UWfoi8JlOC7U%2FpSzIk3kXtyfIqWk5KQv2HyaehbFA4ZxF21hPZBT4%2BTUdx7qS3CoCTAK7JKFkKHUw3tOJxAY6pgGJuRZ%2BowRWwKc6vElsnAQ3MNEKjoQaffp96zfotAitp%2BbjWxrBiPf8max8mXtTBVGOe6ET50lrkvrFB75oXjGwg75x0Xs8%2FaK44MpS9K%2FFqxvK54fsGdnZH8u7qImqH7Td5tnpq414lHHOhtSFWFla30RTAqz57ozMoVq1%2Fn2up6SaZr%2Fv0W1rLjr1HbQVgxXZ252zBzGUtxb6tkgnCvwjBFGzpr2E&X-Amz-Signature=71aa856b21b269ed7a050ac4d5bd4a3e8e3c9467f666f4fab92a3ec6e9c5d6c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
