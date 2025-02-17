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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDD5HCOE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCmDqoSPQhAeDtZ6RipjsDVjkkZWSwN9dXE9tpWjyyuywIhALMO2ucp%2F16Dw3IPiuEiQGGVk6t8FcyvQtiZoujjm3nYKv8DCHsQABoMNjM3NDIzMTgzODA1IgwkbVk9VFJEUuVfQoIq3APCnE8U0IebAKvq0wm5uU9RrM9fprjohKq9o6Y2ys8aK1mlUx75Nz96r3tskfBobhLoyNzLiFBGZfy5H%2BZa1WhqC4Cvh9M8fip01XIvxknsaV4PMQZ%2B4J9TdzG4aVWB%2BSAr8yVYrUf0VAwG9Bqners4ieNyVNjaDNTEg6dcDZh3YN0SM905bLeNDcQZW5LUGF77AZ5Bbpgq1hs0bAt4Q61Z9Ux2wYH%2BmBdY2eykVJkydOeA0pF6yLCOR0AnPX9SdUd%2Fi6rd9axp65mCAg3CH%2Bsir2XzVKNoKQUXSTXlszlVGZhWgGkRjA4PLicxf4415EROBWn0KTQweUe4uT0tsmY8qCmKvZcDnTDA3Irhf0RcBq%2FmFWO6bI3vYmsJhDfBCP1y9c%2BwsWgwjqtpBIX3UdQXzakv9Bv9wP1%2Bb%2BUq1md4Co2iHN1FcTRavtm%2FPflW1P1wyYsf%2FAQhfIR0171gLTilM%2FGL7YeS0IMDINhoNLtpEL1mt34YR6u3EE5OjO2nNdVTBLluum2EBti2OA7kNbwEDWENzoO9P96o9d8WXjVEoZIJZImUBa2lOoz%2B21S%2B85f%2Ba3a0WezL5JAp5h%2Fwructe0foSUQZLk0K8BqzSlsCzmAqHnNMiF8FB2wLeDCt9s29BjqkAYZRjDYB0Y5Eu5JCFeMZ0%2BlGiJcbMiKDIsS9OBLXuKwYsRfkKmakMnIhT%2F%2BY20G7DaYkzphL0jkviTQ%2BJYzdrJJU13Nr0dbQVBLuPP1oPu8mgkmvNFpSb7h8cH1ltngQpbXxW%2FsJjq%2Ftxeq%2B9aHb%2F6p3CL6INbfmI3qN3pSeigxvlVjhFZaevnxAJ7vjaq2z5rt5C%2FtGgHpDPJMWh52mRqnURoOE&X-Amz-Signature=a72070c3ae31664f79de7c01fb40334e8b0147b107331b3dd49ea71510700788&X-Amz-SignedHeaders=host&x-id=GetObject)

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
