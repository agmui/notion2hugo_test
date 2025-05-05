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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7ZYDNYY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAv9SVQUgTgyNCanGj2abV8owPZv90djhyQChzlebFoPAiEAz9F8KeLxLcZEzWYjDvCp5OM4S4xx6dM3%2FPNAXkd3FuAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLT9TS%2BDzEa%2B4ZfTnyrcA9gAlpr7Mp0xnybuVbADDC%2Bw7Y229s6gZQ840BfQTEVlhgSna21FzY3W60AMLu6s850uIAF5SAzqpjEEkHkLHWT5eB9g8upRigncsIh84Bk%2Fxwp3VFQnNSW7ficxZl41ZklcPm3ji2UNYxGsF0xt8xBRO3bUEf0MDo0gwzzdRTQEEUz7ZMe2oN10c4WiY5CYcS%2FV2X5WzxHuO%2BBOLkly%2Fuy%2FFcKEtNtJyFjkGg0YdKWJ%2Fz6KwyMxvmLmZWMnlF4rsd52rvINDJmHP86MmvGvdui4vAiPeWTE6pMXPtQgF3Q7u82zXlPmDmKi5prhx8BbvS90t3zmhDhSrKGp01%2BCSlxVSR4ILzrEHPqrMUUonjM4y3LaU5EkcUmGnbmdcpihc6AWEoQYDTJPIwF%2Fp7kvZnnGrQpQXvq842j5NPyWm2UEb%2FbbKwq%2FfddXLt3RZkzxEsxh8X%2B%2FAJsJj5yAa3B7zsHQUHsMQNeeH0bNg3Kh%2B3zUO%2Fva5oxqhrw0WnrOHJvWjvWKzf4qj3sIvsXpBpsdgXLhPPHmRQ6rQdrLpHlt%2FmY%2FEsOvqasRR9cBS6cqQ1Rvd%2BptSmiOcRLLpY9KWCVS63FKPPCCTcUhSB574doju05Dix5xjnohs1fW1RuvMITQ4cAGOqUBBYVuftQ6OwdfUVnd060kbVNsUOwssUq5wQdtzcizrNw7AzosD8UvLfk84RRCdiILEhNpIwkz8SJ1301QHo3%2FDh6FiU6ynKZc3BVVh0L%2FIQn3Dlwd%2F8tzTpTLoPVtK3auGku10FzZVF2zU%2B93UMe9C%2BaIS%2Bf6wQaay50oRgJIIEsP4cYIVDdL1uN4%2FDuivx5ZAwFBJJC5%2FrL3gkBGGJy6sxcRBbah&X-Amz-Signature=be0be92fe5d779eef948129f1e7bd2bc8e2bf5637d709476d361b6411c316461&X-Amz-SignedHeaders=host&x-id=GetObject)

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
