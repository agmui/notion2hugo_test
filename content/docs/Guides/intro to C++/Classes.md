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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EE65KV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGatyMWGtR0yTeDgKD10jgCxFkf9ANO2uvSilRaZj2VwIgEGHmtxJEhVGRoss%2B9uLPu%2BM8uRTBindnB30IZ83eAhQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGE8ghP%2F6K8%2FfVDTaircA2zndvfgQr571QGsSZYC1VCNqxWrYnJYfWD09u9mDH8MLg4AW4olTYCyRf7NeP5UGwnaadiLhnE9C0uumFCtAvThjcKgrQNLKIkFfm6SUCnlVYF0aFS8wvOPlC4G7vGI4gqmXWNtxg08dk%2BkqAWbvdPbDRlLJrHzWo374m0goTwW1qZ5%2BgaJX8AWt9cIpgYO1Kizc9OsyUeh8lq41Xp8GzlGQhi8tIlT7j1Pu%2Bh%2BLdRze8PbJDgCre3ezWvMVBWMlxu%2BkqQGCQ4gU0Tn20uypuCtTrMj5XizQi0tg0%2Fx2nkwscxjUJUXFoTLt%2BDK4QT6VYWQhhLghvWuYgStJg6zaiJOyn4eYYAPviK7gF%2Bvijj1tOjEQHU5edQYBb7k4FjiDle5BJWqmQGnYqXqmvVDNCShg1evWstKBH8F0CAlxvz81ml37Qz6dkaTllXsVpWH9B691cqiAAgpl179PthF7IedGnB%2FdKBmPUck97lAPD2V9qIx%2Fk4hSVFv3iaRNGi3W%2FcyQ5A5xqM0byebMpUUCpVABH6XeoRF1d%2FZ%2FSJ6ISqLCkklcLS1nKFLQM2RxpWJpJYPc786wG%2BVqmrQE%2BzbdjYQ8k7OFnWDDF9FCnvNcHWFbBFRKW%2FQE%2B6jTSmaMIzJisAGOqUBHWI7agJWSJY7tC21y4eAz5CMEkP8uIbsYseN7Js1tsx31V%2F%2FGzeInBIGf3LITkynJPt1r1LpVF%2B0Y8Ei5rBIJ0LCm673Igumcu61Onx7jitE7qBwHs3sSxK%2FTsEMeJT2n0OvYS0Z3qLRJDv9yGGAEDIxrac9%2Bf%2B1dbw3tGmsudJB964ZUpSL8QLBOHKhYxx1ExU3QTPeVrjFiCTf43ajF3HPvC9g&X-Amz-Signature=aea9ce3360d39776d6727dbf88c722208047490c451d7c01ed80f9f0cafe1209&X-Amz-SignedHeaders=host&x-id=GetObject)

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
