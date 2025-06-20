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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYDYZO6N%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuX5TpODL9g%2FI%2BXPfsBc%2BAXHnMnAFIc6jMOfhaO72UlAiBj6rPfhwx2wwXoEx9JE8X3wiZpqtN188PNWayelXxEVyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqgvDWUnCmHLDwtPbKtwD7ZlBXgiOe%2Fv7V8X%2B5r60jw8ya2dDkOH5U9mw7Kbyxz856n4heXDktEEqgPLOHzIErY69K%2B9v02R%2FLtExUOjkA3UTf3qCF6%2FnHKk%2B3ziILlL8TbpyKCnW0vVogHQobA6AyhbM%2FhHFTy4hP1YYpRiDK4UF%2F5qifDiGu0geBuWDO55fIc0gBEyxBGWAnZnR%2BCy7GcrZYPo3Ns%2FzsPCUolr9Fbn5RoFJVWdx4u1FG6qdy6bhdbkKdSl4XSuxy%2FG0Yhav5y3gfF6hMp3DSH0yhIVm6abuu5knjl3C9ROn2WylZY78NoMIyej3ikziYUCtYemqpn%2Btn251xAG%2FAS2JeoLLPiSTE3zZPPvINoAX5PsOmP5WT3sWqLRIMoYkILNg0MnB%2B9CKDLlZPXKk7gGER8C0hm1CKbHNHbuN%2BnF33VqMxRawXsIQ3nGRu2b%2Bu4gm7373k4aeWnB17CD7%2BTfSmHjiGE45NGB7%2FTUbzrVeOu83yoVnQgp4JbNcgNGBsNLzoJEr53xVk%2BMTKlCUr6281OqllLZjeDclEzgrP8E6C7zsQjWNzqDAHFZ6yZuX4J1SxFmsFI9VKK7sTjjoyQjM92OvsqlHbLUJZ8oeg3c3kZpYI9d2lDs8eP0d7IKG%2Fn8w0bLWwgY6pgHdYaiu4SCR5gmHUbzxJZc%2BvPyzJDtfynUWgOhAGysqlPPRpSh0SJhfe1VJHD7CmwXBszyLkaiSMR2f1pMnFt2AJoiFakHH4Xg12fAYyr%2FclttOXMl5OU8ZqbpiJXGlklTEhTIo%2FjqmdP1z2H1%2B1alt7mLiclLLjm5zgoEFxckM59Vjii3HbdpUPcIlJQTSQmWPIMSLbq1k1zE9hrczCrt%2B7TRY7qxg&X-Amz-Signature=63c95e244155f5cdfb3b63275bf5246f612c2934d8c6f5f8c9528a66ef432a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
