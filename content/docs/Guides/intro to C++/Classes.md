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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLIDEK44%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHDJER7hBsaDibmUHtRQcUsZ2EVWZ7ZR4ujqF%2B9h5NgIhAOLsU2SlY0Aamvz67tvbkxlIWoxqIjgcavA9%2Fxf2inrsKv8DCB4QABoMNjM3NDIzMTgzODA1IgyKeUfSuvZ3cJrgfqwq3AOISbiKBdFPOou3Dx0wYKzbGOKLc9PAhALiZrYOwtYPKzuWlvnrOub6uSMZKYwFfNlizCe4%2F1lHcTzcbX8A8fzl5QRr%2F%2B%2F4tgL5mCCzOjP66WQFa6nRyhWJhUnuQfgev1mMVLiTPgzUEMaJCIbmhqSa4oBkdK35oD3JmcIBNaOClDFaGAI27dwlN0EWEu7Bhe0bzpIDfTF91QLGYAh%2BKtndWe550x8dfKYntdLyvme8XA2rWT4L3%2ByhK68ySpvGbP14tP5YjZjsyuuDKSXlJfrR8Q7wLNzW7%2BvQ5yAsTPw24JlupVRnvy%2BwWpyUVMvgJhOh%2BhaEtA7SZ4hQSxuM8MbHiSyuEN6ufrXQm8zJXGQjYY4efY94PHw%2FyCchG83lyib%2FVtuF7Tf%2FoKrbLwG%2BCn7G%2Fc9J7m9BH9H9iSSh5FyF9xIbdIdnT5pmcdTfCQIAxZZOAJbr2%2BXHLL%2BWR2tV8051HvI8cX%2Bl8VvbWAJL6gCB9bqdXw14myvfGnYHVSTUszM8rCxVdGlFB4shprCTOPuKfNxpHI245mvVdEvGI1TLVb1GqYTw2g9NkclVL4Hv5dGxNeGpfkfVF55pm%2BiJkxMsmrY2K87vysxLDyiojKZnjQhylCMKm01v8elWuDDbrLm9BjqkAbzMWdWMiyx9eqcSApLMSREORlSQknbuv9yyaD4W3OaibMm2HedD5Dynto3bBtY%2BNFpbgStwz3rr%2FZoLx0qrrkxc5EfMpylmoCa8cQPrrPWNi3KHitLVCGQ%2BZNPSbPCgO7batPFvBQEhZ2jiAn6qx%2FAoB061XgzSrcPG%2Bf8wa1OEy9D4mCLriuN%2FNAMiMNBoj%2FoIBE%2Bm4bpLqWVmGMXEFanA0Naf&X-Amz-Signature=0c74deafab1b8cc15f7458c857aac5b8df442c125db31f0a468cce6fcb5c4094&X-Amz-SignedHeaders=host&x-id=GetObject)

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
