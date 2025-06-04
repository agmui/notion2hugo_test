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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653IVG3DQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIHv7C86PAHz8U5cw8UymJfwoIw6LfafkJRy1x9zhE9GKAiBJnYOmwfOloMroVHNdsYU8fqYvZA2Ty6rnKOUmQzHIACr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMGKmtopjdr6HwPxy8KtwD3u7BPbOI3FJg7oDO%2ByjKTWnok%2FWKjQg%2F5tWrSbCB2P816YTjzEmSox1X1iY35798fWkcT6bVHRzGsiBW9Dq2hjQTfHqNmb44gef9S0N82f7PlEjbrFbCV8FrryTa0w67CvAOjMHd2Qa4%2BQ28cndYZpg6CbWNmth4KuuqFJAfEPJT3Cp3GdskfuiAUmod76CMRSd7oxUZ%2FKOvRc9agClTEV%2Fkzu7Kxpq%2Bus7ho9SHDdyAUClfOzfwzxK0uHb7yA9ZPlKA%2BGfNWdCNEETZim%2FhWHfsKBDY9ffbXSP8ir2R5bJcS9ObSw22xynR5k%2BNpOH9b1%2BLPJUkKIDrQ%2FPmqe9gOZ2lEjCzcDa7f0eLCEFCG0UrBipOWAxNqChNxRCRCAEUdZBJISFnG8bbX5SyXWw95rDfDvKR1WViwkOVk8zUE42SOAF5OHZ49RXCMdK8Qek9skhpQEC7WoNNJEmNOV76hdE3NGt0GRdCtcc02DlpPnPFvoWAYGjZZVeQZsxHzfYExYQouoCAxNMXOyR9rgtsD957wvqJVN7ZkheuVcFFU%2B2DoyR1EWJShNplzcsyJA4JouJ3lTcsDBVOehFyyfw3404aPD35SXqEY1UkhYS5bYzo0P2mxMtdI%2BCmsX4w89iAwgY6pgEhD9mwBd9LFgq6wAPm3cuCAfTvKNo0%2B2STiYNQXfHZ8BiqgJyOJPcrkcB0IC0%2BtWs4kyZ5Fh4y5FVfrjH%2BvkWfpjJ86X7RMgwf0VLbpLRVKnVWAz%2BbVYb2dY0AcATQhFgXy229RXWe3xWBPSfxyMyLl4wHwTmppIbL%2Ff%2BbKzilKhZRugZJ8Hgcq%2B8q5CSDP3dUuwRebvQDj9Vf3DTYmPlCK1uKNZyt&X-Amz-Signature=7be128a6eb3948c6a2a0b56259f26ec0c1a8d3fce68f0cc691ed5e6381474a89&X-Amz-SignedHeaders=host&x-id=GetObject)

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
