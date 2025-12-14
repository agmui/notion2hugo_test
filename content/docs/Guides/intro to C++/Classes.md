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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ER7AVZ%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICNIeIspwssgssVPhvo6CqiHl4AKP%2B%2BU%2F8jCK8WfP7TaAiAmCuC%2FON%2BSzU6jWW7EvuliaPgMBNmQH9c00OYDgT7IGCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMMQw%2BCdqUpGmWzk1bKtwD4xFXWR%2BdsrD7dAjnyVLH6Gbp8aljXVi%2BEwtpH99Ri84hcofyupnrITsCK4w5fs8trNmHvSfnfYh8HRG4%2FtnJOYPawTRJZIWGGrf%2BzCFNmZGQ%2BaF9WsJof2FdrXNL%2BdL8AMNtIb%2FwZZ4cFVYXqLx3SHYmDNDlzW4dBB2kYWzzvzcLIxlhvuxStahro7jx5UT7n5Ki0GIrF%2BvR7jDUulAVJu9hvNHLemreGsQuPGVquouao9LH3YPL6w7rjOBbc37A40p6VUfygYpFEDO2PY6i00%2FPXGOcAkn2xqr1fpTGphDupT1sXD5Qb9lCYjDXaVzbxlXKnPH%2BvfrH98rFYbxKbkTLYZeftotUweaijoBU6jE9FdMw5J7VEbY17G5ZgeWe3f9vOxhADgYt3Klq6nSqEJT%2BT97tbZaQCZ4c7vOnuU1dX5ZIUzowhDIEA%2B1D8sc8SM0Lb2oBGdcUY%2FARd0xLpRC0YHSRV74Mi9Fy47fBeV8our%2FMM35n48HGTbA7twjZyC5P5HOytVNHUi%2BGb9cwwiBWpghfS3HPYEStDG7de3O8ux25uGhm%2Bl4qTSplJEzLqtzZQ%2FAWlokoAK5k4Inw6KF8b%2F5xt3QFt8YwoRfYt5Pob%2BSrMW4tLrdvu4Ewgpb4yQY6pgF1oAUScrWLTOoXO8H%2BhcEqCVKuCqYZSAaFTHPh8hIMlMSJ3ux3WtTSN3mLGhv78lu6EWDCuvFNIYk8UhpwSOGI3E9RpPGVVAyZmvxotiexGp%2BSMYavBySzn8MPQ1tFHY3jndKpy15I0DKLJwfPR00wW4qiEcN0RLQ%2BGfl6a5YLw4sXUjb517jybOSbsto9IBsRKOhH%2B02rJPtCzh%2FpZG2P2Wyzb041&X-Amz-Signature=5de72fb9be802a21ee7d45e72863956aa470a7c1e348d3791a63f782267737e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
