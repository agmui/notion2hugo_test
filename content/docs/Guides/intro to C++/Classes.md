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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYSMBAWH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUQr6Sr6cx5AGc9Vw4we1kbmC9kO9RDFO25MQqDbwxzwIhAMuB6%2BZgNKe2Uhzm%2FLH8%2Fwl7SrqXndTozBwGN%2BO8EMIyKv8DCDEQABoMNjM3NDIzMTgzODA1IgwtexK8oEKAP2u15dMq3APKQHBu9tKlTYtP4VuMgcnLReY2%2BKvfRZ96ww3Czb%2Bs46eY%2B7462EBPFyq0T0Lmt6B6EdmPXtPMXr7LQ0WtrXe5L46QUjLUnQHDHg7gupkuBPIE6yk0XzLpIdUAHhiZ4JkgrSqy3oH%2Bw0%2BrlSPfYFVmGNQvuydnc3bR5N6EJ3U0f9gTjqRYY32wgRShg9TK1Ihc1OO6VuUWSqv9nu8xQS8qj%2F7o1KoL8r1UHdPm4r316ZpcHfAjMQRQvaSg6bCLTihHjcf1c50oalF0E7XGn8TE3fahL59a%2BeiD8Gyyk7oXQQE49nfggzM5uBVPEgsRZsJbnX4TYbnCazSeJQuInNhFU2fipKu4fPW%2FV6i4ZRHwaECNRdH2T7MBGvkMLt%2FDuV4suBiYWnMkWHWvuw8hJTiDoNTsDLj9QSRH2bDv8gdUBwauNPuVeQSBBZ%2Bq%2BxYbB6ehXh2wlNIdtJ38fJ%2BJ7pcSfvo7KsuMkO0sLYYQjgfT14ymRqH9QXT6n8aAo8QGFty1KGi6uZgHlcNDic3s8jRiHd4ydf29yx9KkVfy3uL06I3F99CnAz0n1%2FX18%2B0RL%2Ftc9ha4PIVW%2F8nJ5ZlUutLufBMTgkxifwI%2FCu6FYMj8fqS63z3iRDHQLMhERDC5j6e%2BBjqkAVIFnUSy75WRpyi%2BCC0z%2FmncDjAxr4uuwtrWIQ0ir5M9%2Bi4WuupkH0Br%2BqM6QpTSS8FG1HSvVKtM9kt7O%2F3orVPV86GmjYnMDl5vfcDsc1%2BXLO1ErS%2FnY0WI94e478OVNjZ6sd%2FzO8FIYeIdTUElDAkZozo75xJdTaKBqdwVw0RuTqdm15ZQ6i4TkAm3ImeTvBOsr3OXfHa392arY1PC3VUyYNM2&X-Amz-Signature=2a50d29b43a8a3b48395f19a04c7adaf07757baf2e31948497da4c91e4f4c960&X-Amz-SignedHeaders=host&x-id=GetObject)

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
