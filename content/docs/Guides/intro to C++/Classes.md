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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSGNZADO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH20FvNsCRUIzC2nvLYSdM0o36qS4ien4JJIkE%2B3iEoACID7CDq0H5%2B1WwH3fMVN3WfNDdpIj%2B4o7C5qYGMfCPYk2KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVNsg7PgMGecvAz7cq3APMOzJdbf44NXsw3aogeUHdWlPYA%2B3SX%2BkRwZwhi3be7bUOxGndmnxsg6AatZNmBY5R2G%2B4OL0BOg0zqIaYTSw8KcD8kNO%2FimXNba99gkrARGqARxDX08X4%2BCjrPiLzWwFuKrT5EOs%2FxdYfRla5E7iv61I5InH21jg2tyB%2BBqzpPsvUU6TeoRXqRgtLOs4RcqlyPC5ZJkjD1Re%2FvyYN7Ux2MLI%2FLV91JHF31Qn8LTGghdZuQiDmnbob%2FV%2FjadrDCVDtPNt1FHbVZLd4xw6yVdPEkRnkvqDkhI4b%2FrCbbzthqDtjA4uMkoXlkLN8Mp76wmPTMRDrsxCuKmFBUuGb9Z3Ak1ttsj%2FBd4SmRXIizXG4SiXjB2u%2BFlEgV3S3Nf3s9F8TxySxe0nvs0Ivkwi26YYiU2m%2BJcyd0Gpyc7OfAMSP6JB1aEx%2BdApRIupNgz6DjvffQ2EPXeMl7syRcy8d%2BIizOIJ%2FXKKC%2FZ4IX61vBo%2BOc1Wp5EKDiKBisZDPYKOuhpMGEAE5ton4RiVNliiZDFFMJbLF7rHAZ%2FYO6HggCUfwbQj%2BGEIcIdBrnuoZRcz9dDjsoaCE1PNmQKFNrClJ7u9p63hU65YnR33U29H35iQgU4PdJcRt1mWCYsGzXTCaj9vCBjqnAT7f909sGa4HenK9u3AtLV7xwWcINHOnWyCQoGykqjGn0Hnbu6sR12nHIUlHs5NWm4gGyOpdB7caCpCj9qO0eJHcUg6qJVLznLLBbUpAXjRdwb5AGTfSDEqSVRqQkym4fCm9At3umBD4ovVHq4H48M83Fb6huDI8fgglztJ1FMdi5dKjYUVpOTP04VhCQl4YhfBfMKs%2FO%2FdszryCxIlWGWliWiihd7iC&X-Amz-Signature=b17a84a9bfb53e316db0e37e550a60acce304669e760cb3f219d13f157543a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
