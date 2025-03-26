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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPQCKOA%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FDgRmV7dCi82PlPVSU4QNZRJBmf0gclkh7QK5NTs4CAiEAtJggcETKAEVOuBgrj9eMaYka5Oqw%2Ful36DRm5m5rpWwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM3z1aCSK19eMQkRDCrcA9t74QxTLLUyZtQDEVtb1WzikJ4Zvou%2F9VeM6T1ehx%2BHm1GogyKHYooOTyHW%2BeYIyTg%2BFRm0xPB8hm7zIPtg04aOJZd8r4Qb3NkE5V%2FwFOWohn6%2FZJ6fy0yLn5FJMZRyRmY1o3Pl%2FeSlG9xtGioFOskkUCJdAY9Tr%2B0m%2BYuhElSJEnuuK8RImCdz843huBxZkuTP8HQ%2FZxXmJRZgfcuWbvosj0skAjMNIbeFRcp0rLBLYDzedyfIpch%2BbXfWV%2FUhCEsOsrdVd6Rwm8pGaNSAz5S5mFF4uVnYKj56d1LQO31Jb1bIYrg64k7aLf%2B13xAB%2BmTVYN%2BjzKuTOL8fCxVji2GOXa7K46xe0pziMi%2BJeGyL9wBzj5pHja9tiUUforQ1pyEzQXE1RWjJFQoxd5E6jpkpmgERYGTEu9z12h94qaw206E%2FyXqF6UBeaf3cFnTfqA%2F4xbG2AVQoXjLqLeVDLjEmPO5W0qoPa8EJB2DSNcBlvMbgEgD8gGJubrdI3KRwOTi9vLlFfFKrp83doVF7Exx6kDsJpazwkG1MsDxz4A1fk9Z%2BsSt44JQxo56fwn4g2ycKAwRrFnyFSrfruYKEx1lbvqCExctl3B32Xvj9UQn6PcfVBhXbwdo12i0JMN6ZkL8GOqUBdCmHPeTZOyeXYinZKx4f6h4KvdvxUzwqDZh2fEUGhocGrgbuMAYBeZvZIHjarNrpTHKreUyO9%2BTlQMRcIeJ12GCgTIlYJWctOtzzS3Gs%2FL17MZJ3EmQxrnSeVnRoaUNhJ%2BrlwDWuwWWehKirg%2FdHcuQom11sKNgH3zZDhY5pq9wVipZUNf9IwGR2%2FZNuyDu0BoneskkDFz1dwcT75WbbA31DkDLQ&X-Amz-Signature=d5eac537c2726e64292f91639cff2502a1edba541638b5d896e088231cb3d662&X-Amz-SignedHeaders=host&x-id=GetObject)

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
