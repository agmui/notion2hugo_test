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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LQMTFI%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDA4bTvR3c3%2BUbKsrqRyBnR3q9Cfegy8cA0N2DQZLAG%2BwIhAMPsVz%2FqspEmrD0612%2BjHoVu8YpewtAMbkXk%2FKDNirS1KogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLHIhem2EJtHkIQAQq3ANpwtUJAUusBZvfG1nYYH6sCphtBEO3quyrzR9HW30bSj6zEt%2BP%2BD4vVXgsrxBLmTX4LUsObZIi5Zv5HhTtUgONzhdyspmi0Y4xMOaQJhN1glV62KfMGUdXCHMvkDEy0MTKrbvbpibKvgOs6IRm0eJ7dR4n17LwDvFLU%2FOTJ7ivfsaoEGFwQ403mIvrhvlezwxJELg71FZUFtU4CFnyPSBPWDkGmk%2BZjF2eQRrQVUt3Zi2uQHGWTsSrrlRc0RLTvPd7cjRIHrBtLN55s%2BewvHttyKAdxvvxqvt19ZBpB7%2BovXCKPLq8Jqt55wMB%2F2NM7hwMecKc16cgP18wYi5gm10IC64JcCvwxY%2FK06pWaKTCz8IafvSBknFdO%2BnBpyDOA%2F3br2sBWEeICSGuCZilV%2B6Ve9if9yeSOgxlO1HVayXeBhPegaBP7EtYKMFkPf10FgbMXaPzxlZ%2BV6kyt2FJtsBE0h7iM0Ay1T9EHbDgWKzmZkty57Uisf0rGwKYeytlaGuC9w4KBskeZF6xwCxKTbuNVjCI8FihIsF9SQ1WJwCcz8bXVAGsI2THIcENzOr8aKP9Ud8ejgUHDwXQxxGAli01IZyXMT6N%2BLhUH6MeNUXeKoA18sgqS4Sa2GZiYTCz1ea%2FBjqkAaQPjPZI176iSygcIU7j8dHt1hbvYii%2Fyn0PhmLn0VD9wZbZHKxMLqwN7kPR8WWo61H26mZiAJ0Blk8UIu3Q%2BwfKquNya3ggxUVHFCVZNbEhKuGOBGDUEZV87DR690hgrWB6tD%2F%2BF5az8sVuTUENKa%2F3s%2B46wJxwcOtq63wn139Mq%2Fy5DEgk86fjX0UZg6D3rQoBhsG1%2F7Ii3ixYA560qW69oMqb&X-Amz-Signature=4c5ec696d29d22f0dcc4c01720539a7ca833e37454129e9088e42b946a017084&X-Amz-SignedHeaders=host&x-id=GetObject)

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
