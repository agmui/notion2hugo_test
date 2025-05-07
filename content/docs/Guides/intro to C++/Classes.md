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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJNMJOW%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4uVChTZWcVHYM5y2uBBGhtM5ZQqvI6FVZC634vHTKvQIhAMkgr5L1gTDipbfm0dyPH5ES64V1gXAqlE8g%2BSJK7FJSKv8DCGIQABoMNjM3NDIzMTgzODA1Igx0mRl0X4SGNWqDB3Qq3AOMCCPEBu8pOrsNuS7nUabd4cu2rlH%2FGX%2B5i4SHmImF8PFynhApFYNnIU6wK1tcdtJ2aqGwt3pdaJOiPSEYxoAWYw4jwKyZTTSF5XnTeYKAZVvOnq5ykVyUWAU9k4kea6HsruHZokKftcpz4LLGNsnhk0TI4F%2F3k%2FN9oucBTKdfPnz2BtykeOd9uxfyVuuInu1pWA8fNz0jE2q8Se3QrpmhRsB%2FZiLwcYU2l9CohYTDEROOo52bhdWTUtdcxSNdrAY4kGvSzUueOhGJmjXTO8k%2FkO2AEvQyoFawVzvJY4EEUn7v8%2FnTtV3lckPHpRclOp9LiNZPjVM2pWHwNoY1DT%2FXHY%2FdnNtbrE60SRkhNUxmU25RNj0HQ35eOaPNNPDbbvIFpXp9Mu3Qxp2OuqRfn74kKSOQJPCxNw7c2exofdxBbvOpN8XCRVEIUSYr5Cjxt3tqrQpwMDXOVNBCdc8It6rvoF2qwHRdNJu%2Fp0PJEiF%2FwGzHmqLOA%2F94LUZR9UY79M3Ja9FG%2B1966H3z1YBgmbbRzGYIR0qdk9%2B%2Fizcjvso75wQc9KIzSd39PdklZWfeB8OAns5J1jgbUK1HB1%2FN%2BfDZCyvXQEKz1o4TJqPRgwrTujQVecq5hvqJdiPArzC%2Bm%2B7ABjqkAYZRUSQDRi4wg5PqnF%2FzKD0KmjMNHN0m1CCJncsXcbE%2B9ky4SiuSnftbLhT6WrhkDArVX64jfJzwYymTTE0Vcr8bIwyGDecUSW91e%2BksfKDFxmEcl%2FSbGvhnwzx0gSoyLjNjpmA8Rw9znJEijJJ%2FiGHGpPOYJtwCvPkhnsELwkjD9%2BNlpQ14AhOXVPzm%2FbHkV%2FQdgEwUkIinPfCJIoveu7f1%2F3MQ&X-Amz-Signature=d906c1a94bdca90e9616f95a0eaca70aa70c2546d7c164fbcda4751299aea125&X-Amz-SignedHeaders=host&x-id=GetObject)

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
