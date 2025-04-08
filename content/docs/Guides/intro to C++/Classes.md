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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZN2BNPV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdvOFiRNBPc4zYZ7sF2IzTjn3%2F1xr0rj7PjceQ%2BDI%2BMAiAubNrqz3tZtm5kYtzxRA5br%2Ba2RPeX9Ou8s1%2FDwVy%2BLCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMHHTPiCXrQJeJOg8XKtwDEWvakI%2B%2BHwh3Iud%2Fw04kHm8oVazKeuJzRK96o0MkOFMKJcxZgZYKjIU3wpFmNt0lpCcQrC%2Fv4XbzhzR3TWZrJvf0bUIXKVKDovJ0W3D1yQTK6U1Qk%2Fpeko9EIM837XRWgEoWiytn5r%2B1zMs2Hr5XN6WtTc35jh7nUlVJxukC368xcA84%2BxxdZbwZTwPK4LhDmh5rUeXavU9CDhkcFZS5JFsTL9hgxqkrn8oxQogRFsMwAC1oYzELSbTir3IfypFEDst65FjO4ljt1bX2IVYoct4kcq7%2BC99DxWjg8O5eMQ4%2BlaocIMDwVZU3EgOiWaynzoe%2F5gksi7%2FDCo2pGlVvydxYhLLwkUj%2FJwMK63DyxGQSmoFND%2BXKD1eSR%2Bhbinb%2B11qNV6MNZcqCgNMieOYODycmrUS2mZqo%2Bbq71B%2Fov1jAAbqUTOzMFAL42rIasGznsmZqgbv5FVGdBFObE8KaN3ydKUX5OgQ56OAqykCvzghhEHFgXXYjRCMp27NcPMVbgM2C7SFABwTTXQfnTdQ5i88%2Bv9IBgvlRuJM8DthOshef4272i0IelxX2RPq2N%2FxKeDScqqx%2BGBKHB5DO%2B2hk%2F6Ybt5HXbv%2BPaTgGcaqdKOa%2Bbg1NCabii7BJIwMw%2F7zTvwY6pgES6Zu3xdBfvIC0X%2BSjyDOcLvKRO6klYlnBfQ0SDLbTjxxag8TBO29GHH6AVyLPPDKs9Vs2FvjFDl0R3A50fL46AyXbk35VuOvARlt4etfumo62ANMdxgx7sRP%2BtfydHPEKQ00FWCCSN4sWRPdiB4cVGFwI%2FA66tPWUMedTsv66t7FTv5pSuQ3hdaenC9IPAlZIaSfC87dBXIvPU9kwEhzyAbC5QvPs&X-Amz-Signature=9353954560e4b4ecedd68ef973f25fc5beeeb5b0cd688eb5553027feade590a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
