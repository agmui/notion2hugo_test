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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2PBQQP3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5ZPohDHv3JettIRX%2Bk7nXFpK5%2Fj40rMP4hfhDLGltyAiEA272LQL8h2e0LwFy0hwVng5PJOXV8HE64zQuvTt2O6%2FoqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvw21AhSSAPuZuLZSrcA3oED8kYEUoACuaSY3R5KqKHxs71dyyEMAcPdtovK%2FPHMB59dZEAR0cm%2BhgBG%2BvJEmyl1evFslJotZLuuhTq7TfYh8ZnYnko1zLPCoDql8lnPJui8qZ%2FAIGXCawPIfssTp%2FNYNCsNaO99Kr25k7n6Jl0QFp0cxt%2Bh%2FnH4BA4xFDz%2BpHe%2FKQI0auFSLXdY4fDetZiAaoE8LmvxoyhjXgvRyMZoUGhLsbOptqNRph49xWZghmyGZixeJSl51jxL8V9wxffI71TKaVMsy%2BypE2UEgudScoUQiwVv01LufRW4O%2FN10HQ6YzWiP8crWM5KKhGNgz07CDB%2FF%2FmVUQmFY9IOmRyLYtFYTXqJyxDMySYitd3nkzBLtT8%2BLY2DUe7VCevmMBw26qKPISMIvUKmIMtFEHelnQI1oTzF5r834zOPNq4he4gidqZGyBlWYrGQ2fjG%2BdCHjEtU8w1jwK%2B%2Fh5mN1HOjaoakbGN8ePNaXdyzpck9ToF%2Fg6vCdPmyAF%2BLPHpKmL%2BarVySZ6xS4mShO5FUTcryAdtMho730ey6NAN7toJP69%2B8aIeV0DeXmJ7tNxS0yCFsuzsZ8KV%2BqPnmww%2B2Wr1XFGEYWklTS8vglZ71Xeaz56Ii0rgpucLntXsMOm6nb4GOqUB3UZKyRpZJTvI1ZBIvSgmoytxInuskC0Zc4hHL09sbTR%2BTHy4LITWGn5ymST8BpceVhGN%2FnytNYirwHtTflFDHSQAejlqaRhaQNBmmmEkB0MA0MaVAHqk9CBnIT54fw6AZzosoYxpxg2h4GnEUg92r0UqMItDReUSxdjwdMjMPoLIrkalQ9wd3rP32wNJBfgk4wOfgL4eJaWegQ3HW5vM3K9Bl4ex&X-Amz-Signature=efbf43c355eebdfc92f6417aa8cb0ee0f734082815af15dd0bd241a1255eff0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
