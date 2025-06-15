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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDSC3GRH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCYmY1demMLrmvahUH2iLGYAFiqAWp8n424WeCUO0MIQAIhAMHwtYOqWdCXsRvkSCEguR%2FlhTZ4uvgPqsohyIo%2B4QfpKv8DCD0QABoMNjM3NDIzMTgzODA1IgxZyb7kkA2XMNDtSzsq3AMGq8Bxe%2BbaXd58eqonKEESk9UVr3RSw6BWZ8WvpmNrxo6ehKWmWyWt6LPM9WNH7PFD%2Bv9gxE7n%2F0TX4rViguvfTjrEEDxF8OGDHubxP4xyFKsk2gGBC87YcR5VcObDuFuSZ%2Fzr7BGCkR9Ybh8FtkBO%2Bekp2RMEaCub%2BIL94OxJ9bdz%2F3tqBf721wbpHac%2FuN2Iuu6ctBTbV4skDmb9j6TStRzGdgKDMHqWnPhvGbKnWuwcabD7S7QfH50wx6x%2FrM3hZY2lw4PCRVj29HKI0yHsuayek%2BOL1EQNFU4829B2K1pi9b5Rx5bfDEgA3k6binFNuKtJrObQJCPdH7TiyIYH%2FrhAKaxUAlV%2BrOBwK1MyO%2FU%2BymYs73NtyxBLD7N5HBRg1B9VL90iBadpGHMY5TRxfdukE6ifKH%2FUkFndIuOXINZdMOGINTsVC9D8D9gOJf7K4NWK9VeOLLimh8KFIM7XhGWJVzbL9VfSwa2IHtSdUydp1M9P6LlPaXweujkDEWhknDlo5lxKG9A0KzRPOzVkIDdFydNtXT2qMa0Vrdta7Qf0Jimldb%2Fud7TegHPk05pJ%2BdPxHjCK5BUn%2FVEPD06VgyjqLbHWKQ0lF%2FJipWFm1PUQHJVVsALTqAulxjCN%2F7jCBjqkAdkvm18vIdPz%2BhVYDsH5W7c%2FU6IQ516rrSNgiAdIumk%2F6gC6wC1wde%2F9y4YOoIa7%2BBrOyAfJVRCDh42ZqHfJR0%2Bvnty%2BUSiZgE82prgq9c41oUXsYjftHjlwB1Kagk1H%2Fgi%2ByytvjlBEypsVz%2FDPi105KeDOe9555Hhze%2Bm3g8xIiLX8A%2BH%2BZE3CYlTd9NkhzigHOIXGuJ5t3Gp1Tx6sjgFPhs7d&X-Amz-Signature=a91e4079ee295d44cc60f32e4a9165ae56576f9a6f720cbe328c63c0846a5685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
