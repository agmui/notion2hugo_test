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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625CVOEOJ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCqtsOrqLwJ%2BBk30tkGdaZ7T71nzwpX35l%2BAXl9XiTYJQIgNn6IP7pLrbbvj6UjpqP8pbQBXWBj3zHcvNkohGJnIWUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyLb%2FG7b0v47BBIRircAzmk3oRV7g13mAzTu5p1hmYOWzP1hvoJjjWfoYCBx2r1m%2BEIeu2FqqmZ3ImbySl8leR5bL3a%2BPbGN35k%2BKbh25uzAIDWiU912aN303JgPvQ0cJ3WhpYT3WnoMnm2swWGOpR2p%2FPO5XX%2FEoCeECaEhKD8bKWoN0lPS1Y2O3AhsR5Un4wUVN0EkNdH8mZc6xcgRDZMa4CzwBZngTmJrxu4g62XJYcq7mZE5f7m1tHatybNWZtO0ndcZ1Pcnr%2BpHaAoOeTeFPi30KEujIxC%2FH3CeSbGiSDSJn%2BLNHzxJ4rD3fCCavx7orQEWZ57vOnUsUODdlhR6QvgyJOCOshtMDkRSNSWRGmabQg2YIPoE3pofDhFqjVZ9PyekeEDhnnTYj1wv1XxOYRlNA%2Ff%2FI60s0OiKYrsg75rRx6FMhsniYIelkTgX9t%2FIJphV6qyNevfBlepN5LULFzBD9vPxJKhcU75Rd0WpVUYFWMfcGUyEZ4nFCX0J8Awnc06fkHiclSowdC%2BbNJdj00AdsPS1bKlyKxa8TUO7zkb%2F2afkPVmpHq6DFYhOGCDfdtlqAqolQnRRm8FXxJU%2BuLc%2FJrarREEUwyfVz0qeJMUEE73SI5QROin9VhHn8sDa29oimvg%2BMVqMOOH0cAGOqUBOOO7UwDRT0mb4qes%2B2blVLHZnojuH4GlIs%2B1LldJrqGFDHrqodXUFoCSaM0Hp0oawqGKn3MRocsZRM7wOV8wqKNve2iMu4jnfYcs02W2B2rkfuGRDZN4RQejha7tVafkigUOiBBmHqeWVkM%2BtjF9GJ8NP2bq%2FbPZsMBQpvA7xelt9ZBvz9MYNOvnbg9XzSH6IDJqpeqOvBzAbMAqzGXDis%2Bz1BAK&X-Amz-Signature=fbd2ab98985c9e51bcde1cfefebc0cf0ff9dfbbeba64a6add4d664dca77fc169&X-Amz-SignedHeaders=host&x-id=GetObject)

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
