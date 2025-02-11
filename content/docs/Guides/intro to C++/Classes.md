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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQIWAZF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FqyF5T6wtFqXuPuvACaFHW76ICZ%2FLPmmU5chJtcrnyAIgdTAERSl2yi1OMzZIb2rQdq6YzEm%2BRuWL%2BE5mDEkAFyUqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMW0%2BoXJ7WomItakircA%2B61dXfkkTy76epqI6W5tq807X9zxa9vk4766ofy0pCZFKKOeYne72%2FcmE4eXv6ShVAmLK9M3%2FserK0q2zwQf4E1IYQeHU9zjc6y0fYvUXTMuqMjbEBqxOpneXJMgk1jrfUd0l5Gt4SUCe0%2FpdlBAuQa0Px4n%2Fpi3BjzlDyH%2FkgKIWFyXW8KUhm7K%2Feh0GdJvCXNudbWidNlGpR95oZiyf1%2Fd3OsIp5wYBUUIuQEXsP5hTuLlcOgQYTu%2BplD1ualJnDJBeXiDVeSgAiE4%2Bura68gOrln65JWP0qmsmrvdP6GTzLv3bPogyziohYYnhg1ta%2F3uZ962UyPs%2BVbgH2ierVxc%2BxaHV6LceBqk%2BLbzoghV0ukaFPTU0RAnZ5k0R9BSbcHPilZw%2Fo9LAWFGWz7q9ByKAWbNBsRC0SwL8ROEBMBnjyjfzUsVzKjLVsih0KQUFm2khyNyyA5oUgbTaWunc8d7KyYhyBkicl%2Fx4cP88RW7SvFDgCPtPbqzm3Qmx2ZaK218gprIc9upkRdeU%2F3CL%2BAjJBVp6aZreW%2BbW8pdLl%2F5QLZh96LzkmU27oTX2sXBBR3KTunaVq9R06g5Elwfn11hRwhmBAJcKoCmV3blaFer%2FQ7wRF4znhxi%2Fv1MLfIrr0GOqUBiiXR0iicKtnaR1nuI5v3pOf7TbvtTFlamET%2BbKenGUpjLcEgz9DPEA%2Fh2JFGBBk6i1myRse%2FSpQY0MF4w3W3FeM4vgHoL7ifoT1pBF4EmBLpkv5gfDq54qrJzuNEdQwu64clZY9Cnd6pr569kdLy3Q5qkfAxhgMh8isG1XvJOBWTPYLoYQTqL%2BXrr%2Bq8Uwasjl3EN7aiRfQ1NIBU8ZWWTIaCaFVI&X-Amz-Signature=a3458b3f774c894d2f74c7d458dd24f343200be7e1ebece03a18748a574575a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
