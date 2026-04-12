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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEUOH4TY%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5UHhn8rAzVWQGIG6sOx0hMKqGPBNcLq4kt7FXMJprTAiAEJU8iDEQFeXa3ASp8eSJ2jlD6DFOGfGs23c5jCvyxwSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMWtvw2lAdef54dOr7KtwD8ek6yBIcqM%2Bpz%2F8x7wmW2StI8kfXw3BNAfwHCmJobqqQt0eirwKEfpVuu%2F7e0ukr4hPETKYqqJivSbO8rqpW8MetSFynYneiEm2gTQ%2FGkAb7SacUx2%2BH6woYIt%2BXKjaquGJMuKUTlnBKlKjAfaZVLrwnkSJWe8%2FB85pF%2FXXaDCiAMRsVQbqZeQ5hHbpzJSHNmshDXB7hz%2FSO%2Fx4jeDq6hkLCxerBRyjvDEKE8SDlEpSdREHNSvbKA1lH%2FTeICX0c%2BPM0BEdgM5yBFug5%2F7HIkE1EP67fC9bFtVRn3Cs343ApIdEUgBlAazPOxbcZqHn9AzX3C7Fz3W9sEiEoz2j1tID%2BCu45buSlioEzgtshzGn6%2Be2Lp6XikND7bgb%2FAdi2Zu6jB5DuIIqHcO5mdMglBGCZVojGApG%2FYIggVZdjxN7If3m1eaq9WpNXdlTrqmqRXQQCjZhFrpjCwe4ZRy0kq7WZjXXl0LMF%2FJGh4Yb7Cv7Cyn6SJ4stLWJaUnoaVQNbMVHBgCUuQTdUmFOcYIJhL7QHaKBIEniVlF0TJT2ZvJX4ZgXpMFnPKelzzR%2FKfvYZ8ZyQuEah3xfK%2BZm8EIm0IL77zIk0eoNjUycml7xIRHnFkKk9IyFsqBD13QkwhonszgY6pgFiFhqJorMiHyqco3dAd9Dvr3MVaLT3ph%2FvYouJ75rAb8rl3SMKabeuLK7Tx4O8uEtA88738JElLzsifowbnTALVmwrsw%2FcBJ9CcQh%2FIbLO8Tq%2FTtE9EFGnSBylOOsAezUJ5JDlwlyQnilmsdV9L4M2gFE1oe5B%2FP85gZwlzy%2BPixC7fq9EM0qJPp0VVyFSWd4rAODepBTjrpvFLci4zx%2FsnyO4Ao3O&X-Amz-Signature=81bce04500754737d05eda6e3bef9b763966ed8454f5f6eac93f141cb6e81859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
