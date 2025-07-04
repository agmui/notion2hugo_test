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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2FYHK2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIECTAzAuoU84OBQUgxZNQokDimgRmp2hSDllg81zXP02AiBqDOfx6Uqu%2BNSz2YAPs2o4q7HQjNLGueRc7MpeX%2F1qcCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMFQcPGBjAc7UxQwE8KtwD2viZYax22ThSIoHOXrX10inl7txs2jwiR2zMNgacNCowx8EfImmzAHg5aWVC0XgWohiIkaGuTRKjwoEmhCZCmIcaVIFsijJynbB11%2F%2BytUH6TfveV1ukXp8MBnlJspBaDNAwrvXeM%2FkfKNoWaUCc8ZeC3XF%2FfLgTRX5hLZNGFpGJq63%2Fn8qHL5q%2B35HNnEPAusnxcQ6wl9hP9sOUm94TdcK5euZ8uzmAvbolCUnVGlzqsUkrbX9UqOqtmETKXDs%2F4Cet6OqLvsrIwZx85ED8T17qhNZfCZ6EUtY64myu%2BQz%2FNQQDDE%2BM%2Fm%2FrmXeBylsQo1COhkmM5o1wIfG82WIEoyhObwdehAoYkk3DNPqgoPRGRd%2F5np2e45UV8MCtVsj0PXnrGQkg3cflum8eXFQBAnr7cPpJ2i0bDfIQZoQ5eJ6DFYwbuSqUeKy%2BYqV49nLhRgq2N5MMzHZo1%2F9h9Dutfq6eVEYW1To09obxFoqOr6YrTi3XlIB0TmyD7%2BrFRsBzPh1RteXqqyenEJXURsFz4oBw7dPNowEPIF77MEUYd0tu3SKoPQt84Pb1jJfPkIEsNJvJvz3005n3mnAcGXOXX43falzp94giKfUE4cyXDCgE4KpWY5rFR89uhFgwjOWcwwY6pgFrY24tqZunnbFlhbB5zZ7VTZ86s4dvvB3onHGl6QuxBeaOAp8Ttksdj6pRwJqJOg0Cj%2BOBZITgf7dG9OyplQQGY6RTE4MUD8akOz79aq2wUlYW23M%2FbgW78mLHrJKAsgR7S22N4sACzzru7wtqOyesgie%2F5Yhgs5lScYo%2F9vR7b1xG5GVIypSjC9LqRQDL1EAL0ZqQILPrUwhfEK2RP%2B0AVQLsFZoy&X-Amz-Signature=751d0109878bef8612ae85308414a5e5f3954727ad61143186c23d4e21618d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
