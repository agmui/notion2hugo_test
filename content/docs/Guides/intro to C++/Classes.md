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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DNKL5ES%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6fQU3zn1fQV%2Fw5unAVHTxk8WCKe8fogNSPVXTAyMWdgIgOWqKTrAzevCLpIJKsz%2F1eprfSrJcg3I1uKmO9NpPVzgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDATZEuZMf1fDUaqkZCrcAxBFreP72F5WYDVzcGnmec69wTVxfdDUT2qhdofAsqP37yV%2BkY5uUBZvllrixTBDvu3hUzB2IegM50lLmymXSk0VpzFDWVUUq%2BuejsX%2Fht51%2BR7xELVhT6ieQzZ9yKdgxFCEv3mwvN6eetWcOH5%2Fw6P8e2AjhJhBuepZtG5OHoXZQ1UJMpcwhGQ%2FChdi%2BsIIQx%2BYSBX2MIdUXQeS1OHFmQqP6OaiyfnwiuMkpJmx8v3gxU7dDOIc1DLGsvKCHY3UXNrUO7N15D%2FpcnfMZG0vso%2FLggK39iQcD5%2BH%2BE%2BXSvAe52rlHBOeJAyIILvZkqU6lg1nixtYTwwTVfBEWQlNRjWOO%2BRgxVzjHmhm9onZkC7Ny3MXSa0TK23tmrk3pEeQkG3EoHaHfX0NCwgcXZZwLTmNyqgn7Eny0fi1VRD6%2B4ryqLQsHJGCmToQmMMXVWj1ejz62tsCvxGfAzCgKX5t2AXF06QbFoilj%2F6Hy%2FQDnD670nkQ3zYCKoILUJVr6sa0%2FSx6KjcGmLt7al7nJL0mSJj6inhlJi%2BUcMdfmC6W2JqJOrxtL9cnIERJ432bDA0YJmgwrNQL8a4PFgDvQGlO1bmA8ImS7hJkvv1iQUUJgcKpjtsdWAiDQAYP6w0AMLj43MEGOqUBEzGQVRQuINQgK5r%2FlspqhRUv8dFb02kKNWg3t45CSLrxhooSnTF0skhgSEm919ESKb6JIxwyOTNnuwN0IhM8Xmf4I1DhlLxkyLaOsm7cI28labc1dYS24Bn9N16dAv5NjxVJ5AzxMGJMg81TBkkORNcRpHVd1%2BQUqUNBBHuudag8lhkeaXXekGgZbwrEX9rpafGCQHmAnVOQDWvhkdZswo7CR8pK&X-Amz-Signature=1b500160a83a4be35ecf5610f04207b6ea923fdf8894d595d72dcaf467e63238&X-Amz-SignedHeaders=host&x-id=GetObject)

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
