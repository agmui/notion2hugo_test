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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OYGNL7D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7pnPqATHBft29qoRD0on4PVU4c2BYsTWKulU5nXFi4AiEA42g3hiVEC0ZXtSnbq29q5gIIYDjQRCK%2FmwwHmykcujsqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlcXQy%2FdRk4j9OQnyrcA2krXZvRoGUBHc0HDosVMIaY8c4YwMmmgTaKCIsP2aEAvxtO5UDiE%2BAmcOcGTSNsjmi0SPFYrZQiW2NWkaxNuSuzO6M3cYQOgRAVgli9049acmr%2BdHTY6UckE1AE3K6LKuDsFYxqgMv963uVN4hkwIreT%2FMP%2BQaJm%2FHM%2BOOK3NPtqak40L6b9sNVBIE8DzB01xd8CchLStBiE6gVmN%2FiHXY3B0gVSht8qitKw9z6BFWXiTFsDaP2ojRIlBrN8PNsdqltdIlC6z%2BMCaARcaOrcWeF%2BH9BWMKJkT8AWFTvrfhjoOKoAkLQ464kkLEilpDMDQeuOzcDQb85t0CLBmw5ohH%2F2XPkdI3qlh%2BCFl8s80GOrZ0a87mNQNH31nPwxVPS%2BtqdX44FA8mgU2vd2y%2BE8%2B9%2FVrfJBapWinVfIIzYR7vB4HVUE21HHfIN%2B89s6sP5Qn987Ahp%2BFeDBfW94iElj7bO8KnHcCpCAIah5d%2BsTKX%2FK328cNkWOWunbz1PNGARAZwCJhCeSABA%2B%2BY50pb3HvFhbGCRwYgXiBZuOutWRvSrm037BiJnS61K%2F10kG8MnGxV8OcJ%2FwQF1Sn1ewuoZTwiV2cocJblvYVsdIp6Jj0wvnYdlHDTwdz2y%2FwOVMPKs5sQGOqUBP6OPPthG6WWBFXen3DXSvs%2BHrg7E5Az%2FXgilwwwy0%2FxEzu92PUDiz3xsNzwq9hPfULI14bjT4wns5R92ROKKGbb%2FwhaqEjan41pN8bRgNC8kjC5v0WT8BHfxS93lNDaGTQFuPLXHzhQQBsT95LVx5E%2FoBUxr4kap97hzRF%2BVWT21kcaijiNplgYnYHmp7UjP1kf6XReQ%2F%2B2cfZYainnki2b3AGzQ&X-Amz-Signature=d0f15c8f0b6528981fcef01dacf268840531f160f4d14b7c5635f5f01eb35ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
