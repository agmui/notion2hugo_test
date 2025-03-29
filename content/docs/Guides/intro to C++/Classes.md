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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXFCTHHR%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDpAHPuEu5ot0PXmFMmx8fLtZ1DwOGmKb7MPkjH%2FWXLdAIgevlvHq5f5m8piSRNFDTBz4M1490z0I%2FwuBGEvDXUGScq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFQWAB%2Bx29NTIBj%2FuSrcA0aBEbEP4bqOv%2B4VdU6P3hr5uOKzEdTiPwQBJk%2BhA9bGJO8ihL%2FkruGwvMu9dvvraBMgIsJBTNoM%2Fv7QUTD5VbOgJF%2FwvE8Fg6tDxb4XbwkBcPEHljvOk3rtHHAsQsbSFVJxsnd75pQshaexmarGylJNgsr%2F4QE2j8muqUD%2F40kx3G5qo8HRAdpSHoJC3a6Nzgsf4BjaUjejmsegxTKHdbBBLflQvYzO7PaGpJXaazVjXCTvVg74xfBQg9AfBvJP18MiB6CCW0Y0Fx8D0pf17cLFsQdPlWrOtlJl6vQh27MLJiZX6TnvwC0zOvkf4fOztJHbadnPVKZz2hvWvP0pEevoMHy%2Fye9WvRv5j3TZFrlGHXh8yPsdJrZqPGyrdHP7GVYC453YVByeScadGmwg2uOTjPsCxUdVHAnMGqCW0iaUhB%2BciAh%2BoJmTyCpFUax1PzWudOzPUFX1ANTcmKLhlsQIXYSPaiMQcM0ctStF6Bx2hK5LpYSSVU7PMFwuHQDu7gWUBylxV2fbTSTgyIvBWNvH%2FPMWU5aOL3ZF8ZQ%2BVcOQ9eZ2xFNw6bB7sSkp%2BdXJVrSSGijqoQXg4XBpprGV3OuJUtkiy4vJCtMl%2BOveJomHIrDdRtpL2XgUNnvAMJrFnr8GOqUBHpx6%2FV1TdGy8TvJzqwDkWDhnzhQ0iDS9G36r%2BDF5B%2BOEL2r7QLPJH%2BsuHZOqWV3VMT0VdIqKeS0TWVlRfpiL6RgYGSwYiwc7gUp%2FE51A07UFgbbWJESZxR1z7rWotR92C52tbolmUBqdKtD008Y8xIo8gLmiMqGAiW5BHvFVxASgJZhixHxbvdo4V0745mgCuOf1nJF6%2F1eHgKhDYXIGgSEJY1%2Ff&X-Amz-Signature=5321e9e51bb70f4ff45bb87bb3036461909633657a033cce8421227432aac2a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
