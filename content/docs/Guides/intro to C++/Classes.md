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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4LE6RO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCSvNhIyLM7C4cjkwCPqvtlh42oeuHg1wQX%2BgKiM6GVBQIgVrczats2l7rME%2BzVOS8vmyA2cCFwgZS7OrvCg%2FRrnc8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVxFTABaRoKJ8CZDircA0J%2FBe8vRgFPbl2uoBaX8Vk7VHakgj5ZznSCPBXZFSSoAgV%2BnhL2nOxtpj0YuuyyKrjTrtKEkJ1tziuIsG3X1bd4UVyeEnVPYRRwcUxpKJLYuyS5fWwFA4Xzm%2BRU%2BYQY0pF8KPdqRjnean8%2FsC5HMaN7VG%2Fh8LVS8V0IC%2BgNiqgR7PS2vGDzpg5riOvBCRhRSlpgmxVRjuThedAmjLbXkeWXrS0XSR4Mta8z7d%2BRFv1W55KZB%2F92iIfD%2BryNLTdGU%2BqpLDU9TlhOCHPUUJNcFlnw0XCA5OGbYyOZUZowsdMl%2BbKDNPtkdXrguU2FJUR29fJJbh%2BgdeH%2Fpuw5Y6Evcv4ThR5pJPCgeRF1OwTeeGQiX6pidNoekSpvs1Ab2MXxuEn3J4dNbZsPxGIAtN6y6xFwdWj1rUw006V8vPv30kHYqnyZfz5dWGY64lK%2BnHd%2BV5ggc47QAh4sk%2FZZ8uZ0b6%2BHn2%2B4hiLU%2Bs4NfnL39%2FUvldY5DfzgAuw1DmDjGRPGQSYytYGs04XkQLjRAK8g0KXWEN7YPRNohBk%2BxrA9KNoRloYEWVmEY%2FPgBFPGdI9MJkrIffdAgTThy%2FBs54ot0k50mdMQpZBQHg3Y8EhPse6reonJRs82R20L9HBAMMnrwL4GOqUB7FgxfurqhQK2FvpwXT%2F5ob0tu6dUaUAFUCdYvITimLx05Gjfz%2FSRk65BIuCj2bAxpQB6bdW6oWMcVkA5MI99Y5b1FSmIwqmN1h6MFd3o2AxsQc5ENGh3oj61DJuK0Zt0ykh1def%2FcalzvXbNS174l4bNHv%2FVMzsoVJocVk64ydRkEKoqXBUriZQE2Gb43H2KijZ4FsXVTcSI9Yx5Chh26aS8%2BLKq&X-Amz-Signature=599c1a09a8cb51d067795825683286b004eea8c30625a344bde56ff73166f788&X-Amz-SignedHeaders=host&x-id=GetObject)

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
