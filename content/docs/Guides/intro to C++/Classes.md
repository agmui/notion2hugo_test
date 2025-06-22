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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IDZT4XC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkgzZvR1YY5uFjkEqkGT62pSgjdh1TWaPuGs%2BsDUVzcAiEA22msYtdeXLNZ6C0tZKtQK6SdvsMYMPBUPljwrqVr%2BsAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlcXUL0dDRZqAFjlyrcA8Zrl24kcDSJjNx6Qathmg1%2FyRO9b6xI9CbvT07jo%2FO22V%2BPROrKn8wroFtjhRoxFrX4fUMh4C1TcnuMgHFBJO1VXLTcOQ8STwNlGvOUd9elT8sSuMMwu5PKZVlb5m0JE%2BDYWDDzp4up44%2BcxRgY1R3BRxU9ZmGMzEi008w1OYSqmLf2fuZHtOOwoWtfGyAuZfkOUBwe0y6bIMfc9%2B0XSzF7HXluH%2BrYFFkPphC9x1IgG6kOLlKE5JcVbWqNVSUb%2Br15hH0T5eh2o6%2Bx22hpGglRCJRVsHpeXfCGoXHCMo3K2VWsR%2BI7Z1OYykQlLtO9tBbj%2Ff1JsmtWO0lM145CjY2FVd7eUw5Iz1pajHvzvnzu1A3gAeAVtamlRTzgDorkZPPjam8NPGbVBNUSk0Ky1qsY0gDIymVBThkaLJ%2BPV99NfcgsHChLdfJFJuzVjmDFaURxsniItwnM81WHn94csV5%2Frsup%2BVwDAF62YZlidZ%2BCb2sDNDwteAkCH7PZtakgbuqmwxH0%2FpS2uapycnmsstHAkrb0ebqTB8aeezcNEt43UFfZcOZU63TCl5hIVTTf6luIrN6%2FwaPb3xaa3kK1t5BhDYijMPIEKmruOVk2fLdXE%2Fw6AmeAnlghJmGmMKWI3cIGOqUBzeNbZAzKajUGNRK4Bj0aTcbRsJXzr82JDvKuChS5AywOz1D3fU%2FX7vEguX5iGBvR2Jd6C9YKjdj0xRgxEfFslKvj8XWGH652%2FPsF6UcHHNhBcKKImVYXlYdRmcJxMJ9K2fHkCxgwmQl5PdeceDimuPY4s7SubS%2BtSkG%2FQ3CuU2sQp6C%2Fv%2Bef%2BjmVhRwneSI%2BXuz4IM57gLZNkeYwTWrOSFgb65n1&X-Amz-Signature=51a3b890f9fb0d304326a6529d00067f56532a6bed1f03d8a8b527ae0ba7842d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
