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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEJ55ZVQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGaYVm2oRFsZoZdaQdfsNmjxVOr1eoByWLh1ruJ46ZBPAiEA6GGmXjDR%2Fw%2BPaUYaoIfwmgIQ6G8FX5TkqLthKMphCt8qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeeUXByR1M7wWQUJyrcAx1V4D%2F01D5DIhAcOnl6hrjMHjQQroHPxT6YwskgkIAwuWojTBrBDVNStgjsLg2GCfSaQh6R7OqV7jQU1wQpTmB8CbxA2tTp1YoEF3FpCJ6XAA8GsmEEdVcihiLytxqUcEVmpXtbTu0kJbvruSqv0X2dbatVVHdJXzDXDdUMQIQt4kHcHXWpyvocLCXWwo3%2FrdpWUUH6F%2BqwtCaWmX%2FlwSH5xP7MyQVf6Mjg%2Fg7m5NKVZcLvm%2FpnqwsL%2BlZJO%2BE8VVa%2BOJ5nvFR8MfXZ4%2FQQpfW49f27jYBchtoi9vTm%2BlUxU4GXHCh6Py%2F4Tze%2B8Ad7rbTGNfu16gK0yebESciPt3J1L7SUy8vlQlRV7o1SM2qogOnKgDoarHLhBjc0iIGF903o7eJ8fsHB4AOpJ%2BaeOeorLwqkBf7LQwbmd3QgARoEe90saYjomu3xdQHNFzxwsHGIw%2Fgq2tA5e92OK8v0c7TLdMCXUUY3IyrQ3yOt6uUFNmYhkwpdioIGCmXCu7R5TmyYMJt1aTxzo12ydwX67zNys78Z%2BSAyanBquvV1qNGTrShPLatMeAhd88pkngkVkDI0i6Dbi48ewkE0TltL27sudL0uhnHZtVbF4aZmvp%2FnyDGQRpfs%2Fm%2BDiYMaMKudjsAGOqUBM2eOtG%2BWyL9w3%2BCf6iYeujo3F0oPzdnCwGSwbh0ZSyOy9cdeEVOalDB4666II65jcC2cWQH42Etb%2BXwXi2WFbGZi49Vn0kodHz8mnZwbPK49J7GFwGV0d%2BvZPtN2qdy7CxLQ%2BPrjecvowlLhMvpsXKOjtx%2Fkd%2BO%2FV5cKfjtbv9Dh5WI6pMBseCSK0l3049qJqmITAQPsGZ0NkX%2B94ZyDCBlRTWIx&X-Amz-Signature=bb27694228ee1d66719a227a3612948d8875257fac4089cebc87ccead4214790&X-Amz-SignedHeaders=host&x-id=GetObject)

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
