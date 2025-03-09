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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JLQFYM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC5G5uRzynDR0WhB%2Fih8Q%2FjcxQJs3liqImJqx%2FyVlTwOwIhAI7sihFnSxLXhAjvKA4z574lOl%2BGuSP1i1a2X7CTmsTNKv8DCHAQABoMNjM3NDIzMTgzODA1IgzgP%2B6vtk%2FWB5hhYG0q3ANFG44xjRQ3WAVhprum2%2Bk%2FxVmesoqpn%2FP8CIfrjqj%2FYOa475ZifuAAHRDeRf4AMq%2FhIfgtRyjKL1Nwr4s1iZbRKLqy1eY%2FgbglrQQey1iHD8xDKpe%2BRT38SRAChbJ6M9Z1RrqyDdAyXgw2KYBBAR0QdDFKodXf6Ghuh8i%2BOwUBQ5AQP8NEHPz5f6BPtFw5KFVFtVTu%2FqaEX0rhyqrU4NALKaehL4mIpDVkylorx55yo6WezerfM1%2BwFSuW%2B%2BJH4%2BwV%2FkxApwffjAA5gDLCluCWoin%2FmB3ISq1uM1XMh7ORRi2lftcDrTvYJ1M%2F3eM5E9a7dNdPR5netz2HafsJVdWpudr%2F2eXUmgb1EN52vJXz3G65sTq4RNySSEbmknU4WQ01ZpMYVBVQdmtFxvaT5evp6bNm2E9uCTgD3uA21NeH%2FUrmaPu5Qz7j%2FAVLDQrIW0QS%2FYpE5HDxmLu%2Ff1vW0WT8ZG1V1gKxMcGoXKjkp6X0r%2BUB9XxQd%2FDPDDyvPs%2BFl38bcovbeZaGJvPoSctW0e4rNqoW5mcnwyuGSwXdjBNXf7uF88i8wpmaWI4ik6l5rWQahKoPkX6dxNinQhlLFXDe%2FuPrSy3a7vc%2FfoS15pWX8vIFeSaTCsb18BcFPDDq67S%2BBjqkAUGzzp0EXkNciMQ7Uh7wJdWqH7g7vtMe%2FeeUX3pT076DwO%2FIsL9NjnA%2F43m7h2u%2B%2B6lOEJSQWhqipaxt385%2F%2F34l2%2FYm6nEq3oPy8Krgl4NCifi1vZFpqONbDenJdZ%2BgTATGZ1dLeaqXQ5aaGDBi7sSwgxle1kr3kGi47IWn2CTJcZwkK9CBWXjsf%2Fnn%2BTvMyCxwlLhvRKXKvg4jQy65aLifoMNF&X-Amz-Signature=8e482d84b702ac1447a47d8513dd36142cced3220f5916ac7c0964937220b019&X-Amz-SignedHeaders=host&x-id=GetObject)

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
