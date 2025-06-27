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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYKWAGAU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXYvnudfUPTk8sIzCB73R4SdFK7UuyjT2SOXn9hlRHPAiEAoFw6YZrwYIWiNKFCk4ekjV4h28TMjQoOFUeDM%2FutndUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMaaM9skFA1Ji9MVwSrcA%2Fr42wAkxS7Wl6tLxg2cZv3RfwyUMKSz90%2FX0IK6%2FfPrJfTarCcvWGcwZ8I9Q1tZf4LhQP4e78LmEiNxIOGCRFWS7BSFT4EJfLISzRvVJuZvAuxXGth3mrx7Kbes05VpV7B8OQJLKF12e%2Fi39MSBluTYeZ4tPXosvsB3%2F2vrzUETeQLhcf5Hswr4ecAokHstKMEHEb9rqyQ4EcuAaK4zxnr3I6MK0X012S2bVXwuoE12SrhTJiCOkCDiOMSe75eAfW4HUIrZoUjW6P7I8GP0imd7lfJlmUrMoVpIcxe%2FLZMjOzE5azG3Rji7U2ZbWuIQtGmry0bWzF14d50pwv9u1l4FvRh9HTl9NNPkG1J%2FiWh%2F%2Fa88zqt44X3xBN7eyHbeRCAQwGSXJj9hfblZR5EsEDkqCuaGEKbeNhPTlsTkgllhmb7zwY6g0T5RTyoF9l0oQUfd2N45537pUVVzIBdGH7VaTFxXYrjlIR7zNHp%2Fe3HVg5kYxRBgQMfdm8R4h3Isa%2FUlodTpkaqejSJC0SDJRTtWL9o8WYlCKRY053Gkv3rInGf1LUzlr1gingkLXvY8N91JgYKFv3T35gPZAPPk%2BRw9hTEquGD6lhK1xDnKB%2FCXBhyDbL81Z2NKvot2MLjK%2B8IGOqUBmYCaKIWpm1yCOxIQLMK1oioEzoldlmw6BW351PF%2Fm4dFh%2F7prNa1NfaO%2FUj4sdD3958Id6dWwpEStKaqMaLSmmqY5LWqHHk%2Fkq0tyTXguW4Zg%2FuqnSexQ3Gvwq6zkJ8t6b50ZkzHs2Zh5Hc6Wne%2BmpaAgC%2BUlEgYGOXDoMqj7oe5vj%2BTBMrwn97bhaGA7wGqdXF3EAaO4Wy3DnjXAYy1dTTATZ7w&X-Amz-Signature=7ae6956d5a71dd6de3f9555e84b9111021dd1a50aae2d0d4c86a7f441d864abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
