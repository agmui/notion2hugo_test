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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCQVJPQ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIF%2F7XRXkcgxfmyNh2BHWeOxl%2BAND7H2Upnt%2BCzimUTIIAiEA5Gs4xDCpah8Jxs8VHCyI2jSauSg5ohfo8IW%2BCp4BK%2F0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwkJbZKE0Yj9RNSBSrcAzBKDlUBiFLLSq1lV5UUaGc%2BRuMids1vn1HL5USlN6HmLcsZxPVphnJxg%2FIpQlyvz9d9HCjgqIA1DNmwuXAEFVUkyIxzCsRlRHe225KwKWt7DUlv9GF%2FYAzXfvOI9tBxAUMhdo%2BSFz0J0j5XmcFhOIu0zExeM3yX3wpYxTgUh8A9Fu9znOmfWyaWNYGovO5tl42lygWgK%2BYmD%2FBiLQQ0aVzUWkYJnykHjmkYCxZtk7QwPJUPFDg%2FC1LLgxw4ojp5vWvECITx1cwsEf8ETYDpcOOl3LZftwxGlnRr7niN%2BbhtellAQdcB6YbbZgNoyjiWICEVJ4tyaOT2MNaEw1zwnSVlIj%2B8xwN2%2B%2BjIz9SyWhj1hNwPV%2Bp8fd5ADfTsnI%2FFsYrM6fenHVuKjWbsMHdVkCnjPkeOqQHRHDQcSrXSKRBY1lf8VnvEGd2gw40pAQSAXKHP9NdREzcIydzj1klfBUd0i4eDg2rIsGSiFPD3xywqkhqUBClC5%2BQkLdYiJVAyq8soJhx8CQSllPKA1vduLJ4SGYcJ8lc4HawCoBv9ckMddtce0KjF2cKcex2Osy0fmShS2LnB4ZmTKvjPBtB0u7iMAL3MsNtxCA6qipMoZUUSoIJUUomuSEc%2BmYXbMLrl8b4GOqUBq5QsyVXIfet4ZC3660%2Fb1IiK92W%2FZCHALh8GY%2BIQ09W8MUIsxaO7di2n3fpNtWLcq%2FRwT7ZFZRfOhns0qdJIv%2BRwYx0jD4txwQ%2Bdif1rFCQWJrbfol030G8wvZBSgi7ASKyJm661k8oFcO1Rx8ZZToAwHtjDAa4JDiWrSP3j0cyWYIg91pFjKWRUeL2SVTR%2BIBkkJbsS%2B6KUEQHFNpWhd1CWA%2Bq6&X-Amz-Signature=fa97e06e15dc827a5fd57f34985e9497d8ca95c4eee4dcdac844c6cbd73c368d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
