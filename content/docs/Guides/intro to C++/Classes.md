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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKYPKCO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC3zkHxfIx%2B1bJKc9fUuWuRJR2yNHB3Hx69K9uiK22ZfQIhAJgasIXW%2Br8g1yfEvpj1uO8oW%2FqMICWUqJ207XuL0uM4Kv8DCFgQABoMNjM3NDIzMTgzODA1Igwi8u4qIoYGj7rk5fwq3AM%2B57%2FjCGBVzkMdu0gUaseHuAXfT67jOczcoONLFvH3PUvQKS9qXU%2BqS1vCVAx0qao8owjh%2F4diTphVaOOYXNeybDYt5pKqrqxpUSAX018E2V3fSxPEJDBYpwm8Lx%2BiLywQ1VyPgOywXAYP6aBAaThwFddN%2FjuEzlFC3U0DSgkt0esB2INAlnGDMLSVcD%2FJPWxaZ1bCa8RgBWy0RmFmAjRBGiIc4vkgsZ4TtAEBe5iqEVjB32MLVh23znf3jGglGrtXczjHbyJavcv0uto5TCylLTYxmwdZrEB1yvn2QljgwtQFp7YFB%2B2z1iq3QXIEy1CVbww8sEqhfogwLU9Z%2F1l6htd%2F1TZe8VytAoIPducOG7WXWblx8gbtdw7%2FEppXDgh5fApX3f%2ByPq%2F2PX2wd7RKAju35XgVuZHs27lmORMZMFMpUaT0qbPtVzDBOh48pk9fL5gpU1y%2BwBrKabHcTrstQ68c%2F7Y%2FWaji0REmndJo9hzO2yE6S5zs0ncZEYZmao4RkXg3AhImPCMM%2F%2F%2FDhRmd9fhoObGHlzSwQ3B369n5wPyREgAxPmFS0RhSpAurtCuQ89%2Fx0GUcjOCBzh%2BjKTA9DoJUqXRXORsWPpJmschWMfmZQ8QJPTcYD%2Bq6%2BzDo2cbEBjqkAcDHDwhsJdlUYXjG%2FnFatrlO2hVLiwZr3yA3a0LsPqJ0IPCcmI9fwXqH77lWhxvLvl8yhk7k5JseWMcUm%2FTb7e64CQA%2BnRl%2Ffa%2BvfMyHK5Rlz1tMqX4z2%2B6H1L41UeW%2B9IS9aXNb%2BdQJ5pyS5A4TzrTEYHZ30bqaZbyfc61clZv3L2Y9znvjVRoxNBP1R4pTpmTHANGc2NAdJl%2FsieVTDePl%2Fy4d&X-Amz-Signature=b315d359d3d04d507b8efe3b8f679d3e77bb6c5e6f0044f117c6054dea122ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
