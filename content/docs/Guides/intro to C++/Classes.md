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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJEBKL42%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICe4y6P0UWL%2FYKz4p6w39HGbY6EAfLPFUf%2BnZ2jVVn2bAiEAoDZV%2BPZnnfIQ6I4WvB1pm8nh6cdHkdUrcI1AuhPVQGYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNHNUcmn6UoYJIrQjircA93mPqLYGANoDpCBn5JdxYjkIJKOLA6m44P9ZveV7GScWaTNf0G6kt35aCPT9ftqrATFFxaRfTpzo1P%2FZiYCbCT4Xuylm91HgWSa53tSVkPYCiyAvTlYjdu4NNzgcd1zOIGi0Tr68gDerNXxCAEhnyKQPhdZgj%2Fqq9f%2FZ%2F28YF9SV3lOg%2BDZrSLkMhVLDL9%2BikvDrnXyhjxIG%2BT%2B1%2FSHsW%2F%2FsN55ipSpPRVbGTHoYSTTRngv8Zg7c7MaGkGa%2FC7i7MwSV4Y3vLLaxpEc8t0DyOBgmBDLJQ%2FRpruKwE0cY1VIjJM2ilZL%2BkNvl74YaAzg6oA4yZ%2FATuIXfXov221%2BnOdH10H6QJ96oZS%2Fxn2O8IUxNlFYiDpgjoOtOYF4B5SAJOXpzksHyvGbWJvRLp%2FyR51WAgmOpU4RWo1YE3%2BjLf07hm6Se1JivNc9UA92T9WgpAr%2FKQxQekPnKYMdADXhF4qSh72Vd5NyvdXteI2NEmIalc%2FN7nw%2Fjy5CDUEDo%2FL1CIDf2FD6S4KaPE5C1VnrhXb1Dk3kbu8Py86aEi0CvxkSJ%2BLpxvRF0TQjshX7v0N6HWAd4buLpWBp7KXI92Udds3pGconDsbtaq2rz2pELok3XreOH5v2fDFAkGbIMMuw9sQGOqUB4pwps8OAjUCkreRWKYLfOAGh43G9u%2F4zYHadFSyEr3BCW7zZnGUD%2F130wV%2BV9trSHCtkubt%2Fxc54YR%2FjwtcH4yzMilWAP%2FniI%2F4hcu2gS7k41byOeGkt6dlZsUz4Ny4X1q%2B94yEzBGenqU7zeHJxhG3qpf4QivDpT0%2BiGRd7J9R73WqMWQDFvIjEWGaHQMNO26fDsQAnE%2Fw52QEZJajC6Hv5HJvk&X-Amz-Signature=d2690c29549121b9dc349f10dccd28f076fc0d558b9e081bdeacb691ea2ea5f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
