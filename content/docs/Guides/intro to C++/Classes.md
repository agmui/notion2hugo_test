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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DR6ODUG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIANpRVmhBcF9IQNlLQEkFenRisJtiijclKeUP8f50TUpAiBKcoFVjlW%2FwOWc3Olg%2B8bPPM%2ByIH8o1Hkag8SJsQ5OZCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWwTkXe%2FmknwSJtegKtwDBw%2FKwI9oAUrkEb3oGZcUxyzfTVdFGo3TMX8l8AvstRgil3e9%2FGEJH%2BGAFyrYL3nqWuSgx4%2BxYvxAKS5wAPRGRFDNdiGX4XZbsw6MhqfHoNY2rlBiJc9E%2BuD3SRHZhpV75cn%2BmUchhcCMgnFDYTLQTac%2FqNcznKewt8qXs1dCo2L1hCZBrbI5UjEJjwWw2ZX2rA6UHLuCvmr6o1FnHoMfvQ0Oq71dHCcx%2FAGSOAaz%2Bg3%2BRVhK2F%2FRQJ%2B4RG0Zo2e1ah0d9VtKLmHJsB3GKPxQVuqf9GJlHsLKmCoSfUHBw6Lmrr1U4WJ1Z40fsVj3U%2BzGVRKkBnIG7GPScAyCw0P6LODlM0WCPd%2FnxAxw4t0kgvnUeFmJtoy97t%2FjCIdL5uIacHwD5MzeOmzYLCPtqKhckWVF97bIoQC2DeM0n%2Bm%2F1PRcqpXAvCU1LDZtwHyS7lw4OyMDJ5PXGSkcm5hM8KSfNsa3BmmYYR3dtyfu4LX8z30GrHNaGPzXHMvOLsBNQedMCVI4Bldj%2FKWeOyo%2BRUAaubVhmMb2ajbZwj8WZTRV2u%2B0z7NUA2cABmZTS10SmsYu1TOn74oy%2FRazosmiRFmPi7LCui4QT9RIa2o2w2kaxkmCpN08XG3S%2FhABTKEwj5%2FGvgY6pgHkuMesBBjfgEpeGsKpvhWqGdP7OkSVOTigoqZ%2BlPXM85e%2FWv5wQbBpac6KkArG0XCR3r0LUFY7niTsCzx%2BKpzkEfdb3ftG0BXs1sp7JVqv65LsvzhV2sfCU21h7PIHtuH9xxGUmLM122hx1QcWc6W6%2Fpah8L8v4rLkrKELgKwJlKV35nCzpBbFs5XXzzbg8BLpC4WNc4g7oUqMg7f6vf5SWfCMM5jW&X-Amz-Signature=93d8192e809424b630dd84699b11b6e5be71722761474fc9dba507e4616c9cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
