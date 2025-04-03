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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BHRCNCE%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRWUDo4jvQVQr1PP7CVLLSt6xCL1K3sEgAMOL0r2hQ3AIgfR3htHZJDjkEaBYmNvns7kQYuP03ashhRbfeBG7ZH7UqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKcx1H2TK4b%2FL7reyrcA6n4yC39ra7WEsr3zXX4uZCdozkuhGgTbkE1PieZCSKc71oe2TKQHjYJD334yag%2BMmYxV9ObOVnvrdW1wZH3TTzocy4t%2F9gQVqmOmtO3D1DtBGuBwboTBy6xUsfHblF%2Faw3PPU%2Ff8%2Fe9nNFS5YlF9Dqui%2BTVp0LCAiXnHufuI%2FvwDw9mKf1M8z3v1x2fGRpVz4gukiX8tNgZuPvnzu59T2L6llOJQp53ckPB0Kou2jraf61Nq8Xuqdl17ZQwgJ86YN45C6vbanVgOcs5waihKZoxHWoBcMwOffPhNpFrWuFI3l7KED2hqwHXmkCgf1Tp2MdvVn3qW%2B%2FE%2F3GWMhuR%2FataxlafhX1d798rZHtoRtP5HCHguJx0B40CTaajZmsh8QabSfW1LZVfDXynnhvpJ20hyDDixr%2BiDwAMOZKOi51j6GJ0gQUqFlxkh3SxJ%2BvQ3CBYo3Jp0b1zEH0noPy7l9uNRPSLJp8Ln8ce5H2OC6W2n6F%2BC9FRWpCYheKcT5MAZJ6xp6uljtrWcmwCctQlPj6wNApWSGkidwxCEUjxvLEa1xloOHw8uD7iOeuocInGIJaHGAqK0rhitMUuofbV73xHTd1Fl9Jpe5sYTQlqCQkvvXVTaDoKXck5503%2FMO7%2Bub8GOqUBGLNhWmYfq8UPofR60amSWuty6OUElkE6x6f%2FxshsqzcYwyBvC4iI4y8I1ef%2FR2fe56SJrulTMjTQ7dFm%2FB6DklpFq71QqrHV5RhImjk4bmORtKRf%2FKU8HJefhymDzY2elyeDGB7xBIVJjNK8a8IxjxirdqKBl3pdMA9%2BEPPDUMH6NvKjS0M%2Fu%2FItXIOMbkd8zzxyel%2FziJPBZFoa8CCUt0lSXnIz&X-Amz-Signature=94abcec4ddbaa7a831b99e9966eab4f8c2c8b3dcfa383566ae302e1dfdd4a84a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
