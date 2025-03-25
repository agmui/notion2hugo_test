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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KWD2A7Z%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWpIS2oYDfj4htyMc%2BUMgY80EP%2BOXoMugTt3kG6ATUuAiEAqBG8Fl9KA3TN97KCXbTA%2BJt0P78v%2BkoxuWoJFfWAVpsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDL7s4sEYalc8hsejuircA2fe9ehgCevfOXLGMMxg1RpErLD%2FKrf5K4EZpNusybJRdTfpdSoLUmKZ5wgg8zdnEBqWxSYsFr1k261TvzegAijdHPAAgCCyIOkM4%2Ff4Z0k7SH%2F%2BkJcirJGNoTmTlKksoN81da1VTjXe4IzNlod2UTS9zSEHzWItQG2tt2JKWjwoQHYDg7ZR%2FN%2B3Ddfp%2FH5nHRdctONnD4nDeBVHSCS2cBNJAd9i4sfnlTmQghvwypQGXR2GI1Y9%2F2vnu4KKtwv1DakGnZfLfyHRKHh9cRV984Wv7SVSa4uLn9Nb7eCB7g%2FXpwvl8EcpibTbfmZVq2x0qNkosIrSOhozTobDAM43T1mP3fN7C%2BIGpznNOUGE%2Fl2AbbqVBphBbZvzfVQL9hD%2Bmv6x3MeP5B3M5Ii8WB%2BAfWQnVqZLLnzSyr6YGDP9VxCDB7IqxJVzhSnTVAJ8%2B9PrCwOWojeLjH563RZcRrQZWrk%2Fv6k6nalgULeL2A2IHmMbprewJTMVucg6%2FsLIQxQQ%2FJA7Nv8GWJUb51MJlLE2toOs0iNOd1Acv7jdJLW77otAHI9DAtpX4zgt6Rx5kLhVxVyt9lrlDF9GClY1gp%2B%2B8qf7X3vC%2B2pOLo2lNYRNagTHReglgG7VY3QYnz2LMLrki78GOqUBMs6FuqIllijFUeigwa5zxTGatWXrOf8RIk87Sd351dhKPPHuA6vKlHbMLZyCkfP3G7lk5JlQX5zkvYXFmW%2F2saIpMlQ0yKqt0Ne8JT04TWNsP%2BSXyGAcNw8iCdAIHmfLsLRfMgzxRvDmpXzcsMo32897Siyy%2BbEG%2FGQdiplX1PBosqtCLARgj4YbUYSYCXhZHK%2BZQRXVpvI50%2Fs7%2F4i7zC8NGsy5&X-Amz-Signature=1a17dedbad6a15e647865761646a809849af0009b678b403152d2732d1eb5916&X-Amz-SignedHeaders=host&x-id=GetObject)

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
