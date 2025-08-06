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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF3GDYO3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIF6AzotHVCWSZMWkFyNdaaHeemUC%2B%2FzLn2z5n74Pzp%2F6AiBTGyPQPdrbr2RuSRJ9vUEuu6EGIY98j9f1tj%2FOHYM1vCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMvoh4YJDR1qZotyQzKtwDA1T6pt530GKTAjGlksyRFscuzDCMA6ZN9BjdCFls7%2F5TTUA04ENhXQfxPFnVUogaYMJoz%2FSAq4e2lGkPWKrq1Bysfk0HV0mYj4vu%2B9DMsIjutQ%2F1NkucRyQAC%2BxuF5aiNZc3mBELurmmvnRSn1sPRcRi6KTCwMpnc71Jn4Hg%2FuWNevnVCYigg%2FEemi2O%2FzixsnhZVVxOtt4cN8YQvZieoTHFH3mvvip4R0NK9UYxN4wkCu7y0n0EwbY0vEXrwb2eNsWOAxtxKepIRg%2FM7%2FmKUWfjZyUqn6eBTg9eUfqTeZ5ulmU6spD%2BCkpA7J9kgalyKPG7OkjN5OCTzNOO%2FTqUlFepAeMTmZ%2Fdtfnt7R1cOP1ZK5V9Jhsc72t57gSuirfgwVdhWfLADCmbIQutgvtjqgHRRZsSPBU53%2BwgY6agFSF%2FFCG7hJ126VqHalxZGMIt58gYM1Ofoc2BzrK68FxBMFAzgbyBOeydOQ9iErSrWZQyH6k6EQZCLJGhvDYa8X2%2BIm%2BtCgFRIxFiV4ukmhg24nfpOnC96ViK8qDVYwkw55nlh2dQNQFo37c9e8%2FOv%2Bqk3SQvvSVpouEtCMAJEC779P1%2BJ1ISGOnY53iDWGE8jp2fwVZ38Cbkg5oVnQAwrerOxAY6pgGnq9HN4mH%2BAtQUKsw5oWfte6UBTpmZQS2B1LU7pArBRM73xEB3OGWNJtb3%2BqhPZSs6pYOLJ%2FHGrifjcnByda6Jt05jSZFWOqnbtvtVh0mpx6fIBdZHtibAavnwJPrEU876pfeRphfCAFqw9g%2BddK62%2FvsIJueoWeIitrmgkbZifIqCmE%2FkY4Fv5vEF02n2UhPTErw3vvEsBRjhFUxqmei4fegNBIvJ&X-Amz-Signature=9b1a32fc9bc0a40e3e7712141d68de7e8542b22356abaf3c1d0c7be08935a687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
