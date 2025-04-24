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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BDHCQ6W%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGgzietgPwhlQZcCdEi9U5%2FjdJk7Jleyp%2FKWKmiXV%2FW6AiBSaIumM%2FoX6LMCRb0WqOFdHCcynhIhWIAQzmHEm4P6vSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyZrbyHNbf9xyxxWuKtwDoaV3zq294cUw97L3uXm0NF1FuAm74dpsGue4z5znJC%2FUdtpEOt%2B8VV1ckbXFM7aCt5hXApShJspvlaW5UM1x%2FC%2BXNlCcrT9jxz%2FsxSAzhpWpsbPz7Y3UQ1L%2FdvTAqa88jUHyr4MUqDvYp8YWlfFXfuQe1N5A2ztSoQnixoLDitbgtv6KT3MJxcT7EYF9jxfBwC%2BJiVPd5rt4NIcgw17JTWcPzeyyxDwyZvHMXX9ns5nK3zB606i5u8pnz3Yxx3qbiG7a23%2FFDTxc%2FeLtAX1IH%2FNodAk8%2BalDXDDLIKHZOvuTzTGKBfH1%2FcBxYWsl3zECkRJeV51up4ABkp2MvbKzZM7f3DeDdFTzQ6zM%2FEhMRYKtIvxgUtCixR2iDn0ijUlDWPV6NMov6rLiJ8StCbk1%2FxUhU5hp4%2F2dRoWe12qOhXdCs9I2xkcchtvqLUPiavDoQWpMf7e09Uf6pMz6WcM%2ByZK3wlqtqVa8JSP8vuBJ1dwMcid%2FSLXh25PDDueudMh6KiAdKPgtM0XMZYRhDhI5C6Hfctf5fGwgx%2FofwBPO0GRDnTUqn37jHpeeoQeFB%2BioYQJJisBdi8fcm2ouWpH9nm7KqgspbdZZ2rPhgC1RzqVUAG5WQRc2mPZjSRMwweWmwAY6pgE4X4kBGCHcFlSdH1WeOIT8y3522y%2B1K5lZunoDcnBKUTNtLzGD4%2BV7uN6rN0x18RoCwvCJYYx0owCxfTHYN2%2FNdh6KIm%2FDlBg41lEdYTIQhcJhLbY5EVv6KvPEqYS2XE0V%2F%2Ft586IUkUrSgxBprYskcUNkOUmA36770%2FlYZ%2FIvxpsQEuMNjNLXjpfNVBLVFI2ChLXxbiKp1Bo9N95lsE4BisWN4e54&X-Amz-Signature=f1670170cc43228f077e7ebd1bdc4cab5d3c5c0477c3cc2883820d18f9f0544f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
