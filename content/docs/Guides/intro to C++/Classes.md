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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YPMNQBS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQWQjHh5%2B9nXwaXQqHTQq2%2FFSHc8FVCdla7244W7tucgIhAIGvNWwUkjPh%2BN638Z8TPOSAFLo%2F9%2Bha0Qgw01n%2FVMK4Kv8DCC4QABoMNjM3NDIzMTgzODA1Igzc1%2BjUDsSU%2BCqI1pAq3AMQiE0EPJZ50eEvkcUrQpMycH74qdiEkAVLa%2F1z4tA6YI9De6nnxm4IUbETD5JNwwpOOoszZ3s%2FifR3eYwxJO8XEcTdEQ5NBwAz5Udr4LZMt1MxXSowEkii2VYMKwcidh4qKh42BBVo4qelyw3vTBqKQqR2peATkcdweoV0ZZ2vYvt6oMiX%2F7M%2Bev6LfE6NT3FUWSmElQr4KGpr5DgGLIX%2FKqzxbZK%2Fo83%2ByZMqs3Bv92jwZWxfvNkMn9N7eOs%2Bxes5XsW46q59J3aqX1hB5E%2FO%2BBAmpAJaOoI67ORFP4foRV8YX15F5bLY2jOce8IEaeMl3uT1Zg5vrXsqfP82tyH89oU8iSlyYPAmkgu0Ys0QGFIlnnhxp5Zd%2BEN2U2VwAKoMCUsFx20ppAKf9TQuDcawRfWdLGsPcZZSZuKyoAoMYs27K04AkDdhAcpwBWWPf1Xaa18KCk4tef%2Bxdnr8fGIMujltEH9deMseQWgLFlkR%2F9D2XrO8M%2BNnkNxKt%2FB%2BjZkPBt7xfS4fvY7sSov15NvMsFR8Ijo7iOlEDIakwhaOWr4g7OKDXbg2w4yB6OWSH5G2YnJakpLORhXyS5Iil8V0XRyOjGJYIT14xPCZYj%2ByaAQkOJpxx3K9XDiO7zDXsaa%2BBjqkASozEE4WegeOvuFJmp82xz%2BxHfozRKa5lTfpVpaMU99hxB%2BG5Ia2Dn127OqekKeXpBu9LDFW47dAl5eeIWBPTEqtOjihbj8Xr4%2BOzf%2BKCAwhr5ZqkoJTgdfrPR03sPTfwtKdW%2FHRNdMr%2FJWl0D1aJtDdR%2F0N25R9QNNazRSiVNg2LdDOejbl6MMMOGwDX2xf2EXaY14wwepXiler4NJepPEJxcDC&X-Amz-Signature=ca0483201750998fe7fcc6599c825cdc48ab253e6b045be9e0c7d42337df5fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
