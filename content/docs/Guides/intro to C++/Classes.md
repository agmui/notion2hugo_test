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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3LYMQY2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDSma20qzqAuNijll0HldMuP8Z4AZN1gpe%2BzeGdN%2FPynwIgJu267XxcE%2BDQkVw%2FmQP%2BHWrjeU0qP4mQxE1TXlhJhfUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHLihU15W%2BByJqa%2FDSrcA6pLQor5W4FBN%2BNiVBrRkEqgxNL%2Bq3ze2Beebp8cA1JnKGShLdpgmyF7X%2Bi0Kkaw3lZwJtberF9LdakYq0rv8%2BNtLsgrxaQ6p6PMrsBUtPeqywoh1WinBCPGjI8Kt5KAlZ0qtk6HmxQ8AoRjl6uHnSlvY5EKIa1ymSY9g%2B7qF6QHQAsyriv4M0ry24TncqzIJKvWWVMZS4KnN2m4z1pm8WK7B2wECXn9FA9SzD6YVi7Zd1mOJVf6ulfhr%2B3EKlb27kFuHPGk4TV1eLEjlu5qPhNCBvofOJNJIC79PFlVl6GYeP9QKpvzJZoxUY6XjgEtB9XL7Z687dZUwkoSjM7wly3UlSeP70M3H0m5FdZpz0OSM0qDG%2FJwvdgkLT5Z%2FTsopy4aQ53g07NIo4gGcc6RIVzMEZOxZwbtZoXXmmMAyFPZG1iCDa63kCyVrSp61ydusUKo4vtJpw95CrKNz1JsukBUCvAol0T6JR4U1z3beJDygLtMlj5h5cjTEH5%2Byi6CYkE3Y%2FejYXWG9fW7Ayi%2BOiC5ipMaE%2BkGGdnbKFLVKXZ8RZVm%2BaopnF9j0s3FfxTbwAFEKtZB4emfeeVenFBIBavf81KLmYeiU6NnQ4hXbzmcMCNTsEyQFI31Lus%2BMNyP0MMGOqUBMRiFkLFtvgJha1CfNgDr8p%2FF0PZtR2e2NELUo4eB6poFwrD5OdwzexHG3%2FOeiv9QWwHDrkGnNNo%2BVF0I6%2BdaOm6VjNptTfGOsYreOSUlN%2BlitzBW3J8U7p93B4dKCRq1WYWFHH%2BGTNcAL3nIF6Uxe3uz6Ty5YiPYdbPsxNzoZ4Q7n8nI016JAgJD%2F4jOBB54%2B1%2F8RYMu0IQlCM9siN44uiZ5xojf&X-Amz-Signature=c194d84143a91a3724d8dededd01c8a434ff06de469dd887dbce78314c289cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
