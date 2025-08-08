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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665YVYNKV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIATiEt2ntIo0PXajWANcN0xBBM4KY15INDe%2BtX7cZWeYAiEAklDu4O62Oh%2FN4A187YdTCmwPtNqNbkpspGFvwcZs%2FOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcPSJfW0DZqIKMtACrcAwoxrFE5YuYfYEMAisItzxlGg3A3jDDvGE5AkTdk78Ama4R0RpcEhpweLcZI2dHTOG650aNQLA1l6L%2BLJL7uuRT6664KCXKCavE6DdIilabw2lwkDoJvm%2FoyF%2F9ZyFFgXcAVrTIjOmefkxM5k2cpmK%2B%2B4EgVHxMWzG6mCxNRBlAOF%2B8qe46GBqi5WRfysqLwA%2F4%2FuVpPT6a%2FZydsLkzH4ncJvRzn474CIITWNDyVnotaP0LMlDg4BB70klnsCOSIl0SMgNi9axd%2FRZpKqpOR5NcTUuCW%2F%2FVk9c%2Fi4Hz9LU7MDpfMoFxLRyI2ToO8OQL3D2CP1AVAiAcMtzlmzGbYpcl%2F%2F1ud54z1T7R7hC2JMkMkZ8L0va5M48K2HXKpOQIHZb%2BsLqaLOYGOmMu0yjGzN8xUB4DgEpPtqo6hWv5ObWBXHlmyc76hEBRqK%2Fvk9Ce%2BmsNIUQIc3Gwhl3Ix%2Fa%2FOLdc5Y0e6O6TQ9khicK0Rs0sWfUjnh9zzMNeKSLvtnkCSx7wIRmFkztQHdritncbAXrPnhNRG8i2pcn3bzFWyrirE2zTUN5Lm2sEs0u%2BLXlKYTZ9w4D9tDKA%2BC36vJ96Qh1ohgoyAxCj7pj3Ynp5ZDRNcmwvTx79jEjGm%2B%2Ba1MK7s1sQGOqUB%2BjktGK4ltTOFsOV%2BYq0qo6rG2HhRtxuvjMq8iJawJ5mmkiDInS7I%2BL7KL5K%2Fn1zj9Tqs%2BcDhzyuCjB%2FyeTsjr2L%2B20SrXUeJTc3ooqJWPJh1HMVPUvpHnSrbPmHAVzxanaL1NUa6CI7V%2FQofrku2jOggiaxBZu30rgx4t8c6hASpMtsIJbE%2FxO9T4vgQn40t1JrDMfzhbiQ%2Fi2MUvaY39mpIAY57&X-Amz-Signature=3a5e11149d8f8fe31c2b769dd0a6559dcac68ea838f6bb1d8780c0aba49f4d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
