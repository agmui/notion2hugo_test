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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUGY67VK%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDmtq6CjM5z9PbXhXj8XGQuZDsIEjN8XbKKFu3QQvvqaAIhAJQov7EL0DNzqy44lsCR1lk6VmMcyW%2Fel%2FLGJRKeRdbPKv8DCB4QABoMNjM3NDIzMTgzODA1Igzxutw3dtjPFiw1usYq3ANqCPEVi0SrFk5lMYUMftQ3N9ZMRa666MVgx9GgFEtMOeVUmcoR1c%2BJmPDRDU7ppZqh1I8DIsaTgUGcEoWTwKmfdygiYjuB39BHT3dzBg3FoOpXaUZZSuFL2XPchZJT1ziO05xvLnZPGdvh1YvOLwxubyWuNHObFWxrgiwolBiBZByTtjM%2Fx5yq9qn6BnesFmMr0aXGIe9n%2Fxfpk8rNXdlIlmMtad1FvDIZ0bPKZZp6hVSGB1VSr%2BqdAiEc0XZtSchhWy%2Fh88J%2BgsJu3wuCuBD%2FdkEKDWtO54AteX6LmSgCjmI2JuDzo2hawS5qBpqgcaovHrffTbRdp01zn0HoJUNDje5FXiRfCTgII61X2h6EutJu3YaSHBubWOP4qxWJINPcr1yJmFiYXDGua8joYPWj3%2Bf2oZrj9fae%2BvTvIZ1Z3k5FOTz44BJY8t09ZlbdR8lMTD3mmnNvnpvbUgMv2AXnN3MgRqCbWdX0DaMv3sq1iSzuHFgsjejzdH%2BXUen6R13GTOIlBPaHH38FI3xPm7oCTa9xSDczCPcDrjhARzHNxUTc3%2Fs18ZscHeNR34CumEn1jA2AgjP5vN2QlHelrn63XPFXJOexpEBDkjOt1DtNxrA3HpcfB%2Fa89AWCITD0krLCBjqkAVIUEsOvgk4MTJVUDvG6Fjfp%2FraaEsRQMjianV2ct4R36WgWRow4gv%2FWHLIA0kDqtbbFt2KCLIpRNjWeASUP9SCPM8SN6KDu1Z%2FAeF00YlVva9cFHcbNRmYET4Yeq5%2BqNmBvgw5FnLWDCg%2FCeinqVjPWpgwX%2BC63PeWNaN6kktjmEBdzNIj6%2FUi3yujPtp9Vmud99F%2BS3K6tdb6nP2xpS5udGLO8&X-Amz-Signature=e858df28f30a10a2087f47d0b85fc77a8c2e56a5cbaee0c92e5a44bbeb523bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
