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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIFMDAU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSA3zM7X7snKbIXE5dYp%2BQakypvb366Yxd0rn5zS%2F5EAiA%2BemobMe01MSVKVLLEH%2F8LzuIC7t6if3Gxi0ozlP48UiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9baYvD81Kzwpv590KtwDZjVlACobjgLWytjKrPLo%2B%2BMPZWrgD3ok%2BjagDaMeJMHSvfPo4oZukwLXKwMIavj%2F4vDH6nYBCELuSPHKBAOBgi7DgfTCIKzjyDAg%2FL%2BXwcuYsFTzlToYzQ3VaCvJ05N0x%2B9o30CzNDd4WTzv8vFlEYVtIIQ803a0LlhtWNpQmdJD%2F1%2B0es3lpRhh1o%2FYcEsEuLV4ANzFZcg8Yuati%2FXw12C0QTUAqaTrulUtj8wRZgWEUqyIK88P7JA0%2BT5j2JxS0pCZ7c02P5MS7CnSq8b1QC3fkW5ZAgdmCvodpPCb%2BbB21zRr3QTh09rI9X3h4NDw5uA1hojJLA6pKc%2Fy31uoF4fschyXI1h1WNlyqAnrrJMw9pIv1X2Gw3l8Bt2G0EqWNBwShOQQNB54sCKWFvo4SCY5qzn8TYOoqsduCVCdFhDW4u4lSDVFJcfRTwjtoMG5tPnXduIZbqAuCHiedOlBLcWZJAO05XHuNz4zVTb5Ei0rq6pjRxZN14bp6SDvzdgEwbaCRkk%2B2nJ%2BqSqnDRGt%2FnsCw8arErNf%2BskwFCdScFrHiDeliPaYko4TVibCrxRkm6ZniY4dyulG38MkWDUWM1ZOk5BsRRDAlD%2F0l%2BBFTNhK2WEbiqlJb9IPJkAwya2wwQY6pgHnpRjtC1OikHTv%2FIt9tvzbvkJdqcpWh2cml8275cXl7%2BwNb%2BfhBQY8ULKUcgHILBi6CuWI44LQlC4Hd8weSdoEkWwdGJEmqxSdrS%2F%2FqpbnQTiN949R7CT41DxiA6PBox6W5MWIiTpDEK96bCvnROO1MBJ46%2B7E7N5JlZ5ObUwO%2BJA%2B1S7FdWfVkRcBL%2B5tqovhfrrp3uasjRDrXhw4y6h3aRW88nGd&X-Amz-Signature=355b29a84c61a5acade52d140c1f0744a7bab8bbb9789404cfb899d233581837&X-Amz-SignedHeaders=host&x-id=GetObject)

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
