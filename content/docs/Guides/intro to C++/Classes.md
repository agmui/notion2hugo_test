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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR7WFFWG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICCiHPUJ301%2BkIQ69G8%2Bc2NLO7yVCIRJtJXjrAXzrlSEAiEA2%2Bcc6bkO3Nw2vRnGySCXwhZfUEBlXwBzfjVDG4PDRoAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNQR51y%2BCsEuLHw1rCrcA%2BnHec4CyMgMkXwa3ieRjL2Jsr7V3h8Fwan52HEUkN5p5iX7gNv0R6UoDO72gLGKtEeucstLoolhyBbdYYB1txI7N1xKjcoif909ZYZwylICW%2FJ4Ow2j%2B61FXo%2B%2FzWl4NmxkMjKFUqo0dN88jjdd6alVH8D56zIIYr1FOdmQj60zLZOiyLqqQ9MNUPKKio22pGIPyjdqx957W7grRIb0JpsTahEgzwSo%2FEEQ07lfSGZG25gFIcXFsT7BaNFPeO%2F6ZcA%2FeMt%2BH6FcQeTwzpXFhMbmfVZFiOApWC99acY4xNYuV4Py7EbQZ495yfwdKjH4dn8hH%2FwksRdpaZswM%2FdD6KvriXciMhRmntcHd%2Fv8WCiO4p7G7SLv5jw%2BbeKemtnRjVVhiwMsYIO9vb9vIHCoOmmJtKMAvvGzyBtPkud10FZbK7It3%2FJOTbR6%2BHrz7MDf%2BqoT9rsPSvrWAIF94he9drYw%2BBEeLsRRTxkzFOA%2Fen62zSctggOMs9GhHaS8S1NVDQYuJXwadjvRa72Qdrcw46SzLegkE05vQThTNFlU3%2Bs6EPXwHuRFxvGKHJI%2BE266A5QcLpSfHM8MmjoAWxkwqfGXUGNwX7l6AT5fJvkGTEDoqu52RlXcdO13j%2BNEMNS9674GOqUBin8oUw4vX3j%2FlYdZqBuWVhuHVtHGPAnzUe9vcH%2BDH9BauN0k%2Ftvt7CCmReY3LeKsjCQJOVxkUp%2B8zgm73ccRcbo1cnPO%2B9klPZk42vN9wNIscosQHqP%2BZDF%2FLoQGkgU%2FFsvU7WzHpCjx%2BNcYHlpIhp9UJ1QKMMiVyGX7%2BnwppdYl3k8fkLkRw%2BgzjH8YNBjynrPBKuhMzqW0fqEmD8pXmsfNJBn2&X-Amz-Signature=2bb490c51902386499ac109836e06ac94517060c194e9a9362b2607092173a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
