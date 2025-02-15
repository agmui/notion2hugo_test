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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE42SGP6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEdSoMhM5x56woAbpwegG2tCKLVh9TdWMmkk6a412rhBAiBybSAt2KwaJgJVuuD6h0qD1En%2BQtDaqdzo4HpaTXa4Nyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMav5%2Fw2iIp7pK7508KtwDDKCR5adNw6wocIEXQqK%2FRv9TTw82j%2B4NcamE1tU374yyq0cIBJusZ7wkEmXVVSXCjBm5%2FTQHlVVyudV4qfswOywHs%2BYTx796NM8odiNjHLrazHu7zhG91DAvJYs7Rnb1%2FWY3%2Fta%2F%2BKZpWjP9DtwyVXmaZJeWrFSIUqr%2BNvfgrcNGXJutn9yzenxZLOL1dCUPlUGvEfma%2BttRYhHX%2BMUTfLmAu1RVoAFqtjjnsqFwvzvmp1p2XSyeC8rCm44LsaPd1Cs%2BxM9VRVboWxQGjNx7q0Odm3nOot4MBKJ4tWptNYQFwfl5mURDdNBetiuluVud6wri1kIS3rXHCALP8E0vKCaORnrqjxU16Q%2BCbmaj4efJAR4ualAY5aHib9LQzkRw8UTLdIfumO6qHja4Qu7u4KUmV5Bkyk89AijB%2BP33HRMj6OYULRnKIr9oI2jeYOGW%2BIQW7D2lWqX4iAYTdIUdot5q37s4%2B9ghUYz0b0aggGSizQb2zdUi4O0Nb0MJpCWcnKkXbFrO9z%2FFlUggk6PMfl1biIHo1p5SRSGsrO0IGSs49DP74j8Q0HeBnBaKZwfS5xrIqmO%2BMTFdWN6r9%2BnCBE%2F7u5oeYfcXtE9%2FQ2fciRr3nAbAALtevMH1itcwwuzBvQY6pgGVsG9ifjyMSrAe9fjV%2BSixzTsZytEp4KSCNeGkpVQmrLeVrf1yqsUJXESG3N7a6P62ReOoynLYmkF2OSMm71cA2eva1JO2QTeHkVnYQ9a2oJ7wGcB4BBeNT446xbc1J16PogV4js40L%2F4aXZZEd2teHEF11dW%2BFXAk6gfu0BZWPOnBU1KNqeZ1DrnXEGe3DJlzLr%2BxOzWsdM3fWuywiax4Vt9avCrH&X-Amz-Signature=53b8007a502718ac8c727b485fcf07a625ee79ed3c6e2750ce0aaf51ea0b660b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
