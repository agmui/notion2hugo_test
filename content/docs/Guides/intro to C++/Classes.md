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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2QKQSL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bu9epxlJq8dULv0TOHJvSuMRsYI76MrtoyFKhoGOAjwIgBQQmELHumCckBcCLbMNBMz3nKS6ebJrL9oecwMRPasYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBo0GCXbgjerVwkmlyrcA7gM%2FW81xs3c6AfsSgcrp%2FxWwXuEwjQJxtaM21Mmczlq7KVI37cHN9iQ%2FHFVxOMhbc6R4IOJRPwvI0qsitXIiaK%2BsqhA%2BzqIwE9M9L%2BOitPyxkbQLX%2FwEuLrnJgDxuhwlRb7WM76dV2zf9xdQ3rq%2BjQUFP3Pjrk3RnCxtUDBQAc7hRXKQN7cDYkYLleYwgHktkkC7QZiLL8HzpokRl6H%2F4rPrsbpv9w2ptpXKBFckx%2BAaUE6aK%2Ba2dvPbVFT9y2PzA1V0biZTgF%2FpCWPqcO146USkhMsfOvt6cEvCIUKN9sVTkUSrFWhMr5ooQjecz%2F%2F%2FGT%2BXAyFO0dQS4bNpGGmQF4nuKg53c%2FyBsvaajMFEuwUbUtey13e3G8BCuhH5pdh4txUn7mkgVJC4w4OQIX0MdMtEYh%2FA8LBK3X8%2BuSSWUJkBNiqSeh15YG6jeIE6Sx%2FqLgW4teXSR045r62HAZ%2FGBuJsdD4%2Bkilzr53Df6rJV2WR%2Bx48cM61UrTuZQQGLyukbRQx3aqpXycCafe871K0JU7ShyihQ4xF53UVHbHq4c2qWySo6x6VwCBLrfFCR%2FsKIuR5E6Yodcd3XTmcsQn6%2FBZ8rt%2BHICGYBPdrnJ7FYDAO%2FajQp5Y%2BuMHuRd8MLuTlcMGOqUBbWlmFf%2FTqa4n3Ma2gdrpKLU%2B2setPX1vifzGfif%2ByHvcnhPH41opV3XM5twNm%2BcZmBVO3nhirNS0kRuJED208vxJFhqpj9ZjnyP8l8Gd32eCXIpgJHI8N0AOuLMqKdjGsfrW2Fe97XQHOgLx%2FVE%2FSN904x0%2B3Ku3l6kZgFX5J%2BBiuuPv0qpTYA%2FVnPUCvO1W61%2FlRyd%2Fc8%2Bda7ENkGqrP21cOm32&X-Amz-Signature=664754ae1d50551ee3c3c9ced99b10a614ec2e852b0560b97b62ccb483abd22b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
