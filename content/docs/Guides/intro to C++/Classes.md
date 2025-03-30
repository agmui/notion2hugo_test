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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPRMMZI%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHr9zU2PGlC8VC3Pw1H9vw6HTJi2mu4Dw%2BTVSWy1FSn5AiA1vxFf20imm%2FJ9IjLqViDD%2B5k4L9YBgDo1uCU74W26rCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUBvdj3eGNe1aKZT%2BKtwDPmRS4Aii5LssfLv2wLeKx5ELvQ1IR99757onSB6UkFIRJo0Omg68qB%2Bwsd2ga4bZ3PrUP%2BtKkEpQoYdkwFW0bZyhXyvj93rMnNvZX9h0GiMI6sE%2BqV9%2FmfQZG7UcAByh%2FrleovL%2FFa8VWdhmiVlwxseMmbVUhQ8Bv4tl2v%2Bpqj7cyw2q14YeeuKCL0%2BTu2GcPg8bswckguuRv%2BVgpNZlOCwGAhTjRa16OWfYylpu5uYZ4rGhcNRWz%2FFhTT5rOufGxObbVPyPS6WCaIAYSrnX8urKyenYw%2FiChGcMCuO0hVwDY%2BQRe8Ff3I%2BNOIOgHHC%2Fa9ingVTGM3GD29ajINCiZfIY%2BqOFdZSotL1gJaTngtQbleihjdIiL30wu2N9tFCQWVNACEHeizAJ48V85mp9PWI6LHAFIg4VFs3tRMJOtk8EeCHU3TLRKw%2F3Nch3tVrKHhUjTqyJmDCKcw4cC2cYSCKvsrIkTft7VKDGdUJuZAa59X2JmnpoDbF1yv2D7Fy75prusLqfvYt7dfvguXydTgLhIMI3Se%2FxqwfntybAYi9T1Tae%2FCxsnerM1bVJyOTY3ivbdKPJxqpykP1qjadS83Q3UD1iMOdkqmDpWc9H2%2FuvtXKEYSgOeq4Xr7Mw5tOlvwY6pgGHI5zOnuf1%2FHK%2BLWlHB%2FdV1RARf8KJ44Sz9I6f8MVZ%2Fu7ZMDuq9dg%2BN93cjpRVbxzDFGSlSaLDuyq2cykvHAd%2BK3qUs2m%2BFCKYGzKPi0A7cIjwl4YSsn2XofRgIWcn6CmKkb6QeANe1VkIKLlA1uMEZiTWCYoA3HNDI%2B8cBQUIl%2Biqsp43brgQJjOAr9hht%2BE5s60%2Fbl%2Fq%2BeVv4gMQ7kaWTfy7occg&X-Amz-Signature=77f37fbdf7b7036633afe28ddddaaee5bbfcd847f6160fa2efc9f8034f82b059&X-Amz-SignedHeaders=host&x-id=GetObject)

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
