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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GQADLZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiHPp8WdSaAaCPOs58%2FO62M4nsr6Ede00sP3aX9iRriAiEA7k%2FBnc8gFGubR%2Bz8OJc%2FdPx8YFBv%2FKFPUjb4l7q3pK0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN8%2BvaP8HPfVXadHPircAyquyGSK401jkeydE1ZCjMtKPLQsKDeDGE4HoZXrNn7usS4J4ecnhLTAB19IgxIQ%2FM0NPR%2FRQUEuARZaCw5hmnAih5sQLhjxK%2BaK5tD8bcOwRBqCDw6C0RhQ%2BZUU4j41wNC9HJhGZdTOMIYvshjLt6GAsac0OolvKUwuyCAbiSdQI0C2XzA7%2B3CpgUjOzBPMXvQg0rPJZuSoY35fBRHbtfrgc6sPpfub9LBM%2Fism6OXAPSOVFDJzPsFDRjS9cz3PXfHRJ7dAZfMtdD0NHL1EEW9BzbZJR7n712n2sqpsONSzvXajg%2FUt58mBXvCBmHmvm9TZGvfhkHqqmbEUbrjtuOIR1%2Brv1gIIf0Uaij%2FViZORwhaaRiqy7d71hc6NP1DnVUlt8V5eNQJpJhaOvKZ2qlQ7qYL9G49hPvqDg%2Fgp4aZujdHe0RqwDARbHINmxLCdxjbycrg3PP1jpJ8DFzlI4yqPz17dfXeTcwJNyaFWIN%2BvJuhz3HKBIrCuD3RmxGnSLirACHhGTktGRafQAWlGc5OMvT4TPkcfaWoxtovkYgq8xsxFFyB30fG5qcetpamPgwBKbWnhnm3C1nfrA2DxrukdNrRVhPwsPGT2fbDudtDiL9AK3XPvddPX%2BXD2MK2BkcIGOqUBCJosR%2BR%2BRlqWdDKamuDX37Gr38Jgg4s%2B8WmULfZo8wcQfRYOf%2BT%2FHIdYYNZDn5WQYJ4XV%2BIg8vQIh04UFiY938x9P%2FK0tfO9mruOTZcLoXEtu6Z1WTkI6JHN9GYwQxxJpTA7vwSr5IyhVkpbkXF4B1Vb032hJ7JIF3sAVqU%2BAfzW6%2B%2FX%2FfH1SAoXvK%2BDZkkgG65A8Z56m4hLQofm%2BOxsZiwmkszd&X-Amz-Signature=d033af54e8551c9e08e526600b1edcb5f76a72aa9e063855a998fa7ffca6af60&X-Amz-SignedHeaders=host&x-id=GetObject)

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
