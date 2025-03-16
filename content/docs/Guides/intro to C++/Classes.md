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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW5KC7O6%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0d%2FzaLB29gyTsdwoZKRg1x%2Bs1ljmbwe73HP9M4dU16gIgK5gzuHAaXqfemkix0pKn%2BnZLjAyDgkn9fEnVezM2bKwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHFc7J2HeTi9fgy%2BnSrcAytpiSOPZEL11KDjZx1jQJHGklMUdgePwXayULNXQ0Z51QAh7bIQYEztm2cVVlUSki70fAa6psxJzik%2B6yPDrj5iDzX4959rEjPYhvnlk026Ztj0%2BY56M84TR11NyZ4mE5kGc3jfjip%2FxR0pn6U7c%2BE8gQloH02rq%2BctAtBj6IlCoa0UgcW088OjjHggN6C%2BZdN7MFIp7SxN0BoErWC%2B0QGF3LXFIFo1Q0lXBtiGkDfhf1u0l%2B%2B3eKxLdjbbKwtN7hY5QLcuLZCE%2FOhp4rIklCNGbIzKmqiBhT8MtOF3R0u%2Bel2MDAXIlmsvNk87Ad2sdJ0UYqZbtDrlhbwyZr%2F6HNx5%2FN4gCRuKZUe4kW2abGvUJah03sCKvlLmBh9pIxLUvG5mwxAxaTF3ffgAgAMf6CPv6pd7KFAlUtPfmIeweTtuBK2sGJnMpU%2Fq4nNRF2dMJBj%2B1FgEYZ7corPtkDyIdqMfsyCZp6PpBKB6zPylXVuBjSVqhSroRkEww8Bim7NsiSRPz3la%2FKJQEgyhRN2tR9nZ8kynCq3IHrtVr%2FhsiyYPvYNx15p9i2%2FYiMNgMY4Dp0u%2FzKrW8JMVBVrLz58I0fX2DJUnYdRIhYzrEKt9tWx7h%2FF9noCiRuECHMN%2BMMfe274GOqUBUxc9AvsIaUp%2F2U%2FWRWsa8SoiEBDuAI7FfZf9INTd2wE3tRVkR%2FAgLxmX7BiCLAq9dKLpZ5ZlDBbX3hSXnbCSoGl67wEeDoX890AAqLkyEClR2%2FmPXKlR2zaEDeCrNzdSZTtc4nJvNBiRVi4cmoHhZt3Q9ts07p8BVeb18IiDDv3Hb2j9ubyuYCJlbbfEZG2WydYYKqsC3HrZ22kmRjJIGEUjdTtB&X-Amz-Signature=558d21a2dddc252066d1fdd9edc76023b184866f03de286cde1e113fd5403564&X-Amz-SignedHeaders=host&x-id=GetObject)

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
