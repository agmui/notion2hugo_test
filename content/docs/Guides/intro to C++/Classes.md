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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXU7U4P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHevb6R2o7w4SSKSiG%2FHUoHL09mh7%2Fxu1cy7araOdzXqAiEAtoBqNMRw1BhpezcHd7gjJmTxXu2kg5qmvCECrNs1NrkqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVnLq6NORouyfytkircA0n4%2BcOtEFQpWt4XWK2rN3lObSebGhjr0syeL%2F9qbSNMZon%2FIxl%2Fz7JCIyYWiNuxjnrOxXms%2FHr5flhlj9I5WJE4RBtwXg5yI%2BlH0%2FsV%2F9SNb%2Fbzv6ZCYFpRCsyA6zLqBBMibD%2F9U2ZCEry9BVAiT%2FMN9CPfwyqhvLv3%2BkLcBY7s3SoG8Gj9QV6Qu%2FvXbCp6ccLfefQq%2BX7S4fAdj23YZ7I6wIWiq95ndx3I4zg2gIkkfIBpY%2Fpwo4jR%2BdBvXtW1myDVCVBkk7qF5ks3t5O4B6DDEpJeaCI8x5G%2FzMOx6TK7IIg3jIzIvsHkFQwFWzwBLnCMKCVgKMap8SGarpJemxeapUyJAHfu5p%2FWc0M9bwVmrpzGhe0Bx3PbaIyHvVa3SoETYjrcoZIe2p0JvuJo7CEZL6v7dmwV5NfKOU0q%2F0HiDQiWZsZTAQSL0b59PGgYIlsxupt7akc0MXbMd6vwBMzrQOqAXlxlt7T4Ki64cNupICY%2FFVYh3ylz7c5Dl0qpjeYcVqr03RnW3t6oI91YNMFEr830EXHFFPPh2uUqg%2F9f3b18NdJTwseH5aGXfwllVa8g6O7%2F91goOvk714qNA0xWYAX8VbxsVGRTcYg9PyF%2FTizBWsu3h%2FP13AelMKz4mL4GOqUBOGkJTbIKqE4RG%2Bn68Q29eVyp%2Bt2ymiam4BFyM2uipKT2KVeqUYIXk0Fz5z%2F9wzSgrofkQq1ni7QHKSOsG5JnAhDBcTw%2BElVN%2F2EYGWTQtobge6fLdYDrBDOoXbijjwVCcHGInVGXIe2ws1Z7HDKe8M7Ou9HsXFCqZ6Wexx%2FK9e2pykTDiuNLusbmCaXi4ZVsoophMxVcASrTAZAJx%2BdPFwKfeFWB&X-Amz-Signature=fef9c7582a483a8aa2f5f8860137c84eaa50f25549b755f8357bd45b83729e96&X-Amz-SignedHeaders=host&x-id=GetObject)

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
