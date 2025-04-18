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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6FNAOL%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7POHgprv5xOl66Img0HvJoplA2SzyX8CN7ZJU2YZFzAiAXCifFTC8pYnkQErJulJgmKI5xrdViXwJ7EQ92wvxTdCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMW%2B5qkOWHcF5RlXGhKtwDD9xskM%2FMvOolL8fPrr14Q9klQ3PJTUzEM21Hy1ovC6c4jON7Afr32tSh%2BTD8lgxm0v9UgfveDiWwLVLE3Cr1cgSrz5dMboY7JL66guvUIL1U2WV097aQ2g6u4PuieusHVkicaN%2B4I9uLvk6l3gYEuShyoF5JLbYvmZ961VO9n4cNKd6By6yHR4ESlOJ8P1Zy8zEuMeJDF5sgHyaXE%2B7oZn2P2YGJLFD9dn7wnypgIn%2BIh9%2FtQlrsVmJ9QhyyjmsBg6PmYtcibWzjLGvACvF7kHd%2FKkl08w1G0WGFLBCwAVaVrVYmVWUyzOvowEpL92f4u%2F4wG16JgBhZZZ%2BwSTx32oc%2F1X%2FTeqaeQQLaCAvtMfN3p9QzuVC%2Fh%2BLd0iQ%2BHnSgs1xYCs2SF6xhLKVy3Ag1dKquofR5tDNMPpwN3UP5avMGKzVeAviAXOeYYoc8rqwHI4NkGhfdXBtQrtD%2BW1BU4NZFoJFBoCcTYSR4jJdNnIFh%2BExu9wmIXXP0xezP4d3tVq%2Fww9zZQabbUhQ96V8qf0eh4rVIXbeJ11BHTxMXeWD5r%2B6I77zqS52JeDaRv8BxrrUqvrSmwf3sdrxIzfY0powzAotQriBUlt6SZ3NekQLvswL8w43Gb9buHjIwj%2FyHwAY6pgGkK2CohwQM8hQzZAgtGmZ5SlGUkbVGiypIZoxjMWrHuOiMkExQoUr7G8P3pGlXH2dSMEPteYOsivhSWZfDURGPb1%2B6sFt5Ask3vsAZ5K4mEsVDEtBxC4WyEf%2F%2BMbdG07zpaYFASipQLAcnXwQDSzvIngITHR9ypCKgmklaA3ySNjziNRa4NPoE5hE2Xf5VCW1NxbLPORY0wbzYaNn%2FRrFOCbp2ckYL&X-Amz-Signature=3b2ab1b5b5e1caea4c2b3223c85911600ec0a49d2fdf135c8a94c2ed304905df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
