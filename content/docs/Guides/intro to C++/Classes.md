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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7PCQO7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMK7YbHubz3XWxdQmmHZduuocuAoo1giNcfKZ4rfN3cQIgRWo8rxTKnY8BlOulKE7G0CXGYiWRCdZVHGkEhvYbxSYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUzjwFHQo1pQrCZpSrcA09YN%2FI1p%2B5XiR8mRCIeDTzXuQ4MCSvF8AtPbl2ZPcVY4KOIAI27%2BZEZpMj9mGjt%2BfntWRQFOrbP%2BTdQC0xcbm35Q25oQYb0UrnjCndRE6rHTgEh0uXZ9b87oc2o0heQO7e0lS7rYeIEV8gGE%2B64aACjXJXujmzIeW%2BLqex%2FqIBHEfZAT3PjSQAw1IHZImizLx76sjEGbbqIg3Xs0NnzVfD%2Fhex9U9akm%2BAyapROBKZFxJe8CVNCW1WkrAoGrtwXyQNwShNsjOBPHUIaADJdmymtTPMlP%2F6q94Ab9sY5Dclgx6g6B4jnTQPRReJ5X1gMrybRqMUtK8EmmGAGWxA0sjqXwDDezZVeMcp1lghtuaB%2BtQvEnvTWNHhkRYxuKtLh%2Fq2ghvyTDAKPtzVJPpB6nT1HEDRsMuu7PG8EyQaPBnPahUNqdVzfbLV8tgDZR%2FmXqk27oZeeii45gblA%2B33YmNfFAV3L78jvGMnlqwucIFXkiwmqbQeAe1OuztoEiFlIsavpDw6pB4SrLZRu8jP4O6CCoUBrm9oV1pkyhJgs4EYRLRWUR3xwk0ZoyE27C9m%2F0VMPEOm1j8du5LzEKdHGVwBNdxGMSA2otbEEz3oN57oeoB5ee%2Bb4Kf%2FBCWsVMKSVsb0GOqUBo2i0YTk2VQWyXv2QexoGfDsE9Nu%2Bkln3RIND6YnhrJjLUH7RzI6itprBV3%2FMqPLxnQtyqOU2tgjmnypMQ%2BssD3lmJqyBzMLF2%2FoAdceAZ62g4OK8i16EKgWR70MrfLG08c2QcJBlx%2FiCY4KfM21BVgfGXGfeFUW7OUJIhWejyNHd2cR8QIReMuDldTRvPaKy%2FbjBs8B%2FCPjQj6axfc3k4lscH9R8&X-Amz-Signature=87503087dc80ef66ca23cf90fb962ddf45e91b4cf53eeea9447c37b35c0598fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
