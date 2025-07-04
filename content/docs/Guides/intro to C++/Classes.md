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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ6BKXUU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIGpLg%2BAooydEJiab%2BsxiAJqsyN3hkBJOUPJGWPd0hzLLAiBE3JkvaJw8mgrhLWJuvWZcRYC5TS3hI%2BO23DRAzN%2FJpyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMkbB%2B8MCUkQNIvQImKtwDlXkgrTrpIPmxP8k%2F2iU1mVT8VD0Upo2BzG487LBDp%2BZzZ5K2azmYtLWwa1fmB4ph0pu5TXoap1vqk5njNqmUAuAW2bDSPr4W2naA5Fzo2vPRiwb18z0cfehD1CbKHzuyAjz7RkMH6iOWA4TFE%2BMYs%2BSkSg0vKuAlxh0NJEY1sN8Vtm2%2FGd8rOXgHB1HRuAVOL6nxDw4HaZCBb9bcE1g92%2BLYvTx%2Bd2hiqOJ4OPCcuZw4SWZAJ37MCqrEsulCGK8fwivhEcGfdeI9FlDAPX23UosGrOgppzVGEisv32jR6ToEZw4LbHrjDwhGiJaMcReBYQSumV7OnJ4aoPHu7GPW00UzoDpcEWhHhDSEwrgrMV1JAu6sCGEp%2BHNT654GZuDHNtlbk39laHRw8f%2BR6w2mlb8%2B1Xj%2Bjhpws4elPIX8T93vztP3WntefITfNHTFVZThptFgEINW%2Bwz6JpwG9QIQTlCBfRI7q%2FZvhJ38Vgy5uNAHArJrhACoHDNe2AV5zeAEKzclC9Mk5paGV05oo9fPNiHdZUoYksh%2BcFJm%2BiWry9uLKsFjc2L2VoFWIyeR%2F1QnRUy3BNM3TpTDBwamEeTpcQXtK7MgLn6r%2Bcwjn70aZaZD%2FFqOj5RDz5l6ybIwsuigwwY6pgGQIMaYlE%2FiLDYnmXebE7vO6tN299yP80lJ5diYTxc5mblborBSXCrHH%2BOfSQtnxAQj3C8NFDEqLYGarQMVAFjW6de%2Fm696hGXdxFzq0Qfcxg%2FBZv%2BzVbrkddZtVFaVwGNvWQBlDDMNHUV06ORcFNIfdCliFWc%2Bo8tp42g%2BelU%2FwFExmAj%2FvjKH7N8Q1hvX5lVtIa5HZw5zZXQAX%2FkAIqHCJHc0aF%2Fn&X-Amz-Signature=877ee2a313fd024caeb23f3ca230751a0278c07e07dcce0fe3b7d72a1cb66261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
