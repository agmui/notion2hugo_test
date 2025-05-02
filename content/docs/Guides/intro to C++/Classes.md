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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQDSEBVK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAPw1VKtxpa55iaeXy1bgU6DwtPAPY6UDkrYsLio%2FGWVAiEAkTXu9ckvuCFePfrpuMe4f24az47BItKPYughX3aGI%2B8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETjowUUplPVEpQKaircAyLDYJHJx%2FtcxysnX028n%2FMw7sa4Q3fVx5l9H3VARh01eohRbSNy2X%2F9oUHZwNWWsefsaD6rB58l0RhaZMhStjUbi4op599oSlCjW8dKBIA8DmBzuvEmQjj4Jqsqxn2cYJZXsvtItLrueFYo5yRw14MWcQrS3zLVTa38FTXzxc4Bdgf0Uwcu8A0pqLEMzGmO5FveIz6FVcwJUatz999qsv%2FShqwghjyF0bePQ2ZtctLvms64qUWdsffKBxTtfAEF%2FdFpJMZpUNR0VmD0gydUP5mmwj07t1hD%2FAhfC5Og%2F2LsXHhvVqAtsqoL1ea4V9mFQZi3aY3VOIY0LRWUI%2Brj2Dl2ITjZhcQ7xpiptCzYSPQ%2B1%2BPCiiGCI08YlJOCii6tfvAe65KycwEjZB%2ByoV7MWsirth6h1mHBChFzFjyXRH7jc%2BOWLBpCwF6FI4mMJnc9AgFphNkM5CAI4w%2FvSTjcqzcu%2FvCX05HEUyCHWmDnfgJuLu3bj77pmX5cVNQOaOUd%2B02bn7J9SMtjvxTDJ0j0LmraOZ%2FIUrugiaeP3cOGFcrNw1sYH8CqYfdzVTZHWHhFovkAJLEJCmcrgTKIZITNl7fOhgQh0qn%2BrRjt%2Bf%2Bet8xw8LJY%2BpVjO%2FotJiEVMLz00cAGOqUBBD2oaZNDN3Jmz9WTIfUbCcVhbXwE80PWrQuoGQTJPJFTs5V5Or1QEEwAAvevtt%2BO%2BKhzJz%2BLS7x%2BPLGrBYdYnyX0AwNeipy8rR072vLm8Ats17ELb0MRaRSACS0vwLdisQn8ylnG3Va3TLITP8o4h8xwqP5UFn2FRytASCsVrUqbL3fbraEbvk1Agph%2BJfraJR8gbxFHcYHbvcGx%2FuG2uqWIyraI&X-Amz-Signature=81e4a355e17332964c89a3c7b2540795ba7e5df5f28653d3c879a05aa15079b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
