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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJLC75O%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEXD8y5MdWzJSe%2Bin%2BxxWSUUXC%2BZZRiSBsQSFI6CEA4vAiATdqGcMpSC4vQea48tKIM3%2BmFbKPOfygayUrujoFJEaCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMOToPcM0VMNCZ2vkWKtwDYGrR6hO1UJmcxTUVW%2BEJOBJ6vql3f5xbCE8%2FIK4l2kDQlDOCHGHVKe1fsq3nozcCFT9H6JdStFdFfVM8bxrU%2FRXt6fMNfX1jNaGoncicn0UXpMQqsAddh%2FTUKdltIxiTtA5WFpFB3wjjIadLr5ZBMOMUFFfi5H9kpxgfX48yWP8o3gso3IQFxqb4wieasjVXFgCKrql8PgKMC1UrPJbOMn07rRTzscKHatNTQ3TvD7j7pxAjzCQa9PBFrWfuUHuwmVoGWhpc9J1F0vfOTc3QvYDlF9CoUD6zEsRUAY2OCQhy98RzcHwOBpqADd9xEAeMGnF3gGmYgENHe8dEs4G8ZXjrrSEw38kOv7F%2BRPVuIaw9pdbAXYW%2BW49xyjnFcU%2FW1ffIslI4Poa889xfJTynq4RrULcDNsIOGDuHEzWRhGh6Lzh%2FaFyjerjL1ji7udlobCAaBaLtN8%2F2dj6WM4dSzHw0tppPr924D4tZTzuW%2BMXfXnKpF75awTrIEnFiK2%2FFg7a5NYXr5kFthmiFxQQ3DWENtq4z34RL4hV7LuAyWsKPpgSsSAv6Suf8Zop5pbmrnObF4pqq%2FuF8TNZoWRxGffjl5WTaWH8hAjwcx2h79bHNvBpqfg6Fqn%2FmUy4w5%2BmDwgY6pgEMwk7Z0ylhhZ755Fly4%2BLkjskvH2GsxYndc3xU80ULkGCEOEH%2FSKFte49HGAeamUpNjeEtQJhfKcEKRCAA12HunK81qrJhwXPEvxpyGb0OtgYgfChW2prss6EM4VxqLGCY5rdH2FcOnxZwj7tnpzjBROdmwQLTAdqAblFPFTSoHev%2FbdLslYzvgncfkuPmPFVzjWR96H1x92%2FN5AnRiFXPDvIhXmWK&X-Amz-Signature=5101166b96f58f446402d6920e00ebb68e2b838cc503ca3f67ab80699749f893&X-Amz-SignedHeaders=host&x-id=GetObject)

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
