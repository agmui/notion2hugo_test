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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDA4H46Z%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDFnIZMI99S1m2YPGb9XwFGyY9cJkgIOmADqnphP7%2BidwIhALqSgSb8Cnbeu%2BTkzpQYwEPXbuhzWvL7B45rnadW1nD2KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNfaeRTX65TOTgc%2FUq3ANBKB5IJB0dgcY4yM3oaxfGjMNcy3XaBBqjL55tyH5Si5X24kW7%2FBfY1RZ2BuST7rgU6Vwiln7tPxPGgl%2FpbwXXv00hDAzHAcPzj2eq55piTu4gqvOYcQAtrBQG9vIa3XMO7IuQC11FY0OYznDvqu1pEbPvFMQ2imsmGSI9mfQ7PUpQXSfV1bzsBPI%2FMXk5XiIRIgYtF0yjXJ06E6eEUefxT2toVozc1tHakpSHfG72ycayl8YnBLDS94E%2BtORRybShJw12ZrS4tUncKAiNNuvxLswndXLN7gNUb09MtLDyrEaFBNl4SFxeZmd1QdQIZeUrunF3rrWL%2Fc2oHozLm03AGIRQ4B2YQdXaHPNHcKODqyYLgDSMXQcGv%2FvXIQtW8VK12ISxbzRrnQngkbHc3CTBSi%2BA5PSJPX15%2B1%2FzRE2dita4ZrOXlix4eo3%2BezlfyDWN%2F3WGBAn2JMh0fVBddbFarsHpz05bwYwaXDhgZ4SoTvZEJ25xNGZBu84F44tUDFFWPM7rh8WLCPCMZB7yNGlVCrj7qN28hUpU2qW77tH%2FFW9n0Hl4phBJ4rD1jBzQJpKhsvAFkVIJY%2Bkw3zjaaPj0fZvow8n3xHAdIY7AvWQlpkXlQsAF2RnjAauihzCykJTABjqkAT2v1eFlD0qEpcgXa131ukWgbMoAeBvXrZiWjRY%2FZkT1rUsR9io2AIGepIU2v9gfCCgbN2EMAJOlOeALN8v8FaigyhzgUvTGLdWALCXkqDohuQhEHDi%2F1kPlvGvLd2rxeBvimJClzvZHodwHyKUxBdl1dXQ1VAwcJozyaH5g1bsAdGNaZi3Iz%2B%2FYXKDsxES1MheSgtH0XmuwcVznGeLQCp9cVQr8&X-Amz-Signature=05759a6c60255057f8535cd2f581a62db81b3f4a89079a4083ea3fbfc8df2330&X-Amz-SignedHeaders=host&x-id=GetObject)

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
