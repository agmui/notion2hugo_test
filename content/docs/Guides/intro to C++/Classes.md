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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJXP3XK%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwMmR1jHSX%2FXdsO%2FRpREKo6o%2BvEfau6o8q1IPg315JbAiAMy5OQ7EJotZ4j%2BxPh9Vq10f%2Bzn7HAD1%2FwIycVqBMJVir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM0rPH9KWhyXIsjlehKtwD4uLRcUR3GNHaA6CXQt099hTGRl5XWmP2BQgXRQRzhsjoVw0zE64QcM%2FDcf%2BicyIvfrQHDi582NhglMpFB9pcyLMFmycaJdossfA2tGvkTa0CT9VrNVPHWbM2q%2FINAw3UXZLw44xuG5mOHIJ9bbqaajx%2F1Vl3l%2BJPTOxeV5sLl6%2FfEmLfi7%2FJx8Gnc82DRlHFk641sroATtZxF9DKXXrYcfK3pOf5nJsx1vPmcLWd7hv%2BO3SUdtwybbzhWpQz49DAWcAvyWfAi7z3bFEZ4r5QrY5EDWKEgvrFBSFV71I5ryx5D1HljoInQm5mwHajYq6PMTBJZJuj6fr0CiwJ%2Fr%2FoHqSsLToFpCOCgUJtRQYyEEP1YG455qoMgla1HdmxIgpFus73UWXPlAlmUEujQC3Hog7d1Vlb%2FZdo29wPIVyOt%2FGhIES89ToDTo1niVvOytWWB1f6OYX7SupMWxxKmatY1N9gTqjOpuNVB%2B7FG7Jz07GYUfwwTQ6OtBov0v2gU2gtg8j%2FrfmixPv%2Bnfu%2ByJQsOydC8kizG9z%2FGmoYzm7njDOYUxgBneaBX34BI%2BrXYVOCiW8ZxKhQ2%2BsNw8M5chh4JjetTaxMws9esgIuToANCVBdhwmMZHsdv%2BmaqlwwjIzDwgY6pgGArW6RPuxmylTeK5RK1aDzWlysXlGTtp3G5913oqtek1gVbOtMo9Juo8C3Cb0%2BqGMQnyOBLVUksI26UFUaDyvCOR44KizjAQBtAVNDiardh%2Fsau6jykwozihWg2uriT%2FUBdrUZBBtLEad9h4E%2FM12aN%2B1OWBckXRWv4gAND%2FvQFRNiKPCCVK7f5h1J0sZe8BgFsakWj54a756OU03MUHTqcNpXCA2j&X-Amz-Signature=66534aae6f4f961e15837930de85d432db47426fe4ab50bc3b34dda915adc7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
