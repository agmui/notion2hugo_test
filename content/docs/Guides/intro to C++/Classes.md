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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NXNWOC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIE1zxjjVX4SvG768Q4x3q5K8yDStMfQIz%2F7vEqmSGGZIAiEAjPA1fFCJUlY0FTslAQMRXOb8DobWoe3pK3i%2Bq296d3kqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMl2FekMEhk7eMmtKCrcA9ZxEBWug%2FcPHaBpWqM81XuoTzVe%2BRqN4akBkW1XjSPh0KJrso%2BWc7mRYGlZJKx79U5tRuPdrchhkMILnoMHtR4gP0AsQ4nv7i3gm49w6iKOcaEGg%2FqWIiGHj0og%2Bj54teNNy6QIhFfIf2WeRWaVoSe6boylMx9PTNPJudDb0iqJ6rqUVo7B40pwgI8OxulTik%2Fpmin6QID8t5euH%2BqKWjNizK%2BscqJi8XTvIBqg9%2Bv27sXjTA3U%2BDbEtJZgqlREkYZRNxj2c7Llob4VJoEa92eSL3bjBGRFjwxLa48zqSv9vwM39QSMlGRQgQAABTdut7mkGzUgyBqCkjmob%2B9HqIoGRvT1pW4nJZN7njabAOPltxtSdxi97FHOfNX93QrtsdtugmJOdwVmxDj7TbzBgBuCNcO88rTglG37M3CMjWgBn79WVx2nup60Dx5%2BPwvjKj4%2F20GgBtbMezP9Sk8P78hWvOHFZiuT0%2BE%2FYi%2FxOKNQlz4efOD3CXyMemnu3nWrJRIZY0LhuzMQkIZWvVr1U6hEQic%2Fcc08qfq3v1dnkz%2FYSzMTmePH1fe6g97i05xFqAlggnvqv6a%2BoDmbba0jtiV0pgggUFlaooHhsD%2B3ZagyjS1XLSQtuBFOBqKgMJXFz70GOqUBiPI2xzbd5c%2FfZpBK3fbR7jYswUXXyC%2B3yMTHbFrv7vfvtJ7ou5POPYM7B22ADNAx7hNY3fEUGWAIX8ig7bRGyDnR27bTLWvmv22avuBJ%2BzrJhiboVtXK2IKil6pCxp6LqAV5lvGz8EAV6e5X3hJ460FWdKyEaFz953vLIp5dDCZM%2B1sWDlvG0vJJcZMtWoj1M90Jg69z3Dj4mRJpWazk8VN9rujH&X-Amz-Signature=602ee872bb56850b2e0f46c60900c61a6c467787c323a608d2d62c9c5bd4a3be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
