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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZXQ6BBU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxdaZRtlm3Y9r%2F1E%2BiI5G8syqQ5AboiwfRcXO4VETS4QIhALe3pUvW%2Bgwh%2FUVEe9fRE8H7tVovxRPZdFkYJbTcd%2B1%2FKv8DCCEQABoMNjM3NDIzMTgzODA1Igy2t5bJbiX%2Frxrg5BUq3AMf93reLIkDT0w5vFzOfkS64Ck%2FQtgiZX8j0XWhlOu9w4izQfw%2BTfJA7a6SpelAkTbXPpIQ0mNylJwiNMnSuqbS%2Fo7JIcij8iTojuI81O1hL7Nn7Ly%2FX2cJUqIfQUCC%2FMi%2Fr8YYn1MDF9xyJkpPV03Eo1uoFf1W9aiyazT01%2BtC7%2BCuOl1%2FBmZEEx1mYCiql3CVzNh6i4rp1isO13mbhZ4z%2BHzi48gdIY5DqrZ41ZvHCvF1WuaeTHV56NoG%2ForpFkx4ILCCkyRw%2BOHX9Vp%2BrMeZ5ccmamDlAaxcpvcXSLt2yjrOvRF%2B3Rhwgfh8FqEVUmfPSzQDVvu9C6hyenuDdAbF4gOEv03tKeSvlnZ3aKYPp9bf7%2B%2BRRgWZi78%2FBuZrxDvzBQ%2BhsBxeQ92b7CWOxMn7vJUtK%2BN%2Fx%2Bx5LxxIBAcm31wouQgQVnEzJapM%2Fg8rw%2Fb40VosW12XYr%2ByW0qoceJiuxr1smAR8Q1PjC3mU8QFTm%2BjJQlznz5N9%2FVGkcRf1fUggnKOcytaQ4pMyKZv9Pky07JFICnfp9G37V44KV%2FrEMCigpWnOygiBAwR6%2FUwCsRQ1uPKKTs0wXUuMrQlQD2aduRbCRCy2wDhPYNJTogS5wJhNLGTwz2OLxaMXTDm8O69BjqkAetULBVApNJ1XTz3%2F527B0jE7hIDJoJk5DUyqsfaIg5nDNXF3oYhUpErA%2B5Cp4saF8Tn4iBusnti3MAOPMkB6zz2ajkmWVTz0%2FOO4ZbOwoQPJ5KJuP2NXuv2KHduzglJ9fIRLhhtxSqEt%2BBkGTXBghLXU2S3I4IJUXru%2FFQziZCVV9I5%2FHW8qjn3s4C7%2BykjuTDvZv0nQNilEp%2BICO4VxscVfket&X-Amz-Signature=68980862fde8f19bf8731657fe5f10da9f5cf788a4e882f73d0b2f510b5d377c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
