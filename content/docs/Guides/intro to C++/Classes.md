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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWLMEJPS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bo1SjayIXtghCcma0aUOzyWC0ISWaEA9vZmOhAHmx5AIhAOJ%2BhIn5MdmKA59IMdqBuhdxXHWwEQWrguX%2Bk0m4A9v0KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD%2ByrqvnYqvYr4EZYq3APnloAoo2Ps64Nhmw1PApNgNAHrkQEYeGDqlm%2F8wBbEFSI5XAadIlY%2FWnZNpilKNZElg76y62ZKbY3L2ueiTAL857ogdC56CTiQBRWTLBYImdLuHYs%2BXGGt2sIuWIVIAR%2B8apr0tmrJIaEt9ciT20SoEJjI4wQEmvDwYMa%2FuIAlF7mKWMcbHP3SK9ounKivqLcau5Rnsy1FRUdTrNaA0iuAlWRuRRKkK7b5dMeekhLRkv9dQWsxb%2B69dhoKNUvydFISobEIF842%2F1CpNQU1JvpQfvLHdU65CCjKBQJcZXFXsx1yeENaYerGriVsPiVLdHILS%2BcVhnys9EaHEWGRH%2Buc65r3ua5Ge7bR7JlTEK2hIMHcwYFGlg7YTpB89Zna2p6LAMesl%2BhhWjjRi%2BTk7vsxFtgDQHvRGfsAM77zxsTLedvrqguE%2FOEEQhew1NmKxFhDbyOyoCi%2BoaPInt0%2BlPRbytVfFqPtizzI0BNBgF63v7nSeX7c4UyUlgRmh%2BerhXDhlZPIiNFpS%2BZwEbAE0RMUS%2BDBD0vMFH5O87tcMRhkSgYSqvvpmJ1RC6MBg%2F%2BvSEKdaYMQRO0NJzYKzBxhk0AQef%2BvfW4RNxvuYMPXwPVeOxEFDTTEouZeaS6TWTCSs%2BPBBjqkAfMvoD5WfmzEiPj%2Bw4FqZUFDaqQOkzzSbj%2BWlVjdqPNKNGgn3UCjMOA6JpnlKAfCSO5663hATDlVI1gHuwjXAMjbAPKF5gkvY3kybdH7EJFz5t%2F2no92QdRmwrQ55PhevFuDBbuIr2HnGS8t9Tfok%2FaswkOB2YVJKt0GIIELdYDHHpe6AmdW39Mr22Z5c3vLuxL7eazV1eFqUq5Ax2ZSqv28vJQn&X-Amz-Signature=bd9cfefca0b8f8af94aa542b09c4e636921a3510601ee99a70e80c76aa6477ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
