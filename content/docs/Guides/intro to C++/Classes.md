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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PEGA2FO%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIGY%2F6ihWNhyn%2B4ugNxUJ1%2ByrqpetbyEnUTHnOzwysxZ4AiEAtRseYgK%2Bcg%2BIXwLaJ1WG3BoiYGBwuM6Dq3j2dZZOnD4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP4w4%2Ft7Z7IqJCztYSrcA3sNjcLjQnK5aY5RS46Q5AZDeziZRk%2BvbWKl1s7caqQsDHwebFySpFUonalex6soFFU%2FtE0Ck3CImnSfTnWZxSKiymgNFA6SSUCm0mtsxRYH%2FbBlfJQ7jZPXDT1mGUs2ECXWRARNljpXnveFOxUNJzhO2cH5sGqI7xZAMQRabXP6NA%2BH%2BhPsJgh3FF0avEnIJ5XKb%2FIZVDqaWuem93CBhRZ2B8a6kUs0jNKMqcasb%2BBAXqQwZqPRID0RojjfPvvtNUFBZ2iIBeSyX9LRJ7DOlFF858kmfvgYaRyFyQuor8IYIdWMKd4SzA2nIBzSAkkpiFsWPdosTD1vkDrZApPlQk75l8CvnFekh2VnI8T7PqzbMc6N%2BEmSxZmpSkXsP6scKGE9ctcoACIEZcTDcPuaqy6BfYZStmnsWWz9b3NJpiSMM83Nc%2B%2FDn1EOE%2BM9oyruD7D3%2BIArlHrol%2BLzAPzZuev8E3JNCEeiHbCIr6C7RtJIySoIT1BDJCuTq6LwGc8gUAAoXdJgBMBV3xx8duXngvlss7AH84nu11muG%2FjoIMsZJ49XXyXzV50xltMhhJhUDAR567WHrtmO71Bky2DAH1GHcHJ0Zy9xmkFnb%2FmZAepchu4%2F5QBqwOZmIK4WMJWHtr4GOqUBCiqKILLCriXqBZx%2F27DhQ1D6E%2BSJqBWx9EhPo8uss85LMlJ3ccrCQOa2tzPtfUrTw%2FcYs1c1IbjtlFX6iPWcYkPmDuK9hNoYnV76TLZftV%2B%2F9cVGjtp1aPSvH0cbTmBArcIsUZsM5Jig1RE9SY8oyrIdzUH2RoLOL3GdrQ6JhUe5dJe9v%2BlHTuF5vmBETsN9QVjxyRQuBL4O7IxeiRWfl4qbZii9&X-Amz-Signature=1b261602c7682ef951342a92e24135a390a22cdaa8bc406bf446ecf6fa117bc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
