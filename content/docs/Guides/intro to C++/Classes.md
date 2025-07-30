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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4TY75QK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5Qq%2FA7isn8AhVGi6CXx7tbMG0BpJS81bYkBiTRgtWxAiArWusax7HTo787kkxi7QlH9saCQiBMyyqD1wmAgWmlHCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMshhpIY0p9mUzwvk9KtwD55OxbsR%2BI8OqZ1p3ZYLiTZN4T7SLqAtDAN3r%2B2ayDWquzuabTA8WMV7ikU0R1bKNcHhR0zi%2ByheTb%2FOS8gybacu3QlIaDNU9VMQlGj758OuPpTyOkpl5kfo4BHmxe%2FpvL1EKL%2BxGLnXALXZToKKcIIYMpUkPe9nJbagwCjB6wAEYzzJlLftcpXpMrhIPLb%2FKXDHiXqPfAwNM%2Fv0gEKdaauNKiTGegXdf6DeXZQ7VBENKnq4wYHmb3oIMVeelwgKolHHeUCZqx9dwa1oEskdZRzb5MFQ8RRtnjHriJ2JoZaaCcCXqRq4ch2nQR1KTyOPJ8j%2FveD3ygZdupM5XdZUc82r311nqjSucg%2F9Q5p47LLUW6CRcXMm5ikYVsg1oLkBVNq%2B6jLgBtzxwvCZcgna9H2JyUPQlLhGPt4WTE%2BojtB45RWbfBCyV88WcM%2FOd2e4YZ4D8dbCMTBSf5tHj07XEJAkC0NZ%2BKqqvlRUI59QqiSAXT9KMRZ7pk2H3Qeudqk0iCconCHyRSrwSNK5WfakNf6Q7rFqyE7EswuYtYbzdVmKeTc9oPBmFOZykFS7xatDbaTZiwLT0q%2F4MqIKyc1uRCOrCZk8Qj30fS9KNugpP3ukWESFUDqFR0%2FPvavYwkaOoxAY6pgGsPlqU6qtQmJsYw21SkSSiE5L6KjjeQLzC2a%2BPXDkiU5wMjbm0JOGO23Ui8jT5KPkbP8wa%2BGc1jyUZgDkRWAHOfhm0%2BFuSBIwMrXW%2BAD8xEl%2FPlHlVevlEDHmOrC7379FASRwG5VXphADtMO8ABqkY9HBfIV%2F87sOYOHOH2S%2BQg3IwOqWBg2JYBdbnRg6TT%2BosP6LlZkQWUi44JMflhf%2B2IJQZVEx5&X-Amz-Signature=6359fa9c59b4d0c201e6e93ba48843b84f343e11902f736468f0ba8db65b0d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
