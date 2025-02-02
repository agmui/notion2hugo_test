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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKOG66RZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGBbMwAuQqeXrnuEseooijDP1xpOXU%2BVpW2qnL02TxjAiB2XVZpBFZxx3lV%2BxEsCOkrGy2nsTXZIESNw9N0VkfmZiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf2EtkryBmAazTiJfKtwDCXUY7PoApVIasqiZmnQcKtlKYYnLvmh64jBF03kWNBIL60Rx0AC9a1Toh3vs70oY%2BXVkU7k7Pb4QjH8kejNko4fjx%2BkMykWrTC%2F7b3s0X6g%2BHJMe%2F%2BvZkCdCJiUwEJfA9rHRV2jTZFJGdaAqni4ahMX5f2CIZPRX2gOepMs%2BOZV915joGRIg4myybb71r9tmg3Jd0%2Fagvk1%2Brgh2Ulw%2BteMN6c%2B9FFMh%2F8bBNW%2Bqpi%2BTMXmtBC7MuyNUhdyc7irhMEnqEopE3k7G3Mf1%2BIoQgiftt9k5kci12Xp5dnZN7wU4zjuF5F8WEal0iDfBeQx0BXpB57uF%2B0cOtz06lixT1HS4IDKmgkJ7URdf6dd1SsOCrcbr7LBQc0izhbQ964NnHHg%2FQck0PiBmJY9j6iWOfPa0DIBeXgNi7aQdLFR7whrqqhsFNGGeI%2BKSd9tVseM1pdRzmHp5puGKqD8SbS%2FZ8KhunFfByizk6cFeN%2FCeBSnRqY2iR9ndxW%2F1IGPBru6yM8MqZyEZn0coDT0HsrOeynIDvRZYuCD3%2FYnTgYD9fqKyK5ONMc153GmaJ2bWDi4C9dMEZ9wD1EBJ72UEw4la7g9vgTaqXfwGQ1bg%2B1jdwMxfJzbeNeK3ZVoeNksw8uL7vAY6pgHhO5qgPUYJtCs9jcIFMK78zlpqJoyeWd8tbh8IcJrIIWkXvHnVJiKdIHOVPBhXcRDYJsvcZUIvhgHSxTXpwElRpZoZ5xTdVPR7qsw4ZA%2Bh3%2BZZGbQCeH6AJaDhHR5YWXvuOIZBI5fZI75ArCuJlwKi83rePgqJg9TpFTvv%2FJsSmQK4IasZqP8HNjy45rWr64GeNibAlsX%2B%2Fr0cz9gv5xGJsMHw3SCR&X-Amz-Signature=b1a4789d8eb36133c3ee880f98cde69a70e23e208bc1e8943467418aaf460475&X-Amz-SignedHeaders=host&x-id=GetObject)

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
