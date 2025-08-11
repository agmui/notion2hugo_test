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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D7IALXH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwiGFiMV8lxfjOJrFShxCmneLFNSYyChN9obwXUxtOAwIhAJZ0LhOqcoRzBOaNGeukaLXghKfJwTuiEntWgqAqC7smKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdwVnIzi3K6Df6J54q3APIYsv6S8lVARcK2bVmXhePv%2FcJIkQkyX6cNQ9mtCjMac5zYaq54NktR23nkvQqZG6Hzn6FX1voz8yKzgPZa5hGd59Wyx6wdmGyu6XmxPAIXIIuwfTi5KjUjkTb66vAaUvmwkJPZX7aWUtJzvkoqt0JaiF8EK%2FjAws8Gn0PVq0aKRVWiBXqZPnHklg9ZM7mdXkq7iuM7xOEPse2p1%2FNigjkTgiwTwTiMLZ6t2c%2BJgi74C0Ggj6MCMIW%2BUYy%2B66OA%2BXYeLSJSBQBpm8Vj8TPcen34E3zvZ4hdDmJvLIEkMphXoqsF8IkuO3GgPf5r3RBXk5Dd%2F9D83t1EhjgaQp5c5GM0WCqpVf8xTu%2FgieqYJq6nB7%2FBP3Zz17nwZZCcTdkl140PE4O0UIsCwTIEX3FxALVM0bdPOTRoGcOMbUutQYa8ROD2NaNEcrZKaW1nVB5VhfNSZtpSofT24seOkb0IgZXTBuZzlPDmPfwXQ68uS00AZGvER7SAQCIXfo%2F2ZB08GBjEMKFPHXo1fvVTNYvutVWMOfoXNXcHvY9fe2hZAKxDrFWWQZD2f6m07x2NQbxKRCi17WDquQrDGwiHwuJXIrnrg7ehM%2F4dR9DGTE6i3KO%2FtMhmbixVIMiqWLCjjDEo%2BfEBjqkAcv%2FMhL9mJQTMlH%2BXelnCxLKX1Y2PQ9mn1KZqmawhZ9IjjGOg3f6NOmx3eMu0Swa3b%2BEYrSiVICaY5nQGFGo1F5OiC17cdgsvg4ZCbH9u4QU8hSSMZDsUMxp15yfFnYlo9IW4wXxKvtakurS%2F%2B%2BsMxIe6bjw%2BFFP81F2riycfqMugXZHiFL%2BpbeO5md6CNtkPQfUxOvcUPc2jyguxor0MiHta%2F9%2F&X-Amz-Signature=c14581521554dace488e7e9425daf7dfa2a8645f5f8f52bdc4643b1350e00651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
