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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOTHWA2N%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCXsD9LpGzFIiawyMCK9O9tbhwbcIipZ%2FJHxXXKXNdoewIgO1dTnAqQL%2FIoZfrwup2sttDLdw6Cr8exi1X%2B%2F7UTpfQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDN2zgNyrVgsw1blLoyrcA4zC1jD62xByWBWoYm7rUP7Ycle%2FlMSf3fcyKtcCBilOKFelYo9OJd4CgK1QN%2FIcVufidMwX6jythrY4Aqoy7NyLpDl0DKeF3bHh1Ci62PvsQGgpgtyxqGxS95zxkkFEnMv0EmjnptOzyqxlLHXHs7wPqxibLseQm0UBy6Xmn2LSqLhd%2FfEH8UUnivBSAGPrdNJcngWReqj4buAq1nbfLKgff7rTTPdUhgs%2BfLpjeBIL6GD5yvLTkTgfPogjPtVXrPsYRCkuTBCDr207KaA%2B5ht3mmDPKTGnbCn8Q5BigpDaoPYOySGgwM5InYTm86kauX115F0ThPhJNvJDLptKmLBJAOY3sjEvxBL4M0oPbumDWRVi1hHGsSupg0KZSbU05wPpb69SGSbpYRgOJPYHRsN66v3pfFWBmF0XQ0FPp%2BInh%2BRyx73vyhFBQDKl5m76B%2B4PIGAy9Lbo7U%2FbfIMsaV%2B0Bq%2BearfPYqWMA0tlFOW4rkVlX5PLymijJPr69huX7vRb7wMe%2FIItnBFX1IQ%2BgR9Ng9fq8ThT1apMBs17RDRoxbdwCkxdxyloEWvyUk4CjbDztyUsovEsUYTAig5silysmBNT1c5n1XNS7Hpy%2Bdy2WYzQXR%2BUtjV4vcMSMJbaiMQGOqUBEU3zBGjLjiiQkFWD%2BVZg%2FHOPGiKQjbohNeFtXZoWgGddUJpATVPC7OlrPLvfoI1UgrGWaLoKShgu9KjpuVF9sNidZxD9tPes3tJQhpPV22MIDEskKEynRwYfeMbAkUG3CQ0w06CfLnROarXRuJxrYy8sNy%2BTa2svO2m%2BqyDHF2RkTgIIaiJU7%2BVCAuAKlCBl3tLd90jdGUbSsidHOP51z%2BSb2D4n&X-Amz-Signature=62d508256a090bd9ffa0076022da8cc640115ca9354f14260f65b18cac61bb8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
