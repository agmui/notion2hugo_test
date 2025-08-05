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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRN5GWQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGv3Cg8Jeej3VEG6C7531N706KuOxYugfpunf%2FF4UsJxAiAKlBDL4B%2B%2BBMk%2Ft4wxbNRYrNscgJePUoBIXcGi9kvmhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMqX1enlbNM%2BHpC4BSKtwDLUoxc%2Bpfrbe5FiL4LOMFxtrXTikUkf%2B09dY%2BkmODkl2jnpPfs3ErsPaaCauy8fuaWJ%2BxiqDOtbWFr8E4EP5UTGKOv4c0AsHoqO4gK6KdmPt9Ax55%2FRNYQTewaaHe84X196WP0FfvTO4tNQdaf6SkmCQ8Cen44zrwQaX9ERFHmO89oOwJ56H1sT7j3eY%2BQxS3Owv69tS%2F3rnLkkaaB1qUR9%2FYu6cMOPUVgUOvlbYkiqyJOLQ8%2FDhZivcYe2R3ezONEjwquQkCGrt11YksUYPw1vJh57MLR60wC45NDk45y35i5aEOZJDnQkBKfQoKf0Kqd4DUuhxUcJsL0fFnzsV7NTL2cVNGU49Ne6sbffzI8DRRHEWgbp7htDii85FKTwMOlEwIdH75ZgKJHyo31a7v9rwvZgutVgMoIGh7RBUVejvDS4XLXGnM82ZBslRWezuWJOopSSH08SK1Un6GtAXpnXJ3aCLEOmt7xOwtmXWVTgogQswZtgyUrxxLIoOzYWgvLUZH7p%2Bve48qZfU%2Fv4YgkvT2DTWzp6HAAwtCc3ryvxzmwe2hTf75hrWCpEFy5NSt0DFyg%2FhXqyUY6%2B7WYocMSx483G4t0d%2B%2BeSItn7ShnDH0euSIqdBXg%2B7Juigw29nGxAY6pgGdCZ9Pj2CaDzlNk32E%2FZWMGYqBT1eWzPraCw5dc7oiPAAaHJtjq6mEqAexhYAXcdnVUmJNOePNZRxm6Dp5d%2B8sl4v%2FCcM9scqdy7yXf0Shk2l6WNenUSc8kjHb1pmfRCxH7THIrZP3AGf2EPukryyHOBTFCoHQQgj8ByxCfmIQXoyJenLPDECR8xc2SQLyiXMZ0LolpOANrjsevYBnqojy1d3Ydajy&X-Amz-Signature=9549ace947231f54f8b9f421f88aded8b702cce75fa4bdf42499cb3a919832f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
