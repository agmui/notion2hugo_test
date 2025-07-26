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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5HPNKNT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICAS%2FwqXXODXxi2XctmC0ppENXNAIDBzAE2UqV3Bz2UdAiBtDkIMrM0QZz8oE0sMIvNzCi851JQa8rzYd6VuJBKu9yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMXP2L%2FGIWt1cAnlNIKtwD%2BX2k5bMqCoKzG5jmEwC9UivhsFxiBKEyPfYCHh44cdESiNit4fuQ1T3c%2BMKm8C%2Bo7%2BgYjD0awK6VAVWJ79R%2Fm%2BDR%2Fe8jfWOZjGOGE%2F26eVQkB%2BMnfrnU4Kto4OmOzdHNrBqLznNtL7sDhK0%2B0If8Kje6ZBSfcn%2Bx0WuroxrZtU9xNzNw0235E0V7pouh8DNFZSU2UErMLx2eJLYUBDxbkz8yURPo61pFzoex5XwQSimgt9oOemp71CLdt7wo101B%2BrjHy7FGW9Pxer8tXT8JIVUu%2BOn%2BrlMz5GeKZiBTtRy7VDsrNZSjCrtJ5lUGUyAqJA9U5EH96%2B1FIj%2Bo%2FpC0rbClqh23KGMu%2BvjmkNu5yK%2FGNQDoQfUMGmpc7HLDmxhZihRCyTHD0Aqd%2B%2BQ%2F6Kh5miH%2F018qylcnpiNrtSsyavZ8omqFzktGHKLA6y6Jo%2F8PqEZb8Sb2jw%2B7MAkNv7YceyOjwrZGoCwsSwSedsMhQRLtsVFgNx4Ns9Qf6NOp8UWiRNP4p1gdYlS8pxmMak5XEuSRZohQmnax5RFVPOEgQQtD2OqW4Ozgjyw4lLdb%2BN5FyYQ9NNconeNiL3fjsvNtmAJToI0HSfCyaSS1iQh%2FUy0Ej4oFHVanx8M3v%2F4w0eKRxAY6pgEpz4gvFzhdrexNo%2Fb4R%2Fo0IQPcEJiWEM54XTsdzPwHqwUYYBYUr72l%2F%2FzSqct6tDU7lfsf5RUHhKE2ae4o3DBN%2BncXnJEZkjkn4T2baYFhbxyM9gWwAg8Xp8GRRh6uAgDUbw6LPUyUADTu2PCgr2hCXC7LQhpqgOgJ%2FwSCXm3Q6nN5xnsQVP%2F214du1I6lbj2xvoMrjvxcVTQDm%2F4%2BInZxwZpQqkNn&X-Amz-Signature=1722639dda6e915e9ff145376c4bd6c1761cd28c1e26f6f23f4cc338e0f248c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
