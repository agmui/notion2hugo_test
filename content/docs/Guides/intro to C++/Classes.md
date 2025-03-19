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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574RHKSW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDp1sy1RWcBMJXHOiXcXhT5irL9IL7fMQWsoKRAqbf8IAIgAY%2BtB57f7%2FXm98HIb%2FUi5LgycpQSG3dNhcsgP%2Fjrbqsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDECT32g%2FoJ8LIWkFQCrcA%2FFVNhrURQ%2BXjPCeANT76vykFGfBtbPav%2BKdEfXvJ7mUNx7wkcDZV20AFYpataQZULGgERPxnlR4e6ph%2FwOrtqmHnBS5c76RmuV8rNBf53wv3hpdzeFKpfS5ObFQdtO%2B6YUEIkS24YNH6l3hmTx2VMY8vkjLs5VZYtnQKrnxXAHuVfVPz8amMbL%2BnF5xawneF%2B2wn16pyHpOm%2F%2FJ5qWEjRVgBDUyM%2BqWxQaX8EEcD5ohbO9KzVC0MJFJMQ4K1L8uy%2BZt5DK%2FWzkdp91PSnD93NpWtDBjJpvMu58FNgmaI0SrQ107s%2BuSSCWn5LrU3LE0uHyF9vx902nN3kDD7yErSnTWfUewV106F2qB5WLcbUTGWQPuBKvk0ovYX9Q9%2FBd1Tb7gCwBzasSLiz34ASGWoOPn6zYnaGfZ6ovkrgNstVfpIs1T4DHRXcsEawp7JKjDXuaR01rZ6b5ob7xZuKWR8v1LquMhYS3UrwqoeUZkHyIJaYNgxVe6qhVJ9GmSNcRNKf450nGGW8BYuhcxRCejjelqEYvLdbInfm0OfYhkgQg6Vh3s4LgtYbUXG4blJ2%2BWq61Q4QzilY2Se2H81QCQpirlEBa4bOAsMZXlTOyuO%2FqDdj82R1XA%2FPIyrUPzMPed674GOqUBmiC4NMxxOmHOrNPmBvaR8kcaNCgj5i8dkZ3PedJNV8EXi9LZ93BXs7xVqZCjxVLTaUzIQkLeUw6JQzQBEMyaR%2FL43yQDvS7YvYKYvMejAk8H5Sso4Vuelby9oNgvVg25%2FVmbeosDgZRbP8ZpYqSuP1Cx5RcTyYBvzYHPA7CJkKVol2DVGeKRmjqYsZA2IAyK4lU2exK86XzlgmVsQekiDNauLN7R&X-Amz-Signature=55806f0a4d82e3966c62b3387f1ca069b3c98e090c6f0c2bbb0c8afe189e9ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
