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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YGFWMM7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDulaLq1FO8EFMRMqcpVvDME2h9RQB3WRa4D6v%2FdpCdCwIgfJl5C8ldIe2BCu31p4EzLJKMkRnCkRPDQLSkmZcNjvkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOMikZsBagZsLA4pyrcA2dq04McGKbZOQrJL7CniOUKo2Okk5JJtVL3JhgMEFzNkKol0%2Bp3FmcJKsvuq9uuL3MBmxe9CmunYN9UeVl75Gt1mlKUGnKa9lGvrczVkmmv0Al7IT%2FQJmIzf7bgDYICAbh88OaD9M%2BjtRd6Fts79UucuUTNZFL7jR8XpdgTu7pyQGVloJaH1M%2B%2FoknGnHr29vJyAgMXZUIzUb%2BdPKfqNOUelawIh4%2B%2BRmXbpNkEJwLbs2SzfIMaHqWmAxx1czjgvzO%2F5V0QeohqcLVl88jjMiuefMeVNbpppgGcOtjblVx6wgrXI1eZRzHFj0l3JP0NLpKOBb%2Fs2XKeb8vTxAdX8la96me9lfAJONYFiPjy%2Bcm2JYiNGfFQcJbem7BJU%2BmpaoLpGntWG6UJLDvFbnmS9bXpakCCV%2BEuvZcDoHRqKdkUwb5lqOhj9O2YwnS%2FI34O4WHQJj3Nnum%2B7Mas6HhGKVlbUAYypxzF83hERJR0zhl08%2BEmqNU16Jt1NUdR2haIZJf0hJp%2F%2BLEjW5jb%2Fiwa7w0Z6%2B%2F881ig0J28cXIfRZURBGhz1MsLSY3IUp9Cd7T%2Bd6D%2BxAEna307RKgNB0gPqsDGrvXt99zAHKbfhvIPlBnImjfjwh6hPaKhPOrWMNCiuMMGOqUB2rXBwblIGl6DYsv%2F2AhzSQ4sM1fl98fZCR0IHrIj0NiqXavAye%2F1tEx9hitjHTMw3Sv4EuY%2B1MrK1DDcVnzhNbwSYz%2BOLzj5677ou4DV11BPr9ljxj9SNDrpLRio8gLz4TXoJ7eaZ5b706V9Ibw8ncIIKl6CCLTEzWMM6Pyb5W4d1mrZOEaPKOLaXBA%2FDczNymFydOCp5vV6alacCxhjF9g3%2FnY4&X-Amz-Signature=ce2059dac16c100f644a15078272281c8e681238c110dbb703eb1ac80a4b120b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
