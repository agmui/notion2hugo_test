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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JH76P7X%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDoNtomjGQF3w%2B1Unwi5W%2BoNdDeP97yrBsUs11W6HJ98wIhAJqFx3Z6uCeE0KeHLX9U0iZYO%2Fs3VvWp75uxUeGlPdKLKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwlw71WnaVJlipqrdoq3AOUYKWAZ%2BYTEHUN2VpwRKwMofBZw%2BfiXdQhw3TJoXB8XuHiRoEFIqHAyvy4VImrpFVUMqxBy3pMWPr%2FxH8IHvr28H2TnE5NH71ySK6EcdK4v6Z3wRWEvQEHgKVUSFN%2FphnuU%2F1wP4Er7VlPPLnXB7gnc%2BaK664zvmrQtUQG%2FFGJMOjmsSH8Z3EMVnhvxhmw321ZaQz3wmrKopNLkcb0gqTyCoE3%2FzDxFbHoSsUl9Bylk1druH8l%2Fp6MddllYLfIVBvbeJt2iIekFcdNWngaNvdVGM7FF3Q5DFiO%2F%2BsHSYrzMAaeKBeNGfyP8wfS7OfCfVMBi0ZbehNSx3PBcQ1DO7SKs16yz171vZND4QMsNnpGiCILmZGOzICj%2F5VoS5SbATvG14tQGNZ4DS%2FmFcbBquS6BY0W1ZYG1kPezvC4qsuylBVnteyAnzT2b40yDdCAJrwniF%2FVXXn7amKPfDHyb%2BFZLqmuWzzSRTav5El%2FA5mtPyJlhx0M3ZGI4Uruc21v3XSnpvuTTOFL1o5DIMPkrS5nkqFDdPuog%2FnGeFmobfKAwPdJoT43rLUxzGxxW34pmx12VmQ0pOVMoheKi%2FKTaPOBbb6c4Kr31WDv0Mld6IInXxn6Lbcp71s0r1YWUTD4oM7ABjqkAZUADrxXq7p4bbf%2BweLuuWRI5hYn2415MEznngArxv8qWAjA2Rf3BAtf44As71JaiBHN78zOJz5iFv1HPcjN9T23gXkqyvUTxNe7JQbnuoJd7X7E7%2BU9cYr1argzg4cCCk4I2KbiGR2u%2FN7TaR7igfZE39xSVmxrPfYDjXBaYhmd%2Bs71qissuTW%2FbcHKY6hD9VzHWlUi0LLg59xXO%2BPeYOQkXs36&X-Amz-Signature=fcb002969784acf648159076b86844c5786b9df1fcab10811fdbaf6c35e49bed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
