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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2NEGMRY%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcdB8OLe6AQK0D6MZZORE9eYOg2kqVBLA0PKnbKwhgzgIgScJ4it%2BcCzUYBkDx1mHQFnGdb7V65DL9ihFtFp%2FiGu8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHGTGR2WEsascN7KeSrcA0WMPVdRid%2BkYW4Li1bs1vP%2FEOEjQD9t80XcnyoUeWGe21Z8rZGipOH9qyiP3WSDMx5TOTLzZpQ8AV%2FSuK%2FWUumw%2BsR6xpeT1WcbeBtD6rvC7E%2B4ZTcHjBCGBzLbPP5hDdmG1b0Q1PwYvE%2FFl0TbUOo3W5ucbCJLWCkhyGFnsL2HNMHl2S7aanaVbSVEv0%2FKMQ%2BnqFNrFh4RcyWQJfrJz7G9QQUYYtRQDumFXLjwBe4O%2BGq9cNaE80uif95fnL9jY9LGjC36bwnoFw%2FDbsuQrNlrL%2F%2FPj7cIKN4vLk%2Ba05zPmrUFM08b2WzJZFi7kkDkrVUaZ%2BwijZYRUzTg81wBZqsxIBevaRZkcEpe2FKTm%2FL28PQwCsh%2FLAvpfufU23B03LvYzHZwbWrrbbXWojcGdUYgbofqpaYBlEImu7MfI99G457YyYBnyp8myiUGAIv66Wa8ibuM8QH5obnruBVQkKWS%2FvIgefjJ%2Bm3zI01fr0M4v39j29hpJ6SqnJrpm7U%2FEI8V%2F4rqYkUhta6Pb0%2FbL98DtiRp%2FQFu3X%2BGVzbTUxj9yFrW9Liycq3eQoFSVWHLwLGAQxfJWvNY%2BTALZWbj3Au8ZdNGWZWOsXH8ZVe97bnK3s4sqG%2FzZttmsRe0MPjg8cAGOqUBW2pYgrxwbP24cr5CJ8mAEWPutkeGb998JJIdVZvTxpsrolGC4uP1hdyKLYFPUXBzEDIeNF444P3%2BZEFKc%2F4zVnJaXfUWuVQC9NIx9DLIco%2B9rdHxypCJWRlV%2FjcGByiRRyxYqM1zPOvp16btvICTWiwwAdRyC4X8yu6B6Ho%2FwGhEsKGAWkqlX4FqIH8wJQBDnTBu1a%2BPP0KPpdvka9Sfoxy9IgVR&X-Amz-Signature=07512ddf026b6cf9265a492981ade819f1489f6a5046511af85bae0214d57385&X-Amz-SignedHeaders=host&x-id=GetObject)

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
