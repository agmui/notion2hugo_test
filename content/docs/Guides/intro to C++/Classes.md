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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2PRICQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIG4FGpXum6eQg9so21tNtBKSRSt1YvLTmpdU9nmCYC%2BcAiEAvFU7a9dy5ZaO4shheW%2FwpHxFBEihZXJXPriTvR%2BKBsIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtTo4Dms%2FHa%2Bgl7OircAyvD05yTF7nLQST2I7fX1ZF5r5RNjGxy3lvPQ6cokoDfU3Ie4SkbBBvJdHTnC8Kmu8XuLn%2BLVKfkc%2FyUPGRGjHGx%2BdRIUxBTDuulWaGZkz6uGQTCV9i2wor%2FfKfVTBH1pI3FEiQ6SYrMWj4eHpKjuu0cw9qwJQv1FZSLAsk3kmV85Dnyri%2Fck19RNVHyAOY7Slzqdn6PoSQmBWKw5YQONUvv3l6qJOfcNtZA7Qu9QcE4ClTm2z6M7Z6QsRo7WGA5pQa5UL7ydkA24FsNS2nmDb9DVo5bQlIaejxBaTL7%2B6vQYhDOuQMQaGVyzIkcAhDunZTRu6EMyp1vYRrAMvr2fkHYZmcfAqExVHSKq1sW77QxwgFYmZQRQ%2FEE9XR4%2BObl8xnBlkF5t%2FvnEybUl4dws5%2FANWqZnXJFwLYespsMD92Pv0V8lJkK%2FVeCSr977wEDrbCMUwQ%2Fw2Eld4cRJz9%2B28UmrOAiZJd03cByWihcrDa%2FsEb0Hs6qzH%2B8cDqTXWWg4y5a6ayLTdZj7lmNYtd27qVbE4k9cxVFUrZJgVFE0ndm6%2F1ZrMjVmvIDUNRF3hnzJMIgOGh6fEOSNGTamksx78D0jCxLS%2FmumlEnwtevJ5VwK6zg61mZ0NcAXDGUMI%2FTmsAGOqUBrInswF1AOHPJeuUdBC08jXa%2FsdEEEHtT07I%2F4y%2Fg%2FC9JQ6KUnbaazriG5R9mjepzfMe5BI3XTwGfMmtViTOkbvInF39iWKYRwBU%2BcPtRyeeNPxi20q7WkZqtXBYusyPFdJP%2BzrnuSBz97i%2FOTRyPqLTq6oxAb7qVxlJv1dHtrOZqWipFKJKzi9BjTULHdHHBqsXi8moXFDZNp15UBYyflpJdIqaX&X-Amz-Signature=0b6682f1501067c8b3e3687d9039f4fd922b445baa001ef17332374402d26aff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
