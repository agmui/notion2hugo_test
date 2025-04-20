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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CPHX6UU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIB9bz10D%2FHovJXf5Pebbp9xCSHnZ9edVz5T05xisBP5yAiEAyZpzLPq1xlscti852kcBam66oCLdjWWEj0hoKGru06sqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzszuhjRTVSlmbgkSrcA3TLEWMwCJrugY%2FgvaNL%2BDOCC9pTb%2FXOE0hI0ZtKNjUz13YJglCBi6fY%2FB%2BQEYDY7wN7yGvI0vxXjbA36d2TBK%2FaVZg0EOQr6WBsJjUqIjFcIZHHWD1V0xQGIGzPyQMd0G2eVSjOsJWtYOD9QCIhheXqhySuzzlxqLyErZBWbflXfQpGAB%2FZE9hSMUDPrzNH1QjggKAyhwDLJgFaBignc0Dbv%2FpAH2N%2FssQZBUIOMqYb5l1By1bOIk7TJ4O5kIaXmiNTMMRjtwsvwg4sAvOQGm8mw%2FXX3u0ER9F2AzDuNWFjnF9MEX4u%2BC9EkQghKZk64ffkrVI%2BAsaErdDwMnGU5VT5WqL1GNIsR9kjzxLZqOHxMeBIsdkntGs%2FJABWGFp%2F8gv6FgPab9eIlnsy7KVq5Sfe3TBwNBQ6uRyONLoFZJH8O3fB5lQJai60ZZMXvXJuxoCNShlqsYuoh5sEwIg%2BWf5RFMvlbhGxc%2B59Jgfm3tdGkhvhdnfHHr0Gc62iO9x%2Fcg5RYsjt2sABL7wR9ZTMDA98mNdq%2FCu1zaLtrBrNxnKe1KgJ9JXPEnko7fx18IwKc3Zw%2B43bSCHvxoFeqAFyktXNXVoG8hEeJP5RDER448N1IRSoMyzK0hpIrCrCMIGtkcAGOqUB7HxipqK7rz2kBrIQmg4MEXaYp2rN%2Fk%2B0diabw3Sx6J6DZ8VNX%2Fq5GD58KBS60LMe92h6nRT99N%2FCChraneUCDy4xTfeC9ZH8XVuamzgRG%2FADm2L7ClIPucyzcCUfm8%2FijfJrteSoUNiGmZ1JYJuR6c%2BuQmCd5iqkClIp6W4oEzWdXpXjkeowUY2Pxn9QfWCWx%2FYcUdNjH%2FQsncmYI6CFihiap%2B5N&X-Amz-Signature=d4d54a7cfa57ec5c3314b0a329d64948dc5c3fe47f2e9aa3c44ad75447499c9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
