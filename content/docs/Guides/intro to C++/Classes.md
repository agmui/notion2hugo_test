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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YLNBRJC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyeu%2B%2F9z74G4HN4qvU9ZU6Zazf2RQCABNIppNkUHyRFAIgR3J8o%2FfGLZODztIICiURXjNu208sJbvuJ959Coy5u%2FcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2VpWIBbcl1fdKSYyrcA1Ux5vjYxHY1se2762C2jAgTyvnJcIk43hOH4jkxPmZCH8wn7nqwMcMJTEyhpExw1Kd8XMEHxVm5qoUkhEiPCEDpS5fOp%2BYGa%2B%2FfpY0Y%2BUAiDQKB0F2hIS99%2Fa1vOc3OLqz00b7D%2BdI%2FrqTDos%2BL12UlNWQz1fOpkVGR6RzOyzIf8D9B6ltTexGG%2BpKZrRMt3b5jvspVbnjTkvouNhuFR8qGO%2F5W8%2FHEdDoKgfVcAZW5AxRju75Ght9hPwUTjuO%2Fn3t8HI%2BHJEmowhFqMKU3%2Fw%2F2YgFYZ6or5GEUXmsr9LOFm3VKD651IfsTRy24VeE9u7Yky0LT2TffMm7B7G50fyr%2BH8o7xkTw5bnA5TGNl8XZHljZNfXtR4XZNxSHjghw9g3y5jmrffm5SRrgS2G9FQuhpN%2Bw3%2BqUP5%2Bfgrmi5k9NWsFd2Mf39CzJxFcelNlGGm2AIR7UAc7Nq%2F2Fs6OU9aLuKOmnq0L%2BgjM9utI2EmWdBsZslkCB%2B6%2BqlDS1MRlqxnpgiThoJjd2iLLeF3Mu9QOCzPkUgg8ROLytqTVz%2FqeIpGEm%2BGfzd3yiRJNnoiHnUH%2B6dKJT3rG6oOSFfge%2B2VDSxMs6YH6bPMsXnTYTREZa%2FcyBwUsNbMO3tseNMKXj9MAGOqUBmSJZj5E5UdPK44EbQ2N5jqU%2FGj8%2FPilvSbTqTSlDJJG7YgFF9D1oXdEmCHtTaU90FUJhsQT%2Bbsr2OopkN%2BTcGgX0CU%2BhoyrXvC%2FmtKjiei8BkSXzXYDhW3Mra2S5lwIsLlwbdnoE8EkFgmygdGR9xYDY4dPTLWSLTMKDaehphGQb7YI9fHr6b53jd%2BIXzoZ2iARQbyMAmsuD9KLz09Q603azIfCZ&X-Amz-Signature=4dfba90181260ee66ee158d3dedb5bd7185091cd4a71c0df7b5314bdad2ef243&X-Amz-SignedHeaders=host&x-id=GetObject)

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
