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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB3L5OZW%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVnZtT7UG1%2Bi9dedCTadT2qUMoVJOmEgw5AzApSmpmIAIgZGejThjwaQHX%2B9QC%2BdGN6Iczt5j90W0qCPgExmlyPowq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDG0tHSe0inngLRdkbSrcAzTu3Br8MUVYbr0BWO0tE4SjTv4DNj4KOvL6S2p8TWTgTcDL7qNtl7zPndyZ76RQZipQcVJ3LjprE0klyuhg7rCYAjw%2F3vJfjfzy5dMbaY9QTh%2FWDk55uv9qg0wjkRetcH2niuLPC72es46Fsh9UfRFYAjEtiLKYpq0Ky8i7Qsf%2FcEuPDg4YTbDpS6p66lASMZJC9dxKltXLC5iVMMvc0IqNtNhXBmDIQd0zsRpsFg2EZZ2PbwhHEsfvaL7gO9lRulSc9ndqFfWeu3VSCox0B76aGb9azwL8RFBGJJqnZi2y7qJu6%2FlR0hIJnCPPftHG0mUTQHZC%2FTinT6CSgNSOPxoLNsWU0YveZvxzOEssft1k4hByqhQNVuFPBu7oqopqBMDbRQ9gwL5rbArDtMvrKckM9q5NqfimQ%2ByxGtO2z0nM3wuT%2BgyG218Ecbvzs0RTVmu82wn4LDBcoZkIM322hK2cjlrIxUzPK7LTuzIUij%2BzMIxloLRKkzKmOTJTS3eW%2B3%2Bi8h3SP0wxcsteR9oEUr7lOXUq9zWuM%2FAhn9gmieV99e80jw6S6k6p2dAbMfzg4YDVs4D5hI5s6OYsBQ2HWOOU0M03pGMjZf9TdMXBMAoRRGlULpHrpiM0l%2Bu0MKDno74GOqUBIkOpJPGanLnBAULd8FhZf7PI375ziFYuMynDU%2BmFL6iALpANNdURHoUbZ1nVLl5Si1%2Fh0CS9kSULd24ZfwFzuz91%2FLG3Ku266Ju9wz2W8Gz9eXuGALsoPDhzeCwafs02Q9aRO7S0vMQBA2xGSAYuVEQXiP9DOiJh%2BLL8da4aW1%2BoRFJM8DCPL6FQlCNlwKRF791EUsxN0c0SOEKwaNW9fiJIHRdu&X-Amz-Signature=cd1f8d5cbcf7d61c02341aa59758202f72b4637b8141396f9dfeb68f42aa0d34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
