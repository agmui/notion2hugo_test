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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CP2HIY6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTl%2FEia7zQ%2FjnQQcIo%2FPtH3lMcuQFe%2Fhcp7t1NmJH7ZgIhAL7UAOCR9nQ%2Fbt9vMz6maNLEW8Yt43eElT5E4whEqMLpKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyz%2BZk272WiIITtz9sq3AONAWUd%2B9ap5j9bEUudVQZ153zSayLES2lFNY%2BoVs5hBnIDjjQWYvcTUkM7AhKq0KhWuLW0j7UhmMyvGnWuDQzKOBTnF6U8ofupb%2BY%2FkR8WfC%2Bq4I7fRirkh6KhXlHPsaWLa6IxM1CkUDXla8sYpryZ2G9C2WbEwzrWTzVrNrKkAUr8xufqWhoPnVuiA8MffXPWfF%2FK4nlNrT6Nk4dsSADhS3rHNbXQrPbPJE4W25Ya6N1f4uXHjnyNFLHR83uWp7JFBoHJzVfUw366ehbbGxEkuLf30YlE5lKyCfnaaIBEumEjnUUPMvO2gHmZqOHMAuRVawQVuAgneis%2BdZczoTIwzrJfJDjAlnW6znlPxwxksRkFfCCGF42wT%2BC%2BI4op5C40N3eK9wg05QQg3LIxeCV1utQ8keMjWee5cxltNfVYYu1bvahsh1tx7dZBsK%2B9v18oCHRduObxXPezFq%2BfUK99IdOylP23SWi%2FYhi%2FSDX1I7aQgkRKhZKs8pm40ChcLJjEFZXG9eohiWpQ5MzicKSeSjzzEsDshuyFC%2FoV6S2RLaKNGG8VZZhQO%2BikK54SHwQ8XZRqtJDsFAuREJekxKoActJEcEerLGJ%2FANr6QzJvMbNeZMxZ4XWf%2Fuod2jDc%2BPjDBjqkAdPLI63Gsi%2Bex07K4DXtZkkn%2FUHhENmkrHnxcRe25aZW3idO17wnL%2FK1IrYN%2B4J1KeLaw1b00QXJbgJvXl4EZemmRKw5iC85tL%2FXyyl5JL0SwtErZmuXpbwfbPSMaK6aQ%2Bkf%2B5mlWk4ZrM22MKRxpA3R5sHykYWfdiPedu4VfiK5drHbp4H5oFdHOkItJfGbwh0R4sCRU5kvGEUBm5C4AA9hEnIc&X-Amz-Signature=c3c35bcbdaef9867ec8e4396b691a3b601a85925144ec4756fafc486ba236350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
