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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWU5LWN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjXCoeOR56Uy%2FZopX8oRrBpEC4hqfKho15WISAl0orgQIhAOEvps6MWgmM%2BKsk%2F%2F4dxr3mRNbYR1d5lqq2ZEGz1q0eKv8DCFwQABoMNjM3NDIzMTgzODA1IgyK5goC6uepoBxZgJUq3APbWLZWMYW%2BXp8edKIW8x7y3ivW6gau64W37DQWlDJKNDDahYsYXBdXO0GiNzjKI4NizGH1UefDfUCZoJYoxSmAw67%2F7hEQ4KZDXnivP%2FSPmf06IOjt5kywip44tmMqf96pxu2%2BdBjFYRKPE7uFPnA%2FDjsS2M2mJImVjaO0mkv3%2FLOdnSsDqbI60nFk6MuTKWWBGnGtV%2F%2BdXV6x0tA%2FqkXLPRFZlN97GclewL2CSx5QnhlYbZwS1OE2vroSTWXcnP17JRZ3F9Y4K5WyoxeyWawn0YQcY5g3v8Hq5BRZUgqdOgxYga%2BTDhmDrcEdRAE%2Flg1IpT8jLmKAQFRnopdvJAnd9sEeO08THS0S1EgTe3R68n8isJMhbZ7PYaOXLuDOhb4CBVqoskzfIJBxPhcFav42y3towQlisFYTPp1HMrX6hr7Lj9hrqHW1%2F9GOgsKfEocdToCTN76aS2xOMfTsrgtaRoYDypXvv7iIWny9ZsUOULAHzId6TCDmWsHfPIKi67%2B6cAVv4aV11wAKuoDv9I%2FDX0tifXPiai%2BauXAa2i4%2BbiuIppF2XFLUA%2BSykux8GIh9WQlDxcaM4cudX6bEtLP4825m%2B4npaSZOdrz5g5I7H%2FugXt9z47q75v8FRzDRx4PABjqkAQ7cYbbaqp8Hlxh2%2FukQY7NfIcVn0H%2BSKwsokCyAPOK%2B7ud4B9cU27j9iAkUUx9nLkT%2F3ppKdQZRPRbZX1wIREEypSyh4rrhw73BADpRgXRB8ZCdQ69jkwv8YtIBroDfNCh8Sn7efFhyuY1y8LNmQmqJrXXbWBZ3t7kOdIi5tIE7jRVMXNELZZejx1G0DyfBYDt%2FM1EG3kiPzZAYSquLGWyuAjPW&X-Amz-Signature=51f760a2c1727c571fb522fb8edc6285ae4d7aa89956706e9565490790f590eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
