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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQF2C2S%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDBVrHcBhUojMUH%2FL79XSHfHiq7XSQd%2BsDJ442qaZUVYAiA4n0rE5nT2viLiVHo1GWQPU0BZuicJ8VaikEa1OMUKYiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY2BQWSVxO5CkpTLLKtwDJ3qQ%2F1IjXtIpEE2vmovnnL%2BuTEfIQYWHGomsUIKy%2BmPuy6sLf7wrdn4WNzo2WJnO9rQi3OPGdbNH3NQCW0%2Bqnc1Zma2Z6XdTUXhkoH2qMIrPyen5r4qnc4O9G%2Fy9U8S99Z9apd6zH8mtT8CwOdt2TYH1s3Y1Jr%2FsEeej8KONQlpVG4FwqlswSbSAwqJsPIlsIQF5my4iBoClba35yh4FWb0QgeoXtx68jx2pDv20YUgXUEAYnAfK0tEVxQJvyQdQpjf0632L2eUIndc9aBENBgAVXRcFMhIKBfP5nTfhZcrkT5pL2%2Bp3FjJh4p1VwkF%2FQuAXdqjjaq8DHIVQQtnXEXin%2BoMY27L%2FvH8%2B3xFvjoh8qc%2FRzyj5e5ZFAT7sBvKCrHrAa2nE1vYhareK484CuQ%2B28cq82keBLWHGtcQhHpFkg6bQ5P9MVxGrO0dLDp3f3hZ2IEoToC7KFtJan94QqHpl1raLg%2FJHQEjt76frCdLIeQm5gTmwi9tO%2Bw%2B2KFfD2RBnO2dtjBs5cttmCqfsJWqb7JHtzpK8d%2FMUbGbBGsFwAqfUk4Yt58x3VAp77S%2FKHs6JeRYI70LrN2L2Lv5H1ajEq5kybcH5EQaNqQm1XdlCA90JLlD78TpRyhkwjbmBwQY6pgH76A8owcSzFsQwK9CVHoyWytExsSaAkqFFZdkW0w7NyLlbVWRNyyAQHotGhtiHghb5K3X3cU774qbxHXJ6qHFWcX4%2FktDGsU50wHMg3%2FLOx16FsD76OBjfbWyYQGFOAt8ToQDhrzZRkViCS89BGAu3iW8NTNx349cqoSJVsBBlluv82xwsWSLr%2BXOSzEiK78wMFpeW%2FnISzkerxrPqtUm0QjWTx6Uq&X-Amz-Signature=5833e57bf86afeff1e1312f8c713c8148a97deaaad039e7dd650d8366bc0b141&X-Amz-SignedHeaders=host&x-id=GetObject)

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
