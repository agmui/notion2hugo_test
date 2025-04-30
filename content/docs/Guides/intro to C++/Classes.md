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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPSLN4M5%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDKYeGzUzR0t6Be2tH0qoc7gIeyxVoaHT7SZQQnb5UFrAiB3BcZI6sizHvhu8e47P6ogLdtSTIckj1kHQW7F54yrKyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqPV%2F%2FKZvoduv8GoDKtwD7wbayWLMSzx9dyj838tlSQhgH4RPghWO6FF82uOvaJO5S2DcmM7zPWQ%2B8ARbxbYSa2xNW%2FWhgmlRpb7o%2FZdAgK9ESZjzB7%2B32Aj4%2FAHcc3VosRvM0ixABVD5hTZJoEtdPN3wrlWW9yOjx%2BstaCDc1FzvlookgvOzZk4R5NEKwGgWarSYxpVNVW2AMPWjZsw0o3pBNYomd%2FQZutIm%2Fl1YdWZI7TezOEwVxJtxVOkC%2FIRjXnClQPSqE8nS3%2F8CHgy0hvYEGCITmwyCLmTL4MFTJihNB%2BuZSZBKKt2WNaXmLarXm4ao4hIfHnftmofBxjszuh1sTouSvTA6QjhT%2BAPQu%2F3ez24b6QRvvITlAJ6U3NQ1RwbB6XErzyTry4I%2BYr7%2FLWxQNXUwarrm7LUrJOnP%2BUA9TMYsrnIt2JsRGNQqgLBu3FADOJkttGhSk5wcGLw7PYzJW1CWAUCeQqw%2FN6bWpI2w8cDsUiXHGMs5C%2FDdjzBYkeoiKIbhuLLfXaHJvTrgGiRAmPb8Qdtc9aCx%2B%2FNHfswAF7SrmnFKPn%2BBQPCLNrnWLrC1rxnLo5XWCMmD8aYUTsYJKMiH6ZtbaEzQZzNQqYMh%2FYc%2FA25tMeW3FCdHlkki1NR77XRNOiT2TkkwivXJwAY6pgFEWKcKG6m2W%2BZhVzLFUPT7SsUe8m9QYkAJB8oZJNvTFaMPX%2F9jyFv1NpT8YENwfc0hYOjhMlx5SuGLCUkmC0Jnkjr9l8m9TCwflgYwobMWbijgp8WdBIWJ93wXBvdDCiT8UNKl2t%2F8lqEUtiy29EscmLOk740cW67OhSbF9pBjHnpMkVF%2FyZhdIEXgNDKD8kappaK6a1Vv9oVQDMR%2BvPlw6CoO%2Bg8X&X-Amz-Signature=53ca5e6ecf0e1ea2c1c15c522f6fe466e28ec3499ab2a4d3cc2cb5195f2ed558&X-Amz-SignedHeaders=host&x-id=GetObject)

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
