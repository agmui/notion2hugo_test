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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FT57VRZ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDLTEj3JP4tPazEN3C7RNGeUF0d2EEgFmLH2cO1L5MbfQIgWTjpRS%2F%2FDeuLMQGdpaAJV8yoLr%2BHyXIWBNuoRsQ1yIgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaDaFW3prGAYad7ZyrcAxvDzHf1bqJEsj7i9I%2FwFCBHpv45TL0mzD%2FgCCkSEkHGkMu7boxgGYR6MrA01odg52ZmO6UPc5XCSjB85m2HJCpHO45OfrQLlPeSGttE526%2BUMBsH%2BpoQBSuTyveyJ0CvHrFd6w9gGg5AxstCTc2Bh5mkagTH%2B0QuiNTp8kiJYbuYiPzJg%2BY7GJ4PUX5llaTp2gpP088jfadjUCsI%2FtUPMB64xuvjmnAM1YqnSwmJhPNE8gIHQE6HPyjPjOqKpxG47T8iTnZiIwJftPvoTWhgqSQoVqeFyoJKU855F%2BMnajLqCUVxDknbQowYJ42gVxPIoZKKvReTFO4tbza7EaKTURI7APA2gnMMRtUkl%2FVWQfyIdun9mVl4n2EL7syyxuj%2FRopdhi1IXoPNpBb9sVHLqMUlOcN5swMUYiSQ2qNAkOmIreKydJwGGjumDBGnRpxsAGGnc0IKMfLB8gMY4s7VrxXtotl4tUHpOOnIluoxL3QJA%2BypqtQEFzucXe0lFWXWW5eedx8IpI7g2VuNusZMQfwHkfA8B1qtypTzmxPTFZb3DPKFQAdY4CZSunmBMsO%2Fir8Hu5Pn7xsP%2Fbxm2tkPkKku9wbddss0NABYoi0zkTynyas%2BfDi6Bg3LDEWMOi69L4GOqUBzz%2Fl6nyN9shAt9mmGhD8%2BRG1uR%2F1m2v6WLgma3WkT84fXlFg4RbcRi0NA9wV7TkzLmFrDuR8N9a%2FVlPi2bD6N9QuqP%2BlryKDAV0I51mH9tzGmHnfWqP2010mI2Zt88BM0ISVb9yJVnD69fHc3NBsfyhBrVRPawfQkzq7jltPVXy2Fv%2BtflIFoWijqIVQ4UPS1tAaluCzsY1f%2FaF8xSxlT7e%2FxcWj&X-Amz-Signature=e0bd73f47ad433b7961227209a6e455002ee101fcf13ab5b5b846aebe8567336&X-Amz-SignedHeaders=host&x-id=GetObject)

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
