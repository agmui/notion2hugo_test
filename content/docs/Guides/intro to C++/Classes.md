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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZGI4HMF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIBche0JPKzCun81zHMGOm9tOIUAUF8%2BLiEf2SBRPG6FDAiEA%2FulqXOxHqRAITSCGXyGFY8g9sX6yKoBPlYXdJEPOETQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLTmZ7qPfhI%2BJrlZSrcAzoq8PCCmgDdqPrGjO6zgkZJ8XuGBeg773jyFhmIJHsaynhc0Ku4%2FXzXxs7WL%2FAsiPDb5MS7WQ%2Fls5c4SohpsY9JwAoPX11Oo90mvSxifLOFIMWcBSHe5qi866p97GWKzKFyp4vcb3sa1KMO2o00HbAyzUNoxTOBLprDfBJPIHblSxl%2BB6nSt0R1YRH8BSczFFJ6UZStY18PYpQIuWSS3OZHBDUSeaOEpyxx7lRaoO6ZTLfnRwGn0DkWIp796R3zCwd%2F09ET2m00qmPvCqMQmjrsm0ILNRqNdwQsoFAib1h%2BekzoSaZrI4%2Fww5h3%2FpXeyhuGjfRUnI6NU0pV5daq4rPDalsH2whmu8Qr%2FoQvn6riGczKbCzbXZUWpVafxN%2BjKSxomnmG3%2Bx4Jxf0XdYaKJkVhMgTjWVtkhHIS0BOUtdWoKH7sO%2FPcSjXyjJI1qHIC%2BPiOapHA5%2BRrYogGcJEtxWzCmAqPjiVLT6moJEJde5waMiIPuFuwiaD5%2FaC%2Bs6PLcr%2BMG8O8B5HIoo5xpA3RBjZDCaaciM0Di1HXpIT9%2BDiRvDPCOaCdEh%2FOKshTLMUkASQhtraJ5wlhkcrAZs%2Bfr8Rsi4cNzIWyMTK0J5G7hgfcYcg5osTEFEcAlI0MIaS3L8GOqUBpTUAKnmSo2e1Ogak4x68CQPZJ7bNWyBbSFDj%2FFONcZmrv5KIYo1Gvhvjq5RecrYkZyGKsx%2FbsgFbaTbfa%2FCSOO%2B%2Fxzdxoc2QHNfi8nP2oBN9sp8jdyHtlm0k%2FyHARuXH438g0i%2FDSvKd0wb6%2Fdrhc31a3Davw%2BMXP%2B6eWo7RT1yNtMry0ck%2FtgWU40Dwcil4l36B%2FGQ7%2BawT6Yt0n%2B1fANLkuEVz&X-Amz-Signature=bf396f0904b0c6909a463fefe3ae305196683b5323877f026c2d7b2973a0c730&X-Amz-SignedHeaders=host&x-id=GetObject)

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
