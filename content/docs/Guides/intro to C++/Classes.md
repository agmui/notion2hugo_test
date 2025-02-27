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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6ROEZW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBGXxMOIOzj52jpcvB2Cw48I6EOW2Qa85keyHmBUAgIYAiAOSLJSe8TgND926N2EgHCg415Mp8tHHAjJpnDCjmhoMir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIME3I%2FZqrayrCa9yHcKtwDrFM77KIoCh4CZSggOYYbqqA4MvI1YK%2B523oDXEQ%2BhPIqPlxBrgw5LALh1DecACT4buBb6%2BNZxj2NGI7MtfytKtnHiHVESLdNzo0NGNVjJlyvYqN4c3aQ6mauOpeqSgpecJU6%2BWuW1KKGd%2BO4JSnJ16oVCilTNgKItlvJmbwCRfDLdXozd4yF0V3Yc8dFMdh4mz5imjuhQuRLQjVsF516uE1DWajMfx%2F1pgzsMbhmFaQxeccSOhMHKeRNWRPvsoJDkkhFdzzOrXwsuBH4RMGmbaJPMSpnRTzgEaslbZkEVIVeCmY14%2BQyAhiFyKWfvmsDCzU5zMirPeS7g7bCnfP5Hw%2F9VlDHfP37YsTVd1qGdUa9ujUiJ%2F92CEIFQjOPk9iEZ5kkK2kdowbHBnFM5RyPcLa73lZtT9OYXCk13qOuXw3xZSli82PECVir46LOPgzeia0I55Atg%2Bav29QSWg%2BxxK8QFNrQSGD63XMXxoOTX%2F14WQJl4u%2B21KrQKZI8b1cR270JvFd8JzDmZh2Iw1aiyxoSlmgqVsHjFlDp0stUMdmXysx30k%2BF5eAD4iLS8JWAbg%2Bo%2FmmxXPYF3T9%2FFAjOBNPfdkjB%2FwfFEQo5AMJWoZGdGThQxuwU%2BFD%2Bu0gwutGAvgY6pgHZqdSxRjhzEVGS8kfedjB3dW64gfyIagh9mty7IKVOs4nemh%2Bv7DXxv%2BNpOhDh7PbtoM8KaCeTYhgSuI9OzfP6pKnlnDDanj%2BZpjVfdFm1nRmEpmA%2FrctwGHHmRrLTCjUnCh6e4Va6OHuXfEKWCnqsz7EmQ95Hb2dfG%2FaeLcKGvz%2BFeA8TLw%2Bk6qoHBNWQZgVGXugVTng%2FNCHPOi6lGgik%2F%2Bz0FHiK&X-Amz-Signature=50d573c679eeb3e72835da7e7f7e01c4ad1c961329eb32b359d09d8d167b9813&X-Amz-SignedHeaders=host&x-id=GetObject)

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
