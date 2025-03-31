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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNEHYZ6N%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBVVahbuiZZuTEqRKcwW31kT4jK2HBFc25p9zWcwYK9jAiBaH9hUcrQOBCPJ4JZZ%2BnIQjn6XtlcD2hzocr5%2B9TNriiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKZV1tUwxnq9N7V3GKtwDtTMfOMd6sF4y%2F0ZTIQaAQjyj21DaEvaBpGkRHqd40IuM23M33uy2LI21rAo%2B7R2udbWG%2F4Ul%2Be4gRawfjOMoB0vk2sW9w2GtqcRVVQ6GVjYwg6SrQ1gsccoVISMz2spEGh0j3uFhurGW71JvW%2B6prBndxpSMiIh9liSHigt4XyrwALh%2BUzGiD4dLBoVc2Dl3UdiTLnXm4voZ%2FsVcWEkdkJeKxps7qk%2FI7xRHOPka0ahaipZtwRgFxezEvegtWt%2FK9vqGwMqjcLXxZBI4mFGUQh8FHjKC97Uj4Fbt%2FZ4t%2BV2tIQx5Dq1ASPeciKrqL8OfQJbL9c4MgwBF6bwcnjhj0Fy2C%2BMaCf9EDYln%2Bjg07PfphNYNFKRuw6PHBkAoO7%2Fj251fLvtF9QWPMHHVKH8Ie%2BXpd70YP8BeU7D8nAAKUpcD%2FrS1HAF%2FNIntUBnBwVwepiprVpu5UOKiA9na8%2B%2BeYsHCQUmCCq2V92riGhN%2BdYbpKYD7Ei7vc69T6AIPkyYfuUV%2BpnQAwBEaa2e4Mx6R0xxgb4yidKEYRhDBZ8uCZtAvhhUJ7rSruO3%2Fe%2FlLw0qDM%2BW2zHH7%2FNf%2Fz%2FZg0%2BZsI2Cj2nufBeD7K1VVvSB9MZoVTtO%2BlGMmZ%2BDh%2FOswubynvwY6pgFwn1FMAc%2FC9P3eFSKSC2rGTXTtvKzHGHXuPvE4TbF4hpOnHx2LqTH6r2DsihlcTUj2t%2F2KdVzOozaLjBAKZJl35ozIxVNrdCw9YEJqcfKNTA7N3HgCNmsCchleosLI1hqL%2BJDJgA2bJLqrpIeZSZK%2FrTZWjyQI2aX2g9DHuWkqJvtP85R8fxOLpAjf8Bdrz76gogCeZf3l1w0aqrEx3p%2FDm5YgeWKc&X-Amz-Signature=6a07bf46289486802667ab1027e9fbb02073339acf4099e72533c90f39330101&X-Amz-SignedHeaders=host&x-id=GetObject)

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
