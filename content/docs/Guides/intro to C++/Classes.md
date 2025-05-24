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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VC7FF5P%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDTofky15M7TTkLKQDUYM08%2FPy%2BXL5ttKlvqIv8oZGqHAIhAMWw8vExvQDblNR09HndwtrbaH3Tz5CtCrcoTM%2BV5j65Kv8DCBoQABoMNjM3NDIzMTgzODA1Igz7WV5QOA1w96%2BvyfMq3AM3IkBFXRsmdSsvLLxtJE24Vu8LRWPyGUV1OCIDtRrXFcN5s6aUHv%2FIr5Ay5s5ANE0Uo%2BiiFphzoOelZZmt17bl0Rp0vZtvYZvlMJPx8iZU70%2FS9WEC%2Bhisp1BiCLekdQ%2BnHNvXf5UGq3l57WH9tK3TSlWF1HIhRSJE7nmFx5B1sWn6%2BU6GEwys9yc3jFoSbqc5VJfcUJoEsKr2OmjsRnytv9NIBPUmzp%2B65%2BMFnnV7A0aC4ykjqeGPWsC3Ei9M%2BIVRrBBuytHO5%2F3BOwDWcTlTF%2FD3zVgc4vG0EPyM8u0sYdw%2FfRa70GJJkPAQJKSt965DdRTH5YK3tm%2BB%2FSZyIcnRvWUa36DeleWoAG3e%2FesG%2BJmOWzmf5MvDji8pqR687Ofq%2BAIIhLQyc4GHCY4qBUcf31g7dfnFKcehzPVXe7w2e6Qom%2FvTH%2BqSCWHEAvEjCtAxmN39LqBt1N8qCBmVmvOkB%2BbnZEURiSch8TJ5yoA%2Fo1iCOjyWvQxtdqfBStRAggK2UdNkVXG0ma%2F9%2BEuJ3axbIyAqITlrWqbjxzT0H15B%2FWI%2FfHYG9yYLf4H7RC7YNA4EmhkHoxtYDyNR2ahne0oqVT66byD4Uh%2BpKQsB6wr4GhXTjs0jxAdO%2BvaSGjC85MfBBjqkAbY1urXHftriMuyF3SuKSIk78Lp5M3kHFEPQzzdgib550YES%2BmvWsm1H9FlopUiF9sbeFu0jcCZ8ueFs8CWq%2BGp5pYB2UzwyvyoiX1%2FyQ%2BBcM3BJSiClCI40lVIxesUzjOu6ef3DIxqWtPKVzkdGF8XiK3rQcgOoMAsUGzXgWrAidXbTpbaGj1L6RA5st8%2FG%2FKC0E3Opzxve%2BYlJqsycEUXsbjk7&X-Amz-Signature=71df0e222afc8cca4386f3729a10e0c8a481d8660d2959f39deb8846eb44f8fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
