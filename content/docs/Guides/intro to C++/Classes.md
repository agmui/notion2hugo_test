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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFAD2NXQ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbFwe3TqzDQFVopGYGFPM5n6MN%2BajbXQgEtjVR6DrkcgIgIbqJW5QqWWvyFEQfufdUutyFrgwQ%2Bf769%2BzTfMdrWXYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMJogxCWMzmNccD9ryrcA0YHoz51%2FSrBpVXDT%2BnTdrzYbJ%2FOoOEUG9Pos91ykYkQUMDe%2FqklywQq9ocbN1aQUThlKa0s8Tb%2FIs1XNz8v4SZI%2BVmyKggl%2F3oQmeHd915WDyDZIwaDAGCzylvkEx9VAkOaJIikOF8fZz6IPkVSMm6rxPB%2Bn%2Fqk05hElbONCK5%2Bx%2Bq70B%2BeHnp83pdvQzZ4BXWVp5eZCwJty%2BMcoSR6Ltnx8GDZmOXqaEwpcI%2FKcVMYAZY3bG12JUd8iL3m4IVbRhtBNkg%2BwyaxRHekXwP3tFZSKah6BfNMF7kqc%2FhgSLQnwo%2BHu43q7OezJGVyi0ntJWOkThFgzQLxAGUwsqItJUlYltn%2BZ01PvyMth7xvnmNnaxx4DEwZ33WxfzXcVk49JKOobbBPx2JcmwsskYP5f178pPGAXZj7KhBs6e4ZAWR3kxZvjWkRZIHRR7O8t1v4j9lQnItZX69Os%2BQtRSVxU5aNBt4fMSd2COX35FfzvL4Nm6jR9qhJstlJXeLZTGpKvHJFT2jY5rDqzxwbAxXstNAspzbhLUZtHgM4%2BRAlA%2Bn%2B9lw6P8q2DeyRyqlzjnUbEtMMUaIQzRQ1kWK3X8fTWYG%2BYcsIPjKg9hD8h0sWZtOT4VI1t7Gu%2BZnJ4ow8MO%2FB8MAGOqUBBIcc%2F64uLk57S553RqDtIwTQlIa9dNXSqmBVep9gWLJt4WWkX6DrsTpWxCjdfEfeuOl8k4nNAMUzpW4yIYLmKGzPifYs06sNYtyFtC9nCfEwtCiPAJP4HoWrsIt1WVWDRalFI4VEx%2F2IPZICDVLdCBvovQffSBqWcBn82QPhtZ4GIDlow0W0%2BPOZDM1zGSUOp5NPCZ1IUew%2FKRit7SWWilaFXLlg&X-Amz-Signature=1a873a9dfd707e49be82979d6dca8a947af52f99b8aeb67e5614d67c2ca55944&X-Amz-SignedHeaders=host&x-id=GetObject)

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
