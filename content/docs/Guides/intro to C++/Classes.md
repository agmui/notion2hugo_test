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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3VIJRYT%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUzfQT1QswgGWvXhS922rzQ6anjssAdMONVfHzPh2kAQIgSR43F1zrJ0qM5NCqsDn3jDWPqKxJubJcV5555%2Fb7ZooqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxuv2SrrOwibOGIoSrcAyHS%2Bwd3IeNMdc4nevFU4jwd78sQN%2BKJX%2BEJ1vx8lB9ImY5wTqFRp6r6oubC5xFsMd6dEn7b2KerCd4FhMcSKxWeiaN42A08lVkwJZIS3hSh0lW9QHOON0Zpqzio5Ilwd7x%2FpCiGE8G%2Bsu9VUe%2B7qoIoMMrYxqxdAskiHSU2GO82ya4oDThXT4mgcvIWm31v0ao5kkC8cjRvQzp39nfJlFpWPyKhwt7dco99Nn4KsDqNPWcFOIdqG7LKh9yYmSAdYzrR1P1zOopZhE5grTWOiS1hG4p5%2BwbwAmnndWeZL0O4kMVGS7pQWTT5xQv4GsfHqeOsadAU%2FbLg4bPEV35MGgRB3CjViEbVu%2Bma2RIKWmoGUA%2BSb3VTaPDUez7ZJC%2BqGuaLgwZCUgYAKM4Er4d7dqwFrtIO3lGOr6jTb%2FtcV%2BvI%2BaBUAbLhrIQe1LAnbFijIL7MpIrnOPwPVv2tlUoi8WjJqtvVDEzUS2pwf4Zm8eCtOd49QgBL1nBN5kQ4CD98rOWqc8%2BfHxr8%2B5pjjW4qbK8UK23%2FFsGMTBBTMIDOC2Id3w1nr3QLQzFTvIAwrp734DNiStKzxYDb%2FOqrkV3YjsVh4wwacTDZCGOLtIggx8Q4mhTpXov3q7kvJqBvMNO0zsIGOqUB6dAKCTeQKR1bVJRNQE9arFNser7VYPGW1AJQmyfZ%2FT8cUL7jeJUxOMH%2FqP60bG8mCWsFFSAL98SI3cwdGr5X4CqjCSzmVXDoKcTUdpm55EldEKSBZHL2Ggx%2BSUYLLmTxhJ%2BsP3IPAn%2FvWnPOZxxi3UdNJFTtNQk2GJsfE%2FLfjulym8t%2FR%2BpdolEdR%2Fv%2BI2qYYyQnkF09%2BrbmCLsV9u0TZj9G8Xja&X-Amz-Signature=ced3bb09167a58ea6cfe19aa400075e80e204dd9f3c19ab357d51f2875d7d4a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
