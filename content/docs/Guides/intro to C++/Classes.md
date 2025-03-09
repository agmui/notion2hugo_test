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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734DRIWF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC7JsZig2MqoOYqwwkrt0ZxAhLLiL%2BlTu%2BnGMKjNv8EwAIhALMJ3NwEr6FRV5n%2FBeCWm0qc6KSu%2Fox0I1NdGT%2BW6OfTKv8DCH0QABoMNjM3NDIzMTgzODA1IgxO2fVNVQTDwqu4%2BDAq3APgLvofMWnZ8EIN1Hal9zQgslv%2Fn2ArOek%2FMsC42bF0pdaSwPdZtLqaVKZNKpdE5sCHkFxH%2BF0XahKPFYdObGMmU1xGquoB8H0QsEkOUFdBP5zT3YcTng3tNjcSeC7aYPxgIGIm2Z3HgVkNbPqBfd1iRcHuzdiYFnZXYkIsjWDKSwga6knrCzVeb1oW21bLL%2BiM%2FGWOKdJqudKriehdIhjhSiApKNwNWXe3fVJUqrFFx08G3e9QyVLpsrHt2vWUZxmfD8FMbaUPDqWF8No9Nc19Lapi1UZGH4XhtHNiMiKvc4qFcVQgj%2F6Vwgs0yZxoXRjzCFP%2By0AhB3VdusZYMoI24zcerUJY18i0s0hhMTJ1QYGuifr6%2BSWltn0kSVNyb3Q65b9Qm3g0bDGdglqg0dV8JuOIAOn0%2B7HC28PE5prs8mj%2FdOaE8bMv5B5IKHyj5hAkwOIIhGVipFcNLzSyq8VkQP3hd2X%2FgFsS%2F1mlGJ4t2SXupj8b%2FKFADBUBV1hUATytsudwMuKnwFc%2BHHGT%2BXgXEM6Ef2hhind9%2FBis3f1TnCd4VciEsFvN%2FfgiK8CBZjl0PyyvgP9zASdTzJPvMSx0KlvO2emFDKqzhJIisc3D4yC7WUVpUTt8eshXQTCy4Le%2BBjqkAa9DWFyhn55mG%2Fz0TFDsVA398Ca4zhoBQtgttW2rJjYXLm792pGNjnLwh3J9j4fv6H0%2B%2BKYIwSpICqUV4Qahd9Bd59iv0k80Z4v56fpX%2B8ruGkzdC2ku1%2FPBkb6n2Pfqdl%2F%2BwREmB9HQuohuxNE5XLH3kOzX9qJI2wBvS7TA54jUJhA%2BC5ekBY2gdB3uRmB9qk9NVshoAsr6PEEjroeRU7rzFRXu&X-Amz-Signature=5f2b16fdda05692ba3542bebf087eb53f2e1ea33edb50977f3e921940c1a70ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
