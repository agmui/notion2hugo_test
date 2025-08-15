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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652UKS243%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHAY9kfxOJsX0H9EpWDW7Id1vgVDXqgbQOJy95%2BGgI6JAiANBlop30yEvKteq0iT82cLeFbVMOrZiZJlCLI%2BSKo98Sr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMwbjRFjzbX2S%2BK%2BkiKtwDQkA0iyoEXIlAQPzqSL%2BHVXqlRTcBRsEFiuoGHDwU8KdmZ%2BWYIUFjkAFW7NFCtJNWzfUknMuucgxm7xQPeH0NkGQNEI6VSpaKwMcKUK4MHxNA49XWhRnmmO0PTyoGGzGBUSTff6YeAaIVRCHX7HuAIlPA8mPIWJ4BeRI4mGOcO78cTmd1zawuprX7rC6Ep5xGI5U%2FBcmH3GhP3BG13oGG%2FipFJ35lwleeCMWuIj1k5bYbPxbgmFMaJiK034L9bFwHgJ%2B829PzbuwJhE5sVKkzJ1ckvrtUF9lEgNf6NL1xcz156AWCsx9FfD2ZcA9YgSkOk26PmxwWZaPyfaTg4g%2BcQvQcU%2BYuxbEWzocLEHf45ccni%2F3m24fTBD4KcTGbn81rCzK1UprkR%2BTFoCAkac30o7bHJufghEriYX8rWcJRJZG7KH2NdZLZHHe5XtTt1n21Eb0iti%2BJzC6OBtuXMiDGLIsedifXRCfJ9cDvREj2vwHDdxS1CVhVlJGKKHpc13qdyNSWlZAWFpodSVsgdn9S8qVeeDtpJ%2FpXEMo4fwwj86S9WIBkYOrmqDEGTuRNJOhfXW3vEg%2BKaw4y%2B%2BWCqYhydx1hmoFG1hwNSCNt%2FYFEpZ5sdssC39VoUXXrQxswoKP6xAY6pgHOJG16s7333y6P%2B0s6b4j83oxJcZju903P8MMXpNhMOpPVj0O26hzBX4htv4K9StL8ugd3UklOerJJtAEdAyuIdMPp8dCEdLmzh5bzjeq4Sy2Q0m5SLnry9l5BWEaKrT9Hezpj8AdCo88lF9sHcYC8Enyy8aK03y3tH%2BJ6DIG%2BygrxuS%2FthFHlkQPu3A8UPStnDYXp%2FVudS5OkIiZhYgOhAhlW%2F6Gl&X-Amz-Signature=0e055b3890a838bdf8b7758a09b7d707ada18a857c7d47d85fb465c0cde77054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
