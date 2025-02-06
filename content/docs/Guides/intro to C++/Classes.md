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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYAMI6Z%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCCegpFo5qV3kOMvK5XTmxR2Nz15XrfJ13%2Fedi3w%2B6zvAIhAIJ5c5o%2BJpxZGE0hx0zTijzcwPFUS5dp7yUdHFiRVoqNKv8DCGAQABoMNjM3NDIzMTgzODA1IgwHBEcow5F0LKonYKcq3AOyqQOrQWPsE%2F%2BeGblBgowPtEFLY2cE8bPaE7vMdQ75979PwyjYLHmcrKcj%2F9UjLAN1BSuO9qldg23nKToNwTynQhySKUpKME0KE9zPsRUPvEaXOtLQk0SS9uRMW31%2Bjz8%2FzavOWw%2BjD3n1PgNOps%2FC4oU9hYQbXIzRhcCSWx23SQ7MxmHADmdhGx7N7W5GTyf2rYvarxza8%2FwSHdxkERvdD%2BAlOVAyMGyb1YpeK%2BM0ia9A3GpAVvrAoZoq6huT0XMXS3%2FsXnacbczTVPlufy9QMPE3NZl4ub3U3kJgTykdz2YUPtZzcv4jWR3onKG6iITeDRSwIXS0OmMtGgUBlKPH1bWgFRqQW3IBeyTZZa6b%2BY7%2BkPV4V58YNN88lsxQjmCkeYvO0GM0b%2FQOKKOQHRID9kHK7sBCkaV24luTQmDwuPvKAnqW57%2BVLnnYa2XUnl479aJai7%2FmbSTwuRzZ0cue6xgtRnqHsY23wo0cMhs3HNBi2ntpdtrqvkephTtRXrgE%2Fy8Er0%2FzGYWA9bzcPiBN9RMc7%2BmNGTreXClxH7L2B0LYW%2Fax4BQwUGfNGLQPc9RHepa76vSYlNJd0oawitAcz6I%2B1%2B4baI249mjzcl%2BaovCDMtcH2%2BToB2qZyjCznZO9BjqkAYpW1x9nlOYJ7oEZcjs8FYukPcaa%2FsniicOuNLpZ8DVEhEJgw%2FbY1jJ6snHQt8XwRXNOWBv5V11l%2FanGDm83aceVbpI32%2FW2V5pd%2BEGazV3Dj28QEIPasaaxA184OsxklW59zpwm%2FnvtpQ9oYOMIQ9eUMO%2BfLaX9ifTdS51RF26bTVMxy3bCHCn3FERsh3qTcjMe7kKpcB0%2B9O29gEua40gGfPNj&X-Amz-Signature=f629d5924644613fbc20ffedcc8b43e979efd67dffc8dbb046bf48867592c011&X-Amz-SignedHeaders=host&x-id=GetObject)

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
