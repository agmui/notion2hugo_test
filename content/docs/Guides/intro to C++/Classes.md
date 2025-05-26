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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDX6PTYF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAhuMWbQadNSnzYVpJuqf3%2F15fftB6WXuXw6R5xJQkrAiEA8ag%2BQauepCkMmbvmG6BOXdUrc4nMDeeTzwMbATb6DrQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHS66EUbQD2F4%2BF%2BCyrcA%2BdpOPnCRowQF1Zesf4oDAwzzPLAykDhThPgwCsm4%2Fk8QjC9B8AIVHNX181jcJ2MPKxBUrGef2nxWrX3BXUFl70xBIuaNfp0HFhsyxfHVXr6s1%2B066wXPMzEJQpQT%2BAMZi7m2EQ4dwvqEmJPXgNcLumVgYylP6o0pdgfRuRRAmXS1zi23ctZPhbCy5uDUw2maTEA8ptR0x403%2BV5VY4e5Y19Jx5DXNEip0jr0WuerqSph1Sb7p%2FpsaiBp2eMXtLu77mhGhmYA%2Bo6n6ilA%2FOThSgIRiY4RSiXHLjD%2FORcCFma692BXX8Qyame2B9Zcxwq3Tm%2FfhJQ%2FzNOP2gKl8Qz2WuqjlNFgEa%2F9v%2BwGkcSnnrfGovJnll87JcJKVvdp%2FhVdY2%2FJ5Vd%2BBJHXf0hwoeduoTMOdmHhSNmwpsocsyq2FviMUWTpea6%2FYQ%2FvrvL%2BMiM7zsv%2FkFWRHoRWA2%2Ffb9iW%2FGnPaqfaWkj5eppf9OXYrwXdFcQgFD3LuZ%2Fo3ZyJd8r%2FiZAmKkEqxAGVmBLDXpG2vJL3%2BJLiGXzMv7YeuHzvVvOEG7wOtoH5WYbZQKDmiYPO43jBVGpVzybqGu5NYnUC6DAg5qv9Al1WtgQ3lOXoX3nxBZrQGjfrWCnrc1%2FMJ2T0sEGOqUBbS7l6xt5wqvl44Whizxl%2Bz0VIp5jl80SDHdszrWonqxwZMp47PVh7Iceh5PyoNlycmiIsl7MV9KQJF0gUUL67zHmYy3O0NJv%2BXSOef0ZK0ygJ4hLXq7QVqmwtYSh1XPpptqJyn1%2BJD4Q4lCNnHgiweco97%2FkpRCpMUNYLEFOYU1Ien97Vz5FGG0%2BaStWaAFu7TcygFPvKBcwzRlqvneUJYM%2BZQpf&X-Amz-Signature=3a32e2079832b6cb11bc6a782ab4c6455f747a657690e122eeb6d53e749183ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
