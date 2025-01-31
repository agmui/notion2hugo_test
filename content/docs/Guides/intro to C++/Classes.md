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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRYCX2TO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXbqn2MsfEE5Xvt7B1V5MP%2F4RQkWWMr6JxVrCT%2BjbBYAiAyQxckqVJJGt4pqq%2Fc1dzayPXl3ZQvpWVK0Q9%2F4RV%2BhSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bp7J%2FR7R1KSUFW6%2BKtwD8QA%2FBtjRgbWeMZ7VomZ%2BEvZWJ%2BLpP0m3XPDkwuA1qNCe9AtzgzpFOj6wuY3ZvWA6%2B8Q5BeymhtLfHw6FjBSNIxK1Gg%2FRqpzetQa3uGzBTkHpPECpcb7BdaRl8Zb2j9Od%2BMIHaKhRRrxhFUofwwMSUoxSpyPyY82vIO5Vm2B7nyQeV1sUvs6EoZWfl7ptJDA9zEUuoi3pF1GcKKyBNMtPCv%2BgWmKt%2FwrUvhCtoBkQXBmF2qvLUH8UvCLaJ6pmExKuOzAe24mTQzyiKKA6AlkSwq4%2BbdK0wsb6qnQATli4wMDbn6xEN9ppGCbux3hnsxKYcxm6NpVmDQFwXHqj7cFcKnhpwbILGg5vPW36eENqB6LA7ftHAMkJ9xnTF0k2eXwKL0pCxNrcZXYKyIZxmlpGT92UXLDzbPFvDQ0%2BSNvZRCoscDBZPTxdMNR4P0zbftJgIu5Xbo45jcqeG8U2w9LpNjOz7vsrxF8PiKA4QPuinv%2FLMtrkh0figXCZX%2BY481NTp5X7OX181MEmv4YJC6jXeoJjILxAEoLq9y82anunMYqrRhNl7p9UucqgAptwG1xgGstJwhJrhU9O3Z602LcDOvNDPW4KUGVZyYtfO3vQ4Dv%2FojqD5C7P0yjvNKgw3JDzvAY6pgFdjBmjVFlbAHFL22O9y1npnTMzKQVCviXP9jqmLamo3mgPiiBfNK78LsiZuJOsLSUtxvGrV85%2Baz5j1PNmhmgpo1J%2FdYVF1v3vrw9VqeeN%2BjideRPbF7aYfA0DV0lAhJKpbP57%2B9MeZQ6ndhLpZ%2BnmGpuBleXAjGWopUXaDMSuPBfxh5PZf2LyRIJJDymUkAZ88McCEPWLtabfDAK20d%2B%2F1MwsQIx9&X-Amz-Signature=db32e7dbeaeca60a22e4e8c3180b79797f88a32ed24d3ccd68b022cad068800a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
