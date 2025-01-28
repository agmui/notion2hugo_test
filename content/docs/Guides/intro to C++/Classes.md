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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLH5V2DW%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDUVDm38j5CGPaPPreSNHz0FUDoSbEMXiIKPkf%2B%2F%2BVF9QIhAMkZIl4IzY43RJ%2BoHIvtKgoT8OTunnjvS7hQm0I2pOtAKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHsHjZ79aKxt81mroq3ANpBPCx2fTyGJLVeHriH%2Bf7uSi84z2IQA7KbU1jKL3JJvyNaOzkkiuzetF8IRsIy%2F2Xv6Y%2FBuxYB64oEL5SZWPbHfcfSglttdnc%2FEnAgxI8fJQsL2fYWPrRDD9NQs76VjkM%2FMjMbvXmoiFtLA3IfT5anIMd%2FZ4GpojnVDVE%2F%2FmiuH6CrGBF0lCQJJ7zdlUCI3C%2FTVPSsqziBefnXwAedPx1Xn2GtnQxenm9a66xAICFk7t%2BqCX5If4LhxUhJ4Q6K19Mcw0qJyuncigbtBuMWAMf9ihlkv57U%2BGrbZuX%2BRv%2FB6PRrDqfaezXKZt15DqClQKoXDmZDFtyIoh24eQOTPCAremehZVwK9I1b7wA85%2B1skBkDr%2BgxB%2Bmvh5ir4lOO6bowNph9vw5G8PXP4EyvFzLbLCSNo2rDrCuYQlTGOQYB4kJspwA51TrRTyD0ym7v1sR3BjKORcAdLqT%2BV7fzRWep08ktfauqZKJWbQ%2F%2BmVMM9wIQcvmd5j2HEotikyTG6895jVZ2bgJ8l2Ggstk8AzpvyTacZ4CWc3bjGPvL2710dl9IIsF%2Fnph6nV7OPMSqAcC93ZfRVk166apw%2FTjyJCCiXaJ0bhWUR%2BLYSKcMX8AawfFdPvs7ta7kZxqqDC0suW8BjqkAW%2FUv3gTf6f3fjX%2BqafJh7zs%2Bjvfg5pYxJ8D4oHxkWmms1MdjImE1NDtYzH1ihsKunf7Ow64loglqZBBqpRIouADx6RnQ5dXOBYFIuA6%2F0JyAApkLBlQsd5AvXxXalkLM5NBaQWlWBiDJYSfkecLSM6rYVeaWJQn2fuF691TgfrOOttC%2F47cEXKORGLiwK%2F0HclFiI%2B7Xhrq9FBTmZzE9CIy75YF&X-Amz-Signature=553bc5be36c3f9fc7ea5a09c0ba9066007ff32c2620bfefb0b21e354887f4d2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
