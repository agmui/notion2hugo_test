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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XANZMIOI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDNN4ofUBZ%2BWVO6p8cuxPwiPHxMVVq6ICnAyprn9I9JWgIgLOBojR5W0tScekwK8Jqr5k9U%2FkJG253%2FRcybPn8eQFwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa93aFKYCVH1qTwyCrcA2Ogyl7f%2F7auJREVRY1WWYQGKM9mMVCNfsWqG9wp2ajr%2BS3ohGcCcAGWDXip3LqzSFWEjXoVuErbjLOmGm357V8C3VFmpw9tZduJr7lSA3iuGNui18rNnFZCiW0XhkRBqCCsUToRe%2FYBtGToFhRR9zbT53MJA%2BnLxSrZcLBI2TtKO%2F7V6%2FZDChgf%2BknOxQabBa37hHf0fDcGA2%2BPncBiclIAb55L1XabDKZlakCq24J6K37FZFfylKuORBaS76qPzm1j%2FcAmtm4Vzt%2F7uiUDt2poZMq17vPko3jNiJCjPsWB8IZDOiSJcNnu4HvI%2FdHpZDvWjbOic6%2Bgo2FBmzqj8ffy8rNpqGFw9NhU6qLr%2BTXzraY6%2BqEQwrqXnUvcMNo0onpW%2Fw86KbaXg6wUBoXBTOYjbkhViWiiSeUniBVVxMJLJ0zOPHDuRGWvn%2Bq%2FwNMj%2B8f4i8X%2FMNRUG5JeDwJynWVjyzcZDey97bmzANhbvF0T5n5nryl4XIgVhGkUz3GVLjkJqk2MDApISFl5qDvhcefMAc%2BJQWPuxRQ%2FcJaO1Oe7FlzEQ0WTCJkYsIR%2BoU%2B3sIM2vMqKHo105kC1YQmqTngzaxhX604Pzd4cvlKoBdz3xoBnf0oTNR%2FTUUMjMInK2r8GOqUBc2w4DfifL7MGH8mLHdLTSqZWIN7U%2F%2BBakhD0fKclWIM3Zm156AB4qNkg6PjgVwEe3co9Tc6v4hD0IjNRfETIDDKiqumg64d7R2vZDsci%2BmhTJSh6ipf0%2F6TsYR13SlchFA%2BmLbTfTYPMj1WFdfnlH8FsUkkaYFsB%2FO%2ByK3xkdk%2BHfbnn1DXNYomybPB%2BuaxeKB%2Bn4%2FiOZNXGHClqnQOnBX4ZOfuA&X-Amz-Signature=7777b267e72c6127fbc36eb3a8467d935c7302726ec610bd0c6992c8543730d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
