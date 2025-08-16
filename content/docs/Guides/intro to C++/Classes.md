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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHFBWPDY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDCHAEJ7wxTZgyoBVs3CHO4CdGD1qSooPNNPgngNWTXbAiAIxf5GBq1SXYB38WUAk6lt5RbRP81zByG6VBfCSEvFPir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMI4J%2BrFg1VqKiqIt4KtwDnEdc2%2BYf1W638CmRKRTNgoif5bqOiJglgVLu2tHYIPOvXFlqjpBwtsyfgOhWDe20i%2BggdML5BXgjp7%2B3W%2FUq6cOWcNvQ6mqE1y6E9vF8lnTnv5XC5Smz828dlj3QYpx7w55676jqkqX0DwKjgG6afQOnPP1byLUOa5rfa53cM0pExSM%2FtXw2rGT3GsP3tPfwnydpPxZjGMzMF15vpl%2F0t7%2BogHAC3Hv7nYoxENJjLoUxG7%2BE%2BoFvq4meBA40gYXmJ3J3o86J0ksnI0vxTPvJ4lq2fAf9q57%2FpypVK9PRaWVeb30XEBs%2BRXwUclqeAdwJjoXznNSgS4DOgQN4iJTZCSCMzI4ZFjwPOclHfcrYhCSNOlwYMqUi6ynoY29NJu4COKKJrfoDRLMFpOCcm2EvspsW%2F0Eu%2FtrCv5JXoS4ohtLiUPQRGnsFVcG4yVSl2v6MXtS2Kyrz1MORlzaN7SqyIbS9QN8BAVxA73whlq6RogRXYwc75qvDrCvnxr6zFQQ%2F7XXxFBFTWntmX3KR2uMu9%2FNZOWnYebdmTOptXc7dqZq4ssbA5CI815Rd1qR%2FJRMlf0P8SpIbOIwOv8qLcxcwWejnIgQRONj3HYLFbj1a2tF%2BgS%2Ff7xs2G%2FIC%2FgUww%2FiAxQY6pgEYmwqyU2ou7fnLeH5RSKAIqxt1Pv1zFcAqAhlwW%2FKmkdZuJRYgRqWV36s01H44WpyrV0ifN6sKb4m9CyCa25mUgJsqWuc3WzZnXWTTe9xpyN5h7FGTXsgyUgnm4tUR6t%2Bw73kWDqHQ5xtqsiahnxSwaIXQDHw7Pf6ZjEJVGg1eiRcnv%2Fj3QA4XCAUKCtrXaAJgeh9uislo7KnfBApDRWeKWLOxfIq7&X-Amz-Signature=9e5229342759bdab6547cce0b6f8a661cf7f477d3a57d7aa15055fa4b8f86959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
