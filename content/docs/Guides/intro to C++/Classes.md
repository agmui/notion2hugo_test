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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JDM34QM%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnS8WR%2Fs%2FD88HoJIB47Iy3NOb%2FxISkw5okhHA%2FqwFznAIgGM6%2FQwYj%2FQUS0qxhDA%2FhnU0159WyQer47qx5orz%2B5NkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJ6UqrESoFc3jOqgyrcA3lAHTsZPFJkZpw1POBHJdk8D7LTrY6TpxAYn%2FCAOtcenoiC7NgX%2BurZcDSzXYfjXhwZSTP5BRCvhMmkh6blVITBFPhXC3b7LJf51%2F640VSc5iKFAUtmoL%2FdncGEZcEUR86dQbGajyLFpb20MdCDfeOwACQEbuE1QuKbhl%2B7tlriO1y9CJkOcd7h68IINz4H7svEZZZGcKqaZjtMhgnQ8bVwKArUFpvIzPKP2ZF4LT709fjSql6dxMIKjCzH5wwjrryReO7gESh13Ol5MX4uxFIkYVihtEtksu85dwjRDzpqb27dUrOQFTcEDKyw5y%2Broji6uRXNWqArhrALHRNoEi1RO183N3FReRJ8kqKNVy3SFfZvCAyfDg9nO6cEP%2BYXxvrPkDkPR28MqFomFdwYh%2Bo1boWuwT5gLOoiru%2BE8JFRrheVguIQ43OseAYdhQDecrWnLH4ssxZtzdg7DkRJy4afkgONS6quDaSbTodxmE3Sgvrg8KobOQ6%2B93VxTuyw2zQuNq7TAvIrEMvt3Tpdc6G11ET6oPptwHqp09eruSFoQBNXWE5yst9IkQDhJ7PJ1P39E%2FHMCkibmUhgkR6B9zouZ%2BHO1uQg1XfN%2BEam8FvGJ80zl%2B4EvuDUTU0MMIe0lsIGOqUBRSWFa4NwsuHdz%2Fp%2FCrqKZAYS8N%2BTLuSz7OFsCANJVOILIp%2FCWcPj1nkzJrt8CVdR4K2ABtG8C4V%2BIKHAOhRm3gsMb8CDnV0%2F0SkpDwczCO%2BavXyJi0nnZ9kahTDiqP4kO%2FGhknVZyTwB7l14JSdKK0fsNqKXQfBmj9899HCA0zuiFku8hgJ8dgJ%2BB9l0JgFCIT4t%2F%2FaFxg5KywBCko16bW1Mcdop&X-Amz-Signature=4608fec1574ae73c0975d7cc330ef1e47264802d92e5e8997ed5f3dff5b6f9cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
