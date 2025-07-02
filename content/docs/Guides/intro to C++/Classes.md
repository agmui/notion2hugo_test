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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTG2P7BQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbrttso1SR%2ByrwX%2F8uCR9NyP6H5oEzhWoSeOgLEZsUzAiEAp2AvvJ%2FuVUI1oqmOgHixQEzeRluhikday%2BEzObt5zJEqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsu%2FPsaPPXa4XX7ryrcA40hkN9jE%2FRbr726%2FRaFALQwgJUQ%2BPyzhl3O14OMEUZjrE9yYL1Bj2WFzWFh0e5q%2BDBOJbkdhj7GoDGB%2BR7SxBRkAXzkWQfQY%2F56x8e9hatgzohoitknJhM%2FH92amnuuUf5RqA9F0bnBLRwAndRmzUWzGolmtpxZ4yNwezBYMQ6Ggzn1fIGXufs6iKrpdFHU1ESAZ3EbDg8JYQnb4ExhfVNtzQ7OrojUFu%2BtGhwCaQlog9UfUc5gX%2BMl36Fv06EdDHMyNeXqmcmXPPKXBVbiBhaEjIpkY2EUdm2qLHj5jEaytu74C8puphjjUOKf7H4zWYXahwF3DyqI46%2Bv8lqzRRbe6mQXSNHyzck7HVqAfXgedNcQt2cqfIm7FjpmhaVk2taGbkIFDjIqj9mswb%2FUGiONvIf8EgLIvYltrqkuuR2duiGGyqOpCL44R%2FyvS0MyzlayBuRJ59zwhZojm2ILctmWiD3gjLEKQy1O4IepGgafcrZYTNLOCukuGw96CicJ5mWuOvgxOUZY%2FEB27mVC0HHW1zFhUjAGMyQahNQq5pap7zkYl1QeHkDLY9Afn%2F9cQFB40TIc4K3e6PIzuLq46N1N572RBtLy5gRGIlCTFVmSD3Qn93avCxWwlcI8MI%2F0kcMGOqUBp00OPC5RfuivfzbLPlYsG25ck8CMUDdcPe0%2FVN3GyI7KDMM%2FjrpEITpvY7V6l5NywZNYJUkTAZlYs0rJK0M0SEgD9JsUxqGe5SJ8nNzCstNEt70l2UINWKehtDASSqaRufZtRQoJ6UtjboMFzl6CV7h9l%2F2Oyf4U1zaHo3OH8rkCFz54qvTngu%2BkYXZEsUoBna6zYppMowUUPJhhH4HS8tGG6JFb&X-Amz-Signature=c11109e733b77f62788c8c807cca8b146be55212002acce84ee6728f6bd7815e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
