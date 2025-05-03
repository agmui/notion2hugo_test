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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SHSOC5%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIA%2BmvNQDDV03O6hYrWj507XtN5L0anWFOghql6PlBMn3AiAF0Q4wq9MbP9SG%2FmSU%2BrN%2BWx8myflIj2cQbyjM%2BtL57iqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn6c9dwu0OBjoFNEKKtwDmu%2FjvCyJUEKAbjHRO7fDaT2F9%2BSXjqqLRcRd7YID1fwb5FonSIv3xlkHj7nVwbRe5C8N6Qw1G3XVL9cbtvw24MyVP8ubQJaGrS6axZPZVn%2BRihuyWNY7nhA%2F0Sp7XFB7Z7RI8LS1%2FzcC7TSFufI9TKKrn%2BsOByryQEFTWTPgPFJDameK0HM7ErHnaZn2LIzTt8CuQu%2B1aWw0ZE3%2BFrMn%2F14H2cZ8UmaOcKD1636R3fZH0OZ8h4pP02h2nmRdJNWzoqV6j9ZmMbzbIRJLQeYtbmbbliOsOIFwWwafqmwH4Lg8jVTqU8MyyomiCqgjahz6fFchyE5dUUCwjlTBsprbxXBit6gMK8X6XLOTrwCJDlFZLMRBCbzwfBdbEPyNCv4Q0FwneW5Wk%2F2CEbVBnmpLK2Ug3IEoy7iNMpO1e3E5OA4nMF5vduqEdD%2FNvT6vvspsWkkw8jEqZNPdkASBo7EQIe3sjgNJDOgyuAarBkfks%2Bx7QHReOIoBZqD20cVX31nB02AXKYwK4xDqRHworInvbVxVLhP%2FIupPr1rGxQ2QWTMEB1S%2FBs2byFnMBiIxz9JDWquVIJH8LmH1C4b93PTmzN3NNeflyu78v4gqUgDsNVx4tzsuKdar3vQOg2ow5t7XwAY6pgE8P6vKfViHi5OJUvdPT4ANOjNTXzXWIxC9xIk5lVlBIH%2BgDILk3c4FyCz0weHFQunOoKtFe9IlJk7Ot%2F0FvvFaXbu7FFqFP9n79%2FSDGjxa%2FHyxPowO3X9iidVyY%2FoYAY8GmGRU9yKLSbvz%2BP3qY0yzqQXOBL%2BmDEq%2Ba3%2FinoGi3o%2BtDlvUWTwjcp8cDZzFFl8wKmbZN%2Fjz6YeU9zXh3j9trXJeVAfL&X-Amz-Signature=54e9043d7f849584fc4fabf82978d82a29bbe0b4a85a54bd452e1420486890e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
