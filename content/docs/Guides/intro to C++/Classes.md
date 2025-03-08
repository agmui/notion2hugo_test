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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N4HX6BV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIFuPOX10fjBwmjH3gS8m9XTdppvs48ISeP0KL%2BllwMrbAiEArJx%2FGojNgTJit9Pvq6DHyXh57nYfaVv2UIN%2FjV4nKQwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCTST75p0VA1r7TvHCrcA9PHcAhYjzs9U9a2DqgrUVDSFbE%2F6s2Uq1yPuvzINeLIUTaZfOih3exOEd7HModPPnGGIWeRAw0X6isNhbZ0wJRX%2FQkYOhIBoaUZlEDx6KXEYGkhyfKbKjME83hngiTz9QpDouKk0ql%2FWTSMlsdZqX6qvhW0kX28pjesrkrlY35N%2FrBHuBG%2FyFsJQvDw83dGEiBgWl87nD0fhTKw67BL2QvcndOcVFg%2FSLM2NAgM0HvQTYvf1pkdFVN7du1HW44mKYPHa5b5JCOaGlvglvIEnSvcYKv6f%2BLn4UMdxiYH1PL2VM6KsNTJ0pSklf%2FrdE%2BXrF6p3H3o4QYYGtE6imAw%2BUkidBGzQUZmLeUbBdaqrxuTCopkzS6z1bl8NNTkFJkYXLV80XNz9t6MMVTxJIMr8bi3RLjdY1zQcpLHdTUD5i%2FHik9fESwd%2Bk%2F600UCKTm%2BG9UDWmKdn4REEoN1vD5yIlMPQ%2BlW7njluXlWevENtYSq%2FoUYdesELIU6RyHfrhCrqi6HwtcTFadBrG1FdhbaTvZH58VDXU32tfknJ1XtsEzKc6WvpYZsZYhHu0gB4yimzKH%2BnSjI16FkHyjyVaFwDm6LqZz3KszgROs%2FJhsHNduJq81NfMGIsYJCwyK7ML29r74GOqUBnJbRAg6umuBtI43%2BEqEbIcQFxoW7Q3eNpHh8wK3K2EQHHt8ROFmbJj4DoZ8z%2Bsl%2Fxk9yJrMZ2ftY9kr0qxeoak6tjSn6vImYzFF%2BESWXxaL9YQwviQ4Z3j8FVrblQmONt5ZfJg0Dxa0y6r5E%2BUDRBzyavshskqcParzsQJxEbb6Kqyxi0KJ9ceA%2Br6l6DZBgpNpJ3VLpk5UEwxTY04eb8leL5sNE&X-Amz-Signature=207feaacc2a600ac0b31d4c2ff885fa19194a291e0b93576bf32461869fc286c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
