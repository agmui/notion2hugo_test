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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCT5Q5B%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC9ryENU1ElbEpP%2FnyK4MfXWXVZUP0Tw1dqjLDTSv%2FaDQIgGZlQzoP3lzSewIcsf6rvJtrhUFnXaqQUiYtaKA1mJO8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBuC8ZqBhYE8m%2BRmuyrcAxDMJ%2FdSN47XYLtqr1xPIscf6VkD%2FIMRs0%2BHiagGVFjqcBb9kg%2BAjesOe%2BHVChkBZsJ3EpUhRPcp6oQ%2B5xgBvVNz0o90TZSeXt7zRFzCpIRjpbeL4ip7wTmn6wJDcNFyaLNog74JykGLYA9%2BxCWfrJhnwzZ1mY7GxNAARs8eIm9LP1Lipmy%2B%2FsQXQU3wJ84Ti38X9zsJ6VkeGnNsguPzYtzC%2BKORVzY2xbkLuMSCPoHFM6FmvpAJ2j7gwxcWghOdyuM0Wra09ney4vVsYCu7kbwW1%2F2sYn8YUWY2pafk1%2B16LcERDQK5goVwh%2BAXi%2F2hzkdHbfDnknHch0%2BxKIJxTrZeRkdsW6L3sRpbQJn59KTf3%2Fhv%2FasKq0MehkBofSbPuaJCWi1QMlrs0daIGh%2BJoG%2FDuqRUfbXvGc%2FUiz%2F7sYsvkcsthpoJ6D8H39RkUE6v7HVyI5UrIuulUy%2BKd%2FycJija6Wgv90Mf%2FXcHx4ESNZYYp6VN8qo2wep%2F3sAgRp0HKOYWDKaOsLQ0VAaSyE%2B9RPDZkEUvF2OXGwdRFc0OTRGzS9belkrthXUS8i%2F%2Bu6A1f13SrnIq%2BNcqpya2VA4f9bkJwzZgVCf6ZdKM8ltHoTTudVcmvW084cH4H%2Fj%2FMJ7f8sIGOqUBQP0iN9DDZNpNZYPUqSTPGOtSqL5zH2wcnmku2HI3%2FI7h1LXm4lCJ%2FMBAygbYIvtfS5Ghh6HcweUgjijZw%2FxxKGKDcYwIJOsq8KDQhsOw%2FlgQEPRAsU8vVymVzIuoUsER3vIc8bXnYHD5TXyrl2xJujhSXmvrz%2BZ%2FM0jZJ%2FTyN%2BR4SfHdtDcwcfIcjtglWamwtI85dqxTb7VJH%2FUDyJAoUT0W6iYt&X-Amz-Signature=372ba468a5dcf35600842aeb6171d0ed550974697cbc0022e2603a00b5471872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
