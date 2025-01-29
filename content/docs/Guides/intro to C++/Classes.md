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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634PKFFUJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtWH0fjYtOQH20ByZ88uP3yeGtweXRtpebchDXKKIMbgIhAMPY8H73KITCt9VhSaKj9bLLQPo642%2BtwDh7Kl0urZeAKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BU%2FxChzhN8BoNeEsq3AOVEenb%2BYrnKfGSajoCmtgRmXfCLUI%2FaHJhXFhsCD63fjYqhFIpBq8yIBCjCkmYWgLi3sHqfE%2BTIetdohcoZMh3nsw1n7TDnR9Z5u42ITt%2FBn5S0uTm9GhpfJXvM3snQJo2uHEIYD4nXOumIORvo%2F476abaDwu0yvnTOp0mIv27LxAj38B8m8y0XXDew64LPegtZdU%2FiU7bkC%2B7OaTavPtPKgdCmt9USFvXxihZqQrsjRiALXw%2B%2BCi89JsOXATjjZQpq2q2Zwto7OLuEYFRTjszc6YckJl4rGQtajeAIDu%2FH2v5NJmoxmH53SOLhikkKD%2FRwmW2GTZJ0LlQTNUlfuv5g4JG6VFELRPVTt1rVfVcZIgK1adNoSyww%2B%2B9t8uymTHOivlrzDiR1eHnQRVSaak%2FIv5pN7yAjGGiuYFI7soy7ROyNB%2FLrkh7%2FXVbH8NMFhi74eipUfBrR6ISWdnrB8B6fXdRd8XYMdA50EwAGFAcEuopIgg8dMplCeV1%2BWgMqbVU2lesQXQ4Vwb28Z1CyhgTOyOkHoA4gqC87NUN%2BT8shDEEo%2FGcEhrbfTj1InCbSLqHNJXm09L6rcSXSw7y5ZBlWxiU8i2VRWrSw36Z0UcW9VFE%2BfFmCJSz8pUdwzCWxuq8BjqkAYdP4TntJ0yCcXcX11%2FzOaZjVUrIi3ONwNzNRlROsox0sNR7lv3M02nzgwqqO%2F4ZvblqvU8IrTIvoS%2F7s8rpa%2Fmo8%2FidXU2lsGU%2BpYtUVjrJ63JXyOUOQCDU%2F9fLjAGUH9MAHIPob19smMuVP1ZVqjfnJU934lrxOruvN75KTLBa7GbVFnUlB0ReKT8YFfScDFLHTWuA8vCF%2BzO1G0rR%2B5aufPW6&X-Amz-Signature=86e4fd2cbecc29997267ae9d459d8bef68a00bf554aec90b78db6c1f744c30c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
