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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFIAPKYC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt2Du45aw8131zujl9r05GC7ztX%2BkQOG%2BLziCXVwnWoAiEAneLyZRpe2tW5pqCAMat6artAz7D4HR%2Fw0CC%2BvJ682K0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHJOaaRPKV%2Bw%2BvsNNyrcAw4W5EXZtrO0FqU1W7JRh7ZOtZRKtU9wt4Lm2JgJYYubE8pA%2FRkABKxulneKeQSZ8IBPYdCU2KankF5rfA6dhDxNkvxnsJrevS3wC3Bi1WhRnSgQp%2Ffj%2FDxYHJfO1%2FY2S5MiGsS6Vb2zciT3dqNAbt8AQwtBM2b1Gumh9z95HlGLIEcZ7NMhKvhz1Y0H9uOmM1gc1KSBlwSJpS6ayUU%2FhWoac2DEOkW4ExQZ8wGRXnmTSHvrnnos1emaFuxQVlz1m64vBxUFRSWiwAaCOWUPGzzCfjPdCQhbKM1YRxqMeg3IG5SEukweQP3hUbk5VHbypEapmbpgo9S6hGjr2ezVkQqI3IG7c5cDKNle7AM56ktaYNLLhMe2%2BoToaAaX1Pl%2FVdPywkTU%2B%2BeOvHALi35IYvyJE%2FFYenqBJc8ANFIetoMTSnQbtWa41z5Mdq%2B1VDSyiH%2BuYFrkRhKfgaW4dbYOYsUHYetnl%2FfPYIBDtE26X6Qy3NvC08y4IYrSMox%2F5thp0%2BPZs%2B6kmR8tiga6D9%2F816wwITXMRWI9KA1n12luGaLN06pVxK3ktJTLcsW%2FA82UmF5sr0fiBf8yrSKH30%2F701YmgCZF5D5rTnbBN01tCq%2BxSM%2BTiONbB0JVEAlTML6mucAGOqUBim71Ay%2FzkCdBTit%2BtOQ6T6Af16w3dqz%2BMnlB2upkOvXtdeW4u2HDugeAysyrUT5f8SAhXHhWzRezudsmr6%2FjbujDL42MrIRZ5e018Eon0I07G39MfHi%2FDBMCwWX6wkyGyPtAFE4oPXiiaWQmQuthxWCsVpnf6XWSxYUjuUiD%2BmOXXPp4j%2B20yiDFJ4vcDrHG1BooqhOJN020DkgetaC0E47Rkb8k&X-Amz-Signature=8e5135c77cab26b349fd267eaa92d7399a4c372c43cecb064c047c30193e9b14&X-Amz-SignedHeaders=host&x-id=GetObject)

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
