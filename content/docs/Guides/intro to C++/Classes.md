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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJCOBPW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAF8VKjR2bPsvSTiEulpmJkBt2KXDzOFoaa3DRw6KcUNAiEA%2FnOKHwhv%2BOXQlckgM9X4N4BKpIID90JUTgYfEuDmPVIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDI%2F%2FBbbV0P9BlDsLdircA5ad1UBLYsXUTGYfbLE5gDzqcB%2FSjveZxZ8X5FoVjqZSlDJlLNae%2B6880Av538enTA8nqE2cJMzNp8AaJdHxVk91FcYhBEgLJHRvVS%2FRtlm4FFQl3b429cGmI%2BTNRMrLKLCc2lxarokYfAMxNXDp6I5CiBNQdp6C2L3m7YbImPn2er7itvvolnMwGyTYAJMl%2BRDtCrnQBFCnZhYDS99gTMvUD5DORl6oKS05FewYUytO9UpCiPg7gRBvt54Y67DQIzhGTzyGgGGZsgKVTShE3jkz2psatH8chCHM9CF0DLPdk1Zo8ceWm0U25GG8DNtzIe5yfeUaJIdiMSC%2F%2FayEiuqjT58Zr114uYcwhJqECgRokHsOUmVcpHn5ooMBkQWeWls%2B57PXO3SnKSiFnsFVbxAnL2F7nIkNTiU2j5pfl%2BpU1fi2hzZM5UiY1xCePK7DgeNwkb9BMOWPka3dUBD1CbUHPTZ9yUe%2BRn0xF1KUL8UmQz1%2FavSL3P2sBfSnOeuTYAjB0aPBeH0hGAbca9YUVIpXotf%2FXi0E72KvNzbfcCSEvKijPq6D6EmylmyV672BdVkd6S9u8%2FSPrYvmBEBn93wsDqlpzSRugTSIS%2BnIjwR2%2F4RwlOTtuYAwMmV8MIXs4sMGOqUBsc6Al3keip%2ButM95YVjETs9IqU%2FAzW85fVVO9Ea7nbD2oFjuJkFWSOjK5199bD9%2B6RnD4zjT7atTloczm1zEidjDkeZi%2BBRqT8gpdDSiEaqPmQsV2xw%2BanT%2Fgtz1zptmPjBtQSbmhZ%2Be0tWtdm%2FkeQSczB063RtU0xJ%2FYEPksjMFE5q1ZxrzbB02v0Fqx9h%2BWIZRsDmw0JAWwap50lWrqhX7ehpf&X-Amz-Signature=6f019de15d21e15f8f62a6122803c61050ce85ccb682876d891d61bb0e5ae1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
