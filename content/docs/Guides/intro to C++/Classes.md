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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBXMDCZS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbJCXSkahrMrWp7sU9X1Kc%2BXI8lKurj3%2B%2BFsS%2FMI5YmAiA63g%2BaaN7Lz6lPn2VCe8FDf9qtoT7RQjuJfxw9suCKBir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMRtGWaMr1ccNsdZPJKtwDZ%2BmlleG8tSmmNwt1FFA57Hzj1yz07I0T4Tg8WPyZZ0kW8DWtyyDO7VlmSrAE90Ovbxoqt5tjnD3eFBgVpWR8%2BUk01KXOsbrj4B2AGnAcTDw59EfXTkwflu7Nv4%2Bl7sdcJSjpYHf2Q0JfS9t416hC41becsOLsREMDCXreg6V1KIZL2XUGtmXBJbIK6JSkrpTQ72wE51FDUXvFnqEr2WHH6lXZuJW9iIiCy6mHPm3GTRgIJ5qdssH1Cuex%2FwcVLXQt%2FrEOJR%2BTbo%2FFxtuuI0OB9miT%2F5G%2FoXeGENyVVrDIi2A9fyVz%2FO2%2FG2Sjoaqv5RQ7Rdrn1NBRpCd2kA7bEvRHGVYg8nADsuqRqB8ilHXUPD2bSMsh7chCKIyNdlj6cBVYDJWNDhwzlBEXpSkvhC5wEEQbn6ofYQtu%2Bu9icBcrNn7v9f3x6UWSRYJAOMbI1DucgyHLc1WxMh%2BhwICChu60%2Bg0WXU6xvrVqyxtEww94WLKYFEvP%2FeRJSTVJVtnRh4LnGIqky97isHbin0xTWLatLZntsDf8aKAv9fDTBjwJUZwCDSPvLRhw4TS5KxXNiK%2FoMX7u3U5ou4tupQgWAGEvr5YQXD5JDfhOhDXZV%2BtOwP2mvb5%2FBAWtw7KInYwpsG4wAY6pgFWiu5vbsMnEriHAxmJd%2BgI9Y5oKV0A317U7qxTUF4ekHlwl40%2BCqDFzcCDiqbcp1BSJkh2fI%2Fhn5N6UNwfohcYP6WusZRWs8J7ZjekidkUvVfTECkEK9%2Fcc%2BSl3H7mtwJni%2BixJn42oDreEjY6O3Wu4E1XrktbsD5JmpK718O%2FQqB0GsnRwmMTzm1437Xh%2FMXydzkj2c0BBv9%2BvE%2BTWZ71jU5Vavxg&X-Amz-Signature=5b2cf35f56a063339205d6785e8a20ff2a1d33580f9cc5a5abb8c844a3a8e912&X-Amz-SignedHeaders=host&x-id=GetObject)

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
