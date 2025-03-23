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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM3YEAON%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCwvd5FmoqH16vBYYXmsS8Wt0Y4JtfD4vW3vn9K1mwB7AIgZZxoiWnzGUrEn%2FT7pDq5lXIpPdwb%2Bpl21NtpjGbc%2BhsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNqRpVJdTy%2BP2mBLyrcA5HzqUBTJlyt%2BoV%2BuWRwlFhRVOoE0%2FQh7GQHtqN4yxMKW%2FvfgYd46icS7MtpfQ%2BXFEDW1WCmHEPWBJ7PKZEFdlImzouqDtLt5B1ALRHN6fliY8ZIW3diGVd%2FMjXg2mqDugdI3bDCnYx5grdR2RSgycItxeDR%2BJqmdNKVfXoQfImd3yzTrU8Wrp%2BxCFg5RqFIvt53qjWBQoh64NMfClUht1j%2BtEVvG4%2BZWi5KNqaG%2BLWV9bHLnwvV%2F1UkgHD4sVPvRdOF6odFw5Rtrtg3vr5YKIpNmLIC48nNvSYhHwRoLzQO8HhdGNKDQH9J0qn4YDWd3kXlAKX%2F1Q1epCfj8XrozYzj3A94nfAb9XYCsY2cFgqGsdf7%2FdY9aE7%2FQiEm%2BQEWd8A9NQ%2BM3mbIMY0B4W71dZLpZqhJyOH7fw3jKe9wFIXxr8PEaufglTTpHMs0TExE4JPvTzuWjhx4xUMJqyOz11%2Fd6jlU%2FDhy0KKhqcVGnzyb%2BKX2%2FflXJzuBw8KUoehkvM8hwRkXBzwYclrXGNuwsbiFIwAtlmcstlvv3U9qhzNA96YsddZIm79QfEbv39lIRUMmK8LA89tULts2PGxLb%2BAR9dPSdICj%2F%2Fp0V6i22ZlZDZlZJBUeo%2Fq3bV4AMIjN%2F74GOqUB3%2FotD%2Fx432HhkouakyYXc8t2GZ3caG61TMtr%2Fxp9WoDlhsNCztdOWQjDq5u6D9PpPbkwSN59pxnlyweW3Z7WmSesFwJr1VejXX6WWfwLkocq8UrRss5bV7vJo%2BfE5j0bdpPgRz3baTsfPWin7wMWXQ1dUyymRVBGDXetlnOiS1lZl0GF%2FvphEb7H6tWdJKRdldrmcZ8LUmWONnaBPgSbCsptZ5tz&X-Amz-Signature=304f747700993f9b545d6b9c103d353e6d9988c7daaf85445aa8a5ed64776720&X-Amz-SignedHeaders=host&x-id=GetObject)

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
