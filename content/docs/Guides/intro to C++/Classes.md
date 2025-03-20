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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VBWGXJZ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFXicCMbcChCMRA9jPjnfzWlK86u%2F1SOzZ4Tv7maIE9AAiEAooF%2BhROswNMdF39v%2F%2FXIcqBISiqSd8mBgWYIgliqabAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZZKqzFyIerYzxDJSrcA9hElnAE4hUgk5Q%2BkYr2V3a9%2BIDayCz2gXyryRehkFh1OaeAcfVYLlLV%2Bxw%2FRUtqUMdHPJKthKZpiNu%2ByAsLCL%2BO9mgLg8oYW0YimQKll6OCO%2Fhv5B9ynr7vu7H%2FYcCBvva7DgGLnvysPhlgrq1sDZeD8gqIqMG1xROpIf1VEzrI%2FH5xd%2BKMGxdC7NX8A%2FNeprlFdNRJKvyaZcY4Vt4y2ysxjPFTDDcUEUctzEzAqjMPBfKhdNc5vBQRjmkTH1uz2PJXwiCRTN%2BgFin9wG1LF%2BhtUmLoE6choAL7Z7P06%2Fr%2FUQRnBVoQToBxvh%2BHG0JGD4g8jjEG8eBoFia7KBIFpOHUolWZIBuaKOCDs1atjNvzfz1I3fQ57T3GiLfD%2Bhf91bxdcdfGldbOXp0NsU7hjEpPKMkN3ghoGdb7O2%2FntqxLf0E890oJX7rdfEXoUkrRa%2B29SaK5qx1m4KyuCghSXBfblwwW9IyNqHCYUoGMcMzb6yahpjSSX79Wvq8GoK3kU9bZjOrqkePS37VdZhRjnZl02tPz1ElzOroOyQ2sluDFzTGEAjSyYz%2BLGQjavBX02NCa%2F%2Fplx4TSzD1Ufjf8SLwS9jh9r0kL4c%2Bu%2FV%2BapNBjFLAfp%2B%2F%2Bms3yliy4MKuH8r4GOqUBl5dVLQKY30Rf9pMRHAcq5Iz3fTOh4LTEX9n3ga%2BdTvOxhwwxjbbF1kWq%2B5zZFVQbLkBYbFsmGooT3g%2Fj9IBvb6HW%2FtcXxRkI01QjwCPPCAfzC1Cg16UAIB7vgGsb6R6%2BPBlmWPeL%2BsZbWslSjJKAKDGDPUyzoii7XsjpCQ4ZkECrx2AU%2F%2BFPz11BNOJLkNgKN3TZ0C%2FM68SSyJn7wYCzR47tpk42&X-Amz-Signature=c53cfbc1a953d35b1989b6e0f992cca33ba8b30a9cd06a8410e09fd9728d1003&X-Amz-SignedHeaders=host&x-id=GetObject)

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
