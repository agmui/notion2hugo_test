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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFKPSDD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD6BVO%2BpPTVrSJiDnuh0cgMiABgy6b5BheiXuJ22EaWPAIhAKC53tOrDYQwVtvpmG8Fb3SwvR8qbI1caw9HTl11ee7MKv8DCEoQABoMNjM3NDIzMTgzODA1IgwSKo7wM5Ppps3mda8q3AP1yqc0OdgGtcZN5PP0RGFDBMofeKcaZ%2BTPpM56Po8fiePUwCvZs1e%2Bf%2Bb23021cyDukPXqbJIfGTb794yxpvhjM4DM%2B3KABBgM7yaz%2B%2B3p6RzB%2By82cCjUzUbQmtDPVftKeseMBKyYaLF8uCL%2FA6yVecMVeD2LjMaXHs1YE8jDxinH3HARLm0%2FBmy9YJBZFckZiP1oieufRlgTSsTSmh92RvHyGOSzvhWvsSuFn9ilnK5chdfHdDP2kAKVHB6xuOn1ShURfSane0SeTbEx2MH6yGoPyEqsW4LH3S34KaeWcJQ6yt5a7%2F2NLF9PjokLRfC66bVxRuii%2FfKZzgh%2BJRVmQQrRGDVGdZWjZQjl8%2Fd74PCvMHtEgMtHuihkpKyv0kzFlERgF8Oi1nzagxlqlgK8VmpQs0Q1C499SHmAe983mG5DG5%2Ber3I5BP3Z3wcjIbn7TgysRaNhp4Wnz3JQk3Dcq746E37IHRE6nf5jdyik2UupcHw1PzXQiFcrtLJyS8%2B5mqxW5MYIzX11ncSONqx%2F3rlGPM5Tgk0XGc%2BxXbCzHQ72dbL%2B0TrjQ6D01a9bqYkZ5B60AWwKD4pzg0cydgRnH9CkFvARt5t2COoi%2BVkaTg9CedsE%2BQuc09avmjCkhtrDBjqkASg9VFI7hqoWc1nMmjFDbS1yzVeYa3VqFQMU3MvNHhXOq2AcdmnpZqdp%2BdLDxmj%2BA2yk1d2dSYwuF7ICAh7akCQVUepv5CKOxuxHFy80KAUtrIMqI6a8U5cqj1yNSY53QqGxnZLGU51bSkLEbncosLyBFA8zCwvTwLIP%2Fn9jafWuIH8Fwz2YsmiV7%2BMaHXtv6%2Bb6YfmL9Bdk1zlp88gXeakgHcLH&X-Amz-Signature=652f7c3f0f150fbac44310cfe8634ee2ea56545ce177bc033e214b0bfc44344a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
