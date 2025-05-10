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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZYJJTV%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwzElxYEDI%2ByKmD5qtPl8JsTCOOhwvNTtKJm%2FEaYYIpAiAEnsHzf6J%2BlnsD5QCSVk9W0UB%2FcyYXMPjdXTe5FUJhyiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbebZh0njJuWOK777KtwDO2S4ZPKykI2i%2BXqF7QXS5fup3U2tsLw1yML4N5vDPPd%2FvMbvssqdlaPiqor%2BZT9SWsoe2Lz8r5L9zOuH9lnPoW2yWRtM3tjf8bCtnsA8BWsrzlWcsdodoGSdbSQM4aYGmGRgH3wT1XGm0CgX32f9lZLBn7FOBcyseD9aRjLomFbJDHEE17nctk0o0p6ZtAd26XSNCCbyBm%2F11QtooPKW8PNgL%2FxMIMcjH5h58SUPf3lbQrHbBCC3Hx2uFOfWjPD4ZUMGg2x3ObRSc%2FtT2VoMcEI5sEy%2BWj4NcSufxHm1gM9MFDtrKyTAZDe9cw5ErW1XIJiNnCogWUu63t1A%2BCspvBwe6F7CNyXdZX9eS0bFtrFengHF08oVO%2F2nV%2FUBvwNgyE4ZyOQz3kZz2UJjyNHy9win%2B129R1HjhpKsOOEV%2FzM%2BkDrB2OhiHM7QVEszRNq4IGsOnobAmJKh6Ew%2Bua4K0OzJXslaMN7olbWD9U6FzWqWSZTfCgsbYBZ7H6ZU15teFbl6glwMqXvFjUJ3sYN%2BQRFpWzN7dqkXMf8P7n0hhEc%2BW13lAkXHGm%2BdUkLFzRBeRBT%2BLFJ58o7TtMIR3AfxcZfQHEqRxVuTWthoT5ixuXBOc0d9WaLuj8tpHnYwlbb6wAY6pgHQIMV31S0aqsVqRVuA3i63tiVUiN11nV%2Bxr%2Fal4PB478f4BKLFII%2FncruNtSdnkotaIsZdmitOELQYnfS%2B%2F%2BbuNkSpAxrGJmdgFveQsUlcAmmJiuuVGtPEgXyofcJi2kWss7%2BY%2Bh%2F3zpbJXg9%2FY7DQFT6dlC%2B86cNio9kXO0GBB9w3SKfgwo594xWNZA3jq1PiLXJ2VXr0EOpNH8MS8We7ETn8E6Vm&X-Amz-Signature=44ce365141d2e1840f80d04d5862e1aa698e40b8ccd32a478db76065cfe02c96&X-Amz-SignedHeaders=host&x-id=GetObject)

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
