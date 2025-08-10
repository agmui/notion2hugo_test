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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK37RXZZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrW%2BOSF90%2Bp4AF9Pfc9EhNC0epQJXt4P7FFFLjcO8PIAiEA9PV9XGQogMoGt4H4ekb2NHgXJ%2BghbdzdWATcOlwRVgEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuUKuU5igXaM%2FSzBCrcA5acrFfKBn3bmbNeuKr0CwRcBnXW5KaGcLvLO1APBADMlvOLi9BH0dCqG64VvzxfXAeUa0Cp62xCtwNwY7%2BGAxOIJlqmhCgH1iWIWGlRwvZuHXYo3o4Ux1KEJZBMJW%2FwNO6RbqHw0ui3jWkHDdbLW0DDV6obxqPl0%2BSEazRfUMFHRRdBwICWMlHGmXOYrUSjuusVEVVfF30tXaQsTOESmfgQoB9dP6%2B6Vz0wzboJP82CdXTbZQsUICw7NIRKqWpd60ymtLNW%2FMgO%2BKLa74dLbm9Vb3%2FZeWXL4DvTniwBbWXgjRo%2FzQBqXyIRrkGH%2Fx063LOeF4ANUG590NMnm3MZPgnWM0FmJXMs9BVTf21Eo88dq7p3DZljeKVf7QgyqmgvMEMNqEKjbVcdRJ1Jr8BT38CsNE5jlbT0T9nklomgcT0ahMhwXpcxMLBPe3Cjtxkbvjeald0nxhCHkeiRAvbDRCf%2FsOcIuxmkpSHqDvfStaBd8JeCnFKqGm0GlHUwkw0Yiy5qHBP6vXDYXgcx3FcNt79t4Dkj4QMMgI9GS04PIrUSeUnHNW0ogn59kqI5xSqhZjfoE0c6QckmjQ%2B0Aeg4J7V6X%2FR6e46fLd1ZMpaxOQ8srCMv4AZIGdDsg9CDMLey38QGOqUBs0iB5bvC3nuQZjtUR%2BHhyONRf2msP8kxoKEKGsYID%2BaQgwGFX5VuoTgzVodqZZjxtbTkgoZllhIcQxAzTe8vIlfIcz%2FC%2FzpYUw1CVH%2BGGIfiEx9f17jBGcDD0AC74Zj%2BeXaF5bWdL%2FZmpOPIygWLlubBrJlycKLD85GVlXSRZr%2BlsDBu%2B2dlRyepVh2FAA1eCmPrUR%2B7FLMmisbWKrQo5l4JHKcF&X-Amz-Signature=2009461463ad200d848fcdb567551672eb02bb640ec8cbd74c43711a665233d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
