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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SPTJKQ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTtBgKNgnEiZOSWZHZZBrBXkWf8BheiMgdCxI4vpUwvwIhANUVMfTpL4AKdzUq9iqmAeHj7SCbP7GdMC%2BN6zECJfbMKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr%2FeflaFoXj9N5xrIq3AMX4J%2Bhw1rnv2FzetqDPL9b578YaGuD%2FMDg0h33fqFhzACnF2ZHL%2Bgyrqa%2B8W8pHEI350pjTdaAfukFA1mWfHMh%2FwqQsscFFKESzPb5yCsgcBNqL%2FRIqY0vPRwEIzKW6fqEWf55arfUfxp3UfmayjgjLfpqxG7LjOS4UnCM7PsfRgd%2BErKfdfK9TC5dB38%2FDbYBX%2Bo3HEKoGHqcflP4MWdBMn8lxzPZV%2FUB3YWFPFX%2FRZ5afUJIvCj6EITlBJxZklapBteQdemh1uoMGHOC9nGlT4z76Y9enrmmHBJU2xaemAzpQSrjbYKbV94BUFTAJYkpyA1BerV%2B4ZYWNOlLAHUXk%2B%2Fc1mQJkVCYP575LpW01%2BYPU2pcBBHmWuAORmJd6T92qv%2BoLBlJUlesYsjT8vFU4wLQKJg3bTywHMqT5EHM9sv%2FTmbe5S9PxcohKBSpiEspq8cd5RO%2ByB%2BrU0lQwPzGXhmGfrwu2SnYjbprkCUb7cn6TyFxrVx81vJPvt9WBFxuI5u0J9MhZA%2FYOLmsl809kkTOWI%2Ftgty4f9RxfAXxITA3G9L0uXbgUAxoGjuOwb%2BNtX%2BJX96qzIR3Fals%2BFtF1SAWALG6xoFTYr4MbYi8qCbSm88qkvWcrF56bjDM1vrDBjqkAUca7NhQeCFBpvC9Fmf%2Fp1h4XBPI05VPeZQRCbiZmE9x3TN3lmuBkB0z8%2Bt%2Bt253MbMjJ3BDAFNjcmSFwmSDI%2BxE5ACjonUV0iS1l3y2RzIRXdXWRoJ6RjR8Lb1vCpj0rtZDKxB61aT057XMQyZIwHCc9QtMzpx7duTJhucSAx98MkyRH1HQucdDBRQVQPMjo64R7E%2Fs%2BAoJABFVZLXRoA%2Fwyd3K&X-Amz-Signature=2ebfe76fbb002b598e013a21588f5e943f6b84e6988c4b72a9f12210fe2e66f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
