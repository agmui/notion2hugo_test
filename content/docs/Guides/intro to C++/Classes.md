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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3CBNUH%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCCX2W%2FOtpMCYCtlNxpt%2FoYCr4qU9IJOoDmok2t2Ob2RgIhAPA%2BSWPcKejNxmIK5xjwZ5uXGsnhITPS0qLuocRDWL97Kv8DCCkQABoMNjM3NDIzMTgzODA1IgwsJmHWo9JsemDxihMq3AM4t6TyQwqAyy9rdIOSdlomF%2B7ytNu3Hu5os5SoeKl4xHgrcIF0EBT%2B0Fz8Ia6%2Fj09c6m0ponA5PGXkYUW%2B72VbSVxlNskYrq%2B8em%2FhSF0iXR1oYczi3wZvcRKeQ9D0mOCVEpP63Wi%2F2W6KQAysZzxlrPH5Egq%2FjLKUKQLadEKx7UTzjGaqKUblucD2HsD5phOHpYZO%2B5AaBiYlNb9r5yE09ELxupmuMe3EXPKUUTXE1TbUGLZkhGO0drHOVxQIG55PbO%2F5ZsaZK2tEx5pdC2dBtbMmtjAh5KuDXWOHDjpZI66Y1QFlmUda%2BkZ%2FBpkl%2F4ndiPxdJE5AOrhEeLxa19uq%2FqIj3RUiUx6ZAX0nU%2BNdLJmnO21L7dwu8BXBw3iP1mYbh9KNsHDqGJl3r4hXaJOuoLzLPBLXswhNnEf%2BAJVuca%2BSIcNaFqIgytYW0uB6cylJWAD38JG2Ct5fsCHZVpz2bANZD2z8%2FDpq2MTqPglPtuB7BFL7mQqMq1JQN3fuO0kw2XS2uZFOgfCNpdP1gY70oyFgiL7L9T5GmHHORku%2Fd8pmgI4yUGoIXKwufEcq0V2QECuBI7oqVnG7o78xBkaAsfGcv%2FeiGst6APTQ9z%2FSyq%2F%2FhKqzQa3KmaS6kjDFsunCBjqkAZJrPLAxZyv7MHxU%2B1Buhq5HXKTopwPgifiqTHSJjvw97e3NWM1CxWCwiStL%2BKiQiGJrr1X0Jb3%2FRSumc2YPqk5zYn34j9HxKtM9XZzmjhjmoRPDunuE7ixy0oM%2FnIXmIwL%2BSwjDqeRvnVgug0XPnnJmEPUqer8B5c88ZGnt6mtVDtDwr%2Fj5FlvR4qcY3F6J%2FJzvGlQMSIapNHhv1wT%2FgzkwmQUs&X-Amz-Signature=e3ac1cd573a8f9d79283f24107667a7d4a685866bdfaedade8f6d7e576b80489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
