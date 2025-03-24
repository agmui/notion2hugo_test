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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFKE6UC%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2Yr5hqWtewN4w2KBUbGwnmRqDkBC7tE%2F44M6P6wb0OAiAH3Y7Lv4V9lV9Rqytl1OS05i01rA12RG%2BZg1xZcC99MSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH%2BN9h7%2FBfTwt%2FzsNKtwDNARTrNuU799s36A2I43hnqdQrO4WOWG8c6fc04DR49baCkoxqJ0%2FXAwWvkezJmbiDp6gPD6L9yCF3ZbwXIoDXAKtPXuGtHtp2Zst7fFyD1MhrAz7Ex4PmO7xnU5s5t5fajG11fEofSfLVmXQcYMq5GVXPgI8ZhajjyyPlRjvOu25efifQquCc5S66Iv8QX%2FEiT%2Bqz9%2B%2BCg6ZG6HzovRfh8LWY3huQ9k1kWnWcMIwVlO2XfDifQnSGshcEgcrTv1Vs2kxpif7sbji%2FO7g6XX9FGNw08DtoEPoees3p6VFybiEA6988szrPhduKDb6hmElg%2Fgo7WeBbwe7Cof%2FKN4nM%2BMu1GugewpkZhDzntKtT3TiGlMSIfZMaxVporH9TeXwCjUk8E9pLnETjAUf6Q%2B74CXG5aNx7td4USZpJKWdQ5l6WBQYcULpHWQDXS4pmphTLlUwHuQ3rvrwjQjwgw%2BLbova9tmf7u%2Bd8RkxcXMNfltWNnatkMtQ%2FSfWWs%2FfNIpG4xiswhgMEitCzzR%2BFcjvAj3boarVNVsTT0fPKmq%2FP%2BZnVugmhQCchuns1eMjkJdl9y4%2FDlukUTN2973uab1YNY1UAuH%2BxOrgGVqRtReo%2FVDnV6ulsPPo4%2Fql9RMwiJ%2BEvwY6pgEZkX2KVWfQsvROxENb8Uv7bLs5TEQeV288E%2BY9%2FwZHAlcas7OIzCnIKxb%2FJ6NAm%2FvhRgujm97%2Brqmzkg06lrMd5nBLn%2FIcL%2BLQuGmxX5N%2FOFvat8MsJuakPP%2BVb8zNXF61aWSZae33cWDKdgj%2FAo8AJ88UMoFx7Zim9N8ztxVl68nqYznP5b2t3lEXmptmWEE457KnN%2BbKTuvykwDKmAO9lc3jqJ%2F%2B&X-Amz-Signature=4bc9472993f8e821740fada4e99c62cd980d705a8045ce9036dbd4c14be3a3bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
