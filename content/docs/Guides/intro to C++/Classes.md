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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MFIOBS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDpSvj7JDZKE9dWoNC84HfY3oZXGiH26JEtprgvPTJd6QIgbauJLsL0ZOY9rwzciKhj0%2B8I%2FU1hjaxDrHg5eY8BttUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFCKOGAkR0EWieeSLircAxw3bXaL0%2BHq2SegPAW8NpPfQIj%2BYynul7ETlfSxpfyg0BT7Yea5AjQpb6bK5Kx%2F%2BPpR6WV2EKvgaP5rT8bXnc98kIT80vZgbaiyJpuc7eUV%2BbGZoWmCtTEZscLeFlz24e2CUj%2BRJgWsIevP19ZOlWpb6T63j8tpTmB0h7EkBoKHqc%2BEalc2pAPyZFmJK8nImwaf6MJJpQr74y7%2FqpeConRZByFTAAf9puVSIIOoJTLfW0%2BgFlP7S6S6gVgUL8lCLX8s31OQUXNf1ANbC%2BFmX8%2FOswsMf2H3Fzn88gZO4DYI3pAysvLWqiaVgInIbijhD%2FHi2nrsx7TPPwoCUAj%2BHObKwLWqQfEMfLmtQ%2F4E1%2BwLn4Iuul7WkXCaiJrdyJmrGZ6WLd0TNIHb1z2ThwF3kSTCWd2vFWhdhQsBbbGdPzF763Pt4EdmPQfCjJWk%2B2Wfy3hK2m%2BPXg7K1lYkWBQRGmN09P9tnL1i3Jrop%2BiBeK%2FqPIRX7nXLML7naGDrwJ7glufg%2F5xyPqOaxN9fgRT9cLoDn3aIOoQUuH8%2BMnIruipAH8wUCU8xxMFtd0crJ0yj4GK0Hi1o7LDLuTVY7z0%2B7zh4COedDEzv8G11%2BVi5l2%2FLHRRkGm3nZITzApxQML7u4cMGOqUBoDsw%2BFLTuXcGyrGD5PT5gzrNqT0W5QsDwHA%2BnBonQO6G6yKyRd7gJTkCWfqMvYQTnRdUdg03DWzQWHfarBMTohBC2lbKGTYMcdhQo6gr9mBgqCOyL%2BZ58AaTKefX9je%2FDhny5XOQeYq0cMKFliuhcJ8D%2FaVOHMONVjflwpTh6u5%2F8N%2FzQ%2Bt6VqQHsCYUajtsxJRhBVTbg8s5ZR7OknDiiLcFBChb&X-Amz-Signature=aa49533470bf5f0389c81c8a48e47da97f0e13e23252be384a8dfa490b03ed21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
