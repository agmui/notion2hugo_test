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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU5DXJRN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDZDvFEZqR5CVk4g69zBTLEWjN8WXeLIVQ0jb%2F4OjXIHgIhALt51BQAu78cBY0Jusrz%2FeVmwxXmYoBVbgSCuv%2FDhyBmKv8DCHcQABoMNjM3NDIzMTgzODA1IgxAAGzHn1QNiSXxIVUq3AOAUK0IjPKj8VO46EkF3k61y0Cmj1Fn%2F3sq9SCxaCo6Qz1sT2LreioZc9TjfhIeK43EWpAj7UsiQDNqNMGkQ7BVfHxB6U2nrUnwHZehyQ6b7mBbct%2Fm7KEJsusFOpR3UJIKuC8pQUflKuz9HV8iI8Enl69UB6yhgfdEbbsvBUyhgxUzqvIwq5JjJkt%2F7YoA7VUe9qnHCJYcCsXwCAw2uFA%2FtjBwEnkFlzC0MdpQAa8Fdmsa5FfFLsWL%2FEPaIcFMKS%2FbuFLY52R1wMInCcYBVbDtIEIcj6M4gvTILKH%2F4bHOAe68MmERjU9RWo8E49EcT%2FfQKexTQtqLUwP%2FXRgUj2uLuvfcg53KYzNOUSa4Doy5DcUYbLwHpl7IZNn7qrJwoU3PmPYe2o%2BoGTz2ziTdHbGeaEEMWpBxJIFuwTtzCEfZACQmQBg7plCPsD%2Foac%2B43%2BQmAMaa8AuG6S8c8ZzmutYmwjmgiADqHEtgmY0HsN3KO18LJPVCtXl6ukGC4guDaqd9%2F085HhdTEWteP4PCSSQbaCMAzfiNUkasTnAFyun95lq2nz8aW60wWju4YeVo2f7ttminV0JaxA5I49tacrtqV0lXZzEjSYD%2FTIZ8iu6y%2Fr2BgX02iBAOl%2F7zRjDsmoLFBjqkAT1Js0tx0y%2FJ1jPIf6ZP9PP%2FrBYmBp0N67q5PYO55lNRnEKP9KGI3LynGfINjJyFXjCrOAZyfvG5lVwRX%2BFmjxJbhp5LKg%2BJa6v09vOEYXwqLo9TxUl6IiJc7vWoRMI8VK6XrPJnQmkXtx3ez9iYD%2FqKw90ysi5FpiyIy5Ed5ej6kNSge3EYge%2BsgbCMvl5CMyTk1pE3azpKkBOITpIVGn7OS5eS&X-Amz-Signature=a9c667d97841632639d7d6c51185c5331f9b1023ed7b89c49bfb9ebd08381e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
