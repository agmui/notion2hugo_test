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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQDAABIY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIE%2Bwn8bWfBIgSLXyPKK1EPXj3nXvxiOf%2BcOHu%2B7XVrZcAiEA%2B72ZYT%2FgR7Jwy2XDHYKSntE60TQr6EpEM2PFrYigd1Aq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDL%2BYZdqa451dzXtVBSrcAxTVKefcwglUOlEHN3JoJl%2FwUIsSqupwaEsTfLb15dddmyvAJlj36wjxqH%2FvE%2FC9Qfupx9fjMRr2P610ktxTePKGsAlnKoJdLRMezQfNW7KczyarFli7hq%2BDVEKIQ8rvk2DncVUbdDVU850JT9vV1jPhRSsVVik7QDB8MyzF1UryxDxsRIyf30MYPDA8wEv%2BGuGhHGzJSirmEc6dHhYr6Z0Wau9W6KTvt7%2B8gwRrf%2B9Bv4VrBhoYaq2XanJ8O1XUQN0zaVuI0azoczyTB8VldABFPM1BdXD0dJo2KspsAdK91NRlpj5sqiOdeKzkqwFJWqfuWzlSyWbEGK3Lo25Kw561CkhD9Ya6JbgCJ87AJdJfIxjNR1rweBMK%2BVr5opJjP9cM%2F1JvfsrXAs3Jys43PCcX1l%2F8cdbLzuXukLSwc1i%2FjNMFntYv5SeA1AK4YFSwP8KX4o%2Bwf%2FJBOEznoDoAM%2BYdVJ09ZiJhYEp5MtU4JbGzr05jMbOwtfGQZbiCNPTfaMAlM38lwPvoaQ34AsHspYtIA41ZIF0fdRkWbNLH8GN4fPjHuqU0Vl775K4jquEJ%2FS%2FBfj8GRYjxB5k8A54H9jpGKO1ySfaLYfM%2FYKtzZG%2BGwipS9%2B4HR80LGEQfMNPht74GOqUBcEOTZPCoYC%2BJOE1ih2AKDwo4%2BKVWGentBZvydF9DIGQl8v%2Bul63RlhKIMVLrdGXVvgEOD74kEtEB7jaAIkNN3a07amOsZ0BF%2BXYIBIrETcMAawychQSz8FhdVbXUsurVj2UqOPArXjuz87QlnybLmiiqiiThMezOkex6DmE1JTS9knMGvWgTfEvFQZvaqRC2yoz8NvDM0%2Fyllby1uidKPJ%2FNDeZ9&X-Amz-Signature=95315920f2616d063c7eda6291a38a3ff3b0a1248bea7d22dd3a55b12b61eb01&X-Amz-SignedHeaders=host&x-id=GetObject)

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
