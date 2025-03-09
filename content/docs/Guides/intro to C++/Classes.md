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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFEID5S%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDaJKI9nlC%2BvbyLRo7DXPQ7WfLPOLrHUzf1HXhs6Qbj6AIhAIv81mx905aiZn3CN6PoT%2FS0Dl654DzAykCAgStGr2EsKv8DCG4QABoMNjM3NDIzMTgzODA1Igwt2uK%2B3B7QqhqwZn0q3APqb%2B8dTUzF%2FPpFRj7vMH5bkGFJZydbqAzuzStQkzWaME2r8e6BMTQpGOd%2BRw6MUie9aVMjX5PMpC2GCBDA5zRHJiAEAHloWhah9r6FMwHRsH4iDKV6W8sb%2B0NJ753PINPGunE10o28vINPJMkvLcEQ2m%2B40lwGuaq6NYvo3L8mu94FSZtd4Z5uH5jOW%2BeGHkf2vOgJLw%2BvwcagCjslIyYjHMVOxomoTitZ7V4QCIdM%2F4djT%2BqXYui6InJpRSNj6BQoFHcuJxrCjnNsn2uIj0Gu4ta5BoJL2v1O5VJjK0czXJopM45W4vnocK6d7CosDJap6LARSN106RduOfZMpiZE6jKgu1BWg698YoWtSrmqFJxDR9beQxZMXmSn%2Bj7IBPhLcEtFLY3m%2BjeQFMq0GbPCkikiXKOKZhuwUpdnRyq0vOU77r%2FCAmmkhCad%2FzmRpXpfveOEc8%2BwK3rViucd1EOOV2ZIpsdXiaScMu6Z%2FpC7y%2BYRWLN1hA9dicZAP451%2FOy%2FFIOZrjdwvoAbni5QEAZH3lxhAbs07s%2FJiiybre%2BvAirdNcCIReJ7mnK6iEPM%2Bm5L1yOe3b6rQhfVHsKxIz7U2%2FVwodXL10SwnO%2B%2B9%2F6YqwrNeVbkw1KmhpnLwzDGx7S%2BBjqkAQnycsNWN%2BmjCuOqMOA%2FxbrhsDvrMmjtU6cjfCBFTXr%2F%2BYxryaMNvH140oRlxpTZtb1uwl9YSjG2csLsVLgnkeNmhKWEFLbRKnvUUeXTvaWYDzPkKOSKjQX9JA5n2yejPshtMb15R2KxEmo8KHD%2FygfRkzVY72YPxkVd0%2F%2F%2BOgrQvoYeRKJxwULa3T%2FFsvCBEAcfGMOOZ7dc7VPJRCLTKpPwPq5B&X-Amz-Signature=72312ae339867a6c91c00f4dfbf1f659ce630168f173d10fdae28f8eddb03eee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
