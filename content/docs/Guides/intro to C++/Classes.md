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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WFZ474S%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8XdU%2FXJICIFog0Df2Gh7prfLtxkK1FM087l299d%2BF7wIgOU%2Byv0y8rkROp9ZIYhVAqrx6SqXJo72Sqtcl0wwFFBUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIOhPynwTG5hYslTsSrcA8FlxUeL%2FAu2xm0sI7dgRg3rt%2Fd7ByGcftfD%2B3KyrIwQiPv2Du4JX%2BJSuoLetc9BtWukyPgnQGasZNagxbAZeR%2Ffct2V93Rrsj27ND0xzFPpoMosmvrkkWv4GJn9E%2Fxdb%2BqF3F1Eri7PQbjtlaKbNxmaLC8u4cluOhKfdhOFMcI5J9YyGsPEInNu4nwhm0zV%2FF5x79sxh0qCc82zpp8pgp4QzdPITGgKtAOVBB8i1%2Bo6EZQsB8GOx3ci2s5SfkIOlqvdnupPTtcTRgE6R%2Fq0kmHea4o8KxHXTQewSZJHZUI%2BBb35HY5RWQtx3Yu5bCYcLGw5Ng%2ByoYjy1N3byen1Afxn6kfWb9%2BRNOy%2FWj1Sq30r5yLOYFeigthS7um0Ab20UP3BuTGK%2Fyr6Vk6DsG1VKRHuGUGHIWb%2FRRzaD8AKExOMNztK7ULv99y6gyXhDG4g2ECBl5xgryVnRF0mxRkNzijOohR3YThrgLRXu9VrUEtqe6Sls5GPGsRIO6kpv1%2BxcoJJSMddFzkvHOSwXvFcPKK4%2B7gPu2G27ISs%2FOMVn1IyMMscXHX9aJ26amcTok7kLJHKs3Mx16jUJdsSX4wQZ6ur9ILLy%2B3JfHmKZ1VNH74tZ6%2FzxMjbmorHfxUyMJu6zr8GOqUBdguZCYFBts5D2IPrLLFstnvoTvcjCV4rlW3F9sFblJu4CHth%2FCyPebvoRLIzIN1zZN63mzWxzV29aAfpItzsg4j81ol%2FPSrTMy5WSpf9pQCfwuL%2FegGlLQFyz7Pf0TWXJU3xntFbrXNJP%2Bp5cH157%2F4C5CibejCY9jv8waLV73JuBXh8L%2F40SHDxL7B37ejX22KA6ElqtT0nItMaKsJ%2BNTKBOocy&X-Amz-Signature=151e12a856b1235c11137149cc658430d8e3af28c63fec9e2f985586e8a21481&X-Amz-SignedHeaders=host&x-id=GetObject)

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
