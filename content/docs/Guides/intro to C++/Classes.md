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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5OVTYZ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93i0leOPo5kKRAJLMnhWFHX446AmxlvtUpl3oE9MdgQIhAOlc1Ijz8gzKPcEG4Td42Udw%2BDRrtkk%2FktDdIjpRne%2FRKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1%2B2t3e0GVt9gtSEYq3ANxMhcxCA%2B9Pi1wuSxYANej64kgYQexKTd%2FMm9u8ToUM75ib1xWnlI5EgEmF2hrOAQ1xpI21h5B8DKGIg%2FFwU%2FNaPPxz%2BSN8nyBpRGmp8sj7CVuvRn%2BEigNTD8zyi4KjA1n4X58ajH3VoZfiBn%2BC0jl06fSoivxQIDbXnq1r%2Fc2lkN5rUwoeGeuD%2BX7ald4wlOzQC4uzU9W5D8BD9Bjp8049rxxz5SDM12k3baZHvRj1z8OxWSlakxZ6s5rCC2%2FLRdKFXHxldwWNLWWCXZIPNBkKc4LJNWvNxn2zDT7rUTJ3Sq%2BEvlW%2FOgifKQiowzwiwW3Y%2FTUHibpVyo%2Fg7kM6oldpOesX1F6AftvuzeABRFeb9Teqh3%2Bpxhsr62EFSgetbwFtpT%2BeNBCZwJhlppUFrxNEOGWChSiTq6dTg9w%2Buio5m5F8z4vJv2aXpfJykn%2By%2BFhkm6trM55oilBBWbIEVQXGwgAZYy2lqd8w5nFw3exltzqN3wAeDFP1OG36K5ctOVhzWyoZYiQsl7h5Qbo4tnPMvMpef13s585N%2BCBlvbBshspG%2F9pAYgN4hbahUKpnNWDIWt5ECYKK%2FLzwN5O0w1swy9oh7jxUWpYqzAS93WzLd50xri%2BHIST%2FJDJRjDUsMzOBjqkAe5l8w5iTfmsffFQlxIhD1eDrifubVzwNF8pB%2B2raji1r8ULEq4RAREP8RTLV15VIGFfFH60T%2FXoJfKlSZybDzLBdMpGKRfZyFg7q4Z3GnTA1e0qhqMzAAjseAF1wdenEol1gpKQyxDOWbru43sJOrPRsOix07yR1bhhjCVHQO1t%2FILQmsMfsPIvAbVSWXQBZWxrZVT67liq2HHGMd5Gh1I%2Fb%2BxS&X-Amz-Signature=d39884bc048e38874d87d109ca3f69fdb56cd33b88f11113eeaaa8517b02cdd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
