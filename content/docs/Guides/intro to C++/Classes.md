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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FFDWKLY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICsZ7XxmxLEIPWQkF9A5yR2eEm6nPKDU8JvVUh%2FbOROzAiADStLP7XrYC5W%2FAOvtwI5oJuVImZPf5Lt3V6%2FnI3Bwsir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMOPQNs6oQt563yn65KtwDzxqaTEUMSekF1H09BPZdanoMJS5Mh84a0WtJIS787zp5hwmYMWnTxdN3bks7ry0DXMjDBEbbUnPJL8rYCVIMNavDlIe%2BD6EZBJY%2FSTollmVUFX%2B%2FQMBiKOhWhyLsIlKuXSZ3tbazD%2BLZQg%2FOaJw0n0nlV0uMQX3tgs2vZjmOPZRZXy0C07D7DX76ck97MJX56dSpqDe4HUyMBSu70z4GfU2y9t0AHffQQp%2FwPnnL%2BFUrVfwtwmtpnHDdJbFhVegQVfsh7FCDREvl1ZDwE3wTHkk6mJkTz%2FhhFc91JGxLbdEzUlcH%2Bij7OLkXTarRHWTPRfL93ps0eRxqxOFS%2FnR8LCjKUDoVg13pI0NnViFtZqliMfX0FZfVtv1jaEzjuTnKMpqhW2UEXozDkN%2FkONYa17GKQ8AHOQp8QMhN7saEa5gcAjweMqYmGmlcgZePn4xjIyRvCingCk5dU2T3kFXRtSAq3S%2B7YAdS2bJSayYykqANRnb8LJbMWyQLzOR7wMwfBgxpGdYV4CvmG9%2BVhMXEOxymcJENvYC0z78hObykGbZn2rXHhdGu0rZhG7xBplUA0r1zC2zl%2BlW0RJ3g6ZjgxGuwt7JuLP01BO6lZmbW4iSPjcgRFMDbmRH2cG8wo9T5wgY6pgFTYZnvm3JICswHieNM%2B%2B9FsBgKjKyCqIVQ9Lzw9uVVjpzNskRD%2FleUIZiUAMpzct%2BJ5rOWLxs3VjgGaF%2B%2FzhZ9FGgpkmsL1%2FNYZ7XPvmmABJKJwJOKVKHIbk7MHwgW7v%2Bzsp%2FzhliFvDKIw6DYOAIPLC7C3GWRiB1K9y0uTSaZVaYZUeCc5Ms5HpMOvT4jDidTM%2Fwe%2BqpRLDlioX%2F93Skh%2FCt0q9JX&X-Amz-Signature=70ace71faec0e61b58b3b7b38a4d1abdf1fa920e6e4f885b1f9513ffbee154b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
