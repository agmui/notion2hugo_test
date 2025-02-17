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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KNDGP7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDSG5Iq3VWZVyHZp%2B5Vk3BonIee2IDBaxyGmT2E%2BirjtAiB%2FukzJvkPqky9NF0BhtR1%2BoW8csmQD4xgL1FWa3T8LVir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMpmh6eGT0YIFHthJqKtwD7d1eIzdNriJaoFKPb6ka%2FYj9QjTPxO4EG8luuslj5RhcSTg77nT2Ix4AWCsPoyohmPlAg65zALeQW%2BSycFSGCvFELtjz60DjiqX0kn%2BEwvLj3nsSccQ657YQJ%2FcPuemHLgA64JNoYJp9fbhqnc%2FXVArYDDgpYss5zDf4QvJyax1NOXyGX7avsmcn5o0odcvN3ImEt5tHaRxjUbFxTadE5FAqhuogBCWwNdS6zQFzWT0y13kfOHUYWoqT2ns6AnkpdtiWOOoogrtEM%2F00M8sRfUCBi8oN44m39D8SlGN0zrw4TYwrSjOyZf1iayOQ65LiEtkbZavQSqNvOPTCIp7FflqugdR9I0%2BvfDApotMAY5DFOTCV9voaz8RLseRsUtM1bmseR55Ka2W4VZWmzGv7T5aIHC9PU5hOrnAvyszrPAuHSTYPOqkz1Wklg%2F7V%2FktRgr9nbQkndrN183TENS1BjqtzMgQn5GiOQpfID3FzKBsBeJeyPbsooSt3u0RBTnZGMH%2FnzGMY7rSogzpeZXgvfmr1jYwBWxuIZo548jpVnTy5GtIatyJIWdO3qntpFIQ0e8HRDmMb1Gq2LdlFi3rmrD%2Fw0JxN5q0VCN4HSg6z7YfyDxDKLjU%2F9ccM5E0w58rOvQY6pgEX0%2BKqmqf9rHQINNHO3igHdz%2BB9cDv1W83n%2B6GmEeRnNnwtvmjebLMurux4qLMqZmheLl160OYH4nUiE%2B5c9pO7oSJ7CzDYlCydpDQIk4qyhUjv2J%2FOi6h7j1uPrlCbo%2FIqq0g4iwICCpyXY5IS9R%2Bw6bBHGFny2whcAG5qWBU%2BHoAMmho3khvXGxJj%2Fp3RlUc29MMZNnZ0qjKx7yWzX9wB8ErmFbi&X-Amz-Signature=6cf30aed5996d5850c0968c4df433d2cb6b1657f0fafbd384574fd72c949bc83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
