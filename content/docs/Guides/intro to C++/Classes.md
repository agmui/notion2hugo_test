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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPH2VK3W%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCNFZk%2BlDj%2BETNkn0siKtnz6Dblgko8w2Ka27kBrE0NLwIhAMOumIWPeNs8kS4TDZ%2FK5YCrXwRn3JZBQNBTlLatwaOuKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwCzEXhcVSMVTJ%2FV0q3AMRMoeKeVO1gvU6UxTX%2FTE7cAxHzVnmTD0bMy8fYeto9h9sDfBIcH33xJS07AGzMTXkrXJIDEIgG2GxPfSga%2F3FUzEi5oxgDkk2jsKT5kvhFfPDG1ZLe9U%2FzmrYGpBWCQ0EPQhQpKw8MV6DIPytYu92KHu8uEYKQMMrTj5%2FUA6%2FIlQYRFIQke0g%2BOqzl0wi9v0WHmzTZrKjLrwwxTf%2FiE5Khk9XfdOFrB2npGpkUBHXDcR0I15K2yBp3%2BcQEk6P%2FSviCOxwcznwowCZ2O2YgBh1QErS%2B9IbwjR1fhDhC7VjIsAMUyC3UzdZHasek7YvqyHTCcf0tDr9XMxF2R0NI8VEct%2FTFzBvbIgbQT8rvg1g8MW0DPyMU4r83wMLWracmN%2B3TL3BIwk%2BHXvMh6FtzcEEVdbFutKny0BSmWFUx3UQSKxW8Ju%2FPwyxuTGvrLcMp8%2BzrpkLCMJ5Lke6%2BvwL8D71pZs0HrJaJqJ9J1XsNhgnqv%2Fhfgf4BbJqWZ90ajbFcg2JkuAbW%2FrPxxfxoqpr5OUEdObXm2VfwRPbj0EbqvIcLuMZL0C%2By4AEz47p5aoZroK7bh%2BV28B%2BmqZd6kz%2B%2FFgqPNoh%2FbroNNZgh9Y75vw4YUmW%2Fh7q%2Fdsxjc93xTCd89a%2FBjqkAXMoLrTSPDekspeFwiAwgWOpHQSHYzV1HMhGLmNTOkFJ7Y0x55JwSzh7%2B5TMAC1CQX74uqlzxMtIgZerTMoeYx4j28jGybhLvuIwrjrVNRowW88fxrBBKvIl0ueSKOGbNjKexH1GK1qoBiq%2FuLnVn4z1qcQqEyEorpXUTXHoKnUfqaahoVVd2CePcED3bAS%2Fecog3GKVn0E7976SBavugGhxXIlH&X-Amz-Signature=432f05b2ccc658b37124f11105082aa4e44edecd7d80569bfd38c9424670b8a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
