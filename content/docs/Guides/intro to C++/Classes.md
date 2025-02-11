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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDEVWU44%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoosr6rqr1E6N5Fc7wEQ99kpt5A5G0f1RL2F06wpjD5AiEArQn1bsSBIwpR0i6K0GWqVYhNFcGOc8TDGE4HlGNwIYQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrkVPBTaFyQGad5zyrcA3k1cH2rJ0YvMknnDRNXJvb5GKhNKNN1vy4pk5r5CvwnfwKelTKLhRgrdcYR0NCh9fzDVyssWu1lcsZqx12tt3x6DAgPwAlFTvURsiqNVKg3yrE1WiV0CbVW4sYh7EVtoERkkMAR0qhCIKhTguQF8Th3bXs%2FBvnwc572om3vtj0rJtNdopLCQh14PSYfCPTeSmj4%2BPR7HbIedKRXizXKa61c3xxYDcjSUF7fwewOetew43THlXCdIDLwdycsmYxcRUqhCDor%2FEwTG7O1sU9b3dy2NqnDY8vsyzbFEsCPoxw%2BqwHLohwnZNsq%2BHjM5zSu5fkQr0oyumvzIiNggvtQHBaUpF1z15%2FlYLec%2BqT0hPun%2FTRFH9t%2B%2B7kt7Wjh3SBUfRWO9Unge%2BrDGD9Dt5N3jh4Z5tb8LN30UHUH%2F0C2v%2F8aYZy7GBtdWNSGS9J3uODN3zBFefcWuOOlNt1tAgDBh6VhTDLI%2FfT89ccLWptR7ljbP6AiUALY84ONyNuork6kW2mOwQGBc97kBucIuUKMVe2bAinjvw96E1TOAmTTzwCK10T%2Fayx6zTM95u0QnD1GAHVlbUpzKVl9M8zYSZjGspv5lLxYhXuKUBx0tao4URwvSWUuzwFuymCvAwtpMLqSrr0GOqUBynTODelQCwS%2B7XdgKSI2GWyJkDXOcuvnoA4bQyVcu6u84oQGVZ%2BJY%2B8%2FMQZkzceECoJE4aZA6Gehl3NlwMDs08FDq0fHcnj%2F3Lwi5dwBCWpsZByYdmKNbnzz0UZTtODBIaEAjza0RLWo%2BBVajDUU%2FMUdAAxai7VyhZ9bd383Pyt4tqGeVqPgxAznUb65FkX%2BVxlHS7nb6J9P2%2FJ3zWAJ0QL2lPbW&X-Amz-Signature=30d7a9011b023d6ce9b74421bc625fc1202bbbeedc6be8af56ed0fa8a20f5a30&X-Amz-SignedHeaders=host&x-id=GetObject)

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
