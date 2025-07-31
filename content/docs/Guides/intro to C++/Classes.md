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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYXIWTE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwN2kScSLpsOmRsmW269DlqrMzVfQd3lvp3%2FewiCDZXwIhALfZLFEhRD5LHSPzLTnatPzcgEEzfgToFTt1cy%2BPQDBXKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu4NBytfkeqtMoctgq3AMsRmJgh483Sh9fKxYymPprIovtC%2B77Z%2B6OCSqsU2cCIL6lj4fRbYr49fpf8O7Jaypd487aki3rrCO%2B8n6YgWGNX6MbFHByhFf2PtnuTcMubWL0i0QGUeHBBA4oEL%2Ft84%2B%2FxE1MknhVk0cZaHk84MSreHuofGrQ3wb2V9hc9um6Ddy65aw24%2BkozOL%2Birq%2BM81aL1T6MS7ad3qsm3PBi6IfZ3Hg4f%2FHhdaPjZBIwCnQ4vVqDW1hpzlY642RKZVmqzP%2Bvt%2F%2FVl5xsFBxYD6R9uTYCQRioqUFOAVS1tpQSFbq6oO9lGyv1drYySJ2YyGSp%2BW6DQOKD0lQsPs6ucVEMMHMrrl27f0w%2FqnZl5Mj9oSP2qIoa2BvUIXSdecJUEj5cvK2Ie4kAk4mHYi6LBdjVvv4W7oPaF%2Fk91Oi7UfkeSSoL%2FJY1CybGaLdz6IkF6UBYc27dnf12u3cC7UM43mQ%2BoWs2O3Ht4porpSGFaD7It8Rp308Qk1zrYPwz3U%2F13hB7TClnuheKrJWwrgNQobrcF4UpThqomC%2FIK2V1P%2Bg3zi2LSloenmCH76WjmLJxEFQfQp4MSDjMRj6ud0B9Bj4GwAUChKCB%2BfTAg0uFozYU5rP1Qv8vR4Rhs11PYtvvTDG9avEBjqkAVrteNEG%2FtY0gnwbG1HxShbd5A1COTu2%2FA%2BHDiwQO1x326b4B3hj23uHorkzfDhijjShD7MqA6I8Ovk%2BqHJAPpJnop9NSaAwnVbp2nnnsLGIBvqVXen5DBumw6sN2ervNhBJ%2F3EfOVpgfnbarTxK9%2Bx64MvbGunnwAnBmL%2FipeBn5JW%2Fule89hnJ27u1DzKqlpRkDw23sfZhU9upSHq10w1ooAqr&X-Amz-Signature=130c524efcd5f6f56bf7ebf4548688c3fdd2f4a5ce85e90536651305a1546051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
