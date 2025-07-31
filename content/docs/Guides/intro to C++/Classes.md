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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPFGU2CY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7X6MKyVENr%2B0W2iiJaimXxv2RIUl4FyQKk0bbkJhx5AIgE2CSBTRUvmLxlw8y%2BcgUGhaQWMhPu2l%2BTbD4KjjRakEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbnEcWLhnVjVmelnSrcA0kvYJkTkRQc%2FBUAs0JeUh4hUFtgpmYLHBXt6j8fA8bInlgkd6DNJFOfaG2IFzNe0G%2FM3g2ojrY9LKTExv5ASSs466TNzv8JqjzBKkQaMz6rW%2Bhkm2gUmzAb0QmdTmI9L%2FKz9yirHe5h7WUXKbLB%2BzGG7I%2FkBBk7RQsNPDstXYQtzSRJ1%2FHOUqnWA4isRjWH31C9UzqLQi1VSCStK8jXLD4h1Z47rbpOJQWoj4dD1by3iNQjiiRPCZZmI3z8dTbqRPV%2BjPKEDtJHmFXXMMQxjqDDW%2Fyz6AfXjQxnzwBvtWK%2BDSo1Zrl4HWaquU3odhEQItbwpb7NjMSK6FCTqb2%2F6yOO%2Bb0ySbDYOtHDAc%2B49hPzmX0yonXeTptOpQBTLOcPmx79Bj9ombpMkwj8x4st6oN6YW6h9di3NmWRiZ24PqypJIBKLdUNTHe8U5KX91T%2BzG11L%2FjV3PMxXfoWR2mhJTFeVmgrpPIk9GNMjvKBgyu%2F5AncjryHXEQ%2Bp2Ypyk%2FuL9vGkb%2Fgm2waMJsDT9P09RnRPFZXZLkNZQKR9AF8Spidm7c4t4rrv%2BH8puL9pziyOmVM1D8DXP81OrRF6mvgKq%2B8YjeHPBMoB1agOZYyQBNOwNRJZ%2BbDtfvBPtcUMN%2FprcQGOqUBN2MRXMoFZqf211rxDahvrhuV4OeM%2BYehV9KhtLyOmS%2BURxOVF1nVmND8AXNt6scUxZt9kL579URPN%2B%2Bl725RJ7VVdOBWFwOFrbPenriQFwtiVEYabYs77uiKuz%2BMNmYnahU2l%2B1yYOaWEg2xlCUnMT6%2FSIgsnIFPmtsqRkcy5qMBJOYKn4GBmdZoGWSA32UlegHpa2O45crb4opfX%2Bl3xEYoDFE0&X-Amz-Signature=11e629ea6c027735bcd370c413aa89d436af39be3cbb355e23762dcd0ed13610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
