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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARGN2S7%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTEjMiym7hiSthVXh5y8wq0sTmYjO76JGgNHS%2Bx3MpswIhAODduKD37xjsub%2F5GIToELyO7anov8eXpCPGn9aQZ4vZKv8DCHAQABoMNjM3NDIzMTgzODA1Igx%2BV0Hy7BBUPwbHdS8q3ANBBw6Y%2Fxxr2HpTonK8mejpxvj8nHH334c%2F2OyQw1Iy8TWeKiD%2B5ulpbpOgSntIIUnBYXTuGPy%2F5wm6vWjSmI2dGSdLiYNHdYswcwen1r2RHq13zMRRGBrZ2UNg5wf9%2F8YOA5DepXjyGFKhfxkYJ9V%2FWzy5Sg94gu4ePeCBYBIkAFOdJQ3e0N7Jt1aTWn2sqecQLspVwRXVkUdPvIjTknkYddQUtaVm%2Fqq9hUGgV8CO2zbz4Dr78rTv%2BsH%2Bd42r%2BXPrtcNT9cVd4QKQyhq8XVPbavOECGtP%2Btq4Otzz5vSbteA6Nz2EcCoVS%2BowDSCXlAd4ATR25sIqzJP77eLuUcRf69p9gD%2FH8I0mrdBrVvBpifWbh9XJHJD2D3qydlv7c%2BEKh%2FsZdumYyEEQSninI3osGzKiERip0xZbzIOSOz85%2BTXFJBKJs7AosqUEExqZ%2BTf%2FF%2FixWLSXJJWzeuY411KyrMHoL077YYkhFhdGB%2F%2Fu2cATiSjydOWnar3QRMM8jWfqFPbYjiCLmsj9%2BWzISPTmsXq3kaND2qt32xA3Xk2y5hmimltO0HDADmsDeFXHiGu0ExH09mscV%2BuhlxgR7C4e1M05YX71vIDVYE0hI5mS%2FP5OU%2B0qAMOT6govMDC8t4%2FCBjqkAasfgLaEo2QXLNlRRnZn5t0TPQ%2FXOkoU6Dlyrq0zh3o8peNFWi4ToPaN1QRwhMMlArfo%2B2Wapfk0y3u2RUJRdvaa65DnJm5QPbGfNi93PITZVMO4KahLEZQWeOVRti4Iv0oFQcMFP9hVZ%2F0KUw8GX%2FBUVVqs2qeaiFQXTbQ4bf9CMPeLne9nnQECIVSUfhAQ59W%2BIYimSamTTinj5u11soy1JqhQ&X-Amz-Signature=9de393d376890f286cab200cecd185c96798af11e4fbfaf716b03476a415b9d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
