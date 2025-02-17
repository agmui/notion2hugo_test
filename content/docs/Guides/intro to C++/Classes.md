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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH3DESP3%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCOGc4pqGm9UMGPd01CjBlrvhu1Gh%2BymvtnRBT%2BkZpeNgIgeDGicDZeOCUD5quSi2LQ5wz8omzms0lrxXls1AqJJy4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAeHq7OxSTQcPjOfRSrcA7mgxcwtkav0bFvT6V2%2BmhvLGMDJIk0h5jrK%2FzqcSWOwuyybXVV03sU7vWIQz046kLxR9uAJcWsBObBZdjjr5KGBR%2BbafbaM9YpDdKsOiE87MWdjN0DU6iz7VLrJD6wfE9ZlZQE12L%2B%2By1OMyb0nlProEjgaE5wHjWkLT7TEspjDOT%2FQLg1m9MZoutzWnNevc5vwE7hEwNk8ZGINBM4Annt1LccOtLdZal%2Bdij6Yu4KGhsZccVOAJ3QNA2oOP0UCiMtfZwaZm3qpFSJYWi4AeZthgy5xu%2FTGBsmWGm%2Fpz4duQfXnV8GXAUTu%2B%2F1jkPFW3sG5QkxtEMm0CqSbrxhZw29mvPul0wN7iXOKhDJAiCJM2WecT7RdNAOCQpj2GjfI2Fw%2Bs%2BiPK8FONSOs1%2BxzIwv22XjlbPEMX734KxmyuJv04DuYg1DrFZGje8mZxM1UoxEyLLWQQwrdakstn2QOUHf0oib7CuOsj2veI7yQ7xOjPA%2BafVIbKcdX0c%2B%2Bmyv%2Fo1o%2B203TPrvVJqlNNRpzF1G2eN%2FxPf7O7oqTDosZrSUdQPNgwTLdnWVyDeN6XPnEYRRCEoJcHGtYSGK3lgJpJnYsuziP0Mz9sLpK5XQjKnW54AYL5GazSVM5gEn7MKCmzr0GOqUBYqFYTmNdYAZ92R5rZGvHKGQE8YGif%2F5GaeBmMMKjEOWYtfhoBjVMmhhssPNOD0JDfewEXWqUujDiOuBIkiRjZG8xd3pDu7a%2BPKiUrCutR9gfw2EbU4t6aYX8BnIDCw%2B%2B4nEY1YN0z%2B24gOzOU7UWy54JLe77343lelYXDT0Kt9uaYR4XUDvybfkc4Cw5prswgAGHkjKXJn29BxZoXO%2B4cO0thh4y&X-Amz-Signature=535bdadb23d1606ec7c688c994663ccf0e04a42df49c6b67008fdfad2be8d3dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
