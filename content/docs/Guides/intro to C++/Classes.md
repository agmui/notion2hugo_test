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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7F4ZTSP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2oDgKjPaIahGtvmKVMvGtmbBrktnuGIJ3Lh4CONjyzwIgOsY7SOWa0c6FfbPeFw65g043OmuevQQgk8pmEd5M7wIqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0RSLzRXJmcD3h8JSrcAzC5N%2FABiQY3pwnL%2FOw%2Fv0a1wexOhSxUta3INu%2Bq99LveAu1oRtnvkxinHxgtRV2VIL1PHyIiOLps7OGurn%2FfEyIl9WSYkcbA0QFRSwktNFRbSO6PJcVrBqzWDQlruuecXltoYqOeyx%2FiGaSZgK7clF1rKpoSB9X3O%2BBQRss3cKSYb9SnEm1Wz4KoTSEsA5n%2BdO2bBSKtso72pZ5chO9AAQ48EwFV9cjtXdELThCaKVRBR22IyL8JlnmSHe283uyHCz0riFDo%2FKXCrgYN0q5RNWzhfnAoPD6hBuhdTpLJYIsJoLbRGT2wB4aqwBHxi1YWubbDesXXh%2FNK2NxAxNVZiUbB%2BW1%2B2ygtKebIEpNcPxcelJhMvjxpkWl5Dey%2FHLissSr3C7htVpVKoiAtAI%2FAqu1BJt3EORaRaDhOVNmzhZpASOzvj3sxQIontvSmLpR1HdskCY7UVHFvbiEgOwRLNq0hxigUaJG7G%2Fg23K3WBaqHlxVrxPZQh%2FRNVZB0QQIAylHqrDV95tQnbBtVQLzFUH6QGvBmB%2BixfrX7qvtzW%2ByDtu5LDwBb8vvQK8en3gJlyJ%2BSuvHyRJ8WB7b4W8WxQO%2B0bfvFld6fWqXcg6RzDYSTJP9svR84bBO2fZEMLH5x8MGOqUB7WPSOAV7rnmVT99YXOwrPxn5hNIRSRQtIE3W44mtRMI24Nr624oG3Y6YEG1bak31rS2yRTzAIsJBzB86kLA5%2F%2Fb2nY%2B%2FVyTptZMPOr1cO6dQQ%2BAszUNrhgrChNPtEqelgailgaeoqvNmOOyA%2BgrMg0oSkktd6yrOYnxwKDqbwzd2S3N42clxTnVyIfse78EHGIsE42p75oZ7ezVxw2NphcRr%2BGx9&X-Amz-Signature=92e0c2f2980a547c794cc190d30d616e5a4059afc8cf33fbc5ca278046ec2d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
