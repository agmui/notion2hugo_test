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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG5YARL6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FNTsGQfL2XNCvKav3b%2BGG2cie6y3eTbLqnNp%2BPsX2HAiEA%2F1C0K8W0Mlk5iLrcn2iBX2TPMmVnEa8zmthRUkeSorQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4HH6IpEIdcwlom3ircA30Gnac1ob3y%2FBgHjDqNSGqZ8pXDws0uZXZ3U5uDmQP9R3DAYJ6SlmUZD35zNupVg7wS3%2FfYAM0aUyvgBw7xQ6FaWPq3a%2FvEYu8LWqaWf7xwKcBqnS8BTERwp2Jmi%2FmO2bNRZfMaRWRPq55ZMw%2BKYtiYEJN%2BWAS5kY9tX0lWw9n%2Fiiw24Y4M5iGgy4SLTRmJskqrno66KrCZqgX%2FQ1K%2FPFUGZQFFGbPk0%2F0dWA6nZUdanvQnUs%2BOLs6PTqacGmLU3tapom1GpcFlLt9bGvFJM2q7tkeEGJRZgpGw0D1%2BKDzuxYU6DtR%2FLrSgD6FdFmMqpJmjyhOTBwTVe53340ke3syMbAMk2uFvHwCnkJJWitvswvePPzsbrouY6ez1lHgzrJBleaGiRxRsXLmBhbbmKwXWL2F6Uq3n4V%2FCog3EGV6LXtutXNAeVe7FVFiMjswpUii7hRgHkVWyDrgnn9rWdRjV8GP17hhCUDwDdA8hcO9i7TgJG92H%2BJRuMVDziL2efR5nuuEnpY67fyWO%2BTp0MAGJg%2BQPk5DTcGMP1oBkgmHiHYh%2FVgAz%2BP0qzkTeXBCsTX7EPmnmFyMHV2pNVpmBCSF5kGeW9gvCjKEELHBivk2YkCjBQz2h1aamjyRlMN7XjMAGOqUBy%2FxnQr18vrzKzpfE31SrxnFVCLOU%2FID3aLjmu%2FErRaKlN%2BPB1a%2FtDXgTrzImYhZlsJRSnZOsvdBYZc1HOZK9NkJ3qIHAjAotpxCo%2Fmc1HyzwzYh%2FS1Ng9m9GqVX4a6LVRtUwdz8%2BkHIx0XZUOeM6N8dOEhSQwdSIMj2Fgm4CST6%2BF%2BtPK60rm1mNcaywC55q4XZzEnSavfr0d3DI9xBBpVDYeqnA&X-Amz-Signature=0be7e1f1c19983df7107cf14b85c689b619d121b81d12fe0d60672550805a02c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
