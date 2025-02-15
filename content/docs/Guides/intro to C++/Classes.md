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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWC3BWPY%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGcLLRW%2BVvZyhX1DMSjpjV46RRnAA1GB9zAHhluOJ3yQAiEAz1sj9wMZLfbYTp1QJ%2BZ5SpVtCY9dOc1xO2e8H7Knu7Eq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLf6fZ8hGVuMmXqZbircA5R6GWVC9Yh%2BOqeypvxTtpBWL%2BPc6QxQoeZQETdDLZVRckJ9UYEBKFp27%2FKAHUJmFVMXldr%2B5FRvynXhxswCMCl4CCeTby3is9HnDpgRqUXt63OoIKVyGefx2AIvj%2Fy2qYC0ptgoIyHqgaO2k433KITwrPaSz5hcYnwqNDKeLUKtsXdmtqaursGeADk%2Fe%2FwuuM0Q%2FPDCISyydiZqWAmvaZEtmt%2BZol7PfNmuQGSTyCfwtYuZReKn5piXsN9GlExDY97vGJ1vpvfyV01vmgcnnKaHgixuzrLUClceNeCwWGa2LiYSt%2FacUhRNnM9rcUWJdsn9VNeFjPhkDGNdVMbqyXC7bd0vDuNonO%2F9NQUyvxQlFokwUvjPF75wOYO97vqdNOI%2B8YQSmFLmjwGCp8m%2BMEdV7268uBRAOuLAFHSpyF%2BRGXmR9F3llGRa5UH3dQhfgte8IKglYPTp6WjkmA375uHoZy6sqsA2NsIQqap9PlKtNfsYqSZJxqH%2FJKeqgqhVzdWWLd%2FhK2Y2xITusoj5nMEDhsB7UAjuIVyo%2FOI59d1zVBKjmZkAHfRwEuYgbmW0U%2BLpdT7S9f%2Fi9DmQODmddWPpO8dVosmLE0S6kylIJasH0%2BjX4CkrJdpoAj5wMIu%2Fwb0GOqUBGFwMXDRqaI3IlTrXDZsZwNDB8X1jrSCihdBtTemC3Z9eFfm1Un8bzVUWuEh%2FTzlpJwysdU9Amvsgp7NPnhhetu2LfEXmvTT4S58kPRD%2BWdUU7C%2F2b6W%2FOKBJXtYo4uwvVoA7BSoPIB681zTykMMLTpaZIuWzE8mpaI9HFtHmR3IlnzZNR4hVKCczfdsOdbOo5yfehVZ5bTKNOsVS5KrUwT6ejx0%2F&X-Amz-Signature=02716255a1de8a671fffe16dc551af9d0b60d478306d5f4e1b2951a7b9c72dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
