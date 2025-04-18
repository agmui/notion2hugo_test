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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REBNOKBV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICL1LPCjrsncZCIp5gu9kFRVjyZMeJiFcfyV1%2FRSvisZAiEA1Ph0KlFxN5I5z7RcyQ9Z%2FvWwxqCssW%2Fnc2e9iwFLAu4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJhBFRApbaObbIAsqircAxV4coQGg7BsxBN83YTWeidwkPIe3jtD533KfT2OA8jg2zju6%2BMx8AOFhhlFvFvK8GhOdoSkSsAYAEp1tyr0ZAqtTkvVzAobZjj%2BUiSrDNQHM5C%2FkOz5adEdrXjlmwOPhxhuwPC%2Fet5goUaMr9seLYHsFccovajQcrlKz1PxPnFeWjakvpqB%2BK%2B%2FeQuZQRXi%2FT454kv4FV6JPRbDXwowwbiqz2v3wnS8sZ1hO6iOjWGLK%2FIqfv3Jyx2iOD6Yb5aY1JxVfoRh4%2BItMiPk2%2B8tCzUrtW7L8McV30lmz7%2BxX2lBGQpu%2BKmi2al8UsUkm%2BxZdDlQrNkXVIjBPZJk2NDcayyvbZqycRoU90CA21Or3DRONm%2Fc3NLEB2V2o%2FW7tpbgnB44xWc2sUFbNrbHuJmosOWLPJ2Da5Vj%2Bwjc9Oag5%2Fx12LivgF1QMJO%2BBxElt25ZyqO4prigYkOfw4nTuuX6CBDhV7d9i9WBN8XtmIqHhwcmAX9mr1gr9IeCAPVr%2BSJbnpDsVY%2FuHGv69XRKoRnfAvpLiu4EjAoal26HwcDk19FG%2BqqoBUBGHRCEOUD0H%2FdH%2FoiQme6lxAP%2FwnewBFZYi1UxeLcV2iqj2IfPpyqbxHErywN%2BRdCs8eSWLQTLMOCNicAGOqUBEldowBjY6u0B3%2Be%2BiX5v4Jg67n8p4LgdBiHvvf4wnTEGh%2BAZTMB%2FNHqH7QCrLsV8cw%2FhuWVFOpTvvlTX89wRROw59X7TWt%2BztmvyWkiOl%2FpsAm4LAQmoeU%2B5N8NFN8q79BZGn8bZUsugECBDvRIprC1AygkvNsJRj1UYmf2RIApjpDTmgzArVhe%2BpoCa4szK6QRGMjfh0wM1TeV6k%2F2hhgwLqZ0A&X-Amz-Signature=dd340c9556bf1645233345e450ed3f83d82d2b52d821d74e19438744ca559795&X-Amz-SignedHeaders=host&x-id=GetObject)

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
