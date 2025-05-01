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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRDCYUR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC7k%2FrJFRDbUDbpbQfknp6Wo2lJosy1tN1F2fLCR2k8QQIgAcODIBj4VKuJJvPd1nEKEMAYTzd1osas3oPtVeMONl4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkNPwzRwWB2oxx1DSrcA1IETwIWSvWGuA0FVmKhI5HaikE9ijOeYWj4LdkMahcMRQlMI%2BRfUEHQEBT3q59vbAYQnvEfTRsyhsxB4P1mCxNpWB7%2Byn8RE4mRZZhEvwbZChd6HBQxGfu51uEniaEJHz14HeJ8RHQUCpeef2jsoqd%2FByV9QkmbaGChNs9nxUfbDD5ieDAhh6wRXspzKEChVkzP9eTXcak97VLYuRryrF%2FM2A3IIgjFNUXvluOkwltBlEbE6FzgwNpkFHVWVA25%2BqcF98ujycoYjZ9fTl%2FO544QXOukaS%2FQnfwZSeeibi6p6u%2BU1qatX8LzsocA1K8KMkb5wn1ImSLNjR59RwTC4%2FtxyCHV9NePkk32sYRGANoMrJ0TCa7AxyLya9EI3%2BwWkYVjg%2FlIOU13fy%2BoygBzs%2FMteSw7vbrlD5PD8rY%2F11lv%2BBr2hwLKVv8vSLWjwaZ5U3p2Ynk7%2BOKUTvM0Lyg%2F5lC9alkqrMRwd8SfZohqbhAIfvz65b5wD3O9720Kg32lTg7mtabC4ZOxJxk0HeUgJy1sgvDFSnBRGj7MvTTCvmSyKCtd4nQjAYyPIu5ubt4kO%2Bry0jlcT5N9SrTsIJd2PAX3UeYEg3TJi7iCAHS9aB%2FlZLmBzTDqEwc29AqUMLyUzMAGOqUBfNeYxuaIJYTwL5kEYrLsHYiGIZ3Zpwv%2BZ%2Fk%2FaPrleEpPBXokIWAeIJa8BQrJWrT93URjxTruJTf7l01f5x2aen3rPQpz0l3RJshrBYrSxca5RypRozMi%2BpSGS%2Fs8Us1tTOu3%2BLSjeLg4Hl1j5HSeXsLFUpNgroGh2oj%2B2qCYwKF6TUL3FB15mxsdN0WC7GnxCzZ1Ynd71SWgtADKSIiMTVaEJjtP&X-Amz-Signature=b101f96510db2d14239ef5f1b9f0ab34644d90d9800202218731290296f57ae3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
