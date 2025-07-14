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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOIBCWGR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD4e8fUWhYN8oFigIoHhFcHQFiDHdqytjo%2Fz3Yh6tJ0AgIgNTbVaxWQd9Lz0AQJGzdT6m8Hg4C7jC46%2BfMrJb3Q%2Fsgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHNuJHDljf5LpK0sTircAyjz2mBBsHPGCTYn3rzgwfesuy0s39Xpf08z0P1HXP3LEYMcB4WGsuuYd24osGrT4c4df7R7d3aGkV6H9MrcDQ0Fg3Lik%2F4SXdeWi7SwWzoOwwHcLH6dQ%2BarFcfs2YUjym8gW8odeVLqihNxPgwW5PQnypfniqqau2wr2qvz3O7MYHmlLdm%2BENTLmThR69LCbvu3zg8iIZe%2BvWa2MgWkLKH4vXWIffqekXH86%2FSBa%2FEi7vfrYcHCtA130VVHdmNnawRYsYFZ23eO%2Fz1J25sBUuTID5030LgUmqeRMq2q1HB7iAAIg%2FDthxWkQfREUWn7QidsHy5Id56sKGWTAsdAbRjktC1hXPJn%2FiPIbJk0b5IM17iWv%2Fu5n%2BDaf%2By0ThuvgMAu74tiC6gi1D2CdQ8dKXzwlZ7ReuxuJTnWKk11maQrn5PHhMAdK2fSzzdWKu4eJMgDmqtp0ELziINmCNnHUjMTWj4ap0KweyFgpnAF%2Bl%2F7bfj6Ial%2FCdyk6ItuDnb53e4sxfDdkhbPlVrpolTjgR2NNUr8QHsHMi7crWOH8L4Pn3RSC5K7kgXQDBylEtGzOle7l7bgN4cHSgE3L%2BBMzkwHndlvjGHD5ccUP4Tg0ZFTX6gimsNiU6cUyrvkMKXc08MGOqUBNKpmHwGyThQ23ikGcn14L2hep06ZdzoELDiH1sjqe%2BwWGJ4qFGkefd7L6OD6Rsp0kcKKN7paxgU9zLPCUyTp0V1vght6ghRwKAEhyYFSSu1THzHEXgIHlk8sS1YLVHRHsuww66BxMZsUAozzqSj1OTI0TDbjdK9PykVdhWez1UJ5qyBgxTs6PODM2n42QdWuAtwihbsh5Kt%2Fa9cUXsFjY7Ea28QY&X-Amz-Signature=db4444c7dbd497b1c7b28c8694a325faedcc6b348aa44f487c8a12975f306cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
