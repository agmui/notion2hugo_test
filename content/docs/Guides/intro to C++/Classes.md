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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3TW65QN%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCqD85M3cD3bswgia%2BbO3TyO3yn3Cs%2F1%2FT8vbU89MpV1QIhAM3ZGrm%2BQ0%2Ba8HpHoHmaYskRHeZKuxXmLmCW0YcJNvPgKv8DCCUQABoMNjM3NDIzMTgzODA1Igxsv%2FQ53rOi4Q4tkRYq3AO4EP3M9kMThYfI9yNFapw5lYI439EQ3QV%2Fjs5m%2FK5b8bmMbquCsrLfy2C0lLRpalNOMZjMvjzLkAyXHgFdGBDaM9kcLH3RXOaHztOAkf7Y1jR0vIbGEL%2BKqAXO4tIlSB7TJzL9cqnR0YKp%2B8az%2FYEXfLPgr0PjsUaA1eb9%2B0EMlu1hxSWN6SW1ihOConPmOes91iB9RIZ1di56dFdnpNuwvYTIQdozp8p8%2Fmko2Z8kAahlff%2FxGzGYiXVdMNDuQS%2Ft0eA3yHZwV%2BqCAFmUATRUV6JHc9DTB%2FSj41INw9TXdenv83kdDQ%2B4eJQW6G7WM2q3zVOcwXfRmbhR55HOvpYRPJV%2FuuE0twpzbmxQLCg%2BeZ%2BI9wPsnZsW5sWtDJWaoKpq%2F7%2F8kT1QnszFCpOIdTAGJem0gMYCftKgHN0lSzP7N9AmaJPzYM9Zwm8hOFDCESaLdwQvwZeMmqbbfR3Bmoi%2FLToA%2B%2BFp19aOMfa%2FEEDqGxrMvqg3DLd%2BszLyiTEQjiR7%2Bh6815Jc6kCDDSvMVsHdL3lAIWg4ii%2FrFbTY0rQdsp6p6KzTvoxv%2FMw%2Bgr0fBvfAL1xhoDMKe60EIuPDZ9gGfn%2B%2FuFsQnP5kPP2kVIyYwJGWiUjgIsL47rpEPzDlooa9BjqkAefVtAvi9N0r0EOISQ%2BAB%2B0KNRapvlSsE3DbBNWzbkZujG%2FBBleeKf89D%2FdyzFmwWTE6kuGfGZtU3BxF5Akifq6hNqxRbp5vHQp8RsuMi3cptFydhHuUoT5KvFuE8cfJNwh9wz6PsaJF3iX0JfZ2mh4HkGv%2BpaaMKV9WG72HZdEIX%2Bd0CXmL7j7hVTgmCNxyK54iQoBW9KIZ77Y83hrMfAtEX8bt&X-Amz-Signature=eadb16a4b469a738ac2649646f18a35b77a26729bc66e0926dda7729fe96fd44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
