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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3XTXSEH%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIDlRpdzZlgPLOTsg3E%2FwLUe0Up4ymuKBdL229LUjwqArAiEAzCvjBgv%2BCGpIBCMRFkG6IYPUihwS64aNvLKlTUVmEUcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLxcQXT%2FI1gATlJdbSrcA%2BoiEst%2B4Y32ALELUU5OXRYl4S%2BHxCIs036cLP254ZfrcvDbJ5hMzNZfLqHVD2O1UbA9QEHCV4BPuHIXzP5TDopFf7wnoDOrKz9CTwRWiIb6dEm7PaU3FAps20oytFofFtGdFDgNvJzG%2Fo3J7MonyvOgRy7K5%2F4exlWnP%2F3%2Fi4Xjmy7V5FmdHa0FbRQIfMhwYx%2BBfmBfKw65c9QG7bU44%2FAut15122QIH9Ov5tCK0sLDuqysTm2dk6kvi%2BjQhi418Sojb%2FQp0Rdyx8rsRpKqM%2BRw7dnHh3hA2lQAkO1SpwdPhKvEwoZRLbbJm12Ymou%2Fl15RO9OSi%2FHAtrZu5lFVIKamxjc8rw2lZbaSAwHpaXiRw%2BY4QyrlzoXSG7Kqlh%2B4utkkqxlbXtryjd1z7xkoSfJ0CweIa6OZg1bJH979urhDmoOkgngaq8UDC8FuNLBwFcbTx62L27SXlQ8CHxcDf%2B3HzTpIkAOnGDflCgdPQ%2Fc%2BgiaQrlWbqEqC3GFvcVbP3P%2FbCNDpnwCE2GIVa2PUzg8dxwkeJHEUXOv9EW2PPS7XwLEE2SRIl0WgAZMxsiHrOZv3bAw0hqWp3rvM6qU%2F3tmePeGath98JddSPttB%2FTUfYOFxLE%2BIie0%2FzzpAMMy93cMGOqUB1az%2BlJjDAHdyq%2BFiyBPgLjqC9YHZ5IiIqyfYhsOEvbgM3CiOXroX8kSdmhLYBGqE0zgGr5jQt5kKbyUFgTnVXfGDLv5HSW8FqwAAQmsvHvTwWelb5C07jq%2FEmIBcWY1tA0qpfxdOihp%2BPbdAqfkB9atael%2BI1fVMDVFiZiRkmy8W4UUARaProbXHfjqmHOu98jMVyBd5xHlfTypjfcgfbqIrKTUV&X-Amz-Signature=ad3d3d4ab2e61760709bf9f4f91dcc3a7018f3b2b985a3f02c6e28ca0ea21df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
