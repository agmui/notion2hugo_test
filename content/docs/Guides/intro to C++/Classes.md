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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6T7TUCJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIC5ZAXn%2B9ySndsvxZr1jig8eNUZf6HE1OOpp8Bx40uAiEApTJru1ibR4Uig2zaqt0s4%2BqsngCrMOBfmRTFtscnN24q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDIvaHJEPNP8CdBy6OircA2rD%2Bt6FhC2%2FofNVedva%2FVaSG%2Bp%2B%2BzSE3fFQsbcX3r7DwIAt%2F4Wb%2FOWLH3UHHeR%2BYEolyzI0vvF9KBFY5xLELgOkwayS3jRL5F1%2FLQXUAkYJsFJAKQqK345JpyBICparOOIVmQBz8Fkgr0K%2Fkg4dYO7xqS2%2BIpjonbajpyeTVyGcNhWlm5rYx8xHBzYiQKsopjerTKfYX2VOxdE03o%2BzLAAFcZ4Iw5IXXQ2VVJAyos%2FcIg6C%2BGkeMCskZGHr8l03uHymfbKMNC46RSSEtN%2BEOUl%2Bnm3q0OC5Ts1s%2B%2F1AxUPIpQNRYBA0ST8Mbg72cyXLkDpbG2Vz8JbJZeZIjPmwlh9255kvbMoCvBeMsVcMqesOOLHxcHYFJ2tClNgqn7vIMWJmQnmM9hPXxEvmgH12POQVrujnxFVHH%2FceWItkFjl608ezCQPqcNpH6%2FZJP9Bq6dQXoTE0bzW0xFcyYqOUbGCxX%2BKvp4y8O7ExPCHXqT8ECiNxjIjV9EgtazdDRIKaHOTrYYQulPChXxIeQ1S1ClUSJ510H7e%2Fr8bH0LBSnh4n0jG%2B00h3F98CTXE6IpFxSFLxJZxTtoNbCH7af%2Bz1pHRX%2FJi0%2FLMGxcO4jvB0SfPqIc3UcYIJLfvpwdhaMNaCo74GOqUBTSER1VhLxKhEUW8%2BrjncUS%2BX%2Fq6kh9D5ubEZZOR6xoGei8DtgQRANbcOK5myMf8CivKPax5M6G7z1OOjOYM2ehOKjWvALfMh52IaEUbR9KvuMG6OlWAuyeYEFaoVdOV8SbkbFCjTfOOFSGBU4%2BBr76XH0qzuLyKrSR20sp%2BqvbE%2B1qcV%2BTNipjfcvG%2Bnopfe6KuTaZeNtSfYQLN%2F9zBlaXhVupwX&X-Amz-Signature=afc7e6eb007b0946378cf8172938e82f264173ab0f87330223ce51808136cee3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
