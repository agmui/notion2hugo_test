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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPXY6YNG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc7hwlWKHP9xq1%2FIZWS0y%2BMFmMDvXYQS64V1pC7UDzdgIhAIO7gxiMK6yzMj4yOqbspliS5fy%2B0nXW2yjgMbkyuWctKv8DCB4QABoMNjM3NDIzMTgzODA1IgxTPMxXJ2C3v3DSkugq3AMv8w%2Bs2RplfvMWg2wiajEQD9%2BBolg8rrAbKHI5iz%2BvAcnC1x7k4WSK3DYFbeOeclxKtOAKce5Q1ZFbY35TAPEIh%2FBrQWKcYAlhNq%2FamV3uG%2FJL%2FX8pDqiEKZ2KCaE03efcXtsl9CQPVvtvex480rYHXZ6WMZsxRTz3G9AjA5OX%2BwiIAvxu7TqXdPwzb4MzFOFBtJV08RLkoo4tJIbq%2FhzmZDVpGR6%2FuOsfKIaDIaETO39vTM1UgwKZeqQmaQcj5UN%2FY6itnolMar2BbCemJG7N16C7psgyMvkdINm03CJyBXEPsQ6FhRbA60aAng6PQPYfIHlEsZ71TV%2FBDYJilwp41c%2FySnShqzhqTyHDK5whhbNgEkmTGv%2BMBHq8CeC%2FMI75%2FO3%2B4NKb9lng6pUCvYuSeNtwUoijhXTIjGsON8AlO%2FHfYjGhBU%2FsMWyjWgZNnIhaxMiFBr1sdvTY7e87VAnBM9eLZMr54NQ1r2vpKwgOLuFFRKPCJ3c1ULn77wHkEnDdBnkMj8SuMs0ZjHzHK%2BEHx4bwzXNsr2uduBHaD%2FIrlG5h%2F%2F7nb2Ei3JT3rruhwWmRwlzKgR4vWhmMJcNaDxrMbmemvN3RQoVzb1f12vj951RFDs5m%2Be88GzPlUDD7q7m9BjqkAcpmgAgGsVUANxBOzJKfK%2Fyhhu5L9fHIqeVJqngvPnH1HeA5cl7Xh2LOrGcVIW1QPPrxcsFnx5NG5V%2FRrg%2BsXsV9vi4EFBHmcD426TR8A6bJzsRTNdupo%2FUejY5%2FFhgVW5X975O5p7xSRBfkAw44IvnBNt3hR9oa8vNSVkrE3THDvW7l6oj54QL4SnWkZljM189XlZGFMk%2BjXdtQpsPKOc5ndLTd&X-Amz-Signature=1a8bc615f510168aa934ed90c04d69faaeac6fc5bf9af058a8726178ad8bfcbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
