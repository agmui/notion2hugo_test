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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQQIU7F%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTZcRk%2FK6Mi3jfk3OIeM4ZnzbP8xysgKYQsHJ063chYAiEAjuTtCmmHzHuNco1PWH7YcPysTC%2FEuwmSHZvsSIJP01wq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCAy81lu0Iv%2FYBQ3nyrcA1LUDMZxA%2BOGt%2FVZIe%2FI4zVFzcZRCUlYOKdKqT9k2%2BYoD%2FfdlsppWXpDhPEmihwYzSpmDqFV63xqH6pObX4MXR6cGK%2BSNzmk5jlWgNJTJZgSA9ZqKBaSDOWf1WYI377FT43tbq9QIGJDTt0AsmcwVnzsgVogTdA0oZjmdLIb%2FX6a41NuGFD0u57Man77qb4789zDcNZSD9Lj5nf%2BfbYaO6rmgEG7pr%2B9f0tgPRWOXl%2FTMcM4KC%2BzafIUxk%2F4fK3%2B0BiAO072ediQDUx9%2BJ2jkkYotxzQ0TiylhRMr7ph24fCsXGOiOmWszdxjioYdbYFdlH%2Bm0Fq5LqIP%2Bmp3Ss06jRJxMeI15a%2FjgVl2rKGwU4TCOIoDef5sUC90TBTeN%2B5wyZcUkZwqeCzmxW6RIdqYNAS4VAiCcqxA0F8%2FxR5ro4a8wntdpVQiQQuvQOYk1Snv1J7wn5%2FBqDXGHKMb3EcaJ%2Fplk5LjyO4svPqvwXP5dIlrjy%2ByiHH%2B7YHwqOpqzU9bm5qCmIATwwrQANQOM99ZdqchByLBNQrQyTEsHum0aJcYXGvO70jk%2FWq9s5Y2TlozBjUDtq3DEMDtLZsF7j9rZqieHgotIleme9LpePsDX54NZC9txhVEsTW15KhMMD7jsIGOqUBXaMo%2F1Zj6WdUJglLforvIyVn%2BngZxcysRaamAkKSV0LO0WOG9OPekT9SCWITtwJ4sKaBmEPFNhHlw1p50tXMdJT71ZNYHEtqa%2BXTiOs3BZyoY0QGwfaGz3k3YnFuV7tX2Ds21UwYYZKaEvl8E2pKj0DEzhjny3wPM5iXnSybGSMBGQF4T3JT7Ert09Ac15f%2FwrQg9a6Lsl%2BFhVn1zqrDBcYfbVle&X-Amz-Signature=5f4459e504ea906a72bb36f9bf6e1ac29369ed5dff7ad5b1472c319d221e0079&X-Amz-SignedHeaders=host&x-id=GetObject)

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
