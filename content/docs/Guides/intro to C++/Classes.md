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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLLXOGVE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe4mlD0smTamQhflT9ib0CSPXBnu1dVj7uF8%2F2r03fQAiEAvVS%2BWVBnfPfaQYVUXtT0Kbse4mn03xxA2b87zt8IC7oqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FJ3fFm72MXsYnPcSrcAzBuKSq1T7QoL4PCV2IdvPTZoT5V7khHus%2FjemPNMzb8XFTC%2FMYhQjhMxrw9IRhfEpQ3EbQlDkqu4CuNlTfoxLaf%2F6aBzGCSxM2FCMgRlZaebbNoicoAHd%2B6O2OFBvTaTR2Zg1gfGY9VJ%2FS%2B%2BEQoJ1zs24BkzDXgV0tozag0NEj5Lr%2BsEPWqqJwVJk519gPWBU6ynlVICHrNj8xyV6tvOhhJ7m2h67Gjloj7vRjZp%2F27mx4CxGn84jpAXBtpi2A6SHV%2BjRpptjKkwKorHKr5ZAIBvjWMfzDrwVmUDboyxrt5smHmHRvYer3fws0W1F686KFprXBofr0zjTq6QY3iYG3YqBIagnOCx%2Fq%2Ft%2BCMpFnGQms%2FXNo2nyald2F%2FQhPS3LtUOrrKba1isclOQk9tRSh4ydFJzwcm2HUwQSEv6tUbn5a%2Fh8GlCamng6A6MBqLv7YpB%2FRFyGAer4uvPmeIJCmupFktrLGlDCLxacMv46mWR9K5HVPY92vaf0SzzPcZMN%2FdLx0YP9PlTmAs%2FB1UnSPkRyxynTeKONe5EVRf0zvg0%2BQvca7QEbgcnU48BRAtjjA9F7X%2FX1%2BkYLiHXsHZNIl790foOLKI%2BTXh55t%2FkVVQUtfBz06Ug411VDzsMJLC3sQGOqUBFPw5kLclYEZgnD4T3nwQvxU2Cr0F7s8dTtQ5wDLxf3CqQPE00UYKqNpcjm%2FHiki2Zx%2BsFqNcV1B5rz0gnXgbGBGIFu8DRqEbm5lyjrtODVCd8TdHqeN5JCIe2KJzftPlbx6OmSTJquEjYhfPuaclQ2Bvmh%2B8KtPUVpysQjeQ4v9m0cbLGcMoqNrl65Hx7sr5z0%2Be6R8q0Mf2h1pO8sFceZ%2FSAV68&X-Amz-Signature=54f2b9b7aea9f98fad7d9c8a5ca9876a9b13cf9dc80ec886e5101cf1d6f64b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
