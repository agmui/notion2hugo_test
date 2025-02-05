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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRM2WPT%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCrroszJpSRArxSNqxCmWxvcoau0oFvBwtJD2FAFTIaJAIgMoNl8oNK6WO55P2%2FUmDWKYH%2F3OhXp%2FtEQQjSTX9OV6Aq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDF5b%2B7ZTrOpL2Ye8lSrcAy2%2BbdcK5xy8sEozVDAORDeFYge47LPVf11tJaOgftt9CkNSXMuBvUy%2FCwyjQkM%2FZvArCzgVNHGs9WofgpDqTEfw3l6Kz%2Bs2MqMiHUjBoicAsBzDyn6gkF44dXBhUPtWF9rp6ZoYoRHZ6xX7202fqhyqgOOf%2FO4xpt942EzYpzJUgFw%2BOVw%2B9P3CqEK3OT8r%2B8A4BmT2lQ7%2FFRjN6oWua8RCoNcbio2bbgfB797JxxjUcNWX%2FzcqGLF7pYYZfLKKePuckcSJCPjtQzhISPvEAftMTNdjyzAPFXWxjzvReqyj%2FG6alhIwHKN17DqiFu06Jdx2YznJYxaBIMz65wl4c5m2V0hG6BUB1HYYm6Neeo%2FLNCDyPXvd7%2FYEX63iynk2WlRwzPnowfe9BW%2F4PvM7ds6878y4JucNIauI1sdxWAGggz3MMWxq2XPGuFuNjEvNszwdqj0WgF8CykFBD09mbXuKn9lMRH6XbwhKiFqRCWJq7ym3iAr4G79iIvd1%2BJ6cLFy5DZxsVjHhPAj4t8d5h5J7U7VlGLvpOgdl5zOD%2FoeQyhGR4OF2%2FBb2uhVaNS%2BzbEWrvJk0VqCwEtiAQLjzQgh2mqQgjEG0P5aMWHCbG1t%2FTj6NOG%2FSCNtv7KLuMLrQjL0GOqUBLQPD%2B9rS56YjQZyKHh5Ygi%2B94j4%2BIAW0p4JMXVV8pnqYvFeyFvkGWjlrAWhJ5kppstOjYgXYXQVLRMdu7Ts1NL6o4tKPvNqY5M7WQaAv73FocyqaugrgE1bW9xHn5%2FiuglX0teeQM7sry2KQuC9MJkf2XOgsedFjM5kg93o1aeJZiqsFHJxRFhcuxCMwgEWgzk6uXI%2BJIHLN6dIldMzo%2Fx4iFXH4&X-Amz-Signature=e9c7810a469f764f67208d1cf497a418b88039d47f7911313af7e8d2badf91a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
