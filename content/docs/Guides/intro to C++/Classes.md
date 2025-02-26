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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU5MADU6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIGfFY4WDw%2BYnty2CKJuusWBUtmVb%2FCxDBJYwWQK5usSlAiEAyZfpgyA9nTqAm4kwONPC2rkO4CGU8YOxKDrHySzggwkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB2xQJVsLb39piKb6yrcA%2BV1xS2AeNcb1njO%2BoM9o%2FKPmfVWN0vxIycURnob7tXoVARa2jsoZzvWV1NXHdn%2FPO9WX3S1us5c3Y4auSk%2FbxN3uafzpu4pZSUmKakYZJlnRJzakmmsE5Uf9GmcR%2Fa%2F%2BtDXicWOZsxXZfdrMAPEOFJd6rTD4%2F1CrRpTQk%2BBcH1IufifbZh4p0udTRmIg1Q0O4AGdFl1KNes5kLCh7KbAOmtRQJnVn9yEVEuZahpYBMtfyeINI%2FYaXjh3O2ioBuzO2YCloMCZ1%2FnJBVdggyHI7s5Ob%2Bxk4rgJr%2FrlSITLTn5GD5dgD%2F5Px0Y38VQKqMucfVh1zxnFYw4xLK%2FnrLJnQe3N7%2BS44rBYHzgSdxYRaUrtX0ZXTznlgIc%2FymxmHaPb5bRtSU5%2BwvIwNygJAFE0HJmQgvtxJbZnVdBhzXmcsXriom6M3RXrlDxVOA7LbpvQLR4T%2FFdozQT7ryypPZYoMctBypy2G25elJePDw0u7EBoW8D99p5%2FIxs7hhuOkdSAiNqeJmyQyxG8tadl7Bdw9rmtIUzl7tlTTk2Cw%2FYbHcf%2FvuhXblG5X1u6H7G9iBo0kDa95097nVQwgMY9NLGWi%2B2UJ8f38D46tLV3v81yRLxafmcGXosCp%2F%2BLIGHMJCJ%2FL0GOqUB0atKruGwbauewdQxvPX8dYeJaVxRI%2BBLQZTaI%2FbuweeZV336W8XAvSPfuDspsL79fFFHpmV97sQsdEJY51Z80oreeAZzAOPp598T92G7ThpdWgJddtMv2WFDCoYCbrzvQ%2BFebxd9OQP5Pylg4CWYgMWlHj%2Bf8p7awjQue3eTXqXsvPkVufxnhq35qRJMUf25mcCnfi3y0Y4nmMicATBd5prOwshl&X-Amz-Signature=c1caf03a8d26bc9a3249ee44997233fd3a49eb9c2a5d6eb9f6b2f1edc3f9de42&X-Amz-SignedHeaders=host&x-id=GetObject)

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
