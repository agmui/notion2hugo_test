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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677GUZ4SB%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7287bPxXTYMZIFLjkCDeGA2UQWhVHVw6FXcQYw9f7xwIhAOERUkA8dKIelm7v1S%2BDFqRhAlBIr%2BNlzdswe8BwECA1KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY174%2BlzQ8U41aZr4q3AMvJgp8qvsT%2BHEkCpM6QTixNoTp1UcvjLbp9Qm%2FJMUdb1sUwG9DxzqRvKAdlGSuc1vFonS0eBWpdvP1TNG6mkQj3IuFl2P%2BH8Vos1oPa2PIchxK6DYhKWmEBxWpF%2FPsFBx1mcMz%2FrpveOM24XXZZJrnBww6vIxouQsHqUlp3XpSI5mo5quMyViKkENXOX4blxUjVBJ22EZF5vVlJVkeAOwmy5V75u4eEoJ79XkSRIMt%2BKuYUsmLW%2Fq349hkcuH3Q%2FHmWdc7Drt%2BWwcI%2B68A%2BQPDWnPyh%2ByU0RYTgqSZGaXqwyfZH0HVJ7BTlBGs769EGeED6eE5LSB3Lf7zJvH42bv8pfwFQFaTprvq9D%2FpWrjPBcmFK2RAm8lItwfzG2qlwGQN5%2BSSVmtPgmlas1Kmp2wb1gYrIJkcPPmTYtU97LBMUzz8g0n5w%2BL9MsGCm5K8sf7iXACV%2BM2gAqpghLdQ9lnNjq9VxejQfqr6s6lmy1lLRGj51PsKpF3jHD03dovwYNzq8459qo%2BAUpBGeLhCFVabgc2PhAzb%2B4chFDB6UWY7%2Bpy3faJ7ZREK54pCIIZTs2v5ts05alTU4S%2B2GMVmM5ws5BhRuvnIvKaxt2%2FiNIXf5kyjH2blLdu9X0D1UDDthem8BjqkAdc27dSPG0PQOjIV2DQcZje20WLVKkwWa5nZjH7PJ0qIPiFEUy3nBYfCe8KgMd%2BNUI9yLoFVnQjPfR3kTRXPfj1xye29HIDj%2FrN8jKD5GMLLCqOZrNBb4v4APg6NtPxkqzkubMl4CsUtEecT7QDQEB6ST6aRqRI9lYyPN9HjkCpOB6ku9NwQ7CcONhl3UhSzfD3F3tm3uH%2FTySZUeVw15z%2BPM1zo&X-Amz-Signature=b771b41bb2b45306fa4578874a5112ccd7f4cc187aeb99217bb833df15600204&X-Amz-SignedHeaders=host&x-id=GetObject)

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
