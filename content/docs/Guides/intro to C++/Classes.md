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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MON4V4D%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfXWxPDLuJGJoWWrGvdtY2%2BGyBnVkQcfT2k6VGSUfYGAiA2CQ3c9agoPCFyzNgcSyQ0ujAjqJ%2F9x%2Fj%2BQsJ7c%2FATdyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTTPVyFKs1TjF5W4EKtwDYhCWwb%2FFjenBh%2BMqLoMBD3zb2pctl8%2F4dhZhK0RUsiYrYH%2BQWm0JblmqCEqfxwNYjysSBpdz0Ggjda04wBtu4OwDvK7E85vk2D5CyCv0%2FsPT%2FDBKgtT2yE6mZnoEL9k%2BWfyggrYxAcZVAV0w3%2F716w%2BwhoQsZCSaDVN90a9ZCkAPf3AX%2FiY%2BTG4mVpQKNCJTEQEnG30CeiaVnbDnci4ujDW%2Ba6y3378NDWYpoi3rTEA8FMjvwcZT4I7aTTMzs7njBisFWzk%2Fmeu8yEePus%2BbrKZMQJIZIgY03IBJ%2BnqG9aH%2BRSxW4%2FE6xIrzTdfQjWBcguO0j6wLxQKCABazQKVNgIE4moxEe1BwDIfsWxYLIX%2BHcMGIsQ5%2BMKm%2B250gpWBjUAqUGqbAdtgPgA0XfTLJARA38b6bvbfpcTByG7fSJjC%2FsI8igeFW6CzRm7JS2U4Iy%2BAjbDSeBlpbxY1tgESZ17kWKjd1iGuVeOyALiHhWe3KhO1f051hkwoUQjvH9tZk%2BebEk2LNyJwDP5Hzj46eY4zp6TGOuEYWkrzcBhSurJHc3mRiXtNcZhOnaG8pzSQVqJ%2BPcdPQ8wSHm2fMa1mbjA02FUZbqNKwsVe%2Byi3Se2EmV%2B84sIwDNmypYr0wls2GwwY6pgGgASe%2BYRMIGa4fx0WE6JlVuSbOvpTRrSqMsFz4mPeuT%2BJX5LTvlAmU06QsCzKdui9mU9DbV0tUAiTdKK8UizFbNySWzR%2FUsOEglFzUlImE8vsN7%2F%2BmU8bX1f2IT5oVrO%2FmAGf6yVW5cLieteekRhfthrSEzJY%2BBODfHg%2FuxupEeIhLNEyP%2FwWz0%2BJmGTCFBszdwxXRXBTCoDOHZPEtDwVAFZ87w%2BQs&X-Amz-Signature=a868230323c2dc4a6f4ba08a9dcd364e94e396f78a2dd5a5c5661583d47f3e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
