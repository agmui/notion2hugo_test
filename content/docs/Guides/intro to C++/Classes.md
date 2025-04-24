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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DY23Y4S%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC%2BCjFTs%2B%2BX7yD%2B%2FgJOOUoRRG8VK9i5FjxtuxkwqCnPWwIhAOhm%2B75hipoaEAT6IKX90i8Dkk5MZtqDx9KSL4HsZajnKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqkXqyIIhglKId4ysq3AM5tU84HLDBBns0bn6IEqZWWz9pcWrTdQ7K4L5M0dWwUXP1%2Fw2GuVDJIu7JJ%2Bs2yP8L3M1hoYahRpl7tkHQ0p6T3ozhBIeOwp5ACYDffX7SJcpAZNkycpD7cF%2F1vb8ByEuKLuez26bVm%2Fu33GHh0edaup%2FbQfuD%2BglTLz%2Fj5iwIRVSfIOcA8mN4GZznjjpp8muavIjQpTVW59Qizr5irE6700nhlXnjZGCkJUlRwgRbdBIfxaHkHiJ58GTRqfQaTntalhLUr7A1Z36uKzA42FdMhbaucb8mWW%2FlODy6hVjJ7%2BSNNh4lILEJfFT%2FNVpjG8CZbd9WkDaU%2FILZutdrYTcC0GkrV6AVv1EObqb3tE7uMXLBpweCMhAYYsc638z56Z4i%2BVrBq9lo4zW91Vb5lU3bxNT2fGVTlPs18FWYwtrALzmMTgRMpOWEh1Ja5H0RQdsZR7Ku6hXCRvE7A%2BK838WktqeV6%2BVwg6aVe3sKEn%2BHUhJSQsWI8RtQ0TKR4YPMDTVSkae0qtvagsl6MbpHS4duU3NAo3O03mmzLG29x1PQMx0CaLACKALjXGgPuZp63VAdO0bO4vsNXdHo7GUusKi%2FCsTEYTgTEYGTyrtKbZODt33S5%2FOs0QHXL%2F5dijDgzKbABjqkAS%2Bq2yIPrUXFb8kP8lsgL7%2BW75jb28f9aMawrFYlPIovYjSBBoX%2Fe8h1UMePTMXPjtHGgh5K6xHbc3ohMrNct%2F98xWogShTAw51TIRJNcG08wz7uSLw0LcN3eSoh4qMwms9Rbl6qhz2DcVAYvPrNDF1cMtsWTnayTDzl5yBzEtmbvd%2ByFabZDKANRkgdwvdA%2BCa9mLXRXxJjK3FBe7DINgKNI3X0&X-Amz-Signature=b5a112d561d4795431040b031c3c01758d957761736c491a1b02300608fc4b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
