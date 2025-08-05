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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7V5BVH2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCjJ8f4Kk6M1oaju3PP%2F12tx%2F3mpM4oCrYpSBG%2FRSXklwIhAKskzUg3VMMMHa7ktZIHg9oeXSNM%2B3es5bcvK8Lmm0SGKv8DCFAQABoMNjM3NDIzMTgzODA1IgxwyeSSDtub0kdu5nsq3ANPaSC%2BYe%2FjOtdD4Mu3nGpgLR%2F6K5oykJe3OqafM%2FwD8GpAh2FBqc15IQH7oE8E8wlBF%2BoLdqbcbhodSArocdEEbn8FlxYooLW%2FPathRzC6%2FQ1riV8QWEFZ2zf5KKohp54qQWHmBftXbtAdoN8oGJA1K7NtXkeyPua8PYB%2FJzbp1HBE0hRRNwwWtUTWpUGBndhNdxFa0b8qxFz2BFnjDCqGpO6qLUyi68Oz5wlvoH5N6pUubvsAlX8K1P6gIQKaUYaX7yXZdM%2FJmI3BEaF%2FfNR1z%2Bp%2B4T5q1QukG1MWF4rd4ZZOnNdAqgAW7CN23F6NbiP56LolcSbF%2BDTmJSOp181Q%2B318Cqz%2FiujA4ttJHMfTWPXKSOlWDU6ihtY%2F5%2BA0QlC2eu1nZInFlpifWyKIxr%2BwMSI74y6kCe56aYlUzMx6GNbcRDWuvxeb33NxMhPUy2JEzY9WRPXAnAn8xqCmlraOrSbKx6zWUttNyP8F3LEYyO4gqFBM5Bgtx1OXsJec7n%2Bxik5ApT6Mwh5q7D%2FQ2XsU9IpNBmkVsCBo8VTt3wGRBS3Vu8LAzaDapxhZ342Kt7mDHZiuZKbE3UPby3MZp1ow5ET%2F0LKtU64YqeARVLJRATpD6pmmaRfqTb4QVzDx9MTEBjqkAWObGkRnr4wF4nXYQTL2%2FeSDtn57GzbWD7ZmEHADskLU5yY%2FObSgWK14MXZESYrg1Ak7%2Boq%2Bn2lrTqfY1IjgK2Xfb%2FanGOJlB4S5Lyg2PzZ4tPOlUAxVbysOduzHvLFQNdCekU%2B%2FoIbGBUpEEtDV7NsQmEPPfW2lGxMBpHl6XwaVCh7t7CW9zRtNZNtzMcpIn540o3%2FrqThjtOVJ%2BZCRTI0ZDm6c&X-Amz-Signature=0075886e05b6b37701a7e3fa3ea4088e23c4819abdfcdcd976b966554c469a53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
