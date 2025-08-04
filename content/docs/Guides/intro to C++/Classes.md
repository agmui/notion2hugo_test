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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5NVPSY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICie3fnxLNqnLGjo6UwtSEMNF1%2BqPGJPSFmskQk7dKftAiAaf6BnDAGzzNDq7J%2FsFBpqilnPPkWBaSsM%2FhmoSLoGgyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMBiJBEfvjGrdKIuMIKtwDA2uyyO7jWs6iaXT%2Bkgnqh5ExWg0hv44zHe2Abzrk4XrEpNjIZPWB8Y%2BH%2FkmG2tFK6x57gb4X2TJkBd4VPN3C75BfH01J8BQF71%2FzozGVQFscM1Z4FCgo9GwXT0wgkOimiqUVTleTs50nwLYYxNTfx6NHfLntvEnmCnHhfknUC6ZBWnEL%2BDPRDCjWS6QfWId0PhIhnQovWllves3MKunYjuSrRuUvaQki35boogyYDljnTKX%2BHf7GrqTwNfMcxOgQ%2BKkfsj0YjByQA39NZe%2FJlImnLU6KY6Xu%2Bgnub4ZPP23mttcRTwRkMObF5gWLX7rAq6snRl%2BDjKQvX5fzi0MsuncF21K7RuoV112BmbdeUUNQL%2BgFeYuznsJHYtbgcivBAZp9v7PymnGVRGrOABi%2FBrEb2rFFz%2BKSilkVJGbrW3HOBZnsq%2B40zFkcOoCom7snwgwXBJqN6pHVRPwE24kwMEJ%2FguSVr1Gj9d%2By%2B1CebS7asRwU69%2BC7kTw6M1xtIjBEenMELCEd6IrK1GF2qwe%2F9rjjt9Uv2O6xvKRAymK78LQ%2B8Mipz62FjPpoGlfRCsbr4li2mtFUbsZ1ePJhRacBtnOP6kRozDPmYP7%2BnhLUvJzxzQcdhalKDVqkMIwqKfCxAY6pgGkXtFIzJ0QTKRmbwa%2BvZ83guE6f8jB5N%2FSGZcuYqa5HQR4FBmCSny5ySPOiObjtDTcRa%2BLZI9WGH1s6WSoc3wZt7IwqBBQ%2BCs09K75ckm6EHD3gnwMTmnvCmum9imDuX2%2BjotKBQx%2FV%2FHmcBLAZHwgbQA1O1Ncclj1aW6qZU5AzGbo4PXCBEpuTDWgk%2BCcKQ6%2FCIRh7AMm%2FYikm%2FrZMeCakieneiCl&X-Amz-Signature=a96611d071125d55fb11ae5a456cf0fafa8220c0d5ec235c3e72054088604ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
