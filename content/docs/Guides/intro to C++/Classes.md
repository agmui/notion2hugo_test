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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MZHHC7P%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDaDwmJq0TorJPC46%2B51fJomx9qpfkW%2BMr5eRqt%2BDUwaQIhAJCGAbCcGkoaUYKoyREpEG42HOAD%2B2Y1NcJlewet3YlwKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydrkIj%2FqGxG4r2vOEq3AOOnXxhVq6fWkcJvSWTnfx0o0nQGd0UBu%2F2QKW0%2F5tBxxe%2FiIdUcWadnmAvUz7J7oG2CkCqLntUeuuFg4X9tnOjL8VFtGSkPkzKT38dvd8GYydDo1ulm4C9gLPmQj6COl5K%2BPKAJFXOswwqsb7Zuqr3nfKKry%2BwRhqzbirBwwswNojzUrgB8EfQwnl5UhjPax%2FMruUJcLV9xyY0A%2BdcksONKR%2Bl0o6P7Yjv6X4U9wiKsUQZyNY5PtGce6WkV7HfS6He00jvQ4mncsmQMeGNqidAd6xSTYANlogeXKtaZEqixhi1EPrQSz0T2wBxeK3mtfU8fKyq7PcQm%2B8Coa851q8ZcxbbVTnbs%2F2cHtdWwTpocwPGJxsbImFoYa3irlXqPzywV2Ve%2BCsZumS3rgmYgctOqMEqaD%2BQGtXvzCvOZivT8UwkTkYu4WrjsQ3WQGzkZYTynCRvipCBq9IVLcQ9yx5ZPgPH63bTx7HcAWIL0M8iaIG4AgKUBQ2MiqTJFZBZIbHR2MRPBzbzZhsOcJrBe5TjCWRjbJZW%2B9ZBC0LmIjhWEzIon1aeV3mYt57qf2NhLfZ8YuOvfkslyAYAmfD5%2BSMDjryWPc4dgGveUMW4g8g42cwkNQnkhWTTRvaa9TDm5f%2B%2BBjqkAUc6CiOtqoKqK40g64Cf2fLaFcpQJwl9Tc2dvVDH1j5Y5noQh3sezl24FaLBvUDIsHs2SMISsxOeUH2RuQNdgUfjjfjvtiMXIQiOKmmv%2BbpoPA88X7ioU0PQCOeSzkBaWi7c7lShQOLcGi8i%2BuDAiTOlb%2B1kjnDr8PIOTxF72JsmGwfHa1zuaXr9drZIEY38F%2BbQ3OG8c4jH3OE1%2BzmgLV1Wa9Wr&X-Amz-Signature=6359a479537013436a52afd316106b23fcceede3be92a6e7cef9e14a0a4d9530&X-Amz-SignedHeaders=host&x-id=GetObject)

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
