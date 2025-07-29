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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JSLOBI6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCpRHT4nkHJTUM7qc1dTYHo2zEojHOS51xJuP1gtz%2FLdgIhAICy8wBdRYY0eXQDXlSJhD%2FoNqvKdY7NzrxmphTupSYpKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtgvkVhFNyc3Tesr4q3AOR6omuaHl9gTXFuy%2BkUWMQoc%2F1HBqWr8q6eUiFHHKY%2BHoUbEj0DRpf69wzEQaFTYy3jZTZ3BbtEl1hW4HySQQWl0TbE2sEW6tWFrhpTEULiQPlaDZGhdCB8HNK4EaVWdVUIf%2F0zQucnCdupvZxqZr3f2ZFtAkS%2FCbZSBYb6BhXhiad874OZlar5cxwrvsawJCGcfJ6F92oDWJK6uTnILrIDg%2FDk50gGekOZbcObLEyeXrc45PuptwqoNZk9yhUDvr%2BDn4%2FIyld5xgIKPb7axHOiUptA0agoYOu4fXY0sg%2Bj1ca4ck7Aa258FoHIZmv2W97vul9fs2i3hOajl0wYGrPFcsnBSy5PN%2FEiceSjMd%2F52TyEzNjKR0pKIrIZVeXtlUYJngR%2FS4N2rjaKKavrFaxOyqlkYcM9TOWNrQgq%2FwFoE2sZNlOy0mZ%2FmRozvo1hQDJF2yNrlKiaTds5kvighA6mpQRBzLxyhmgL5VuCRyPCzNE2TvngkoqfvbBOfqaMdA2fxFi6TeG20gsbVrabmbbGg5KYHeUcoeBK7YmNoe7t15Ijv6t6z%2FPRFwwuAT9Vh4OxHuYW%2FLsIj0QklaYJfFzOiiSv6sV3BMBybDjMCjgbp%2Fv2Sl7DJwvA%2FcptTDel6PEBjqkAbViwj%2BP3z2wJR%2FdJuRWlvCV4pQwN4LoZiyarTj%2FJd7FXpWgx1Ej2heJ6KSZ2iNWEJ9Vh1YHL%2BVgaQ8zuo4HUogU5htev08PjL7SdhlpkGL5cE12ifJBP83GVMpiVp2bQtIXi%2BhOvnchiSPtn4bakRayqd76qCuyVPN0lu1iuoh3mQDNE6EUMpcAJ9YP995REvijpziTYDt86coDIgaIWCYH%2FPhw&X-Amz-Signature=0eb97011d2666d9ecbd2286c28411fa98b90c4a53719664216f68f8d34060bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
