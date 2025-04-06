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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SEBV4EA%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FhaIKa5oHJeBxiyl8OiY1EhmLDHkRT8nMGqN9K4rQDAiEAsmYknhlGyAVutWs0zMTblMj0eqoUJQa7zRh5McUeTiAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDCK83TIpIn%2BAi6GxWircA7HVQCJ47jK5O%2BOAV33cODCFz95KzCNAwxPtEFe%2BKWfUyAQrDhmKLthe5NC6azjY%2BapzWNAXXhfI3luWP8AqLI4sHt%2B75ObzscIQ1hy0sppmIhvyEVDwocbc%2FQ2oK2Tc%2FbaLgXrgKwfNUVzjZESsEX3mPBWCeKAnZeW4saXhhWRxgNsz25%2FY2d7ztFH8KgNCXAUmjEZGRnl%2B3iTOYiM6YV7i1Mxiv4N89PS9rzEsBMfbyGRuNyR77BQC%2F5JUlDHnYkmiW4qC%2FI%2F8hQTPok2qcgchhXWptn2h6bWrb%2BaJKWjfO2u44pnsGHLK%2B65omJZ4LFZ8x5NrwnHxJ9mhdHadSzQbS5BH4kIPt%2F3cDEAqHIYwiXMvmD%2BLTm9rc2I%2FUZVIZaRY8XFzWfgGihjzQNBzTWrdV8avIJMjzBddq1Pu8PLWFOv%2BVmKX4rTvQsJx1xPON9omJbS%2F2psO17kGjYrHRIMyCp2wIwPVr3LgxloQ6m50mIIYc%2F4%2FnRx8M5EUm5yMtLMk7u%2BT5wox3O02cnTTE6haiSwhIe9XO2x%2BvoN8zkMIVun5ywWOc6eeZPN4TFJc8aMuy0uORVnPQwK3tEfIFKDNW%2FXhguO4kU63nvGZgC2FoCBJYrdwYkQShZiXMOT%2FyL8GOqUB4KbXqz%2BsjxkJCev7TECv1sRweqaTu7cwVBSnK3tSEG4gSLVaADlIItY8RGHIljip53AmnQ5RVUSMClR5iMMUQDON2m1nvBOctRnzTHKXLodsxA2y5SZ8lbDMYcK699cCnfor%2BmIZjMvGVaim2ieIccU3Gy%2FwKu%2Fc0axNhODhcrDPrAUAlVq3UPYVLMXV6lV6ErIoZCf3BnrHB5tpxUhDcSbQaeK0&X-Amz-Signature=d6cdb49ad7cb034da14cbf31dae1cc825059112ed9c094879f0127e5492549fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
