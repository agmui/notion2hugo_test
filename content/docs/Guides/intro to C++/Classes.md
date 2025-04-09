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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D33ROLJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD%2FMOUhZIa35HkCCbYJ6hW4y06HGo5fEsVNWxIPEnUI5wIhAPZXs5udGAUa1zsBNA35T9x%2FESzf3XZNtb%2B0gR8utG6nKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8HDL9HI3eEo3IaYAq3ANZSlkjaNjCN9XX%2FuyYa0Cs86D3oD7X%2F7Fg9zFxEc134GJzbifDvgtBD8ZsBWMDpSLZLjkvucsPOdQvkttDVuv6bb%2BLtmnDCucNHMaXkbrOBAHuc8bSY2NyTgpSUJ8Nt7Uheshn3wl%2FNO0blEeH3CWXlZwe6Cnj32HJVfu3C0isI%2F0sGlZzWqqtySHVAJsm2mm7etXM8a3Je8MBEHOkuNpEEkSIkxOl4ChGnfl7Gusg%2Fgy%2Fw0udx99IqLDwar4yqt8QbXLa6xKfUPO4K51TazgDswDGR0wk4C5aAhZtAgBrE9Om7tzjL14rrmMRA%2BmzkNV%2FC4qXCm0y5bzRiuRkKuraxSZohrK%2FTnBXsMBqjtGSX0z%2Fh3xmOaTuGn9KkYkhv00rjm3pBXaqSBp4kGIBzRGNLwdfM5KFZVghfpxISIyzXwHQoC%2B0xn7wZvq5l3WA%2BHsJ2vCaOwyrqkx%2Fqc5lNK%2FTMq59qcljwHrRaRdlr5sNNrzLkRyd9Y8%2FUZtwOGOtYUhfZcNFJjXVaVHEaSOtkoVvyDkdv3hK7psZDMlJD6Euz4hE8r12WJtY3pblG8BUnozkzL6K7SZHVJoiQmxy%2BvUR20lCfq1Rd6VShLcU98dw%2BePoa7pkqYaX52f7AjDj5dm%2FBjqkAQDjUfgNg%2FefJjlg%2BgOrkPL9zI4AeMZJe%2Bag%2F6yQUn3Hu8%2FSf8IskiqGG8HYmRkA21my%2FkPi%2F6IYXSn0NjTvXsDA1QRfv5pGxG2pPjB4T83%2BeM%2FU7XXFwwGMCeGH8owK9kogch0wuqyoVpfuEmHj3tAsiJLe2nNY%2Fu6eeZLwfVSYw0pQzf%2Fh1l00EYDVOg7Kxr%2BHPSpEuXu73WJp4Ft9yszJ0OHe&X-Amz-Signature=3a97857e45259056efbd81ede2bed192df32f9719e2a2275e0f3370ffd9955ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
