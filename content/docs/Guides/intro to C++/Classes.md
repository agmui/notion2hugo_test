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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VM4VUL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAZp0CFKg8sdkoheQUaZ%2FfAbmtoRr2gg4GJE2quW15MnAiEAr8J76AFc3JGJUU2CZ5W0OdtHP3SxoKhxqiktde%2FdJwQq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDG3ycFldFGzwNI6%2FXCrcA9FFdLEoqLqPlzI8YSHGBwOvHwfaawdIfgd71SF85FzrrFAswb8ZJtlwTCIipYEAGk2%2Fri7F3op65NU%2FiaLruIRndcUxRz8ZiEun4ScY5w%2FUj2cENFi1vmbRqIP7t%2F2Gj4YJILkYl9vqRcBdP4B3c3dwKrR9U5c56SvJvdkJgCdgvTErxLOxbEW6S8NgBUZeE8A1tU9ZjeYo75rrVtMnX8%2BbJkZxiaFE49atEAwTkuz6sW5IOEkR7nSi8giMLQ%2F4QyCDaI0h4MB2v8znLutd3k6Q2PyakhYZ0k%2Bu%2FIsmM5Q5kky44lN3LEulGYCU%2BPEiQUd2EG1NSvMdb8b%2BX3zlvutjR89NU0ml7aSSVV9pHHqGmu1uJiOu8otthhzVhUeN2Za%2BIOq7UcOPvc2JWfVhH9CSZ3CtvmVH9helilPglm4WV6omq3KmuczyLcnkENz%2BtbqzEuIsB3Yx8WnKszWfMQBgcDZuVVZyZvj5IRajjcvaCD1zQuKEC%2BpjYwOOhVt37P4iE7nB%2FCRKlKzbUAl3lO2USlLX2RUBUcoOPqHq4LtB7J0rJikvSM1QnHOjtnkskLSUmxq61HbECjg3QuliKd4zyi46PpyYrb9jDXDnLYgQd03dziL5EK7zKeEUMNrysr4GOqUBtEbkCVmnR1LJlmR82evIzQCEWojdA0yQhtg9R5rS54utwkBVn9WuK%2BBc4anhrViWssF1%2BiY7aRZqz6hYTMZ0eyEEDOa9yVvSV5z8dczbl1Q6TaJsM2EPFKXBYFHGVM2pceSFF4PXTXVgy3mOSojMPmo0Qf32AFxDj8UdrXNJr2R9AGVYASLrZdI6XTyHTk7%2FoSMcAFiOWehnGNqEFjfmZWPkR6fE&X-Amz-Signature=bf5a4daeb70feb70f0ff550096592bb892301a0bafb2cba4884643da7a6eac2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
