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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWUSYMC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCARXLCFPGVYW%2BnA1ysQekLRcb1%2F49dgGSPO21w%2BZBREwIgc1uNq16Kj7l8rd4NAsTOmRbhAl9slHAZMU9QH9LOGOMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIpse8u9f4UZY1N5NircA25xM7rBUoHU0JHqyd91FENhfSYjyJVn%2BwsXJZQdvklkDqCERAaZlKg8ep9mXG5H2gRwsHh59P2Kn1UGIBr4OMRJx%2FfIgEiHzw34pE89c%2F6bNjAzXb6lzH0umbEkKpFy60Qg6Li3SSNfoS%2B8%2FZ96%2FecgIUZ3G3KhLobnpBYY7EV38cyyQXLdoFbk7r29TYMIDJ2VKyslNGa4MdDC0B0SywZPIKRhv90cKZI1cYQgrlbQntSEsdlZLKCNbFGbjfFaCCaRiQepfrDCioP00AhpN6iVYFWm%2FHOldq68SKGTEKWVB1O2cnj8ObYvHKvboakm4E8gkud5PIvmwwNDLGFbOfpUnSQIFVLpMoHD6Kuk%2B9mzx%2FRVwkhMrHXdR4%2BgBK9QWAqoEnY%2BwkFxs1MUh4Z79GeuT2E0Ym63ozpSSxpLpQJAWeXSL4s%2Fani2NpvBMvu%2FPnpq1d8DRJX1fiyunMjJh3QnIf2ep2xySd67rG45K2eA76VN%2Byn2mQjqq9CYdWwBWHfmg003pBXOSVm785MytT8ZO4LDUW84YFfyIaScokvlDzRCqpoiqfnDGPn8hd3i7i6zpzadgZNNLXVTia3vx9jnCp2ePJaxClpXSSwCeGsIYKZcJCvuZgCxv8j9MIKR1cEGOqUBglp0CMLT9Cj6n3g%2BY%2F1mcUNIsFvkcaXsty7iAJTFzGSKF1zO0PUPu5nZY%2FTEjW6DzoExqm0ji%2F01eoDNSsP6aMxkBLw%2FBCM9hZVM60Ac2PUK2QNpzIG43WaedcM8TQcWgQojLHjQ%2BD3RYS6B95b7xNExBlW7Ew3n6RC1sxm5cvOkBOVOvzlovC32QH47RIGo6OIutmAF5SbHPuQpxiWVCojRKlOK&X-Amz-Signature=fd8477491f8dec2bb0dc9cb876d30d88fa41333a09a0b6b1f4dddc5b3c02c9a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
