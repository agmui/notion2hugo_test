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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IU25OAL%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD%2Fd%2BsaUHyOwW0S4zQSQN4wbyPOOycMc7iY0KERE59LawIgMeKTHkMvstVK6PpDEDlp0NPK8ZcBw2BaCeZfqcC0I1EqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCb6CSzAdIz7CSCfFSrcAxh4dxVqvyMKtlnMdG9nJ5Wzp89iWWLj3y9sbM95fSbmCfBrJZyYYMAh19ZajkY7L4IMwI4wHIDIf8k16Q4bbXKpn%2BEVU47YAFWKGhsRgE5pzrFnjNU%2FkFhonY9MnX1JnkGyTMUlFlUsWeGjLGybfu9jB%2Bb11DO6zCQQytAZezmd3YVD54ZpilIsRRR2EmmHc%2BhCO1CUZKip2nXVhQzSS3lvMzGrwCJrEZdY3ot15%2Ft9dpdaEbO8%2FWOv599S7n%2ByLBVStVpZTlijuiLcJQA%2FueL9SdWb%2BPEUwfUv4arPF4T8e398hlN5DBW6GSWcjOtGunEXUW4RN1dtGY2onsSI6KBx9oM0fLylP%2FcUlBbIq%2BnOuOqtCbfiMoFKaWaufZvaxNeJHCOERs6foiWDKXzUSXuzmQ8vRVxqw2u63FGXT7hed2vHPQXmPI2vvhS4H4KcCZatUZhZ6tBXxGQTzb%2BIMJYsGYS9GyZPDDNFhUv0Lf1emVgyjky9ZM1KxWowMpCw42GuKG7MV8Dz4dl0CkyZWMoQRJZpexM3yT0oDAYXbfzv%2Bge2oEZy5GeGtHOAoN9FqA3201GnXMUV6vmDUeYD1qd6In%2BiWwNIK8teZQijkv1s40VCJa%2F1EOwuo5ghMISCkcAGOqUBkTfDUsJbGNIQYvDL3nRXcFcErRAC1jiwRPdPyvMoGjrnxDWHQuLi8hMG5YNugAsVNzjcr4ztc%2F6SMT6sn%2BVT2UL8LCVeE%2BMBpyPBSOqrbsAFQakxdlZF%2FsxChm5sGiDx5UAXv4eNfottCDIbCnUattCzvMLEUiHmG6U4zq8%2FGsPxYRIqh9p1BIw6gmEl0ShpHaA8yALcTzOqTIHgel%2B%2Ffl%2Fm76HD&X-Amz-Signature=ddfae878929ef203f07b4b8c4009247d096759441d007a80f85673653aaa17ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
