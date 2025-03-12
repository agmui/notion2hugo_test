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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P7ZRMQ3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCICbL85MwGJqLsOd2DYLiPn1uIjUbgd9xnHXEz2cnN0hiAiA5%2FppVggyq4d3u4GBE%2B5CdxAbqHVUlXQnG927N4p85%2FyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkYW6rV662v0a0tbcKtwDoQ%2Bm1nTqn4MJqyAyMptY2cRmtPBrR4o0DNiZ%2Fq4521He5gQEtwAD%2BdwBVGCfv0LyWoUKhy7p2JP3ggx0bJs72xpW6Eae7qycdtXpBXCBundWTBStdsddG01BnB9WDDhHUJ96yN3dlTSpHizSFLG0fzEXXAiDTScX0m4TOmMU0gkmXJ%2FrV1sqKhIxAQjU22GmZ6JlsrlcrExWNEI1XqYIsb0IebMOA6Oj%2FL5bk71luLVE7I759MjOoXxBwmiLJabm9teE6qZug1k%2BKniDn3J1iL7xcShynt068s6HOY9r2xkRDbqdU5v1C5MJKdOS63qko8PMC59XSOt2jPG%2FlwULwVBmy70wyk5FS47FXaTwnIGyHCqqiDI%2F0qvE6Af9DF72GVBPOcJFKjnhpHgI4JdbNJuS2Iza3v22%2BeRS1osmEs1NY4E3jL488S25PgXs67taqL7VxBXB9glaGgiB3sDUJ4nNWU4Xqko1EPDncWYKPC5DdZKwUxVnYayK8KMTLvrAmwBr4%2BJfVvKFLHtrfTgSuWuWu01jrvQB6%2FW4l%2FLeUIs%2BQqncqRXSdFC735oK%2BLplQuaoFCJsOmBvwkY7R0ANzYxE%2Fcr5fLaQYSaiYMhEopOZjbSnA9Ttdf5WJ7kwsuDGvgY6pgHHc%2BlsYCdFIbcJaj3wKmcSEViZ1r%2Fd0OjLW35txfynkT%2BSy%2F6z0MSeUG1vrGP8fQC63QgL1%2FSwKa38ub8m2ddpQJs5eNClYoKjSwSyBS4wj8dRwdoo1BxXzoYJgYWuWY9WYS5SsgRWAQ22RCDf94I8ME7RDI%2BSvSzTCDRNGWtnDQto%2BKOr2AGfn6DNhTo1pQbFZWJgMFwhtumX42lzp9MhjdvQ%2BpOK&X-Amz-Signature=2571f8c23278910b31b31225909f0a8945fabef9149136ab5e5cc35811865a6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
