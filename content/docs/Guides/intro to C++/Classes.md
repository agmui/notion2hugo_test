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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ZOX6I7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC9wY5OYXMQlnhmE%2FWN2OtYQChsKuNhXIWkVdUDCTYhkgIhALnGuOhskSdbdLjvSqIThYm4zonQyScaNm6CA0ajCfopKv8DCHEQABoMNjM3NDIzMTgzODA1Igx%2BU%2Bnbl9j6iIbE9Moq3APrkHQzjwAjbPeNTrjgNbKk9NAbbDVBQdOkBlWCJI%2B6WPUsI%2BEvP7uGDE4LZI9HKoKCcCLbH2mQE9vN5iheKCWlOLYz6jQzsm3KG7fndLmMWVWvGE4ocZaIFpKxMEQi3MHwD7Rjh7FOqTrjWyVmoJHiRTTCDkvNoF2iTICBSB81Xxeok8eV4eRKA50vfrRNL1F003QdJvAl%2BZ%2FllN7E23oC1HlBTPheg1gEeNH2RWLCnn0s196MemHpNhgD1%2FCQOOtQjSZOjoZTjM2T6omIHIt%2BlFI14h4kTEJWlKGF489IWXfkVJHwiZ28461T2pka9%2BpF3CvxBqItSN0pimOVmPFptZiFzHUHnY0WlSQwVE6oHuxSeryisGGnhJg4vTxmDJWyVYbzg46SnwnClNMN6uWgkCmypfSMoQ54guhxyFKV1nmkK0FaZrWUQ7FA7WwNYCsDZql30eiNSUJAAYP2tGbP6eHcIXq1fh2TRNiEWsHQG1jSJwz%2FTHcgpHBKd%2Fz00AgevqnztN5U1%2FufT5U6w64HjfhV1y164oBu3S5qBDwsOdwClSr825hIb%2FghXLE5Np4YprQ7184bMaF58YfgryP5tAgniRW39U1sZf0UwfJpWVx%2FqvYUKVq4Lp7bKjDW%2Bpa9BjqkAYS9qfjcwVVNypnbuE%2FmnHVXLVjCcX%2ByIpGYrE4ZkOsx0OcjB%2FQnRj0hXkz%2Bhj95Xyp1%2BQWAJW4aiEiyho8FhG%2FFpX7a0cZ6F9jmi2KOIq6BLVxYF477X8eWOdbcwXRb6OgirOwhrBrf7pOHdQ6%2BpuALu4RQl3YcSCG100zYB3PtPt1KsQxMAMrewXB5%2Bmeb%2FB8h31B81Ogq0icXkFrlwxJQSFH3&X-Amz-Signature=3b34248957d04268cd0de7f3f990250b13703e739d8da5f95a14df958f110862&X-Amz-SignedHeaders=host&x-id=GetObject)

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
