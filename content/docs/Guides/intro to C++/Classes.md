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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLF233M3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyilV%2FqRtTN1X%2Fmo4onSH%2FRTcVW6Z0gW1o0lH9EWszEAiBRZntu3YqjdG16B3%2FViXDoM2wn8oy8gpZijF7AznvbdiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbof5BvPmZu0%2BrlvWKtwDoXUVTsORup2NBTV6s7gqHyUa%2B7TgE9zlvM0cbSGe%2FronOBm%2BrkYLpx5eIupPlQaB7XuXuS%2FN5uRNIJL5%2FPSDDPcLa9asFOOkmNUY6%2Fa%2FXnnmbX31ZSjdUlTI11Sw%2BIdUuLaF7OZR3iVhCip7Bh3mKlJNuEhaqgUDCUceASjy0UWl4tElLfk3Zex41fVs8iVPVnl8oMREnAvnxyNNa%2B6ErFJq2pLTnj2VTx9YaAu4WJAFqGsSUOyMVIW1I0FUar4KkMpWtn8zg4xa9HOfI%2Bybjk2M0UgXepVkb8JvQ964vTmZTZMilaH5yrVWR6rRHOs57SEIpH%2BhJOt1XVWX2WRu37ydnMqBrIw2Ov6Pe2J3F91FDqfbDallobqT68RhoEyRa8bApDfxVhMS3BYsPNjpEzcFXqwPz46FBevylgBwBT1PYhs4StpEj9eu1xituz9olYQlumxzWgU1w0CUgI%2BX8Zvhh1QqY%2BDUo7RtivdGECHnxa5BmDs%2BctpU6YhW7bXQSj6o8%2BZ1Tj%2FQQC7G7O1IHG3G8QhFZIFLqbVBAq3YfwJ3x%2FKOs0PL1HkIoWQYYLXKxYZxTxz4jKc1o%2BHQQ8YnVHyvkHYAvY7EhrSuwjjWPq2TpMcs%2FZ%2FdjuIq%2FvEw862kxAY6pgEa%2BPce10rf4TUU%2FDjuUUEU9aEa%2Bol7q5dBZq%2F7NlwnruCWHyr%2FaUVz2iFIGEIlxLUG5pQKC%2Fp%2B6W9ao0HEA3Hpyn5aZyDb2FJBHemJM3p1wHp3J6SdYLUaPmc8MdZHANF9GAWTZ2PBrI87Ldwl8ZxzrTsJXsGNLjuINxlav%2F%2FBEc18z1amI6VztXImj%2FyJu7aq2JZQhzSOdTYLKUo9VpGMfWMKpNrq&X-Amz-Signature=4356950a958396a2ec2053555cf5f70507ea538c5c74cd06cc98cf8a7518a776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
