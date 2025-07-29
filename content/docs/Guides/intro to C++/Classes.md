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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAON5BJC%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDN%2FC034xihHhAvDxV3UObuPsijRx9aq9FOxb8govzNBAiEAynBPxvKorAlpRO09kjV2wvZpg98iCFaolqkpoyNolp4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2fOFPJTR%2BWzY9zPircA6ZDZtqXG%2B3bDC3hX%2BoLEOR8g3cBLx6oF5lKcRdrwsjB7X6ovL%2B9AH0BUVYGEeBbEYw8XpQJ8wfjYUyQq8WxjB6g%2FV1d2bS58AOKLdd3sTKSTWNnPgozODKu99G7s1nHFs40hycu2ShGvgGaQaCq0rF%2F2SjjaEt6CPPHPn6mIW60Zj5ny4ef%2FKbPh72x5OGNOkVGAP7HmGGhTNb8QcyLTAnNfODT0a0a5dRCWVJlAoIAxFzwHPgO49bwxwPqWQHRjQpPnG%2FIaepdNOUg08BCYeXvvjRcPzLvxDs2oFjE2S%2Bf4nnTXto26pMdKfW7lEpRENyLfeHxv0joWn9RPFo0G%2B41AuQ%2Fnhl9DCbBPWiT9WuL1GdnwbMgt2XnRV%2F%2BZ3%2FXDKbiE%2FXid30OxKuDkNTLSGtN8QxcfLKkwCtvgyjJAERP5p19Q4irBI3VMv4GJf4ZVsznunbWIR7ekI4T9HOjiubV20MIQajKvNhnbK%2FpkYYi83A2h257gO23%2B%2F2SUIul16jyfnNbjga5%2FlrClSFG0o%2F3cz4pc7BaVmIvOGNRLIQ7m1MCYOCR0bTBCyg9gngrxvemyWkP2eMZTpVC%2BsLmPY7Y78ZDr7A1f1Shg35LkrlNii0hcbTGBjXA85YcMJjMoMQGOqUBtPRdffL7q8%2F9KJXvqtu7Tpb5B2GmJKeu7MJ6JTruGZVGFcQOnBBeH%2BkOVOuM6eIfkkBomXK7nenqOlmk1ptTEFLXn1lzT08CZJdwx7xA1iR%2FaqPvPmgKgbUMa0pXnonRGavpgGOCi%2BTG2%2Bfv91BosFdGXnoVSiKEJCk3VXuatySZ7racdECCtAXT54LKTi%2BH6GFJRQGMddfBwpr783SP%2BWJekRO0&X-Amz-Signature=6decb7f109f3e3abbff1eff5725954a2625986047ef9e6dc7caad39bd2de5993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
