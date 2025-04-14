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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNALZA2A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfRDcyvogFrxOUQSsv8BQQRCrZo6lQbjcQ%2BGcmh8IlSAiEA5j6jn27QQEv3MlZ9C%2FC8ajXxihuWMgOi49KmaX3Ob%2BMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEau2w08Opv20erFgircA5skugn5snGrSfvHASIzsfzkaqAyXOTqXDX22hIPVlUmmOe2xAjGQ2Fri4NnP7QOHFz49%2BmBj39DXlbtYTI7Sc4oo9EFLacBJYEWq2EcZVNLo6Jx3bb4ItDYb29nzVbJKmSg6e1QDIKWnDwVgFA2cyNAgrLmkc5eUC%2Bs%2FE%2FRizyGx0we6Yv6mdyWXphieSTZKHZLJRVo1HXMQylvuTz21sDpGLKJhPBu%2BkIW35VC3plqeJK0Dt39JxlgF1REIqdA0NPfrtvoScYp0ELa%2BavpfsOvhg9SRH6uBYNNx4C%2FuSWNGuppWOK1dBwsRuYIyoaSXbBi0A4cBaoYTVIEXgwVHYUy04NTuUq5oWEyI2f2q%2BFsIet8%2FmWo4bl1grHjjokSeOIcQNe4yr%2BG4NqnGiiLGm9c9xJAe%2FbyLIrOxM0GFfLRFlSy%2FnYwRULZTF1jps9Y%2Fm%2BmPLIjgbXk9SmA%2FUffHPVwdH4YEejnVhg2W25trUXJY07T2RcJFDNqdDQL2WXjsLHLGJwWLiPeVNGGXpYZu0fnvOZcDrPGnnfWJzOHt11eqvI%2FhZAGYIrJ1CeFSH04GNf33Kib6I4lGJUijlAA9Jww7BzyxjQwK8nrwazcrw08PX%2BnC8s7WmGzxe2FMJGV9b8GOqUB4ht8YWxlS08kRQIUPuN5wSh9tCfMgoCALecc9JaOfbDA04EES4iwTr1cxBhZ4K%2FKFHADbLyW7dpAcqTQTVs0waC5ZZ4aCNH8Z4ojBdSxZJ9tIq%2Bp%2FiheAVKafeytpy7PB8saHdNGVKy2T8csavIof4AXXAmNDiQ1l%2BoGMNC2qZQJawFQDumd5X%2BwLbyF%2FlqKTLdb51lCseMcJa6m7d0OdUsfYPaN&X-Amz-Signature=d315986f9e0160f6684a5d5616d3fff6cbee7c5174e4b7299cfc21dc6701e66f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
