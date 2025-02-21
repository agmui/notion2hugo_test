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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QSSY5M2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvmR0K9lkDvlNN8kD2A9fyaGtO2ZyCMROJqgeaT8hJcAIgDapfmqPXPpI6Rl%2FrcOt%2B672Mztjs1VEdI4Sfk33wPyMqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw%2FihZsMbtqC82I%2BCrcAxBhChcxsC8tzoQhDgCR2sUngrls9PACDXar1E05vSXalWMJqv0y%2BHSkScQjd%2B5gQOb%2FvMkDV1inA6z%2B57xGy0imFrX7GpWtVewAZ2dTa3VNH8p00JfNAdn5Y1kudYw39JydDXEdhJ5MJU9hH6ez2xb3siodOBkn91hcl5ZBMUz6CNbcHSsMMnMDIeZEXjbsWyT6zeWnbroBNOYE3Hxu6xCMFeOulQEok2nOdJCRKyzXB1jTXDi5xYr5cFurk1oXcLsQyvqSwgqNzJr1ifAPXgYYUQELkPw%2FSmwFH7v%2Bw2jyFTvLuwz1zocDWKGtLSh7aifMSLaRGpSMrucWFTQYaSKisNmy7t9A4rVWUMB37FnPDKldK0TL6edR61eOkBdeVn%2Fhq0eQG%2BqA8g%2BRTPqRtz3CNomXjFueicdRQhjz6tIUM7R7DHvS3MDMpJlgfUFi9nGLYPJjIy1gAtPyOl6jZJ0lxiztuRiHPp4fSrIB4%2FgnuvWPMvZ6g7fnEQ0WSNWfsLA%2BknLaTeBnPD9ggWssiEwzp5hcx2Y%2BKRCxX9o0eBqCumIQwcBoeIVWNV6QnDgAVOdU2cYCraivROboJy2LvlmKv4Txg3upXG%2F8ZRVMyFIwbOXizDRA3N5%2FWoaWMMrJ4b0GOqUBh78T5eWLWOGAZtmVT2p9gYZVZvxS3NEhdxQz0VSfM8jJgdNTNCHrMc2GpvPQwOUuQBJDr5iGCRUzUxmnhSfiM7oM5ezBtaHtwuh%2F3XVa6rApS4ZHoKhKwOMgdjxNqRb0%2FZzWK%2FUl1mzFdqyL1IN88E3FiUpiZfQFsRecRorRW7Q8w4OaEdX4SzdKjivhJR8loM64OHxspfKWbEP7TA7jhp%2BcACgG&X-Amz-Signature=65c4cf376b7c43ca1507bc3e99dad32836255c3e2069bcc9826a01f769f44234&X-Amz-SignedHeaders=host&x-id=GetObject)

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
