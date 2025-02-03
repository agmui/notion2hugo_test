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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEP7HOJU%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BocCpHcKGmfkYdmRld9Wc0UToEF4ZPYr2SR8IHF%2FFBAiBxlljc3WkHlHekFKEJi2NG3BJduXn5f0v41fLwvDuGUiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYKGGyQazWI6h0Bb3KtwDi%2FTtllDlKwxg2Z7l0LjTbVgQ8HvmGdSdGiKIq8H1qwqrhPzcMvkCXatAEc0it7ZhNuksJe%2BrFx93kXXfC6hZakeSsXS2Qw%2BnW9iChK0k7Zx7v%2B5jCqq1QVaMnZ1dlScLr2ahpb3QFldKtZlQCsai7L%2Fh%2BKnn4AZ42%2Bcr%2FH0amiZZ6IatWpJw2LY8NOGIQHRBnKd7TjdPxzyY8i8%2FJpw6qBfAHf8fl2Js6d2cv7W%2Fx760oNg7zOpTP1z93U3OQczKYXvsrSeFAeh0G4RSRLPjwkyeEaKxENpgLT%2BaEg6srDph%2BJPYYJkrCRz0aVqoMT7KndpYpM4uAC0H1VW4CsMIx%2BHIOtlrUpelVdzQlbPhti1e%2B%2BHay9VSpDoLd4op%2FAoO0Qyaja4ypFwUAbvfpNV9TbmL61zg1VbwGs0UIrkkKdNqoX%2BcYVvv42d6edSN2GpEAVcTHY3wuY6wLqGTL50JtJyTzSrgZy66IoUxr%2BHfsJ3BoSUg%2Fg4uy2Ar9sj8T91WyTF2BbTtxz6ucOoUmHldayOmP5rtwketxXncIKFvd5uUlsn29VRrFPsBdTJxOnKpE3%2FZcSbRdor%2B8vZi%2BLk7QPfD7x%2Bz1ZA%2BGAswuk0zzbh4xCHDmD6xvIyTfz0w9MCAvQY6pgGUuHYqK9TArIRVpWCM7q7hOUl%2Fgk9TUNdXQMRkzoWo9TvTS5jB1ghvXXFKLNGQJgFq8UHrj8IYrjZjbJw7epCZYSgP3J2aegHBghrJkai%2Fhl8N46Ni8W47AA8nvO0ZjuwVlybGmqkIo55dI2pUuPeptzPQ%2BoMn21M0mviSbfpk3vwrYan5l6WmLBvRAFPJZCoP3QO%2F4f16XAJjjfJ9PYuTY%2Bn53aPH&X-Amz-Signature=ff5f80e640eec87d211544ba4f0e6ff30dba03c0d0e26d52916d9fdcf2827076&X-Amz-SignedHeaders=host&x-id=GetObject)

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
