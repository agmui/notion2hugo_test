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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWYPXIZN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5dQ6DMshr5xAt7H6OE%2BlPug2cQGtC0rO%2BmTg3ZvogewIhAIQTz9wMWEDp5MXuTo09RQSM%2BTLQTdrHPxfBq8Yp4OogKv8DCF8QABoMNjM3NDIzMTgzODA1IgwE8zFfY2Gx%2FBR60Qkq3AN5V1n0jHVHBCv4I6o5uozrdvLJcKjL5v1IjI6WkrkRuGHHFcarWyQt35GBw0ND7GaSXJxBIuYBEPuRaeOSBwu8vVxSZNa9LRYv84UEmd2lleSNJVgJf53iY76SM5n1fE7mfE4Sh4sikrPIAY4qA8iYDOY5zTPXv%2BAuKi2jd8X1cccQzKYwx5DV1tqCUli7gpw%2F7DoBimUwXhTOX8V1fKieKP47PezYB3dJ1D3W6gSgrXWUEJHofkEd1OsuxA3m%2FjC33L76LaREHeN9DuEqP2KbkN%2BvF4pbV7jT7lV0UfA3JDkq0ltKRqlS5aZ0OxyOwr5kaMViVKZQsNUW9VtMoam55bBbQEyCb5W2cgpoXSoUJgvUxc7dlPCwqmfbYemU6nBPNei7CXiSGAQdWJkiC%2Fuyxz17CDK3LSuCUlastIcmzqKED5Tzf%2BYB3NDx3Krp7qIzeJeTh3xDtJQbOjZfZgdzTcu6FZPlfJ7HSIA%2FkACLDGUnsC0RUgMN12%2BGdByPuhiHo%2F2A4j3yMy5WZyPE%2F7S%2BLO0aJ7Tu69K3gyZJzgGXNqluPPdfOMd8xB2gy1%2B8Zs1UaPUPkP5y93RJbolhyl2VaEUBZ%2Fd0aLJ5TfN3YxqX8R7gcfA1R%2F5MQjBm7TCd0O3ABjqkAW%2BWiPXiavMAdpQLqESkFxuD1S4CLWZE0LjVmxUuoAnLrBv%2Fbs2pkkuEYz65XAMPcI%2FXK2qdK6lkpngivW2EnByGyOB1%2BlNgIi5FtRfsIGhl2PALm%2Fz9VfYf2rOY%2BscOrnaABmGcnCLK6uNyVst%2FnRvgWuW3fNtg1O%2FCJMvYfYrXA4hW5D16nMhqY04WMqEUd9c6VreXBtHpLrZMYtI9vPwEE892&X-Amz-Signature=837efaba06f86c64bd232118ab80c210d31f36fa5f3086d590ef073c6322cde9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
