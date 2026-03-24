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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EVAB4JT%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFqiJif2WYbDYEvvREUC4SlyoAGQHwaVejzFKnrmzcQgIgVNB17QyrMs2rLaZ6cpuW8AzdTjw0aAenLih4Gbf8bKYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuycwVphHTFoW8JWircAzhFAR4O3ksPTw4x76oFqN8PqtP2m6CZ4Xz97RYkFy0VFrGBNss%2BNLllkvsQ9eu%2F56fp9IExL21emSrUZe29KOHGh7r9h8seaGT3Y9O0kCbwzDqPYR%2BhM6Sa8XF6pM9NStsPcSZA6CYJQo9Yn7Oxub3ntH76q5erXqutXTootRxiei%2FeTzGKtivhuPd%2BO%2B0YDGRNNKeF%2B7iP%2BKfzdsaq8HvWeuTbxOgQf4bQqskiUQgdeFRyE%2BXuvnsZYxkd8Ho2VfgdYmT3f4rZ%2Fy1mqSZjuMQkIPs1pU1KSMNR9mqPkC0kI51TFCRySGK0SnN0iVqI49vpptOi37DLfdSTaN%2FjDmdcoTn9c4k0Q6pSTc%2BOF6kM%2BDbnVHO9bkMS%2B3eMW66CHi%2Bdz8Bu7J75%2FaGZYi8xFw4yNiqU2H%2BI9Q11zIdCI9zeomsToO69zd3JBZA4cdedShqHsKl0bwL9eTnGs2GGec%2B0thEjP4kfh08bE7gDh8x%2BmS6hhjMTyjunWIYkshwCPw8AaEUtGzyWAIBHrHITu4TJRLkkaXlrIpL42hDBxCDlUxLMgIOAZFatvechmvEv9%2FEsknX6WVBQBGunKKrtBV4WvVghXRL2nwB%2B6RHNJQpOpVFCQKEKPpvT6%2FSXMO%2FIh84GOqUBlv8Sq6PciJVAo1eEK5rL5JtiQPAJIHZwcTR2AGl4T6qeYf566sKBnZQSO1zIPSrPMyp3TxoPmjtXhDy7HhIpwWPhgoEPwVNP%2BzOqZph%2BocMpYDAnNCso49EllXIpkAdqSIMew5sFQ8XYAFT7A9OU%2BKGySnYAZbG950hO6PYoO%2BuM4oAhYG12u5SU36EOUVYSWPHqSqNmdaI9bAYZ6MHeEwqhZMf2&X-Amz-Signature=95efb51624ae7269bcb81c2609797e253a15015fb9eb89fbc02539e1cce88cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
