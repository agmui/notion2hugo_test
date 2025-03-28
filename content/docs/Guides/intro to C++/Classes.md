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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V4REE4R%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpIKHP%2FXJAbzuv5aFTYkRRwoSGq5AmkSswahX8a0%2F9eQIhAK6hzLT36xnKp4sf%2FxCb0Szg%2B5Elfvzm5S9nVAvuFQDsKv8DCGAQABoMNjM3NDIzMTgzODA1IgwJn93l%2Ft%2FNLTWj2l8q3AM3nbFAuFdCstizzs7jAdzNXwfB6rHg%2FQM8J7qFh5lxnPAyad4Ipls9C2Wm1NZSOcl%2BLqDlDKx7wN8riGIlHc3DeqtA1Kao8rwlaaNNtXCefJa5xjG9k1K%2B4bF5WjlXUF3Vj5MszBpsStchybyf90HaVvF%2Bd6erbSjTpG%2FFd6uGkdsGXl0Y1bKa%2FS%2Bk6UHfz1HToeS7lInAmK1zLEaFc2EIcd3gFcMZi8ieEWbKH1K1OUR2w6pV57bgjcH405kqs33kNLXB%2F%2BIeBM%2FoYUt18v6xWGUiShbS%2BBbp0KIRWVOVJCFL8MuD5giTNgR8gYL3T1f%2Fzi7u89YLWJMtq7EyxoW305%2F0DAF6IeQCc6sA3wduQTCAa%2FmEvDS2J4bnU10S50ViLlSgzaJD6SbjJjLRjzJCYmY8%2FfN1%2F9qJG4yjhpHfnjS0vCa4LxeUG1YndGexoVHk%2BZfZ14Cyz2mcb9bdX8UyA3VmznyDWFDgpePuuyofAq4Bzyvv44BZ6P%2F51eR45rdcH47gUsdiroazBUuPYfiXR8Hu4WWxPEAz0kdrI1VtMUImBPKTDsMmnONO5uSZd66LD9x%2F8CA8ij6d5T9ROzMrZKI%2BiFfr%2BCJR7jWuFaDQbpNbUM1GOCLeBWF4%2FzCh7Zq%2FBjqkAZnp2rfWtyGnViLzsE7aPZKdIUVoc35%2B3VG6Vdi6zhJ34vHTI85BMkcGhgoON9xMbxrUkzddpng%2BuC0vKuwb7%2Bxr3qTJ7OC1I8TW0gabL3IJYmzYLrLuGBHO%2F51%2Fr%2FazNqgg%2Bew4mPe9Wu7%2BLN9hsKYsztnn6hCTGd6lQ4EqxXwTRSCp1NUQR9rTzPCqUa%2FYJn%2FgAtW9RpfZgBS38z5iTbDIz9kZ&X-Amz-Signature=dbe15b33398c99115c7121796695057bd0fcf0a5604fa8bc9f74d068ea6d5e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
