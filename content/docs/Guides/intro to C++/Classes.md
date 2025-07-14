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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656BLSICB%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC8S42JfEWUaVuAy31iHR3H1VptGnCGqmLicqu0aeBY9wIhALdwbiYaHTNgutG3LoU4GoyG1hfSbXOz1JOwJqdrz%2FvXKv8DCCcQABoMNjM3NDIzMTgzODA1IgxFGQBb48W7YTGJ%2Fbgq3AOXADisrUDMlVoAQjAu%2FT23mFkYdnnG6qT2UOXpgNRLmOA7KOJI2JZc7n5whN4N9GLo8KSeJ16zs8HcQPHFiZBeJj%2B6YcoS0YPEgQd2DUdc5WbS%2BN0sSG7b27iKqnHhp6jHco1iPnEzF0JTqa2Qm1Cy8Kw0DeGabxi%2BTWOlopRCwwMzcMKT%2B%2FVnSNYPDEsPUO88p02luFwxM4T2yRejAWY5y8K2AWCr31GPQmxjBZdK5s5pQI9cXRjKZlPtaFA26DSUIt5Q2Uz813otXUe4M2jdHJgue%2BHznWrqEE0ct87Ys9V1%2BMbEtMS8LGiroHLa55Gh8Qh32TlpHIDtDTREmiwcDcc1RXGY9RD7TGUEpK4AJp0iojlZu3M%2FhIdLNWHFb3rcXzqOiXfPTKLlx5EjJ2BXmGCgicHu049rbkNDOkpet04LrPBx9jpMTAYIzUja%2BMq%2Bm%2F%2FBySwN5lkNSdsYE%2FCx6krhr%2FIRvYIkug5UuNFqJKfnUIijFlhq%2BylOQJkTkxjJ5dnUKUO5qyOc6F1rbHTyz2UWmqYjHOcw74u9rccAAqRo%2F%2BcdNfCK6yaYmn5VFVmww%2BGbJntoHDG4iZh2kOFryJoHTVgI9FR1EnJzb93%2BzMOIW1%2FO47kd3Z75AjCtsNLDBjqkAeP00i2YELi%2BvgvywwhyzY0HPbGRnb3kEL%2FiuXYs9f2ovUl%2B8cDBgiXuW2xDRpC3%2Fongomexx0Z3f5Zx%2Bih1%2BEW85pspAM6d7d2u4anmnRFEX9qDz7lMt7zcxIzxno7NYXMZtFA7a7kQg3amH96Nm0SHRaNHpPfd%2B%2BNmS4TBzMvOMuPellHrzNxCboz4QaRJZY0QGQ1o%2F%2F2BJBc4HElVdFVPSgbU&X-Amz-Signature=d0f88eaf10662c490f4303b1f18691e00f3a3fbca8d1243c5b654c4338195795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
