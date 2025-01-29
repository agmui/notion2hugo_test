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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHJHJLS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU3hCgTSTOLZGwSu9QTrSR9skXhKed5Fg1Qfrhxe2fdAIhAKSuHUVaUVmoB7ifTcAim6hjYwoZ0uuHuCR2MeH2SaPPKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx48CQHepkkObl%2By8Qq3AOXobh8uP94l0xe3riIroR8MfacfeYQycX5ryncDEjsfHllYxhBbojndT8E5CYcFasRHmEfpqU3eHyUtMOOcmwIPb0%2F8dMPH3cgVTBgCdOaAbHnEGYKyQ1ZdjaOPWTqcPRN%2Fx7MJT%2Fd46OChzQblrIT5YCizvdRI07z2sS3wY3hiWBfcQxK9olcFA%2BbcQ6pZqAfeFUCMrA73Hkn7T83covCobtBXHnBPgH3IcRBerA%2BXn6MUqjd9skID833DuuAw4IqrpV%2BOWj%2FMIx1YXZKR%2BtuSi%2BcpV4eWumteZ3mYP%2BqFUMvDz4jK4KGb6tN8iIHNffN4TPbuBeE2E2Io4M9%2FBRxTwQUqNHGCL9d8sJAf%2FYFsufmxDuF788jJKS7xTkFKcHRsJ4KxcI0CK8iq5%2FAJsGJ2APRsOyZmQUW%2BwlqCqlWXFb5MsmWfFc9GtOfp5LjoG9aUXCxs0HBZyuDNzu9D2zgpfHh37Qya9xBZ%2B0ptsHh475CV2UJ12lwWc0DTjNRuWCJfg0iuvGiGu9pIrYWHVIE2GK4deLNaGvSH5zBTqIzPglPwrYv1aAXHKPBwEukxOzQbUWg88bdEaVhKK%2BvuqKABcWBQ%2BJIiDRTiz0invfD1cBrRvwrmnMjtfaHwTDT5ee8BjqkAWpu7SKROi%2BHA6y6cDd1RcV8DtKLRnukqXaqeCy9DavjTY2edB2lqy1OkYihCa9zh6q5jmYbu9Y669nZUNOTylJSPcmOb2YHz2G7T%2FiX7s3sruzvOnvilmoEGCJp0nRmUmaRiGO25eJ%2FE69FrcId3%2FbMGujEUiPxnOGi5GGtVjlt6KA%2BCy3BAqXjBYHJabxoeHrLDOYeN69b2x7fcumKvXX%2F41YS&X-Amz-Signature=a3c7c71a92fa483b6b0fb6317b1416b0ab2cf200df7c7e66d9a2733ea07dd2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
