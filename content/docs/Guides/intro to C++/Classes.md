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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BLP6CP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCDBGPDBdry2z8TdwP%2F%2BXAQ0UY9RwwpVGtgfydI7e6VeAIhAMKGFHz%2Fu4szxsjRCXdX%2BY7XaCAZZvkU7f85x2GsdRDRKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxlYAZZNx36kw7mEoq3AO90Fh%2BfYvDzXJ7HA2lI3BbVzOoITmA5iroeL0hG9EByFJKioFDDd951FJiU%2BRl82T29laB4pSbk9doVgVkKTaKftgtM%2FiJDiOiP3D7VecLYqHoV%2FcmPXX6Vw5kRk2hfS0ZokuEUpUJdQo0yvmQ%2BxJKZYFTU03TTdS9%2Ba46XvEnQmfi8XQrTZ2Dx3onsiuTM2Mgn35o5wHvDwaPFvAMjxq%2FYbXsfmo28HRitO%2FzJD1fF%2FotzkUo4KXxGtKK0rji7%2FwWCaAn3LLydEFAHhG0ELpXXgRZ4f%2B7CEPInImJQ%2FThIU%2BYZ1%2BwZMsMbLWm0mH7KY069%2F945CxFjf05ybIyc%2B2c0Y4isVFt%2F6O7fAQ6m2cPqmwQRYJdUzcCnjFoN66dwfxnTUNeo8Ac30FKspR8LnPZ3BWy4ozh4N%2BCajbmYlDBfgoydh3Y4M%2FmdzdYtYFbvEtW3k8vLuglSz1YRUr7jPH9oQDvpruxTmcNYiXOkSVujk2%2FxestiN31AP1a3fjFdFGIa2FCB26aOnMuzF5W3jZGzOrXe2AkiAhwL03mQrS50ux19jWNRL%2Bm4fuviEaPdmw2ATmuiLPrlM8Mjg2xzqA%2BBjLfG3AyyzFBeIZnNGw51OCgr%2F12FEEAlCzxKzCf%2BfK%2BBjqkAWF1jgefpK%2B%2BYT%2BUOGxEMJTB%2Fk6hPol9KM8RSKe48e94%2FyMiLH2Ij25%2Bp8qLicFGTswTYPethm4lCsu6M32Khn1ZbF6004OfaNob6Wbl2%2BVnXLFOhgLITN4UWs28S6%2FJcVNB48B%2BcYN2RavEuA4X8p7D%2BxFZ0ohnHjDFA%2FKk5KlGr8HXE7TVZmo2N80GWAcDp2vau2TPBmdCpJPOW53U%2BgFywnV1&X-Amz-Signature=c111bdfe18ef52ed5462694ce01804384b9190671819bd6e879febf2b6f9f9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
