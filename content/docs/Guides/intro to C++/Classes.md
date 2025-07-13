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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLLUVW7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9iov42rZ77DTaAG2jKyDB8x9DQ%2BldWybSRlXycgDNEAiEAwpIgABCMzGWVq9ZJBememjbB75DgjGoDJf30NiT1w%2BYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDNQPg1MYE6VPqXrm4yrcA%2BRdjVYOMIKYU9D9uMSGQAad3fU8cfs9Jmsbe9IpgAAeBHfnaeFtpnfyBt%2FbvLPn7kw9vYZwRMbCufciGbK5wfmwz9T4%2BtUD6sda30304WpDDTfpfioj9v6oBqAM1ClHbV%2FsQNkpKDk0Wg2hJAZTIozxTGIzKT3YZ2OrpzHVOUeDjaMtP80xlefcP0dxPeSgjnmwfDZiaVYPz2PMF1WNT%2FmBORaIRS0yRgF1L%2BqhWh4TSqWEuMQrbHSJaSy9CEETGj2pMYgNxMl3mIwGHnmQkjEM3f%2BtHErnRdCePi2TaccW0MbCql%2BdCeFlebdJRd9%2Ft6f1m2UtbmJMVn4oTgHpar%2BcIr84AoS3MV%2BZcBM90CBBpM59Q7UcxYaF62kmFC7jPcwkJM7atOjND3XU8v5RHvdmDCaxaNbQNh%2FhI6zWlOYnfLzlJIFI9Ko2MPk8UTel52zf5A3zIFPefNNJ%2Fx5UchdAyq6MVSKFr8AbGbjTNe0tLGFw%2Fm4Kp%2BNA%2BpdWE%2BHkgu8Di%2B0FJ2%2BEr5HPcC2Vd0eQK%2FI1QoCnoa8bO4przANDpraQU1PRnVlTn41el0mhUp6%2FUtUK7Obt9ViI0YeOOsu5lBFsFNOYUQKP9FsCYZfwLlXsqZFmffp038bLMIOWz8MGOqUBmJl3gGquNiJ5fHAr5Bd%2FrdSEWzewWrVW2r1qPp3EbTK74PouT6plR%2BqFCcUn4svijxTZfiwjUZuNIdQTCtSifvb%2FHc06%2FqKzMC2je3fc6rOuRDanwnTfbLjIYgo4H8GGAH5VfvkaHzInu%2BdnkkkG5LbQQfF8GsKzMDtTPebvBHU11RRqkHSxYbHqk2qOoWfKtqy%2FO8YvWzOM1ZRt%2FPUNYejV%2FA00&X-Amz-Signature=2fb50c88a53028e18ca7984e1eb824005bb3758154e637fa7049f3baaf410b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
