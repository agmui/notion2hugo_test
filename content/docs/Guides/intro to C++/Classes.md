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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAVXBR6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDdnGzMj9a7JRbHtZqbhPHUgv8WKekaYljktmcP%2FUuMlQIhAIINf4a%2F6jCbYm0b4BbeWKrE1EDZP%2FWh59Fl%2Bq0%2F%2BhgiKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7v64vKUgFe7FouN4q3AMuV4VVy2wS%2ByzebHrbQa5DklowebVpK8J5ROZlP1k%2FVXJRRrHf7pARcmaOutlTiwhpmmdEX0gc1cVtwTLSziJUQZjRi54ayue36C89%2BsMJorUpq8Oc8uwL1SwBmJpESsj4UeMqgtCdwRcU%2FGUxVc2cXIOQSUGIGidbEIXNCl%2B2xWQPX%2Bg64MVgNBgtjlo6qt7Xk9vKbHeEO66Zv%2BVUPa98SOK%2B%2Bs6FOvtgVCGmV%2BMa2kimWz2KzPQHasmEuD1B89ftXsHftS7WZ6skuPH2IpZ8jjH81N%2BvukXnUNIyWux6nFGXvgQAsEBlCuqPdDhuErNPEKQI4AiqEXZbCboW%2BDN3dorA5xSrxrIiWPZ5XZqE1EYul6IzIGCxlgHJvIsQvddohGNpB8qS5PHvX0KJB%2BlCVRk943E0VrxjHwq1OG8ygomTirMaIJXutp7estHnX8xIVG8%2FO8PZdsPYLcfekgrRq4R5k1srxubbXFw2gt30YP1YMtQdNEluI4qxmFXatP2%2BXMAKdUAyXCPV%2F74ZZWF%2FL3HX%2B%2BJqiedgs8uo%2BQMRIirOTRHlbqv9BciiA16qHM5Kwr5N6xWAVX7f5rDxznKeFQB6cKWMHgDQsrw%2B1TnknkwuLuyXZr3JFSIXgTDTuK3CBjqkAdLSVSQDZqHwF883egjT9MVS8OYzwz7PwG%2BWCb0ras0Ka3LFV8fpLn2Wlrus%2BBwplI6F8w5C1B96ZSCbMb%2BfK6EeCC%2FHv3oHHv7bFjh2Vh%2BoHWozrvFCHZaUQZb9WskHLIESl%2Bq7iUiPU3U4B2BS%2Bighs0CGn8j%2Bp2BcG8w7eIeZgv2dFAPgWAG5J9y%2FNn2oXXv2%2B8eq9xKIZ9sFrWzq2S92roJv&X-Amz-Signature=941f1fadee9afb617283eb52a20e6cceaede932a00e4970ebd6f1a156df44ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
