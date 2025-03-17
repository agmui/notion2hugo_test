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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DZ6PZL3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVjzuCMx3edJ7AgwQpb6Fp6EqtpTiyuBIwJ5%2Fq1YON0gIhALqXLIg%2Bu5UfWza74MYjOmmdcHRvDqourR2lOIdvesarKv8DCE0QABoMNjM3NDIzMTgzODA1Igx3632LuNpqinqpO6wq3AMFb%2BytMji6F0OzFZQbaRkUsLU4zLzPotc4nb1FvZgQCxN9sAVsLHUZakbQH%2FsN2Os%2FzSrmzFvmp2b%2BdRa6dOywApqSULNilEpP7B1V3StOStsFRCiEHoo%2B9TFjOoIzFHLw1Y7fmsikqC2ziWLNBk4%2FMW4cdH14aDiv4OurZAbQ5snp8Wif4chtWS3p1zJsGcKEC9MaOpFtUAlugC6p%2F9Hi6dzNDGAlkpFLOBaDK%2FntahTmtCIZRjVHOaZucUXRA9mU2aWZwNZrKZAByE5AmKe7xotlxVTOAJdryA1nv3thpEqB7v3l31h5YLrv3cbaoPVnzsAVGnJLCVTqJgH5qXor0IYMYtRvgTS%2F1F8w%2Fox96B%2BOum8RfJoG8rTij24BG6KEUMThRQ8lmCBPSQGQUpKxX7rQhRiiwcw1bEm%2BObNL1zZKmg%2FHV2ewS80R1RKRLa6sH3YE5JLG9Ija2bOm714GUyWpGxg7N79dH7OnY6JDLBlaGHqttC3f4%2FKLFopc1ov3QTVgZoCONrwWdrl7E%2F8AK6am87TSxX%2FXqQyMQEtVcqcznktzkuBf1LKyLEWQehAcDr4sZU8%2FuepgfgRQK1AV8Eisa%2FfcjAZZJKvpNXQMX7lO7BXiFzhNZjWWLTD5guK%2BBjqkAXh0g0e024AFXKrdawde3YP8bxXCmhGBLxSc7MpFpyq6yMQtatus2PjWmrZckmh213SgH3UrkjK92W8uuLukGGvwENesH%2FyvkJO40lKOTBcyipZa3CzOPYX7Kp%2BmIwDmVFw4nzNjvUxk7hDA4zSvQR3OD%2BOsn64%2FVAt9Ju7z%2Bloo58pvC%2Fvz1fOEJJgbdSp7WpY137dM8%2B6tovULuXWA8WIWXYOd&X-Amz-Signature=fd3a35e321397a3058b614cf5c8459c79383e1de642228c89af70f8db787e08b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
