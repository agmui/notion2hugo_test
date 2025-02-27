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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UPUIWB6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCz9mfxLI8eCqWFXgViCMME2xsPYv241N1kB4GPV2aSqQIgLmSGkExBEq7MiO9r4NdTIYoDOpQSBUIzEZKnK9bIADEq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCefZl2BVC3CY9giDyrcA2hqDQJCQzAI0GA8%2F2ZqThh68imegRQ1ETYC6eatpkARKNqDF0Ly0S4mZTiYT3rS3z6pCXtDbP3Ikz1YRtIdAFNtbLENmzwAkojkmdBqB15ESjpE4mtJD3cS2Mr49RVelYWxXafI0jl%2FQE5Z4dF9f1e5rjQ8kANvW73XTMhGWB3OnTlubbALZzbyDSdYhJfK3R6zKx89qW%2BiLN90sVoJELMMYvylmgWZTyP8WXdJmPhe7mAHpcBWPdnRhQDlx7xMsooDvZw%2BWFRhU6rsW%2Bx%2F4NSU1KI%2BDO7Vuuu%2BTBZDdEaY4%2Bj9ABd6qK%2FeC%2BcRz09m3Zs0Fp3aJrAEklcD9MfukSrnbtvoRjznIoWxecFT%2F9gWUDE6GOcaH6XTT4umYWP0L3Yv96vetArZN8aJB%2BSQp8iYaGzaShH669%2FqyCOqbpqyUCVqtFOdEqIKpZ41mYKP07uP6Dt8LHuyHluk8YYefTITdJ%2FhNo4%2B6fp1aBTU4i6eNMcQ5KSsrg2mDaMgT07wNjNcHDXBeLqsw9T2BCaehoXZnSK2rQDk86NtTOinzZLnVeNu0I4Mno7odsA3h5K2RAfdPBn%2BZtj7STt6T8kw%2BK5Leq%2B0urPpQbljLpAULD%2B%2FiFpl64XHh2jxNKlpMLLY%2Fr0GOqUBe%2F%2B%2F9xHmF4UPjtEMRrATcVZv06X5jBk%2FTaj94fwS%2BsbD%2FIqE9wIGzdVD%2Bl8Ff3lIT6wjjstYDh1HCoALJfZFFidzYdVndDvJJsJcs7OgpyfdhEOE%2BOpZimeJUdY11Gu4mL6ELn4PzL6ZXdRrpNYEcrTAhMwcd%2BdxvEmFtXFk%2FyrbSh7XfZTFv%2FHl9Ms1FpA52dbAoMLpHNr%2BvBVxrwyupFWnp10i&X-Amz-Signature=226afc1bc44556a4b758bf22cf8d9c95ec21e6860f0a192ba27f592981a6f07f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
