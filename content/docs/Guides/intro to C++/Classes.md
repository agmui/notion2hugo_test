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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ5Q6KRG%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChnw5Xui1UBa%2F9GQdk1JqNXhQK%2FiOksLikF6OCKeMjDgIgc%2BOm3VZTw4PzY%2FSG7Kt3lk8GWGDDx6777%2BIG2QK7sPIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBK6XqgJ65AG%2B5aICrcA5NPk5LBp%2BLaPcE0MoMeUTEv8IFSvPWYlsM4FZ75RS8%2F7cngeNJZWi9LFgGWlGka65mFLZgQbO1Icp2dUgB35GHNG%2FFKZY3IKek4yj%2FVXpzB7gOBZ5ux3im1chO4skYm5r77vi0p9UyrIv4X3N9TJUdFltlzZxfbtVa8MLB33BoTH4tnsasYIbr0Bml2mk1NIBCng1vFxv57%2BTUlxnZHInnUTo3Buq2hq%2B3OCVDhuqAeFzkhuZZl93GatCOqQME48BB9QAvUUhkCfBHIm%2FXv9uy7fTEt7KpHyBWO3uOb6ZATpy3yGfv6E%2BAxuAiP%2FcEzWW05ZUsEy2K4ikyAXfElgF3YJx71NghrSCTnz8fU2CPadsfZEb1SDhrTTT5%2BGT%2Fk7b7IhSUIT7NCxBO37fWegy%2ForhfkV424oPoAYF1X3UqEfTiKSIzpQkYQwiojD9XFMSZj8ACKbRhnRZCNKxBivNdydXYKPA%2FvBKyasphLXrK8nhtN5BcrAyAl5RrX%2FB5K32kS1AzjiZwd0kDFPSjRXPr1P6dsH7MywnDUcF8SAn9NCGmCYwnRL9HzkmvKWLT%2F9E3DLhko5BSMGHBbbkpvxDQBY5XYwyFKZlnWS1WarIQTcXdOrItkq8hsU46hMLeh3sIGOqUBorcxKZWzXDXH89zWmMQH8VPM8Ew9GiSsSKwzpYksNpFKOOPVDloXH4EUok%2B5Zrm3yecexcI8yelhhVPSAtRcI7PrFprZzidAkOwdUiayZGyhlW5VT4r%2B7%2FIfR83g5fjrNnD2YIA%2BIP33NxCyTKkY0P62TnNcY1bNyOGtFx9CIr7%2BtQ%2Fp5itBVLTBkX6tlzeYVInkgKM7orYvwAxc2PIHeMVhUgRV&X-Amz-Signature=32249d92db0c86844b0bd36f902aaa4f26803e60575e2661e92c6fbd90f55230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
