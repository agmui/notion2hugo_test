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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GS22UKD%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIG8JoQzqkcT3S0Zr9fcRrA6QHs9gTCJMJy0T2OnCyTKNAiAmE3o69hUUMOCodzNN5g9E9K2saoiPtjYOwn7G9ZyvLCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN0YUCpu%2FjUvllVqDKtwD1gnFOY48oDiDVldQAETT1eu0NkR7aNjtBg85AqURX35fW7Ju8EUkNGYJKLmzYYrHOKFQD6nH7C9P5MzRqAEwxvXzTICRgMvVrlK3gDE2ZEZ4yEK0vpyEutVK4C0uhEWbkUM6BUbi6YG%2BOaXdu4tqNn82At4Y4XGDUYZT8xRAapJJtev%2B2gJTDp4ev2ATpX2MPOcE6ODqrDp%2BmoqiB%2BgbTdnCVYIwUmqb%2BNGHCN7DY1hROs1AD7JJ2fATqjPyV3Sx66mQKyRrfAtIRVzYXW7%2Fo5%2FzWzGJXUA%2B0xh8NH8MSI%2FCzCk0U8jHTGArd6xual7P49h%2FNndjVWboRTUl3xJilxw2Xb3Cr%2FUcQ55aFMsZkwQMApdC2GSTcxDXhvOpBo4D8A1S67%2FRgAEH5cQCc%2Fwab5uSqyVs2N8sFNyWIKuENbYYRv8NAwsyfid0qTcZk9uOUFBvwPLEMiXLjBRNvdouU%2FSnS7FN0X8ccLSGZ9UpYZQUvCovpN5YE69EK3%2F%2Bkhbb728kHnmlByDheDM%2FSrhGaPD3cU0fGvSU4kC03pIH6Jzr9sEpboSEpywDk%2FO%2B42ydXkPDNvwEKTr2gtIMK%2BgZDdEW1R8bdgMTdncpMb4UjzsIwuL7THJ5q0DRtoQw%2F%2FL%2BvgY6pgFex3LGE2EJ%2BYPpRR8ThZJ9y9u1jXEfVc0goGiPUjrM2le7ozsuAVw2W4otXtB20Ltx7nWDDvNMA6myaCZds5HA3iwSJVSnv5ED7T9eUEZea%2B2f9g8wvCgTQ9Z9Pb%2B7crSHtFi067pyEduOj7I5okYocN%2FuR08uOWcqkn%2B%2FySt6FrqCKP2%2FHCdDP%2FzygAG2uKkY%2FYMj0nTC9Z5ri0DyQK1VOAMr237m&X-Amz-Signature=081ebd53a8fae0fd5f17c5fe1e5b94c3484eb6d72fe44bda3d754c2cbc28a03e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
