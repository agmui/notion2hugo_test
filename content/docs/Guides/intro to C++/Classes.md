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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ELJA6NO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFJ%2FfAHo6UADV6FICHWH9yKOBeFZMBNrFu6DHZbMA3TPAiEA%2BQTbk0jndgAXEibyiHzdP2JAYnFLyupIiVHXv1%2Fpar4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDB%2BPGATwuoWHd%2B%2Bo8SrcA8GLfv5cUei8H3dbM93iZKgdCTVZLOuvAz6zUGXWR4fdIfElon%2FdooKQdoLBriVVVtk44LZqhHbVG1R8lHISmmTnMtheX8d4mYFOE5rJAIpM2dAIJNgH3Bye4nBRlE1By1T7bJAKeY2Hk11EZQZSwPqeN8afhSD2sVSbkfCG%2Fi3OYieVq7QG7l8ZThPidrbi1NZHw7VFsvqivPoLGKKPon4BmrsGLT1xFhP%2F3TVnIzHiQ%2BEqptRWFeqWldpHAGJrFhaOC8PX%2FBGqkZ12hylTzihAeurYmxUCUyv3Y%2FL1rh5Tv3IOEBsbAKOnKGanjFS4w1E4p35qFZzjveDMwht62uMIolgIXWxZL%2FIjM7%2Bk2w%2FMTNttgTqaZ0ZSbDHJkybK6RBmKN07dN%2BaRJmXh0SF5coi84eRohNAkwAD9f4Oz0CkTNPsDwrSi69ZNlNTxUf6ehmXZRUXXA3tr75A6GZyxOEnPiC8YsATdLEEdmhvT%2FHOsXBi7DMPkuPMOOcsyW0TcoknQIGih03vSgYiAWGccYn5J9u%2BVxKpcUPJbSBRuNqR%2F2GSR5VB6J5TZYttyjJRQy2dgylbbBO7ESGJV0CXKVxLDzpL8GNi3cqwh7iMQyEgAStSzZJ11HWhcpylMLaE9sIGOqUB9TBgRHHKA1vVbWK5WtmlIQ2BYYeNSwUrq9D4Pd0Sd8NXPToNGUsqOQ9cGUylfIrAvUCgh9xGkeu9uIvvxyT4Gv2xo0CW%2BkMPIl0n7ETpZKhE15ErCEYjK3%2FK2x6C6Ee2U%2FGIiaw6zpX4pmnTDGGT1y58HmjOF9%2Bsvjv9eReNJSUhV855DG%2FXscPxW93Bf%2BsJIJzSLKynGyfw7WXVGepwzGzeQ7Pm&X-Amz-Signature=44cf3ecc5e72e9ab7f12d78b2ea3cfdb35e874ba9954552545b389595b313910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
