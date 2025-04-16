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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDHOUHPB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgrwD0Z13LrA0S4T52oyicEV4m1VpVVodpZ940%2FRXxAAiA%2F7YYV0mZB1B30IjPVhB4ii2SCvr40nw%2BRVDJ6jHB6Mir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMWLdwamJIkWG5lrmcKtwD3cwjgsdQniHpn%2B4fD9cD7q6x7jrijTgvoMRWRqv8sAGztmbYShcqdqeyc4gq0grsQ7XnyMmkDIbdC231udriUxSNkgWyhHaBPSzCu6kcyfTizL5%2FXVwjWrIOERKdX44B9C4IVcDuGZJjA7ujDRm%2B1IsohRhaQ2Tkz7CeYnOJzCnafiKkmpClUk4nT9UOwYu99Lusu0twUklGen0axfJAbvafndB115AFwks1RbZaFxMwPu1y7sqRu%2FAo9y4wdyJpe6Leh3M8Uc%2Fni9LOgutQ6nQWLs7hirRXocFPOjmJJCL0rOhxO6FUhgOxlRarmcSa6R5FvJRXs8ECFvcnVB08yHXAN807LzXpunMeZ6%2BVxptQspZfGFw4z0gwiAOh2ju0PE9yuZnDGGw%2BFMmjX43yaK%2Bn6EDXERi3XonmNU4Ax%2FKq0BhL0CrRiofzIgghtNOIZrGbLWshazkDGe1Zd%2BCXRKUkGxSTXoz4tc%2F1m752DUF3hbBMczVvoZMlb0BGP5dPQDFN%2ByFtyjk0SjONFZ56mttgKpHrrJEl8cywQM0Zzz%2FnGNL%2FQPRK1XkHs2u9iSSBviYxl2zHIxhU%2Bx1SemhzRIMim6gDbiPyuYuS%2FKwp5RqwL6edcC59e9DX9B8wmKyAwAY6pgGwG%2FQ1EWeZ6SGLkEnjQmZxvgAvwgIk8T%2BzyKqF8dDB48DoaOorph975WsmcBw0AYv5f%2FlslVelghdVKln1dRTMXt5CnFoXlFZ%2FS847Y8pt6SJicFfo330X8NEw6AJ1icKzJ%2F%2FJgvicDGjgPC7JCV4HDe%2Fnys%2FflIgsquOLBe9jaFpFQcAWIAPGNa29uUzRJfInZuW7faiHwt%2F%2BUQX%2F8dQ2OFh5l53%2F&X-Amz-Signature=648c35a984705b3641f6109bc71b1b3683761ddf41416f4c64a1aef0e29fe72f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
