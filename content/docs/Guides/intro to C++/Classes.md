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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TKK44JW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIG4kRtw6GNg0zvWbucKT1irRd63lu6wzgwsY%2BK%2FXYa3xAiBR0SAtu3i82SffUvWrF4M7lOfZRyzS2MtlMouPGIwrliqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlUGeyWaMOA%2F1qRshKtwDtKh06i7Luulosc59576WrC56bqna86MO%2BuTwgucyDJb0C%2FBJhcLDDC%2BObn53V17INsURKRA2wPuEOrYeGPVXtOSFCQ0ex04wGGyOPx2EcRj45V7mQUxrNXpKMf%2FrFwtrVEYdrZpvH8fGV%2BTbeJSv54PwDqPfHdL3d5N9WBhyXDQN%2FEWqS67dSrYL6k8%2FsIch9ryAcOPYK5SA9mNdA0ZqQL0pVIilNaUwzRgimSOb%2BuqZEOA3ywh9A5700%2B8TV7bl%2F1h0LeS%2BaH0DslN4xvgRyacpfRMA%2Fw6upyr4mT%2BR5BcTPuIyfV6AkbUVHCZIOR5XXAqksufzTj31Y4WcNUHZBVCGUk6%2B36vyyGcJY6xhLpPGLbnQO%2BDmziQqTQuIe4ohsVSaC9c0miNeyS%2Fu%2BDE5eOHjc4r0muGaMnQb55IuxnlgUpUJxSQJH%2BE1VqQUGI7URCZaZ%2BV2%2FzxyyjvSTtDtflYeoUQkr5XGqOsHmzmRcj0Ea77Z8hJAhs3NyPnsBKn7VOvZCHv3BGScdnAbqCLAlhyZ%2BI6dhK60RvgtP4geKfL6GXzie90C9X%2BzSGaXYd%2F6ZZqqXzCVDh5PajK%2FdXz2cnigr3nPRe09BGDq%2Fmji%2Bs1js9pK%2FxLHaOBnJo4w%2F97wwQY6pgFqf7vFGTQFqhmzU0GrCcpj17ZoxZlzrVznshdS%2BEMVD1HypUefNG5MghL05pPpOdAO3UvSCjfMNWEYfRxgptm0Iuc2H%2FZ1CDEqYPkAoiZqYDA7smdW7y2Avq7dn6MzvfqF5iQ4fgtxYgtp8GSXrz3rO3K77qNi9%2B8%2Fu1BwtN5ev6F9z5nilsFVDgDpfOjnXI50VpQz36D%2Fhc39CaxwYpdmPdOCI%2FTD&X-Amz-Signature=1d60821a173493918790b89fcc13568fbd45c16977e8726e80f1d10a5ec70406&X-Amz-SignedHeaders=host&x-id=GetObject)

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
