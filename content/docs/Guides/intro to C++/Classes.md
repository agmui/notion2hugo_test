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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVD6GLLJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIBdTnlQfUZT8jSKM%2Bp%2BeBtUQhfi08uCkpasvELymkX4jAiEArqnE1zZoUjIYOPnALm2Il%2BCSVDtZbD0YholJTHhdlp4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcWEhKXyI0uhTRZiyrcAyE8xVe8pmQUKlkAZSNOM8a9Q1Njkto9eCfWCr8ZMjBR%2FAArM529BsO%2ByelF1HULuej0RAEzHycAJQajqpdfez8HAf5Nkiexqys9G4iIQx%2BL2sI72%2BLWpgZFFJQann5IYtYe2N1YLIO2kw3thKOR9nLPqQlmFxWE7ET%2FIJV2LyNVqsBXCA1N9V8KwchTqlwR1KYlRyO8euNvlUeU5rglLGEm1qACAKZ2nCwYur%2FxFQqPnHbKfE0Qn%2FKcWoS99evWZUHE3a501KcalIxTrZG%2B0mpe6TTzE75sZp%2FAIXIWYQdORbc4n4bhzcTotFjs1lpd2siM4Bm7bY7osAyJFYdNQkCDvbSeeRvaCDZiEyaLxJ7lVpjdxVusA3ITwR%2FIDkPzwi9cfFVj%2ByEbeFdPcY24H6d4FnfYv4z09n9nsh2bL1Ym54Pu1bADbTCJZOVXA%2Fe1t%2BNh71C1t8pCDBH4a3v8sodbqEX%2FXH2BzRF7piqwRJ7mR8cWBgv5pXYTTDWtd1MPnkWbft6EwGixIsA6ZRBa1YQdcZr5JtRtHDiDE%2FhGe82Etd%2Bxt4KDZAhGfXNgh0mTDYwQkCuNURQWdZ4wQW3hOU5qG1S%2FRdg7IfAR9NIECFVpp0VGiAmgyvsNEI%2BwMIXH4cIGOqUBEcsKMKhHz8YwPuoiZIImGdOUqHaMRoA4PARofEX687DgoB0%2B2W9jPClFQV5lv8fKFrutBSnqhPhrTZSyhO2DHixWYD7v6eLzV5%2BLYnVnt5uFkkASSsd%2Bgrhwwb9HKocGCA3rOn5srsHOEhw3rrboyVpiIn4NEt4UTsBPw3gom05zbSq%2B1QpCvKC3j%2BKhKSypIpID2zNZCaSGqW%2Bz%2FK61jINLwGsg&X-Amz-Signature=72e9dc886dc87e0c417c223373c57e95ccaf1b2f0fec7a2fbc437e09d3c61ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
