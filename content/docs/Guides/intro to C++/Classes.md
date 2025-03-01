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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466442DFHL7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIGw2PnsCCt4ZDaWuBHOOcFqPnXMQ88uYrtfSEamy92A2AiBcmhQH5FnIr2Nf5BcotYSLH2pfE%2F4U73lBTaAUG9PcAiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTkHuO03RuspyKxhGKtwDr5o8Ic9JHqd7f4hHjjBF40Alfkcc4yn8kOVtr0V3AX%2BFM7ZrlSuK3qxMwVENx%2BpjA%2BVpWRXJ3PyaL3LbAE4M44kicDLP%2FmHebCxoRDF4nbFimfhAv9duV2%2BLPDO6gbg7zpZULXZMChCfE%2Fg5ffIdHi1EUTJnCxjq2p0elRXrVchY980AAzyGkhePeKPD5GLY2sxUizSo137EcPMZB8gM6sCL%2BYdX5CVyYGiEab6atT70yR6IL9%2FAC96yWMQNAsrfbnHW9XbzSj1qVBwQRszHWWB4Sxe5rx63MfaX2QRN5q5ElewIg10YzrFTcgZJewz38Mbpl0ASFTwvLhye3ljbxtwgvIq6xOLbrE4rAEpHvhOHWdPFCgOcafyI8Cl%2BiZeS8CRq9gdpeD%2FYapQKOFGhnPmwwkdILFXt%2ByaBBS6Jne%2FiiYCnIaBpg2KT6Tr3qvBzRpRlGMo7Ka9IhEAERKeiAjCv6E54Vr4HJaUxMRc6KlYZGGvriFsDaK9L6jl4FUxlvq72Vj0vE8%2Bp97GMPm0WBzih64Anw8n4IJlyFt1rAyjw%2B6oGcjqDLRORnwYtA1I3PWDIC5m4rQn8AZoukx%2FWENnIfWEbf%2Ba%2Bwp116ClE4mjGQzQDqwYsD0VU41owp4WJvgY6pgGB8d%2BBNRC2d962TyWNc%2BeZi5yJ05Dd7pENzxakJfyET8tWdSSaEtXL%2BK8SVp%2BlMPDDrGPVxnljft1cmXEhvFKrrge1jUHRjwdYSpoaYNtksKhD7u1ljMyQMsmsWK3ult6ILdgfWmVkNXeCOdTQRHWY9Y7Dg5UeE1Dinoftzvcbh4%2FzNVkukG2InNvM5LWC2fFipatpnG8Ra0RPfpjuvlb6ISEWQukq&X-Amz-Signature=dacca391ab5f42de00ad0043c76b90aa084d5e80dba5b85d952f23d726a2a44e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
