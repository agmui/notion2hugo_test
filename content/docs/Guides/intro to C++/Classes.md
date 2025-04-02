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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KITU2S%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAt2r%2B5VMfe%2FM8%2Fgge2k5n8Dw6R8%2FrV7K9zyti70KBJvAiBv5%2B1qI7vj75HjN6Ja73gV9H%2B56bf9s9fuTa7KQ6cXICqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7KreFPxKPP3klVmZKtwD9LDmP5Jlxf4T3hfuo0p5Ew%2BSOn5ThgEcPQoQDxX0sF8TLPGVymHAzmai27iWTt7f9yRzSpMomxSMF%2FycMfRR06t8Uto6%2BQpxPCoNaeSXK6IEsLCJPWKFQz4E17qUT78r4uY1cudNUyVwbe56T9WaOeH7WzzFbBMjJ%2FYi7%2Flfhy0i2ctI78jvDPp95l3C8ZSUrgO09peheh3ckJdFWft0Xbx4aLi1s7xGptC75FF7HbmtSClOsfe3VhICbNrrcYXCY8%2BauDFU9glDLJF9upVulY%2BPAvHLiMvc9IIRBQQiF7O8M5bAeD7hSgz%2Fty4gi5WcfyfLJjh1tw6nLcyRjzxTYLB4BKuV414Lsy3e%2BEmyIN0bwt7k4Hv5kWoeQyvURAjxoGJkIAMbAuZQiNkndeuZPCctEVo%2BgrA%2BOnSO0Qgs5I49oPPvn0jVygHI%2BHtPkHsXqJ7EI79LyxhnKLmViShdpjJhOA6RD5333o%2FS%2F2YDAqU08wDconaajdShvFqhlayce%2B%2BE6rB%2BeZdoKOkUNIjCg3Z7SRCNK352LTIAz2mu5Xi25LFZGh4H%2BAZcY76HYhXTFNWv0laVyIT4EyDW3XagecVAQBXLjF%2B9oVxY2k%2Faoy%2B%2BPRdjDUY6msuxZd0wlvu0vwY6pgHPmSPZXQOfNRdRxuIgjw%2FLx2F0YKet%2Bco3Qbe5txUzR5EfRbeZCvyvF3MrfiwnFoJK9dm2e31ux6UQkj0ezEiHbzBho07Vm8MDZbA20DRDTiNUTHoV7Dn4Tbfjcgg9JEzej14H6cXeXAS7ykxzuzm93xD2xx9ma4OFZ8%2BkhWfKk6s91stjpxNvShg1PuNmPMT6Sa%2FsayvD3faCtiux1ZlWt9ryVNYd&X-Amz-Signature=f14ad9ad1216833d61982ea796a447392aafde50ce40ad535cf65de4e34d0c85&X-Amz-SignedHeaders=host&x-id=GetObject)

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
