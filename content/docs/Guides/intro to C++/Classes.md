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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAG7B76T%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsg09oSmukafxMslhp4KNyfXsVNeqjupQe0kn2aXCg8wIgPcrRc3rz9027iqgwXZVrHM3E%2FtY4VIXTs38GbgfvKw8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAXTFlRSAvziZU%2BeTyrcAyyBRRHOfFWMfUOCVf12vogy1VcOcXYOF9L3nY8oVKjMhTHjgu94Gh8VvbZpMAF45gXTyi9NsR0OQwnAA9nH62p1wLPupzNkDDRtUi9atBC02hxWQRp5G2POvfijRqhMG46%2BV2PBKsbYb4HT9C9VeCkIK9Z4IoMuyNI5C1UDQfBxydVO2P%2BmJ5VJiADarFHAOsZMBV4x%2FGzNtgb9dUdARAA8FC%2F%2FU5VK%2Bia5WLx4vWt6CtFZL7dlBW50hH%2Fo9K3eFdXeHCCPIv4JOUZKsfAoEDQ%2B2r9P%2FKhC619NhKgKvWrIOy8T6eB6XQJnpGBx9jmQVJKcMZ3%2B7zsA1KJwVKUhY1%2Bkt15%2FqtptzG0rce4vWc3u5jtwvsO%2F2jJ%2FPP6fmuCQTnI6xQX3IwPsJ6DFv%2BzX%2BJx8SyBkGYZeRC8cpLasrNUNZTTaGJWqwgKu9fNndJxh2XpEpi1ZXL%2F8ZwipQSdeJ2WOx70b%2FA7p4PDsWWy6sQM%2Fp5S%2FD20RmnywJGSxXf0vPpXoyUcRdxVAMv7%2BPAhULtcYXsWFf5CeXPnJ8XOPUc%2BODG2JaTIVpBJ4xcjIxt%2FcRfhdJWjLh2mRiSQ8DxhzIYAMQ22%2B3UOlmHlSa8Jhb7KzUeT6t9wsRmZPJf5VMOaz6cAGOqUBjrAYiJstU8lzhjrJcfaT6VZ3BWDwkCVApyC16Evp017UI7Q86es%2FAXu2iFJLyXt4%2BNh9d8%2FETGK2v2FFZeRk08D9UnJXMWNP6veNyxZKOtybiN2NU6Cfaa8rAGWG5EHSN%2FG0g%2Bh%2Fyz3WhwjFOqKtkbFutY315g%2FZdQKD%2BX5aNTlIOTv4zBWVvqfE%2BE2Bs2%2FGrz%2FemPvWBCInxVegJUf5AV1KmQNH&X-Amz-Signature=70d76d63cebcb5da0142df57c0a6a648fbd57558d4db2286f46dcaffb73a7288&X-Amz-SignedHeaders=host&x-id=GetObject)

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
