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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G7SWVSX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4i1XciD5eyr%2BVN4aDSRFM3r4sUyoHlgWyiFpJGskb0AIgEsaEFCIXDyjuAF3YNt0nzrrHnTd99PSXfNafwtGqRdUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWyMwTVn4ZZjc0PjyrcAz0MOGI4ZKkd1iQSa06tZx94NrBomCYl04arcA5eGnvdplmz2teUEJdnKihJ2zhTfZUjiIenv9FFtofxF69zosAiYbEyMv%2B37Wmml00Kbs4GPaK9A8MxtHYEDTO7TL41ztIWHWryIQ9ZQ6OXBSB%2BM3YGr%2FNrb2Yhufim9hSGF7Bg73GFeGvNwkOZ%2FizpgJMp8ZcEUA33I%2B0VW1ybR6uNgeKx9W4Tk65P0%2Fv%2Fzbx4CcqM%2FpvNRCmbLLl080ZFwU33rtQUUA9eDDSlZKZfBl0EBNzgjNl4s%2F0zFiOSI5j9amfSMaw3aMX8MxOycWY63DN3gHhCrkYd1lVXJ9GHjcvDL994qb%2FUWznUdLp788gtFd9mk4Z7zpgrV5MTfotPErfGuY4aJ2czhA5UC631EGBWAboFcEIg1gousm%2Ffl8%2Fp1sJ3DFuNSBQB4iGq4HMULXmWEYMClRh2NqrqAYRcS7jCmiOAyEty20O1qxQs9qiXD5RQA5pYdzT9txelAc46NOXUVeutUg04530L%2FjKYUZF091EN1t8juaF9tD9nY88FA5DxmC%2BUMaYF8Z6%2BqZOxLaWh%2FqCIhtXpHWDZwbHwN19I11h551Zz2rywh6EmJKwHotug7W%2Bd42TotQIEPJ0fMP2K5b0GOqUB86ide8Iu0nh%2BDbW2A1ij4s6HuPHMWugexZigCZL9HFdYIsO0gyApsvQS6B67kJmZdd9Jz2XWiun33CCKAAZhl2lAlPnh%2BEDSfAMkxl%2FCNQAabcgRnoR2kzQEDh6XmVMR9Rp%2BrXX9uhox6ZngqJmAWQkF1SsoiGXz%2FecpgqSAvNinNXnx%2FgHcEo%2FRfIuTwdPS%2Brh9FHCyssFBvyyLESqx5kox6XJi&X-Amz-Signature=8b5dd0dc21bcc06aeae9829e15bf201e712b5c845839d54023042c15c4d00a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
