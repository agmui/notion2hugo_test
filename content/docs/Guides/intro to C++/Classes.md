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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QDHAFQ4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPUG88c8lJ%2FfNoDr17FuS8y0EGWL%2BHlqvoNldwl2%2BDqAiEAq7XufRm4s0Ut2Qz56MqvTTe4tsKsqDGC5uI47qR%2F2k4q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDGgewCs3L6GvjvhH5SrcA1KScIY%2FjdBvEEioHyBvNSVUzeTj1QztAxTxcqetA1u33n%2BbjhJQn8nKW8Afwlp3l5rnAgtmtJaljI9J8LhzW%2Fnl71HnM3BBmmebnUEQvTa%2BImS5zT8bVw65vD5IHySfEFIBjUFuaHnITL4dz9I%2FSYzZyfH%2B7AKwdmcdRzfQOuLxwQRCuhQL0CZOTzyZahbdKWTPpEAvdNU8QjmYiewxEYfFj4vw5nw4pgrG67KgW1isALBvAQbVpPv3%2BWHQNrtxncQYPzmqmJP3HZDZjc%2FUeDHlRfGDOm2nF9SV89Zddm7gnRMymCJWH6PnzYbkIIr89A4XL9le%2BHiWrDwCf1mIyddx0VONPo8CQ94CE%2B2hSwL20UN2E7PayjsVwTabJ1HRma3TYvBGx%2BzBS7nURIR6M6YzA0d8gqkKI5ECWHa1IE57Pleyl%2FHJVKkP9t4gPFcYL2ww3vDo4e4ipRFWVzm3NyCfEPPZVyqJIZxqyV5SiKLT1JPCa%2BiZdoHZxJ1iyk6Mg12QKp1k8yiOv%2BvemC4HQ0fHLBrL%2BadLj4UnDn1CSZ6Rwd3lajG27iTlrKoWaYUmBq5NKBh5QKdf3paYaMKb%2F3LGJaEMZBWQk0lV4H4cpSIKwO%2FEKt9FZH9pnYR1MJjUzr8GOqUB0LHE0X0u0xgkRQcWqRA7MNnYEtcVlQYOW8CQTzXgmvICTsxNBirFq%2FRHiMHdpyONPM%2BGusl5qm4YQ92ZzU2h%2BhUgf%2FKTuohJz4LlfpmIIIfbno3OqKOute%2Br4%2F0GLV1%2F9Q5tH%2BjKUKzt0gX7fgrdHaSUaMkTTpipD3nslJ54mC96TMwrk%2BmbPhxenHI6FX79D8WwjB8%2Ft8rb8kg1yXtuM33QZpEQ&X-Amz-Signature=1fdcc9ad26d89b2f4c72f4724b9b0b86627c896e357080fac0be7e1e8df93bc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
