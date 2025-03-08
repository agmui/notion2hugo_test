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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSIVSOO4%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDnMvlKYrkjXQGAbwCITGxvdfQ46dYyRlTYK4FNkzXDsQIhALbP9uISG2cGsOBf1OZLUm16M8yx8pMFb%2F6x5sevdLt6Kv8DCGAQABoMNjM3NDIzMTgzODA1IgylGLVav%2Fsjq5hKi0Iq3AOVxzl6AHpT71t1SJJGwVt3lMkjMAtkj%2Fg%2FYbSdO1SCXh1JrKNZ%2B%2BAkq2b2AHnE9W4sba1qpe%2Bu%2F5jd1Kz7%2BdX8fRflpHFMRv9B0tWI5ZU0CmUXN7g4dGnAOBuD7piLK7lbr5ByhXRi0WX69ncgr034BphkLbjfLJt8KKQ839dVdDrMCZb2wFge3f2ALWD8DXFkAVBCZljPupj6VgnTJehr22ccNsQJkoUReTXfQPpPkRNEomEoVrehh8akPYEP8iKjysEmnsXnFrmk%2F8Blt%2Bmoqzr70sLm2VnZR07mxhYAzZpdpyoRkyVCe2tH16w1rTHYA3uzUikJYv1puWUZuyrsDTl3V8iHQ33UTqqB5cAACUCiKnX8rCi0nuTjhfiBSRZU19SOyAFiY4Pp%2FXL6qivOtcS7eq%2Be1BwDclZlMdrayb8T2CfOQ5DEKWBWHD7eYx2rmnRIO0CK%2BpUE3s5iiw%2BlQYlvSYwtpNcUGcuyULH3p%2BoT37p9Q1cv5wCl7VayQ%2BBBkuJg%2FGstJIBhFYlQkQYm9E%2BBwPeRo3a6OVYoHpv2IEFsKwBw2e7Y%2F5ulpRne42dTaFr1jyoXgL0SVLVHEslHif3bj3wIczNrOstB9Pt%2FTO0NmOSaRCYsZuB%2B7DCes7G%2BBjqkAY%2B6AIoN0Www5D6b%2BNA6WvwxxOg8L7ulb5QOlXzVO8NR94R1AE%2BcciBwEAKOzv3roWeCSW%2Bdf4H3ErLtrxZTMyED8dv07psC7%2FtkTeeiJjcvZ%2B34I2ypYHrLEVVBzXSgXpBr9tllYiHi0CeX3BeiJbzsNDJXd8HeIZiC%2Fhs8OmnhALtn37%2BBL3pAkKD%2Fyp2E2Bj5Sir%2BGQzUEipImOFD6REaWvDO&X-Amz-Signature=56adae7d305acdaeb2f345d7f2650ca3d8d77a9795a42e5fb4495c67c8c814df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
