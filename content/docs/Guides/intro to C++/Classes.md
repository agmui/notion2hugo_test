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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2UWZTYP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDyAQuSjeoAh%2F%2BK7t3I4T60iKf1B01cnI6JGWr6WpYaCAIhAJgpUpG9D%2FESNzUTiABZxtHG3ciGpR3NPrU3K560ECl%2FKv8DCFsQABoMNjM3NDIzMTgzODA1Igy77PcJglmPtRaTu%2FIq3AM24JsILRngusRnbs4iIxB6JAwDNQWEEqry4D7zl2fLUddLGYvnwYYHyslv65SIdrIe9hrZYgAq86EwnjdzD26Iv%2BA0EFz5nFMg3FgaTY2Yooxc2Smpebnpvunxdnj3z67M6iyBLhzt2dry5dzy6qTFLoBlsxl0oHN1rygCEwcfPoOftaEbuE8N0AGwuX3lVm7mndmao7yAzv0nuP7VT8QTH5jtbBK6%2FJq3mVieDkJ8ctsLuuYWUm3wAVUPMiQV3HW6XsFkh%2FBEaHETI7%2BpALDIqj1D95QL7POkrvOFXKfCC5dHndpcXJSJwC9sDr6VK6mGAajvwa3VTHQ7RYnmZGHh2%2BFOny%2B0G10lADhqAuSPDZ85Khj8dPC8IC7p89IL1QM9iR04zA0aLhsyz%2BUYscUakTzV6KIfU7nP08nfFqvwdH9RHgq239bxzjD0%2FTiZ%2Fe4WNLj7G1sAqKma2ymHpJzXrzUBXUl8rc9Rq9dBrJ8ZCH8xAYEHZX5ekmFZB9dRfUa33pddn2%2BfjGQiIucuWkRSxu60Ah%2Be5e1fcViSm1VOAsfOITVU%2FAKVs%2B8LlNoeQ3jiczOOt3mAPYysMZbHmGQ1qJD4PeYMGPtNttkyLA0OzDGmopKfkvT2GNYGbjDAvvu9BjqkAd99nQbdsqGs9Lhi9QbqQnV2TBtVG2incZWeT4A3HhfWLmFFqtmEbkoSSKQH8ShiL2T4%2ByuUIoONjOK2vGoRcaMzGh6Ld9pl8S2%2FzUnTBL9HRWvkk9bX0k4eWsfqGvbnb7lcg1hhr0yKsPa4HfbcaI96KnQEHLJByLAb6uZ14417wBpQTKDsjvUL6Vb6%2F7qgLF4KJ%2FOlNFl3UcFFHtnJXC4FFPpG&X-Amz-Signature=e05a7e13b3f275ed3395bf54a03d5d6f8322dfbba169bce347e46151e77b51b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
