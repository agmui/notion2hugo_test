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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6K6WLDR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCFn7%2BG7dGqPTOwT6AHkgvZNW%2BSYZZi%2FBO18va7pZJgfAIgZCGq1z5G3yZK0mqTf4Jb9cT%2FE2B3i7hGHV1gNovuwnMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPKGZ6et6xDwvxbsQCrcA2gM3ECooB41gny8iFnW72OBuR8E6peaEtGTa2%2FzSbq2e45PtWVIikCV3G6y6TGj7%2FmX2Flh%2By5fTlgt02GbyArdHfBcSqtO6GroJ6MRfaPMDKFCMA%2For3Nesc%2Fq28o4dNVttNS6hnA3vcCe0PrI7KJAcPwKPP7PxICbZ87DiEPoP0r%2Bcz9XB3zq%2B3Hi88%2F17Dn7XeS7VGd4XL2Obf%2BMItxvyCD7mvY3zR5znA%2F7Qe2VSaB556y5RpJX6RbxIj%2F6DYoQW6dUE1jtjlDJ1arRVW7irwjijJZB0P6EtXSldDebj3fNjvDviFj4mdGLzKyV1BjeDfwNcWiIVGKBhi5dR3kKfMP3Owq3B%2FwGID2D1fPpSyjbcyKgzk4QbcphPgjzekxV9JhypgUXD%2BxWdho3D8KEMy%2BJTRUAlsrlC8JcReknU9oabXjGoSZXDt8%2F1%2FwnKdek1fJxqULrdaDkIBZf78moXmoK5J8JGaodGlJodqv1iL1%2FY5byxz%2FdIPNGfXayq%2F6v%2BVe7ZsnSYvQIB3DibmkYWRYgwNTD5WdguVZbpU6HrXGfeCAogd0RjkyiSMnGGMhMcnuxmPdtl7bkDPf%2BitS8bQFOLBC6bl8ow%2FLCBSM7IvfzY56ougYM3KYJMOSrksQGOqUBYAcvirneHuS034PSdkI4tC9ld2XlVd6P2J%2BXTXi5ZjgNaa%2FEJ7IDpi2hYsYhz3zPsvhBYAUgucuHiD%2FgV7LfGhGVGtEYd%2FQBIL1y3rPwpnjaHsjWcFOTbmfaicrVlxmq8k6W5kPgXAkQqJPICpzzeVIuVEmo5zm3xxc5nbUZt%2FxaXRNv3o0SmTXzA6RwIGCVt6ePaWP290uyOqCD%2FenEr4kTw4v2&X-Amz-Signature=53459263326a4288657ff3ac58dfff3cc7f02ccb919a9ef41fdd01bc4cb53878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
