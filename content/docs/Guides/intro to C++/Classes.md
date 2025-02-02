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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM7ZG6E6%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F1F85HmPF7w6BBq7bsoEjl0LQm7myFqcpMAPGct38FQIgbIojEGKRvp3LkCyRyb0HTTjdGMpv9WGyr8UR%2BlOMtzQqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGox8Lf4p%2B3Vl5LxnircA2vD3RYx70dCqXnlkMPaN7Bzi6RG3xmF38vSwf6Hv4d2YxUt4rYC%2BBqzPur%2Fxpu5592HUdDc6Rw4ghf4NPnkYHxDFTrLpV%2Fk%2BJM1SYtdgYdfI9ZolB6jissi%2Be%2F3tEdDUX4Tlt6%2F%2FTR9%2BcdNVSCPZu8d00Ewrg3j8vNEYpUW3dHSXVpEK0Csexq15A1D3t4fCoYPW7xVH4XmHNWa2KvY4nVccbqQGUwQ2rBJquyb1iwPIKaFan0JPfbO16cSUGgRDk7dvKqEuvNmof4vWX0sn6i%2BGYa%2Ff5UV48IznZba%2BbnEk5ro1G3TtH%2BDu%2FTY3IcCM9Mw5klJEmLBJI7kFELxJw0GA2jFegm%2FHA7YiyQEqAS6F9VIjcXwrAT5sfqLOzZAU30c49Raro%2BGUkP6XRb1mOqwSs4rCcl7shJLG5O2AEOQdakYrNR30Yjfybl3Q17zxBQNl%2F51TMf2lKeCFz34EREt0%2BT3TXuNhdI3p7XyeAwoz6j8oPQPW3XiAQp5mEs8JYr5ilB9JePD7MUExLjJsqCAFRwKRRl6qSI2y%2FFG0y6%2FZmNx3ROkEkVU7ZzGM6Iq8S66n7dWQP2iNpDPzqILlZx2zSJ01mKvlRb7Wdk%2B3J3p6ch1rmY%2FgUj%2F%2FNJLMK2d%2FLwGOqUBdObBBwPaqMgaEyNuwbqPWgn8ZC3xBPtPxr1%2BQf%2FEv4699IoQApNTNhzRNKEbPfCivyirj5S%2BCitCkGhbaxdxjbiBecrw%2FD2hqFbac7G0B0%2Fsz6wtAX0ixKNkXGyFc9ywUMBJ%2BLR3HXhcMfLlAkV2XwdjbxwiqtPggXKRv3yClT8TbRaTPJKC52ZSwR6PqsblUn6cyaQQ3mWhcQA5lZFUNhS%2F0Gvu&X-Amz-Signature=01fd6b20945e6ca8aa51156325067360cb17c26d74f2a9b8565f4d36c75cdf49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
