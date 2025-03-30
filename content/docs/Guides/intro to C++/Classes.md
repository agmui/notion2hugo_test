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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY7Y3NXW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIEcL3r8%2Fepva2Lv4UISCsctTUEvWxSccgPwor3BLYXuzAiEA7Q5iMWscCi56BzESrx4bU2fAyNAogYfljDrKMJtEgscqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAv5t%2FnH%2BhgztK0LcCrcA1gnMQIN%2F9fMVoadNDvr72zx47dy%2Bzi7b4gIno%2BRniJmV%2BLG69XgPS78AgwUcxfywaPzvCa7bEgZcJuC5s4SYWroVGI20XRnEkTzE6BMpedjpEMaXF7MdAbvH%2BEfw9YeQ9DF33R0l1wdzVqfW%2B9NC8XDJGo4EqApwgNUYCmTXRZVfJKjl2msuhTQvxvu0HR8VDY1PBUggxiQ0oP726eEmQAsjzi6DRuyHMCxGFqfZhz0J79EjunEvlmPjfIrDEcHKxehfCNYyvdiErYAaYWrcgb9gSHgDIP24ITJiqmZ9sbAlSD3drGsYo8Xk%2BoNBVpzfC81yaU%2BU5brFE64X8Y%2BsCtnMFpxFaNbsfhA5VelDv56FlcuxET9olkmzGvfF80kuVtQzMUepwmnZbag4Qj4Bk66mqX66Rg39adIw3kvWf3s%2B6EVbnzVkVAOQaBPMFYzQO%2B7KDn2lqifw7Srh6zy%2F9o14WX57SalVZIj4IbHvnrfJTeqZAN3ao30wF%2BX50%2FF3Xq3Soi11MQsZiM3mrVAaB48OW1wyBnBITBPv%2FUrmLl%2FAJIJDwrGpQYOyitkSY5MhcdDpMzfhhs67AUj%2BUmSPpbAguBU2fejOmwrhfJU37N3uwyUbhOH60TIMPKqMIm2pr8GOqUBnqpORrV3oW6JQ1MU7lr8o9EtgClqqTn90CvzHDJDdZSnpUlYFoxJf7MY89YHAAhPrS5MTLkydK5cpnm6DPCwFhQekwxtdkqBGB0765BMCo3Vaj5OqUgvg2ndM3C9YmAiZ3gsRwQYaZ4BisMkKe6Z1wgcwmAE3eI7U3hAMrox5A%2BxQRS1ga5QuTzqlmNa%2BCjCv2L%2F9tQ9yiWLtlvy9n08Ggcz%2B5JY&X-Amz-Signature=21f7198dda448255223a3ecf5b52d58684ed8965e9f5bc4c2af88ee68b71b5f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
