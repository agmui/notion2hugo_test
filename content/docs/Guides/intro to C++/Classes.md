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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z52OL6KX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FhnXYNR8MHhIs9b%2FHJZqYcTg9avOldmGycMXVumChyAiEAo06ubBu7CGos2AK57K12nQDIFDWY%2B8k%2FJKanERNPq4MqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsOnPVM3MdiYcXFHyrcAwqZF2dFn6juX0n6%2BAbebSVFT0l%2BFdKAs%2FB9vTkM1ZV%2Fb%2F%2FyjXQZAsHja3RAihHnljzjHf7zSDIsFxrZ6fahep8WDj4woZq0RbSWpfK6BgUOdCUEqgnjjQtOgcnrOhT%2FVJlQJqgdMCZpDX4kSBngzFSmd26hm1t8%2FVz1Tikx%2F8gLBRf06hT%2BVmbA8dzkT7lHwwqFRpda8yTlvxPgeXzVWMIus%2F01pQUbADs2KY95SvJmaL361fnv41KI1cez1QD69NnggNTzgLMA8%2BZH8JqAoZDNH6Ot0k9VBhmSokgy71aTIrt%2Br%2BxLN6XELrI%2Ftd53lS9R659tlRXkMK%2BM49Z0i%2BguOFjlk5dn%2BesIe37MakV7kCXZfhRi8OgCZEGpLfJTfqhGdcH3%2BtLnD9evZaqWjGQrmhbRaf%2BnVGRpfZOWjkm5HX2kndji%2F1I655HaYnTE2N2dfXr5LxmqEVDHn2OTxT%2Fs4bdZzeLltYFao%2Buzn%2ByJDxqEN7KSibKtg53SpcH7LC8ayySeNDhS1h7scW1mVAtjaYvWyqhy02XZ9eZsjnwHSnXwPW7VCJBxK8WecKfeYl%2B9tu5oVOFNc%2BN8Knh76Z%2FO%2Fwj3PhB%2BLrlnn%2FY0IWmLQjkCm4ICVbeHYr%2FIMLy648QGOqUBM1jCr2Xe4Er29AIixAZ7XaxXI5QuI%2FyFdZvlSEaYE8IprUO99emhDMushQtLJDQtrbU3G62gSybj2Z7vSWPcsoxbP%2F0uqAwsIXSb9jwgkGQ1Ath9ooN7kFFp2MLMZh6Etso0I2tj6ItOZkiWTy3S8Yluj4G0MP62gdbd5cCOa8GlR66WXbdPnVvSPWnd%2Fv3O5XVR1QuQGkN3Ro2cJhSPjlGnb4ma&X-Amz-Signature=c5146ec48856ff2716a9c7fdfafc08e74d1fa1a9697b571c82b357710ba1fcf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
