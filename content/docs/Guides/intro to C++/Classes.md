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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCWAE2A5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCik2Yqwls%2FxOUt3QRDvsUnPgslrmEiyGSkOzvbb9LVwIhAKbRg%2BrtBS63Aoj9mBl9eTO8RGslaZX3uamORbX3XxA1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwESf0%2FZbnKxooyyBIq3AN5Fw6pCmlLMuN8M1pzKNSg3NbADiH0JEmb7xk%2FXvfcNjJNXsNKGZhUaKWIoVZinf1uDEi3WYUaHYPLEE4RVqyojPA1jGlu7AgxcdYazs0w6tPCRk51pEuPv41Wb%2FFR5QIw%2BS1eGnyYWIPN0wilwiENxquRL3fn5AnvgY0bnErMk%2BTDZljNH90etmWQ57vWV9tuWVpgvTQBpMptQiTUq%2B%2B1OB2%2BJfaufApS072rZ7ngIPsj0mJqswgHuaOrpdh%2FRwjLv5Qt%2Bd8D4P9iAOHMKDGHleaonjHQB1N7Ofx0t%2Bv18Dn%2BSDjWII7MIltryd%2BHAQN5v20qmd35eU6trZFhHjU%2Blqh2LVgq9qn3FWuXcseYl2MofaZlslNprINd5pm3YB%2FMmK5%2FULuX%2BmVoL8rxCtPJCcpl1OipUTACQg3komkX%2FF%2Fn%2BchjGvaFypuElTHLWK%2FSV22fEv1nL7%2BwgsmP6%2FT7ABTmBRJZj1BuHvwpU9lVvMtJHUWdDlX7W8xaRwC12%2F6vUv22G3JWiOdhddg40v%2BYkjH%2FXuw3zA7RM%2BvBnPDp5kb%2B9nIltO4OWjb%2FNcWKyM3DdH4Phdcr5s862UKgR7nBX2rmU406V%2FSJj%2FYTLNJS0kzx93htxkaAlPcq%2FDCu8IS%2FBjqkAco7PGKruwOBcl5Vd4ZmskCrDWB5CTPbIRSrf%2F5Ro9BuF52%2BqqQK65i5lwHPdS%2BWk86I4zOSznykM6hr79kk2hh60JdpSWErVb2oYCopPXL%2BCVKiDnHHY6kEz7HPCL40FztyEt7POEmDTawUzCjcziTa6sKfoffqfDghplVYjLh97eYyh8zbpIx1WyhJlR6TOsV%2BtJ1HIL4OvY49Hx49mGqPUF2z&X-Amz-Signature=3b4ed742e15956e103b97c0bd2b180b2dcd5bc0ca2a3449ed97101ab7eff34cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
