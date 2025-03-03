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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D6I6K3N%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4ngQT%2F1anQWeVoYlG59Z3QEYJz5nc0K4N%2Br6dqhLWBwIgWhepktAwn%2FVPKnviHVlrVabgnXQddp9RqnKHukQx47wqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKR7B9Uu5o1XsZut%2BCrcA7QNRlMe1lUFD%2BYRyiJGMO4Ug8hwEC5gVG7e%2BwaL5uGxQUqQHd3qrFkfMSHeIq334Eyecn6W%2FZ0kbTlzkIL5f4%2F7kJK2XV5zf3D%2Btejz2ziWHoLfq8Ko87KInwJ0ZbGnsmOfxV1r7BGTQQ1JIJUke1xzkrnWqRAtTGEz7x01%2FVqTPqtAtvI9ERFG6cEVS1i8HLMdoLhxMHDhTN1nxgC4cwXk894MOU0JJ1zJ5szRnkUV49CYZveOrYC5AWOAg%2BSBcGaSV4h1ckFOQk2eHztEeAX9lrEb0zEpCtSQqynmxem4y8mycOGnPVxckWPJcXZWzkh44DJuU%2FCYzViDSmMn2FVXoqGCjMEXZCTMSeAl9AA9XFkIWUa1dtT%2F7VF%2B1t64cIJp33F6Lbi%2FwvZcUYkswOqarFxtfd4Se5xyQWOlENPwhUDfRkax8SAt2jgPWVU0gAmcoNvweyxSIO%2BY9UnVaiIFcP4dMB8YIA1QkYFsW5X7lOhu16CTfaqksq0%2FBYTvMFb8vWadMWwJy5lHEpLQTOcLwgbIujHlILPQrTXYo%2F4MZwCPhuN5QOlvfiJFcIx7y%2F5faaCJkZkDkcZ%2FnLMDcMzmneEdX1zxcjZyqmF0HOpe1B3Yw9dIcmxiDmz2MJXNlb4GOqUBzpHaB2QhYamSSlCx2bxIXd3ByL1WzWAvAvBt3UaVcWi4b%2BnjbIgert%2FnjSCo2pTZ6m0cZeFwtxlG%2FnNi6GxMTQl7zl7TnreiefZRDT2bDBXupTUu7TQTnZ6Yh2jWijcjo1N4dbjGhjRYWIUFXKbc0YI09ZLQrCf0g5%2F1vsQSPpfmYXaYrnlah%2FX3WGLle1S7zk%2BbuqPGIyYO9s7A66AE0%2BxtIYSG&X-Amz-Signature=b222bfcb55406a1fe65066daa7fb3ecc6a5e5ce47c1ca4176f0df7fa0656a811&X-Amz-SignedHeaders=host&x-id=GetObject)

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
