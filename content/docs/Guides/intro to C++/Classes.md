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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWJ74HWM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIF8Kj%2B63Lc7BjgTrb1DYnQC6Qambrpyqu5NGJfINgx2WAiBLxRSd0hT%2BxVWJs9kTjuZfByq6jaUoCcMIVkGuwd10nSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMMjbeCAK4Qe7OPFWJKtwDnmFT2HSD12Ldm5uFcv3PKIqjGZyQH6TuQYxH6j9Qqhokb30BF0MYE3uVhT3CE4lGK0U3VNZA2oySwEjpnWqgPQ1DR2ek%2B7s0nF3E3sgnaSltfJ%2FCo0NQtW0vkwO3d3gThbQ4dkgLwQxrct0%2BCqjJKLEZty99xL5qhWDQnCXFhryvjKBpChibgcy05BaHdu2gewdCFB5KsM%2FzXny6Wo4Ei5mJ7sXowoMgsQMvdHOWsTGzGD2aoZTvUU2A1TKhgD0hTP2tsy8mGUruqbAPr6fCw1Klnir8x%2FPuOxv9BxYT9jiWWpnyzwFZDcQs4U%2Faow97Kr3YjNNDzIbJiPcT9gNrX%2BUV3LThGiLKQX734p0Pq7L5AcFLVPPvahCRG%2FDw2AUVQpOGN%2BjRK%2FYOIOkcjZu6G7cMo%2FlolQf18PRLB3mlNzkibCfTRQLbe6aILsV%2F5DEm97tHnH%2FXWrHiUYU24EdnMFKTJkdMiMquOlnGIAjQ4z8i%2B8Txaoj9pYkV9x4zJ2C3LIbdQN0K%2B3JZu%2B6WwBef5zplUhhWS4pI6FbRdDl3xhJPXwiAUVgW%2BbQk8BOTWKc4nHktOjLfGJc8jjJzWPPtuQiOTkb7SJ1CQi36KLSeeUkKi5twVbx1GxDdSWQwq4WXwQY6pgF4S1PS2%2Bac%2FiCLWpHegBqK5yAhsfyRX6nP9c2ycAUxPm10W7GhijEOpqVBURtbueHRv2Qs7chptjicjQGaaIUtUF2cGtQJC3AHF72N2gPaJWbCsukFLdKyBwwWyUGVqWy1d8IX60XJDT6f1ZgLJkQoEvRK4GxkkJP8bTIi7nbx7k%2B4ehqLT%2F%2FR9N%2B9m7%2FBnquBCP4TO5phM3WocxDTMjrwi3At5ryD&X-Amz-Signature=10508fafab803af17c0c72104679a4b4cec0197da0857c549483d959f7c039dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
