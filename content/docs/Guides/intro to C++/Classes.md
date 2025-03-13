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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3AKRGDQ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrGx%2BtpRVfGBWnWh%2BBjjBN94VWSKKstacqrgqVf4CCfAiEAgFX%2FdxVy%2Fj%2BeNEvKkoVZfFe8ayfn6QhEp9ChnF%2F1u54qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUWa3We7tZO00e24ircA5e7gFxTRogjxvyKA9U4%2BBqdB6svcbGtYFLtKZilyAYPPFOGhy0RD9Z6xpaGbCg0u%2BUAvdftQWvx5uNCbENj9Q9hbmCF4k4DLL2L3dGioDVccTpldkLWn9Nis5z0i4nGMjK72e3bbnaa3lzIW6qk2OIZpzYD%2BQzoxWFrvRTUR84rHm7RUx2%2B6VXvsattPdOm%2BdFauHDDTM4JyX8GePpIGiLb9ZtXL0MwU4ukoVmI5aej17awczjHvXuSACb8tJSjQ81zzJVV5LKo9pgBP1IsZvODjX0575IvGRN2Zecs8Lzl5yxQ2KZcy1m79KwgvFLsL5H1ai4dR7L%2BflXXMAGo7296FCiKxWZuzzIEQ937vf6N9sgDfVzeNhOfLgSxl3D9TJ50AC6CmL8p7q4WxuxLjv10u083cQjFhnX098IUvwTMwfV2aGUrmQNC7EN5O7VYF2nlsd5ZASb8Vm%2FHe%2B15jFJQfIq8R6rw4GsAi2nn95QHoeXxekJtZoN9WA%2BGW5hrf55Cq75a7H%2B1URzKPClPO4mHWED0KJR1vAiUcG91UNZBBIW6LRijcI2qXV8HC0jzA5Gzzpp0welse8d7ZpnVhUVcGWsRDMXl9GJ9l%2BesBWzEn915rqd%2FrDoYdCRRMM%2BFyr4GOqUB7YNjnUC2sLeKGrsJLOsn3LZ7asx7K3v4ihHP%2Bsa45%2BrqJFoEcJaxxXu6u8caKUoehKvi9LvCg0PaY5Acd760PmvAyttXC2a9c3FoVlaY%2Fwn2rlwWiSD02f0U7xL4uEnGXE%2B9O25gEmAfCff1T1Aj8kT1NU6SJAGVhEKcC%2FQk67AKDBkNiGHU2NgCpPirfjcmzGwjS00%2BncjTHWs2v%2Fj2vyoOK7V8&X-Amz-Signature=e9af944874a5b7ba75c90d782b4719a3fd263778fe3a5600f3d4d5a58f17d10d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
