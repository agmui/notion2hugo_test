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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647EF5ZJJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5u0GsrCunvzfc9FnukTZoaa29Ee3THMWc26NnMuQF6AIgfCqZIsKhbF421JO8xxsJA0pG3uahAVP%2BQ4PdhNElnNwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBu5DsLp1WcG48vaQyrcAwY%2FWW8JzuRv18O9ohrlmTVurUieS4bxbWW9YVFtylbBQ54UjCN4xuC9ARhlv1g3TczTboVgyy7CXYLHmnmEEuxMdsEf8Q47wXaHD9lDSm%2FaUo9YhOYBygK0K5XEsGeCWnKXxz9irPYZ5meGBP6D2xNlZCmgNYAyfvKp27arqgcaX1Fk5p95wWeGzJx6vOXAO1OpF8n3DAiOBD6wlFoE%2FE3zH1gUDrLrfnD%2FISxC9fLjtQxXEcAUKtz8Eu4%2BZK3eczpn5bDSLzvLtltMbWIOzB%2Fcpj4H2UGlhRujK5Yz31e1WCoJOBchyQUtu%2FHuckkuMQISsywYNNjWgXinYhshtfBQnGHTrIxMuVt8LOvg%2B2XGBFbU4HGLyeoHLZmkBCgw4pPHpjk%2FHB3EBDrLFr%2BQXz81YafzCPVe6Xg8O92gPhMAZS2H0MrnpfhR%2Br2UU9xDR8Ird2bctsOrGF80CMPVBRzFH7yX%2FfyVW0NlL97%2F6YjJW0KV7QyLcWU5z6y%2BfHqRnM9AO5qVxP5lhBDCR%2Bl5yAGQuGY2x%2BQo%2FtOPc1UWhsgkaSC4tz3E9YrEmGfFHCv3LsM5PtZA0ikk%2BGruYCEPLICc7Voz6KXS%2FJCgXxi1N9l3jdmwuVD5Z8%2FELOfGMOrc6sEGOqUBF9Frc1ztLyrcY7bax3wSRk4ETJcgNe7i2v2I%2BnRHK0l7KWwpPN1KJKkHtb5O2gAzUbQPSHxkI%2F4bm%2FrVZ%2Bi2t3GP5jEFgJXctzriO8fKsezwFQMUtHk%2BTfaQykP2HMk4l5vENEvoEAX2TtGHjTvqzvHLMo2Gt3Vx6%2FG8KOwaIWX0BPzVavXqq8WLC2yXLfWeeKElhCst1JFn9wPT87zC4FUmYeow&X-Amz-Signature=843f9114d4b139abd85694481fe7116754568742378e61f3688ecb5bd7570b01&X-Amz-SignedHeaders=host&x-id=GetObject)

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
