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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2ZWWJF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtMr%2BlScYt8Kzx3fnOB6Zc7tEOuKc3EWqVLaQg6FSUtgIgSwwkM6n9Ga9qnsVhQYFEfDuDg%2BNKwtQ7dht3%2B8b6XUoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFUPQsxiP9xplFRRSrcA9T4aPnkLAl2Z4dplKbQVATVgITRasnI3eUt5CoP3YkBIH0AqcqxcQqhkAnWd4q%2F29jJow926EKJkB6p8pSGuThNEDx2BISCijxSnoiTWKKMIMVlMLzoFJ5sa%2BV9BJPhW%2BeJ5xLbROfOoLsyUT1NWtOL6WNJQ3MlrSOIWlA7m9CqZoJFBZ93BUnG7ixeB9kUwa%2B258WJXZJjbCuRFBTrypmDxBd4wCiuvkjmuqhI15Y0WH7zmzV%2FBN3pT9DuDISHDmSGDsX5e3bNNzkQktxC1AA84NXmmevZt5IyQPh5KSsLpySpfT2njGmdna66hnmZdEipfTDz8rVAjp1c8AUrcfjmW8MMC4ovyHSGJ8cbLhCbvuhLwASu3BA4d%2BZIhVWzopQ2w2fYjUkLebKIczsDIJQAsJ61EvWoTQyLOcshWSxl2eOZ0inZ1L9Mc3Z5I23VRgIm%2FTDOZdS6vkKPGcblyL4U1j6ONsu%2BMpoYgdO%2FDVccFOlAqCJxBcfPC350t8%2BjQTG5Onv8c5nM6u21kdGqhbLwhyJKHIZ0vrHAkvo9%2BBAraKklMKNSf5X8d9CGJoZSZIO%2FZDdUWdNiqI8eBF1BsFIO28BSzkKk%2BJaaG4jkUcpjuH7mCxHB2ABq4CKjMLKN074GOqUBg5qCZeWYx0hq7fnyATdZnGp6AY%2Fy85PS3GaEbjVUhH3Hg8v9AAUkvIJpFYZ%2Btd8TzC1uMHuarfI9jqEzc22VIkjEnQEMCTIjH0vfvqjyu%2B1NWImhVsIT52pcJWhCCQZFJ8TijbzXHEGbtxlN7fPPYnoTKGyEKJ2fGiBsQ%2FGXHI%2FElEGTCHE6Scw3emYy8oe5zAeyeFRV2pR1aAio8Q0cJYgyDduz&X-Amz-Signature=c062840f03859479baa64866dece894325a97e681dc47d4680c527fff053833e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
