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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EGZ34XU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIH0BL48pARpBy2zy4aLRPlNI%2F8HoHQBRMe1vLDeTUfjQAiAxDtPmBq1wCE8gDOcRkv4jzcZtfX2iB9CRooaVa4PJRCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMXw%2FEYYzV6Dkb%2B2GTKtwDs9VgjEx7foSLSYQ6ydLwHb%2BOtnXEhoW2LDRH65wFGYw%2Bxs20%2BpvV9GbllthNh7r0tjFXcvslGVcaROyhkx9S0N1kQTUcQRgKjth5Z5HMwLDsw23%2B9BcMCKRcWKmoGejJhU7jkVCMk%2Bx90YdsnkE2ryxxZYUThm8uAZ0dMLj1eFN5sRqAl4A7%2BDyyphv4IyYhdK1TMmlwhI6qhF2B%2FqioFsp2dJWH%2BJJ5hhrQTpq0gSzpYrNuF6q%2BGzKQmiNoODKfgBmrnKnO48ZAe8P2uwE2JA%2Br7%2BjT7xT104BHztXfwPdqLXwaLB9qQL2vkjBhBaYx6RCwss9v4fMD2tJXJSqCfMY4MtPnh9MKLbUuo891B5sBzJNKjsrZ0xh2N91WRhQDqCN4XgnGOGg6AoxWQ2Pit%2FsvkU8xohCw1lcnTubJbtRvKQpKgKgZGIEnoVJEv8lqwOZD40BYqQhV6%2FnFNtZjyjSpQ2AfBygrn2bLJZFaFBRGFRw%2FxncBW%2FN6cGuD%2BbcXLfDcJZZXceATIH1mdhQFcW%2BtZaQA%2Bl5KK1xyIoaonvv66hCk93aDBtkttjwqt2AKjveQfOGMa9bhDJz%2BlY4IJ3hl5dMOatKsm1FfoimvK1SqmFdsab8tD6viluow3J2RwQY6pgGAPsjabRDSrVSR3i%2F38WeJlbPBNpm0R74jc%2FLjkwfNDlBYcLlFo4YFusznDso85NiE%2BdNVTWGEnfQ3%2BtnoQIkCtGR%2BFWq0F7pHYGi7k9GQLeLaQ%2F2smLYlLKiqWkaptdKuFYtBPieFNy7rz8ZyGnqMPIAvt4Qt7zUdzGitd%2Fv0LpIFqJSvHxJ3RXhobxT5a50t454YOpk60ca2SVrmWNdcQdfUitxV&X-Amz-Signature=a4927044aa73d579e45c780df6fd064ed450fbe6deaa8d50f51d20803b2fce88&X-Amz-SignedHeaders=host&x-id=GetObject)

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
