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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RVVCHRU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAX4cPTrmKGNkaetnJICqmhR4UOYOupl3ylr4YUHbFO%2FAiEAxUYtqH0ddTFhBmAiviCBRSk6kBwoM4WtnHxdB3NZ8BMq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDCsFK9BEwLQQ8i3vdyrcAw19XgBVJIuNpvZYrFwcJbYIRzmCpwFhw5Ag5RDBlCKel6Hdw4AZetcTF6DX2nTs1Ph%2BTzGztKhGxwb8g8%2FbwqGUY7gPAUI2tJaOFdYBUwzvDdkpw0mYChgjYdxl5x%2Br3BE4crb4Sg6dz92O1AdhRVi3hCpVjlYHuKqfSSjMZ503nYD5E8vxm%2FGUTzJFiI7F%2B7wzYGA4aTKANORjzc0YrHwbub4H7FFRv%2FIHClEN7QfeKTR6rZll%2BV4%2BoT9WJTeZk6nYv%2B3xVH8iIgqXWH9HDLCT%2FWY9jkHQXBUhYZdHqoFJvj0hhqO8tXE%2FrEKI9pOJll4YN0SLCJZ%2BXtTPo5UnjKoWyahAeLoAMekastDkqWoPVBwLtkvm5qkUWOhkjekXDxfarcLw5Dq6%2FAVlj%2FGhKA0uIePcTjfFizZvsdb914h%2FAp5TeU1zyjbWcbzFUkneZTeK%2FhMU%2BJqxNBKSQ3wsEhbCce%2BcPIqhQNHA%2B5vTauzzqYgayNZVkX2Vm35RRvHN2RdeAdMMB72MOvMy3C3%2FJuXy%2BReIMLRHwP3aFRdw9QiG6W%2FNWKJ0CvKCN8LQL9D5fuQ76WkoWekGms09QQGuepgwpU9md4tmS9m8jV%2Fjt4URuyLEESBZlH1Txej7MPDo8cQGOqUBzmuV7bkCfN0HeqQhmdFkZDen%2FSPTTL0ozE8Y9cJEX1cF4tI8vCICy8ydVLNvJzRX2l9P1u576gRxqOxO38YVBhse%2BXjCPNFV6fG1wZyBTqYViAqnO76Hfm97YaqPMMFrUKgwrcrLL17BYfl%2FDQOnLNhFCkOFnIoQ6XfZR7uMrPC5AR%2FSqaoaQiMLc%2F9mAEVo2y7ogfU5trIcePDiyK8Q9p4PVQSB&X-Amz-Signature=22e660db249f41de7dfe1736dab928dac80070f1c57daf0a9d191ecb2ff41305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
