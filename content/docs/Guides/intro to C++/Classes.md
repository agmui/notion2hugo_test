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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DXBBWA4%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTjGeP3MJC2N59CEkIZSyTZ4XvWdIA45jDbhnJpmCqZwIgaWvUfl7yBugrA%2FJWxIsNAjJAuzNCn1Bp3sVVfsbNrcEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6ss0s%2FJUhU7YTioyrcA%2FmsEQiHD6YdfnXZyiqNmLw97jmlTjjt6r6xHrvJBl2kKfj880sIZsOCzt8AuYbsID9ioTDmHkQ0VLTZgUQBcP7Tc7ilrk695vUDRnyzXGuAfoGcNg3N9uBO5eweEe8LMeDyNGw6l7lP6DEpW7o%2BfUi8iLfYGzWY6ENwmylWmwdtu0fZIBtAd5VRD9p91oX%2BZz7wK71ABJKjt2mM%2FUWrl%2FcQXxZ2IBQa2aO5kS%2FDoMfRCIX2%2Blcxvvgk8aQSX94rCrGGawYpB3bTDt60A4jVDE7zRtdfJA82rTUAh6JpmOeiJq4y37izoJ0p%2BoEq%2By9zoRMFLDS1RPQbsdqwSuSi6uclX%2FJ5wXJ9xgXGR3hCNG3uPqmmwyqJ3cht0o7CS0Po5kryFP%2BmqK7IH8YUGHD3h4FZJqLcsWRou2q%2BJTnYgUDh0PgKv3JJ8CCP%2FUZIu0lCTlq08FwhC%2B%2BxsrlRHOL0B3Swcujxo6r9z6pYpiBIdIkv3tUFqDPQKZ5Rxdykhd6G72yBpRYmBc4Qd2dJPp4GCQoCmEBGcRKCHVXS%2F32SdGkLs%2FTaIz03wKG%2BW7vILfYIUnz4QWgy0fcpU5qsGeGCsDU3XyW9CjeoOPnMCJqISHh%2FU3RTS9AhWjuRP3i8MJLI9sMGOqUBvHosZLg0xR2l92VDBwL24%2BVf95WHSSYu8a7OPhX5e9nqg%2F5oMUZ2I77vNGWaXeb%2F0ZCVcRHrIOotYirsF3Obi2Ait8WODCoOODWGAkhBujdJi1FOh0nqxaEWwg7ueJZpFpM%2F8SVoBxBJIYEumMlLnfUaRZNVBNnm1DOTZwLqqIYXaCgjTVouAv5q1zU6f5vR%2F0%2FXiTj9aGzPByhHF2qsZE01XrA9&X-Amz-Signature=0884055cf1b69c94c0b189f3665ac90e40ac628f0094e008a68b6258d97edbd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
