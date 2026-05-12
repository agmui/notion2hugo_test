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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGV42DCJ%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQClbZIk%2B72xk%2BINlnim%2BGT3hVMI3eKgcGAjyRTyV9fVAQIgavul26plaZyALANnPmDz4f7hhvS7oRG8uzdBnns%2FGu0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDBG%2F6hHpZVR%2B9JY4ZSrcA%2Bkqvc2Sz9ZrVeQYUiIF1Os1nSGbMuGTVkyGijYk4fnC8oVtdP26hVghMCoTNldwYp9k9y3SCHBJIH4aZgz2oGGQ1VF%2FTk0SKcPU3%2FzXG7wR0TtZ5EbIN2139bPFgHISprzkOrAvJXynAdectVGyzq6J9nLfwKE%2FPQ6tHj0FuRzTFw3RSVyXIg0A0bKuHqszzTl%2FMscR0RS71XdSJSEopDkrJK987InpXfeIUk%2BellvKnFBplla%2F9po9z6R9S%2FTZ%2B8Bkj8ron%2BH5aw8Y9nzcIuMEPSjc61W3AHRy3itI0yxGjMLzcslxglSJ4UPaO9OqRd%2F2CL4MQBii2lgO107UDv8pBBCzsTxBVb%2B8415%2BO4BJ9Lwp7bH0kQ%2B5EWAeU%2FcbAHlC04wwYfADNOBm0O6Zo40DSS5XaR3mMRKPxp8%2B4FF3SgHNeIFMGTkwNykOSU%2FV8f4fNKyfKhiKhtZ3GsXLE76xoeAuE%2FcguaHPvCjZ7eDinvmVUbSgon7c7NOtKAsKnhlS5XS3uGVrNcs%2FXdKSPPnnOdsiejs05quHpVOAfwPPVAocJJtpOg5fM7TED0W6NJdjo2roSdQIFaI5t2XockpPGatTjkoF22ZOHNGdZVbGzeUgbYocRH1%2F7gY2MMKfitAGOqUBIpEhD3zmNB1Yfp3Sz06ixfdi2gYZoFKfXVp7BG4sKyfAsQK%2FtfYaZ2EBb8%2FZ5sv8J%2FvAJZfQTunYU2YapnG9EMa3jjzVdNfiLC3pmxEUZBFVI4rdSwOB1DySRT9axGA%2FmR0KlEuLjcqKjY%2Fo7RCw80LuU7EMslb%2BLQXGlqV0Ake0i255E8FMm2broeSeTh%2BNTEcyQW3zJ3gSnKFEo%2BV47NnInNgu&X-Amz-Signature=631381bf8208a64785b6c497aea3ac42de11d73d91f5aaced331df7ee0fd2e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
