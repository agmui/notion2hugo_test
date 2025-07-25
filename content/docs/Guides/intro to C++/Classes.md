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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MQ3WJJY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIEeLFjzSQyBMMAcyAXZ67A4CXQfIn0c8JHS%2FoNX6Z%2F0JAiEAqMCxcNzANPKozxpmAHKwn4M4NtCDiPaMAY4%2B2YX2V9wq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGPauwKK6o7tW5O6PyrcA6NRfR%2F8vgI0MWwtuYR9aSib0TwmwAXWiD3rqFh6lzzQ%2Bjv8VEqmRky6UUaXVEgAReKskSbqbne3VES5k2WagtlIbps6pYRgz5PkIjVkY3H3ro7yDSQdyN6ftRQjIM2TfkGc3UKC2m%2F6jyJo8d1ZU9ebtXW2vqnnJ9PPpuHSVcskAocYOyJeCGdRhrEWmDMrBRXmictH2v9wodRtLny9fjvKSxYJgFTNEHSzXjp8ZMHmJCFBCwHtAE9nOo4ip3B8ZJy%2F%2F5ox2%2Fux6f7tgOs90k%2F23gP8qkEaWX7UGX1m38XDrWyoE7vHLs3iWZ5ZkGu%2FBoYBLNXB5%2F5GwuI0I%2F0CZ1dLV3Ez3NJDlNHZyxZAqPcKCPLUFSNDytRSIP0j0MAwy9TFA%2Fjq%2BOg%2F6huq9cFb4MnEusaRlJtDsPdL1vQXl25GQGqY1cMqXpyLvRuVUt9mJvlZSOFNbPzPpwvP%2F8w4ZToroAvC1unG1gQaCRxYsU%2FiBciZHKRKV7P%2B0xGXOAVQRycXOVdiIjkZ%2BeJp%2FCX4lejFFEsZreLH0hQDUfW6OMELN%2BOp6RXmb%2F4j8lq%2Fu8nc%2FzKbj5S29XQpylkhqV4%2BLwFu2f3hHQt07OVggPR87VZrDCjpKsX2mviQ86gjMN7Ti8QGOqUBO7H1hhHpeFip68zUfctNAZ0aIPbWtFURVOqz%2FRmqnQnsUWGgWCfOobYxsvcKWab0Myi0SrOOO%2FwmIKKJYFxR26zloPS61BmZNU7P1PE95mWvVPQRcSucEp%2F1uZydep%2BuLxXvgYS0RkjuX3CNceGuwKq3MMbx1MkQ3yEJyH%2Bc0zE9901tBcCad6qQfvQY6jMtNomtqF9dUqXqXCHGFH%2F2F8jk49je&X-Amz-Signature=43af1964d30a88fcd6bad7ebe1c8a78c7a9d853262b2a5f88707c7ab87420d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
