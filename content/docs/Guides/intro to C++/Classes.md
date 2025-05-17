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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBDYE4R%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxhvAPj03op1aQqf5j1%2Fa4zAViuOCW1GuK8QKCEOzKygIgRmenIfVlxGkh5XK8MKS2rCSkn7qC2BR4NhQiBQKdujEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDN36ZUhd39GK1sps%2BCrcAxLvS8%2FljL8m7zbcT%2B%2FVtrMaXMjs1gNYk5Syn9ySN2V9zcTrhVXj%2BesMagoIF%2BOSCMskFA9YDlx1zjcObrr0%2FkMggArqKNZTxwu7J%2B%2BeG%2FHRvjASUmgW1s0flOSiKDTAQLxULRZlAYMa8%2BD%2FmIqSoSjGi4iSCJnkYZFa91KWM6e92C7gPQWCAMokbUk7hsRddyI2pGVOfRe5uMBNIBMD3Y777KOzPX%2BITnbZUUtUB3en%2FCtqQajojfQSAOKYskwLAn%2BcaE4EkGqWEmUqUi6vb%2F%2BJ4NaONn9QHmxImilcvlBTjpG5nw5IG9OKH0yULCRIPXiH5%2BqXqiFrexIF6aKvRE9ffc0sAh11U6IKBBwjtOt4o8piMoKqRw8cCl5BXQqCBjfz%2F%2FPaBkRs0DFq8DUcFBP%2B0UTafXXD02qlqMO%2Fm%2FXBFO2nzfgy8nJr2p89fCueyiYJvj1MeGAUCDyjUVPpBQvOznOSZVlVdckrhOLy5d9rPvvLtWz6qDpCccm6UTnWLqzf1bqQ3MtajIFjt1MpwNbJuG%2FPC67RPu1iVP2XBOr3gmOcOVG%2BDubnwptyK0V2XLe5bXylmYYuLazxVvu8PunUHojQRQYy6kTZjtT4zO81K9rhjEAVTMfsAK3aMMegn8EGOqUBgn4dIri8rQnqRSUfs6agXTOYeiek%2FBwmysKO4vZxuiEhRkdz%2FwxRdLdKHRbRnl%2FxtDlHXu6G%2BwLPKdxKOHVKW1bLKPsz26ddEJ8yjNSXPKiwwZ0MmovLCByYBK9trO67Mc%2ByV8dTDBnV77R6hd3l4cZUjhX1MAZ9dJtcH2ck3hKAOK%2B488AiM%2BdlKa4n8%2BDoWPiImdAuZXyHR3zy%2BKQt8aTApn2K&X-Amz-Signature=13a11cacd68e0b55ced8459e64d400b58c0a89094247452c0bab90097bbe6ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
