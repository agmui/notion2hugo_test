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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OTXNXHA%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAlhGuj0097ikGc9ArF3cANnU3zF2DEQPZd16G8EKshAIhANmrH7KHV5E8%2FfUvZauj7UVZaytrUtTbsFC04nYzAgR6Kv8DCGkQABoMNjM3NDIzMTgzODA1IgwWsppLrzLFOsqdb94q3AMAYnE2wurFaVYZ8dv6a3ZpB3qbz36uyUDqPOn8%2FynNwXeWZEzc40xvY5%2FH4qnRbpf4ORJT4h6at9DBTAzxsTHZJZw8ValJe2ujORSoHYL%2Bp6cqdWqJcynA37fPXIUFCchT1L4082k4oeg9azrB6sGsXa98Qen%2BTWrCkzNo3a5Toc89wnzr%2BOTZc%2Bf1bm4WZlkEqemvTa7kIK2EjfOTDK16plqm6Tx3ngE3kiWVk8j2WFhiwQeXyvyESTL%2B4y3OMJXlkZLgeVPcW90JgKBvMdkNxlib9CXvC6m6Jv99OPbAFBpjYn6uvc9kN8y3Z6Di6o5qtw9Ixw96Rnh4LIyCWTFt3u9EvzpWe4ZueTBs0Ngqf6i8CLc8gokuiMG%2FG9VHDdIyOLQZON2TW5JIJOuh9EVW5pWplkwl7U%2BkvgaWGVZZAGvPxm64eo8TmRu66HfhQWEjDQf5WU5XEd0fjmDlN3WTKFjuClBge7E%2FN6%2B8B%2BhiOIdzW5wzmIXI6u0CUN3iMoJIPlmgAFdIfjbJ0OZ4dy6HRTUTMID8RlHFBGG3irrpPR%2B5IP7EmqOYB%2FWqW4OycI6oTl0WYufT48IjupssjftyWKVpqn6ZRd249VoOeCuW%2FcHN5x8Bsaum1OG7VTDch7vABjqkASYqFX%2BEoXj4LHIrlENzxkF2ySNDTHmqPNZr%2F3BLSlhBB%2F7usuIQK7o65vlBycCszaphhiR%2F6V7gsx9yD6PDdHjFRCLWQyfOgmu0MHWBT7ew4R8j78x%2FAnpf6uuAgd5MEaenBw0oNzYUrKSOau8QVEcs%2FWmZWXIGi8dTVeWoyrVjXHh2pIMwOTUHxxtbzhpz5eo5XlOct4o9tw4J20hFvnTpcnp%2B&X-Amz-Signature=34e1f651a26fa5335c8d566b9e08c728961a47eebba4faa5b2ff22fa2aa7f5b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
