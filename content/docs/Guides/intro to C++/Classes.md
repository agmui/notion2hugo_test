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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TMI4ICS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGL7nbq8ZT%2Fo1feuTUFZulAZWoNxoRiN1i74DZ5V97EsAiEA6C%2FX16mgCCJ5IE7G0xctWfkPJtsv4SSM1QSX4%2BZSdwMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIPYqEpziSpd%2F2aAXircA9aC0tn%2FbRnus2xHUaRpYniud5DudtahV8Gi25D0Rx9egouabRqqs9P9V%2FKDPB%2Bk34x2mCWnpjP5X8Rnj%2FvwVwFLOvTLrIOUkqs8StWV4sw45lt498Wf6pNZg%2F2Z6ofO%2B8cLkWHeRVr3Bb6YsQijJNPPaOXFo1FXZEcyL9nwKckmiRTeR%2F08FLRdEjNSCZzgmCpbZEob4QlfQgJ%2BkNdn%2FBroeGEllSR4jqJkySnNYhUXW%2BfPKdu7UbZk1%2F%2BfaTJFW8J%2FawhvmP08Nz7WP7XzUAIV8y7tdmD4Xjp2OGB7yT8jpVVfbe6vAuN7JyPsNo6rPH%2FSeAb%2BGd4CgdPTyvI5xndF5xAAKdjY%2B5S%2BgUf2fD2J61JJGl1Tn%2B3KpCsQ2NzWXAHM9Op67Fel%2FMBB90WlPjSv1nN209r8ZuvJ6FnT4nk2pv%2FCtPjG3QxTyFDLuH0Y9QmWdOCtAan9Gwq3517eGxPG3pbre8QgJdoxAMLXaD6jdoq%2BLil8Ome2%2FulmoKStfD056ZXz2V%2FsFj24B%2BvwvrsjA7LVIxiWjS%2B6wb8Enxwx9AoDTX18XBMm7SrQj2eLJM%2BXcIBfy1AZG5XOQq4ENf2NR%2FMr8hXYsj3odnHCSUn7KwBNXfi30%2B8Tid9gMNiT3sMGOqUBIROcbu41%2FJpWngd5ANashvFoSP2pXuWOz%2FAPdWIaEl%2FK5hGFxMyVb3JkbWGiKk0K433VK0qV8%2ByQArrGncb2EXhmY0GNsv6MRB3cJQu0spdkl4QIMR5pJmqk9xHdXf12XKI5%2FQtlCsDI%2Fz%2BWkZIzl3O3k%2F0uEuYgQVREIZF91f4eErsHs661ebeDQDMUPo6TB5rNl1EP8dCj8KBMozHBQNHtNTxH&X-Amz-Signature=9e232ddfe14189f602e4b273b7961e7e8711b8b7ed936fc66e3824cc6af00517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
