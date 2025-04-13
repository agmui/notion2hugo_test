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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ7PEW6M%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEohjQTy%2FSvAX%2F9yqcuz5IfPgXb02v1%2FHpOiTYkw%2FFZOAiBondzjCKlY2pzxPFUTTni3iZV93TZZcPmcW9hMBXrWCiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ8H%2FKNsbachPxV%2FFKtwDEqIkUjfEE94CbHt%2FgniRHsH75UH0nAZ0LTk7vUt9X9sIjxsHgcIAsPeMzg1o7z%2BbMuG1pKTQB5DodBZnDMRRXnAm7c27DTSPNTNvyEU9ceUrzK25SpMSh8K8u%2FK%2BP4FWAe4%2FmKSlvpnzLHIjlhuf4NxVzH1uzc05mekEKGtC%2BYVV3ZyHpzjUaHkxJapYukIQrIsw5PKqzMO3RD9ni73zMen8AYg%2FsgsjN8uB4v7o9TyErErGQNbrkFQFJf2mEjKud3uDJCDl87mtYU4ybrKwBGiExtmc%2FQe7N9Bg7gT2oJLibtO5DJVGGExi2Tab7f7avw8rIlbbc65wDkvPAzP2Eo49jxtFEV3Mc%2B3yq8tqSQIA3wk05l6xfYFqKhCTgZFip4I5NaARLIt4rrNZ0QbRfbZm860%2F%2F0GPvEyGm%2F8bPAQhV41vKRWy0PN1yWvDuhOXJeUP3p9uqDO2ws7CvlEm1yp%2F6F2Z8u%2B63GaYLsP9UBZL0dkMY4u9tZ%2B0jXiRFLOhwtLTQQzEfssiq%2BGwZV9bn4S0btF3dKu2MYnq20t7Dyq897shUG%2FJ8fonyYadThGqePbYnEnDahX6CwJn8aEcJBXnME%2BaCoyqwExo6qbgHqDH4z2%2BxHzanhyx8zYw6ODtvwY6pgFTuEbOwUzdqjIoNNourXZYXu6RJCoP%2BHqhVueiKE%2Bd36NOLOo5OVfOAqTA9u2tHIveArhi%2Bs9u99uFL3G6ohbrWarfTz0DvOGoRV2iIZPmgvz97uZeosvjN1xyrIIu8u5pyNZiN9TdybytEKJxPQ12ymWsp8RSBiIHXCj3o9NUmNtRXiVM75CbdiHoy3Qklct%2F71MyXM%2FAFfL7gJabMm9LWsxOepsG&X-Amz-Signature=3caa590f1179cb407b27072e9756d637328b3d74d6a8080162af36ed1539ce0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
