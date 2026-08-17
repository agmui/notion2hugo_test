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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VYIKIVL%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDcdv1N5vWosPLAcT%2FNA5fp%2BXC6cDU59BHCPkzz8lxHHAiByba1bOsSflAm3dAf52e8OgBAdbtFf%2B0x2NrNWwci4ISr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMWplcfenQoxcEPw2MKtwDlJ2A3hUKHU1guOkjGUfmsVzX0YA6EmUTWlhB7dEgkAKs%2F5uGNWP7Me1tgODd1UWT75nmsJVHYiHUxpRwOshnzMPbiBHLuXdmAwgUKwfwTmiPmrif7yCY%2F2GYk%2F2W4Y4H492nAgyiiBRbKs%2B%2BKRynP8s9enOCb0dezWpAQQOvpJAeMnOPtW1fj0oJn13DZwWDcABsmFuHhH1O3nYPuE5NlkmNY%2BdAv8cD8%2FjmU9%2B%2B9HW83aIsp%2FlgaFKBTbtD3Ym0%2Fs%2BBTtEsl7jBBobio6rcGEacGYgiwE20kY62KlUxVLxh48gySfnJcGMtMVM6lajfy1fO2H9hQD6YHsRR%2FBJJhJhUX3LFyfAoCzF6ioVel5hEQ8kb5pCAdXmOByJwFikWeTk%2FWnacIM%2F%2Bhxb899c3tlNV2HhKJxjRloRL9GZ7eCxBckYGCDWKsF9FX2Te6L924zczILxh1CApoC6sYcYXgdmpDxcuvzv%2F9NczDPm50tXjRsA4xHajr5xRFxf2ewtEYP91yB4j8IpuRZWTzILhjD3r4CKzCApQYXEvX3QYi4WvyM3FS%2F62sP81Jcz23nHoE8XM2nrYo%2BCTke%2FomgLLiZtyTa704hDHNLPnkfCnscvhkH5LUfTZrpIBdzwwr6%2BJ1AY6pgG2XuLBVyzGgRylT4g6FH0REL8hVW1YEHjy1SBzZ%2B44BSkYo1Tj1CGzuXJRxxqvm4DCiNEhhJR2ysxGrF9FUkiQJaxuSf7idsufcBdXtU0hOAUfUfacgNK5Kt2h%2Bu5NCy5GsNB%2F4j%2Fx6b6%2Foz5UcXUM3FetZx8pNbF4px7KqoEvX%2Buun3bIFGQKhZ08HLkYWvH0VxSBb2HP0UB5DSMQMzhbcEV5Ylw8&X-Amz-Signature=45b7ac1655a4cc05404143a157de257f9dd4f2f54ba569ac7795d499c1ad7e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
