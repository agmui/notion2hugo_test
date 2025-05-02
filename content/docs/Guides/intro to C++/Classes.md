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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEKNYPKV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICOReNIIL%2FRbkAuy%2FHqr%2Fw96CX4gVGv1gkTtyvkCD1B%2FAiAlpywA4h%2FPCBdIqAnDNtCLCfVPDQJnmbyjCs7yi00EiCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSNRkimgtmsdb0KSAKtwDqF6Jbcgpkh3ZogrHLuoalZVGir5QGY2aJfyCXfuubnLct5pBXWbOhcuQVVidAI8RpE%2FN33c83bKeakj8pSD1ZADbF%2ByDer2ZA9BmuNr9Ewp8wFlYaBVvBwwTe%2BPUkTZ3Zo6SrM%2F4ugGwxno2sG9bqvLzGHzUr7yJ7VUrYp9bLHg40XDjTVplT9UnAxonYmSNekaVjVdpbnreq7YNQsvSNhiwXEV2W6x7Zv%2FX38mhT19eeRDv%2B5NbHNEWuQeh5Ow05n%2Bq1CgfKuIOR0Xai0ygt5CzJ134kkkhAhbrnQB6xw9%2BsbnrP1g0UtjLGVq348ZvUhuH6mK7M679JCtOd7YWAILiQ6kUcIrCFhIwqW7zyOIIzMKWNXObkCR6NWlBQRzIiHWNDFVl%2FDpgHCiJUkxh%2BqXwnQovLbxK%2FQalmZi45SgaofyHoxM5agOVsFwxtJ6vf9m9qpUNjLVdaIQssUaHjxhMFPCWiqgegl%2B6q%2Bi6s0LuapdaOm9w95OI%2Bzqum54iAEDqvphsXwTJtNCCougTIhI5%2BygW7TllqhYbK6XrUJxKixUdoX%2FKAXvLzUq61T6TNyWZ6Dd9Hfc1QNVGTxg8XCLqShZ391NnYyiBuqQBeJ3zYG7gnqoMJ5ipgGowmeTTwAY6pgELd8LBYggcMI1vZQt4KEMYejgIISQYdKhBqUl92W4j2pzTtbvsWucd567JrJFlY6kDk%2FjmZftL8cDaGyIYPQy5yefwgNZYLn0WVDY4BiatvBU%2BlFPNlvcPtHtUDtktSUa7yxzFHTqFZWcMEGt5SCG2W%2FGSTfTeXinE5bQzeTg%2Fi5JVJh1HRDYEs%2FrbOcATS2YBt8mrFSwpKpoc%2B4%2Bv074cFEY6izuI&X-Amz-Signature=c70cd0d73643e8c91d85686d0c976f0a3cdf23d8aa42f0c1b7fefad92bdf48fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
