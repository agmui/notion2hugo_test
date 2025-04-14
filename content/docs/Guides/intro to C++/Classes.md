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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRO6QWJF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnQhwVngYNOqKNgUm8LESCrf3T%2FWbnZ1AULsVTXV4R9QIgM1nry9gsWkGIYvTWf6UR4AKnMYGbC5eCdzqFZI9JEuAq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDLXelcowZSkfWSlWPCrcA6Jt202vRh%2FfVywxd6ePtf4p9kfPLRzyrNu5RYbcLNC7FWKRQS%2FT8z2b%2F8Q1tCG4KvKLCVBFTVz4r4EULjEyTdL6fu1H7Nyq%2FTuKaufFGPNI6az3gu4TJbHgbe%2FJPCW4z2hXYNbjfhDgRNsqHeULoj7v1lmb%2BXmgKfVDkcZ23ebkEc2Oe6jsmwSzqz2hwUVt%2FNZDd7uad7IC7Jpo8%2FO%2BqUpJvA1WKO3JQ%2F45Y6ax7bDSTIC9WpRlQTTTkId%2B3%2FQIKhprc1mpL4P7MCAr7ktZqzHpmYF4lmpbnZ%2F5c2SPfWldeM5tBlTfHIIXG%2FjfxwYUsYE%2B5oegxj98bS%2FgzXVeyRrAUZY9tKBKkE%2BhzouVdtYCfjI1XgbtWlasb500yKcBBxDhgurE3vZ2GPti7PlbC1JoB4JgA6GN1Z8aY8hI6SDPh13M1%2FLZemeac0k6n4M98n7vBz0Eh1OdCvRG%2FO0idyoGgA8qmkFT6HncWdAkSwnIE5fRBd1S8xmbwXl3gQeC2QT%2BXBABxn75nftueH3wT3DwkUNl56G6vdrXWpR9x4Y%2BZqn%2FRFl0Mhy0nwJMvlDWHlDHTTTvunUAM51PovkhENO5vVNwfS8b%2F8qjOIrL1p0gYCDJrtvOHn3kZcpFMM%2Bn878GOqUBlwg9nfuaRXLYvk8Zzqx%2FcSkbvCIDVKnR%2BgDG%2BuEBSGk3wYEpcGanhA9gxXMzwi5qMg7dQn%2BVBXS11MdMKo5nJBqFJw6GmKlOZR8cjMSw2VcaHwqSBWyB0YDyNEqxUEn86yz%2FYmX4JWHYqSB7rzmN0nGbwnVON9%2F8urIoPf3HbdCSiuQqQ4jyB0LBd6TgLKBKuo89FpBFrU0IarC5kU5c5eRKbvWm&X-Amz-Signature=3bedf1a56b56a2cf8c419ba5e974354215d3fcbdaa8a19f46c8a628d94126dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
