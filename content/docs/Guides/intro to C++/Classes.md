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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5A4OTY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCowM0jCLLB9WSqjP3KtHsugZ3cz6BDuyq71ef9NYxXSAIhAIeOhMLg5Do%2FMBX62wK0AAnulOh%2BT0j06UKvfPI2MBqWKv8DCDQQABoMNjM3NDIzMTgzODA1IgxVDnEEkBY%2BAX8pd3sq3ANTTsZitrp3Asmxx%2BqKLpIGIlYNP%2BnbrUU6hbbQo%2FRz8eXowi44mRLnyu0jugNau20w1d5VdwjTN7nrGpp%2BSHjFjI%2FxUskG3R9dW6%2BpAyxr3lCwWiWzH%2BypCD%2Ff4lbBKWunSft3buBqxNeI6g7JabTtj7DRuQSwUNr%2BaaG9FutsKtsiPFBC5KkKKqnOjsVPhpyRrbFkrV0K8ph5Pc4tt3WONiHnWYT0D7KZVE9NehMc9LXs4jkdAOr8HRulkhFKLvXgTr1xDD04Gs7IiMyqf%2Fx9GhOMq1O9UvuGNnje67%2B5Ns0Gcgu32%2BOnirJ8Ws%2BOKCPTr48D0Tc2qaiHWDv3D7TA7q%2BkDDOvuVzF3uSdf0oxTNIw497AvXKRx8fuddxOqGy2bRLZZYFTib2Zq0mDveY4v6HRyyXHaDI6Z1q9lHeIV1ebom3tj0os6l7p1zMNVRNDplKXFH%2BdCzyt3DsW%2FaPERiY%2BtmxxM2YIbKMUlvfWirVMfOJC3vzQk07MjNdTkvATIKR6jsRJLJhkjASlCdg%2B%2BJnQ%2BRJrMzVtxJvL48OxjXCYLm6aUp%2BcH2k7MDrcUggIl3Qju2axabvndjUwMgSMmJan9rgKikt7GP551lHPgfeSzup6KMmskycSajC42b7EBjqkAeIcG%2F8NQKMwHLBsAxDzHBZLjN2a0eCMyfb%2BAWyrP196P%2BnPNedN0ndAGMBjmrAdnuDXXXsPCtO3ac02v4O6AFofIt6ojWUJ%2BDR1OKYoD6Ysxmtcua%2B4YznE9C3giUisOh7zlGLSBdPwmtC4gATM6ctW7hXgXpyC6vbEZHCh21%2FrtTfIo18YRF3IyBgejAqz8AED9yNATEP4B5xVup207GlEAa7Y&X-Amz-Signature=4967da56ebe7fd5c2e17433b872e460b3f7f356796593de44b17a2c77065ec89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
