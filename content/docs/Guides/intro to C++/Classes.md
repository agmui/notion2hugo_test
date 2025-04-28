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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFYIA5T%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTHSTO3nl7fB6tr3DJFmCa8JFnhJkb0ejDA9xGxzAzEQIgBP5FWdZz5a5RxS8%2BG0kp34tgmaxUNh5slBZytx3ik1Eq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDElfWBBGFkoa2rgMnircA%2BevYTQewNTePXFPAUqKgyhjdrR3sRhr2aWN7CWHXbJqCHWvyk4APufE5IO12s9KHrEuAyyFJ09JUtlUCK0PsiO36l1ZFlgdqidwh0bpLlAYT0DNx2gTDwhMZ5s%2BKQ9BTYHlqXG1wzxSE9f0l%2BIS6yvPGJZbF5hHJxmXO%2Fta3lJkpDtehp2xzr0zCdcFscaFTLrmF8kTpiEl4I6PEfyu7FObD4e04pHb4jvuYts%2FXWdQW3mvlo%2BIWVC%2FSLInblPa1Tw9pCZmJhyL7afrw9RdjzXrvmbJYpoKdVyqss2jleD50rpqWS91fOWxDcJO9vn48uks%2FfMrtxOME5v9nPVi8iOPEATWM%2Bt1PtPtvy8eQUuwh7r04KXw4VvUtZB2%2FJt2TklbYRby3GhVFw3UBRyUGRg01RYswliUrbDCi4NOzpavocguRt%2BfU4IV22iXR4rbK1FMR5z9njZd31ZnFVzW5IF18TwE%2F%2BpLMcDpW4Sa0MES6oYeBzaHRK1CKD8OI1rv9St1hqCMX3c6CUeK3ICZIEWYyx35Qin%2F19a7Km7hShYgVMIJqsmhczFiAjJ3iKR0E1vaiYYqpnMJcsLIvdx0NHNcwML5qwk9z6Jj1HU9mxXFmgNdcPIAHGZGWkEAMN2qvcAGOqUBQqbkmu5NVsdg8Ut1JNiiwuTMUrLcH1LI9lTLDMJ9tQBz2HGXFqRLXH2sW1ogIvev5yif4R2PJEBPfHhgJlLWjbe1%2F6fG41e9GaOCvxP%2FBcS0VRpF1Ums8fYR2xSOnjUR4xV%2FPcYI2RSpcuG2k8SXVXPXO01B2LPeyrPOe8UkKZSdd675%2F6TqJtvW8YndV2AW5xrsnI6VAh1MFbr0ed9a%2BBdgdz8R&X-Amz-Signature=b4f59668eb77816c7f230d7dd3476209d4d113a3239700c07a3f4961b89825c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
