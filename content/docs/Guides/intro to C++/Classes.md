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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4KN7CKL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCID4zfQy5klzPGHmWgf5reW3O9xCBY1fWNgTLQajC0ZU4AiEAyVzNo6H7Wyokj5UNTweQshTU6MYQ%2Bn1zVHYY3ADh%2FxUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOpvhcsHHU8JHl5lBSrcA19%2FgHvEKTPiirnR50XVad06YilqzR1AjJx5fOSm%2BWVieIl%2BP2xUJly%2B6GcHGhlyuTqje4kDFAfaLTmeA6AkUTuQMVNzdPemWk%2FdFLd6ZtPoMqKIulAeyhsq48WgXUtBM1UYiEBEEzGogO8kvXtrWhhFxvmuT5KTUzN1OwSuYLunGnzC3IY3ZvRnKFk7W%2BFdfQqyhVa%2FMOv%2FTiK6hRL6FfT8LCAL6geN3xGKrxm3ktJv%2BvkMW7ghMlSCRcwYXdRl5MDSsyml9cyrYC1hnTm6n%2FqrEH6kxxCM7PmQwU53H5alwA%2FdL49pArECIetcdFEOJijl6hLrMyATL9HwFO13loZgmg%2BymLv7VWANdRfA%2B4NttYTt4Ap8VQ7HMHeJNLTWZ7QaS28wec5palY9WPG%2FTsI2E0TUZEqTvIemoeH58fUfzQQeAMEhZI2lZs%2F2Id4wUIwqCNv%2FMAvwJJEYGyrQm%2BB8BuSmJfW5cYEsI6V8PnkbcoGw7TQ%2Bmwad1dFwvlLdPsIXsJb5VUipzj3IbfgAOV2QE1QiXq19aY66Hk7nsDda7FREi3dyRMHUVUSD5yvOJ5SZZPkd3rxDQSiYh9gg2N11XtlbaTYEDkH5xxKGO%2FCoWuHR83FG2vVTb9ccMJzFu8IGOqUB4ZcB3dbsjIsqxSOpFBvsDzJEIwN39IFnMToUrof2rdJJf%2Fk7dfoUycU%2F2%2B02gUYc94azZDVbHY9ijJ7wDRYA5YBTSPqMdSDYc1urTWcktg%2F1eE5qGD0eLpBiSp18wdKILPiMtDmSXBTITpHBjrdlcosFljuNgRwHw7lIeAri6QCVe6xD6XLUT2u10Z7zKVWHAjuYEI%2BxWc%2Buyd3A3leVcFefzEAM&X-Amz-Signature=1f4ba9f662e96a833e8c8dfea254b65c64c0b0b2505d640da66831d00cf2d5dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
