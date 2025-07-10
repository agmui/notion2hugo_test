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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M5V4NWZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T171137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkfCqihIuoJzkX%2F%2FTQivzwAFQmMqHQgSEztwSjFrF7nAIhAMy62Qgs1CKa6%2FP4fLQeHaMy%2F2JyKZoKd0IDgvYD46n%2BKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrfvyOsaBdlZEz5ewq3AP03jJIgDsSotrVATsICCHNxT8u28LlFD3S7WzTVNmGl5egPqBfZYYtQQnyoGEY4ACP0Zd1Jwp9ZXorUevVtNyKuMj5MR7C9LnNUTZwq12Hp64Nz4XZvG6MeFY9%2FsUp7MlfMMCBG%2FFTqY5CCgVJc0TPVi6ns40KEeGUcVOTtt%2FxFu2m06HTY9R28myYHJcUlqPC0aoYbI%2B6XKkhKZWbMOjsjuHG5WWG6iGnoOdXMJcb9xkb9r6dnl89uxPxvABYDPUSdg4v8XSIngmo0ldQlHn3VzK3vnKf1J70MuFNX26h3Qv4I3SHWrpVkwd7ok141Rfa0Xz%2FtpqKSFtsH9Q3a%2BofqiaavHGu8zDTeeGgQAMTVnZd%2F6DF%2FVseOQLZojP6ynfdC1QLhu95bIpjZnMN1OYbCjrb4Xt0MCCcabZs4LALD5j7YwZ10v0tuNZWef7nQzX0mkdFfhbNhzy0mBHTglVkBc6EiiLLJ7F1pFffzVX0w3LDRdEtdteRtcJMDbYoCK49WKZN5hFGZ5OdriK4KlGwdu0KYsl6xy1%2BbPyOOYcedxG5VzmhIxcTQlczAGg%2BiRQiEDKDhvjwbhs5A1gQXrDz3WaqvlNta01gJN7b3FnrZoax0WlEG66K4qculDDa0L%2FDBjqkASAde0E3%2FhBNlAAi9ux2Iu1ukrwj7u9TbMg9duSwoLUq%2BjwzEfIbu642LLAmWlG0jnUfhVR6i04DVpS4Ch7LBSIytUfc0DOr%2FB%2BXy2FIR7g2hxfh%2FikWqF32hu1Pn4ynpY5%2BYK2fUgrYr1giv90KjZLroo2ZPf7CX4FPdYKelRfeFijUPnlwer5XZDLYHDeFMvcBOEp1lIArv2GoGenBCZ3UTD%2Bj&X-Amz-Signature=9cd02d2226690a8a40d219365f5467628ba4b5fa47aa810443cf7c31fa993585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
