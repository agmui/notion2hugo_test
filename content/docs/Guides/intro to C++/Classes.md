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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY72AGAN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGovPpYmSe0x0JHO%2BIry4VC1xFI%2B46odUxS9Zc9HFKjiAiB7hYCXZI0Ky%2BkL5nCgDUYAIhOq0Y5VgzotkHGjxR3CASqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzoK0URZemaqjchqeKtwD4ChO0b%2B5ede2c0%2FGqYZCpV4H1zQnLZQG3Js2XZfthOyaOZHR1LSARUQDTxO%2B6ER7EXBMuwwBWGZnr7TDuaPsHrUo2INLRKbbxIAS1NLoDmQQtEwW9TxlabwfbRsCPmy0ixGEoPMoaAqv0BiYCoZlGrup5lGacs1rNHB0cOSV77y4893Sv9Tkk1oqUZiDcsIpAyP4jODWmA%2BHUMLgpMBrX8leLbrzosQ4XMj8VuWXSz7ZL%2Fn6I8oq2hMWCE0vCyeIBtvi%2BGOnp1RQarISkgZClzCSpoeveOATje%2FeocNC4Q3cl96KenJqNY58oM%2FVKC%2BMl9YQEDKuh1JRadUveRXq101auP7%2ByUcu90qAex1KttfbxmjUrjuaSElg9b0bDK0Cp7hnWL1lLHQVMGEfgLcwIi3awvSUJsEPHEVUM6su8nosuSubeUPpH%2F%2F%2FQPG%2B3qFSIy8BVupnGZcEnmyaTSCewPlr1azz3dMchriPd5Y74a5nGP6mFyCAkGy0vrtEjLP%2FbHVKuRlHjYzVI4T7reDOPDWwoRB8wDxU8Se75RXh%2FSciKa2q74jF%2FPtApy%2FMK4zfUGd0St%2F0qrMXqlsRnIqLfYhlPs7AdtqAbQuJ9VdWuR3w5pfpXBGNX18FixUwqq7VxAY6pgGYyw9DQWwa5ZOUOUHXmfTA4asMzeYOq7Y14wURs4pYmpwFnk0MXEbuDhQm%2BWIenbuc6hkikAKfKvIxscMPt4CggvCEJH5cBTJRZ3n79NW2tqKCOckm6X7QAvPJytOwagk7xEWN1ihe9H5VGsAU0NtUv37NEQw6MHuqTePh2q2qBVN3dwtvZWmxuw4rMapggd1x6ZcFALI5FEoM32K2htrguVlPugs4&X-Amz-Signature=28cfd54db19b56ff8f69a534669cc6b083a04702994c459ebb23e19b93a5e57c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
