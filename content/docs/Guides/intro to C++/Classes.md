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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NEGYBNY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJFMEMCIENnXIEVemALcoIrfq15zO2k74H%2F8H4LGOwiEH2gvRieAh8RcUaRm5zlgSf1h9Fp%2BGLujbEe2uYHizV2OaE20nm7Kv8DCC0QABoMNjM3NDIzMTgzODA1Igw3AuIxKgQQDIPckpIq3ANP8Yd4Ss5RpcEU%2F9RiuXBH13e4IQNMd42Q3S%2BNFoAHR7E%2BnkDhs4yqIvWYAvvssgpNe5GIc4Dy91D%2F3LYotk2X0lfN3%2FwmEqqFgQhKrFFXpuLVGokuwRRLocmhgf%2BVft9Un5nzzDZiYYcYb3a4rxX6s14ZMTP1LX0AfxKUZmDCzL65klgOb0ouKGCZCK4%2FrliGdYmnvsdJs30Ur7DU6no2Vvyfr5yS8JI4hnsnh4TFW%2BrkOshiU%2F1573u05N48aq%2F74GrziNbPTRYx6dkTFGOLEWDfiCTHOXHbMcUDPpsa333IFLYqeVPuulh6hLQs%2BdWDMNSNZsPM0BnR2aZ1zAwSmJCFzrhpUGbwn%2FU5p8gziiFSTNxwVokt79CBudcntDG81TirKqAHwJtRy3tjpTfF4nFW0Rl1%2BBeL3h7V9UzpZbGD86dKao%2FpFIeuBluJTNqWvZR9wd%2BfItAfeEmsn03ScMo2mjWKHBeK04kkbGiwo8kCC91t5egZ%2F8ZFn3Bw69WbO3eW0YX7bUBtUdHSH3O3Z8Q%2F1FYlqtqYuke3%2FunuBGzrD%2B1Z%2BYS0fgxgq4gzK1KtT9SM%2BVDokKVMdFRtHbulm7ASWm02zsWwLxx%2FQLeCp%2BEcOR7BO0vGcSQL%2FzCgupfBBjqnAc6deOtSeSkFVj%2Fw6PbUwkM7OTnI9M3x258Qq3qFNhVAFw6%2BMHS6CBbwAeRITFVKRDuccRErODaXoTymw7B0S7FFa%2BgOjEaceVO1cWzxjBN6Cm8ULdwx2oM%2B1zTDWoW%2BaUGxaBXADvRMU8mTA7Vyx%2B7%2BWs%2BjaFhB%2BRcJ4H21ZI3NWrPuBD%2Fo88DsgtWfofypzwKYbxqZSFQP441IRkWi7dA29482Nf3g&X-Amz-Signature=07765c586e5eb5a31117e974dc009ad8545a5cbe8a878657c5c737e81595a95a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
