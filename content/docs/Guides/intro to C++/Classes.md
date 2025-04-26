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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBIAHG67%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6%2F4N52kLODddvpDX%2B12J1UA0WNnHhYSovmbW5V2yDFAiBzNCGyWV3%2B0t1we1fvQCw0pZLMQc4XwCFZj%2B4TbRqMkCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMUfRZewSF3gjVR6LqKtwDoL4LlPuuiVb5nsM%2FiIvE0xCE%2BvxDw4%2FTMfpc7%2BNH4VY4eLkr7b6eUkY8BYFExBF2SWBc2KNCOR%2F%2BtDcKL0hct34eAl4lVGEmsnT31usAFkzfqH7xG8i7YyjgVmKE%2F3P1uULjur1EOlISXcqm0gKA96Ew%2F1x5mV7vdsg0g8JNIM09IHNJS8JxE%2FucLpPnOGn8ke65XMdLbaWYDM4czSkq6RAnhJ99AVdwwJuNlw3xso%2FnsLpoRzABJ2ebajhCnorBjUoSqkWX%2Bw4Q%2BkZmIfMjpQKF7cfHn%2BTquuOZkjTY3okxYOFB9ROHuNRHpLcFFjuJLs4nQZSRvJPniOoCxsRoMGJQssd9Q9LAx%2FcLAP%2FMjHNFIGVZCipv6cwkRM2qgt%2F6YRvCrb7RnQFvIsl6wNaTDsANSrGFShF8MVSyusfRafpOwq%2FPaTjAGj2QzI3qkKK416lNeL1D%2FsEg1yrWdABgGiZWKrOuOtrOOJv5UY8J6YJFSqoHtJLzOkaTDQC%2B92W0XjadJI2S%2BexQMq0G42fXUUOtCQSjWz6gOlygQzsRrmNxiRA4VWswyb7%2Fc6iwcomMdgCzHeR%2FAu6KRfvhb5uGtT7v%2FKkhYvHG2eFlDqubVz2yujFzA98XYWWpP6Mwwam0wAY6pgHw7gYLgLvyYw6ornbJRkLG3ohPsBDvQdhjJTs%2BMI%2BIbApP969fBQRjllhBpW7FRSGXV%2BExt2JCfBJLmUgBdtyG4u8lusL%2BDaRczYnt1XspS2n2NsJFd9niVXUO%2BA%2FCrsYnXHa935AxJoyIullj4RKsxhW2oINImXHJdB%2FDdUQBj21YvvRvCelsah%2BsTP90yVgppUsEl9Yk%2BkUCT2Bi8b8Y0Gop4QVu&X-Amz-Signature=003440dc4c210fd0840b55caeb01f76fed9810ba0d99b15bb24fbab04397b120&X-Amz-SignedHeaders=host&x-id=GetObject)

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
