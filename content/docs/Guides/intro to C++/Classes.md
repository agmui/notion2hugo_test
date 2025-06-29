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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IJYYQDU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD45tlHoV%2FZuaft1oQOwrp7cAg3e0lvXEhoMiuEHp51xAIhAIFRW%2Fkt6b4n8Hll3uxhfEz8Xczo%2FSSu%2FNzMXdFkaMatKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1gpgg1BOQW9MAF4kq3AMHxfD%2B4k2d62HJ0l3sRvCVNQnRZyFaiEO0IMwSiSmIi7Ypk02y%2FLiwKoXdUjmjKbFY3yTdVqZ35MWKeIoSlwu%2BN92JDFH9IsycuDFCEbWq%2F8PbDxgk0jtXg9unAqguguLcfSHaB4gLQReqEjaCouhuHfwYVnKSFA2j6jJWMCgCjwReuPvC4jIB%2Fow0%2B3y%2BCvA8EwSCtHXz%2F299hSProOdWHp3V5ZdExRJwEAczAoMfpJlneoGPDE76De5ibWpBxxKtZHOwz3RH3TaBB1%2F%2B1i8bhHH73UswT8Qh7pxrLa2u9gUxkjiBNWFznp%2FYVwjKUBTqeVdwekVQABSUt7%2FSTxRMQ7CndouXGaRXFKQZFWq6YxAsC9A5Rky9Cl9zj85aqJz9eoTplMC6dtKIrbr%2BDoAbEk0rLkqbIldOmzeyVCAh9iVMNwSgrmyd9mRIajNRHXcsZ9nwlLE%2Bdm%2FnO%2BTKnrcbCywRoU%2B%2FTY3wwvAPfJL6rTjnM01Yd2ZjozZPeFkK7rc3tR5rEGDZ6UKtfRHGmhczrEwmYV015vQ%2FHHqOXzZSICkrpjt8fNU2PNlFI1BwfdS593CfdR686WRJpfp1i%2FT%2BapT1Xl4ju62bbj1vcZy0TnTjVVmnEr8KXD2VwTCygITDBjqkAVhkmAyOX9NYszR2vK2q2LFbIQuREppl5yFx8CnXyzkcAWB36BpmmL0ff7xEzqrtRZ6q9Yf2zfjI6y7CJQuHkUpdqZT0T28SsPyUWAnU7DcypfOBy%2BxhcbCQdjdEUKpptVe5qPokgpIZsyq9vnjYeCv1egVHmDgQEQVQgg%2FtRiyProDRkqK76UvWPSTMlwRierTlKdLknGN%2F74xHsEA3KHuv9lXi&X-Amz-Signature=26e9f603129a7fe11ca57d8f6ebfcf99630c311ded490bf87c3c2be2978d714f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
