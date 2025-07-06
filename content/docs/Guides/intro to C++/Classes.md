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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISH56NT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T131950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIDE7zy2yEteXVicAxGKuhMYbVUbUF505gcDL2IZZypb5AiEAtx%2Fv7VVrdp5yxUKiXMUZ7PMIoSEdcr%2BRi%2FhjqCIl29kq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBJShtsAF3BejWN8%2BCrcAwHCVfqhm7PnegXiJQrUIuCs3%2BCvZTEXLcoCXZX0fa8e2XlPeHkRyaw7GArTMpfeoAFK8lz1Ouws5q9DTHKkbeMzfx%2BgwmtK4PuIR5QycdW8HfQadx5q76xxAdFRKHGHepC4oBzr7oUHYt4EhOEhEYSwGngtM8ML84RE49aGkVq5SbvLqii%2F%2BWaOSosyXrDWMHxud%2BEoR%2FQqaSDhOoOfuShkdHvgErdives4UP%2Fo3%2BlUTUQl8H4PPyJwpj3f064necdCoI57wNs%2FVxIsqlIaoX34TCI8QMDRgnZ%2FRpCSIBTffHCyCqvtBF0U3sJ7fkYl%2FDGJufpz77nOAaVk4KUu2litCmcmMcU%2BVVPJ8dOHP9AksbuXlhi3WL0pT8HzVGl4vooq33MRs7lxoVPQ9F2b%2F0GVMDliKhWNF%2FrFaDOa1SHRLWuutdcv0dw2h4Tnbmv3aIoCN71GP5iooEgJ2McfjMLdu6QRJTWaNHr254RQGTsycLb8%2FP02m13igUVWplYzprusYPOa%2BbPBagaIgav6fnDIsTldcY%2BAGlsuUWXWx%2FIRYx3bpJGbns6i511aLQuBzB0rKHAY577tpQQPlRbuGWx%2BlEnRxk4NjihHKj%2FOE0BFph6wfPLyhfODEHzvMJzVqcMGOqUB9PWa4UmhvzT3RWvBKwfcbnCJnUJklVa5chUVdwWANltkFMvLZPwBLks7J14%2FU7JVcwzlVAfVRxZMyYPOcMpvmOvqvmRxWJmLsLQ6ku2Vi3zt89Iad%2BFxaAPimG%2FCHPhDHanObQkBE597tBwlb43bNs0PoYLKb%2BNQRpkdK4kvbvCURgNqq%2B0lbDGF5zfuwfKR7AaEA3f3CckBNZhosDaGuY8%2FSPIB&X-Amz-Signature=9c95cb809558d29620d9ac6092c8c36778c129425437fe558e37e0178abef1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
