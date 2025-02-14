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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWX74UK%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHyGbj2fifmWLRIgUSMUc4QDeKoVruJviHjrkZcPnnULAiEAjXzclL3HJiN2Zi8i8ruDZPeH7fnF5wQZtL1mORksaXAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMKGSSuWm9wJIy1ibyrcA29PeBDoUfrP0EiE6YxWq6lXTAxg1FH5DkA21%2Bw8AGLu2ocjIVTRm7Gpa%2FtBKS0z7m0y1qVMOr3ljbNTqQiBTCSAN67tqLMQuKONYt4wTQcOuF4Th9pbwoUVfqYFl0la8XkgOxMguIVtWSsmpGfFlbshxvGbhJKZM0TzaPXS7iSR2sBrZoR2iyA7s6Oote%2F2oZ0jVggrR78rIfgPMSSkAwZes%2FBDyqF5qxgWHcCn%2B5%2FS3Z5rtejE6Sgb%2BVyb0SYdq7ivdQ2m%2BK2Yi%2BLJ0DSrrIgd574rXNFoXHe%2BD125fdA67rbtOFkJvv2qm9AOPSPF7bPJNayqbMXcX5xc2rDeScC0kriQKnm8%2B99Z9geprU1fr2MTqAY%2B9e3%2FJRu4CimLzXUkFF0ZesReokvQJ5Q9zLPeufG6CLwmWDCohrCE%2FngQIMtFyiwvIbsGjBuQ30JVyBNAc3UjtNOJAdqdl8hOaojGcS8Upmy7QN7Dpa43oe0d4hY0f3JU%2BoPKoOIGUy4ztNhqLgZPf1txXJTRcuOZRpI5XH8n89r5OaD2vRaRo%2BBg1XzU1sIiae3o8SwU6PO26OW6fQSPRKWzeYjCRIYQ4zrTnMexTCq6TlsJ7mdb6dBXf4tqgp%2B3zeO%2BPw8IMOzpu70GOqUB9ry%2BBbitl%2F42pqOD8KBAaxapMOcC%2F7TCdbirWg6VG%2FCVoy0PWLx4jcr1vT8IIvNAh4ieaVBs8QHLsOJ%2F645JIQSNY%2F1kaY6A17kdyj5MDzB3UkL79A3bd0CIENfH5OtBuOQOJaHx%2FrV3yIkJ7Y%2FpMPJaDcA0%2FZU5fSjsHQZ7EIAKialAZbhE82q9xHh3PbT3%2FAeQ5I7bn5pvv6AMQPZrWlUUKL8I&X-Amz-Signature=2e408df2e6dd4ff7526b471a2638200bf05721d12895271fdec17a2e8f0fe06b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
