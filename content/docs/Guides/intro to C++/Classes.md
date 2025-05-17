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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVEXH5MM%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3rEpNmPVUB%2BZFzGfDGEtYUTYVdJiBmROXj2HkHN55FAiEAmimTRmHVXEAfrPCUQDRnMMtNd4FPXexBCO40Frc%2Fs6Yq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAcZtdbafIg%2Btoa%2F5SrcA3oYef7%2FXF16tb2YsvKO2uMlcopnQf1OQMe0GrmrhQC%2F%2BT6qFcqt1uFhk5v0FJPYVo1HOUyyAQzQNocmzuZwcS6UwcnwdRZge1dcCR6n4GLLW0lxebqZ5JZoKQwBMuR7RpZ6EKfHsW1RmU6nvzP26ohdv2nAneInhBXonYCAAIjOm8%2B6vYsP%2FVMgUMfW0%2F%2FTAxzLtJ6bzLlyTFllh2DjF7RMTiBeDINhSEofSVw01cwRnuH4waf67BoJGyr9cDuzphHxAgO5NJifGQKf7iL7GfQGescjH5Vn7sFADt2coFenc7PIGQDdkjNKsGaR08M61Qv4MGT26uOhiJ561VK%2FsQCc%2FiGUjWddHaPZPl1YJsrLRCdU48d8DhR6OSvrKzPP7epJhba8UjKKQ6C80RbkV9OHVTsDSqhDqPNwISieXQNTRprOCziCTmJQkv1fafo9L0AvB%2FhUKPBxwJDDKseF%2BYRMT6F69Qc72ijv3Tp3%2FNQI0qM0L8GyaJieNBH%2FiFt9RAaoYl3%2Fb2wRMoxCvD%2BUoLIrAIkTMOtYie7i8kbB4fai3YjHsNLhNbR1OmcBSuR%2BLFg953GAZgx%2FV7FKdbxzwHtHsJ%2FlQCOuwlSNMHhwwvacmSYgpJ%2FN6ZuVcPwAMP%2FgoMEGOqUBpRwl5g1tCnkZXcq1x1MORgnsKq0rZBMlPkkxU0vWDGsTRlUU5h63PhnH8D1ORdU7v2K1U5E74glH%2B%2Bt7tcLDoKRmYpUY2N8zoC3t1vgI72E0VzWMccFBNaGE8rMIBesbNryHJ%2FDTZyAd4fIUPu%2BxVDN6C7SSnd2WK5v6CP9Gjzcg8qaTppT4mr8e9jCxDTdzuQKxPAdC6t74QB9yjP0k7OaUL9kK&X-Amz-Signature=d4ed0e95c5172012f75b9600f2f624ff32fe0ad64b85b9474e806cbdcb6718d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
