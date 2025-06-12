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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74MGTV4%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCrb7wRB1zjl%2BJ23LWCiLmEFGi8CLGLo7ZeKUnkZfO2jgIhANvS%2FC9g3svJw0OtAiySe%2FxfPGDxcc%2Bts9f22It1BfEnKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmL7tUhD1%2B5MWQWgIq3AM%2BLbWW7QqR1SA9wnjMSRH3IrNjZo6l7JuJBq0wnuKXY7BuMX1IhkA1yKVbTmFfe9IW7LUomwthrRt1cezfrFTZfQ2DSgWp0kxIMD4A0N4C%2FZn9WGc6eHCCH333%2BRmjNB8lT5HQ77SNRicdMOZgYyGF2oUH7TFsPX5AmFzjisfSSI3%2F7x8aIdv44FgXHUeqVbG6iHwhaAr5O4YjIfUp6h1S2YGQxJyBsTq8W90DHHTAjVNTmA62n2IiJNILoLP%2Bs22EuOxJ1%2Bft8A6Q90dynz%2BBcQrqgYTTpwGBYUu0HsNi6O%2FpeVRl%2BEx2MqTstgsSX%2FY4npnZJ6SkLOGi%2Fw7JpIKF5sxIo2214BusFAvc0QkHDL4aYKoM1lFUrGs8CNJqXGT2BTCZjHvQ95dtFwhNDPIFGX7vRIDjUXd5zh3EyuWWhttwnxRvhIF%2BtqrP5mjUDt2x%2BnTEsAVgpUP6It%2B8M0orq2kmT6ayQkiYZGshwn%2FJInOpJ33OaLzioGJUWv0ma6nfKW5nG5S5NDlZpEZ8%2Fsiiy7Iwbqb11O2nfJwvGV6htHotFNpEryVU%2FvsWK8M0FtVc6aRiHBCgEphvyASyNJVS3Lsz1zO5OkzdAyl2LVs8vruj1E%2BNtu4S0GDfbzCElKnCBjqkAVu9ipLnmLhXf%2FxD0C%2FP8wEq2DF%2F0kEw7fVYzS37QC%2BR%2FVPMtjGVBuoLKL%2BPcJQbKdjMhPcLs8SCrLnjObgYl2IsM4usWkw9NciWpOXehLQ%2Bcaq0qJ%2FIqWRCT8en%2Bq0JlvhHCmDPh1lq2PhrfKzQy%2BtgTu4EvS1D4hx748704HIOEFeY7KXN0pdfzlnQrqFVIn%2F2kpr8FA5u7tInx%2BPybbZHVaSm&X-Amz-Signature=608a4df5f152a37bef955250f7842c78321413c3db23576c2398a74fad1ec0f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
