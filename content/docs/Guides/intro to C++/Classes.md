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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TKFGXGP%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb9sYKncRFZitRFsS4zEzWWY2GZfwLxKg2n46lX91CGAiBpOrVrJY9suO9taxK42htU2en8SADhls3HEazpdfWKgir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMFeYTR%2BI%2BK8X118PZKtwD8jAMxVOayZjl8zHz1Su5GyhYR21c%2FfCc7s03teZv1QzSaq2baYD4DBkZ%2B7vy9v0MJL%2Bq6c3mg7gVWBZjYV175jEYU0ylIX2mLdXKd8gzmxA7zm9gzgZPmD2jmKN%2BTVQGG%2B8XHC5qCoTJYxXonA15TqLbsJHmVro2FWIMJ%2Bw4OD%2BrPTubHD6cqghCa6GPBUtwMlSz9GugSmWtUAWc3vGjsqXh2nILNN0M9yAqlcYW13%2BovshXxQkhaGHldtu5UCJxfrI9m3BIlpHQDEnb55WjBZHP5P7GEh%2BuCGrsDvjIsZzNJ%2BI4TDTtKM%2FCHWiL9qCLqHDGXYyc98iMcSz3BbQuRu2AXjeDyEeG1AcYH1OMy9j7bK3V9eCHt0xlDv8JKXL6qf5SmTu%2BEouEcXtQ1vc5Jjz6RjAhgiFff3rT0fCmfJhO%2FhQkOKIW4SLGXVha90s1oK%2By1hFfsShaZKK1NF93DO2GzPFljb43%2FCc5dXiYEr4NG5TFlj23EKbrNy4LbuixDy8juisevw%2FDs1c6FDgCoEqCRuzbfXrliSZk187VTSCvAsPOJ07cCKazVYUD3VH07QOyDJbJVNTGECFJ47MKqB9q%2B0GKYM5NQrorwbo9wbp2q90PsS9k%2Fb%2FJKM0w5MqTyQY6pgGHti%2Fi%2B6XyJ47Q3DBwXgWgmYdy9LK7SUsySrJ3uElUu6xz0kmge8NqjCsA9MokDix45eLjJysUhcehSDINTf%2FKuri30pxNkUyhZIoaNNMq2FrGZ6PaiomqfvLTalQap7jaLihPi9eBBbcYTCUmCoWzfD%2FgqNpwvNbOw%2BLQRR8o1O6Deonr3CavLLKEvKpCZN0ElJ0onR5k%2BAPj31iUc%2FP%2BwidMufSZ&X-Amz-Signature=d104dde4885217a61f66f0c1086fef8b14b310fab0125aec2d9adfcacd804d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
