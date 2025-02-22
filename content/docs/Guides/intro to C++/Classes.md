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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654WEPALI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5Pfh%2F4aIuNU%2FP16NbFnBkD%2FjMous%2FLQqvw07f3ZZE1AIgSFDTiMaYZcSon4cXpRVbxBtrDnratI9AFZnsoaJYmRwqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6glreIsuun3FXW7CrcA5C1%2F50QNL3S6J6kdncrB0r341sjjIQagOM2fq2UmpgH5P43Mrnj89i8LPBFanfw%2F%2FOsWmJccrj%2Frxx24oxnHkDmgzIeN9ADeUgfnTev5hiV%2B%2FBz4d%2F3eNNzvI1lXgbZTQ72xp12I9SK3JTNAaUAN5X0hPfip8VdSx16WLQuAFuVpogIQWksqcYT2TsWOI3FyZscmsgUswI22VW5yuVm0guKwxW9W%2Bb5Htt%2BJsVhRxCC4L%2FQd3kyLWIC205jFfwQ29Vn%2FQJYJ4cwTHnylY4ZilXBl8WLnMuJ9CMgrwE59xblXLbtqXrPgImNCX87DOLoI0HXzcgQk3Ak40nor%2FfI2e0TKtEuz4gJyLy8EzMpbK6ZR52ET9Qx7whooeW%2BU4MQwb3qHBMs1m5nG%2FYD4l%2Bdsg%2B%2Bu71ieVYirWj1upBbgAiRNsT0KyrIC1kAizhAa8r62%2FAmC5%2FP7cf76FpTM9JzQ1TzKz3JZ%2BPgzdz%2FB6gMk0eZo3YMe7%2ByoMgAqkuWg85CPNKV2s34ZxO7QqumZ2uxZhNsDi3U2bVt4qiWpT9TFmJoNwMJkgB6QcC2QPjIcKOQ5E4iIXD3sdHHq9jzKbTx7qGFT5M7lcb1EG9kBdoqltUO53fwyURDUvO%2BcAKFMNrs5L0GOqUBkiLQGCnQuKpIp7CJ9uJOzgbK73XZoPspLWhreT1BthPnXK9NgCLQ%2BpWhAogQ2480J00pnAtEMWCusBfsxf4sIJZFS9Ycw5n3UInY9EW8kvDB6Y5uqZ71Gxnjd5Oa5gY9HmZ%2BOl%2Fyn3Ou6oZ77X%2B%2B2P4JznFkudyg%2BuEFKkNVlX2WyCi7xKTya98K3Wlzj%2BQkfRnO04FhG2Eg5WqPn0pqa3KfV3e%2F&X-Amz-Signature=aa240f7d62c609f69cb10a03df0d8a59bbc201633dc2f808cc204b813669ff4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
