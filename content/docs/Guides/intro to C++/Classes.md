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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPKGC7JN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsUiK%2FRvOH21PXBVPDN1%2BymQYYso28ohNm4OUYwksQTwIhAIm1xNUAATXQKX2kR1WAMxIFJCjPDMsCfoOxWiYDdRBdKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwk5MyAtuXki%2FOihvEq3AMEOZQRcGpUY%2BMp8PilbW%2FO9dWntdD4vVMiizDdluRXkqk7TFALF1WbOqwrlPoReaRyD6gGzMqeFaUTH5RrTeNDDpMqkTUQTOlpF%2Ful5NeUEhCwW99NmkHqRhVaClqv4DB%2FHieGe0eO%2BzdDjdVUfm8pOeaaUCS6rf5X8Uh0azhuOLA5svpj1chPyATCOG147krLGZzz5W35ubfG9S5%2FpqtVlBT9OD3vdEwCyseiWDC8it0ejqdJCDdM%2BeFQaTh89%2BtIfyQbroUOqZlcv1gx%2BfPXehh8kcwor131OmSk8%2FxOrGrQJIFBKoUPBV%2B6O5j1CaZ3RzCltOLaPSdQSF4%2BLvu%2FB0rWaLjzSfkI3noh80hK2F7EF4SkFKZTry8wYqZhOKvt5aqeWdtBeci2yz77HR3lWV4B1cO2Zftc%2FQGvTTRRtHSYleNtbNcoS6VsxMQr%2B2z6ad%2FnqvuKhLk%2Fw7UiromtqDbUeerxfRNm52pn1M3EmUoAib3DTPIUrTIFkVgEb2CVr4Os4KF15mmOSkKKiYkGxOrBqAdeCiPUVkJIHi56xYU%2FR4KHcssSGI2wh6iEBbLtuFVdFHCJSl1TlqdQnjVfUTgChjMrLza6RfPs486dPbK6bY%2BB3m8mF5Y23TCgoLK9BjqkAYhD%2Bs4fzRTk1OUITjsshF4SFG9FjWT%2F8nz4BIbpXgheF4mO5klnIbstKOJps%2FK1Df1FDqz9iWVBP7gzYlTOBABid%2BEgt1s14pBhWpbD6evYrSvTCuGwzo9IGN6pys%2FW9eryNRtvOoBGAVUKm80ptRy5ZsXy23LT0Tx01jYdlFhE4ww8Z8MoSTaMvfj%2BQItl%2BsO0tApq4tCgMV5QudIgHAxBMHLU&X-Amz-Signature=8e33254d7b94184256e666e4868b509c23a1fddde76bcd72a7e90dfef82b7c84&X-Amz-SignedHeaders=host&x-id=GetObject)

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
