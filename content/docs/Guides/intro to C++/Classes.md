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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNCVRUXL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDlex8RYsnRWtrd0TFzAexnT3N%2B%2F0xEF9dzVE5wCvOW4AIhAJ4PslINlV%2F0Sae0GkmvIcBOb%2BeTof3ev%2FPzRUSBFiuUKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY8oc7M5fGfBku0Q0q3APWuW8cHbPesqVHfEinqSxmH7IPL7pRDpBiY2UBwKHOD79CuRCalPTpM55TB0feSTy0YRWLcy%2F8Iq8WuwRvlr1ppVDcWvphIVL2hj%2BPJWz256xkE5os65cecW1osGR1dRZrfESU%2F%2Fbowx6fV%2BmV90R%2BfsS2%2FTUU1v6A2PgJeuE%2FEpW5emSv80u4NDAdHNtAw03Ujh6wbeqmEzl0PEkTsaiXI7dG5NOQWwtGoMaU0eKNuVAH9loRMIF%2FEjjVLVRAVxtT8fb7hTtQi3Xn26NFbhasPJMgCaDC8%2BPeA0SdGz8g8x5bbloMr3GZqXZqyeL%2FDs26pv5zriX29ixU8%2BunBRJex1f%2FAMMDuiOY%2B6NFAD%2Bnet625Hn7ZosdyGvsShittmkbqtFjumHVWpafHwtmHOK0I2yf5tuKRyBRgnMNEqeo%2FpE%2BgynF3%2FxUvxwyFcPhisbKh6SZW4fP%2B7buUUxmiP8BwdsTAk8SnkRzOBfWSvsnCBEXvrb4v%2FtAMWr4qKiqXudWKHKDSZadSRii9FrzE6vBqIecjKq%2Bp5jXVb%2BtMYiHdz5F1MeynJoknES%2Fh47D7A2vot%2BpBF0MF8AGQJtwc6I1miLmkjE8pipcL0BVYoJlgHYt1p%2Bev%2F6oo%2BG%2BxDCWoYPBBjqkAXxHoF0tCidwvxFjAU87BVLLLQryD%2FpGbCVYnjmEAOe8eeroz0aAwoPqb2iRVxenZ%2BdBqg9xWszcp7X3BisZkckyKMwN1LoYEopV1m54Xk0pzhpgOOX%2Fet4Wxf6MX0HAwgAPs%2BZOcJkNJa7xJVVNTVEzBY2WCp23GhhwlCDOudXRfn%2Bo8vJTHv4jqe1GDSXH0F8yrdZMxqlk0c0ed0kRz2mDEDul&X-Amz-Signature=120a8de1941d31d9b950586425cb4c9754eed303850c42daba444a7480edea9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
