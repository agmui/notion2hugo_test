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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRSBLX73%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZGD7kCcuCfpkw%2FhG2JjXquTd8zAeNXCSga6t0GWdyyAiEAg61QJZSQGZTwXSEQwbkWynOEnGVJErtfOUeRwfMHOvoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNFOVU9ZGEGYS5%2FiZyrcAxYpOzlZWyRqckV61Gyu4NjNrgtXHKMaRPkSN05ev3mwik9mpGpkFvW%2FtMBPVVds5RI3CfO1C4NPSRUOS1zLVn8%2B%2BZ0ClZFI8gHLDxCULVxACmiF0udG99YH%2FQNyqbUjVvF9B5Y3j3M9HhOG%2FjWW28q8zw8T8y23PVu84Dslcio6idOLProuXEESEUEVOZk%2Fwc5dO6Anaaa2eAUdbgR9wHf2%2F%2BnvEQ9BzxVeWKMkTTQCDwYuWGW0WFrUivACPvM%2F%2BxC03kUrxJHvL3WYdKpo%2BdTGGvlPGBa51NcV5LYsCsjFzjs39V6T9zJrijxsSEpvnHj4CaFSgYrLO8EKEaWz74MdBf57VLWc2xweT4B5vjYMJ2Hks2fBqusIil3lJgupQjMKMgJQ%2B8oPRnFtdBw7MvA73IV2FxUcgZaaxiv8Xv2acBkjPL1mviEBl61nfMSV1ENQexEeBR0YVxr7bGagrDIcPatLJhXaIqTKvzwKKq2ktC63gVO3Qd4wWi2tvsijJ1DF8ZJfdG5jh9yIY6pVnTDE0TdlBYivy%2BHxmTcNaVOimKADW5mQ7ikIsZ7cF7z2YuffznES4gNAlgEd4nU%2FnGha0KQk7OqSR0R%2FAYaQTwHbFr5fWDCQc7sU2KvCMKSvib8GOqUBsltlvu21Jk0nIVk0JYcUo6cVGVcZP83sHlh8JXJQxnBZT2rjXaXKr6BCh%2Bdkp56qO0vL7Prdi6Ukva16MbEoRhxbPf4HAa0ZIdPSMNpibP11wQlIo6cuEK1zn7qqyB%2BzjRCqnIg7aVvDUPrzebPub69LKVGX1HXqPp0oAy3z0Lc8Xzn2G2WvIlFYoWU5d4VWr0Ao6rLdUhXHiqeb5Eu1%2B61xX%2Bjk&X-Amz-Signature=af444bd49099b89ada24144420cd10b910e388ed9a9a04cb79e1dbf80022284a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
