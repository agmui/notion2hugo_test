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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHUOFGQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLeUFOGeKCsIffcnnDGTC2mxs%2FQQ6jD92yUhiXkady3AiB%2FzL9qEJFuNMhEYq8QqpH%2FjbD4s4%2FkjzHIxP8I0Yt9fyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRokxfm10drfcDdCYKtwDBcYAZHceiXYwkyWGAn4mgC%2F%2FZ9GvYj4mPzNM2lY5N9svHym3t0SbKSaqW3JNZLUl9DylQu0r5mEAOXEH0fX%2FW4o2hPgzyo3L5ucEeQ6bBiHETY3g8sh%2FMVXxU3LJniiwjbdO2CQLt7O9VlJ3WNsdim2ChlRc7UBccuNtr3sVa5ujQMOs3tz0cohVRZanlla2yWc94eBJ%2FKbHTWmAqsrSnDca2rqRVCcxL57R4YUSIWa9Q8Hry8Cief%2B55BkWgQAHoB7L7N6x69%2B8VY7OYwQyqOoKqDh13tUUwAf2MiAHx5%2BVUqckokwYCpgFUHHUbc%2BeKmZvpzH5k%2BYOspn6yiHQlVyiZSTb73he1BGGdXashrIGSVrpG%2FyR5LrQ%2FPAfH6lC6b7fl0VH85UEPPAs07kNW5JGo9kpqeBN2Bakn%2BqS08Hjyub9SeqLDAPb5MDEg8F6tb5gSkscxLInOnxM497VA6llxF18AVrLjZFQqWuz4lWb2Jh74Gx3MJ%2FV0sF4hkdxD%2F5Ustbo34c93IiMDmmsRlasoy6tznbK7ES0WF%2BqFVCW%2FyFQ%2BGa56beCeXjFPUx5nItpokut97zrt38zNB73J3BWZCp5zZngMB4%2BLBzSR%2FNuKxvYAZzbam1mclcw%2Bq%2FkwQY6pgEvChJv%2F4Dq%2BwEKy0TSwk3gP4e6YY2oKNX59RiOLW9%2FsZtyD8C%2BMrOVzKpCGwC9vo2w3QGewXmbC8W5J0jMEB6ZejMqwDcTkKNqhB0NU%2FtC8TFZaGRMOI0L%2BtMVFHU%2F2TgdR2h3%2Bm4mlfNfd1oOs9UGnO4fI25XIUOaBn40cFMgCZyIOW6PFARZA7Y3qZbrWFCydUTPS17qCJy1Fp0cm7PjtbMZcO%2B9&X-Amz-Signature=c86b56197551e487e1a2d805de4e6125a94e8de5f039d0d9e42d0a2668ff1003&X-Amz-SignedHeaders=host&x-id=GetObject)

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
