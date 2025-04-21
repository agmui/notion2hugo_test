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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CGPWCOV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDCIBFkHmoCIlr9nM8OFsj9jm9zNpMrSWV7yqjNXf%2FtmQIhAIDave%2BqwUBek8caTRYNJXg0AGVlwMfUDKloH4sum1KLKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLoFqyLyY8gT33D2Yq3APkACO5ziEusRG6ArHTilqoQ9%2FDd4MdKonP1n58gH2t%2B8qBLqF%2BAFRQZY8Riv5AU3spvLQAUdQIIWjG0Drg3Cnf7bFnhSN4QC7q%2BrAt6pQ12crNBeCWtlqMl7ycpoSLgjjO39aGXc5e9g6Rxadak4B2FvAL7qU%2FdhJq5aJnR7SPhoBSXRcA0ubfcHFQY167dusBcvUbP7NOf6Qt%2FJOno9FbPT2eAccrR0uPZO6oXfqy0kXYRgJ81pnstaKd%2B3PpTWzOzGj59RdOCwAURpiFktBhC0JPjCAzEKMKe5NaH1Sd%2FJ0I8NPBHUsPrAqyF50hb7dnO0YZv5nvorZtXmn%2Fn7T2nDbkJP0%2FnrzeO0YQ5jtOFeTmiFKfTirs%2FyRLX%2BE8SMVVY5r5swRQsQIlvtGM65lqsbsTK4l%2BdmrHCpyLzVEdS1zAyi7LFOJMAOTRz6uTKWSCcU9J%2BMe3e7Lx04d1xS1c6G2FJKqkshW3AGf3683Eyn8XzdMoFFugKUMkUn3tRG02lQ2MNXvvhLn1sJLgsLA8g2449biZBgLKBT8JwWTqYE8mjJAs%2FmZJ98TbXQClGmRkX01X%2FsBr8dlP%2BIQRQNKMhZgdG4r0g9vd0AHGgWbjSuodC2mSxSNcPOCdKTCD2ZfABjqkAQbFLwXmBBTh9DFOAaN9tNQAxdlUYRMXoLpxCOGlTe%2FPloctj%2F6BQkz4pgZvbVuuuZmu3Gc5q5rp5%2B4ruGlfpBJhqeRWOMXNz2c9OwNWoYa5jy2OWbIZzY0434qAd4l9NJB153LJupDs9gtk9DbVL5VRGHh3D6hui4N4WRclaWBt3JXkguioURuVxMmkb7qU7092hkSzo84FUrOWRE0iUL1t6hOA&X-Amz-Signature=c7f037c289e02d4541bc534b7c8f2ab44579ffa7b19596ceea54af7307bc936a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
