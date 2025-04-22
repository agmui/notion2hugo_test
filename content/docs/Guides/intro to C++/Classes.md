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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJRCHXE3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQClqZ1NDSUsvFY3Vc3t4C%2FWb%2FYKtpm9NimjojrEHhlX1QIhAMnbHcGpLdERN%2B9EFn%2BVq8%2By2J4C4Na9HLu%2FnGk8mAhxKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs5PoB02LrJyBz4Rgq3ANXKmsRPyLtqyk34kcmc9X2UcDMcdzcOmPj4HAGhjci5Lb2AdUmxlh0kFpL4EaR0rWcWwnoEnGkWeGlrJcpijQfNoO41jPR3OS51G%2BnpGvGz%2FmsNot2b80fG%2F42Ia5VKrVb9JBmCUXygqVQYhNosmyuTpP85EkGtztkWX6V8ElhOQ%2BrbJMwxm9jP7CDl72ck26tF3cj%2BJWpjnALLr4YzlCslixDibWkHbmoD4Xrar4mXnGeIV0rdo7EoimJKdlTtlFVOxx8BbreQ2Q17q%2FpgMs%2B6fLXndgqB%2BsUYSrp2G%2BW6gGAAZoUf7ECfdJoWRRTdncn%2F0gZ%2F7pRM7fio8yzqzR27u1qGpnqNyexzI04d4ZUlbHEMcCb8c3wQVXF1io%2BflskOXFSYk%2B6L8gBOr4i63m3hr6cdVTd%2FwydF%2FGFVInI6xigA7aX8loS7Dm3SyQzSMegFpDe235rOqndTajkZsJOCRi%2FkNVhfjDw%2FvmwtSS7h4fL1pyEHdwatN82cgjCmO868GGlgSuBH%2Ft6gLU2QZn7DIkw622ns2Hf1N5d7rcuvp4kY2UJ8PwdKYQw5kENotlrF9pBc8mc4Cv5q0yQsZLEKU4DkX6OK6NNt10KWbTJijT0B75h3PuPcjLN%2FTCli53ABjqkAc%2FU%2Bo0z82DtauhtSFsXOf4Qkua9vgivJDbK0obEBl4gGffhiYIWTPGRLBw54bzLZsgpS%2BAW1QWzWJzFFjDouQ%2BKPhlBKWmf%2BZCzvJ7WVw7RsrNsLrXZSElqgeVofILi%2BRvG4kL6CkgFU1etFhTkFP762EV6NOZ9b6rTIGt%2FD53auJc6EGIUYjx9lz8pHCv4VZWAssw4vQuGSGwYpDXHvhhRsCf7&X-Amz-Signature=3a456f0d5cc4961045c3d1318f7a30854043134ac94405c35ce74ea3ab2e5082&X-Amz-SignedHeaders=host&x-id=GetObject)

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
