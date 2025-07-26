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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA72ZI2Y%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDqBPNjfDfoJkyiU6sRc%2FkGxVCfdmYsHk9DeOCK5Rr9dAiAokq6zcWCL4sZEOdH0gA%2Bgjj6NNhiVNV7JqXpU7qHu4Cr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2FBOWVbGRV8vcn4xpKtwDH9lmSr%2FOF2%2BZ30CffKB8iPRMkB97aUgRgMxI%2FZkweKGA1WoZY7O8GWLM4gLC55UGqr5NNAeS7p68H1RqSWtOd%2FZGOLl1x6g5yYn8o5HZi3V7e%2F1izdHUewl6a49LcKEeB7TTTMPI1cClrENrsrE9Ij5I%2Bcwryo4bABv1c%2BcP8xUoYXKhvafz8Z86pfG01Yk95YlAxkXUOaPc7BDaLE75nIIf0JU4YeYmvOTZtD3az8TxI%2FxsvImt4NAj4CT%2FIwiwidn5VYmY2FIrCU%2Fl0hfZChehRV6mRonqUoV5sfizmmwIfjngo11dXCJIAPkoW%2B1zZTEqOV0sbynpD0jCIp4C%2BcpNRMwOti8pU79uCKLaDQtPjLPIrKbT2LtMI3gEadIvMCxeKMfBlI6gLHwDfwL8MKtt95kG09Bdq7gEw8bzdHYApn7%2BkBRKNJ8wWS9nlr7d72IWoMPC8TP2IR6kNy62UflUg3Eq3lL%2FNgIToIVKtT9CTTCxbuiPmGE9S4mLP9qZnnrBVHsYb6Uc9v%2BaOm5Xjzq4HRCvoXhn7PGIUJFUlIl42quzMrwCbWcJTXA4Rd4yFLyeqTba7I9oIAFgJKsYTFBqg%2Fzn0D0rhlQLu88qkoE%2FRhzLc06yopst5FUw1KuSxAY6pgFjSBdlo8%2FE%2FSWCAI%2Bj7ugUcklr1kTTeU2VLEn4kXTjJa7TjrCoH%2FvC5ds4zi0sxysoXs4VOlif7dgqTgYZV1x4S4UBIPutgRK9V3NEu939lEGwcx1yEIf1k9UEIhRniV0FMNeZrHBwWtLWlRQg5k%2B3J9xR6fnHN5VvVQzu93z4uRmOdV9DoIkRxJaFdVPzxAjFgK30LiSu%2Fx7CC6%2FoqN%2FDErITs9mz&X-Amz-Signature=c01704446b359e98cf506e2f51729385a740511dba0416ed7daa62e4439398ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
