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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466235YK6YN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDmUrOu28Q5t35e4VCrWbLB04jR8cGe0JFwDP3x5PFOlwIhANLGMxj1MRz5XsUCiFGWXH6c1J167hXi2tqMJxYDEP2%2BKv8DCGwQABoMNjM3NDIzMTgzODA1IgzOchAq9ioMAS94B%2Bkq3ANIeHxuQq2097kWBo9zususDFKXumGT99IUpTR7iUde0aMf1XyNZuSRjNzy%2BZbfb9Mved6xdKCWGpTzZygFgOH9mfgfX6IBrJ6%2Fj2Gl3vGZOfZs7Fzr6gHComMB9DQCD8GA9iKRBW3HRKkviw%2FczIcbVuHKmE477airFnU%2FFoaBVfRmCk9j%2FMdx0rt5s2Kar7fcqcwdewPrrY8ekUbX378j1niRY1MEQ8CqjCWqoAdkKdWPdNED%2FhxFL6i9RIyodfszIENqkQ8f29WqbnJsU4IwBaQXRS1PKELV7aOB%2BGhIwp9iRNkVQXjn4Hz5uY8saRAouGP3Uj9zZ3QiKAJ1%2BEGUnMeg2XCDOgnGZwzpT6cMotMt2VV%2FA65bneqve6Vla8ToMuq1DQUyfFN4RqgQQkGN5%2BIS4RtQZDCoa2eA4b%2Bxfc%2F%2F1Q2vOhSOgzDzHWdzD2xZUYf4EgjXFPc%2FkdFayweQ0%2FfRbBsgbG9jiStjHdq5Wy35jM2sd%2FU3WU5G2SCBXHo3GwLHJdfIeKNScnd0zenyWkl3JT4N6fs9fDxbMIYs0H9KneyetqgA7TxSHLCIuIdZpHgGJPVVIwRok8a53ySdwTM4d3s7%2BoBANQ6Po5yfzQA5ZOjO2figF8hIcTDX4%2F%2FEBjqkAXW33DKWSoSiJAFBaqhS38OHYsNYj5iRMWNlHq9UGYGXjYV3BYJotiB8bVX9dWBYEYgulYMlBnnnFQuBIoaS0N%2BFRwGgfkTz3UciD4uV%2BIpx5uLzZbmqXi2B%2BeQDarvxZGEkwMQg2ko4%2F0TSvfplGX8qExek%2BmH%2BMgJigQXO99G54NQqqts4qx3laI114UYBZ84gDz%2F9xD6x2ThtlRsRlSRCHUdE&X-Amz-Signature=2e7321194986afc6783c54c0bb5bc053d8d66eac87ec2c5a95bfdce569489ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
