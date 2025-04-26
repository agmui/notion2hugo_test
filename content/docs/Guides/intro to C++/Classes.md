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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCEPFNYL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0mtpCJ03BZgIHBqWfCr8nQ7Iua9CjmQYLBA1PCkK2WAiBF7OMrW4Gaidy9S7f27NYFEz2gDgaHsYRiBceE7WNsfSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMPdY2N1AU6DgYPzk2KtwDlX%2F6z%2FNpVCafiiChdYbPgSBCZ6kzI9ptztOrgAFT9MNscr0sZC9uohXfWhbIfPBtnLYqDgJFO7ad%2F903UF4zXfEARkbM6IPxoEnal6RmDlRETQJtXw2wJ9C4bWEAsUZfqqLOU3%2Bx8NQiig%2B3rrezrO5jyDsp%2BZHSOqhwYZtdIQZitoqvxnLrGSkZce0b783F3GbN8qatDsGN7DghyknkXpMGZbTFeY9mHX2y1vlodlou6E4EWk%2FzhUXkWYJYEp30l1WK%2BzbwyiA3kDDvpJh%2BZvv6G%2F31cdV22Ly0ZfV8ikDsXNYkGC0o4R8VXo55so31jN2sOAhGjvQEd4%2BHg0uNytIGv5sNt%2FmRXkQcKvZJjfbYA422UfQW2rpZ%2FmQivA%2FE2AWbfQhnEL5zXUGVTLD7IX50krkGESyM9tQx5RibBRHQL5w%2FfnGNM1qghv5Abh7em0XxOBVC5T65BU7ph6wsKGWBxDD8PGkwcyT1O4NvG3Tu0f1qRBVTqOdjMuR%2FFLs%2BmpkCrDj8J%2Bt8aT2FkEVJjvscMMX0cH8wGpch%2FqSnb1QIRUEJXydILpSzMZP6eRXH9qBZ8SvYmIGius9BKl22YP9JW6uA4%2B2MlIBcJKCYoFseZGLgUj80CLyzD04wqt20wAY6pgFhkQtun209Pjt2zT61HsdImaK8CE2j3b6ckON1Nzw1c1Bo4LvQhqfjQu%2BtPpR2bRe7xqO4tJsS%2BbUAju2iFcduf9Tbui663xcOYgc0ASySrBD%2BauhJsENiInKwfbSpZG%2BpHTZ8a%2Bhj4at9Ab0Hpe9cvzzEunPv3JywGxAN4Hv32EE9h4u4pMbmpI8C72nc9AXaucz0auwjL9ahaGbEgg%2FJ6uImibUt&X-Amz-Signature=6b911434d5f0a7c0245529e1f43f2fa9997c44da39c31bf9b442211cfd815609&X-Amz-SignedHeaders=host&x-id=GetObject)

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
