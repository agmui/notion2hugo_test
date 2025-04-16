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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHUVDN3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6jU%2Ft59%2F3vJWPyS4q5GXK1FOb0jDdrULeuvm4chnTvwIgd%2B1yElh4kmWMvbntT6tW%2FSMIdyypmC8E6x5CJxOEoowq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDHFz5gJMGlP5jFdWHSrcA3Ga3opd24IErVTjl%2B2BnkwaZTMOuBrP2u7LywU6pdPa3q%2FhUAlFd1sjlyzceGSEqltdvNi5qGexh6EGWF5DTEA1QHcAuiHmmPn3ALOo6cT%2BjNIvHAM5X4dSL%2BrWKa5jPpcBcgNojmVBMlnkDDxi9sSgOQ6VzsXngChuri%2BdEWdWHk8soK0faCZ2IEt7rXORhahN1MteHs6En5a2cI2WDud7Syv%2BQDjESpQxwtPSZ0aKYVSHVW4m%2FRL8o%2BIrZ%2F7Iy04xJQl%2Ba39YUw7qgqPy2sCOnEv8f1sNDjKE8sLViBJ1Oo%2F0rcqpfixrO%2BVRl3vK4SGaymdhw6J%2B2u%2FeqzR44BR9CWJFYjSyR%2FbQl2k624aF1UV9nzZZdOIwmdz238hIoe%2FZ%2FeMq7PGELrwpQ8MXyuw2ThYQCYFDnYxJbtJ0Yd%2FD1Dr2xgAb9rRkixdNQAlEIPEczfwv67%2F7N0QfyXhA0HG6YuKjWxN4J8u2HoaKmlZr87nvylM2lU%2FvMHWQIqm%2F9coHGshdqBl6lWwWviBDXR8FoyZdtTZhcJT5LQCWT9SrpvkDHebNZVRYVqBEesjvcYaTyshLKCr94D5r27EBSzgxEgLVy4dH%2BniAM0uShLrp6rHxhaHcCtYBZbX%2BMIO%2B%2FL8GOqUBFDbMwUQD0wWzEM7p%2FGAAV5eK%2BL87IYCrGlmrop%2FSzWdbD%2ByFLziqssmAfGQgDBVuJiuZDep3Vcrq8gyfKwSK3g4E2vo8vyFZQt%2B5GTsIHroIOzFuc8p6sfS2QF3o3JltHCY96ytrzdII3qf7HLykSNOrq404PI2Fns%2Fx%2BoKPRNIiJKcwZGQRhZvTFm0nRPKpnG1OhuOMXjTH08GLNaUFbubV%2FJC2&X-Amz-Signature=d438927a4b731cef77fa8af715af5fed36380d6b5641b3f471d0e2f96c168f2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
