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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AML4QX4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFE4%2BfEaP5G37mZGr8GyIRKDWtRPi1VgbM0PFN9YOT3CAiAKoin8Zm1%2FoxIJ6gcPR2yZTENBm7w5Ejx22kH6rv4bICr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMrehohRB4cWNXKXaBKtwDQc3E5K0NO7mv6DD0aaMfw3EWLfLWhfV3l1BSVU5U3hIn20Kbl8MYcLXqOzNU2uqDg4vrmXHgI1C2GNDOsnBnrD0WGqKTkOUfoFZOrTDmVOrj0XZYwGc%2B9OnRF9T3%2BdKuVPgdo0ei%2FUKoV0iCl1lCTzpCb4FB%2B9nq0NGuXuG1fDELC6Z1lzxrVdBTOETFWcGjfFxkmdUT4ntNsSIuHNK34wTLmL0YxKANVB1UI1d1sL%2F68MgBPBbbbv2P6ZRa44OOESOFmjx14GaueAUvXkDvgUjUZeRNYK2V7vqgbo0b7ztZJhRJLQlBXNTmZJ3VS1GgCOEaqFNVqArA80W0exaMKyw02dll0Wvfny9ivFlH8p03BD3MuTEXYtFu18T4haKinIbrn8iRSi8kh6JGm9EfckA5OmHoRHeEQA7yUW44ZRKV20f%2Fo1ASywoQV9QP28Cq4dw5wmH%2FjiTacu3VEgnXtkhkWMhtVHd27%2F9kj1%2FHAAS6yKwXI%2FTu1EUQxnyx05cWhdJMnColUOxVm94niu%2FaWJM11ez6r5aRJxkAmEaQ7FzASnGO99xutiYoXaCMC7NszGOJ0eBVmdr30cybPnxUni82%2BSMXoVk0kktcgp2NzOh6vtoVucB3ZIyH71ow4q6DwAY6pgECFqZPAyjBMkgIysF7qRtkJl8gtyXalyg2aWXPu%2F793BeUMXdDRvt1McVUG7WI3ze8DWPlYDFa3TEftgtjsUlzlB50kYIKgzjD4n%2FKwO56wHMcdRzb6s5hTOSdVjeIFXJ0uBfXdThcBXW%2FZPOT7VkEucYJmiJov61pMSXMIprbBh%2FIIcwWUX2kZ7auEhJXwBShAzTcpR%2Bq22NgB%2BkKfURnm5WprXwM&X-Amz-Signature=e194cfa32f096e895dd802de279c0a8f968fd631efe349fee820396eddca2936&X-Amz-SignedHeaders=host&x-id=GetObject)

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
