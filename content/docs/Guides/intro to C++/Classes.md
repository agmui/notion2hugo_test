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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV5LL465%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDNL4wQ3T1UZ4Qrp6D%2FLWEKO%2F7wngAKai7pxhdzkm1gkgIhALk2kVxay4gzsSiHBCbse1gayAgqCdwK9SaV5keVjaorKv8DCHEQABoMNjM3NDIzMTgzODA1IgyYM4gKDb9JS0p3EB8q3AO5AgEqWXv7lPJlvIdc3u6lefOl0%2FD8IYrNIytlulgyDC8wHs2qjaXAWacwgNPrzFaO0fWxVz7Qne%2B34m5wYDEkd0PvpLTusF%2FRHDhizzpKFxY01POGRiNCu310pw%2BqiJda6qoCT7wMqwZ7XkehcbvmJumAGZwxIj6oumxlK2NT3yzvp6cdXGtnYkZCA%2BGpnSzAAL25C9EXUXICB%2FV6xxmIajEX1NocVpazKLToOF7gs9NwWjov0twvlWYedCEia2NxqO2DTWc7x%2FIJ8LaLJq0nsob1usQNpHFkRboKYHg%2B%2BmiUHpv9wdvSW8nHncN6ZOtmMPPSr9ivY%2BBBu4TlLUrVsyR%2BcCUw0A2bZJ4JOyhDjQpZ0DVVYSoAZ%2FSoZUI567Fc0uhq8%2BA4TPdDfIPV%2FndcTJYeHUiSxnuToN28tc9PM5g%2FcguXWnzZv5V5fMx07QdKZyiFndkdXlHwnEZb7av8QGpcp8XLFXLy4UogCn5XX4aByKoRWBeRvuZWoba10ERf%2B6%2B0wuoMVxIy0HIn9Xa1lq3hmdzLlKFkmL24U%2ByC9bqBoQVGWEDYFytf57CrS9V2avXvffszIiGU37L%2FW34sZ9rj0aGRHxYWInm7oczLcz9TiZOfyS6G6ti1ljCr%2BIDFBjqkAS3CvNEWcbhLf1MCgFSI2iJLtUaTEvK2%2FW2gPJVLufuNsbnqqquojrKx0O%2FYJiWz9B%2FXGbnXZCu%2B6O8zMyuTyV5r8URctjzpRJdBBq91JhYo20JMXcY5MIznTCJgmO43jjxvsKyUENYqszTNxZ4H84tdpsawTu2mWRtbiB5D85%2Ff25Hu%2BYEFYFDO74fwhXHKq5O%2BCTiHAlX%2FMNJjK3kSk1QBTQmC&X-Amz-Signature=09c9f22c02d8a18c403d4c6b111a620c7f8ba159b47789fcd8b7655a2fe9339d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
