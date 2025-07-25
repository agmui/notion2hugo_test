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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGI4KQSJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEmxDdJATPvLxOmnbzO%2Fmp8dGkKftHFBa11jHgJ%2BX0ngAiBB%2BBiLK4HRfQL%2FzW4DnCAKz8ileeLK4CiEyUfmyoffZCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMZLEges%2FPRaXmrMBqKtwD11Wv%2BgpqlEm41%2F0hkrdpS0%2F1MV3vYjt%2BH4yIyCywpD0e%2F5rYpwTVe%2FwNwoC4es9h0gHDWLYVzlVZTcN3tS7PVvn0ikRpXHV3fHj7oK44cMXp7b2oTwSDQo9w7TTJYN%2B%2BV83u2cEj8wjEX%2F1IK%2BCUIrHOj6%2BwqbISwBMWFEPueXM%2BcuoFO7rBM4ZSfKrVHVCVzIaedo5T7CMuCRuYMme2q4kXv2uKgeYUFOpd0O7WjT7Sf1pc%2BQ4uir8uMWtnXebSDqWoMk2s9%2Fv3ulxVWjxLb8Y4ww2ok1cEMJwyoJUMWmF12mkFHEaDVrt7ZETCESmsU6sSiEZOtLTimz3RTCa2fN%2BcwC7%2F20Oq95vISV0vCNjPJwC68msJc2imLJ9CtaJrayMrL%2FF8SSRxbrUeRrKqSoDscQ%2FWnTdmrKEKZZzdhYkugvNZ2uOE9gzF25gkGE0bp8F47FOe0WwzHCP2edeoEerPDP95Xi52q1XjZ2jy7z%2BAbJnDkhYJF8uCjVVHHBQ4J5i39aSz%2Bz%2BUSSvWFE1QKG5TZ6yKilk2GqKWSEjqmaZVasKYZTRdtoPmaenqYXvxkLMVZNj4E8Oqa3T7YIC38iX8eLVEQoQNiDyJjpisE02rGfYr1DNJ5jnEPA8w0oaOxAY6pgGWXtNRuZyqTiV0X7VlCwSgf%2BRoOT6CrIawnuDESYmoH0HMNtba2y3Mz2bADYDaKRexhQcxBdF2KJVmhwKF1D%2FSJ85cTxLfgjm9IooKwK5hiswhzULyihtBLEkyN6RuPiZvo1sIBrj2eGSHPhStZo5259vTkeI8zVKJMFjfjtmZ%2Bc1PhIP9f%2BYJXpuuHuynd2CKLhpBpdZ3Ti6cSCB2BuiBz9K9%2BQFs&X-Amz-Signature=2cacee9e630e356013b6770b3b8d1cd9d18fb6b21fdb283017417b4c6cff9f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
