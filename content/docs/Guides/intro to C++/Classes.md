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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUELMDV6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAj6WUu70FZam0Tjr67iVp1ODTNmt%2FO6umaZJWbbPqWsAiEA8mHC6iI78TVrUTpK182pXpoT3wkDI1b2zVTY79hTjowqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGepzfEBJ23TH8cocircA%2FriOIUiU5lLGwseAGUBJcoo7vdjiUISl1p9UzaLYV0tvJWsOAMezXJ0%2BuAUjc96WWugOCnXQivNAsLYeJU6nJxdMB0xKLZ%2FRZfskPUZ9ACiLnDe1ppHhYtWIjbRwpmgxmlsLGe2SCpbgwUtziFxcwBq2P9ZFhhrQNvAoBIVhLmIXUv7ruLjM8PcXthJ6hGAYZY2H1mrDmBkXuWBU2kAcWW7gMEFoFH3PYm7Qg8gzpZP85XeIHZBW3iFM8a%2BzaqNgddQKwxlYPFULyDnFuxW9YmWiWR7h%2F88zNfla9AC%2FYWcQ3CLdy2P0J4%2B9zpe4kjgJZKK72mzO%2Bx0pHtds3UkCiIEwLJasBX%2B1cmcubbXs%2F64PigfwgJ6KfhSChojd5EJmQFwA3ka0RAjylEgasuyLLsO%2FwzAnxOfm2we8xAkKprDNv0dki63g42zx47NnpuSlXiQVKzYdY%2F5c6WGduQdVVwDEqYeKWPVKjVef%2FJfxXyKUyXYav0TTPhYiu0aMu%2Fd5mcvi6yzgseHO1vhzMa47r1nGILz2fmTgj04HIC8l6r9jeg3x2IXUYIpIuOmNXe5ZGkjuYfwA3HjeXu5iUr%2FwSP1pLs6yzgSN7A0kvDIpl9wUr12tN4FeJ8T%2FeH7MJL4lsAGOqUBg6wbzxdv%2Byjp2tVg5kGfkuDML4ZN51USZimNIRQzZPVabCwp%2BOqQqgSX0eDxptLmo8pME6bDhBXfsS81UclZ%2B0QYF8deOVzFNsfxE5k8plS4b4KjHjvnAhr%2F1Jf4lLJN%2Fflg7QQWN77%2BGuHLYdiAsI38SSP5drJ7U%2Ftw1NJrzqy9bAg4A%2BL3ZTVt7EPte2MpQ%2FS8XNKPGOMzXE5YTm05RBFSQWpc&X-Amz-Signature=fa26c352a62fc01eab8297aed147800d3605bf82b9501f01323aa8a8ac4c985e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
