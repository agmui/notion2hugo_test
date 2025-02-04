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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JVI65SX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIBmwWnop7hnSK6pAzDplMbmq9tLub6M1QRvMQWvZnK4sAiEAxspV6JtzeKVtDJoRdy8gIZTMVRPbU9C%2BhJI1Eom13iYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDH9Kj5vOc5Gv9a9EeyrcA9oYEPoQ8AhEIGTEUJQ84PHlaMOb5fF8Dl5bmjb7bcc6BhzkAzpQ0VvXAIN5WqGyhuBJklQJNFSKOoy82u%2Fn7f7d0oSpd1gweDQ%2F%2FIC6cgMUwVRddriRjufMJ3k4Xq5ktnz%2BWQQsCjwGOQ0uMle2DUazByik0asJzcm2PQV1EABscdnswJOKRZtT8v%2FEO%2B2jySdYE50CsxqOZngp%2BbOXM0U6spXa9XYTdSpMAQE2VstXAAFgFdX9w%2BnFHkeWerNggeHXNBQBCBiPHUAv0csg%2FM%2B3VJQvXpE7RKARcKdwjmhRO5FTsqYBR8%2FjQsNAV9tyZH8wrODHko4JYe%2BWuW77eGBam%2BttkTzbh3ljsWltNN3fguQ6XjU%2FD8R5lsGFV5zDM4b7IaVGAaAPad%2BhMd2Qm79NBkhMcB0osO0lr18t1FhuZRnfRsKt9qdRV7jiQkUFZJwDtZlOtVxnsKx1xbmBc9L1nsUTvOFt9q5DMiBhyPWjxjihaG0CzqXhR1QKrCes%2FxU3lCM1DaJOyqJ8cpZensaiXoVOkaNE44kVSSQxENMYdk0z4DVK%2BU7UUhoOaM0ZOC2%2BW7ozYA6CZ3v34deZz3uFjI6OAXxaBI%2Be1an9uIOX49lNIBIvlpRJlY3jMJm%2FiL0GOqUBwG3CDFmVgiJcFIJhEB4IDThvpX9CxMSqtkyE0TI%2BpIs7pthrbU2Azu9ZVCyH6n8IdkyDYc1%2F%2BgpfzzAAw0n37ugOIqS7mhHS5X%2BUOn4I0se4rllOdX%2F%2FocW74%2FTr4qY2ain5ajMihrY6LF1QimKJ7zrgcaz3K%2BIvrnEboP8%2Bn4%2B8sgaXTXpZyJzHlWea6NfUcUI%2BJWXWwLkhUQY%2BcSWz9Pop9A8v&X-Amz-Signature=e9dc30c6c0b4682a8f056faf462676e35e538567122b847ad355a59fa3b86177&X-Amz-SignedHeaders=host&x-id=GetObject)

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
