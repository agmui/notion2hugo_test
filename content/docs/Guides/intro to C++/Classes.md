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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLTCYDZR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoUYiJAfyulsD5wtosnzbGCC44U6LMSj3rACz7kTl8sgIga4TjpTHeChGo5tODEYu2sxDdfI5fyH8RNcJ4zvJQl%2BsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBW4dBrONdwrsEadLyrcAz8G%2B0yleVYHs4nlHB07mgsxtxcNsemeQzAl1lcOHPbFrN0Tc2WscS3hbS%2BFNryI8PI3q5lGdVtv6a%2BhM2sNcbv%2FWa1FSu%2BdsdctoZkr1YvxnqSkoXXkBTTWm7ZR%2BfJg5hTnlhJi9JbgF145hvfIJZCloq4tj0QPEbLjfGRIiAOUWW9KV%2F25fCswXK68PxLyoShUg0%2B1a5P5EcYEpg07se%2BryqsiYFgGUQYEghdH5BWmDLfs88Oy1XyBJAZt1nUU0zx135puBw5rzdCZj%2FZerthdPm8MP%2FTG5w%2BA76KqxPNv%2FgVwc8qDix4rUj1z5dbWR4FOfXXs6XqGIx0y5RKJry3UzexRoNFPB%2BZ8Pakx%2Fq3o1HTeW0vxc1ZcDCg1dxepSnlB60F3mVZCmkkggkTK6n42ZkKtEv%2Bs%2FeS4ezYoR7LW%2Fglt2LIhkgtcXXnZQIQVW%2F%2BPhP8IoZM2SoJR5WgLMqEOs18vL8xrIvWo6R5FJkbnBr0lOOc2GhljqPtzOwJw5IbJsRmu3K2KoTohdMVi7MYGFXy8v4leomQAa8wth94RMd6DWgUhmFU0aQa5kkVjNZZ6bcUAFX2NkE%2FSfPBqTU%2FRY%2FbmCeaPWfB4m3e5kDWF9Hm%2FBAoeXQrn5Fd7MLv178MGOqUBpknADfoBqKwD6nfT9JFoupfZ7bK8d08XY6KJkHbmD1BdM%2F8SX6OVqjdM42XkPHh%2Fu6bucdcSLxMzC0F8F5z91r3WKHtKN%2FlyUhiCv0aaNqgfADdqOnnJ1SiUpuxL7oFyV%2FWRc2uxS4JWpZEAyHgyqcC9Llkk3fZTICuuxSIOT8unafkHxtSFQbLoLHUP%2FQdbXXjx%2FPJYJBdMeECgdLDkaheaasCV&X-Amz-Signature=0137fc62be4948750a636cdbfbbc21718a432ec30992fcba1e1064447bed5d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
