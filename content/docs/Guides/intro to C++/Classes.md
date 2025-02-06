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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV4HUZUG%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIF%2FE3X7dMVXpHLkRLxTpPzQOuJ4Gy4%2BS09eunaGLZU9TAiEA0emaAORdGqGcxc1onSGkLq7Q5TznvSOB3p9EAhVCbPYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLNPhoONADd%2F%2FFrULyrcA3lptEPvB%2F4DU7788kbCF1Isp%2BgtYdhfRyPKUID%2BDVaqKBX7yob%2F2ocPMtAxQOViHXRcNyRV2yB0FF%2FRP4%2BO0%2Fu8h9Fk%2FL0IFJTKsKOf4DlWzDDohJMFPkc1s9%2FjUTZu127YBiMudJY6%2FBjlCPGOFrg1ADsdEPvOyha1k3Ao0e8okNIxqq6pxs%2FWKR72JnB2yJ62PQuiZQL5snhpr8Hfu6lxVDLKB43%2FlsmlEQMzEJbBi7K5kbUGIifRXSDkzIuI70EzG%2FG3C%2FBuh3PQuDx2Mjw2AWSyg%2Bal5qf9bzO22fjQS9zilUjZZerJKE06jr71cb8WIXwyX8QlGiNmhVFyaSAG%2FIrhDYQkr8MDndPnkQkMcIGIzPZd4rrNvZ6%2FaghqXepIJoXQaWX4XNNjx%2F27AejAOnrgqF6yS%2FKO5S7jnBu5KdDQTo0CjzM%2BLzs%2Ffef6Sj%2FhHsBDvGWRhjRbgI4YreIf5v7bwmrDeflLjPxad%2FghJrAexukBefdIFSBGgcS7nS%2Fh0sVuwHS37eh6Oyz%2F4yl7Szw%2FHgoe5BXFkOpkUEyV8fpCtxxUrkOjZ22QFLdsQnUpninB0WScdnluvmi0vSdthpG24N5ZaPWfdlY4NoU5VhfUKRbnGhyt0JVAMMb%2BlL0GOqUBTtkMQeaHxx80zPvzyVZuD3JJwjybFCk6dXXhUgtlxAFMvGcmihBjF0%2BLYmsiOIQsHYBLaGs30AtpBCfbmsTvY44C1asH0Jig5mWMX%2FfegqqWOzzGM6lcc9KytWDFWd5s0txj7J6BAJn776Ug74ACv%2FOCC2A4KgwUXqXrIVU0kQS5jetgdyMGboqMUqGOJEvPWnoK%2BttKOZVoFozUdYEcimfYVHPt&X-Amz-Signature=87589d8a7ca4b9e857106e749d6fa9cb02c6cd6c46f1bd29007b78cbb2f931b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
