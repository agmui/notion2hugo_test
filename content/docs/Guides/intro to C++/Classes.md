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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOAI7MZ3%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIE%2FNHwb%2BfY6%2BiYWZBX%2BsFJBVvEAc9ZyACMNQ%2BYeY7YVPAiB42NR6SsQoGgikG8TDMjcKXdbye2o56ezpIHParU6z2ir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMvQmsn6YBhVbrLWKjKtwDkAlgAzOSfZD0eSQdf%2B6D77juZQgonayKviBbZd3vExV%2B8cDxAwRgABBOFn%2FTI1jwim%2BgtPt4yi3dHY%2BoISaqUfaYW3C2yGm4DExkqktW7wNbhdpgm8zbMUWhxQyYWuTC2BqBq%2BdpGVpSyDlxMNd5mjpE7wWWs0dwsA3f2aBiAMTwKjR6KFcmcxnYHiCtjvNuEc6meE5VfoMHPJFWIBZnkQsq8RYl533EWnvHPSs0UwrWJaidpXT2fwnwW5B12MFBU7D1YD3zSFxYKrhCdyZOIPpfSuUZdT4m2bxPiKfXtj%2F26Pu6zlhFesBrxjQr6jcIaXeSywYjmc1jLwAFJXmVjKvVZ4JpAjtP8WuD%2FjNjapUf2Pne3nj1M1nB%2Bea%2BopyTZ6wo8UzGbopC2Zdbnf1gbd73u8t%2BbaXhxM0DdBzCVkpoSV4MsKUA1qsxgLN5B2NMPQEza8Sakve2etX%2FexbRg0I6vupyCLpz3mhgkeZAwUf%2BT5j3u3lJV8hskNOivBGoOBzwQCeB7Uao%2F%2BXmCxEmjfGajBbNhW9d2BCMcy515xwG27OaFunjHK2lm8gdxO%2Bbi5Z5kyrQjmPrpQ5Y6pZZX48%2BXV34hRwZE4QJqMI%2BySmgZsjUWDXJAHSmdskw5rSKxAY6pgGT4vYHebIKhjzcsYnx9YMKLgFaIFFXquebYWdafgDLSoQkRgym0FIduMxmaWN4TRTls%2B6v0ga4AyIpNKdOjvFExOWPczPW3bqA%2BgFU%2B2mhmOurttTUidwW45HcdyJZbwb%2FZj%2BS4pqTOleTJi5mCZW9TEhwbriTSO7GSArC4EzifqwM80zarxP1nKzKsl30lJuQdJ8X83KRcDUujXF6BGRGhNNxjNhZ&X-Amz-Signature=02bba71415dade26b342a8d37c2493907e2c31fdbf4d6697b617778490279ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
