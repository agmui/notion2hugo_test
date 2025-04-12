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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LYXPTO6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCP4Paac%2F83W5oNr3OKXKC5Z7E4bJzLqwbv8DuKQyrAMAIhAPYWx0w5rGDGXxn13GRTS6I2jVWuezNFZAlKp%2BQZEkjIKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkgJCk3SuAw3OdhLQq3APYwebtgA0Bnwi6hbIExzij4nc%2BzsTUA2TjuPVFNg0AE5Cv1wwngZT%2Bvzmqx4LiOpUl4Xp4QygGod%2Fe2x1v%2FlY9%2BMJsUjW%2FU9AFPpMAR0ThqbbJAKjWG2rIX0NXeVlGC5%2FiTFWkIzv36FCGgF9HD2zkxqXsoo4TuDDGGEI5Z1c8K6Owk2bQtp%2BnWQSWhYSUVicaAB%2B1LBVPf%2FhHruSb8TKWl6tCNn2sSEIfCUa%2Fe5ctZoJNMFaz4QE0Xi93o66Bh4Px9Fwpw7BPPzBfszFa0064RB0%2F%2BVUBSMgj0yl8iMEVohf3DunkDYPz4Jg2n6uex%2FAyAM85%2Fv0FUOBUsheb5SLIr1UPQpnFx5Vr4a8hQLlgBXUhbDUmJq9hz9ln9hOPB5FNt2ky3DLnfYsgZ3la6%2BnWoF33EbKTRnXWJQWL8ova%2BLQTkhFHtPlskb7xwheiWmtCnNBj81CXBMqwK7TF37vRyia7m8QJO5r5hWHg%2BilIG%2BcH9yKIVfCpxsOgBydJKBM3yxLou9BCbDC%2FNnGxXVZvlPGasa0%2BH8JCOuEARpn61TsUD9Xr30yY4nxoRlPVpBIMB2Fn%2B5wMg3CyH85TlJuNj9Sirf0J3BVm9llWfMJ7K%2F8v5nKxowhWFJjmQTCOleu%2FBjqkAZt3V5Lr%2BXlkfM8QMJFQ8zJkrf9BlPzmMiec1XdxI4gbQ8mn%2BeWyQuMeYPuatd8875kzufOEKxBxDPePU8YNc%2FF9D2x7BbNuCaW9ngm6qamfy8at%2FmGn%2B%2F1uiqFh%2Budf8P9O%2B%2Ff3uKXUj1ZuJXyB9pD8lMd6T2zKtzDWcXMnpuzPWTv1g2aeXL4sL39WHvCRM2E7JiAaRofPKY4Ppla%2FaxI1wDTD&X-Amz-Signature=73a5ff335032a12eaf7ead569e755946d9dc226b6a661e12f24823c821279721&X-Amz-SignedHeaders=host&x-id=GetObject)

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
