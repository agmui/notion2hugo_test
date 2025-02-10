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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTCSF3G%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFqIUeQUH4%2BH1iM%2BDbfeFkEDe6ESCoh2NhGIdUDsGxBAiBNxcw08GV3dTMX2Tp11Mv84qIJQaTAnyLvEH2i1rL4NyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGIarEgZo8gHaASelKtwDOL5XOsXB1NeGwcfH4RulVxGhj4a7rtVLDt1Ru6NcuBIVRfF1cp6TuC8fKd751%2Bpuvn%2FpC308EVafb1HZvqagjaATg%2BKYxrFDb0wzde72REZQwKyeD492LLFxSmnxHeffIGF0JWoE5oZySgerJnFp%2B3ZFQ0DhU3OeqmKC2slRIEsJIJQ561iOy4BT4%2FJQhmZ2BYIqx%2B6xdaCIM7COnUQMPypzDGe36V4Hgv41r8QqeLmBa1nyQzhl1tXlzdI3TAsOYvLQbipDwkrydcZn5hP419pFyo75WBqX8hFLuxX3EorYAVum8PLouomfJhIjgONx%2FB1bayao5MX3ZEzZFTIy5bzwX6N2Dt3cNUaV7gvU3Jtpkf8iBs28hZ7sYxOi2p53Bnpk1S6vgNL7FNGsiX12kn3mU82iZ4%2B0C1YhpS2nnNJVaL8e4YZfrsncV505aDXKGVWEXUlGS9MwAE9vlLV2aeYKGXQBRp5IPaguoXY3vmjVIGcoJpIXL2ZVINaumGKEgOjab8tNjZRP6hauNruaQPgtCqPYlg0SpmhWzch8Ikz4to5UH47%2BpJNhxL2%2Bz3o73J46E6SdbWaf3rYU92JRoXzQIUDB3ubgdNYTP5AvIXFFjv9JfRd98L9jqhIw7%2FmlvQY6pgHjz1Wjr2%2BKYGgXsqZM%2BKQXm2Asr55yxENRMO74AfDt5nAjUPNp4nL3Ps2TUKZO%2BZqq8hH%2B2IFjdBq5lUwMGpJ8J97BcXqig0L9PxvR%2BpC7c75OPIGTh2%2Fhyr%2F%2F0yjvrXZvw96Q5pFG2GD%2Fe0uHydXxL0H9ACRBzD7R0Psf9Y5wJpLmX2CQQvOX1UhxxECwNxDB9CdY6PKaQvzvb%2Bl3DC3iKZmSDPSV&X-Amz-Signature=5127514be72aee4f93b7cd0b5c6de6ba78d2c4c037632f3ae1eeca4fc074348a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
