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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOGBNXSN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDoHLFoqrcOvQsx211Il3iaK314nA1venttoML67KFPagIhAPRBMF4AhlF%2BV%2FbIA659O2IowujSRwWB%2BwC1sN00FplrKv8DCD0QABoMNjM3NDIzMTgzODA1IgwmvFJyu6kqIhDf%2Fdwq3AMyvPQgSsdBi8EVOC6Xnsd65iJP%2FmKkpmtW4CnQC%2FlK4%2B4FVlnbHvQLyoFBwjfKeNJmTo2Cp2%2F9ddWYrA6UMhrGP8dnCFl7jcMD9RWyTLUUvIrBXAdQWOP7xzG9VbgyyUKsjzP%2BGCsgBly6dNk9UqnKjiupckkfAQZHPHN5hs85XIxrNlFRowhRjjjH5eOFSrG9qgZ9UGuF99PcIYTCaTV8FL3ObKF8zGcQQ96nkv89a63kt%2FC5UJ%2FIpUGh8G0SWVaLU%2BYGGU%2BAJXI5udcM%2Bp%2F%2Bg1NjpEnjNUiAAC5aosFsRvFtZyi5S7yxg7PR2mRiu614g15Wh6Oui1SVf9IVVvjN%2Ffpi68vgS8%2FHiCvDIGdM7TGXwC9%2FwCVrFpUIe4jmYKYZTep3kLxhSyjn4%2FTArVcf0jcfaCL6LN1C%2F9IYPxRvTxU9ce0aAWOqqLUBY81ucNicm%2BZW8VtjeY0beDpNg2DXddBysNPenx2M4HPokqPja69MnnbV6l9YhpmI%2BMuB6oXJuV4GsiEfRepSP9vRHZbGoEH9N6TO1gvFAPJfiqVsHph1oY0KYxTFEx%2BxWpTeoxD%2BCBPHNiWOJSZh0wXEj3BTubHM0E5epdIStzQE10xYOIPTZd0MxriwLMARHjCa%2BIvEBjqkAaZZdQaWrvgunFzbZa0SIMq279rKpKjvhgk6FFxFxS3Nv3M5BtkFG3CiV0vubDIW6d%2FUiKifO%2F76YNvf%2ByyCRz4am7x6pDxuQh4ohNahcaLnfL7SvIR0ey7W7ifTxj3hhNnSOygGFJA%2BD1eGQpjV9uAUgOxnhwXtEREX1iiOAHNdV4JwgqIzZkZpY21o7R2ADccTCaq94efgH0670AP%2FVYWgFdnD&X-Amz-Signature=39d67b99aa3340d3ad807bb651953e25be5f9525bc7a03ef9a92a98021be2d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
