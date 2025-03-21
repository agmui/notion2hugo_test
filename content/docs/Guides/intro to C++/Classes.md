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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662STFQX6N%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDgTpa0ltXTfB68wz7qdk6qn4indsW%2B7n1cTK9tJeqc7AiAkqYFMd03D9%2BfOaYe3FWt4p%2Fo0wlrUwB15nAWvhpF%2BViqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4XzZlo0GUMmnA8vrKtwDuqwlWeNc8MlWF3u8cITxy5BNkEa5BlYrqiXBadHjLq%2BR2O%2FlYeS8CEwRCgZuL0rNyDTn64qvI%2FiTyOvnTm5CGu5%2F85%2BVzsMDxnX8VPT%2FbwPUdUqHIzcyDecHaNFCO0LaYeE9es4y9HskaNTC%2FljoUSFW3ql6nOeIkhDFkiz13mjq0gP%2BrIUB3UA3DpAMNybyWfmab0w%2BbTyXSmcHS%2BO%2BErmLL9NQYzqREaqgk%2Bc%2F1fArxTDpWePBjz%2FhuRFqUhiecqzAuWDmnTAbQHh%2B6COoSlQUf%2FjK1QN0%2FbSe5eU8TBwpI2zglO6rhZR1A5nhhxzbGfd%2FZSXoqvA%2Bv0RFNoy9IWlUWJU%2FvUAs7yEHOpqwVtaIqkc3ZXevl4hgwNxldILfCz2rfpmhAmagLZyzFCezewER%2FVizMSWhVS6GqbFhmAxFX6YmWUWq5wRANiC99U42gsyaU8CcKwXbjZUwojKWpAzwYvOVOg5%2FQd12jpPNwAVj6VpI4qZE9caJPYi9zd%2BPuDHehHrxnNGrb34VMwcyPMqE3can%2F1N3D7egr3xNMNyjpt3LQyvkn8zVvX4YlUN2qei0fw%2BRWTxVXqzZylYsvKUWRnpWTy1yfHrCuSRlpV48iA0FfWi1lCRcjlgwhJv2vgY6pgEsCz4kzvT2jHNvNelrFJOG1gvYLYkZr00ZFKhwbksj7flQB8SSP3wRTGpbwl1ZMUjB44UUFUEUEm5u5NHfYp7sxAsqn3qwE1ifuykL1OJtcgi4icVdJcD5bYhaBjbdPZ4000C1Fd6DzH3bIC8ISORwSDY%2FNHKR0sXiBQhObxIL40qzSGL4uUh9PRq99GnCZSMxDJgBbC38SJELXNc1rPXsX6TdpfC7&X-Amz-Signature=0d2329b21c907fa2cda432f7746a6a4d85851a4dd7a79a2a0b72fd9cea6d9532&X-Amz-SignedHeaders=host&x-id=GetObject)

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
