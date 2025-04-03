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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MEN4PHV%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIBI4ngvQ5v1hQSp7CzIr%2FpKuJF3A4MoJiIXuJa03kmCQAiEAijytqMaOSVyPgbeS0AyLhP9C0hCiWbYNqgP2PEDFicIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzWjN6aiqlh7h3VTircA0jtDTbTJt4F0JC%2FfmyuSSp%2FNlEWZsY4Tllq1f5ZEe9Xuak%2FiDp8su3S%2Bf7nMNj3%2Fcl1zSsSjx4XPPvSioYSxMW7nceqy4n%2FC3KIxo9c45MUaN2UMcYAwNk1icUNPC2%2FMM8jo4U%2Bmp%2BK8Ku3CriAgj4jadLR1r0p3Vt%2BLOY5dLfdTut8Dm34AiM57EjZN9YEdV2utFt2s1gr65vSkgBIrEHIBclLTJYcgqGZhrA9XGi8qCoceW7E8N5g3JVMdMq61rv3VoVRSsQtMe%2BC3MxZJk9wMrrXvLQ%2F9p%2BzTAzcWLztx1w1QKEPsWumkIm%2BLNqtYYl8NERS0L03J4%2FeXtbOkSAMQ%2BwGp%2FdHkh2RUoRX3aFCM4FpUGJs4eDuGGdsJOSS9DYSGUf%2FSVMRdsaeCfJZqXmYoHm%2FyHRJ2T4dId%2Fmr5G5kC29LpMc%2BbD7WD5nYYvB55U41ZSljy%2BmrDPWGnR8bzzsC9lPjt8kn6LIuiTBemXfCB6OdovqGDTLOCr3LVd54OeW3rsj4PSzQhR%2FkoWFsAUNhgVnwE2Zse3%2BJrcKZgl0Wvn%2BkDVHueVSLyBl9DsuG1VoBqZq7BEAjI2ZNOHyAf5JMyfw29wvufWEoOT7%2BZr3Y8hRiQakmC%2FTKXFAMJDhuL8GOqUBoqCYMyS42bAw18SOxPLB0Cd9VouigENp7i9JvBkDL%2BxF%2FRIiE6tdp%2FWm2ejOKc4CvER78jVsETtxJxpoiVZAcrURSbbrXf7bRwkCZpaM3gLpDmd8xE3OFUySBXmgjTFARhvEC2SFBWe2GWd%2F4uvIgWFlXryQ1HXtG4pR%2FUqbiIXkoyBWXebNkKj4Oaq3MlMtwG7LZMO%2FR4NV5OzxJajl8GRgC2CR&X-Amz-Signature=8c35e14a22c175b7a7b43f797ce2180857d61228f13ec974134ea3c7e40d1329&X-Amz-SignedHeaders=host&x-id=GetObject)

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
