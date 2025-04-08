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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZODICZH5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuREX5VqnjtW7QAYnV7zozq4FMfNzrQ0fV4gmVG9tS0AIhAIIrTPFsPbZhiWIWm9yXsL5LcHlpacXQ6%2BqlbiN2Nxg%2BKv8DCGwQABoMNjM3NDIzMTgzODA1IgzINsPXgpv%2BhLEu5NQq3AMzpUao8350rMIR7Dv3G8quLU8CoJSVcT39UkdPlnA31hIJGsZN3IJLsNW5Iuil0uUQyNXTGXkUCvAfruek6h8vrbS8msieJbDhPn7kDjsnxdHgonNh%2F%2Bz6i92BGktvNOR78TXuIkzG4pWdcKgdVtR5dniEX0%2BHe88pMitEpFSHZLro8AwONvhbnkCnY%2BgwWWprY8aE7kGw7DwT%2BGMtlqNgPl4%2BPUgWx1IxZuAlYQnY4gNOazE7g5An50lQeuT5qNMwDtvNKORrD60frUXByfVS1OMYaPX6IYXpjDJZE6BBnHRSvkSKJlkOmXcp9roItUZJHkG9b6ejK%2B6OvQRNIbQjRFcu63nrtZR7tGVTIncKHNim1m7XPBg7cUSY2gDPQkCyPGrnekWVvKlvhguJyKIlGVyIBQIQdj%2BHl9jR1jx8JLo%2B9zXoorY4%2FBM7qgLeuT%2FDNrZ6N2oTrbqKllLykNcqvLnjjRrhUeW0j9zNWiVCvNCnoUP9etxW7LStmFyUGye5H0yMtIgDsyqfApmYBsQOUtl1daMMT7xiy0HJbkH17tSmQ5%2FlLw7M6lGFLB75tmyHNGRnjOLk6YVTRmFn%2Bludses%2F1rHfcmtS%2FkMwMkAsE16xTmZ4FmzCll4jbDD6ntK%2FBjqkAeno%2BwKAZYwdaZUkEo1dnb9uag4LfWsj2TLBOw1Qppa7W0%2BXAYOgWyAraFd4MNlkeVKcMVqYXsEh%2BgU7eaixm2aksstsTMfiTTUlUnrSMFHtVK5223VyVc7pQXndLiHa9VCxRPAvxCrBwuKd1%2BExegbOF6WeT0gGFKDIur0reLCtLKXhS3H9aO57gwtssYcT%2B7sr2oOOMtqk8hSK58UcZ%2BA39wzf&X-Amz-Signature=40a1e1e90684f7f1b210d28fbe790dbd77e622b60393a6e37037854950e08f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
