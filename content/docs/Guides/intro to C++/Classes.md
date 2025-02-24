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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6432T34%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtMc3hdyndHO%2BLitCuBUinCkto%2Bb5Rp5UxJRTxtM5w2QIgavP71Oj1TzLOVCnbAmwJz8d7UkcSAWoB60imk0gDzWQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOtIqM5dGHQBMxFp9ircAz9lwRKWuvr09x4hMutLp0rP%2FBjVG%2FwXpTmWFaiuC3QiESGpuwjdJHrEaN58JvRlPlpIzl4zR3YMaau39B0Tfa9gv%2Fl13q%2BHDZUS8XTUDsHrwCLqsiUdlSkAna5uOr%2BjtFj98OKKoPizzWu2o87ClVUZcgkoBiNw1iebu6zNS4NrhuXtRza6WfnC0Iifd2uB%2Bx26AMGlubOzSwMOTYZ%2F0AdPJN5DQ0z1UzrlbIfo5%2FGRJAdhLw%2FwB9q%2BIFRc9TFdHdLqI3tZ0ARARTCJbFF1FpcatSW9tmyf%2BTzlQ0coauzKXNnIeW%2FcZqa1iy5MsPBLhcvjd4ORs0LxfPn2H2usNQswBtglvtpUnKfFfVVJuia3dy8F1SfRM0NR%2BI%2BjjZeNCBEcuXGEbEQ1sB0Qxvn6BSgty7DDUm2%2FtmGqpmSCaQcBQgsRsX%2BOgbom0RqE8Zr6b7HfVeLx54bsIvZ1j3kr1UuNQmLOk6OgQIWYH3COgD87SIPyI5pOIH8rHoN7hcEoTZurNfdLxM%2BCC%2B1ux5kGP%2FGr3bKEJug2Ds%2BMwyGuFRYqn3Uq8dspNdG8FFW%2FREy7%2Bdn4H2WrGzuHZvK3DmKqU%2FK%2F7nEixFHL1D5N0gYyfLsbp%2FJh0TZq4zLZo4G6MMP98r0GOqUB6IE07585s1h5GxYVTKykoIO%2B8%2B98BA7yVB1hCTQLDdNQaPBqIH9uQvkjbb%2FLhj4rihy3tziUWVGwbellKKYAzyxB8Hyt0HADNXeqCvAZ1NSv5FsQ64%2FZGVU%2FY%2FyTP1M1LdhLkg9LsX2h%2FfsZiqLKUMFfxo2WAvdN5T8p7Prz4PTb3SdR3wrwluhQoOMOgDTe5ljDQR%2FL3sD6SwWSmmikZNgJY0BC&X-Amz-Signature=045d0742fb8548c437b5d3c213049a1b8aa6985dfe77ed65107a57b55facaaef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
