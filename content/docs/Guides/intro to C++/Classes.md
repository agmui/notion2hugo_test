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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPKT6JF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDfIX%2FNyVxZh3YYUFqSpiRdpKiDIjRBDsQbIV7CjACVEwIhALfG7tpyT%2FpQp11yeLHa6HsFbFwDej%2BL%2F8A%2FlBy3rBfSKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrquQSlIekoAizRMYq3AMmeETeIOjvDjyehrX9JpA9MBX%2Bft%2BuoZXlS6EQC1gWnYVRanDKLZZJIFtJAIggdOj2zVzAzlnmatBbWRU156D28oWFKIVutQLOrc1cxAMY9w%2F9ijtplcF%2FbbAQCZSNY%2BuCh%2F30nhwpGhSAIUwcopg8r5A5SlSC0lkK931S4%2FuD1Bfjjau%2B4AmL%2FZR7UdBIvegUI3PzDkdDl%2BVcgsluWncL25A3iBb5LTu%2FYNKS0euONCYRNUPrM8lObWjAatZ%2Bck9h6CtB%2FHp85DDluPoc4%2BJFfNu8yTFWC8Tr5fUbyGq%2FVjr3Iz2DRkOf%2BUriK%2Bhdhcd6UUMB6mBKDBtvcEnvapubrPmkNTtFzytmLYDLk0vzNaPk%2FIT2omnm2nVJxcDYMJHiDLQoMi74sXnqtLmCuOJ3g7quvXkrs%2Bs84hUAcVsfLd%2FdsaU9TicnToSqkKb979sw0OuLlQuihu%2Fl9kQFFllq2%2Fszj%2BMDMkdjQhb9V5OxRGZoO6MAehji8PdyIvebjwTtxAgthqLRFrkMS%2FXCTAtQGms0RTs0%2B5ckoPz4Fxvv3mBLggtzrLD5em9VdqhU8iImuy%2BJ38AHX96v4EXBA16pyUM8phH%2BL7YUFJB8sIjpqoaazP98lOW795pnUTDEgdjEBjqkAYSFnv56REYE1vzHHjk2eyu0M%2F1BuxQ4Tgb8JvcSJJOIlu7Ck1SysQs7GPnH5h%2Bc5VI5nR3V42jZcHlDlUsI9BgZjE1H848ayfrmPFCIOvZFUFOPpLAIImtbSVqHfnbmQHXNOti46Uun3nEVszNjwVAVRLkIdqoydJjl3g4FmOKoM4Ffs%2Bzaaf45hVTVCCD2ylJEbJnEjMIbN5cmXkScfb0MTpD%2B&X-Amz-Signature=f93520f15b41fb39c4f931e61b237f4eab4bfd4cb9ce1b785591a33f8bdb0bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
