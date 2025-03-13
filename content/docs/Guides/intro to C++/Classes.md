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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOVOPSTM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiAZp8kP3wT46yw7nmBQoCWAZD00qjp0CfHJGpqkiaOgIgD9YCv3elrdiD5VaVIpKMV1gHUTk13ra1qIZHoRXeK5sqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQFd2QyPdK%2BgaWOLircA1oVLIvnORBSyBWO5EQ5NNSLrau4n44wrOxIi5B3Ts7SEx34R4%2FK60%2FVPT6HGiT6I59ClhH1dhbA1MT0GmTteEx8jefolu%2B9RiddFo20YnoaSbtwqdHBp4Y0m79N%2BIsXyoK6C2OtmzG2Fpr1MRwR7P2%2F8D9weZWOHxohj%2B%2BI%2FkNAvCi%2BBqwtlG7DNFbdsJGzIiBGfbq%2BsqdWDRbdRuM1AbmJam55l4YZDIT0BQ0Iwc6s4VX3cDaHH5jmLSTVF%2BvwyEw2bRcEvBI8JCp8ZkDXIWNaqsYYi2AAhDdhIZbf7L5jbMB6kZI2Vzb4PgbqQkisVC3B%2F7X51asNzlY6sFMjV4AtcyZcN9tZ2cdkpFy27z%2FYeKlYPCbrzsoVNqWxEj%2BbFvchfUK8FXwpgBHdruixfhlQB5glAG78EqoIt2O%2FTUk19nEbzT8%2FLc01NP%2Bzz1qW5S6b18Qrx9Ngu4mrnzE03DAzWpD%2Bqm6sIRVJuazhukySheig3HtXxJHMJQT%2B6J5db6VmVeyKwXOZCkwkF0A%2Br%2FHz2RtDvJonHLRHJELJNvyWLgiqaqjd8GWHFcXC0BmV6ZFWBWjNdrSgVdea3T6lb1EFicqZozj755kgaO%2BQ1LPWwI1xiXsGBwOXAdz%2BMJm1zL4GOqUBPFvWtU0xzHCac4CDLTfMVrE%2FOrVQ5ST%2Bdoe2CqJIr34O8nTxZVJw8HL3Ik9age5q0s9TpdcqOly68yspUxqHSAQ%2BkxqMHi7NIUlIG%2Bm7y0wXfEGkSkfJQiai4kXUbqEMO6uDFm9YR01FjBkaw%2FzsP%2BnEk5M1%2BJJXws%2FtDXhE3F%2F7wh7ak9lkZZBiKkSN%2BAdaZJRb%2F2EynQvxgeTQctYt4ztZyLxk&X-Amz-Signature=2b820b1ff7dec94285505c63552da5cc879beec8f9ee0bc5444b2424643048ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
