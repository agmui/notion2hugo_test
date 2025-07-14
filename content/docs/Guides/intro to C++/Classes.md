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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQB65K5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCDONe3DjEVD6AZ4dBJtnR2wVzJ%2F7%2BJDg6LTesbv12regIgczKEuZkrJd6%2BmUKpiKfPaZ4%2FN4pcF7gzZrGwgwdgO%2Fcq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDD8f45WZgs0xeI0EXircAwm%2BlR1ftRuY6jY1LA7XiozsP6VrfcvV4RLyGUtmDHb3EH4R9ku6zUXec7q6ABcjEfXDdTCX8tYJ3Wlnbk%2FfUyG2khu8vsRTIqHLYULArMlD5xHP0eOyROH%2FzBHeqjhKKcwwftXlfqhNxur1zVJSbaLNlkUUHQwgG21CQ2N13FIR7tyxcwcRe66PvWLmaywNggZgnvaObTNXPjGpBqEmZ0%2ByAPj1omGhE%2BzdFV76Elv8gEsLXyF2mqWrdWkMldODieNSyWywXljcwc3nRTOOjt%2Fc3HeqYWD74yI7BFa3KuEMk6dlaKVvZ61rB8F8l3gpteP6ogHmIpbkA407kR%2BTUrlYnl%2FvuDVjyRxf3coaFooyfMJeLuCw%2B%2FYz8t0IgzqPOHEHMw7G%2FtHNDKUc7%2BgBMGVIAXrOo3XV0%2FJQjmNoVK8ULcnSWveUzBUITKVCfDdompNkQKLrRqUZlGLjlpqFtMQ7g2gKqPIap6KHZeL9tKLjpqu0mECP5xvNupau3RcZ4OLgbffLKhXsuvp4B3ADjMZZ%2FAunL9FzQdVfrw50FcPqdAPlqe7yxp2kC7%2Bz%2F45UzGDin3T70GmQcmOpljD8yTsW5l1Xe%2FAN1Y4VuUZ0Vu3jLo6GKs3h4MU9SWr6MLjL0cMGOqUBM9iUhjE%2BhJMSw5T%2FZgMlaUddh8u5xPGOQcf1EMmk1hNAHxCXQmco45wF3hnnoPP9RJyBQEgDN1RtVhh0fAifVWODHZ62JSlPchysRF46rWnEB1PfQNgmeYJundCizVL9s9IJ3f%2B8jFndRTD38EZAteX05gsZchjuVtKDvW7oBuiErQBByl%2BBbR2%2BT%2BJj3Iuizgi0nQQPH8mWE8hqFaOPQWXa71v8&X-Amz-Signature=cb3d6b138852f08882ed4a54f83d39c416f55498f5ca95ee9f5a19ce43a42021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
