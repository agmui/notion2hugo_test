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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFA5UA73%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVmN7HARjC%2Fe23TINbld%2BLWnOWQTPK0gOmiIu7GREHEAIhANyzHRlc0WatPu%2BE2AV5W4pcdqg47RiGJ%2BQ1jxLd4ybvKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8dnmDZdeRM8pDTa0q3AMYHOYqgyY5CTmGWmi9rtrfVV0JeU1gYt%2Fyqyj0gs90W7Is6tVB4BsBuvyToNmQ%2Foo3exqJTJzpKhPFAjKvDhyTOezGENBc406Whdh8U6zPhplJojVYW1qRN74Dp8VzANPRz025cE%2BXPLgNdHE6natPbGIW4XmKftYKAfGsKMrHwTMePBLPiqu0RXAa%2FyMEQyAvZBl%2FTuVWf1w9G3QP9%2FFScfcSJVHvHbG1%2BzHJuBIo4TVCfner3evYdwH%2F%2FRvtH0QoLXLMDQGf6vlollj%2FVMWVkPERAdPJCdj8zpXG5bShHlY7iBIaADFXe822o1LmqTp0HnyWPEcfDmwtpbUG89RXV%2BkVGUyg%2BW71O7oV%2FjN6dfQK49gARzVxs%2B9JU0Sn%2Fl5MaUNdjKiIORqnAOMuZDniIrmmdgmVo4oYmNsoJe7JKSOdxSBunki46PTnx%2BXqxQfwpHvgYKitMQhtP3RkkzSc1TKJ3JKHxtKf%2FnYwhtFNoXHKbvWbdo7tmen3qO%2FHaWL4qRrSaylqoKC%2Bi1MVKTKL0M%2Bmm4RBNng71qzaBDGmgb8krYBECOG%2FqUViCcEW%2B3kvBTiy55iDnLwf9ffzSBcjMvoeqQcsJrxVGdMaMiwrO83Wg%2BfUe3ZVk38H1jCTz%2FPDBjqkAY7qu4Xv%2Funja8PKTJOrylMeo20qTmhkljXhWufvJOZO8DxsjWddpDeiROulo9On8Oa8TBNBz1DvIvnzC2RG1%2Bc1GzALcaFKV0iDolE6N6U9SMk3PHKb%2FdYrsxmOE9UGZMVuZT12HCHT7hRVZSHxxMtJDM%2Bxz9%2FJwau9HcDQlSsiOLTFBRK6seT8RQ%2BmdytLd8ttqBF5qEeT7qDhKb0s96L6cdxt&X-Amz-Signature=68419573b0497706f195416568b501f92d10d67c6e1fd99b8cd4271077a1111f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
