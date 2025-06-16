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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643AMGV5L%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEjuEB%2BZUX3RHazjS%2BwVlvb%2BYVnVkP%2BzRhbF4V%2Fb3LKAAiBMTQPThjEgfhy%2BJD7Xs12dLsVnw6OGVOZlzUQjet5Q%2Fir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMso2aO0gA%2F4yD6tExKtwDZwsPANXHYi7mQGhT7RdqP4aAyOhN1tyAc5oqKRJu4m8RTjhIiPpAS6mtLa6ISyUw%2Fdi6kOLIJPBCPW7dV%2BizaAZqYKh5cVvT8kgSnlX05yhSLzEFYtrhnN1va5edGKJ1nmBTHY6f4S%2FnHGlsEhzxfSfwS8FCJZJ9gsv3LgPtBNDSnnsJbY8h0O5I%2F6tszU34bHtRJ497RwQzxcwZopD6T6xUFXb9rH1RWmGlOZi%2B5pJNss8%2F7e5x1XPhCnlQWucJI9YbPm46Fpjwj5M5U4nAd62ncXCPGXD9yVat3S2rFf%2FmAmfqoZTl4r5o8K0jh0KZh2Yo7HXem5PbSIXhNqnmh7W8yfbdOicjg4MEalGFMTBJZnCfjNXVh3ZYiT5Jr%2B8LddkH5tEXDptkTxqNVOQv%2FkHjqlP77E0B8D56Eq0qHWjKaHKlxzfF5XSjPB9bYVz3izsncZuFjudkv27TkCIpzlnf8PYFQb70B80hPHdJXVbBh%2Bhn4cbaODotWT87a%2BpxR5Ph2Uby3HaBqDxxZots6FO8vkPaZVTJ5ObgwIAxFkKuyUj5340e7D4xBxDqZI5i56weQ9f3aug8d2RFm1VUuTRkfJHbPBfLAQSdF1HvP3jNKE5iPbK1uYp%2F0p4wk8nAwgY6pgFWhxruMjf3fpVSXz%2F6ATfEfU9TLovAxyDkDAalC5y7OMBmXBmgfX8U7qZT112F4mLVmoBRDsADAPCWu%2FAFgYiCDp69nH11kSLARc%2BH%2B6KLGlDKdYOEicpXKcPp1MOS0vWClFcj%2BF2LFowgig0Z317r1tjp4b8B74Q1eltYSiPnfvpydO5fyLdEl9IpjQbPucIk6qADBFgSojLwt%2BcbBdiEUbFfXm0e&X-Amz-Signature=c142579714d06aacdd738a8fb056059437acdef3b9436f6ad784ef288fc11237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
