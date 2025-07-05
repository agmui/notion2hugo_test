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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643KIOSU7%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCSyX4QD4NZeWDi%2Bmjqc1XSNvYCYtJGRV6DEkzFZj1qFwIgX4SVGWBfaIPbMm0Me8SCUs4AWaXFS%2Ft3V1Duibv7oxcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNQ4Z9okeMQh00c%2BlCrcA3bBp4rIWl%2FE2ExPeweCX5rZnT6HtwjBPQveKaGBtkyhRG8DO4OkKtDKK6sF4suQqBHiUltsVMZMJH4Pqtuf%2BgWD5GyS265ZaVxKQ3mzZUPxRXDnEPmcoEm9o7pRo66w%2FmORU9zFkL5raXR3lk4EDpAMBFE9OKDYWrEnoDF%2FW6DvZSBpTYM0iHuX1Ff4IpwN4ixiw8%2FxYxs6Cfxl6gU%2BHDAPDEi0VoanGf%2BlyFnZx7h7SlrysPbtm5p5SCUg361LXg49aPEezEWImcCHeEkkcESIsId%2FIY3jHCeQUrLUReB2HETXQ%2BddWnn43rQ3bXuAWnRm70mgfwImYTd4LNafHrR3sxPkHaHkWi9VAsRJ1sfDMKohhVXDiXCtzo5u4sdaKJ4RpxbdA1oa54kh26%2B0PsRgZ166AhHKLPovYgMbsQnPwlKW%2F9a3H%2BNl9oVWg%2Fw5o6qDGeGF2Y35x%2BxwTafg%2BahsV%2FMYIIiqUAnqjL%2B8rBPIKNXJ6ZrCmVyhtjmewQwzA19UU3uYdmMb5N4Yp3v3cYKkmHxpZGNyU6B2RyVeNYmARGQCK9BvZ%2BKIodx4WQDjbK2fUfCV%2BWJyEs%2BWQPcWq24nuBwfoUZ7A5Ph9DLlkLIqSPR2zAx8DWLwK5sWMMfppcMGOqUBmOY8SJWr9qOOL%2BaoVr8xZQnG64%2BBTfZumB1wFS4dNrMfBUmWJ0vnQeyABL%2FQKAXewFpnOqwyAlllkW%2FRe5QyjGmTWe5%2BdLGIAKiWtdjz2v%2FiwSvUFA5yW51PgY3JZCh9CZiy82YOA9Wgso1BvhkGYWPzyK6nyziJdREcYj0Bh19GVZM5Br6Pthcp%2FqH4HcEhVjVQLnffsTmD42X443XDJAznx3PN&X-Amz-Signature=45b0629ad69a3aba4e579ab7aa86f1ac5fdad575a4319ec74fa6a5fd2ade8b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
