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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDYYNRMV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQ8uWEcM5xACqu%2F6ILEYM6XLbMpLCf9b6OZtEZnrdCzAiAPWYaQUnM333U6Rgq55c6JuxhnBz0bbTURLl7NbxbVXCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMzrhuGyahlTYGZ3UaKtwD2kkDwvgMdy4XuLs9Ch0T4EOXc8MrZUW5N7ak3S5KvumEO2k%2FvONzmZCjT4GUKXbAj7GuPczymXpyeA42dS61ryIMuBtCk0%2BwZtEdhq24pKt0uAIAAxxFEoIQpcuQ%2BmulAVcQt47QxrOa64J%2Fu9KfeCNMDunb3sATbVvi5HWG0Dh1lJHpNJhCoNhqGv063qTL0zgw%2B0Ahyib9bqPOs4APN9N42yH9%2FrP1AIdhsIbOEwAEf47piACYMS%2FtqLk4olTSe23E%2BS77tNJrK1lnxrSF4FlfB3KyjY%2FoyT74FFfWg8Pm%2BACUeaR8WvhHRTaByhGToznZPkAJaGWgdgwi1GL9qiuuYZg3mPlnW1CkN0jvvYBFtHhw93gSLzhbnutVp%2BDkw6mvH2TQMxmLNRmq0ZamnRS0VgF6SaCc1JfO4b3xG28y7duOH6j%2Fr176AG%2FZjvVQexkZ2IN9EZgTYh70ybXUO5UY%2BT3JE0uiYqCfy56YIUiZYkS2b37LvwrgyPaLPKaChYrQDGhJqNFMxNu1pRQkE%2F52gS%2B7mC9Caviy0uwo%2FJ9TeA4pN%2Bp0KzjiPoRdlBNFRItu4WAUlgjw1PVqeuIAnX42h34q4slNbK7EgHVWx5V2g8m0t4%2B3b4th3Jcwjq6OvwY6pgHTHwkykIefjcg2ZG4kxZz%2BLQ1rS6TxE%2FGYrjgsAmNEX4ryKQOAWEPgWL%2FvSsOHuu8lFgWNUag%2BBBpHjcUSzJWFOoYXZuaPNVjo2shIUY5AWDNaHdGYFiXXzvr6BrolcKYU2zMiB%2BJDk0EZv51nyGBr0zt%2FlIyWqw7D9wIYMUInrD6mV4qZehbwlT3UbBzEowvtJAA7ePOFoV2nP9r5B0y2zRdJt0EF&X-Amz-Signature=eef635fa23610e41d102d1ff399f48c64a185fb15e5af29221a54f34d0aace18&X-Amz-SignedHeaders=host&x-id=GetObject)

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
