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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4XXWZ2K%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlOyTlAQ6JTeSbl3%2FWLMOjBzzmL38Sri4OdNUQWkFuNAiAtUVdYFJIFwm1oszjPBJ4eTLyKGE14UubwiIWQgBfsUCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMzZaNv7QuqRTUP%2BN%2BKtwDalOM6g%2BTKrIj4zKvtEu9sABR4Jx0pCRNH%2FQ0uDhqZj3X7wuUity41iBVjsSBO%2FcTj0rhaQ9HpwiqMeJoJz5a9CkPUln%2BKITe8i1%2FVk9bYmDSMUxID9pIkHXvdVsPUzxm4cHyfVg5KY0ucGlQcEX7gOtdvuEQUMFQ5tfJCjLq6U%2FcaYDm6FOh10DxNMxxZKdM51h%2BEVAY6zIKBmUGhX6jjiQczMIlDU78TjFhQEb5UurVFDHUW8mg4JGIdUU90t%2Fu6YyDBCcbuGQZl8gW67%2F0JpvJPnbuFNVECdi92IxUJ2QjOh7LprUPIDgiuEr5libtZ0wQnBVFxedw4Lsw6geyQSbHcsmlHMYUxrOGJxk9vfItqF8f6MbhReGPjl%2Bj%2BED6wXCcg1%2BrPyGBweoIkdylkZCDIOfZwie%2FePhio73twjvK61PbSlsX6K2NDR0qLg6SjN4uYCOibSR7XLGZuvuVTRPVywzM6ZTNSl2zNuXhQl7S%2BFWSfUhxhlUzU2I6tSO9WsODi%2BT54Odus9sEu8pLBjlJevMaSKkY7f5Klk9OTUz5RqFbiXJDP6s1Wk2dF5MRGFxen4kJdVkgwi3MXwVuJeURMmhYj1e0%2FuPxiE98UNdg%2FLecjF7qUKgDGWwwtKHBvwY6pgENqpHESxrwCCnLB1dhBVvfmWS9EKujUfdz9rwmEtOCr3m%2F3WYEqnQL1QRtXgNHN57mtbBUMuIJvFQthZKkQtrsNdwLy%2BUSUdxWK5FVtEFIDWsM%2B%2FCGT1vAWC9YcVg%2Bg4SpiypNDiIYXXE7XKKcozyhZmOGkKMU7Rw884emyAaRGO4uviELVMexvK%2Ba2JreJKsEkFs0Z36nSptijVwSb%2FAiV7isw648&X-Amz-Signature=f78ff465d231893dd6b00e181414a6548a4e2b471a9c9f44ccbd153a37a6492b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
