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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M2XCQT5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtt3iqNfDJc9%2BNGlbd2pAGs%2F6Vl7yqfPsewk7EiogqwAiEAqPhmXMn42AEB7ou1OcfH3qb7UkLv37goci5SQV4EoOcqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmRRMl4xWkoffvZpSrcA%2B8Wf6s7G52q2T5lYLZoCtqzxo3Xdu7fz5%2FejTjGGJUebdCEc7W%2FUGJiZQHAyzW50kBj47qMaMD%2B4h67UAGlsz6jopPdEi20948H3TbqmGZDNKAZm9MZmYOQXLUqGFxHfR%2BRf1K2MiSvi6Y0sNCqhJ4yOxhqg%2FQQYpTrhTzXoa0YShWRj8LHPDM6VuOaBqseY8yp58h4ZbyZHTDLIPvvPcc5YJ5qsnEI7njQc6SyV6UQDGhuUQwNvQyOyhlK7M2C%2BFLz9kmDRZ84yX9tFZLPl1r0T%2BGgGtYtcTXDP%2BkP6uq0ukBXNtBzcs5K7wEnTGvBuQtCGemdQYf2NZK69%2B0xLsE2TJCQvQqxq8XMwaMGqNDvmWQ297%2FZncVniF%2F6wIrqOWRkfm6WWJQnLIaKRbrhmkfd2tN7IHZhs%2F2sEkbfegywliwt9ngrKC5SBlQaT1SAYnttAD2siA7uIEY6%2BauCTmbC3pZUh7c8zWLoPHDC5lSg7YoEJxxNdswUHEehACvBCxRK86wx5t9l2QWoPEcdShSxpKxN9rs0x0Odk0S2zIYe2gCY61e3xmMsZTDOIt1s9HSN02YPBvE5Zh7%2BYXw1I9DnLTJjJtt4gYUFHIzTh4o7Fxnp%2FPYra76Ivq1nMJuiqMQGOqUBPQwoEyElprlyvzTvDf5hkZ%2BOAYbAEeVlryKKid74vbVmSdCsbwvkSCO77sMK5kuFmj7%2FYjCFHtwc%2FXswpj24WV0%2FaGkgMyV%2BDBry45difEfxOfaDAoZHKUNB2tslHkGwAiwGp71vHHAyltVuPSwcXqZ9WHI3NiaeOD9Lrf%2F0SmkddPqeyqy9XchuaZktpLElABWifHTDRKaEfMZqQwli6ptcN2BF&X-Amz-Signature=a738d68c06575aec215f69403e1eeb7edd0b92770663cc0a5ec31a61d12d71d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
