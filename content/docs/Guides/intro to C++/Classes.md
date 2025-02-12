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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEQKDF7O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUaW%2FufAl4VB4HG5c57P8ai6mhPDPWsm8IG4ljCUoZRAiEA6Y890KjBXHbs%2FCqXW0d2Ua30O61xu2Lf%2F6i7zFGMb%2FsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWASW9krbI%2FlrJN%2FSrcA1X%2FlOvGpzoyEi9CTpR5pwIpJMK5%2FsQmWLtGjnbEUKV%2Ft19gR%2BRTSonfl%2FZDtf3MJo1IUSKot9t95ZwqGmIwV9YIwttOvuHTiXbj3LMOt%2BObn%2FcwwYUblOgmNJT6jl5o%2FbijdY%2Bq3%2BHsoI0iM8sUN%2FyWcB3gyt%2FvbEbtvS%2BL9ArwO1ycgeJ3A3VW8Aw7kF2%2F85Xd1q3eoOhotd2DHLOYtfGUqsjRsIBT%2FDBY9fMmYYDX4TuPmVJXp88TgsY1svNFNgd3evXOk4JednN3l8JqmC3W3uoYGY1oQyDDfyM7YKU1yvlMJF9cuJQ3uoZxIh1%2B6b0CAcKmw0IRxe6u6lRKNomkT%2FQX20AVSXXfWY3AcEd4sAyhdgh9wk9aVVnQ2xl%2FhB7gLzeMnjfDZTGUSSf0xM1OsTZdP%2FWqF08yHjO%2B9iyAVtnl8opEH%2BiwP01HE8P1BdSJxap0%2BTvNIR0aU%2B%2FddRe5BYSkhdlqgGZGPBNP6unLKrrTJPrB%2BQjHuPBAkduA%2BDpCZpV4QwDmBe5AdITb7b9r8XKnjht8TIyyqEeTvRGNXHOKlR0urAn44p9Cv8UKmJGKhGB%2BYEqsL2doTzLgNUIt6Vk9mT3StSYYDJG2%2BHA5IT6eSRnagplZ84%2F4MPCJsb0GOqUBSfE0UBeSCM7m1nxQBDch8CTtTcFVKruFnxuuE3GqmmrZKuCpz5pJCsgytICQZstxg%2Fi0GRNAZYzguPAfUXVLhDeMvzuBUyGIrHuhEbG6CrXuvnSyohjSGikGqa9%2FxCpf628Wx%2FTKAu7029Lsy1DF1lbibw6yP%2BpY6h0bYd54z3%2FlYpGXe5XSXbqQBa9yqcm%2B05h59QQ6s1XLnmTYse0ZLAeCDzvp&X-Amz-Signature=f4b5f0e31225454e811ed9160b127e105cc7325a1ec010dbe3c8ac6edbd25f12&X-Amz-SignedHeaders=host&x-id=GetObject)

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
