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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOGRJVP5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnAqSXxLNGv6YMYAtqEXt2wTbZOY0qHJx%2FVfI0AP29OAiB7%2B53wRZsb9MwQa%2FK95BDQCb9pZW77aA7%2B%2BXQOIEC62CqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXxC%2Fo8GJjMJY14D4KtwDSeytIHVMMJ8%2FzZn02DaD8tdq5wzywaY34RtJCJ%2B67ANBvZ1x8V1wy5Q73zqCC9Wxnsu2iLM8GY3H9kyVKEkGlgiB0HBhk4HxRKB7ULSau%2FzAMwd6J9%2Bw%2B0%2B23N%2B6AfMUV6ufyI7VEK1Sqos7q5qAbRRmMB5LAw6By4nHK89Y6aeJNc2vd9kgoBgSDlAIdF1f%2FNyZ92b3uoetjHQM%2B2NSG2Cr7nrhaXmXBmajH39ASilOc%2BIaO7vW%2Bi7FHPU1X77%2FFsF%2F6uAFodFHv24wtpHpCod4wjdZHqgJNOCahva744GC8cOI0pAevgWZ6OrJXPZ6U9ySJKK7RdhQuVpcue6K%2B0Iv6GeUO3IHPUmwmoil39DeWwWhCPD%2B2%2FBdbx10ln%2FyvPKgAf8vHt%2BcH6Fq7SdxEhK5yWkiM3ii8H1Pyznh36%2Fa2u0UOA%2FmsWaf%2FIshSO9MLdx5OcGd0IIhHbr1%2BGyj6QfWzVdecCw%2BdTxJRfH2MrgfkGzlHOTTw1zufN3P8fJ4pX7ZW4y9%2F7e0WhLzLMYKaCLc%2FWfdMa3G1Z0qwECtYHUByI%2BMzqhq%2BnkeKbBYyQwibtZbeONvZnp9ZW%2FDaCbQ34W0L8qmneOry5VWWizwNwgRX3guolKw3G7sWi8wueOywQY6pgEbFLv4c2ZwZg1wEnsfryo%2BMRIxGjVOtCwzu7ma8wgQI3HFQxhFpTdMxwp1ed5Xx43%2B3PO6IuUrwn3otIHero%2BPrt7gAtx6jhRhYkgPQrrXF7BUzawBE4fV24Fg8OX5sqaAcVO0Na9Ksc5vuLPbeSpy8AHbmciTTs3iU7kp1x0G%2BU5bzLfmB71WFA1qmD7DtbqtW2%2BB%2FN%2FeXbSl6SrBgh8JjNq65nUf&X-Amz-Signature=961b8dd782f58f4a33fb9834486b7cc6dece10f9d7f350a63dfacdfaa66aed95&X-Amz-SignedHeaders=host&x-id=GetObject)

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
