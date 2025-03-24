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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZD5ZLTI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyCNizU5881KBcrvJFOOrwSW7UFczKZLOochFhX%2BkajgIhANv71rQpzMI%2Bdv7vdHhPwxZ0hitYZ3IFjhockfVZ2EpaKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvmXjlf8XQg1adD6Yq3AMD%2BqC5r9x%2BmmTedKWi33WAKKkIGBS0n%2FKHReL3B9uV0Jb2o5SlR9W6fmjFL4Um2tFWu9HKvkwmgalASXxOnsv08SprMWEcjIz8U6Haau2l7g6TZ4mTpp%2FB6KO2LcFduxkYDpxGw1B12MEeF9q1pGXUR4XFUyRr8n2NedLhUuWPWHB%2Ba5TdwPhnnVcJZilyCq2FqdbEcJ8qTj1oj40%2F%2B6DFCobTwG5cTgW%2B77AKU5Gnusf4dTCqptyR6t9Nl1oX1mL1GcBV%2BkwXuUdDB0db66yBv09qY1TL2EFGdXfvd2aA71%2BiMZkMw2tDs2upnf%2BXndxKB5bpE0K%2FU%2B7fE3MMbLaCZzvxTDFAdu3dxtS2IrCdAWogD3aTFZi9xPxTcPOkjTCCzwrbWgEC3OFul0iDXxOSftRwhdeCgUMj2oR3OJnCk7q%2BorWrw6UnQlCeVvK8pgRcB%2B%2B3Rh4Cv4aEUBPKrfMWtl90gPcg6pSXD%2BdM0U3eVzzSCOUaovMIT11Rrl0JX16%2FIQXaGFlLc41Pmu245OyNq9gy7QRqQtNr0x8xafnUmcOnJM1E8PuNgGdYB%2Bt%2FkgQ1%2Fna5LYlNfiauBCoenRZNkVPC%2F3yN%2FUjLXsvpZXPJx0vRPz8Fy6d0fJaZxjDasYK%2FBjqkAXWt0c8A5FBYH5xt8RxFm6XwJlN3SyhbbhVk1WJSkood3dv36Vu%2Ffq91eL8oJB2gurgdD40yI63lMe6jQs4%2FYQx%2BrW3lHWEXGqMxis0SbnUAb3SSK7WvC1QaTNvVyxghnAK6rKRbTyAb43fhPxyzMFeZuyz6CXmTcWa6%2FVrABbkw%2BJHrq3Lz5PkO1yZK%2FRm1eA2%2F%2Fge9byfSoxz%2FHHACgJChSvGQ&X-Amz-Signature=d23fb2b45f9c08fd6511edd09daeeb0fed00b9debd9ce24eec853b5b78786f51&X-Amz-SignedHeaders=host&x-id=GetObject)

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
