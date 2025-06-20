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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGJZZ52W%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDr9syCq3J2ZVoqfhhK9OlgBng2XizTVrjujYyJsZs1nAiEA4hYuArkRpPuaey%2B6anKVTYiPapf%2FNWCIH%2BwYgfA%2FB3YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0X%2FVWuJHYg7Y9DeyrcA3Eick1SOntA2KwCfgEmhdkTzAu78892rXKNjG7UV9ZhtAIX4HPVIllJuElht2f4WgFgV18srlwdmomvQaqapAndkhJdXJP95jN%2B6SYeB6zfvKJXakPemd5ZcmPHSianU%2Fnu094JCK7Vmi5CHHNWeIOIOsL4mXcAXp1YmN1%2BJ3lZTRqaimBC14sbn%2BYhfXrHoFzHjIhoC8CPqaZcT57pbZjoAZWUqgUl1xaPXsfmWAom1ytK8smQ9jJ1yhi%2BvNBtm88S%2FA%2B%2B2L%2Fg%2FQQvsYxS2ecWyschPcomW%2Fzl6IqnPn08KtL%2BN9j6SkLMN3Om8TE7thyk%2F%2F7nqvOxTc9%2Fiz2NBeXz%2FCSfKgeMShg99kVvIagoyiNO%2Bu1F2APNYKqatjktGtlPYMKBuUdZAVKvMBC708fcqtkTe%2Fg%2FTr9rxREXYq708FcepjPzf5faSIiuF6hGjOlDkzdXtwQ66MJCj3sBvvPpu94V%2FxZn63ieb5fC7MK3pYcamIyZPA4r8XXdQURRDkh8fpvEIyF8td%2BvSFsZ8XQv7XL3w1zA61YyALpSL9vGfklN4h3KgaR%2FMRyUixx0aM5ECap34orSgiohcNXCk7O%2F6AZzLlf5Iz1Bul%2FzVS05xhvChBa3Qav7tWHEMJfx1MIGOqUBrEnZdmq0ZCpnfQ5z919l1P1fAWXQtMfUlxN5OipJ4qCj3IJBDtovTzl0D9rFO7UuHhJETsvAnxgMQtJftAjmwVOOI6%2BvEAqZVdbwE%2FE8U8oURAYuaxEoLHMmENCVYw32or98aJ3YtajECXsiUWniS1sS5lO7JnL9efsaFlk6D7g%2Bmg6GQ166um2Be6QpkTJUobu8RfnVwRIL0aMYt29lsuQ2tsK%2F&X-Amz-Signature=00a5b162fe9ba82a15c28a5dbc157714e360b62485f6bc49cdaf7a2f2d1d8411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
