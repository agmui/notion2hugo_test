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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SLWQHRK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXcJH3xlcIdVm%2BajWK2vkL2G2nQvmeKWWHp1Is7EH9TAiEAm%2BbEVgAJuJieUUm4VL49RjTlJTNwn2JmtVjhamtAv9UqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBMvjX0o86YCQRUBircA1HFqDHYmKuP2kHPH7a%2BzBrR64YKu4dUYORAN1Ylqjn1m8qptLHkMZ32NjZCl7kVHIdBQTnlJKqu%2F3iPMvUTvoBlgKDWSDE6TkMvTrW%2BdQ8H1tDMq1MNBSkZAmOaqVgJ%2FDeAJmGJ7pjHuqPSGIAMwUjLdkWE8Qtxj8Qf6mVyqxr7oQ3Kq%2BfY4PFEGXB4bFaHdwoaCVYld8g4be8qQtTxMzuAVXs8viofR7QMlldEAgd4qhvt7zwfi%2FqioCtMsxyMy9PzcZJsfklOMsi6lD4fn%2FAlJmOYSOOojzNcFH6%2BI5ny8Zo4xj1NxDGh3TTmJwpqOyrGmQUwjYNiq%2BjtiMNd5pNG2T5hu6BZ60iIiOeSo7knV7YEwCdiuWR4vhbZQ9e%2FFDb26VXRr4Ry5RsTNRQui6kCQbOfCcaQe3hloCuxQe1gRPQep5O%2Bty9qgfaLmVLjMGLgVqUytmWRqLbbFVEqSkEqlPRL8C%2FjrheAQo7H69TPqHPGx2NSY4utsL7t%2BHLITZp7ZWBUf1Cxzh7dAF%2FrlKTobFxSaLp3nuHXHxgGG9lUjIaRRgUFKcLTR7GR%2F%2B3HoSD6MxwJepcqg8XkWFcD5CxZkAOAnDKhE5rTOr3AakHh%2FfbqzL13WL1bx8nFMIW9l74GOqUBinFHjzZ2YNGPD%2BukTRQkWROgXGVQ1f94xPNYoME%2F%2Fc0euPcece8VX%2Fh5Xuj08jeFi1k7L3Fu7Wzd%2FYAs5DtzDdJk5m7bkR%2BazNfclIj%2FM4SqDxuL%2BzAdI6wr%2FS3%2FO%2BFeJ9eA%2BZUzrf40lRb%2B1J9LDNSws9LbogUwb%2FXRHUOnfmkJTLgIi53CjLiECfepRMiBr5t1JN%2Fw0iTXoYe0fUx7Mwpj0Csk&X-Amz-Signature=fa627740b734f6c2d3ac6d2c37f8e0c5d92c36167a5af1534d50e06fc4ca409c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
