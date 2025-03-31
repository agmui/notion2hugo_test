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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG65KVGK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQC3Lnh%2B2XsR0o6FCuGxcW5OkC1Dxh2Vfj2nzNGJkeohCAIgdQUwjBxJ1O6DQamtPScePMEvhBWauHQq68cHYpJ%2B9nMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzsTeePMTJg%2FnsdgyrcA67Na8pbTySYvZbhx8tlwLLjbWu8AVoLp%2BA6zYfWcZydRfRyppxoSLhQIXu7jLc%2F87hFS6LTdAkhWKiPrZ0Z%2Bbulz1oE2PvlJbj47%2FAS2LykMqYvhnzCj8Cx5FNn4OSRfNNKtqB4hTiytbuU7Kcnv3z%2BVBnh3uhF8Yr8ss5uuNroFkzClj6dMVzVwRfdFCV9KHJs%2Bxkec3In1wba8D5UdIwKVSgXZSpbzkDHUgEaIF2QDaA3qTxV5Oq8aLRSI4veR20cruUqbIsrZs%2BOrsYgG3D5U59nwrZpwHbojC4euhs0A6GtKvkmy%2BqzOvjV0DmEHseDKZOuidf38wL4oqlxFjjG7JILrgJa91fCHLoi5k%2BrOrXzYkAW%2FWIz0Al%2FM9ZKwJw2KQQOwciaKbZLBDRkmjRdyGjqaNh3I49W1vJbXu2Or9n%2FPeVlGiIWwPxLWAVYn4I9cUc2pu985upou4ihf9ELonuXyDw5rEP0BowWq9UzU1TdiHCVM4V7%2BpYDEJ1eUnGVfkJ%2FzT%2FKSOaRipgy3iKEtdQ%2FYoG0%2FlqSLxBN3UyBFyo%2B1sdvA8AMeTUwpN69iWRF5917cWZLtLnjuzM3SpKFlqvsvAM%2BV6AohJabzJX3Glec4e7NG8LejE5dMPSuqL8GOqUB%2FfSyoED6gXaJ4J6MAEpZA4bpuMK25bUVRiycqzEeoJ1LbQSdZ72W0LGVUlr2q0dDB14JhxM8xMoJXpyQg%2FnmBb3HtVm6rdWLNKCITpOtCCRf9j00zfzzSLpHj%2BcL3pIBWMx6xUoAiYEayc%2BDS3TzHVhdmFwTaUR2AWGbGQcmnCAIT3t6FT0H7JZk2fMSxDQ2aMjGDiSmjbDnY26GWBQmHlO9i0Id&X-Amz-Signature=5f9523f9e742a4bfd102a1cd67c6ea4cd63d2fbb9ef4dbd2595227b8379610b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
