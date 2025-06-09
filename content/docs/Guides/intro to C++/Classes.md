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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMRIXX2O%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFw6Mvdm69oUifHq%2Bt0YsfYZFPK4pnLQ4LsZ%2B8eR8yPcAiEAztv%2BCp%2BOXkzhRv1dvF7Qs4zlL19WaCK%2FhbJY1A5vGMAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoRBuCI79SwUk9lfCrcAyfc2%2BfQRpS0dR52vNHMpXQPvLt%2BC%2Fptdku4HMaNRvIQE4XIA6csdPO3DOXRSnROMvdG2W0AP2O%2BEI8YyrHNqOjoXsTihv0I%2FqfuO0Wx%2Ft9zzP0VaCLtPwjX4DFK9IcGQvUmQ9Z21CivyJaARw8KzrL5XvwZPb3Kq1MnMFEm3whmzik3uLj5ZsQTtaQ5KltUEqWkJqXL6Bws6XGA%2Bg6nIRBJxK5Zfh2G29m5MPSPfbVR%2BjNPkgK%2BwE1bhNWyhDt%2BfYYZtFsyovmMb7cVcIhsJqrxXff1GoO5csY%2FGu%2FZwv6j7ZgEVXHko4oecC4iLkebumV8aiuDHJ8GmcpcZgWHnqBPQqEPsYzlxb4BjUd5ypCbvP6hUZdLMWWfse%2BoyI5WPB2nY5RI8Qc8EWb9ZUr4BKchCgU3H%2BS3ZRj1ZjAOXZB8HDu4IwmSDrYNJBOqcoovn%2FIU6TwWGevEUz1KMKFgdW0K6pceST6WHlezVWiYmo6UESCVrS9yI1jV%2FWVikI6%2F88e%2BoDp8MzBPKSKkFxiqpf7maP1HPaqlavQ7Q2ZaEsaeyDpKM1QcfnDg0xYxPmu64eZuoFydoE5d6mQgpRYndL2%2FC02X5VSoUXmKSRyjcdweBl6TN4HFTvi7hgTyMKTemsIGOqUB4MCXMttsZS1mwcizGdN5K%2FVZW4osOIsK7IGwEs9MfxmdPntub09df6s0i2b74CmxdmgHKQbjTk6ZANFqehotyCZts01IDj8qNL3BJQuJ7r2qpqjJmtzHOdiaF9%2Bp5XU6tvtEVM66Uk6LBwoebv9GcDvRcudkjcy57uo1fzI0z69uCWB%2BF7nbrocqusBhvyigfLbwa%2FN%2BHNVBfBehhWYnhMlwXIWj&X-Amz-Signature=ad8a32a1667f73e3bd91524354cfc1caa4ddaa77fc0c42eaffb5fbc4492a645b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
