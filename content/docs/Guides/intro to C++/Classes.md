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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIJVBUV4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDahixCpjheQ6caRHay55PzZR7efhGA%2BkhwjrejclfMXAIhAIjY7kv8LC7DjvOeFVQPAdWpAomoGty9gMONbfAFnej9KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4f2R34XeFRf2aEmcq3AMx8LOqvsBD1qHpwP%2B%2Bmt%2BXOOXrOJ2VgOKZ3M6O35VFoUMxOde4bsGlKvbmD93SSuHbSs9PqfXUdJ4j7Ct%2BpcrNBBwLvIW9eQ3sTTcG4P%2FjH0N9gczEKXWBUw3%2Bda4ujIaqdjBB929BFLFytGuOJCWrQDwrO3Lq9dcdGRi146dGoUuUxQlZe2N3Y7RfN6DLjdhCkIBxyYIpQ2EvuqsWLNXEynkQDCn3EHoKdNY9Y7qn9N8JrfKx0sijTDTzpInWMIRLxV5tg7GRunoW1Ebaarqwl0pinZN8BVESfkNZiFXdWJD9pueyoyXT3ZHVVIUDz9wOQ5h%2Bwh9H2v4mpdYvGDM76f6bCEEgvd4IUw6g77Leb0mne1SbElLrh01vdYQu6%2Fh54Ei3XRsDHpMs8aP9E8x37%2BL2UqKdLYwGCWc4ksoxLaOR86Pxma9MI86z9cCYuAQp1KryGwA68gF1LXm0mMu%2FMQNSwLkhR0e5Gtwmu2v4uVURhypTgIit50i603gF5RxjSoD6YKdVV7r8w0MeLGImc7%2FLFWRtzo9F%2B6UbdfbCrH7tCp1GBqNX6L%2F%2B%2B9LGL6BNihqRufQO0cVum2xjKpr6jQV0IxHclrWieBpcSjNnwRytoY8UjR1O9f51xzCxnJrCBjqkAfPXF%2FJopR68T9wRnEv56gEtN%2BsS4ZvW51ldm4dMUykmEUZ36N4yxmdQYCbS1GGlV%2BqMGNiCYUhSggaLlwh0H1KMcRq6NYJAH27WB4dWLGbnPYb1IK062dya1cZituWw5zD5%2FjAWpHOZ1RVDEFdv%2BEvj8oJNu7vDsDF99Bcf1zMURZQ8fIw6mPIg57sq88yNl20E%2Fo2JogxHl6t0Fcu4WcxXREUd&X-Amz-Signature=ff76a8702df4e1c4ab8deb97dfc733d910dcba06fe860780a3a691bff0a68ace&X-Amz-SignedHeaders=host&x-id=GetObject)

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
