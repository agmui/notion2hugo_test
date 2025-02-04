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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTJB3ADX%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIC7iYxnz7G8daASyywyMGDvzFjVNEZEm%2B2G9yqLkuDggAiEA1sPYH4pvA1Zwo0cHeIPKw3aTuh2p%2Fp75847x%2BvxCQRsq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDCIOMPwC7sh2oqgnHSrcA0P9Gfc6cXZhMcldMabOcDwlL%2B3ibZt8dR3yuQhWLJWD0xL4ytMNqTKpYnzFA10NuT9yaRQyabkzGhDsvSAunefNV5Vm2%2B8VGhBhZefVPODyAS%2Fukk%2BmHUfM4CHdBOYyUOtgut4dr9UC2vQUs0rqoekLO8i71UaXubxwYA0bQtytbAD0xPdIC21MfripTye5wkRDWJfXx5iOg52RqqJVmV85d%2FCWuOiACggVI%2BH05ktrzIAOA3IFNUYgz5j3RtZRkMMw5E1aa03974XZb05JuU1SlAvMUYcC%2BwzE0E0zQg%2Bha344DPt6TJ0Y8xf0p0%2FYlEXOesSn5p4eZ7ISrbPnAknT3fztInxqWyfPDJkmsAXKFEe8oXRRgc1ugi4q8Q9sd5gGWS%2BOCsmAgwcEoB3vjA42HF2gBpK0r2a9ONpyPKB4mN8I86ZsQgjDGBESC8DGgyX7U5STBgy%2FKAdxnDuk2lybX%2BClOvWpdRnIyzqHwsZjWLG6SJ2c%2BGUVTM%2BgX94XvFR0ddDERHfi5TW%2BwTvhINCMSP044wJ6IlxBArnyC3Wm1DPEBxgzPRlHFKtkurOfzmmWQCtO0P8OBB2JDp2cjKW%2BRBPg%2FvZ9Vjl6Scfc7dSgLmZJMsV301vkKPb6MKjAhr0GOqUB12%2Fyt3Fl%2FCwRGSWUl9QSAhWd141zg5AZHLaUeQipv41GpHAFMEubSf94PqTSjaH0K6zavxJqDBHCb%2BX%2FvK0Xm36mWN5v5Em3yTbs9UoSMXgjCGeWFUDJy0e1j8Ce%2F3fSmOAzsF%2B4%2BNu%2FSIkuW%2B0KbzW%2BCcLdokQAyMfM9OSyap29MmO1p3Z32PxJM3odz86Gq6YSuQTvY44TYJw1h2KQCBm2JD7p&X-Amz-Signature=f255ac3ca17630ca23dd99fe9a9c95ce43aef381f4024fcaa67e9ff1113873db&X-Amz-SignedHeaders=host&x-id=GetObject)

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
