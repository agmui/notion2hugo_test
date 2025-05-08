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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTDJTDL3%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlJlZAAlnAQvKW8ZsDDoKQNGHBi%2BxDcwRjbgHKXq5JgAiBqXrlibjmz6E6dclEMQzjIe%2BBLrwMPOTvbzIflVjVHKCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMX0RvqGY%2F%2F3SJaXytKtwDQpp9qfWtAy5n3BxQYv3mSToKuMTX0f3z%2F0nuOIXWl23hsS80ylsCpoudxWY76sM1HwCqs58T0c16mwVyACbWQjMpWx%2F7dXFF%2FUt6IeMl356i%2BbugyMytGEOVC6tKUEdfCnX5U0BjJmA5RD10IS%2BHY%2BAgqderDZFhl7tmRgm7iioi7iVP6sx1veDDL5xiJOxmLCYZlWOtJqWKpbmBOoyP6HXUI0GifkFd7zgQXW%2FB8XHAFoTsvmozR4I1Ojc0MyV1bylThWVg9oZErO3RVDhmAYnKvVZiMtcZpZLcTYZtpT%2BcMgdCRDp%2B0WuKs3p0Hx2OIUeBEmswpL6tSwTW%2BAudbaBZ4xJvsef%2Ffpb18He2yBwp%2FukVlDXe2Sg44BoJZ%2BloipMmupTGeGeRh7NFrO1c5Pkxt4CC%2BXPDfyiiX2SptPxqOnW81a5eN9GFysBAWI10Ul8VPxFCCnoNotQBb%2Ff%2BzyO8fyfg5jSLjKwZpZsk854HlhWME5ujkNYCsds%2BVfLM1NdcLeXj66ciZWc8HF5LjiUpFMGTd92CoJaOvjOKKm51tdG%2B8gm45hhjnQkT61EpJSKxLsReETw%2BEo2gJWtgi5XFXGKNjeIzCRpiJ7BZnrdUIxumT7whlBUZP%2BIw5rPzwAY6pgEfTiq1vjCH84ZRVRaeNzImmx8wvkQxoEMn%2FTaxCHlbEklO3qmgFGuFwYZCHyfh4IOBgPetI3UQETabFL5HrgTsSP1MxfZRr0mRP3EZ5L3qXpEDeeZi9g90DUDBJIMlCmJ4gXfMeXFyez5WztfZH0Qyqw7C6ZZUSm4JoMvxbILfZH6DG0npdCVLPEbVs2NprffF%2F4GnswHpaznC%2BUYwTVtlVQiLOLtJ&X-Amz-Signature=8bf01b56f83d85fc5ff30c865eca50b633267c57981da663e11d8572371370a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
