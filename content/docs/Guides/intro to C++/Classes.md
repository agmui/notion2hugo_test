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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765ORJOJ%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9H9wU4XLgBhtW3eNjiHcJ1CVmfys1%2BEedpfhefFqxHAiEA9LbWuYBxel5tb%2BinXBWsOcV7fGP%2F74TQhSX87Y2AUg4qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwPhnjtGDAp0I7EYCrcAx4XckNdt9L8WWn2us1Pxb9ykCzfRCYeJng9XONwC0yg5%2F%2Fo%2Fndbz7ikXQvm%2BLdkHykgAOzjhXVd7tN%2FD4WOGPUKvl8FfcoVZgnttstx3SLRpAqnbDc7vp%2BA7AZNbXjbS77wLYYz1NRwYPlZI76TwYM1kGw4qsZ%2FAs8%2F5Q35DLpX%2F0FQ1r1o%2BmSt9wV1eD7E8L9Sh6HKj%2Bw%2F%2Bg2KPfbSN7ejdaVB2YXGPnUxSl8uXVhTNo3mXW3mOe8BRGtByu%2BrQB%2FP9YorEGWKBgUw6rbmYTvMahm8i7Sf1lXAkzoYgikoGR1AdsSdbjA%2BT9lQagbsIGLPGpT1aEnzGF3hhIjvRzgXr5Yn%2BwYomQfHKPIiGlQItl7IHkeT4RLw3OVOG1dYls0rcZbP5Hm3GYflVE%2FZ414%2BZkkQamUPPfiW2RbLk8tuIzRRCS5iz60vicuE427oICmem8%2BtMSBfN21LGCOjOkA0ZQWvH%2FuyBBWoV5bBAxXANPTsd4mdpNkLO5WJL%2F1iIsQxBPgKttoQqBs4zELhHG7%2BXjVryi1Ji5YQ53hdiO6KMGIZyEtzBsOuvW5puZBzll%2Bnr%2FDfJJB0QitMmbqK%2BOkVeydFfCoSpT%2FreQDIELRzNNujOH1FmWSnPcloMIrm7tMGOqUBrH33G5wAr9kliwggF8CfEwvWgC8PwbyiPwKoGe33s60CbiPooo4jNTv8qO2Ej9g8NVgeKnVNpQoLv6DWCYmSL63ASMxFBtT2poM9lit0T13pCyEunzs6khZlBrd%2BI5mTszGaKOVTK6ByerpyY8Yhy3EjnLzoZyL98VjS79Uv8WUl17AkbRWx7%2FCDjziZo%2Bns1HC3NQL1YdCLft2hqkVyLDxxFADk&X-Amz-Signature=febfeb842595afb5db50f6a3cb20a18533f62e55276f4104fa2fd953981372f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
