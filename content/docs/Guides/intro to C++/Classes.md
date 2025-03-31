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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZN2CO4C%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCl3Mdm%2BX1VgUnrGqyNDirURaxKkxhOLyYxg%2Fd9ps0ZawIhAOS9ztyjfS2rLXchFLC9TazLbcEE4b47AHGDMWOdV3FhKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYGBP%2Fsd9zdaWbAogq3APd9YxNnkFlTMYH58G8HTE6BOzvLqy2Nd2hdAAWdZZRpgQRnbQmcCWDmmOeokauMwO7OqlwsfxC1V9S%2BpUp1T11c%2Fc5ANqYEFe9msUu2O5ucI1aSuCqaQAdlZ4Avvj9Qo4tCPmbxCn31pNVNNJhJjyMi0Q0ALoqLdy1dPieEbzaf2hN%2BLK0lmQ5U1yvDBGLfJfRBwL8kBt%2BhH04RW%2B%2BsRCginsKh0BAM2ijbWzc%2B0fQx34zNEc025aoPpSORUefdbUvEK81h%2FNf4bTRSreUcNa1QHE2TmPicb0cvjEhsWLl2QfbypKWQJvJWE9KnlduBVZZMuxxnP2Fe8n6lMWx1N4DbQ5SbY%2BOhF%2FdYIfj1meapLlPuhND7DIZbMu8Kb7VYOdFiI1diA8NK%2BhbwoDKlNbvxc0ohGm%2BvPkfNtUR19W0f7SGqWhxV0V8NDDsy04N8bpBMUAN5ZAQ82V1Gcnae48JdkwA5hK4Kco9fsP%2B3aF1OCJujNmKBr7WTDp4pgkL6a4Bo8CFdsFO82AwgsA%2B58Tp1brW5MfoNcJq%2B1gNw0KPebvKcM6Q40EVzDwK%2FKHCRLqTBirnyoPP%2FlHvQS8iKJQvvY7bYt3l9pjzbkOt10u65vdbtbejztn2MxbjOTDKuKu%2FBjqkAaLD98qtvL1paISPPsSPSq1MjXaqzn4aPcMspcRxaPdMBmDTpVHg0tTPT63gyjKtpHiV1CQK5%2F2t8axNUIXSshGCqdk0iRDMILDCVm8A6jxc%2B0B438OtaAvEbW3NPmX5RwmSsPuhqZodos4OLJKVvFG5ke9hT1pepMpEYS5XXgWD%2BNhVtFuQkMeK7SFt8jmCA6%2FpgRKfI6nU4JM6bPrNYurNWSyi&X-Amz-Signature=0d5f7026db84eeefcc980f8acfba3bc9b3e8d6d1c597cfc01a44a53d95d0ac14&X-Amz-SignedHeaders=host&x-id=GetObject)

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
