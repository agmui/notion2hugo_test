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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UORHRIM3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYhTFrdZT%2BnoJs3yJjqQV5i9c%2Fb4aTMaqLoUYvzVFacAiEAscRLNBuF%2FvoRKeI5svRAb6BE85UAcqapls24uQUG%2FYcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMSmwyML5domVmLgCrcA2zHfWeippcPszw%2FfPEy84JzuNpiKd3xmHnN0opQd9biwYlXcs8CUfjT1dqi28DWtpyr6aWDSJWMf33GJV%2F5nVf6LJOr2alwHKt8Y7NKxKWfmWUUEFTU1AYUjsTZusuy1lZPArqhSiFe6SWt5lVao0eztWZrEPFuPh4IgfSDfg3iQhcX%2FRtaFof%2FkUGIvbjss93fOh6wOPXx1bpBPjRRei43F7n07tO7d2Q6ykt8uOONgixM7yDSxCrQnOetg4Fgw1%2BI7Wzk5Nd%2FMdgfUPViDmAcuFl2NhZH27HK8hPTJz7BCZzppvLcm8kt0ez0L9B3G%2F1gyvdu84W0zhKb6UWkFc0DI3R5FuloHu2N0EaB%2FaWDnH0SYY6S2dVMdYXc4ONaW4ex8FmilvWF896aj1mvsvJNe9mHRs1J4dnnlGT0jCZTREOh9DHdkNjHOjVm%2BUe8EMHH8eCqZ5NQUvNT%2FfzQ5O6xhkPz%2FD5slZhjoL6y5XYhwiCtR2I9g5SXwIdxz6fLvIxDHTCOtpwmo6yhbGpxpGMy4DEx5IGzGF9g%2BqjLdIHoDl7ngXKQTsTWgQ3GwSjgZuLTWU%2FHH%2B13R80U4Z8iS%2B%2BY27xWQZeCcPYnGimmhLh6pNYMOlrhx94rADSPMOCZ4b0GOqUBACFgKprP988tIh992Bt%2F2rcEIdttaT5lvyfrMJgkq17ERs%2Byvo9s3lo1Y6cOe764lbjw3wjirR11623gE1PlsGOcXHPVs11HIfkrjzx%2F6GjGwhMn9evSp8y44O5nDSH3aLRlAZgwIVs%2B1Cl%2FAPir5sE3f4PeS3L%2FjtuT6axF8%2ByTsstrZQ2mlGo99oZFCxtyryD8FGTNxZu3hq73Wxz5a98YZ4UN&X-Amz-Signature=9b4ca084303c93d6b5e7fdfec050dfcf94a506d15be0a76bae1ee10c4ce5956a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
