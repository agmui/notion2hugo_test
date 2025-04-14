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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCSA4WRJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBSIWCRLk502NC%2BFitA0yN5vePwp2csRTOUaobH19dGQIgRdT4hxrIeu9FPD1J2cwd549pus81gRuIulHMeoPIh%2BMq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDAHsD9O%2FA6vct426GircA7S752eFR%2B94TNAMD9kfDyFW2CL0b8mMvpsbbQsTp9kQ8sg%2B4D04%2BlENBWuRBMM%2FYP%2FTDsAqVdWBQFum6UB48zvkdnuFkbYUPkMgf7ZzUwb%2FGlAdcwdy3CoS8StvTmxRDmoW%2FNhuopxUmDkbLbrMUkpCYLagUgoWToPow8rkmlIt5mBYqvV%2BZ1DcaZfMJW3jhzfFY5XpP%2Bmj23cyiomoqESafhH8qGHYroXEhI3bEdU9ef9jtUqyklzo5DEi8sEJmGK75XQHJ0a7ur9NcnzLMwdqYV5ixI9agHElSWogfytSQ%2FzW3uhBPmjViI3WiRO%2BrxWmgkA4Pg28kQCWQCMp%2FzcKMKwAqk%2BexaC7s6eHpM9N0n%2BfjBx2nmWRIebOuWYDkPqlpTDOowVIaSIzdDAM0omLMC9%2BiyHaGx7Lz4TjHf%2BjqvR48ubvF0Z779hVLDFe0TWIddHiymYg9mxmCwDJ7Xy%2FpeBu8s31Ek6Y%2BplPp2jo4RnBmVt6qKzj292Wm%2FaimUFYRlOAHc8%2FigAqCddjw03zSrov4CrvQgHMdEqtHnL2m%2FGV%2Fi3DG65rC2baGFTL7f2407mjprT%2B0CTTpSS2Ld00raZAyNOU0%2BH0TYTtGY9xnrEFwipKgc4DlhiYMObA878GOqUBleGVLS7J%2BziSIWQ0zQD%2Fzl7jqDBQo6yqmISXDDSaqrDE%2BRpCPRKQ%2FpnZC8yzbARTBS0AOYG8TG9T5OfK4fjsveffOwrsZkcVkR2UsyPFMyhwYcjZ64Ag4dFBBEN2a5sCw2yeEriIZC%2BUauz%2B7Ogp1cu0msVyMHALSbYHhWlEIG3O3XWdALuN%2B0ZTEYopdKuh9U4H1NoChx43kzeOC4kakvidZ0yb&X-Amz-Signature=2ea7b4a4e8ed50324e754e796d75be626db404d8b26708d3313c8406c3bbf425&X-Amz-SignedHeaders=host&x-id=GetObject)

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
