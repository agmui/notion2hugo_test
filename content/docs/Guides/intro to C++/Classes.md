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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7NRRWX2%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFweeaft5%2Fhx2ZytQiW1nNBXqWbFP6%2BrQliiIYp6Pa0FAiEAs1y1ZL6yMEQWF3GrU6p5yJwT7Elde26IGZcXla7T3XoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrZXJpHeJrmKPph0ircAzGu8g4s36Q8f5TQCLJPGbM8ALdo%2F1RkJWyr8F0ZZqvtg3O3PXEnSPLXPhWKlprOQ%2FEANPp1YwJ%2BgZjJfFH8lFD15g0pSAyjvMmt7iz7QQpomVJds27gFN1oSaxo%2B4ERwO%2B7ohVQZBn2Z9EbQM3CiLQQ3m4kRDip7m%2FPwFM6Bf1ZYtlHLEV3mFJSTxHZDxPbJ7LmCLbVPu4h%2BIGuolwSmlXEwMISXDJbh61nkZO%2FI48CyoIWhCH9eVjqAt4fOBQJIk70orQfbwZlMxTE8IAFSa68FbhWXk9kMm4fw2TxebplO85kLBHM4pvp%2FxSxz8gP%2BwR8oXQiPYFsFCNkw4%2BL2WQe5g%2FLFU8oNkuhZiAMj%2F2YplB2LdfkrGACZ2rfLxole2RjKf5S%2B%2BJS75o2qE3puVn5Pag7510ZdDzcuIzx0dtcIAd3M4ARzd6QYUzwbc68OOwp75ongdeDmh%2Bqbf%2FbuShJU3F00JE5dztbHjqKU2sU5tFWvMowa4yre7AksFz63ygAFp44gu9rlwXgy9j6pAm5AOLreF9UaJgBfd0Ibjn3xAPjrQ5WNzVnD5FlPyzOZlDzDLQJ1Xskf2WSmhIRgoH36vuF3Wok1eIhnR8Qdv68Iaht%2BFCmZb0YO8e5MOiPrMIGOqUBWZnThnE1WPyIjbgpaS45KcIdB1CoUpL%2B0jI8zL5nwgt3wLx8EDYjD6shScB6jn%2FR9SaBO87JEg2hmnptlUXBi1P3dJkUQgDUQFaOPeDwrzHQa4LCc%2BlZbsYqxyRJfDw8Ltq698xfeyesmeljmPQ5CIi0awIrrykwltW0WdZFhkfKtmnmu3e7s4tIdUU%2BUdDvXPUVzQUdDwEGvkbWAW2yAF34Crgb&X-Amz-Signature=d0488e91e22915905d0babe3412d28f09dda6ef6a45d9d499712cc4302f0b2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
