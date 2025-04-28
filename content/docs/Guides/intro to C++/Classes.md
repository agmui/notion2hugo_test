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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3LTPGZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0YC93htQwKzCx59mzT6sIYLhmTNj2Prkvd9clQJtQGAiEA65Or2VbBhO5DOiYkjea%2BSR%2BWrs1puMBSgOrLD6p%2FprMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDK%2B%2BOJgbK%2FZ7pOhtpCrcA4XX78JXWZ1QjAwm%2B5K%2FFdK2SlexrO8iZuXxY%2Bek%2F1Q2feGU74d7KrcHBUQfPmafn0w9v1V6fLRsWpAhl2PzjlMqdvXK1M4BT9Ds%2BD8QsOekXjTV%2BeACeln1XJM8PPTAwG9RUSRyqfz1ULSlACgiwrCyPIZFXBGU6ORF4dPXq3yjnmdTnnFfylQ3lYeu%2FNUodULGRJoDFvZREP%2BREVwxV0ArgR36GUC%2BGRKF9bsJ5feFpnfih9qt4NTWzAibqsvi3gXdMmpFiVbGBLMOgC%2FgX4qMhrMRtjRtFPgErCC0t3aqG4jsCjdbTYF8quMJYq2lMjQtw2h7SWQ3YtcSotgIvz%2BzI0D1ZyzpLMI4Htd6gT%2Bcpq8RwbYkSCAlmaWHayQCxTteRHG7IcvjoHnLHU6odju2DfKpHZKtU7n2QYY7KMfiRfgvuX8XNy4OVUuqFPIXvQB6rz6aNxfecwkkqPc1XFFGu67OvTzcKxuxza%2Bt%2F%2BDHydo8DDZrpK8qj6mOmFk%2Be4j7Xwb5pndmZNUELgoziGRMep3mQSj%2Fd1csqArLN76aJSFbBtoOnZpxVLA05OlyQbg0DcyKdpQ7fSlAdQ%2BzHV%2BA5gUmpbSr6zG4hiFvNi%2F%2F2lQkdDGSiwRX4MQLMMLsv8AGOqUBHVERP47Pd17SVT4SOY7sQ5axxDm5CvirVtkiCMxcGPUThdQgOuiudyjOlXv2KBkd2OmRFoDePm%2BhqLByIQwLKvZddO8ar7y4iC7CDBeQEHMhINFuiZlXy4uwn4WLo7Rcgtqg3rG6AdtmtvZUaNNcmn%2Fysa0%2F84Nhr6Wfsi9soaCl0ewNdGHwBBpUGU3QjdLYXLV6M8%2BN7GNG0mllyMP3b86nQGwr&X-Amz-Signature=3b26fbab0c4e992531dfbbb92eebeae2f7c9980a0a9e09daad9f7221a0f56411&X-Amz-SignedHeaders=host&x-id=GetObject)

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
