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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCTLEENJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBHt9UYDVDthEypQ2BNw9BQCXzLEMezXTML47T23ktzAiAM0GCX3i5S3Wyv6ibwr5BLPFEZBR3qj1zN%2FWkRzbuvhiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZXHsAFRRJKFn0by%2BKtwD8G5IyzloXtU9CUh%2B9F8efk0sE4DHG6%2BM870aAnobB0vmPSpj91xYbDlL9YhAFSnKq4vzPE%2Bc8QkecZqL3mV17Uh89l2W8GRxUsEWIBJaNvkCIt66TKOG%2BFpQKMfdDGRL%2FfdHja6Azl79TUJfR8kTqmVgGCFhMFkOudyr9IyT7cQR9xD6yvRFeG4HLSkPhHs3ryKTdr1rBBz%2B68kCy5CPjQhkKVvZXUJNrAk9hOG8ZSeJgL6RtdHPa6t9hqy2yADp3KZ6YwR8gM0TFOhwbBZL57g4ktvQ%2BCDcrENCiQADshRd3ncvy9%2FoIfsqrz%2B%2F8vGkENdIsjiY4S0afdAUrRcAH3sdQSFeHsWdYYZlLvKJ9dZl67wT3Vf%2BxdhsgGb%2FMogGM8GMeb9W%2Br0jymWYCis%2FwSPQ3bGd5kVwhrCWf%2FD57NVkvbXRZJsE%2BABT44cBCfu0oyjrPfuxYwYqjYT1ust82hACVMb7Wek4KcjyAmCK8nMhzFgF9%2BSvjKdtcldVfkQEPQ5h7rNl24CpbGIfC%2Bqzpeq%2BDg%2FwDLjAqMkbmqMLbLgOav5g1xiAxf%2FWS6v6zNftqZEjDlZcZyAlzsprTCf0WZoCUc7CFYfD2zuYZuyeeCujfyC55JU6uFreNXow07OyvQY6pgHltRRZHWhEXfawLr3C%2BnKngv8gjduPEu18B3GYdtkycYiEocw58SC12TZ%2BrFGQEI%2FDID7pKKfoKshHW3TZuSnEHHBiRuF1ivyVVbopmAyAmLlkIzXUkIIDhWzBlDHpZ9uAG0AATWaT6VrMkBGF9ZyS3LEh28ZHP8ZqXcxz4MMvkvETs8vKRyxznN2y%2FmNoW2McHIQ3%2FHd5x27gA%2FjPUeMwUz3N2cfE&X-Amz-Signature=47bafb77c0b649097d574ece21294a57f1e03f3ab375c17e7b218e4caa088df1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
