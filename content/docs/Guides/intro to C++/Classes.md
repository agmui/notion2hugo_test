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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMPKQP4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHWMVyZ63%2BhGSBMbqbuUOJoz9IO984h4Ypspeurx5sZlAiAO%2BlsBS1Bo%2B7F1UROCkUQUptc%2FKh%2BUEbCP9YDCLnn7NCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMc6y61aKX1Ym%2BhbFoKtwD6IPKKR1iMDIYyjmCB7z6Su4z%2Fbjucdpa9OqqMVytQd0HSJaw93RRvqrM5C2GG9YdJwkJsUqlmeubPqeZ7B5%2FgWTrYTpftYhGI8IQjgIc%2FB7WjsT99TNfVPrFu7eWRUTig92EIfXaFIedMCndhIiyWJozEZ9SHqHm9BW2b2pcVkokacwbHskS1daZkZX%2F8ZEbMlPjMvlcXZ%2BENveREoQFZFMxMa%2Fj2zOWyKBgGkG5QKoaLBXSKTNUEclWdST1Kh4qYzP8W7o9bdiV8NPHxIzePfIX1lLHuZde6kpfJqRwZHpywqh7snfcmWGVJhoTLkkW0uYyIVLAD8xoz4QHov1L756H%2F%2BF5zGrEW9kXNcqwuKjTjPLHo2JFwVFWd%2Bj%2F4i0m1c98aZclPQsgnByVBj6SoJ4Eu3TvlXi3fZdM1OtdPpffYu4XstPly%2FfG%2BKGY%2Fzzx88xe31N7sG7pUKgSLY22pvSzx1qjFfiDnFWV426Umma1PzQydDRuHfMW%2BbbpGzhpndWv9O%2BalP%2BI1Wt3B2FtEH626tHvhvomX97PF16XZ6T0QW5Lc1rFxGsGOOIlU1oMV6NVYW8u66hkZpAWKiRF6IvXC6KIgJKNnIm%2FCA11Q97%2Bq9aDRx1KG7c9lvkwx7q2wgY6pgFB2tTTdIs0gxQuWjTONyExMXlIsiE74Ss6vF0gIdCgL4%2FjklnBsobIjEHEJ20U7QLsSj1DPh39KfjKM9uq1Su%2FcXbAb9nsrhFW2nh8NqTFPbZW%2FYDeeLJBGvqe0JdMd4Wc8ffX%2BEqWALFSJd98LnEvjk0ancupB97JYB0ebn21LC4ykre2w3o1Z1CNR2SZ932kSd64ESB9EqDxgZAzxAp448EnmoZA&X-Amz-Signature=5be94cea8bcd26949a524fdefda189cfcab53161aa061195580b83d1101ea22c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
