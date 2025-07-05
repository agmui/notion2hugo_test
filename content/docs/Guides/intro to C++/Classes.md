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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QYU27L6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCmQ57LIOcWVMHC7DwxXQv8FVEETlluDRhp1U07JZD8hgIhAJEVFv4PzpwqddcN0G6hPE458%2BNyY19FBtWluKeHf2mFKv8DCEwQABoMNjM3NDIzMTgzODA1Igxw5v1BL9rg3tih9%2F8q3AORP0AeHxndim4xKQI4MT3%2BML7ZIaHYF%2BLGSWaaoWeILgJce7aq1A49N6LOQP7JoB9SCDhGQXeDd04VFSaUywXNUca7aeuoAP2%2FfdhP%2BY6DuQ0PH5nJkB5x6VDO4tpBBfAu2HLQ3rTir8Nw%2BaosXFcYi8ItjQDavub%2ByA1k4x2WE2g6u4wLfuR3XStIW%2FRjWSzX%2Bg%2FmJuHLTKHwJOT2Yy%2Fyz3yId7aFPRcTITjwrlBP13%2BHJIE%2BLqwCvvva%2BlMvHrkTOE1ndbhFRm12uZ5nwtHkYpimDPgGusYxH2A6KQyIQ3qQlfx8tTGzratL3qcVdVTBgMjtF49kNK7lrZBL4mfOUDLSVab2kmagc2xgB6Go7DGAU8GGIwPED5zLQ1OVg2i0eXQ9ZruTN0uTVHS8mWHAVsOAfOxNxpodwjt2pobAYYGqxyIepMQFWOtmuqvZVBZTswMIDW9F7IM2FyJOmy1FLeh1RXM4x6KkWKsTH2GHxreWE4t3u2vYL%2BNQ84e%2Fn7UqSFdu5%2BhfV1j9iShOKpyaBPtZwEvJ%2BAfZT2HgK0yLf1wdp%2FOBFezsPSJX2NGS0dRckc3nS6DqD9XlIMGhEL%2By6NpbnFamh%2FzBKmWhrBKygHilIfel3kuU%2BmWfqDDR5aXDBjqkAZvw0vdz38j2e%2BQ0cRE749tjnagTgk0uNcdJztGqY9cqJUA%2BWZojNUBwXpsZNyGwioFxMNR8Qs1iWXLwGnaiUTve6jhwIwbkuIwFLc%2BOHIm64onLsq38F1txsxs6%2B8u8F%2BMRvcVxKqm5l6cTC3aXG4xRmo%2FGfiAp4orRr8fjkY9rRIin9PIGsYsDgJW8Fe304g96ZsnXQXQLGDZn%2BVJ7FecRok1%2B&X-Amz-Signature=ce3515fb79a4de3566d6267520125531c3edddec50b0b84ff5da108a96fe64cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
