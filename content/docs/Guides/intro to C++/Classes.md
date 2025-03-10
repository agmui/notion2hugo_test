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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNAYGQB7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDUo2ImTj17aNTklBwfmSws6MyAyVPcIlv7qOhz0S1oGgIhANlNt3KxCTE4kI6DL2lVJxm5PaGzlGclZaC%2Fsy77canjKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq9InhlIIJDJ%2BqBUcq3AO0kVzNEjxmtfFeVYJEcMcKZSM%2Bdmy4NFKES9CLNtWs4F%2B1b8bCYX9L7LXBtZeZGaiQGmtUPXisF71zxldeP0P2pcSqHQnwbtzKTJ%2BoUPmKnIlAUPFfd%2F9KZQ6jHEnBsvwDQxxPMRM3W5%2FD3YnkQogUA4ycYcUaRtjUR9SordmKplizr%2FxEb9NdjdXbKJyF1Qk%2FrgCdk31DIrHqS1B8XXPO4V036Ugz2luio1C3rNoiAB6yJGaA5gmIWjrR1rAvfGES%2BpOplI5yw0CcOIMN0CxeGLbJFIlKyUS1H0rIN6Uk8Vp%2F2OgGqB9mzxTMlu0LWgm854wx2A0BmazkyotfmnqqGJT06AthWLbm43pMAkMO5y2xQQi%2BqIWz6nmh%2FV1plDPw2STLcB6pvxtXR0BcFMgIddGb7ya8SaHfOwUZ88ATt4KyBubU9V8W18wZEf140iCxgSUzriWZkYCeV9NJZ7l2nfNwokgUKrKdssYTdW7iRJ2%2FpOoIIpEwFhYt9VYiQHlTcpQsOpVkYO6XP4C8XnPv2hEQf1%2FnQl4ScQzgYGyq1ZZUS1EiNq%2BGvn7lNfmhEACt%2Bq2Jdym8YyBej00EkTHN6EFRd3MThbV1GMr2fKy2caLrOomFvmCR5864EDD16bm%2BBjqkATmhAugPHDOGCEGvxhBuIR8Oo9MjvKbWN17CQvAcBqjqPL1g8oQYyeGcuPdiFIral9AhnVikPIqWN9flarkCd2th1N5eE%2F5xv9sonmgXWMSVGXSy%2Fby%2F5muCqdGcSvp9WMdCkZ0ex9v%2BE5X6%2FVo04SEmm3%2FA1Bk96znrlPRoB%2BydCZC%2FuYhvZhXjXBPiU59Ba1eY4%2B%2FF%2FPcA6PA1IkxPTeG2d1jc&X-Amz-Signature=0a5d3ffa3e0c357cc719cdc4a8af3e2d28a3a8c49c2d94bcda2e375aea09a9eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
