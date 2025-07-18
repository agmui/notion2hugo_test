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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ML6OV2A%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD%2FlD7x1Zl%2F71B%2BgTZpaXlSaSRiWNNwJq1EsHfSP4PQnAIhAPqQ0sXUncHzZ8qIetgeRapnTmTxbhu28fyQf9w78X7DKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHWGQ3ygdN231GxM8q3AMWPo7lLN9tmpYS2Y1hQOhp4ANytFkcW0HeNpG3DAXU%2FBlziXrUdmnPgUV488OsCLuTZToCOx3VN0Kk07XipzoRQtuLTI5LLfeXB%2BF8st0myzDN9TpJI7ZcVm%2BPVNElE%2BGaC8gIkFK2n%2BcgjWSKbX3EFGI%2FsymmUitAm6v8yTcNg2o%2FM5M4%2FY2lnhmTReuK8SyC7tvDBgereWiQ5w2QtPpSBlw2Lwl3mriowHrNQFxRB%2BLV%2BbOxAz9Z%2BsVhb%2BTP1tFBCXBATQxOorjo6MqGfL0mxIEm2SSROtk%2F8WePyhw2uxIBUIcSx1mmwpmxsne4T3Wzj8oXx3gBZokr5NSHjBWMD6Rw8cCaJPUaFvWxx6MzOcNT%2Fsgfxr%2FXosQot2YV5%2B0bVf%2FRrzP0PvepUR7n1MtwppIYmQf9%2Bb7lewXoQnrhAJ48tb8EVaF4Qz8R%2FP7ZuUzgJeEu8LsK4D5GIYL82JrV0UtW%2BfuwjgtWp0mIco2BW4JqP8Yo59RVr6XxyDhiNTFN%2Fk0i7v5jVpVOAssUMHxKZjr8HNagHjLHNsSUfrUumHwiCij27gW6y2DOwF8e4QjwVVXcWLhVOq6vocao0RIrVmAciVMxRkmO5iVlsVebzaU%2BvrzFfpecLZtfgTDd%2FefDBjqkAbP5R83gSvJ0y1HK9keflJffQn2kAidmE%2Bbser8sN85iADzBNSm4EN3z88R5AcTsUxJusPXTcfkTSzrx9bKNQ5IPYuJUdsK704ej3QkG%2FnYkYet6O%2FuWBH2AHXtFYHOK6MiOBfm2pSmWWScxCFW%2BaOSGFkKstvGdnbI%2BxjOG6sg7%2BT2%2FQ8SddmqHjbK%2F1wBpLBt9%2BxrfdPO49jYVqGmpOA6gQIBN&X-Amz-Signature=3163e7567ea3c3816054a71d2c464c437ee6baf16311d860d7cbbcd90f23355e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
