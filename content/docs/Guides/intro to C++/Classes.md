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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFIWWSKA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQChP%2ByXmiWpTcUBiE2yBcDdoWBRqsTUuvHCcGenpLtvbQIgEW4BBlYrEKJgpDVuVAKIryuNaG3K6sRtikbYf3cDa9kqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq1hGRLVSt9%2BbOaOircAxoED%2FeazjEu%2FdCY5PiJdi7tlUYUHH3APY6hDCEUqUUw8Bx%2FH9KyrlremJwIrOnD91nX37%2F5FM5qg3t5tE%2BZVr72uWBHfAKAkEKPI6FKv415ZAE0XH6vwNOvTnwu2OOUB8zLgkIf9h6Vs8QEhlJGNjZ0HEfQF7xKVLtZ4%2FoWNKtsfV5xHBPNrvtLz6uX5wmp%2FcuKN0ncMUpggmEybz2c8SIYekGlh68Jz14LUQ0FrJvwn8SDdkZG97KwsZ2cbcagM4Veegq%2BLsgTwoc7uBv73M6%2Fc6Kx33gMO%2BDekIO9Zbi68p7YrFeZOABIEDtzOZ7kfG5JB%2F2y9DIT4zl%2BMezYAHQ7VA%2FWfNM0Bf9pHjWOninYenmHn980MjUh6qGLnf%2FgmbRh1pnpbO9ipeVRRO2j65zecux7SO2wkP%2Faj5uD2PsmJfpxd8M1xfgudDjlsSr1NKFF%2BWhvFN9khxRibsiVgejwlreVrCYvJUjDEUKh%2BvvmOEjQKl0KAyrx3msGQg76eLbHiwK%2FPM8%2B526CSV5CU1DwuDyMwTU0FWh47bgZ%2FgBB1iRzO9tbRYYYVyzIgbEhtpb2XsnJ%2FMkM%2BSWq1TwVNuXEGjYIlHmXugu4K1CD1BwW5ZU5N8Wl8LXrFOpdMLLAk8AGOqUBFiwdKviOE7Kt8Y09LLBbUnEtXtBgi60PKVG8cr7%2BhaTrz55kmXeR4ffeaGQ4W70yW%2BNzFHh4w9lyg6bi%2BeQdzHZ1QLHxtYX%2FkdHbd5giGnI4E6xImEPtOYsqP3WSSMyyNrfIf9Sum9rH961rfuAWdR%2FZl8hfAm%2FXZ9DVsII5Mv54PkbkJ5MRhfcZhYuTWQhTQhkcqoplOd8rIRHWi2YswMZWdIZi&X-Amz-Signature=ae5635c223df0c3ffa5b2a4e877c3b77b3a9cd396b2ad1f390ba9b05938a7c62&X-Amz-SignedHeaders=host&x-id=GetObject)

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
