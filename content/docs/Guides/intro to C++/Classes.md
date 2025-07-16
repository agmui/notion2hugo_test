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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672BC7HTO%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDUvaV2C2lCZLFxTZD8akr8OTtJ5cDHP06XCzTVQO7AWAIhAP1tKjlrm%2Fv06ZrXBSy7dByq4CAcmTLtCaxOhVpi04guKv8DCFsQABoMNjM3NDIzMTgzODA1IgydB4%2FhWkhfEoPoRJEq3ANtOy9x%2B4jc5xUUL94t3NOvjw0u5az4udK2OpaTnWzACGr0mtyC6AW8fCIDhG4udC24ZaoLMtF18G%2B2ZxwZkOEc7vhrl9%2FVtESP1mJGYtdn9RJZYSXBqANFY3b%2FpCl8wyctViq3Q3YOn42sMAKh4nZhcP%2Fdcm%2FNF0qDpcBRsIZ4oVsVzghrVwK1eK3eMSGv24v4QgBdqfX7pAiK3L7PSV8hHozxg3aiUEkoclNtK9W2Zt9LkAWNIXp90Pu4E3MUDHr3OtiTVj4krlHAioNowNxE%2BoH3eNtGxeL1QVGo9Fq8%2BjqIV1LnXIdjaXEmCgts2PuyzSNQ1jdFVM%2BfwKVU68gTE1t0jGs7hgWkwRBNzZSDz5Efi2sxQ3PMrx3dPfGHiY0aNRsBnEDlv1t3laBFGsHsU013g0na6v%2FqYWCFOgJfTIDEIIf87qUeqI3FBMkQOzTxYvtQ8JyGszpyUkJYuWKcD3EpLKsnv3yJ833PElk9bcyJgl%2FOjlK0L%2BG6zPnrChRVmY66B7bKbYeGj7PVV6%2BgIUwG4LBmMyvybiZVds%2BL0As%2BoNqX6ehdQDFxd3w1dTylBQKiTU%2B8dwbdw8HoY%2FtTrYDv%2B8dF72p5E%2BpLOkGIPh6P4yBZeGPBuYv94zCj6N3DBjqkAYiJp59kMYiXBcqV2bkOs%2FipmfZ9BJFAtXIGKJjonM9Ce%2BItfJaav%2FO4Kxx4Bh7VtGaBKNehrxTivDFhom6Cs7OFgAZjU4%2BQM9tmBvPSh2ur8X27A95Zg%2FYnAJ%2F9WlFJOlxoLGapZbKNAFbRkqvwaMrr0dsDI0smeyoJzi6imQ2b4iDVMPZXwATy7Kgfnr83zBdQuKuMvRpsMMgmi82knmfvo8MM&X-Amz-Signature=6563d564ea7acd235bad982538b24f6dbaa24bd8dd55d9b5776f21e1ed420a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
