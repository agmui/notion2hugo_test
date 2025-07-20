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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FREFPB%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxZ2OF5KcdVky7lOMAzmm%2B0DlIcYJ1oEC2%2BhiIKvAj9gIhAJh9FgTXjtPWB1erC%2BfDlTYvbyeUVEdvCe6FyHb5uU8BKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybQe%2BsCxvJ2xhUodAq3ANjFK2VMY6LzEw6rK9x1vRsVtAWqLDtp8HIbB2o8lK6JbUuPOX4Zll0lSs7XBxdmFyCxvNraGMHOeS8xyNTR4cw0vWSEhPIAAkaq2zdXvIjxawWDhE6IUHgdWIYSnfsI3qWjHjbiUPIyT2F3rRuDrhEt8bue0WTPPT5NHw4MMrfKH2UGl5%2BD2YZP8bMkc1P%2FRBDWcYLAB2he7o2TezuBFtMQYC7zvGxGzEfHEzfipa%2FeZ7JZkne7kt4S7WiO5OWBKcq0xUaLHrmbm5490TZHjbkRg1OBVaB32ZkCOKTUT6SdLoXIlpXFIFGX7ZtjL5FbITpgd%2Bc%2Bhl0Ibd2xlEPOuCC5BMAb92KpCEKNmXmP0cwHanglcjPrmN2uffEv56oHclJWcvgfwl7drUXt9Q%2FKQbcSZFkXOtAMIDlQrTqYptI6kg%2BPYzdMEO5Yakd01NR4F7z1dkP6IBSLlkcGMtiTh%2FhlOENurCVgJW%2FujEaX%2FQzZpee5msQp0%2Fz8SJRb5oeb7%2BAFD0aDhGSfoiNTifLqjzljRgDpV%2F5eDtCXKshTwVbTSIERhAuGXtF6P9zfIhE3baDMfpgaRpfjNytdHFI%2Fc3h7TMC13BYP37SIXytR%2BHJxEu36k7kD%2BwiGNGMpzC%2Bv%2FLDBjqkAbFnlyUXThdcafnzCXLM7Plg3RDlTxoa3xkIuHPbdfsCVi8vGX83oAvErSjZpiObV4ApwI3013vTQscc2PA%2FziB%2FJTv%2FbzRjhEG8oicjnF855%2BhcIkfTXWRfu9GL1QG%2BFKE%2F2mZSy7y2bttdNYvtWmk6RglD4UADGxZ7qfzFLOEDwHDar4aus8Z2RDRKJVlc9qLHzz6PoNd3X0pUSEBqlUV7CNEI&X-Amz-Signature=044c35551474beb34ede2ea4797f707bf37206f3026c66fa35d4e973bd606200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
