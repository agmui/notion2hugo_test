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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYP7U7AO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiJqZu%2BUhyl%2Fv%2BwEuVF80gPTRiDnGx3jyEJ8VvNMZLgAiEAxQmPcbcHmCiz1ru5QQnejJ%2BylbROTgY%2F0LG0dWUDhTAqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNGNHIazXQ7sOinOyrcAyvhSlEF7N1iq8fQtneH7pQfC6eRKA%2Fvd3L7NfTqSYGFMj0Wm5sugD%2F7Zpp2zHfRYOKC%2Fl9QeJR0ysJmFAh7w0hxU%2FX%2FoYnDyfLzuqL47tMvR%2FwtJ4EFOMgXb8tq0WCAFFR15F9XKcgYuU%2FhuNvxauC6Vdj5hLYV4BiWyPm6A4sFPI0xtI7Ezo7Y9oJObwV4uEjJ3DeWUb1pNSFUumLAl8fjMqhttMU9XLTXakoiR8NgNJ%2F0ecaTgpVxU06mHU6kCIJYTIW1TpglVs5y1izFggdwJ47vPCOOmew%2Bud7bibsSAI32C8InhnF1oHM0YauBv3NI2LK3vH5WoeyTHrvS4xVXvdtXB1IqORBHpOnXd0Ktbi41Tf1Fdi8721uCeKMm1%2B%2FdZRPgBBUJniDeWDReQtxu8VxjCflALdquh40mJw%2B5zZhJjxmfqcKzUA5fcJWOlucfVrEkhuDFgDJOS7RheQRrBzR%2Fb1FMEF8%2By6dOx1ykObXSHCdsT2ZgWw9Rg5bTRn%2BDcdm7uNIhlTVrb5TbeDnn8MDiVwA7V3G%2BhkVoEEf9FyFmgsVcGmoO73iOE%2FTMd6eS0MfJi12uFLaxvG4BKNSXrAvFbuUIyBSbmZdUezoiSXpKlDQnRYeLTr%2FPMI%2Fd5cEGOqUB4f6WERvGVSpw0uDgRLs1%2F4cSTilwrRZ%2B%2BjutRGvOjLOd2DZ0sN26CBqP6wKPxHXeR95eT01JxvoGhRIHX3GrTjUvhpPiqONcY6KHW%2BbUDyatoNwxFN76xp1xjiG1GtH9pkdqJP8J9Zmkj2%2FT5%2FsfdZj2Z1qASBxlJf94hoOxPKijd%2F6K75g8RcA%2FMgqfIp%2BHwzk0h5RyRpKvolRW%2FgSgFMDUp5PY&X-Amz-Signature=98ef85231345bea51e156cdac75734491a2b78f436409494add193f2f445e3b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
