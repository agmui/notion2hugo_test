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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A26QFUG%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBppNkM8vDS%2BrKyLoh8SVyT0REKF%2BSXZIHu6SQqyj53IAiB7HoRXbZfzcuI%2Ff78wHp0B7%2FTJLjMDHyYSTDZVm79OMir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMlimDRMUWYmQ%2BhI2zKtwDHv7fn96MUexM%2B29MR9qRTqIVl4tg0CbtgiS4juKLvO3KELoUSN0AG7YGLZseGV0d8d7gmAr4fbCAvFon%2Bc5LAIZ4DQBp6sOHCzg3Op9%2BcoQFSnf0d1XvVxzByYIMmmS%2F%2BvzXhArKFA0tADrNooGgc4sWJtf9e1n5AX9KlbzKvqBWYPH7rnRFjfUKOT3MDCoqwVZlTWGy4DVrYkcb2v7u3TwFc1w0tPknSZ%2BWHuJKGl0odBhRlSx97yX7GZfFHftLcm1OQVX837QLS7AZTLCxYSIB4Wld2QEq1V2PX2fHqSl5ZSjxFZazqH17uiJI9OMphMP0O4D%2B20%2BsrZVrEo0n9p1PZoxqrhX3V21LFsqQDaYTHW9BWoC8c1%2FcEJjJW00prJJVY5mXykP6cA6nFLwEPig3QvZEcJvkz2OJSqKM%2FlU%2FRmpwIpsSpkSsAKt1QXkckq%2FmQaIcBlOaVqIocS%2FTlzKXgil7c4goNB3l%2BlfF1dnK%2FwBAPNxkjTFdpb0S3f32xKKlPm4UZAxcjV%2FIVw%2FQ70XoaqTbnuQq1m3TphibwWkh%2Bj2YIcRiN2IuIbyI1ToQV1g3vO%2BJM6%2Fi3H7nJMAhshbSF0BISdqhfxpB2s6NQcLUJ4dl8D0w6QCXnHAwt7%2F7vQY6pgEB3T92Co74MrecjAJNaoz6GhaZb93%2BXFpB4TySGtxybko2k3xFfKsMgUTqf7ZiwH8QymGl7urZf4M758E78dE4megCQUB2a4Zec8V8%2FTkp9J5CQ1xvgPDyI3m0OcMZJ38mkZM9mn0PyVEGOheo9z%2BlGIXxrD6OoegbKOzCV534efV%2FKhqDtSGJ3SVgKbcS7yhVvST%2BHD0NbvyoyVLyLg3I6xXlgMoq&X-Amz-Signature=c206dbea14011c018ea28dd4546a00a755237ccc7d48dd4e3ee6abe1d08043d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
