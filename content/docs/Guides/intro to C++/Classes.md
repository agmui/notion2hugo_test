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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMPXCWBM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeEDRFwjmEzBGUsdZ1CWiAbUUNe8QiCHdCPIlYkvi8vAiEArQdERMZqr12oes%2B3NwtskeP2vPZ56AeJMCMQDd1FT1MqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwJtptpSwlXjWaWpSrcA%2BBi%2BBE2MJzFRpOBIS319VvOw3P5mVgHTGAUYOikQeZZmkAwbgVKdhFTjobphw5PpnLOLChCO4a5m8XpnjmXwpkJXKygvGxo9iOcxKNcaTf%2FCr%2F%2B3WkkGEQ%2FHOCIBTeQNF64rojxlAiEUrS4uUEeXbKu8eYnZMalz5e0QOPZUI4kmJmNxsUHdZg3WGIx02KRxnxLiPBUmufEyVOUfDN8knCmq4sVXD3J8zpSl6OedncOfcyIR5t%2F9Cdwf3elDc4cVZguKC7yNXzvaT4d36jw5uu2E%2BOdwiKyVDo3CXOZWbnEtZhkTtLwjYqO50VoKahSSxuhBd3TcV40gn4f0nMH8%2Bfd62V%2BpHSiEuix2C4qKmeh8%2FmAj4fO%2FvzOPkFQDA31UiaBsATmhPuH6z%2BxN1mmP3%2F4xWt%2FOJKJrSScpegjQm%2FyB8RMFkWJc8oa2h6EM45m4oCYY5MtRyvFp2WQLACLo9hQLwF38cScYoMyXJhxCDMaOhAMOQhAquiWuTx3sOrS3PwnSlXQY%2BUizkc1YQQUcssIb87pQ3DlR0yHnnBT87hqwAUDpECa5aGC73dQnTsT3cpZQjH4THTYxVcP3jw4Z22xZDycfigGtR6UIF%2FZuhMqPQnY0xlu3rVihNLmMLyP77wGOqUB5KqV%2B%2FN14xiVJKY4%2BmNaVoahKgnqR62GfDgAA1muy9sYBTsztSxC9w3eYMeTrbNWdYYvVgjfYN14RHwzgZmFxs9MgbS3yh1DIi6y99%2FhbE6BXXJ9GkIHiRPlQifg4G4Hu1eCCPQvDI%2Flb3Pv3NnOmgQjrcpwBaq5KBgFaYQ2q8ydbFu4lLMHFtE5cl8g0lw%2BJ3VSrl5t9zXDMLsHlA%2FiDaHHvA6V&X-Amz-Signature=fbd6034630665a65a0d58e6accdf1c3b5e8ada1abf96f22873f1aeab3ae4099e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
