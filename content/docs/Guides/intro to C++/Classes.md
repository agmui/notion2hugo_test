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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKXMRW4%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDK87ebJ%2FXlGfvRZttuxpCHOMrpMAdHhMBPkxbLh4bsNAiEA%2F6g%2BgOL15LLkq237FWKLwhYz0Q%2BnXQJOUYEQ1LgIfu8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5iRc%2FnfnrHcAlIDyrcA6N10zB4qLJJkeiJdvEtGXyvJwq6aUfX1czGCVT6khyL%2FLDlY3JxK4yWAgpByHCaLwqRVZd%2BZa2vqPj4sHhPc1ccWcMfxNxypfLvAIN7Xt4jwonue6nXgDZ9%2Bc9URxZvZey0daSczEbwVmoOaHjIHrUaJv8H343ALP49cH%2Bu5%2FCNxpbOIR8%2BpQPYmem%2FmepBIaG6RAJY60v6nVennH7Ht9HvLodGh3Jmyac5Jl8QW%2FTceMqQGfDNcq5ALPNiG5X5TE6D3cVHgcynJwqP2mQEbW2%2B6ShaQn6IGDY1oVVVjvKEXnVB4s6Sm2t4JgUqCr457YWTtH1SavPoY%2BeCN63FQz67pbrGnDrPvKg9wU7DFOdxUiemJHXvK6KYeIE6Mm8585ptd0anbcSNHPP56cm%2Fvyb4t9Kvlf49CU%2Bj8RHz2HttFVMm5DY3vggsA7QcY9HfB66afQw4YNEYT29Ihyg9dvoyvkwduNgGPS0SOZ0dAb3%2ByNGLGi%2B49S3KZHxzaEEDobjlLOwGg764WaJeBY64c9rru7%2FSJHUS0fT4kml89baOW5PoeFlFyhdA7nDLFDiwGIEwr%2BM8V7yH3VcGjzJL4fXQ9zCR3X1qxtHvhSVpNTVseGw9WU%2FP1h9d%2Bs3HMMfHrsEGOqUBAfeRG45elAhBc3LFACFS%2BmM2I%2BYrvRCRfgnI9%2Bfpa3T0PqjgtKBnqi3w55VClqtlA570Z2rYiyc%2FbwwRvFA2w3m2pkFhefYwt6SPRXKNymwdqwP9HxF0r67j0UkChEiAEwf2tRD%2BPptvNzMknOC1kmfkeq9zA8EKXXPk2m1AeIgPgWaNTCTN%2Fy0CH9ibJC1rlX3cT8Zko88%2BCTRI6JFVA3jRZkJC&X-Amz-Signature=91334556b1e00c5eaa66c1d0050b8bc9cc896c2c86febe43e6769d6d9fea3411&X-Amz-SignedHeaders=host&x-id=GetObject)

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
