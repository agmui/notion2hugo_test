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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OCKTNF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxFl3WQ2eBZKglB1HpkmK84J%2Fr25pDqaKlj8G7UvBFkgIhAM%2BhqsQ9yXZJB2zdRHcCY6SnN9SrgIdKXSh2tOBol8A6KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp9lJRgHckR95Ib5Eq3AN80MZMTaENtJ48ze387OAlBBhW0OFMRRujCjmY%2Fg5Ni4VLSfrKi%2B5XftH5gUaJYy3riZOniw2lU5NB3%2BRoPWQC4BLNxmJco1fodGnq9%2FLp1GGvhd3NrDRf4%2FdYyxs56C9%2FFgBISjvVpNPT74vxNDufwKh2TtZ8rhWP4b3vMWJbsEGy3%2BKzqYOsg5NzDYXgCHAI6qXByDiDYcPqCY0lCq1S63mW9KZQ7hF6HmCEXqwfnQbRIA0bFcrJOFNkSQQHU8zdcfr5NPy%2F%2BCKFBx4gd1i1ddmc1pof9QYh7Yfg8nJ3s5nieG8rBVNaivBxm6M7jmSbWv8kvYxGS%2FgtajZxXo7tXYuX0Y8iI2NVYIynzbE7iZOoyWt%2BUhSKDhxeKseLUW20ZCFNq85%2Bk%2FgpvruiS9I6xpqA5Udk%2BoSQbHnsWE9QCzGDj%2B8j%2FPVVwG5cMRVllRHKoYqwoFJkg5PcXDIy4U7wpd8HWjMPh%2B3rr3I%2FUNsIxs1T%2Bu3o6%2BpeyYg8FGsGYPBYW7TNQd2fTCRo3hpY0CbSJ310YoXYIz28MTq7vz%2B7TX1ggYIzFNyjeaLSIs3%2BqMS1sKS4Pn2OUzgq%2F4PlG1PIu68JRP6LAxKro4dq3v9pwaP8YxxCacQ7Y0%2FoLjCokNy9BjqkAQwjo6MmjzQkCuMcoR11KycUnoKgvKAD2d%2BlKgHw0EljLbEO2OaAd%2FPqBM1vsylh3Js7BvzlXZq13T%2Fji5hMub4cZfPspkm44UYMz74ocOPf7wEuDcPU75j1rSU5TYkjdOIMmyw1MLhQfRF2UnOWvBstfkEjVI7lz1REaOaFL1owxnJ8M9tRCbK3oSeHtmMpZS1%2BaMm4KcbZ1NgSjWP02bvE0f0v&X-Amz-Signature=54b097d76760cb62b887d0c408773f8c788d0277704b2bc8d465d8a8feb61c94&X-Amz-SignedHeaders=host&x-id=GetObject)

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
