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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJKJTB25%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICyDVNp2EeBFau8WWQw7NTcUN8035FcqDG3j%2ByFsfnn%2FAiEAkrcY4jqGFVJcn854c%2BfmezoYUPvXeIUQ%2F1MC02zGVlYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRbocdhW7mdAhHSxCrcAy%2BWtJTokViHiV9NXqPby0%2BBYvCje5Ou8%2BkMY6nZOMvdskI4ztdEg2d1sJlncFVTMy7Clj86evC2w94ozdDXE%2BJTDqajf0w807LGPvjauEDwwCsJ5NV05Q94IM%2F8Qxu1cdQIWxiuYg2Uhwf03osV8yDgpnBjW6oAUDrZJfhQLmmuSSquuWyU6lzq1rPRlZjW8boD9LW6oaOzT7376rtzFKwnmZiHH%2BlctpwA0E0dPmuRLj5qj7lBf0YHEDcPykBOuc0C9WJUwZwwLBazfiUX3Ghiuncww%2F0l3LJkEwldAuf53XpOSVNkSItNLpi0WyGdepD%2Bk0eSimEZ2rjzP1YCvwrpIwyzLERzOZIqV4fnW8VJoDyzFczsRp%2BK9x7bsYqnaD6lniPc%2FfMPt5LIVhTW3hSxd2q%2FvB7l%2BAZ2YsRMrlEQc9oZVcxrTUPWgonEfwhm2VvVb2pCBaTkn0%2FphyNbtY%2F3afg2M9AeX4B%2BM%2B6drMFdJ%2BDXkcuX57rPt%2ByovbAIYxvM0u830oylf7yG7XT0LQ1NKpbWfPWmqs7nvDqvzAI3hgZWrnoaHRsRINE7PAMMdLC4xQHZ4fDZ7Z4aWcy1hBcDeLMyis6PYDQVMXEeMk2OxRodISibTl%2FGNppoMIaH4L8GOqUBZbIKSY6R%2FyXCGJEDl9TDOdv2UYDEIAyK7aG3Y9Ie7bZUdb6CPg9BHQ7ro4ho4VfUDlEozU5O0wQhyJ9pb%2BJUQriijePlADBtwjOxaxkkhFwVnlizqKfyn4zchxOxeZSNOsN0HraoNsOxvjUNVFrHsYhm01IdUtFmGajt0mML5b5AUQvcRtRx6rj%2FwycquuWe4TzG2J%2BLYtD5tYxEFCuYRbpvHn%2Fy&X-Amz-Signature=437d6e009910f3c87f91423ca35b9e50c18de4e4830e6655e75e27514a55b349&X-Amz-SignedHeaders=host&x-id=GetObject)

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
