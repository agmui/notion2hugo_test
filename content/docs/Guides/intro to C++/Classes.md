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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DTB4QIA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1Y%2FM%2BU5Rpcyr3firFeTE47D%2BpOcWAVAVbPUBP4%2FTDiQIhAOgMy1CtYDoNLySF1DMOirHssfvO9oX%2BUXMSHMWwWCgRKv8DCBAQABoMNjM3NDIzMTgzODA1IgypkohVlbqKv2pCbPgq3AMylcSa87y0WUxGO3if4tKQizPooFBP9z0yysJWD4lj3Rw9l83jwKaBop%2BPvIbBxYCicqyqlegtMYpI5YK6UJZF0egW70tr7g2iuVSKdm0IQokN69WKMPIrWzror4PJ4DHH4uel7hMQCzIrbNZtnXZgwazvH7dqHWUkM7nwccb1MqMcp%2Btv%2BEf0h8hPRzqwdWWCMW0zXSIkhlnKJ%2BXnBeahMcGq4Pft53yaIeRrDqkweW28PcjdF3uXmoD3nqjx8VfabbBivkkawcg0c%2FmDeuUgZT6xc2RqIQTN2kIEFaebWH2lXOIuOSHft2fuoMGeQvbikLC6GNRQXWN67nLFFKHOExneQ1Za%2F71nE5NZiUwEfKLDZRMbHNyLAMKimQTEzsp4qVuvQDNNLjXt85rXHUHKhInUCzK77wxp%2FqAKvybliNgA6HO02LE9pHmMx2xZTrGXwNWeHNj%2FT%2FAn90Pe8butEOUyGH2jDT%2BIiLpgIfAFKj1yO1u218tbeFfbhfhmhciwqxSF0kUaWewNUZ%2FcXMRqbO2uhodGKSxldCA6cD1cAWUtGdP%2B0uyef8c0KBs8CH%2BxhjOAOsKMfIJD4hhtejBKRKcxLnxKwZm6l4mFF%2FlSw4wQtaIkJ%2FbrNM8a6DD1%2Feq9BjqkAWV%2F53mWcTBcefHdSN4tRgoimY5mR6ZUmESTwj9FGQ%2B6eNSzCs%2FV2SzBRMxT5uOrr2l6zfdBL9hysAgvBNDJsZ9ZU45EZ0hJpNZ0mkCR5jcPR9AqKNbb4FrPudNRnX77y0SV0pvHkWnFuO%2BO03wtA%2FCWgBgoPu%2BCfYYQqOZdX4luL%2BSed88RztMha78vCGybUyGxXC3E08oAIzLeUY%2F1B2fP5L%2Bz&X-Amz-Signature=d976d1579915c85faab6e7d8366c935b7f904bee8c979401062493db21db7ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
