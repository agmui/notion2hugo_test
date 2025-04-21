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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP72ENVQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQD0WKQBuBNL%2BcZv7o%2FC8iVXAdlE5RBS0FJ5d%2BJlH0MLCQIhAJM3Kh%2B5zNMgmW3s6S0NrxnZ2ziOx5P3UOWtxY%2B0h0REKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFva0G0Dg84EOAyXgq3ANlGvjZjbLKETSATbxpvUhnMhEzXBIHqrN58rhCGk%2BrufQs60kRCrKMM8vV%2B5JoBG28a0NSx42Dk%2BS3eJHH3RAh5t8JtsF%2BeOiIHLCwT0%2BxeN1%2Bu%2B0Y%2FzrHxoDasFYYJWTH8JL3A%2FdCd2EWIsdKHYBEBvfNSRbrHyzjFMnzS1Q%2B7T36%2F7CtCLjQ%2FSyfSVFtaAHRXX%2BBN7LvH%2FkNPoTTfIVqlFZv916F4szQx5OaWPD8jDp0%2B69hlWsdpQvKYiN41IP4%2FtRhNpvjgTMfIyMaYDUlKUaAVt5FRyJcuMutjfK5JLykNFUXRPbtrZvenh7uUjKRQsQixTA1VoxRMDG0NWyzZgOaOdXs35F525P1HNfqNKijK2zNipOok2sBaISjelovpqG0n17aTX%2FXRJw7Cf3mzMmqGfCmDDUcGQYMC6%2F%2FHf9HO8PCW3o4PWRRm6F3a%2FFhIxr9ehfLij%2B%2BwZ7iXGC%2Bqirae%2BnzDFAZ2NNwsJZVurxLdgFk0XiNA9EnS7jYWID4AWcEf48F7k%2Fo8McO5A6ipzwdob%2Bmafjxf3L2uSaUXE%2F10TnT439n78GfZybNvxezOeX%2FOjs%2BBA9%2BQURKijwK4%2BshOsEVV919tNBkYRXbGYgreVuPUhnRfqLa6DDq%2F5bABjqkAdOjhwhUcSytGwGv4luVx2QP3Cm6aOVyI189r80WiLl8kLPN0gdITtGSfm2ECrf064KFJoWDndiPWRxdsRIgJnr3VsenzdSFJhSiTrhn%2BlM3%2FV5FBy%2F81hI%2F%2FLLpy0kK2NTiiGs8GYcnHrqC3qDCx3139o94cjuFMNxE2Y6FHCdM4GOxXfET%2BeQs028Q%2FQtqPfbTIkX44iwaOdqxTDQ%2B04e9wAjo&X-Amz-Signature=cbadc44021816f6740e0ebd1e06f4afd3b8c80a7cadb23c32ece294555ed16cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
