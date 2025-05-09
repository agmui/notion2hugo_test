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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCVUAD6O%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtNoxa78h%2BrM2QVMU0%2FT02v%2B%2BsLcXv30DGGWczf4HupAiEA2GyWtD5hO5t64Yd3rcbA6QuV8gr2Q71qdIuGdtda%2BgkqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1t4N7sc2lgDJPJ%2BCrcA6YjkyEK0cMH%2FlrrpY%2BkHEG9NkMgHmHfmK%2Bh8T5%2Bcm0cnxcpcDJstMNCsu0CHO%2BUXfrG9SzOly70hChgqDkudD%2BVqoR3AApr7i7BvXqVqidV1jy1jXaKqOYJUhSvk6ScicW1cqs9l1S%2FKVMI%2FhbINNdz3wSgIeaaiBzc9Is6DlLBQgbdal%2B8wB%2BrMTZrUw62sWr5nNGNIunLEvE%2Bzcp45pD8vfmXGgji6%2FAeVeD5XvPASKVjdUypmGspBtSVnCbUcAP5Tax%2BkH24kNPlLIP%2BiqMm%2Bn8BSs8Inf291pfE%2FqDFyyU1S0%2FnNLgiuzfW2JDPs9Y05tl6iVxY%2BY2%2Fo6TDTgR4lH3hWi1kxw8WpIX3SnKPbbJLr3AyQtI0%2BgZFL%2FGkz1BGfQHjCpNmCtt4EGbNyiao9AEn0Kpdum5peztfaWYlMZ%2BbH%2BeWVhCRfMtw81H7%2Fkt%2FNh1MRLGxI5RR5nKn3AW865se9ESreYFp22rcX7Ncgp8cwK9j74XKaOHJouX9Z4W2uYE%2BeB9BO3KqrI0KqIM0D%2B1ykyWEQ8w850Pbm0%2BEEh8ArOXL7w7IPwYcFKzziA5kqksG7pR9%2B63Cnuqh2qxIzEvNUXsV0FEugXjsh5Kg4SGJM4Jry7BMEji1MJ%2FH9sAGOqUBN2uF7qWVekCr7mYjpDivvwZKNL16XZYEij7a4YVQQ6Gb8tvCjOG9eZLupDUz2WWbzdahNrHvdTz6CrLP9zT0WYnlZdjqbUb57xF0b%2BdFT7sWHd2DvmhrE2d51XKaLqf3rbv4eQCa408Ax5p4Sh90beBGNKuCmYcqpLGIuGMcXS%2FS4ZSbe%2BGNVUYi6Dk6K0Pg9fYgt8NQAk1JRmRuntECBBAQhE7x&X-Amz-Signature=d1597b2510b9a23c8485f3e7814c53ff8424c549cdb4ad9f57e07eb33c1c238a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
