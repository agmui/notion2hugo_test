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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OR4SGSK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDdBAn31IQb137DvB6tBM5QDIGH896Wu8M2OgnzkUPmVAiBTYTYFtOxdTkesIHpDyTyHUsfaXmYsm9MnHAWZSt8fbiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwroLZfXuS6yz9pflKtwDSi7KUmPtSYgxWALEylzktSGm0wSNWOXmP8SAlQ7dVZkOZUPwtgDft6klz1ilkqyhWdga%2Bq5P1aKqvkVtkXbBe2PxPpAsYBSLXX0GhGzR6gPwtoxPK19UnPgUIJ%2BCbTH70HxCL%2B8k6KK9k4T%2Fd%2FKy5j9q1ggKKN1i2kFkqGLVMaqETATzCsZYGgDJM%2FhMo98%2Fzk%2B7s7RIME6%2BeoyK8f%2FHkupYVJpEy5k2TISaEYl%2B70B%2BtKJECF6IulgjlGHBhZU%2Fn8G%2BzLx75kyNFlvzOPxLEh%2BtDp%2B%2Be74HjduAQI8oLnj1OjSw6wvOpF3Cy3A3azguOAaCq7rf5K0P5BCNoaSo5T%2BQMmMf9AbCnft5GZPh9QmPbEyO4zYr3x9dXY1Ig5LJqNz44TaMv1lwAr%2FceTR6UplPkcf7lESig4rYvLOzQfQrYo2MwNsltXvBN%2Bj3k5gz917K8fUKKG1jTZS09jSoYvz4VeEkCAqu9hNTLi5m5bAezQ5HJlsk6ux8NeLmycixqfvBx3Eh%2FXJn9ai72t5j05%2Bct8b9jPhsxR3ZkGodcCyKlOhCgpiMBrELcFNTs1O6CGe25Qjifo4wEq%2F%2FXZcMRoWy84dWEbNnZyrqGAFs87Dku6S5uFhFLXbc5jUw%2BbCGvgY6pgFh4xXnihQ4AWruiKCQOt6D80h5%2FBBpmYBgQ6Hv5kziA47rX6CFBtSxsb10lduDhBguxq7QMoilJk5MOwBjGrM1vFLefh1FxGUTs%2B8qRJRYWMXhshlleHj8LuCCuTG0jnOEJMJbuHoaHcei0bM%2BlKVjQ8TFCwN%2BpHiuhaZ%2BnyrSC7tDydmmtmLaBh60Ql2dYPgJpHGmAFbswiJ6mMkXfXcvP%2BCHLxk2&X-Amz-Signature=9009674bd8126689f116beeccfaab80c150b2b461eeadfe045742d9bfc488b41&X-Amz-SignedHeaders=host&x-id=GetObject)

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
