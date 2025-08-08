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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T7FMZTE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCH1XEeBF6urrmpsFTWWbKUdJqLoAGigYBJtCMf5FfrskCIQCC0CufCVIhrnEU9cS%2BDF1t%2BPhsNCHQnKvZxiECg3slgiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9aW%2FczMz4MW7pX0XKtwD2cttAGWUgQqOEBu%2Fe4Af%2FyTbim4EcizdAkcKPct6VRFLeKOkj%2FnchKicKWnvXa7BzHyjycZfId%2Ftev42zVugXBV6Kg2lStQRAL4J4IeioYwY425vBgV0D%2BPNC0oQ%2BVnSkH8z9kc1wxrCJ2SBwgbcoXp%2FPr9K%2FnoxOXaa1gUPiG5wuSg7H7C1ZVeEOmnnb7WXdtaDZ9K6MULGDg1NBmtp%2FD%2FwwSScsDZ3MdyteRYnHVe%2FHy9sjtNibm08d9qmnS3xu7aVFHPXiocXrTBMaR16r8lV7wwvKd19rq9WBxRAjFFOEx3EAg98HZsnKSrVOgJL0ftWf5gi4VC09bCa%2FxFiFMjwpCpOM4TFht4cl0qcF2Zz4gTaRm4Wt3BZu9nSnvxys6OyPMvajUL0axsq3PqFCgamb%2BOoBqdSzqampzmiDit8oB1mtGeEgKGzfLFjxOLrmpYeomkiw43OaqZrxS6SaB5UbUBPLFkSVRGyl94yOttPTrBAE2%2B2UqsKNFd%2FSZNkx4P7NzkfrLGG5Ogvmsl2EnLOLRQBw6ZQ6DRWr6rnKooxaJBc%2Ft%2B59oVSxIpWbvc78KnvEkLD%2FkdD5aEF2g8CpcM4ns%2FgbB9oPVr%2BPj1ydVqtETQnKY2hJeJc37Aw7tLVxAY6pgGWmhLET%2BJiyiSz%2FVeU0QrpmxRBXDGyfTzDvVVhT4JJAA3H312weFt930%2FbDjdcKsl%2Fj8EtMYF38M4A6zqziu%2F0%2FzMfALNNUiMWHI0P7aEzHuz4qEkRLUjpGZk0w1P%2FLfG4qZVfdv3iomZKbjlczrSqAVvvAxsTzFNnmC6XP9RJNZ9iKJJgla0%2BCCEpVLSe4sttaUjp0eHznO%2FEVfFQKJsG5BLjaa%2BN&X-Amz-Signature=c1705edffb1860fec21ce4a8a22b55334a8fcb43f7e18c35da8014954d8f7ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
