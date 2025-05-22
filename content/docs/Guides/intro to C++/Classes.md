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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RANRAJC2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIFia7fK7x43fWCSJIuhDKikrhts336%2F2vuWURqjTFFmmAiB5bJymuHxFIc9hNgtc8A9oT266XJcVDkYIUuv9Tu%2FFgCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKfSpha2DNuY0OvWKtwD8CJtYn7OwWcCqp%2BqEmeBu01I3ZtfeVDeqCzYiU49KuKYV07%2BiW4iwusZmLo8C3OfgoPgD6hxBPtf%2FJnvGTx%2Fkz1oyjEAAKtrIZqJTpUV1gbrzHbJbm%2Bo4r6N2Jf0le%2BHmmMbm5pgrM4tLBF4rL1fD1WAoOjJodtmkoMW0vkuD3rS2Ubyg36d94GaIKIOs%2FiFKWwJ3TfSONdYHIIBWs0ZLTzjQV4xf9bscZLsUS6wWIEI4ou7uJVprgv42CLVjJ2Jh7Whm6ENHDFLeFOSX4OTnhm%2F3Qi5bkBasAVIA78pa1PXg21ZDSUtlWPKiyPW4NnJoZT%2F83GHyB0FXmboXrgM1deChtEw%2FrVPcYU0mtzAEe4UqE18PfrxGY9D8jy62Ox9QH%2FZe2GJ5XvVyDxJ9CIXXj%2Bmpiiosxi4OgLIc%2BIwFuSRGtJPU2NUo3fVu9DZJ0jtTBP3hYxzwRuD4jv5hSLr7CxrDvi%2FFvmF1oUNs%2BHYj82Hzx9%2BevNVGDlW%2FOQ092mUnaF5jM7sau7ZdL5Gwb0XGLzkMI9CI7Ykl4EYkj0jGEda7Xz2Pb39qumG7vqjYM51cq427NPpZH4o%2BnKkKiRgtb3uJqwqyt%2FJD3sZZ5qazNGMWBecKsEL3oiRI%2FIwy8m%2BwQY6pgGnu%2BwEHhsulDwcMT6aFq65EVUKalUvSxfIphKBT9Hgzev9V%2FFRghiGmp0ieV7aADZU%2BOe6viDvqOczsGLhpbQjoIndb%2Bb2ZGubwGTb5fnKT6agTX2yOzyE5zNY1g7qKpqAnOD1Js%2F8ayisGrQzFOm%2BoIgFcG8FwwFQyPlw7qsR75eS2%2B8gsBU8JlXogKLtaLAdRkZ3LSJvjB5MzXLcUoUUz8Z4XzXO&X-Amz-Signature=bd5e53f820907b775c7a2647b879b2eba90605e3643173457972a2c1afcda557&X-Amz-SignedHeaders=host&x-id=GetObject)

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
