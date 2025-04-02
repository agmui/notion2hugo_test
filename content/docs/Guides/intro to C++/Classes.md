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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTXE4V6C%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCNN%2BkUYBmNDk2xv%2FiWUIVsC%2B5xipv2jBlP8yRfjix3tQIhAI%2B%2BRTvF06d8w5X4Oo6zIdlAYiN4%2Ba5ml%2BUi0Zj1W1LFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwN2CfmmW0fCchhF5Qq3AOoNSDpSJS6mZ3DhX%2FSsmGbUank3x2PrgSdllre31geM6sYWgg2t0OIAowaQ7ZySbRMmZ57oSt6hmse8zla7EGP7fh9qEC3TDRcBX45XHI0Dj%2B6MLY1TRGQE6whRRHEpJXt3noy4ya%2FSd35RD4eCxp5FlXOuklsR6CETyq4nEoLHrYa0EDSGZPcZaMnKn%2Bzz%2B9r6arr%2FYRWJnPkBpo6gcQSl%2BsVnSEl2irJ7h9qr1xIzt0c5dTtM1OByaepBh21jrOJ2znh90g1KWWDN%2Fzd3uGyMCTWhwU4K8h90qXSChFD5wwhFvaU7qgfkIOy6r5MCzvgNA0JEBW46XJBzvZQqkr2GPGQZGDjHRHp4EGq94o4FvrSMeWDOfcmcH58Qu2W9yorVvYW9oaX0ShSsjC5nplfoADYhXsisFVxXpTOH3XWRnwCXvH7NuMaCLTqx2xC%2BEoFwzUucCsuh1JZ8Tj%2BqtVwbEw6O4VVlY1XGBsZtY%2Fd8bGie2Xu3BhF7pRlM%2F5K6dfm7POIw%2F5qprJvyIdRVRk0e9sLnrPpNkhzuThTPv63izUJHaUYRbRWWY4gdxXkpJJmbpd3DFbDs%2FapPyTh6NkVb6UGmeZALlnKJysTcaFZgLe0sTM0%2FJnuHtGYyjDhtbO%2FBjqkAbyeR2V6KqUi%2BlL0ipuDebQF%2BCyEJva45lZNdxhTAVdYwRowXj3cQnBPlp71i6nVsHy6BULZfmMciuxVdjc2ZdhtXTx0MwXeUkE5zZ4FXz5KV8DvHCcConO01Xtyp3LVBBch5oVj9dzTjWF4%2F9HwA2osLP24fy9M5KBqmZKX%2BB8uZduO9rBPSo021pmWamXLWR2O6VkfMaaxCnEzJSzKlW09qih1&X-Amz-Signature=ff0a43ee1bcb88f706b1671c1c9de16151a8a88002d1da52a9b33ee52e4b9e06&X-Amz-SignedHeaders=host&x-id=GetObject)

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
