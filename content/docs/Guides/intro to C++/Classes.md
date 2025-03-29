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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R464SNF5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIElvujmI4PAs4qE1uEZyX6ztvG16xkW3ayx0UBSohp6VAiAT0QMoQPMQRpT2s3sIVb1wVZpBg5sY5Vng%2Fbz9NwJwjir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM4xPAbvWbQ0xuz6aLKtwDPL8teL0yeoPyFouSY%2B8J5ZJeVQlCRGCXpNI%2Bf%2BLSDrw3qIcCLIJ7aNGcewKaefwPVv7WLKv4Y2AlV%2BuQlmpVrDbg%2Fu6BBNHtan4ogtJYLPdwwapJc6SIL75d5tUrlbMsWIRR0rKKsGnNmnnP9yApUdx5ga%2BeqwcnIjEM4h17KD864VsCl%2B745PUPehfPdG2vzB2onOGsevUqDMPIKgkc7h4eWRl6T06mNk2Cvo39%2F4QdZbOezsSg3CUSQQVqXRrm7u1SfEzizJ0US0Bg4a%2FgLNgT9ON05jOijUSKYb5tzkA%2F6mcntlMxPg%2BJAvbjrrF8Hbc21jOyfxdlWxJC5Pp9CPbyv7v8f0Kn6L8E2hSjPFg0uNgAtiZrXpbNBVC112kOxKURtMvvht%2F41li%2FUVHMkMbhrkLMQt6374uIDHNTKYi%2BP4GiHScI2tqkPjxI3qPpVdG%2FHKAVi3evUXZB7Z3Ms%2FkjD6GTJ89sEuTnm6GRoblVNfyIdFO1tCjnwcwxVei5VTg37B0Ic4RxQzop5QtjzLOh%2BKNmThQatSzqVSoeF05KZfI4bdC2wXNdq7iWVOaZK3EDKPCHRtftkW3bdxPxKGiZJ5lNQmdjCJ%2BOFnh6fumfE7tzbJK1902ayLgwkMKhvwY6pgGSHdFoNErSodgBVj901Slj5KXV0paM8%2FDPrMVwK7lYqMIg3j8EzhcN5OTltBmckPmcOiyTyG4qthyLEcdWYZQxgHtiX2JgvxW9rGBYYnKZUUfChBlY2EVcU0jr9LVZjt63pWQA%2BMqJsmoqX8Ea%2BFFVUR%2FM%2Bl6Td%2B6y5W0egk1020CZj3%2FV265CFwfRVuaIH1Un6gGVvkHDqlJdTi%2B3DuWT7EbuWhvg&X-Amz-Signature=2a1f70f4471bde5f0099ef625ddb4e7779a536ad70d1495576b22a549d496603&X-Amz-SignedHeaders=host&x-id=GetObject)

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
