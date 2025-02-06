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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5ROABRE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCnwxpNbp5TvCAbtF0abJjifExfOxft5UbyJIJW4xC64gIhAMdSKW9aFEomICBi6T1M0hA8XMQOAB%2FKshdkiIW0h2htKv8DCF0QABoMNjM3NDIzMTgzODA1IgxFJYM%2BDnQLejMX6x8q3APCkrNcdUBPfTFBmkApJ3E2ykkUjJR5%2B49G1lv%2Bcka7U836rnpIZIs7ni0IA%2F48oUIF2vxBS1VdPKkwNt0N3XwP7W%2B6VSjf5d9k49B8lcqQPOUWRMvxV1iPLcwlcYBKDRhJfsaeBouWsBHKEbRhWqq%2F5AY1whTQF46oj%2BUvOa3%2BIWQFDmMYU3dXw4t9jF%2F8mq5QiQ13yYBiJyZBziD%2Fwjcsw0DNM3UpYVjYWROjxNbClq2iK%2FwVrKxejoSadkiEBRNtcYNCyGBRr1K3qEMbtkHYbqnfyxDB%2FDRv2Y%2BfU%2BrUkmZKY5xg%2FnZ0mQwSgH1JPFpUABdsftM8TYnfthOlRRjubQUNdko0BABILTWZ2A9msEUTA5O%2FHwjywXBPqWqqEjg5uIOAq%2FCYITHaGk0yfu6Tu07%2FpleejXGRTZ11%2BmIEDpbpCR362MTPR3z4sCfYv8b0CXdNdTAyVx78silB8cunEY20GQyypT%2FOLapy9n9mcytxNYsoGG77eGTUcfePWtPEMBUX74HLa4kbsVlP17isgC4tC%2F3o6inYDtp1GhXGMJjEDt0MazX4ZlGTIzLA6Qy3v%2Fv6fBc88uRcnbZcIjqHp258%2FxaEFMGmwxgkoqksHgU3QhMjXUo%2BLmDhIjCZxpK9BjqkATHvYzshL4xshtTzIPGFpNwmcAwh5Jp1j88oTEecliM05YGmsZeO7d3FWe9nDPMBTVFdcT2JkRrqVB047sFtOCqNfIMO%2FzCHaJjqBcqjzHQzzCSYAMd2gPi%2BcodLWO8xEvvTfTjYusvb0bB27w4%2B2WVZ9OUy6dvaYmPCy9pEt4gMQf1RvFr%2FDCacKwzYCk%2BFuT8u7UW3fu0MIEgEUKErnyBP6k9g&X-Amz-Signature=b2cfee0d965b1b28805c6d2174ad399724cd2978ecfc2a1fa723d2fe4c1524e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
