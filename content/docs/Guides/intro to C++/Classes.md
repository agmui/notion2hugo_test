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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466435OY3SI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBqt9rRItOVfuAu7LhCXoMsb0SoZfnokQEZWFFG5vdZoAiAg%2FdLZMZ8%2B%2BJexUSIAoJSNRilZyDwgxH%2F%2F7urU%2FabVuCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvF%2FMRH%2FOtCiKNdzAKtwDHHiO3L0B48W5qj4yESdc1MfhvnvM6J3OF3pBP75RY0D%2BBjSwTxl5U1l%2BHCr5gxTxt%2Fon3isK2HK4jFwGoZXBI0pKTwwXP%2BpqIIoG8O17DssdmnW7ufzrkl6m9HH2fzF6JVoo5Tg0djXS44pPejbyDdqDQUe4%2BgPsg3GgJbQO2tARMKeQSo%2BcLwwEA%2BBTs8PQl1cEQkUBoNFZXphEmNu%2FIzqzATyvZbty6YCT2IWz7pmT9RpatP4%2F7xrnh%2Bq4C64E%2FR6vkm7vcvTDzOGAE23YCb8RQX4mVlchS6PdV%2FsXYvvPmkABh5NQnzY3ARebzAokjLM8XGfcb9B6o8xuLH26PEWw49Ae9iUObInX3GSgzKpXG8Lq5znxtH5y5R5ayiYp%2Bw4GJwRmm9VkhgKpMdE3bbTI875624XGyAURBWKR1SAd7a%2F8b3Kkuu%2FSvSgIpJ%2BvmuTDd6RZgWl9Y5Xp6OTdvaVqIMSyfHRbq1GGufOTUXI9Foi3ePy02eFygh3NV5JqS45%2BFWHxR%2FD2if2Id4OmylSe1WCM4eS%2F7GjgfiaQzFQZGq4sgnDe89GhKRwxUlJKCPrMNiWFy8pqj1swqsqgIa7GBvE34BZHF3Tl36nPxKuiYcZgADn7Wexa%2BTYw3cLhvwY6pgF8nHbsx78Xt3S3OBsV83vqpWHK%2F5Y98vZeevr44XuKdgyfW4bz6f%2Bnd%2BMQkK%2FKZrcW4X8RQVBxAh%2B3LLwEdPk8QiYI94eRBmvw7eYHCostoabCDJw9rAlpWF%2Fa3ZWvO98PA41NXjNuKhJYzsZwDjUNtOZLIFXljGAjWKSTMLRwvqY%2Fpvt1OkgW6AfPkpCwjVXxQN%2F4FJgvrOHJ6P4%2B%2B9ZcS9P55EL0&X-Amz-Signature=573482565b27fa604025c948070f303fae3f6113fc17fb752f1ba7fad21c46e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
