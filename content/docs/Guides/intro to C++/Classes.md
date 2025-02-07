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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SINHNB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDanKs9qp1we8ik%2Bo9URjDp7FUF97C9Q%2Bh3He93MH5izwIhAM%2FjcUs3XKlWa5Hazuel8EAwTbH0cBvY%2BWsWicS4q2eaKv8DCH8QABoMNjM3NDIzMTgzODA1IgzVTV9G%2FMVM%2FNHXqgEq3APCBGcpeopYScvEppE0q0glrMUAHNx2jbeA9%2Fzt32gVE%2BiQ0JWzScQQLpaGMPBiFGMKdYij3wyL%2Bag%2FQrhj3V5Wdv777vY5Ax72koPk2IVyFsa5kJUrtoD%2BBCixbRkP50vpOyuDTAcGV%2Fa%2B%2FEmIkF0C0PunoDVpCypJ0jplozKtvxLXNP32jrzKlfmsEpsyXD8fzOQvihn8KX1iR%2FO1bq4DiK31qpSiiUxEBU0O3op5fPrlC2%2BjWSqPs6FYSKKOZie4gr8YobFE%2BZVoaQrawgCXvaRduwl5qX2cr653jdRk2fthmYiXNIq8ZX%2FZzetZaN4OykDkQ5NeYbkJXm%2BGnSNckPqfBtayVMtzaKdp2Gqx1BLmUiNSefhlbUQwzSl5nAIjuSGqMeu2IUGTnsTtz5afJgkW1qnshmFKAQUiSdmcqaHu43PH6grY3YXFVBYPQko5pqOkOEa%2BEq4GXxQFcCpiwsV8FUAYdywPBU6jUCGKf5XsHJMSVZnrhCqvoRPRVcpjjs23G7WtmiBZBXyhqQ%2By9VO3pjIcWPKRX6trrjm0Pu30Bfq5BUJwCpGs5JoTTNs3%2FkwPvY0BjxYPadGR6BgdqtVsspz0khpCP1m8yGgstS%2Frd3enqQ0cyBNkOzDigJq9BjqkASt%2By2W09l0HpoRyo7zgM%2FG8LQhl%2F7MwdLYgN9VptaUjzg9AM0XhuLAnHEYcDpYu3sQYbu4KwMZ6nZtPX8aktdZzHS0wyFrR1vLO4B6e5GxcDcv9VvNQd3gUV0iZZbJ17UIkPZjA4JxaZaoob5qJ3uI%2FsTnH%2F3n5IAt66D3zskjCkEGSw8KnH1Hq%2BfCneLFERiSaneLzuELmstWRFAi7BTsoSsLD&X-Amz-Signature=8b857fa8ecadaf776b897f4b3fe21e3076e17f320b8f9ac241cbb0fcf2025f71&X-Amz-SignedHeaders=host&x-id=GetObject)

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
