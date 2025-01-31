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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3DZNYZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRqVMjG%2Fai%2FDFyLiul3VrEUuVACVVXV6g7088ZYokqJAiEA5A6AK1plpF%2B7QmJqzq1nncK9TzyCWfByAKi6Ve90kPoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTSpxcmjmDWxYl5PSrcA3kHvpVkY4eKEMrGJ2GUSBM6gYmhbeJ%2By31jYvXlNIYyS2%2F7lxEpFuoj7hMd47qbDMXj4dsoLmZXAKvs2yas8E095kkHSr7p511enjSamNEkcHQ%2Fq64zEMSVw0dvPrk%2BTtB5FdBTHvsGFVDwwkD0%2B%2FxYXZawAVhqPomtR9VR5Tg8OZBu%2F6V8YMM82CSfSRQkwcZRSCdJtPtMKifrj54NfaZh5mqWg0pqhAgOkhqEL%2FOlx733kxyK%2FmV%2F3PHla0%2BD4byYK6rwqxJb7qVcvhOgLpXPXq1HGBvQg1PCkV3nRm%2BeX5PF9sBI9PJUOy4RJrBR5dbyOqW7OI5O9frM1N2mFuqL%2BVaDOeCKcNC0GjdA%2BFOtS15X4E%2Bp69uQRbjD1WMkvu%2FuRgCaeVbB5qL6HXEuuNdzgKBgBjxOX%2FF%2F9h0JXgGd2MGwVcne2VjGqP4BsHAk%2FfJUxfESF9c2LbMViP%2BwN0kLRV6FrPGoZ86Gf8i8J9axKRSkLnb429aveQ3Ay4uTMAYBzvQFMknuAYPi%2BiMWJ1%2FFTUM01I4MEKSwKiZMMuywQqs761paXi%2Bb2ztXBekBMWTGPPffJU8ckcZNVXC8faVSraRjwkDAa1p2D3avFl4MAFfbp8shQUOjVA0XMM6c8rwGOqUBMmI7qZnfA51s3SjcXsj3kUjbb8onvlJPjbVNfDhHCRqHRED7c3dRcPF%2FXqsw9JTj2VjKJh793D1fPtlMb99IjENcovZCeogmZaKnNoSx98E7HYkRohj65n91xD8r7dzvIfBNEB7idx%2F6EAbKTGJ01SdmF2FYEAJ6vxT9MwZvdJHwFHGuwT6p4GQkxqE3f7Nssd42sRebxdjwenXr3WH980041JaQ&X-Amz-Signature=75e9de13085b5d6da3b6eb34246994254909af3ed297dd228d579718e77d90d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
