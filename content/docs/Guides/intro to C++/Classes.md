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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2UFLFW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIECTKoSVvCwYBjQ%2BfidQY69I0k4FBryKxo5nsn6vLN18AiEA4UELhhXaat0uwApiioyz4B%2FNIkGuHtxijNRXhWsbB3Aq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDADmmEeKF71wDVo9QircA0FDwsIMZn9%2BLtm5zI9oUbeLomg0cqfnpBPLEDXhU4nZ1VYZfyFNkfyeAPvhMJ2FiAv0ggrmd8uf2Ts0%2FLRp8SR5wfnEdeWpSbut7msfVXL%2FMp66XRuA5dlaXZGr6VjfEr7KYg5YnH3XanbbzPVqHRQSMuWgXbVOzv3YK545vkxkjPL%2F64nXwGj4rrQjB1uDuTJgtiEnMQ%2BKvG1pUnnGDXrn5qT5x94tiBh1vp5djKlgH24WptRHR0XkB1Aj%2BdPw0U9GeK6AXWNCwZ1h7NXekEeLQKjqNgXt6u4O722P11lPvE%2BD7qEnltk6EDz%2B3ea4nrus9%2BOHCsjSQm9iBsVAKmHcVsuLSz7XfK4crbxM4R42%2BU5Fpdg2Ru2uzWi4i7Hu6wJw7STgWLKHsnogEUOpGSaYSF7NqiQIrYe3hVgLUOlOY1EWzUn1BZJLsidLwoHOHAQILbc7dxPK7DJL%2BoW2WnMbX0ym9F3Ds6GyhwmDD4nUoxk5k2UdQ%2BL86KH7h0LF1dSq71ozLKbqZoGe04LTHWfwgg%2FJzEwk688tilZHaiKCBqZ%2BQXQ60u9khlWoQE39uu4j7M8Hkf2V0iFm0D0gsQB6xWsXUf%2BZAgYZzEF9hGOpptXWp7sJMZg%2BrHYWMP%2BG2sMGOqUBvb1TvjU8JCn7xNi1ZwBG4qFA2Rqg0m%2Ffz%2BdsXzZb8PGH6y8%2Bt%2FZoMbFo7fkURT9ic%2BPRzjrD94vc6k6ecU5LdoDC0jC7zt%2FP0mSrarxVa%2B2uGpkaULcPTzTqODR%2FpO4wke4LWcKfIeg4iCDdWE54gtBzta%2Btjdo9PbC7fHBB7lvHQfnFg25QgkXyGcvyDwFHwROyYqE6UfE0fZq99nZ4LSH76adn&X-Amz-Signature=aa1a2c10f70f7efa9794d55a70eda952ce9815ea93985acba43a90f638ccd777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
