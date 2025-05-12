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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L7NQ4CM%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDptT%2F%2FFpNJERqWMh62%2Fv0o7r9PYWvBC4eHq3zF7snpzQIgXjxzuC2GrK1svxHIvNWLtFkGV6Zl2BikmVcCA%2BmmV%2BsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMffOeLzQvHKRbJLircA%2Fxt3Qa1p%2BOkwVUPw9ClpPbbF%2BCWPJi5jfnTRTedSYoC36G%2FwzcrPQzTVuwdEpazxneB0ckQJQJ2oDaSmM%2BqoNFXv6bIckZO2dZJu33szCDBQFfLZpvcGaIRwBYzBWnH70t1Jfnkj6Co%2BHszpDXg5tLNRwOpxDJS67oRimzx9TApCCizaYXh67lh9grHAD4U%2BVcbcansQUwuJvg9SNZZGOgfiqXN%2BR74q7HwR4MVMPUHnrTNLYT7pRQqSJdNwJZIYCXRzJVh192jqaEstE9DF%2F7ajsOLE5z%2B64ov6F85Xd8XkAcYEI1tkqxGHwCHqm9ASyRTu8wsDrNIidVqWk6LQ5kOLneCmkrdvTHGarScHtUGkQpYmAsMymKY2hJQMt%2BAZD44VcNE21snhVyBz0Kpq%2FyFcK5EInQHW7ex123ebcvkjqeD%2Fm7YP5ikT7d3%2B7k3hsFrT7%2Fxf7RC31oj7pw76IFVYcSGzn3xiZvOBJyb2kdWWPDinXGaLlZkZ5GluXysBQ883kLP%2FhNYiRKPJoGdfQZ1IsJ9E373STD0DNBI%2FjuDckKPT2PXvP%2FOnrEihowd5ISxv2%2BBbouAiyPeVhYgwdYLc12bIt8%2BLAh0udCXrxBYwP7YgvysIsbRbGefMKiFhsEGOqUB3FBGJEt2ZWbX1VGcddh5ObQw1GoAcY5VUaDm%2BxbPA0DRi7g6aaqogAvdLBpKKVQ4avcpl2oabkklcQWEnEEcdE%2BpcEq%2F5agCd6ZWIx2nbS8KIGC%2Fa21yZjmK3sg6%2Fic3SNSqpeII8n9ep%2BDeGAQoinGfRncdhO1DWyEo9XaduB%2B%2Bw9UgYWt3c5rm132YoLBr5OO0NxMcuxCO9PHJmfcoNkMCAU0t&X-Amz-Signature=b6e49f551b510e2f0bec0ba95c544437dcb69993080ff7a8e37ea1d52531d9e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
