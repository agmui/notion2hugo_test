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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRGECR2G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBDblOOwjXbzhv8EjWmsRyJ8ECMUy6wsAKybg5YhvG%2BVAiEAjwhi2UDANe16v35YNP5Qe2Lg68uivUx7r82zv4%2BL4Hwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHp4lFyVLjwWReHDWSrcAwbEpPhTaPUSX36jGZQReZ4tVLMthdR2k0pMlvZedo0zG3HZdiLtRygfr4mXhNyt4eZMW%2FBYZqpjoOXah22pIHZXW1TW7XhbxGeDL9A6pqmxqOY%2B8%2FcRCRkkSXNed%2BjkhEv0pFq6A3niVkJUCoMqQeSaCYcNDjSCip0HuvXHUE%2Bk1ioJoVmQjeCAMP83DwWngl72%2F5WPjyRR093%2FLus2X9CHnNcspRZth66nJXVHPWBUnNRbYo43QgAqb17uD05McR69MeOekm3OpE8HUWOqFizku1AduLSk10ZNO0dl%2FaZNWmR64L5yTjXSpZhzimCxFXddCJFJMQY6qhVkZju7%2FLrjw6vRjXznKtfrFP1SZ085Ua6nlsWYSgMR%2FBfqF0vKFPS46dMqfbh6ffiZnB%2Bdu6T6B8GTkI2ptxm%2FZb7gPhVJcW7j82Mn4ktUBqpI5M2viDV2aFiW5iVKsyFz%2BBKVhcGLRwp0QHbJUCct2qNsBhNUG0GxLmkxxP82bhm5u72DTJbQsnQfkx0OPixYhhxaWSSCzO%2BDs62FCJCdhgRJNI2wOevE%2Fp3EfLDRSKyDnOgm2rzP0fnNRmEp3J9mG4Fah5vVPXAMVxebZQZ8YsHrnS9gxLSQ4PUnTol4UNY6MI6OncMGOqUBvY4%2FyX06mDROhVexB5cCrFQL0M%2F%2BcSpjke9pHEhe9UFrqdo9CqbOhn7wT7EF9EZRmG0QBeTPKrM7QovMA1KvkpBm%2B%2Fc97MsW0nb8yVRUEebtcybkQoIyIOGhkXjTabrl5p3z6B3x6CpfQcydn1N%2BG5w%2FGNMSq%2F%2B9rFzAX8%2FZ0dBk3SwfBr1Jzd%2F6kK8m5snWFCXpR%2FVRa%2FjwRy%2BnmUAXzePdBlXp&X-Amz-Signature=30b90c526305894833780fa4850079ed179c28d791c318e6e3f20a03d7b06e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
