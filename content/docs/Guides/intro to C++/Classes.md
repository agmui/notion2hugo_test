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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZHLVOY5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjtf9MAlN6sBlHgNMh61CmTVIHngsMYI1Ztf5AO6XOTAiEA2KxlSVpeQ5sZHu2Gjp1pPFqvaFXxty%2Fvh2AHl%2FfeEDQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMOBxVw7s0NlRUtx3CrcA3soMwiOsq5bogo9p50nqBz6IBwcXsSgdSzyI1w5OTewJPVEhBeaI8nAqK4AG0hS5x3brMOSqm4Ps84rX6bYtudLfVm2CeB2MCNk%2FP19Gm2mulP1lSMMnT6EGC0ZR2dfu5fxJXss4T0ZhNxX76oWEWBtN0Evd3nkisKsKRG5TG4T6Ez4j6vROXv8z7AsHLlGn0L%2FUdKWZrfq5ABq6rjMTdaxo3wS%2B5YBLryzb1LTByHhk0TgklzRrdJpNKVafw3%2BPUXXBWVzMH2pYaZOq5lc%2FKsyaMyFsuWfefIZiXpvvLejfjzCMDkzTsgMlnifHw02zFFTGJDl5W9mT7dCpY8D68HhR98%2BDd2lQB1NS%2FQ5zraUFsQGt3LlVrVbq0U224XbSSylQFNzqieI6%2Butjx9xxD8B0SQgCTRPAsWvBrYhlhQDPSympSGyogcsqSgDAApB%2FyxewO5Db5p6Dmz2tDIorofQ4r2R3gL7X7ybz98%2BOFeLklmnFohI%2FjYLH1ds7xOEB5LdD6MXsEmfXgwZuNLhBkPN%2FUkd3uqL5lMEk81%2FXmqB8IAbfBkte2aXadShtRS96zkxLSREKe8sPDcLP7I7LfIAYfQP7c3nGq7HAwyTXR3kiPMsfVq3GdTpHv3iMLXW%2FL8GOqUBPRm2uJx8%2FE9sdVidVvnlmynze5LyrhmJr%2BWrCWeyxFYFA%2Bg%2F46VZkdVIyhYlv3mmKO%2BbueFk8a3nnQwBoD7EM%2Bpkk35C%2B%2FOMmArh%2BAeHIroVYwcjDqBLtspe7LZirQDKJJiRZGMNbLZHxruvBp8gjBmNPI7Q0oXUUkQeXI6Ca94MZY1yjU%2FOUshMqwhF05LtGUiPfuJeHowv83EkGTIJvj%2BZADf3&X-Amz-Signature=287b098a3aa0f078fc83d1e60f04295651068a5d436bb4819d3db4c4752aac5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
