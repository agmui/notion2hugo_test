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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REMBBZYN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIG%2BTw5Jmsn5S9ZbPr%2F2wEKEhR7HY7peK3OSvj9BWm%2FzrAiEArDpBcP%2FwHgiskIhAcw5BRxidFfZUF6cPuIUUehgTdDEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHarlTXhUkGR1CI2sCrcA82IIuiXIs8WVjgGC4P6fzXHrxVXHMeze79QZEl35JRa9x1XVwUDb6cyTqL8Oqqulje59jzkAens0rJGG1TVAQASvR1HMNvPWEHqDjONi5gnjPHu%2FIbCO53zRgpTM%2BYTsy9lBKFuD%2BpMM0o2zvAL5BFOf0PIOhIufaDRxA%2FFhTQN2jFEMZ1rF%2FIQjuzR5MJIdzw5art2RSY3n819bGRNTNsewWzEB1RTTl%2FE4%2FNKdCHPUHv9FsfZY0iNkp6CFXeANonUfcDVRkpIw7Wq1n5HosklE485y9CUzXn%2BroLSktEH2J0MZNmhRhp6WHSTsga9a9GhsPqcIl%2FxwoWX8U1PXmvJekg4QTrCOfGfvvHWyN623S94TC0iUfZBCrots%2FoXpZ11B%2FpPEFXs6l55IWHTA%2FX7HXkKhvAhKLCQxmGAfVF%2F%2FCG0zpXNspCMqmlsPfmhWpfseRUuSOa1HGoFSR%2BLiTRWdOJryKhnF9IZu56Qf4IjpWRs9D%2BJw9ioIDgE%2FzGJf5SgG%2BFv6ijYNkvwvVwFzbiqex8VDzXB%2FwNINqdXNoVQRC1xFTbyCsa%2B%2FDkULuZRgOemcs8hZqxN34bseVaHsdQCvx6g9idIUymyILmIlSYn5%2BQ%2Fc%2FfIkyqKIfmWMN7egMEGOqUBPUQTLcVCXbXO2ACf9I6zlupYW83CVPQm9EHtlwG4fIZYauFONz7SUphg0OWesCC1txM9zqIW0ukZLvluWYrB9bBPr1SSRkgAB4DZSXqTJz6%2BiOhSpV%2FhgJ7T7m1sCAbQBHiRAICZ2yFD7qnqJ9Hi3%2B5WxdvjdcgneXrmqm1Z5WhvpaNWZCQG10VTkLg0B1oV8QVRn%2FVJkJXeZmH%2BAYeNEmAUPCnc&X-Amz-Signature=f27fc5556f591dc41784543a03be36ac2912c487091e5dc13f9256b99b171175&X-Amz-SignedHeaders=host&x-id=GetObject)

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
