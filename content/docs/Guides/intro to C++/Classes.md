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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLLPHLPG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDf77KjnNHS8V8yUIo%2FRvaKMMHvfIGzq%2F8IjiUcbgYF6QIgfNMiiXdReqzWS1mOOY1%2BJ5aIrw8I00EHSqksMcCzSlwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE79LnvTuYa9x94RxircA1CAeOgQs3vuGE7aqDXmL%2FeaqU90YV1bmGgzcH%2FWCPG%2BkQPgq%2FRnurI6ITBSk1J4wGZ0lFBbJCdQ0%2BHSVXI4EyBz6dlG7YwsK2jJXISm8tlijDr%2FttAdw5wfHy7rEFOL5kHzBNC1PzRS4sT8Ian3od3TtG3ejMJWxtJ0gkFUNzb6ZDZYaSXkbaQwhVkAETyDMUiLGAhLHXf7t2Uw%2BFiESdXYNxt%2BdqBKlP8gsjOSN7j3kYT2EzR9t6EMlBJ7ioawTqsvOc25AOdbGxooIr3XKx9OWscag%2Byhc8Vyf4OjL91A%2BVfu8mNrBhxKFx3AMAK1e3KFDqBJ0eI2W2NJ0DkATLG3eTGMyacFejL1rv8W1a7c8UbjhH7HYbewDB8BkY0jZK%2FQRUmvo49j8m8kE7Pmu5K7H97CeC1D97LAZ0mtasctYNbiAMiLbFeRo4WV%2BwptMiH%2BTrVlS4zVBn%2FwAjp0ny9OXsF2IaVb%2FmjWRZaq26lHQZeYypCZYtc2fR%2B3Chsl9p1Guc1Z394PihxMQuohqdjANMJPU25CaWRcM8TIhzk2FQhMC%2BeKe9uxYTvXFj439uKxgXN4%2Bks7zasP70J8goxK16Y3q%2FwqcuaB9gaJTVn%2FHfLGEDXZLWQqyR1QMJy72cQGOqUB6buXU1ExBvOBmn2aLJL4rwiDGUmSxD0TB1pNAXmyaWi2FCctzaOIo0chG4Cgl5ARrK4lbPIfTFeFzzLPejfppo0qhs%2FI22olrv0mpUUgUpcdypbSdfwq%2FAWMHZLwDfl8FOkg38TzgRM%2FdCg7NlYd0FWqfWXJzeQxXOAn6UM0GeDVfjpYoouocA8FY%2Fh9Z%2FR97fyc10eW0ZvrnXPjcOdeLC7361Vc&X-Amz-Signature=e8b10f68a27578476a298e71fb325e20a3bb7203a14b6ed73858c6440d70f67b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
