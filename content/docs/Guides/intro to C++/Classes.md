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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TBLZZEI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGchTGngY%2BI0Owlmbg8%2By8mfxc1U8jlqhNVNy7u8Bab1AiBNzp6KvHzuQMl9XtBBULSRu6cVn1R1YfN7zM2csxChOSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkSQOL5OXtKL%2BkavaKtwDMV%2FXEKpQ3wzOjlUX8AkBMXauzaR396cFNPW9XyOzablZr3MOZYbg2QNRS%2BAVw5PyGDzHtlkQOP5FL7ObHOJHhwHnl3cKIdI1nIFXiyjCbjovlcTc5GgmPI5zUwf26YRzBlWMWwqiLPhr0TrI43oLmMu2zAGVBlyCO3eNE%2FkvMFQqYfbIBWFLh2tkDOTQcKY%2FaMzJrzS2oTmnkIgB0OynzltfrZo%2BcObAsplJbZVzoaxQCdp7KGi9lG6G%2FqILo9gJnab1L2ukNESrB3SXH3ZR6Gowsu1Wa44WxlVwZgwTbrWE%2Bo1mt4exQTbIg2uoiKnt8mU%2B29K%2F2Ee%2BawEobkGfJqFq9tp3RdpMnVk5UBUdMNikClapkOUE9VJAoTsPOhiz0rVfRbkGmIWWHV6KfmKnfHeBu7Fy0hli0FWiawNC45KsK86llVDKvlYL20Quh5M3felxLd3hsxfpAsyuT%2BDAPkrCb4y7BlcQyBEtHQS%2FQ1%2F5T26zyEqsA4a%2FM5%2FQ4xB7MaJ5QEXS2cNGqZREq9aAWkcD6sEG8VYeBq127TB%2FzWUKa25CWDV8ausvkSwF0gHkWeFsZuSGtDaHN0jb38e%2FGljJYjkSb5rvwjZMRHER%2Fge0IqS0mb9PUy6cAKMwzvLmwQY6pgETEdjbeOxuWdqlWbAhK91fuGmsmraiGaoEs3TeQ9FY6Y3svLMXuaPb56JNIalOahHV1Z1ATjQUeCzy6ZSgchG5PbNJH6F5w0ej3YusKW1%2BU%2FURCwW9SzAY8DiZz67XZPB6Qb73RygiGYSbTrHIhQ1BxUPH%2BNJP%2FFuX9brggih0NUk0Ih97OegdbrH6Ip3KRuR59CLqwTt8pcEaINWE0ERGpnVikV%2Ba&X-Amz-Signature=035ae2c36dc8c25c50bc21c1e7e5c56c2b0246910d10f31e65cd2542e6d5e171&X-Amz-SignedHeaders=host&x-id=GetObject)

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
