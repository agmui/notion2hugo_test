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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AITRD7%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCzoftFRNynvOB6Iv%2FnFg9VVp06NzyU%2FvnIBDDYvijXegIgIZJcivuhoPgA790Cl28QppoNM1LEC6HcQ3sH%2Bkf%2BHS8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIyUDf2YBfywZb4sxircA69zo97pK8A%2F4eSiMZfrqf3Guk%2FdnU3sFRzbWamzuAvFxJUf%2FiKBQ2V3auUFGHJI5LlbM7odNgKA7MHrMaZjps5jL57bg3fkXY00Lfr8X5%2FgUWue%2BvwEr2oQfldfR30pcgxw0pco69tH7BqoZMK0irlH2cQHkQlAPYY7gzlLDlmEiJmtSpul6QA7B7MIWIju7BvmndygMSyJyWiV73ZE8W4LIWoW0%2BcxzB%2FwefGqnePKASC%2F7vlizTwPRU7yX99IhbePy2erBoR3%2FHkx0ZuTEcjUrZixhqOHEjOGKHN1txmsqYzcpRG09SjWOOWzFEpa%2FHDMxdv8Rk6p%2FdtBYjSge1IXNc3ZnSWayk7LeH1%2FBlP2yZtNN0r4J8HlT6dV6HKX9R7Y2S6x0D7NFNRdKx3AfzKeYwnOMawuM4Q7sbqnemy0EEXhVLjFnsVQwVu5Aa4gzNoyPJQZDziNccraorPSG0oLec5YCVhMdo2cgx6EEnaS6VE%2FFpE8xZ98gEl9WnN7juRDmgriybcjtOmnwNR6xLl1CRlBBckQkTXSUmXr5y87Nke34Y%2BvNOKVV4hQwIINza3MF2kviV7Dw%2Fr%2BXk%2B8VlkAvKo5FNZLriFxPGROokaCmiEW%2BpCMjyym6VMrMP28%2Bb0GOqUBNfhhQIEhbTUxUUPakWtOFHwrctadoHpWGSLYM5zSFHAk9IB4zUyorOSEza5BdAzg6kBWEHTjQp%2Bz8aMwNZKMBp5J2VCZWToYYp2PcyCVjjHwNW8zzyxGzU%2BZB%2BC%2FJ2Op7TB2KN8P%2F0zmNnva8Fi7SWjDpriM%2BOq85Eb5lRM8mFOC6wvr7mED%2BV1x9rR1CXw2ulABW0jFC9BMmTIA3f1mSuC%2FX8gg&X-Amz-Signature=79aa47ee4973fe39e12ed36a0e03a336aa27bd1313e8a08bddd4d3907b06c150&X-Amz-SignedHeaders=host&x-id=GetObject)

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
