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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E7VNKSD%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCP9NmkSh%2BmeorgLNru9N2UxsM0c1SvV3yh0cFqzbUirQIgPxPjQOw5gPy43scIeYtChwm0mCaPOyvt6sUZ%2BXsNxuUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBRgS0EhsWdW50OQ%2BircAwJVvxfCzpIfffMnTHcVeQ7YqSNFwZVYSsvvnzq5t2Gdss4XJIXQX6UGOQBAGsBBDiWm1pdY0pTwPsHttYztUfRrTdUKtRdTpfoUSxXGhg749NziqOK9COXfZgHQY0YHBS8MRpjYUr5ZNWKUg4FiMcXScQzG2qrq84kvwuh24S2BYSjCt91Bd%2Fbvn6L5P19lbvdoMNHf5e7H44xEFZt2PvHQSJc1Kc1704aMw6wRibCs%2FiyzmBNJU1LFcQVe3nhcTVTaT1pqSj2LwQe7akkGR3LAsXoJMz2I2dwPpISXZsdK4cHyvMJ283ukGmGoFbUV5NNKFGhDUxaJAL0c%2BG%2B5pcaKZGGZeEEDhSqfUd7eWDCBTD7RWX9xBJPIk0qktROXo06PooSD2JTGABkWBJNfdnTGGxBamo05TC2y17PrkLU13e1V6CToCwUpi9M395eR%2F%2Bwo5b2xwRPLESRjtl%2FmzyGTBSiGGvh3qS3nPPDEHEA55Wd0V%2FcTiN5mMVp1f%2FE5VszcNmxH9kV9aAa4XKyf5%2FlVUMS%2BZ9HG0O7Aw0Q3VGp%2Bc1%2Fn0wTRGrKf44htlitRedjLtE09BjCbLmmKL30VCBQ2DzlmZzkqpE9G7van%2F6QnNIQitqqRh6n2tEhdMM647sIGOqUBnI5eRBUUC%2B1ezKUC%2Fp22tG09rwnYzHDnM0djKUcsdl3Fqlzx4Y8YGkgS6RP9F3XBnIIXOgjmOZVWbdvU%2Bjz74SGxAj8PjYv3UAsWO5XpR5WKV0qZQOd2Gjx15vkPDFTQkFu7sY0tEI9SP3KXHNcKmrUzJPb48BkcdFYVijG7M6qu5UnaWAWh6Cb%2FDe%2BZ%2FtxYns7cpqIvZXDue9Me6vhSnaEevzqs&X-Amz-Signature=46d2b0598e3641c7d5f1782c9d10e1f0df343710090667616250eaf32b97c4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
