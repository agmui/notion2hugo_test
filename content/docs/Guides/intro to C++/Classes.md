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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466435TOMGD%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE1GOtq6vjUfmJpv7%2FZWeCJ7PIiv4mX65ui%2FlgJCcV9wIgNGbI0no4JV80%2Fg9TJlJQ%2BBXWHGe4rf3CggKR0vELPSAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOoU9Qcj79TLRQQHCrcA%2FS61dZ357BRFeBEZXFY7JbBWVC2wkRDkMk6OcelvH9loQFKfLDZwB6yfGecKyj1yM%2FeUiKOCQVEATp6w%2B8TH2DumgsaqQdZ7feWMao98rX7ZeOJtaLWnkuK0w5U3STQx2mk1CxDEOQsOxozlMMqc1DeqGtuZZfPOFt2BMzfrsPfXY7wop%2B0a8jDIyG4tIdHhPZPG4aR2uXM1lJnfp5oQh5zbUzFIuGia9C4sNqg1whBjCgk6TLIQecWF1a3GGohX4HoqvgieJFk%2BpFigsy%2F8mQe4eApGyreR8h%2BQNzeambA3xSxGBcE%2FYElJJIrfq5uUAwdTVLNja43V%2FgzCzK7Br7DLDzguSYEJwcMxEOXFCMBlLwToX3cymaaXcUixt0bklZhNM7kwtBoqcQNCH8vYLbEySrwD8I5vw4YPmzLSlknHUzqSpFl6AUyXhV4qZQ%2FjOMzIv4mmqYoGg%2BTjYG4bulQugadRGwvR37Hyvbp7Lcx1pU621BZN8KHEKVWq8%2Ft05PyKn10nZojP2uVL9S%2FLdmwgcGYYLiw2iinLbOrQZPKm2S6B%2F09KzujJPRLzsUdzhMcF2EtZNMstAJFDIo8HOdIxWxfY6fQovaKe5gyEajnOPWVZPDzQY%2FX670iMPqV9bwGOqUB5jAK8EN0AP9CHdu4k%2BVK0%2BNUghgCF9HuXWpHk0lFT1jRLK3T5QsHMAeN307KFtJ4PQSDGAMjRPoEuU7Qb79NB7rabPjmgXqzvATD7qE655qI%2FN6CvguI%2BN89PuSnHy6J7V%2Ba7UMdQdl10vdb6TDO4TsjT6lhnewo5zNYQEGSb%2F9loeY88CXH9vZuAwhQeSOPq7fDWvR7HGoyO%2BEW5nLxHLjCbENg&X-Amz-Signature=01ba5a346fab96c513429a58be24b57a99ab71158b111ae91172cab9fe1e9914&X-Amz-SignedHeaders=host&x-id=GetObject)

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
