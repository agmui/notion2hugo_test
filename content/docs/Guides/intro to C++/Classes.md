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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HQYBENA%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIF41v9tbNlzuRXkdL%2Brt3lXGsaRur6kcI7jnKupAKoYgAiEA4DUp3OVizvX3kXyLyBgp1F9addNCFZPZyWIW5AObB8Mq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOUbn5VYGBpnqsMmgSrcA330BoQgU4cK4wmAY%2BBZj6SFUYZ1B9kp6N36WVSS8mS28ueFAzj5OFwag7GoCgAJ9vb4%2B9iMVFP9J2cQQr3ZAAGmJ8Z7lymbhkP5eArRgdCrOdcUQWyc4Uxu9L1JVxc9aM%2BN%2F7Ya8gk4ETvd0MLFha%2Fx2TcU99c6kq%2BbsB4Ujla%2F1ni6K%2BvkNoVsiIjG6XfZ5cYFAA0Km3n68xOzYa3%2BRmtPTHzcBz3WlxgtKlahAT3YfemG3k7jM4Dsybc3dnFBn0K%2B7TCox2NhbPtXNY6fxjAOhoISOo%2B%2ByyCPqsWtBwVzhAbPwXssUli39rFPUlQ%2Br5Ik%2BssDoAkS%2F79PirwmdXCe6%2Fx0eivfgZaNeksFnxR7hlWcMfw6XipnnELDiInROlofxF6k12UxsHN6kLu7Qk3wh7Xf8VdV%2F9XpwXr9sPSW8bs5EkDuEru0hRAcicSpoqtrnwmAwUpPmlziPOSVJFXopSgADbqzQktIjlHyexVWRgIol0monrSUo%2Bvm4%2FpLm0mc8nNEg6VZbkkq40UmAUNtaSpxU4N8F09UcQg2gNVv0SSsWD75qllcfg52DUa%2FtI6PNSpYeejKSNu3hbjV4%2FLbGd6ptUOiZ8L9I%2BjBl0ojWhIu6UUwnhoVwKn1MMLgsMIGOqUBazBDChHOIXj3FxTOWYRNZR6OFJkrMzM8BkF46UaQYV87SyXsxhJGhgH5H%2FfO%2Bk4UKwwEGQsUP4K%2B7Vg0xs1GS4Ru%2FVkT3xt5djCqSFeoC9R9NAN%2FOnQlJWTUhm0VAwTWwaJveXBsKue9JHBK9h5nvAW5Xy%2FNDcj6M9di0mT4s5EIbykzvcwefy4j%2BNHLoLv2oazTP1zfeJKRjU%2B1QjjBy1uxrByM&X-Amz-Signature=d481e2cebb56c3d9705d3f4b611e784a2d617438ab176133e9fae07c4f84ce51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
