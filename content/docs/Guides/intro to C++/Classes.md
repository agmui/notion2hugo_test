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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR67AN2D%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDVT8%2FldDxRj1dB8cScfEZn5N%2F5pYy%2BXFCROa%2FB21vu7wIhAJMuUTDWA4JCWQkJ0tIEw0xH7gawlgKzgOBozGXGuC0GKv8DCCAQABoMNjM3NDIzMTgzODA1IgwN5PRPOugMGxrFJuIq3AMsJqNfKZsui6OfKz%2Bo6yIoW55eXzvEqPFEajm8oa%2BjGxXJpGt1bZZTgNI7HAJLu%2B15GsOb7qiM%2BZHyfn90Q7D9gpvjszlwD26iuxXqWuIQ5FP4XHQa9ADTY21ae9NY1KhtP96EL6q2PvP49RyT1yU9GfKm%2Bg8t5EIcbXNjq2H5KPVbPiJ8XOPczFqroDGbio%2FARC1nJLVgKbFznUNQmXoje46%2FpHzxPR%2FUAYTPvQdMaqvOCjYbqsxk2bDF7weP%2F2qz5ldnMflV6jf6dpRBbKWEDUe9wCSdNIWiBGnfnla82z56Xjh0LrWHCfx0D6PcicG9NtQtJ1MTK2nNr5juzyGALU1YZWBl%2FsKQUUeB9Ov9zOldyjd60gnoEH5KFcIzFFEG%2BT2cAFLFj21NPlprfn0eBzzkDB0Eh4%2F9637URxain%2BRHgzhUmXeW1A3WSL28QQau2jtx8mSpFgUNKyMRKvrvS5R9NTGg8bF0kyOsIuSqk7DrWhiC%2BOhMKNWFP%2FSUJp%2FmDzKCtZ%2FDRvcFi0mA6BXH86SglTRQFTRuO6NOGCOnHivwr108pjIRY%2B8aV01nfNM9LYSHxsWkXM0q5hXR4Qtlxv%2B6nhcF1%2BTTwDayvPYM7GAZZo%2Fow5THoXHNKDDWs%2BfCBjqkARcW24vA0eZ5ssDvZmr8xSaRXrbHoNSTXAuKrPewxSkWNg6eRIteHjs4OkEVxuXD66boEDSuIPg%2FL5fFdC4wqpQxA%2BWqjonGVglfUDClOfOyt8hZUhOW24G%2Bg7WmIGF06zBXEMif5mjq2MDTXyaUaql2vjjVi3zKzmcpEe9R7U4%2FzcvDpnC3jxOn3MMt%2BHC8Ro8gKgidye3vebzjJpDKPLoaP1Qd&X-Amz-Signature=474554db236de9dc97a1902900d1cf257e5954add7fbce8240e454198ae18da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
