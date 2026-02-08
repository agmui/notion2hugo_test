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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CO4EK6E%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMDa39d%2Bb2oHpMqRxsyaJI2SjzF9dpBjCUaAgfC2sHIAiEA47o3YS9NmNLgsun9shdV87Qpf2Bt0BXGNVZc8siOzPEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFJJ7nD7LJeoU%2FR6ZCrcA8U06fz%2BdGklNEkmtpmESpggmWjVcpOyoVEfHI6T23PtoDlFTOzVemaSFIPANsHCHnWRNbJKkkLlPUFDoFhY6ITP%2BPSL0xMNI4HfuclcDtpMfmaP2nMCFW%2FDvwKJfx4ctbdJKTyUG%2Ft%2FfEdzNoHdgpR141qcc0JSqC3RpJ7ahUBTFd577MMtEaUdiYMFSIyRBIYxTs9sv%2BmFKLGaySyB6hXHkdyV8tvqOcYpZkRYvRlM1MQns0BAXrphhLslZhfWGCXcMKdJp5hHsNgNA%2BZRqiX9MeWXQTAXuMjHD21fg%2BWZtvRDYx0Fb3bBqcGA6qXFhiDoC1CoBkFHH8jtJKI4ejZ7aqKL%2B53gM1oUVNzNHHnwm6N%2FJbSiU58WbrHia3X%2FiQFamgsKl7fW38vf8cDTLkqx9UM9QHwa5EtRCXFdZqONvQbi0CCrmN84Ghsk3YQC1RhNOyrZF4C7t%2B7FMq%2BwnCyTwLIsvFNC%2BDpfVZdfqPT2pjtidWwighzC6dcP7el1TtpoVfl59kr9Mo3oWYLyZ1fQcbt5uu2kDzCtgVhX6vpf6cMnGZYy7MNi7vfdDPJidT3FRhHIE5W88aiSHGsQbM9kx9tHW36x%2BXL79rVfP58FeYf78XpkuCDeWv43MMjqn8wGOqUBMHbrLNLIEa8Pol%2Bx5%2F%2BsVNvA1awpZN%2FoidXUXUhcWwuU6xjU8ol3QBOBrrgvkNdgHHAfbq2FSpWKm9b5uV5jIMn8wlusS5XbalXLmXeaEsy5F0RWLoktDjCBIQdeA86e0bXhzVWA31kqZsAOVpy15%2FlC2pTQICfIf5hpLikgc4uhWK30MF1G%2FMwdCkZ62NCkyNAVGAZ2M9qZY%2BdvDScCMxegAXsl&X-Amz-Signature=76f2c140ecc0abf6225a19c7f043493e6a4ecb3628a5ebb0fd52d52325966796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
