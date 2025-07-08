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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJJOWSQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRAwSedB3hxWDHNLFq1dNB7c57P%2FakEFK131Zy1HeuigIgGM%2BNAl1Op5vGeNRonuVG0OzR2%2BxUGFdYh22WJBUJtV8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDER6EeJX9fYMs6rIvCrcA1E8Mn9QN%2BW7SxifD371Ubz5CEdsLCBX38C0xDNmx%2BpMeZd4k2KQBttBODE5sR3Y%2FHoa1BR2UZrvH3Hrk1XIKv1t8exORwI4SHSIqKjR%2FgDpqnnbB0qI2ZnHYnPC%2BEYfmedNnN3p5FUlpmeLazmKSSP%2BF%2BuFlfpVejtPN%2Byszygh7QuZJazRY9WZZmCp3Qh%2F970wgAqLN1JSKqzikCyyQ02Gy9VgIT1cgUtPZWaxAM85m4Lzf6eLMzZ4VxnV2380e9DH1t5OOhB%2F19O%2FonAwYPjKFAKYOwPa0AIJqBmLtxvWwEtHBueGCyuTObBk1UsMfdHewK2%2BW0CjBcktRmZdcB4ZDm4Md6HRoLdm93KsjL2kWKwrHRoqGxoDsffGtpctfGHbapaW6KRKIhZhiSdOJ06Xj4DrA2S950r3afFtvyCP5rY0Bt3CQLLmhqg%2Fm8fwdelBKSvO878zd2BisRF84iFmEhV%2B%2Bqwn45aEfVlbrWgqnBCjIlRaYL3PiqyQga2QMHB4kPIFhhA7fJRAcSwN5qObwjg%2FBc26APaUfXzsK%2ByM4x6oUvlKsH9AcSupcaWlx8IZZphZb2NK3SLMexBEz9u5raufGicdFtvqe8XrI9dd08fvhNU36ba95kx%2BMLLYtcMGOqUBnYIa9Sak%2F7d1sL5ocrqWtVCu%2BmqlTi5JmASmrB3HSZUTt%2BkLUfdhVOsgZEAjRNqghbQ1nItmHDTuuOvPoUBx4NL5QHG1gCJ4usXJl0JRCSBlsydLwvcfblyNul0R%2Ff8QHhHhTIoxk1pJlZfTblHqdB32rAbMEwtJuv0VWWU3DCzG5W3Buq0SpAW0CF%2FRiGqa%2B4S24UZ7CcGqW19PQHRFyrTghUf4&X-Amz-Signature=24c2dbcf86371062db98e04b738d04814a1491f4837d99ed34dc38c897d2789f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
