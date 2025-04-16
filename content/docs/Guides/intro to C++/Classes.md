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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AQFGDWY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmxwf6k0LSK5%2FyIntzmcSQ8DNPHxp%2FpoRpAEwmn9%2F4JAIgd7XfCn3h0RcOZI9wYLoLnpISO5rOKxeBd%2FzYVPf%2B30gq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDG2qEaqmaa8O7zoOVCrcA4d265zB76wXsuSmCUJwSX0sldMxAN5Rhkq1MBskoq%2FICEBGnCDZvwxYOntZnYQxpv8jYCLHilTnsqBooFxAdJiA6Or%2Baxvn7iYuKMPpG8rVTwRqau2NmSK93MJfR%2BrbonSzCXSLMQtf63ti5L19QG5Zhu%2BReIQzzTKAy1Znfmh5dMBTWtfTS%2Fa7CUiZZgTUqDzKhRH5GDP2jUq5Qra8JjBVXidGR7bp22gYgU9Md2x3gBLZ1s5ZJ8D3hvf3bLWZBipr15J6EIDa2FoQnaJa4gDyg0jMoY1P%2BHBVM4PtLTzI%2Fye9oZJ9vrm%2BYb7R35y9CUr3k79SbO0iu6x3BGlF5tmG9F1WpH2vU59rSxZZxA06%2FMcIlKJX0S%2Bl92mr22qGpYUdQJ3grqH274tLPCyCHIsP477rO9xu9KdKk2%2FWkwvZ3yhAdswHxcpjsUAlDOyaNgDLF1HKU0kLu8NlW3AxJ3%2FTPJ89h%2FV2VnrN7j589DjvkKgmeIN%2FvSuwfsEqgExonFeHmy8FApwGPKJJUZpT2CuzHDfo70eHzyCIikTVJ1ME8aTq4YDhY0yq%2B6TW%2Bo%2BLHdwCzVEksu5NNXT0LGnRzWlVV42Z9pQwRLfpRy0jMScXFjCjR7I1Vq4K4CQdMP2i%2FL8GOqUBgGNqywmidarVqmCaSUvGRUgTUnaQb7Qv0GKYgcLflZ4yQYhBgMM1H03jFgtJWh1bMSQTzY4FIGS1O%2FjE6gSxp%2FK%2B%2ByGffZC3sxGAPzZhdnk7qpUouQVjWC%2BptOBalqBKsurptGIo%2FolXwrt9CJKyVFlRf7LiVjShZi64fDyPc798LHQiVUsqHRSqDpdTdym4PLSebHlT40rkP1OR%2F5tg5pfACoLw&X-Amz-Signature=6b12582d0d5a6e9768ea64158aeec8a3bd34f08c22f143cb87fffbfed5caaf30&X-Amz-SignedHeaders=host&x-id=GetObject)

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
