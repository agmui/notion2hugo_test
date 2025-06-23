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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMHWGPZP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDwNjMYXeLvhzbHb09kbnyQK7B6%2BxIGhCWEL9AzD3HXlgIgU%2FAMP6bk9P6DRv5yt%2BzwJ0BTzDOA33gD4FdZ5gDSJjcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFzUrAiQcU0b2nMDUircAzLgnYfPY8BCIAiyhje9O2oi3fevo7%2BHPWRAm0u4RrthU%2FzYQ0sHSexW2F8BsaiQM9nNr5Z8%2FkwA8vXDYU6fqmbQlDNY9amiX0nOEXp8sggdCSKj8SVOJQ2VMK2U67X0l9QkLanw16Yie7DIxfWchVrgHLkTQagmXC7kSsDZQYz9SJf4RCwEvYNzSk990sV%2Bb8%2BM%2Fmcesozel%2FE0CFtZr0hZ6LHwA%2BXuRPMeZzw%2BBfGDcVH6vgQU54jkH9o5RTx0yNX4hMHQ1gscQahUgCRQ60BLGWmLgwKnfg%2FetcKjvs7KwuhmQjOiH0my%2FcmOceIM114b%2BeUKJ0AUaIvYs6XENopoezjOA5ZkgNu%2BQjaRF2On8bh1k4uN4WcdtB5z9cxFXnSYt%2Fw2LHm4%2BoATueJkn17xMd%2F67%2BYtIZj2AH4GL6cSC8V%2B1Gd%2Ff02ums2fu6xYDXUQBun41EZVCzUwPvWC%2FAHIivD3EQna%2BH9uEkf0DXWlsxoLKWYXs5e%2BHAY4e5UtJ3nLW0hPb6Ik0AXDazn8MAWW%2B1h%2F83FGXL9%2B9M9xBpkPHNr%2BZVaL8FFmts6izU%2BxAZLMLe9rWOpw3UKXQEdDugbtOLu%2BPXqacb5lqHKsbAnkzSkBcEDW3S86QxzOMNPz48IGOqUBfNvgS%2BdCbyak8Vlrn7S7eFv98dN9ZLMN4N1ToMMN6GR07ky5lnB7vCU9ovuNYI1bsyI6%2F9hqmuUBvOWM27eqWH8pq2P2hOiCqFv9KLq0tMdv%2B5zvcD8OPZu71m89CFyXp1%2BvQYRYiP7%2B9oL7Sc%2Br2gKls7QQ0Pnk3ozEaCLWIA0KahsTxvgdOJyMbN7gVYhqXj8t4AxBrjSOrhfD4OFJ4Wp3sHQl&X-Amz-Signature=227b4539d385c3e1214c49bbcb4ae0fdc0a49587d07afe91f92d637eaef6c264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
