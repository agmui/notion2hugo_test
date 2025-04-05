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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTAOR5AV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkPQzbmj9udh5rEBEGehF85DlZISnAcWlJEz8ykoX0XAiBafPlG1QoS27aRDmi1HNa%2F7eE97QNnUiNb1kJ1kpugZir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMV1eADCOJzQ2yroFaKtwDh%2Fojmm%2FiZIFrYvj4C3q7rDh9s1YuwgegLkTxfoNTwnw5n2ajD2xj3N3pmNlJ%2FOSe7dcK0MSFkpq1cS09UXLeHV3HSOUJwv1j40Y%2BNKe7VHgqEHzGAZWyhjQ6Q%2BBU78%2Bs%2BlBzvLmwGCGk%2F7WS8SnN6de1Ogrlfhw68SdvHO9vxD4nH08uQsrI0SDFfGcbytbk5PZcZL02q7fY2U9u1i0ZlpiKu5o8YCF936%2B89ciFjM%2BzvIvow3NMDUBGfd1Tf7o9S%2FTnPhY6UIoGp1yTx%2BVeIQRD7O2o3WJkXZ9gLKkL3NBsQRkfhwQJF%2B3D1%2BS2Zv5KeOZEl7Qn4KrDCrSqvDpmwlFqX5wk0%2BH8ai9%2FFTCmdRTZhIvaIoL%2BkDvBQaJILOGu65w4f40fLqXJsGamPWsjF5e4onmppIfCAJnX%2F9XR8NA6aKbxqR9jD0CrRZ4tsgZDQm9lib8dxBFtgc8rHGOOX8o04QFLrPJCayA2ikwNUlxIc4Hx18xmeSZNjVebSCLPWEPljOTdu8nc31crCb16tH0BBqeE%2Fc0qJbZ%2BnhgD7vJCkjceh9QxgRFsLEnP7ThnNSBUGsBKe23TDBWkyY72Q0WiuQxo3KjrYjlMw2FtMoAZ2UmhXoNmzIZ7cYYw58fFvwY6pgFUOWsMKzAnMT2I7MB6sXNJohObD4nAW%2FFGX3HyKmkL5%2FDCAhNBI%2BBQyzhKnoJMe79I8Qxh4F6CHCaVvnZyYuw8sw%2F0XCpNNT8pHJ3vZzarDR3n%2FTH7X5ivugK6k0PnQ6i30iuTgsv4au%2FISgj8npvGKfRpifnVx84e2hkCXn2vV65QRoElZpu14LtpqmQ5eVWlrqLuCFVKZAAbaEG%2FC4Mj2v4weEzq&X-Amz-Signature=46cd2698a6622ef63083aae41866c4bed3c841e362686ee01fe39e4eca3ff677&X-Amz-SignedHeaders=host&x-id=GetObject)

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
