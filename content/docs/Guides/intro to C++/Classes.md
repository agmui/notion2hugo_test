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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CHRQWZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQC%2BU6v5jLP2aVB57K4qwGHwLcm35Ox1dkhkvHJbew3EtwIgUst32SGhwzwxvK8rOu0dkdw8VbZV963dCw%2FJI44hPTsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLS8wK3LgjVEJg6IyrcA5kkN%2F41byyMOf5NUD4I9PvJ%2F%2B6gvrKM9%2Bq0y1h9SFI4tpcUAqZ%2FAMj627FSjN%2FWqsWLiu9UhrQUDvCxcDJqWD88%2FbTVCF4g8bgd%2FHggPtn%2Fq52TSZi%2FFFhkkDLkfAXurP06v%2Btwi9gtMAKbJQ39m8l%2FBZ7TIljHodw20HxPY%2FFoh7oH13bz%2BgbkK44qVTWftFe78LyjYk6nZygDehg%2BoNs7kNuMbTlVRonjLaWQE3HgEF3jfFFVimTnNMRCxzqTGUcXJNd4sbuALpPInZYnBpbQbO%2BogNW2QAkdPodqcJrg6pgGpJjNP99ZtlyY7nXWQylx%2Fp5S%2FaRx%2FiwxePZm3ukmiphDQCNlxMttzhpp9%2FODfMvAfs6Pit%2BgVReciBHCa6mW%2F94ESz3tfRQoUJ5LAF2WFetKpcmtzPT2OeWS0kNCn5EqEsnvOcrEDm%2BuYKSjndsMrJuAlIF0zSIKX4oTFV%2F9ZSD3h29Cax8zcdz9yP5qvoNqUrUESHysrJ%2FnOR0baoLdC7upJZcKFz%2BCrxfttOUViuPxPQza7tQFLXwetBUOPrPeJwCMaZl8xK4Y01Ee7EunF%2FBEKNMz5nbnftRY5vKyt%2BBQqXT7d0aV5YE2FwkI1KgI8s20yOnG%2BG%2FFMNLLo8QGOqUBnmzEiBrT5tPA4y89U0Pkw3PSiqWLvIbqpNmRFZxvMC2bhS6g5xC5lfKpVHXmRYkRzaWsJw9yYE9vsCHQXwmaE2%2FTAiQOU3SXuug9LEBoHiCc33P8%2Bcw7j0RucgvKo6n9nfAizmsLj4wOL7nZbAmdj25PdXtTLfJBS6CgvBuUw0geJZqOp22Bgnhx67uYLxiHrVTfex2hm635MjfaFwXu2Z8jFZ06&X-Amz-Signature=12048866c5f221a2cf39b49b515de846faa71bf9a5f15aa0d7ef02115c879288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
