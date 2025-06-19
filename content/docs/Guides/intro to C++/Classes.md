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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HC4YYV2%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS6HCadAeYQoJx4mL5y%2BZNvX5s4X8IQ7cnLzNs9iyBPAiEA4xQZ1SA7Cnm0xlyC8ddgbR71zsG7Gzhadl9onIsthkMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj1AqZTXFRhfGRYCSrcA%2BzHhJYp4pKbyy%2BO92DQ%2BMkwqvZQAslbbZnlSLDmZl7%2FY1NCuFBONuZmEx4iNB5uw9TFHzfup9tW0N8FgX%2B3d2YM7pjXY3WurIN6WUGeFP9rDMnJNmaZLO1yqF3DmWfDZm2ahKuefXW3FYfcTuHt3U97xX2ujTIim1BR%2BBgRjU1KH02ayKgWHLXcpe80Zvp66B1jt20ic45T%2FlOFF2Kavh3oMMHhwy19YuF3JcLrw1ebLmfzBd%2BQ51TWh9gC477h1LgHMRa70VD%2FizvwRJX3EssPp9JduRU6TXf0g9xAM4TObyomtNpiDTC8sHErQcd2o1ehbl1P6z%2FV1bPG9EHzVJW%2BXmqhz7JT7CEOUZl4huRtIQxDJiqjHPf%2BAxeZioIrMjG9CNiuczk5ZDOzcmBFXx7Y3iqX6s76%2FZPpACE9lMlrwBNTjiOYRLQcR09kwIrkXvyYZan%2BuJnQ2MaP0gIjeY10F%2BW1HXr6fdLtnwOInNCjU3MTYj6by86FRPF731R9i9gm5j1vFTirukRIPqtpJtmkoIkRG3wRDdNpcmMZjwc7S66uv1mU06bsSXs5gOQavjMod%2BmcG9DwyFhRFXj3jGp3zYNlNrDHx7SK8LM7Oc%2F98uqSX1rqD%2BR9GWw7MJPSz8IGOqUBa5kRH%2F6VxhuuAmf8ZnCIWyExsGQrnMpCHg%2F5qGA%2BKkzprj2X716MQ9cmwI%2FR23X54kBFT7Qe9pbi9H%2BpPfQ1I6Mv85WZPg%2BWOrpzGLo3zPfka0sgqTv8HauFEjvEkotwGv2NA%2FrGP8SXuZ1c7XRfjaqTOsosNLVckESQduTGfqoCzFTa%2FMMQm%2BMfb70I6d6haTfcqC%2Bk1BZUXXSQ7RoE%2B8Vh5YyW&X-Amz-Signature=5830d4a3b3f0c5b4acec41997d2060e35f277d0089e48f9eb5ea6bef9e119bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
