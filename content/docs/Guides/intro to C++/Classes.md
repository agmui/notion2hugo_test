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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643V2MWUK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHMV8PwVgzMcU%2BcimH6b8dBnE1omrGPQ%2FwNcwwk756j2AiAPHHzHk24dU4%2B1WbpcHZXCWw8vlW9XxKBNlwooQF89Kir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMlOEcEhRRoOcIkVOLKtwDoxEpga8GPcK%2F0VVb%2F%2BnBUuoYU2ywvddizTw5tx28GjGaezSCE7RQfkMe5FOE8pLNLgElAsin0gbuIxWgAWKw01idIvMu%2BK0Lz3bSzN9qySv4q%2F2N%2FolEFkPIe0KApsukJmKxrZ2xVinJrdlHrpX4ZBT9monQAtiNJDS7JpCw7dTMaTtQSN7%2Bp9WPaiZL0e7cgpRWX%2Bqi%2FHOTxy7lgWdqs9Fq%2F3kdrpCPbWVcYAvpM81OJmzwFo6ghVMzx%2FWUjR5z5Dr9Pyb0t8WkzBAvRImMzY%2FZrSnPpbK2l3ocJZqN7%2BQwZYn%2Fx4fmM%2BY0iJ7ZCt73X05DBQxGcyrSTZgiITLbjBFFL4IWtxc6l2T7Ma%2FYhwmHRam26abmmS3ApcPe4jY803glUKD4do1Dg2jnyKu9U5XO9AIQgDmlK3hSJtETdUbTN1qKCmtHhvNbDb2z1tonf1DToC95INT%2FNCai3depVLe78oWXvia2Dn4kXoQylprtAzK7gpMzaCVzH1b2ZK3zCK9%2F5isJRVf6FYB5uESLp3GxPAFst5zwJDv%2FtXHbcJD0AEuEGI0LFIylZMK5PP580m2rb%2BwvCAJqpXIXAo0XE0DDL%2BVap2qGG2efOrlLkTjWm%2BErt26oY9ZARDMwnYeZxAY6pgEPGggHXiaW8sRTA8XsI05gozMxm2nGLWUHsF5BRGDcvq8bFlHTE7EsdVp6HpXpGHiDsN%2BORwa4fvJaw8lBroeE67k403ql5GtI%2BGMPL3U6yF0LJ94rrH3%2FCayvh2Z%2FpveaA2enTc9f8F9yi7vl0S22gfTTFjoCyDYV6fr2f3ovqWLIbjmCt0EW47y%2ByQ1pXPqPqNd8%2FDZXVpaZGYJ8h%2B3sCDX75225&X-Amz-Signature=2f139768e02e2f8d394021099f5cea71c71d6a8d4c4bb42b4ff9d611087e64d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
