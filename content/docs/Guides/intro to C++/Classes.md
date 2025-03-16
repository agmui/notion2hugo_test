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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSELMQN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7PwY%2ByXA87V8b%2FymP9Q0kPBHpG%2Fq3wT9IMwk3RfB1XAiEAwPfcHgNzgE2bgR5YKcynTQtJwfmPM%2FF36E5gV9c6B%2BQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNc0Jbd35iSrZ2p6LircAxq4EcFWgOB%2BQwnKa6k%2FvYNiMbuh%2FuYins8oRJAe7sZvfK%2BxDdv0vSEn4MmJynsKyJpUCbrs78MWpI8x%2BxMtDqarOjazTB9COtdDRBsZTl0nKBsiFffuhXROb4Kzb3RT1%2BdRNWC1pfvoDnXE1rGOJ1CbqtT%2F6AA%2FJbhfuSXfq5X%2FVVU5eeT2VkLKGyXRfbYOKm9NIsVugdkwhf%2Frm3%2B9L9bmeXCHEXUpcCY0hdCVK3J7RKZ4oGojt5HyHwsPk3kb1hMfWNPWPt04Rk6hNPCWqodeIQcpfE0EO4hzQXIZ%2FrHwP0qZje7GhCJLFdwn1HvVevBJUvDy8yjgVzIhvOtLsAG9c36%2BU3RDx9RgyoIKZMtWzHkU%2Fp3V847gTWZeL5pVLvbaATBNjzUNECa6%2Bh4SJG6SUtGxdgoajWyG%2Bk3ww2rCIu%2FFKK38vUpysordjdoTCS46HKTdhsqDUZLCR5Jh1uHNPIsU79MIJ9sO%2F7uS61ONI1%2FoVp0pW0qaYGHWJ2ZRU7V4rYhu5mO%2Fxk7fOpHFNCK5z688d1oCvWtSGHlCHg9%2Bw2L285jXXrxQXPHg3%2Bo0V%2FNl%2By2jMUiPUkvdi9euJ7MFFyCkFP%2Fu2HDc9m5WzzvM8Wuu4WwuSMnqqJP5MOrI2L4GOqUBrN9022u1AOQBZ0sdjbg0fYW0gIAFXDMx%2BHgGLrbe6GYq8gQ6TzGO2n7fMD8RuPQZB3nWPzAia3Nc3VQWdqpqco1ecPKShgaPodIU01d6bk2Pj2HmzNONUS5PrityCmv5iOwKMa47qbR1wCGRC3e1xNjEPjOw7BK%2BZY7YU4B1TEW8T1WyiMVQuLV00yRkBacG%2Bmb7BSsEqUNVjs9uhtjpNLMJOcH%2F&X-Amz-Signature=12fdb71690efa54c8779be49b7bb93f5546f73154f10070a87c7515eb14dd802&X-Amz-SignedHeaders=host&x-id=GetObject)

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
