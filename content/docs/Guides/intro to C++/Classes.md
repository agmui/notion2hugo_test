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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOPF5K5W%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDSMMWFtmbYjDfojlLqzHUmBd2UXIKovXYg2%2F8QeIVudgIgHjrR3l2dE6yBCB6awbyySnNyPa8A5HliFdAu8Cu5iXcqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9VbVZgz4Kko0cNsSrcA2mfMjHYyu9OCm1S6xH286WP%2BQUOceE0kCTF0%2BV8It740h13u69PwVrmWpAyirehTYqYFKn1ln4Jz6kLYkDosr%2FHq5Mh4%2BVRW2QvrY8qLlercPNcZiT68qdwtzZghJdcYp0hbxsQVf6bqpGKKeYtZ0NqNpLhmD%2BjFQURSSfFovoeWSTyTFxQ9Fr4j55RL%2FMmNQunmo5kBk3xnYNVCxNlel2Dyv5CXvoTXImo%2BLIFh6bhBTJdb8Pc2m%2BxNBeMEEPOjcxJZln%2BjIQniQiAz8Ps%2FP3LIqeTOZ2TGFO3dOeOp2Of%2FKPOaN8TQkk5jH5IhC1kiBOUzCSOYFvJW%2BGQEXB%2BIXRMwxuRNFD48Nv5sy6de4FhWAQkhGh7H6AN6b21tUz1bwFRy%2BS8qVc064uIiR72Gz4m12mSKMZnhu8iohTkk3RrqH9Ahio8IsBrJl2MRnHu5qhnTFOKGT3FAQcDN5Mb4ZOJ1NPOx9Rp%2Bc1bxTiJSNYrKc5%2BdO0357Vz%2FuahCx8s%2FFRuW9aqbbT8azWubOehoVqlxuxygmqfqYKPfMEnVMs83Hz4MNr6ruVjGubve221ydvXq34MEJ8wt%2BxqQC1AmRVMHYUEKuWcimD94uGC2Cj%2FQ2iGe2h5MY8YbnRQMPWvhb4GOqUBTl4SYeopbTOfriFXGLsYGTShTc0zeEgq2mrehsoN9JJBZBRwQl70xwKfID8KSFKsSVKvplYBYVKGM1Pi35Nv0nQ1HkSJ2xpRgLA%2FVqJekgLcQ7ywFwnoeE%2Bs%2Fix79aDobgAgWt11mSWCTANZQkFuF%2B2dLVrVqRxNNVyoynzTFX0HPI0O%2BIzy%2FNWkIXSOcjSzHHJ%2B57MGMo6232EK%2BDVRZu8Ou%2Bm1&X-Amz-Signature=dab486ae91a6f6a552f376b4ee4d1815ba46d43947c0f2b49c2f90e3caccb533&X-Amz-SignedHeaders=host&x-id=GetObject)

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
