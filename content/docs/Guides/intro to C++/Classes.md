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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWKGVGDU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCUAUQjrEu3wZKJDRFpSJ9a5ukse4L2Fr72oPzSNMnH7gIgHmxrIctCqUuaNQsL04A16J5M1se4%2FejcYTDwTy8nSVUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDEIOHoNaUNP6ms4ohircA1gr3Q9hTadDsNlr9Jcff7V7irdh8su%2FT37XcUrIQO1AabNLCBBdG9Mu%2BrHu4A6KzVwkNSS8LyYUAU2VgIiTHoNFMCIR5jwOIGK3%2FYGIJFRhZ6R7VjKATaGRmabUIO1kL698aAyYDd%2B6sYmJn9DjziR8jeNyQbxUDS69NPGo8v6nKuMEFtT7j92EnRY03t1tm8qWzljP2GVlM3VMTRs1n7gz4zNSVFSYmYoqyRNkkwYmfUJHFI%2FcMO8vrKxFxPDWhGJJqiy0ynp1sN8BkDdknJBN%2Bu6kZxRELIzYT3sZfTjP%2FqkDTdXyeulvydgWg2%2FtkogbzRTsJnkUCjwgT6aCYsPki07cSlxKh4L%2BEZRcswN8kCTC8LmnRU10lWphf0TsWjH%2FYzfr6S31GVbT0OFwdmDI6rvRHoaVAt8PlpL4q%2FKNDq9d25V2VQ0viys%2FyAqg%2BdLCWFEo1q1Ul4mnMagA2MKQ1EuC4%2FovVHm08JQB8FQgh1DIFL9yNmj1mIyYLSFp6Ev%2BTe7NmC8CgmcwP7tGwewq55zEuQ1uSGm7ETu5OlrM%2BrnTMnvt9l5ryQsxM7cIGiEJey6YFagCxqf%2BHQD9qKZsAkkLGAWjD6EY%2FtUaGDKC%2FUhNGCrYBts3dXVxMLj7iMIGOqUBnq5Rqt2w3fU7Ecmtu07IjbbaM4EcLBfBeUpI1NvV%2FNC%2B7fH4EfM50kA5PyS2CaZZ7AlJasR9NCY470b4n7b1tdZ7Pz8kxp0I0yMdpG6UOa35VdtyazHNs27Se89whReiojL9%2FtjG59h8gHHXwdTc4hWnf30ga2xhRHon9tdTiEqV%2F6JkKmcZ4Uf3Rq20mAchdYHQ37a1EP3X6OHOtLpKnuBz6ryT&X-Amz-Signature=3de92822484973a6e222d7f8c5a3cc2607d69d6a5f34d1026465c0e7bc528266&X-Amz-SignedHeaders=host&x-id=GetObject)

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
