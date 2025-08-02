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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS23IFLI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRaGKjZOE9Gz3CJ7%2B0lxhNHSUa0U3TZlbpypRBp4lWAiAIh5oPVXDo53Gv6LSWRIiJ51v8KAebB3IfnXC3Rc7b4Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMKUwxZOhajcaHD%2FeVKtwD%2FWib03CX35%2FQYsuzWfQH17sOyNx5yH3qsXeP7nhULzvtiTD4dzPJfeHSmoN6b9cMD08tMQnP0EzWU8NGv37mJRsMems9dVWTd2hY29URAeoxJi%2FOViX0zmY3hG3ZF8lF5bLpz6rl48rzT6pkDKNe2BTWPRomwccAHGzOhFMGw7hcfecunDB5%2BFna2JzV2vTbm4lWEt0K3hcxihDEt%2Fv3ZrRqrweivY%2FViWtxjeaiaraXBT187roXvU2UwNdkoEGDNz%2B1rAb6oMW7TYJeWU3PKaqvw9fgQne2Z5TS6XzUlxkFt3BhTV1CgdiSFTDHCMIlO%2FY%2Fp3QBkG0kPQxYuoEPDU9sCzswCmc4ydyctlPslkIh6ya1WQqwblQDBiXHrGqCgULzWoCKHnog1wChvCOGA4KgX9EqLwApKX%2F7YUJXYE4r%2BHZG6FT6%2BzbPXD%2FFSC%2BaC5oOztnf%2FPnmwrwjGuL8syH5Vz57ORZZZ084Ph8wgbojiVVgNQcBH0i4nHslW7wEGkWdeFqQQAXxjUj6dNZdgAK9DFgyeAN9%2Bg3XfQlQ8KOrHOtdu02V4naZowjemeembXTQg7ReeFWrm4L86W0uJ66aR4lh7k48J1sF4Fje09kGS6PTzGwoB8vEctcw14C6xAY6pgHsSOc65jJ7vf%2FykJMoW6d999QigVxTM35Yfl0zKNAmZUMlkg6zaWefW26kuNsB6XsihfQvUoD4bU3Oo1egBuOrPZoLFpE9J%2FZtKxAwKFKUdO3OHJYbpoC7ey26Hi6dFYrd%2FYMGyBxeeK06FYUPE2mz70uUn9hXMNiWPKo5NFKIqMFnn6%2BRvYcCZFbZznrStySm%2F8Iq9%2BWvSjZYopYIEP8S%2FnYUXi3J&X-Amz-Signature=478ce22c52edc79f13e1808c206871164afc1fbde2dd3ad4510530b1ed048143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
