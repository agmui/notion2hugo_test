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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N7QLIS4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuGIUNA7NrlJ8TtDneV63XU8sNdaEqK1OKD4u7nu0MAwIgewDv6logL%2FMIimQCzYcgtMjco3b8cbEmqTLBydSSad8qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFL2PkQVk7qFdUQK5CrcAyk072mjaZjKiwPh3Qj4yDMe%2FptIqyDj4CtBvmXpoEujONXTBEUJCHbHvsEu0X4EKpkTcxE69skiufKJcXYh5oUggW8jQclmHuXGxoW4vAP8wjtzVjc4Tqu4GFlKVJb72BDeyJAY%2Fz6DcouU1TZqdfhERoqNfef%2FsZbVvPMU8IgcQuf1PQEovlc9ryUVNLb%2BmtMWYACnpOFCCPjq5T6UK%2F0coPf9%2FtfcBSkU990ZY%2FjAi3kVtbiS5VP1Qf0tG3T8MRv57NgHLpbLn1EqsOuY3%2FdfhRKBad3rek3wFCXq076Uemjp8FFoN2eT2QZ8S4D1bGe3aUQWb8HrkVWSZAYWzGvVJB1uQ0T7zTrPt4uO4faBvC2HLxI6Bf9ONtSdwCc7QGDmQZKi4zg8RKM7sbZEioSCkwPCffGkJX2Km2VbkARqy1Mu4jd65joVCupfftfnfOD60miua8wpAVGHTIeooee7%2Bvqsh2a3nZ5KKb4fFzN01w%2F4ZMU4VcYO1B3DPkG0Cb9uSZvEoGgluV7gRbq%2FfSdKAOjEsxdy%2BliBu8aZTI4I54NVJMDkrh%2Bxkp3NwNMCKze3M3XDEjvwkomKWaIne3k2QrhQSADTgShaW3%2FEQiDW96nA%2BWg537hb982qMKfFu8MGOqUBKlufLGMTTG%2Fhw9VVrkMu21n6ZE5baD%2FOrsbQIIg9egdrjccCHjAbG5xAO157%2BcRZETK4KofdB%2BMU7cOA7IQ4iHt2zFFhsag7qicljQmXqKuoR81PkMH37o3ov7%2FekZuCyISa5J9%2FeTnh9TwXL7CxdQ3ZLCMy0vcFiBqPj6L9Bk1ajTkk2TPwjg%2BYU1nGojCa0HJzSj84DImfvcvKPPAWmlWBZWDc&X-Amz-Signature=96f457e3d63ec1ad5675731c5b9ef57a7edbce86b6ccd25faae17189bbfa981a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
