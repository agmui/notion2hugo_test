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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYP4WZW%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg7DfPK23QZqIfZtI0WCpLpkJCIw3DE7gphbrZVTRu%2FgIgED7gfLhqn85TN7dm6CogrBYsPDBR7Jq9XVrhulQKxqoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6cpD%2FFmYiKCQwRqyrcA%2Bi6VWMGo%2BF8gpdkjYBG55cLxtma4TN2bmiY8r0gzBprf8JXql13nXgWWvbDMdJ6rswbxQwAh9hIrWcBwPLbkDK0CfTKx3pH3kHeLeutJNi3FKF02C8QA9bulVVYtiAiPP%2BXvOmv%2B84JvYEwNShx9%2ByHduyMDU8PqcI68SahLUD81UMUY%2FgQdCH3R789C4nYX35kHUPYKwmVoO4m%2BTkR7Hx44bvYValEhkVHXgBTO7%2BCsp4mtDXiPLCIYB6wtZu1fFg3UqyBqGcy9d2i9k1yhIB%2Frk01bQhKOV9OuzTiBJpSHOQtAioNfeGxhhWu9xL8s%2B9blMmpGej21LEMieIEwEVukljg%2F9kiFN%2BoI56uJiTir5q83DR3jTRKUo5ouLoPnV6mrASw%2BO%2BRbd7CVd%2ByI1rgUeVmC7NF1LdegAya5KNy3UD%2FOwCBs3FCbiYIocspd7dZwxbGUBz8BwZjzTZhgULZ4wmPey9PmDCzzpLak1P6u85xR4cEa0%2BTGGR5GebG3JZ2b5rUXciqO8eVsiX05Tbz7HJKmCqkrOjNk7EZhdHNRwlDB90m3C4LPNSOpTJVts5VGoKD9xgl5LRYLNrxun%2FS8TvCmCZqv2tGoEQtivum4Lvo%2FRgANWRmWCiBMI30jM4GOqUBaFR5XFiLICQMGpbZDMqzbuoep7VDeak50Giuig6xuB61X1LXsTg5Slawyj%2FF59drYIwj3bDobcHKaJhmYL3s3AN3iytF5LSLPBlpr5JkGklrPWZQIvpwsjq4f6t8I%2BDknlwFGM1k6Tc9C4H9syQ8sv4urt%2FIcOZZQPyNHD5DYZgNBTpGg5T10FQQhiAPb155gxEm7zX3kFRXP8ZH45Mc4ZX5y5u%2F&X-Amz-Signature=d5698c969f9ca58e1eae378c74d7823fa5495511d69a8ec9065bc9b10ea04a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
