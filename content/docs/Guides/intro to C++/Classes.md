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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGT6KBXV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCLEt8wi2sNYbelYSFwOzEbBCpzYkurC0%2FI1bqW8MsiQwIgO%2B7te1dqGIGlToSb%2BYdH0EXXiFUKSSAiSWl4YQy0aC4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNorsmtafx4AJGiCaircAyum2sUnSatcwX4ZApl6xxvfwdoTIo8nrnshjXEXwfClAcAM6KZPBIsjY1ym5wBcnc8G3biANMZDOaK7D3I35%2BHaywrlNOWTFoBGPVpQ8xBNx5JpiiUhWOixud09nj1wfm0UDu5P%2BsREG20EKpYWPBtthp7b9YMzU29OkIliM0iHzQR3J2RM0z9JyAqvvaKWRvbhEZX%2F9XkFF9Vfe%2FIOYrCgTLbMpiwyko9XbtZETjyvjWNmNS%2F5TDFO5vchcrQHQmzCbtuvMgDR3Ytuxy2hE6xbR2bRXAajCl358MJv0E7mAVVwU6N1jDQak4xJl1h8WdeNCRICrYa8hK1XildRiMMtd2R0a1Ocqj6mcPzWmOrwLxi0lceEdY3TleXfRJiWbCMaqgAgxNMSygqwYHv3y3XhS19EEbdOjzdNsIzyt2SDyPNZyNp%2FSZ3FQA%2B5dGEoYBJv1XhW8wRw1WQM7Lfrvcrfv7YAXOiaJ9j9EYMDd%2FaoBuNlxSm3bYC6VHzR%2BGWrp0uJAHGPP16Ix%2Fyx%2B%2BnHdAqn5yHokxl7E9WLl5EkqtOhzDD1WuDO3eQvRW%2Bm8HVL2Z%2BcoYPtF4Ta%2BHsHTUNeeRpF19GOHKefFQDmq6D%2BXrQHbLVRJzPn1JahM9FFMKS8jr0GOqUBGPY3FZZHU1BKSI3AWtJ6S0hjM700JYexvz48Wly3WxAG9Ub7u%2Fh7DU0aimTXhpzG1E13yMpFCkYoi19PZk4aqKl9NKac48jgwtq6Jk8J3CDqQXdKNTggR1i0OBlnUhrznBIPRaTWpkI%2FBWKTwkGX6DKZbm%2FGKwGTi03qKlJN9Z2v%2F3%2B7G3OPdVCXiUi0TlYdwpvhtBpaxy20EYtHoKGSRUPujYOT&X-Amz-Signature=865899d39c7bc1b5c200fa5003270967618eb083d2c36faba0340bdeccfdefba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
