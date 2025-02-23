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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRNWKY53%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmOOVmKJWjrpIdiDU0CB38W7pmk48vuGy2mS6NyQrcnwIgGSO8vHjoRxbcm%2F%2F7DXe1XLs3Zeo7Y6Jd894VPDCRXqsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyZXByXpMJ5ghpFRircAyy5isLN0KzK2APNtszcgnJB0ClEuu5MBBjV80RZRY35IeXCXkV%2FjmP8ocyCyPRDZmDuhJBYW0gRajogQRrznCrrvE2VY7IXh9tXqyPR0GIF6KSVPQOg6VVs2mnSngGEOllTG7VNiChw46TgxCgAAd5rtxUSHchaHDLlNTjdz1srUIg8XkMD9WKUuii%2BZHU1TI0z0UrSr2QAOP3fwHku%2BWfOklStd0Q0d21GVo6nR2NDeUl2b8jCA3C1D3zuFzUOWqp%2FiIjmfO%2Frugax7orgx3KvvNZ1QdpODXLj943xPB06dcmpiWzFF5dbgSRpXi3yxoFK08%2F9r%2B6W2meIhad1DO%2F7onmWwk7mmI2kVDKXQHyxq%2B%2BTZ3EUVzBiVoEnyOmZb15incdgBgiS%2BXWFzERy4QKCLBXLU43T5rWzwpX%2FrgYPqnqT8d1CTZ46sGbpsjw08us6QdGjB451EN%2BKpwUXSJeINrdTUZi6R5IIW2c0mLZfB90haM536JQsmMPGtRQj2VvUfLbrgpoD1xx2l7NfBabUVKf5SYEzhTR4Ngt94Mze3%2FJAUtcf4Bjj8nUJGAr8tjAGTfDEQKBMgzwRm419vS%2F1Tf95cLkJSHchA895zFX1J0yV8oNKaEqi4645MKPJ6r0GOqUBNx5e%2FcQo6YMY9W%2FWhQLl3pFdHe%2BgWUy3U6%2BDHvfNwBTszLsBADmnbHEYsgH9YQEfmdRsUoRNHVkHYve4sdacE34iCeKrww%2FX%2BzhlEqo1YvQc96xK20DTTDHiC01V4MppGxQxSFDZ7qrO5uD8E1PJHz6QTxXTIQ0C1a%2FtJ0vQnwedghJLd7HKACCGGV9%2BdZECvnSaYIwBnMwOYTGwo%2Fos9JNtSPpW&X-Amz-Signature=e9708068ac918877f874af368b650a6f5146d0394f6d267c12cdb5a502353f45&X-Amz-SignedHeaders=host&x-id=GetObject)

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
