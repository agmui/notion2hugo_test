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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCQBHK72%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFVS%2BSjJxurW%2F7QCfGGFWZpZuQ1Zks00pWalJJQomAQqAiEAgVVoTd5PTOBSUkHVpSDut06QUll1LUk99BJrE7fUtm8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFdafmIlc%2BtYLQIaFCrcAzPbh2aI7jbyyetHvXbL0kDM63a7%2BsQzCBspl63M47upin9QGGmE3zVKT5NtYOdsxxjnLebAaWuPDMxfJHTN84CAxDu8JiNHgipLkRuG3sodqvsFn6KMOJ0YG5EN1wMs%2BcGdtUaj%2BpCbSDMhyhw5xGMG3LG2ey6F3m18iH%2F8%2B%2F7%2FPjclBoM08KcGfxxJ0fKCj7ExZdFkHGG%2FcTZBAuhDTVcZOkmE%2BbnUJHPJOTZLOKdZq%2Fs2pWdR%2FV41LO44YccGB9wkEJy9BjZon%2Bc21kpGkEPTMYQospd6yppXLz6I1By4mkVJEOlrcsn9%2Bzm0S7zhk2SKbCpeTTICMtBv9weAJM%2Fs2WJYMM9OGJpdDViPcR3AeIfw6Eq%2BE8e9F2zeuQe4BfoFCjoMxerDvzI2FixItIPhCqAPL98p%2FMyMQ%2Ff1uXTWyJA1R89kI5KRtR8ksdPND7WRoSl1j%2BymPwzUvEkEHz2R6leaw1LctLUoP2yGp7Jb1Uk%2F35jdIMc%2FBSTqRqUgtk9P1nKE6u%2BZPkiBFkEx3XV02cXg5lrU9LSFmkgsuDUnrAqMJzh8ZzLD1NQIgsxFPSvC6oJZJA%2B%2Fupj2V3El1jbc56PHT%2F%2BwnVWtet3vlvo6Zxp0ZYpFPjknS%2BFYMM28%2Bb0GOqUBNBDTUcGQueR3ZdO7WTcZ3TJ9TEUN38RqyGlsR35zsR4r5MU8fhQksmJ%2BtGE2QJCQMCtrQreiAJ%2FjHmBmnIn8ct8BfwUxrS14E4OlAbnoEJarPbYcgCT4oSqxF9zdgbCuhg%2Bz6prRRo10dzYyHiWy61iyUP5LhAKTv09WqD0Mt6P4K8w%2FfS1rKsAhGBbGDBMUL9Xem7C%2FhOueEmlo1iP5AhMazM6%2B&X-Amz-Signature=dc15b471b237cf669687da7655ce559052da590e5d24802a6b6276af6d888c83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
