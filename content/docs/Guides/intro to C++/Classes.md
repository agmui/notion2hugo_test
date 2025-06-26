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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PKCTDC%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHGsCPdyzTIQBArmHQBarRtjuW2UL%2BkodOZ2jW1lhuP8AiEA0Jyl9KkYZibXUMVXAWYPq2jg5BCKknhhtXFHy0BGVB4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOlkdzrDFLb3IqCUSircAwmWyKRiVTZeowoqpSDbzadNTiCuAJdgzaXS0dsMZrfp7kzhatCEv14JPXYzg%2BCfgtL98ggOF0TGSyuXhVZMxSUyW2XLv0QkUZIwDHxTiYNCCMUXZVuKH%2BpZzT8agZbSMRoFAXoN9Sf%2Fp3xPZBg8OlszCg95Svl9Q1BlbL9qkNn03NiwhKquaRLC8gD9awtLgTXgjUaHvS8oxBZY%2BvwPra3fXxrtISeS19DiEf%2FEtsCeih1XqMByHH3z6nhDYnX4%2Ft%2F6%2BzLB7C1M2Te2dMBRY2%2FTyXTlXWUXg8ib2oppeEcRfUomzSghl4jcHnrFdFb6HFS%2FkaSWN9F%2FqmzdBW11J8U9G2eRZ1K4sDhF95AWqbDbc3pa8CvkZBgtu1TckIWMscngZ9OzoH5QAzxkQRrCAG5pn9q5dSgyQJA16P8pczi%2FLxMkkl8fKkTiC7McfZ7Qi%2BO4%2FU7l%2BMXnUAVDYb5RXrB2iWTyPQXRCwpaBOJaM36sO07MlcHPAUdFdWDjzc7ZOro3Hj%2FX6SZnbj0eAiK5D%2BWEP4fkmaQP9S%2B88b1W2cvFtU3alNaJBH9%2BQa4e%2FjRRh%2FZQ9qJRf5qRsg17XCtguShwXGbMp%2Fyg4i%2BO2%2FDmj1RTOut30dvdoTUtIsJDMKWe9cIGOqUBU1RmOERdcy4j8VODHjcdGfmcaJJn1SLt35hvjpP8%2B1HXUfgzHcWLEagrw47yi%2BYDp%2BXjkEIEWtX80fApwASzUHqnTWdeiyI6K5trutLnwozk3scSM2OR1KvZJ7UHDMdfdIRnVmcKtGhcqLUnIbzaSFfwkfv55dFJ%2F67plDDiBcM0m1iNL4Zh8g2MoLNP0gQNNJnLvzqb1f%2BAG1jJ2ZJVmZi%2FwbPI&X-Amz-Signature=5ae2c56818e2530574ebe97cf2625b57d4dcb5649c1f96a6130dcf13560a228b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
