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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DDXNKY3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBC9jBeLpyat5fIZNt4Z3aWXWk4gjQs%2Bt632wfV101XcAiEA2MULwaMse3c0ze59jkCBfCaGdznJatvesOE0zKeJAQ0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDB1XZnaBaXhSmP0RuCrcA%2F4mfZSz6Edez%2Bb7UZK7EGuiIAdaBD8LPs21E3l%2Fx16Rg7iG0QcmOlHiegUKWSzfmWy%2BhUqqLd6RHVj46HcypdAH4PUJsbUUAfVYdJo6%2BaxS5cPukrvD7mqhuykfCArhR4eA4Dlw40oDjQ%2FSze%2FTrMPciPzhlpen7njaZSkWx0gOA064F6lUCZramlIC%2FtXPTFfOZddd2h0HQjOlL%2FI0PXqQWFpItQdtq7oeqxLdQc2IAAddxEo6yRh0KJIw5gMj%2BT%2BtYyCISDgegPaT8BZjlX6cwOkEKnFlw5Zi4f2lQWAlTyz1s8pM7Vy%2BI4%2FEJZWLfK23JNAF5wv5bod%2B%2BCjQ9VAjFcVVSu%2FNxXSsUpjsIPJI5YnHoQwdONAjmu9GRCQgLAeb9cwyI5W%2BQqWdQbwbahVwn9T8TV6CD1Cqmfy2pOG5z9bc9TDKSeNVZzagGoUOVWW6RhX4EKyKkd0SwL9kCGw4FxnhkwoCCRD6tJfOb6CdXev5kVLqRGPYI67ctirdIF%2Fvoze9aFuVOr8GxrUIf%2FbnFlj8qULzYsCkcjZva72k44fB%2B%2FrVj5LeXSgwW1nbVhrJOewE1HS5NSwk%2BwXTh5bvph0lkTP9kZjuECTQJATF8ZJFvR26COCYvm3tMMnUgsIGOqUB68Q%2BpvKAin5LgTW7z2Z%2B%2F2CylfdGqwpzf4peBa4bg7zfo5KLswbCEsV7aFGU4kKl4D6b0ucRhhpB91Ap69vfaYtIHFFQ8nUC3zYV3ZzAr%2BaFkvDpibk5oDoGteNZizgI46G94IaOACBP8RNAsFK492NcpVtkPsYLnchyVZf9rqKHwC7BkMoxSS0C6J4A%2FM89STyajoWdpcpUZMjOEFPZAbJe%2F%2F1L&X-Amz-Signature=864ffe123b13f6ae9033014f980f7178d7bc10fb70f0a6927f7977356b520fc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
