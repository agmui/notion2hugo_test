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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZQ3T2W%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDF%2BvNcFy%2F1aZL2keJzNx7y61O6Hsu74BfbbPPKW9hKAwIgRNd88N%2F3mW99A8JhcKnZNqiupS6HOi0v3R7TUgYc1VMqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxwMoyN1ZTDwR%2BKoircAxwcYiN08okjTiXzdUQKu%2FrPVKNNaZaiNZLnLryIWYnch5vf%2F%2BrEXmE9XFZHk1Anz9SCXzR%2FacCaC4CNIs%2FiidU3z8whdHozmqTUyB8988F0qG2%2BArFpT%2FXUzBCeMSLT3x9S%2FUsuVEr%2FUjqlP6KW0rdA60TJhoIVGIvRigk3B2d%2BxW8EYZ2ELyHxeND%2BpeLQsLYMfJdOixar0uMPaAbyqvTIAcaSUYdooe0ScWnLMDYqrVYVUtBwC5%2BT%2FJYfFopsQD4sa4QzF0t%2BEbtQ4jM3VbhrP%2FWdrTdVcN2Wq%2BNrWsZn%2BONQnyjHDg%2FsaUNZ6RHJak6Qvme6p19bY%2BbBZQddOt7871nUgsXRLRh8tgG4rVOQ2PowVH6b9%2Bijwtf73vnKsiBXA89WtXaxhjA47LzmkpNt5I4WD3uHjBL1wXW%2Bl3T9bGRPQ1Cr2ftG6J3GhbEeuCWAEJqdxAfFj0f87fN20ylsDA4vI%2Boof2e%2F6ucl28x5w%2F%2BmhbNWzHPXFowqT8uYELooptqlt8l3ULQSchFNcj2I76deiUpuIoJTrsf6aOQdPAiCx1nRTma9OvasswHzhodtZunr43Pf%2BCx2vBr4Uxm9BgOFEyu84InhnpuOSb0X6FYRn3fAHR5QwoSRMJbA8r4GOqUBYnTn049eAef59uOnDg1tceD4U7hcGV%2B6e7uv7U0UX2zIz0EeQhxpWKtcpGeKpK9wiIkplfvBT5TW59OBmq8h34DAT4t1NsPCKSLdvO2eallxyzDuuHlxCcNvGtfqNK6w4FoHBs4dLQbrSL%2BGg8IrvpNucEkv%2F9fKaF5%2FR4SQWbxRZQxKF3vEbzId60e%2FLo2dWBRuBMFAaN1R7n3fGhfUAaRf6xuU&X-Amz-Signature=470dd37ab967d7391e43f0f22dd180fedcc4ab5e56d4c6a04761e73dd0562198&X-Amz-SignedHeaders=host&x-id=GetObject)

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
