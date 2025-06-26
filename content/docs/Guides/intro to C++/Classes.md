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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6TM4CE2%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCQI6aUvhqHVcn3LEhmU7qd6AkWWQ4my%2B%2FFpsuOCGDQwgIgPfJvK2S6NkP%2F7LpcNobcngRWMt8TbITk38ERnmgV%2F9wq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMaZQ2qmXq43%2Fa16myrcA7%2BAkQaiudZXXEH1p7PlGmv7m3gQmtxVfwxEdNvALZFSb9YTQ23dVSrej9ykHb2lmo3OJQUJIyHMEdaGMnKSRhhC%2BOz3%2FbKgbKS61tfAECMvdqTpHHmnNLFaxilT2f6NIa93fniAxWuWbmnR4dEeZYiDd4nUPcaDC%2FGE93E7fn6C9ZmCiibKfOhzA4GRns9GG9kOmz7AkhtJcP7GLyUsJvQQ2lHX1k2DziQ8xluSSw27HbU93IW1n6AlgnsdbPzyfZFBkw8KvRemfpnz%2BKWw1DMdSq%2FIRxLAuMkAkyB8BYULMW7Ky3lpCkErr3q561HFIah%2FwaSqcgl9rL3TSCsreivXyeHI9yvThdSZS3G3L44cqHx5M9Wo7Ho5rC%2FCPWfwag44dUyBV%2BGreCS9ISgQUhpPshrL80nOToSBuoZgg0w4S%2FlRW1MWiMH8Cl8Ui2rdUEXlW8tpeNsxsCMZWCDle7lmWkJH1x1iPg9qqBNOIyANTONfaszktkPDmQVQutcSDYhoVnOKNzv7MRlsagPmaa4hAKyC1DyMzdPUjgSFm8Q%2BItXEnyND3Ck7Bgr2%2FTix4xJczbQjgU8FQL8iNDFBmcVLB7q2X7Ba64gRbT%2BpsH%2BQKh06%2B6qTz4twj4rjMKSh98IGOqUBD0BjQS1%2B20AKssPYt2wBI96T47yCoq3sGv59gLR%2BWIpW3UHgImUfc8recggbTxH8QMEWuZ%2FhM3SDBALFfyyc8dLuIiIJltYcH%2FWIcCupn%2BiYIlyUV%2FNhQwIaU%2B0hvdpqwOK3NQcU6nlkdnb4yWX8tWL%2BH24ZwhniqPKgfIKG%2Flfgznv7UcZO8Vjrzk0tinsj76f9f4ZDl%2FF7Kdon5YH8EegbTGwe&X-Amz-Signature=f5077a0e2e09f07da38288beb2e3eaf5169abd61ff958d098b64f7dcdab44da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
