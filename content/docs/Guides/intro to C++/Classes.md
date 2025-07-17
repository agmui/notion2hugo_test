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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEANZP6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIAlcljEGNb5lh4N5XER07UlBEfQ7Gb6sxHDiHsdYFdRAAiEAuh5TxKHVLN7xI7f97ewqTO9aJguHzQvTO2g4mYoOVdYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPR0Ls5mrka01jNdkSrcA57YYNO3Y5CPUclQwmqqo5YXiHta%2Bml%2FFi53VvAfugZg%2BOaoZH7zHQUKyaJgfFaWEOMWsi%2BBDVVMTNLN8OrYa8GiTX%2BuHgiO6JUzsvJl%2BtnlA2pbNAXw%2FSc%2Fuez%2Bs3UzbJ%2FyWxTfupMM3J1UCFs9CUBmSFurG35XQDhB%2BbK6g6JhYClAaKVZWOK4D1eqMNODv9lAWgqpRDJTPM9us3gjvL9hbhkk4KQA0lB3dfncCD6YuMtCMuxdwrksPZLbt9sDZKTuU7m5hT3%2F4S7ubCUoh65N8gjZldYLPJZ4ivQBXdDFzGTjaQ7i9pwa8qGuwWMOz7iH44ZWwQVBW%2BbmCUa7uISru7Ru6LvGXfLIsKa%2Bh9OWCLAZoSK9sMKD%2FOAoEhjHfLjJB1YfhgQlP5wSlIyiA9SIBu0OJnCwCTbgjfxQMJ9aLq3yALtykvyZjsVSJtsoA4L%2BAV9PAhaS0VXGZFebSYpf%2FyXNAbSzlKHM0O%2B37lfYtKKIZtHTVNS5AkTDc%2BnQGe259bB5AuSpry0lDMAbEyG%2BW8g4ztuC17at3USok3IWe1VvSgQma%2BzQJpIlrh0v3nKyrN4l9KoUDJIZ8I%2FZUprAywQeCl4h%2Bz4ur9fSVXssd3c8EgcFSJc%2FE9jGMPK%2F4sMGOqUBPYqu1r3ENe9kJJ93%2FY8MVs%2Bmuhoe1QYazA9Pw%2Bk00DXpP9l6d2mIFX2x7DHFw80DiYnKzP9EYIKU37pmXnyHAtz3FOXCgjH1NogDkp25i2u5iGGkjuB2mfdC2ITaww%2FHnTuMpmCjITlZaTj1IDOYUZsWKL8GjD3IJFwseJzOCZ8fI2WAfLSPU8gGMLMp%2F792pQI8mL42bANdr6a%2Bbb9%2FhGAXpX8G&X-Amz-Signature=dc882728c761e1392daf58978bcc40b608b4160fea160ed1f725dd2bb099dca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
