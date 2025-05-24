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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7VIUSBQ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIAVa5D3SLw0R94xOwH9N%2FniKDwYFlzr5kVxSzL1Xs40JAiEAnx2p5YkggeLa8CwUq%2FtiUdsB%2FmuwXYkZ7Vnu75nh%2BHoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJoNiKvJcu4VsDNdCCrcAz2n3MP0QuQhGxM1Doom6ZU3zzqj0UHzzMGeAxTGpTACZgLTW2lE9OQIdjX1YZsEQ1ZbI%2FSPWaz9j34JYmnb%2BBqtrt%2BIz11Hrp7zwXmbcYxvxmHIr325YaJBYRGytsLJe9Nxl7MU4krTm9DH8Rz4oL4kjpABAJKK25AqxK5F7k1oTOMR2R3sIj%2BfwPoYZ%2FI0DQ184G0yFzp2uK%2Fp5JuJ1SRRJQsXCD3VWQhpgLd9659Ho22n9uKCwew8L%2FIXMORezU6hVHxkuYeEta2DCbtG4MD70ihoDUgS1KdxwHwkfwcIpiJUiuVzn6J1Kde8IQuwE1KcZgQbAWxriL9Ji1X1PTNTLbYhBk3N5S4UtYFJPyvnVI7RhBckzVu9KhXVUnqTxwNq46ueu4ooKH69t48al6Sn4aZMsY3QZE5J3opMOA%2FUBGaFgXC3El6J%2Bqe0JIMqFc8J8gJ%2BvN9aX14TPaIfoABwyXp6Iz67SLE3nD9tzvGcbp%2FimrEp7vpOtRZFR09XDdzVyWXvBMIN3snhrcbnJb1ko3zs0LrSLFU1fPnG5GNFzngYS999CL2S2e8HXzyG%2B5ameCB55FqX1bmAI4lV5vg0phh3%2FrZjQ%2FtcW1ATHDCYbQYrxHWvo0IjKHrYMKaWyMEGOqUBFlaqh3YxLyIS13k6MTVEp1xIDP%2Fcw5%2FP2F9yaZWvRFICOGNLZ9hLQ5fm%2FSvsLRApHLTxZijriHgZbQr5cYuBPjdhQRuUZD9MCLU6tb7rqf1ELyneyRKKWmqz9VS13mukl%2F9LStJEhjeSvDWe4cRrDUMmvg50Oa3NoZMkH%2BN2UlMF%2BTRjJeB8niLX3oTnL0mffpfvSX8%2BUjVuX83ARtpg0SoN92bz&X-Amz-Signature=f00785da3c45f0d6a631667efa05984ab160cdad2067b15fc701c33e37a86db5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
