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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF4C6VRU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHqvIw9swHTU0JvEmeAh0l4AL6%2BLzGqhKw2NJRGF9OoiAiAZSWLjvqr30hnw76WiltdXgAg9ky4qZmFaTZYh1G6nQir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM2x1TUtqoep7UAoDJKtwDiJ%2FrSphkj%2F77uQN%2F3jrD9odMfwbwraaobMSW2c3lCxeaSLFcU2z0ybpeEv9mgfyfJMzz9gMN12pRHIXWcHnA%2FWihXIRnMyZTIDyVQWjfOVfq6me0GrfVK0DBTS2rsQuKL9gM1mtJ1iY%2BSLa0jGgpwgRiCz3JRwN414yRXjLeKEmFKRiegNhNbuWQycfP6lWYmcRqFPKh0OXgVtsMxHvaS4rvWxHDimvYTTGGXMjCB9mKDQzC8jn9piLq7%2FAc%2B5VhflQXvDEokoqa1MxAKvAjrpQwpvHNDkXs6exeY%2B1oFa4YlOQ%2Bln2%2BKYEgPLXPs8XEWNbUcgnaUqRBnNlgHweA7DTJVOmsGuMDbGkaIMPZxO5BPVh5Iyl6Rlm1FOfTmZbBHlmqcVvwr1A7TUR3y0%2B6%2FLlcL0Q9Hk8GdZ3cop6IAFtmUYzrtX6Gw6JRahBUFv8rs3K86m0EyTH8l6cdx%2Be3raSqTezZ2%2FpHSq%2BJUjRphte4GE1wXj4FcC43GRBwzJq1gnjGw0p0eAA7bay8XIBa8Fu3h6cywNYiqXa1PTsKAIBLMQSRM5nQdDBqZNA2glglns0Mw0QLNVLFT1U5aqmRBRea0DkWJFfetCopjoiK6U0J5Aun%2BvquEcG0fo8w04L0vQY6pgGakkdkrZqQqTviIP4yd4ZiVBo6rB%2BwZkEVtA%2F%2BxJc6UpUSwKJLbD23XSye2wIiEKtHARiHqNIIzdN7hZW0%2Fv8xX%2BuZUiK%2F6vJFQRu12AggZdCj0FoNQLgIOKJKJGim6gnK2fTgpOUHAZ6rmK4kSdkWaFyU47xErLqesqSlXHFhkI308IfBVF4osEJBdKwWKqzjO4gz8wFtAr0ZQl6q0xWgB%2FacZ%2BiX&X-Amz-Signature=50bcb06d8ef2182656c16b2d63ddafb85f60e5110e909de1cb550ea517d41721&X-Amz-SignedHeaders=host&x-id=GetObject)

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
