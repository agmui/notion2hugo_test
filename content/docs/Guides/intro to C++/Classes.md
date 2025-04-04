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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2ZSJ5I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8Sn4f58KyA6HWho1LWKH3J3J7QM9TcS55UOLwM5aQoAiEA1VVWGssbzH3bcTTBZLfd2nFUzA2weUmnPTLvz9LCya0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoWYkYuNEiq2YliqSrcA%2FebtIzXXSQN6BEPC9CmcehiJ2K9PfQ35SjLQvQpIJauG4c0RLCvpZUBEOrO0wSOfrRerLYGFxlBBAXeJk1PrPR66ZwgTgfGyJBjxjJtOQ21KhP9TnUDmT%2BKLxnad0%2FoKTxfM60Cblo7fJj0y5ZTdjOkBQQGJ%2B7mI1Xo2C5UArXfsWPd62r%2F6pRJtgre1PfmQ7gT%2FjReMgZX%2BrqKSh%2BSN9Q8JPKMPv2mq0DsR%2FHvCx8jWVjRuH%2BNsrbyuRaydglKbng0xbt6FDBk3gOa9t8Cx30tg9p4FUAzp9GqOJq%2BipX7qwR%2BVWJr6SMiqbvcufANwfbNpheo%2F70N5r11ZQNqx427dOFSDVjQba2Nb3rnoh5BZ%2BOZ%2Fnj8e3xL89XwKB9xWYBJxDeDsiZcEAgrk6Cxl3u8qFgEO82GqTB5MCwt1NVxV3KN7XpWvCwsW7v04u3MUwnREbl3M0GqYFYaUhFb9JU1aTFXFb47ezVG1f47xnBa4eLF7yv5R8SdoxAlyIrjIhnqqs6G3rZay98V5j4WDwDExVAH9OKXJvldOJA46rz1Aq%2FGbZtP9CR4sYJ9BUQ%2FYvDUvHBQRoXxT1pXXGO9EgYzW%2BNuPiO%2BgRUelTtNZiQwALHglQGUb3mOLS2NMIaCvb8GOqUB8QS3J5GPeeT42xx%2BkVRaBoUYcdfjiI%2FIzIwu1nixOxEvNj0VD4e%2BLpLacccESGtFGEPYyNP0cBJbseeHXQcTrKCfZfZXuxhgc1w64KSb0HqY6mlvl0jLoYl3CvZy%2BF%2BJDuGdpCLqy8YaEiy9OlZDcEt%2FodZdSVSLz9Rf%2FoPNmCMZL%2Bya6CbrWqhgdIaSDJJk14RgKhQg0C%2FtoP1VAMFAPdIF6kdl&X-Amz-Signature=938a3f1eb24ce07d74e1f703e29a7d4c564c8c47cf9598cc74b3714b74ca6e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
