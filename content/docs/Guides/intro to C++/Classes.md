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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSTOWJT6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpbav%2BBl9R%2B%2FfM9N%2BJqgDuaW3Y%2BIGFFRxWzYd8ahzhdAiEAlXfA%2B%2B4IT6E7ASYsg1%2FPH1W7VezkruUWERc1A47234Qq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHaDCGK3i%2FxFj%2BZYYircA2YkQGHjLjnGGlUwcxzn9TDSeqT%2FbywYtewMhXAFtGTEnA7AbsNYfGeNBAjXdegBuVtOJoVtgzA3OlQp%2BFG6YhRPxsUzN5zHGAm9X2%2B4pJjnoB5d66ma7976BpQc8l8jGqzYSxoOXI5DnwP1t9tEHDubuWFGxxsn51AOUX0xTLRg4qOckQ2SAaFZ%2BQmZTvyUqRl0VJ909giAhFoay3MPCGBM1urqfRureBPRaU9Ky992Jyf%2B%2F7XekyaVCjvlQJubHfJZjtCWeKYRxXoAquqsPyaFdoQxzEbZNmxOyqL6FPAlLK%2F%2B8evvd7KDkeAKONsqYU1iQF%2F63mm%2FFlrwejOw%2BpS9Eu4NvdcdmHdR7H8p2V7QzSrAFoHjxUsY5SqHPtpbhSFrnPcWERwcfxXTDNLDU5jeCzo%2FnoYXZyiB0sY%2BJ%2FIzKqEGgSUPO%2Bjpjvqz773Xf%2BSnOcR9gDPDTDeUFd99RIlX1l9UlG0VFp0xRZoFUPTibHJE7pOZZPid9CPh4AQppNVbE%2BHXumwhvwp%2FkRjJmqNGIYPYW8dIRY5ANFTk7xl2mMg20soXAL0gPQ2xsilKu9KffE24xxcsVGiLKyu9hSo7fd77NWop7uZEpawvU431RSX%2FhtgXJ1kUx6VCMMP3l78GOqUBnESdSwal0hRgxlR5yQHf8NigUUT7fsCfzgXwBkE0hzPhuvny5LvKNLR%2BymRJLipVeaaNyUNV2a5dfjVR1lK%2B3oiogR14W6%2Bk%2B89TiCRI9yrtGe8pi0rdJpYxQgKNpwShMheXg5yUrrMWxWN2OcpnN6CbIo2mUrlNSjImA9eAEPb1AWMujjCGNheipcI0LzGmydRokV54rgv3Ltdr3o4PLq0yH6I6&X-Amz-Signature=9e63a8da55f2b93f88fc9cf7270e3690b3f852df54199bfb6929591a2b165cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
