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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62LWSGH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDD%2B%2BpIyLQ50SmMfL5ucrJoMEv2LL0QOSWAQy1mAQnBcQIhANBXCRLQ7iJQwCyOa%2FzNlVABF2bqse%2FGgUOUeg%2BqGnDZKv8DCF0QABoMNjM3NDIzMTgzODA1IgxXzERHnJ7VPK8K2QEq3AOXxgwb9hZardjTOThWvO9ZeNcc37xxJZB9vzK3oxfhqW4ZMwklI%2BmfEyJU0KzSyhsr87C92alJQ%2BpPKJb%2Bxvy4RpkhrVDWi4F4TnEPlbq2XoUmtpM0wuVb2E5mG9EpE88rt%2BhVD3bBcXoy6%2BQjw2NLh59l6ZQZQmRbHZakcr%2BsdGNaSeOKMPeYNdF%2BNvrgEwFPVT87hbCuNizi2nONCeeQItYVLaAbto%2BX%2Bi3RDh7inAVn86SvFsSC84ED%2BNtrgKNGHo8B7st9PFbNF8PlXuEwt%2BGLnH6cR0x78rChQeFtIYWNSwWZ02TiECDk2H%2Fxs872NNIiafQ90DS2WWyDAwhaqTWhWTYLyqQstrfgKVZ3vA%2FzBCSVa6nhaGHoYYK%2Fnm9XHNtbAVPT%2BUDue1rR9VlmihnY2PkHgynml4Vv1PVFRFHzgALbsv8OFTRZpvuN8xiaQbV6CGUnFUzq%2Bkg3IddrI7WWpuZn2O42U9IZDL5UrBxAYD00u7USPXkkGldyRhz3wOFT%2FOka%2FAQOYS6HDkMgdPI1K9HTWpAWwovGNFftsS%2FT%2BMKSshp2blqEbLZxZFtfTFtWmabB0Au7oLsjWRzLkia1E6wZEmnEOFADnMKkEzZ153yoDY%2BToccizzDrt%2FzEBjqkAdB35YsFBECsNm5ePdoSU4dMtgI1iofpFA7C1sAetYSamk%2F1%2FetTKIsnPM9cgYqdIoBY60ulo0MuFc%2FDtEmy69FSJepMVe8AcykO8PVprDLX2%2FQyyTovpK%2BvCUIqThjYK2thYaDvLNSneyxpYA2T8Mwp3FDWLuC2i8SCtnLkDI%2BSkFBycpDfngJngWiT3HMad385%2Fm7wPTTGkWKKSpL37xLO2n09&X-Amz-Signature=9e53771411a12f9b125f08a193bdfa9f4d43687b9b4c76616fb6e821efd79fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
