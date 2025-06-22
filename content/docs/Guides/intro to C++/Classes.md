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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNIQNRE4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDjreYy1OHC16hrWuw7xmGfPuQdg6RjVpIBn9aC%2FwFVeAIhAJHKUYGM%2FT5DfAMncoNOqrnPkEEWDehoA9jO6jTwjlgWKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza9bHSt3Tup8fmFz0q3APVh6GCtpjTzaFkKdO6K5vIfv7dQvfJtbV7uiOPkHvmTG8ObFnFB9xnAjWRv0kXcMNSZ%2FFHHAVMl1uRIJ1HADeoYLlL6eTsetOZzLNv%2BCE7yTIowopfVy5z8Xol0VsnYI07QkmvGRsihI9hXEqDT7G6M0Jf2J8jiFtT0wLKk8Ro6KKBiYqicteXVST2hnafPdmtsJwix81wmbXqr1nsyF0lugkBqadZwkgCoroFiwJLTviGo6H6fjeHdEySMqmwmBxuxG1H6%2BO4brxczSHi818GD9kfGzJ0HGtOjDFqH9jyoxhMZsS4zwJOGBnLB%2BgqmVMb%2FE8usJT8JmgQ02x2hqjDrLcfR2g485YWZ9shCnI2kXRgzPPKWAEEEsaNQeym3%2BTvcHizk96cUzheTooZI%2Bkb6IZj5rywB5CqwTQp59K0zz4g7c0YP3cRAZ70sI3u9OWE%2B82mgrwf9lK1QjLxcXuiz%2BTt0Ig%2BgWfPwH2axemLrojRnN64RuOSE%2BGbxqNO1ZzQVKecxo%2F33u0fFsc2jZddgg7UOvJjN9kYYRIDM%2Byg6NrZy0e6J3B7tj7c9vSn7ZfraXhlHjgC4hGE08esF9jHAZ2z2vEApr3lALeP0s4%2BPKOn6svSsPCVpfSzhTDhkuHCBjqkAf0yI%2BUYbBlE49Gh40xy%2BNrQuW3W%2BwGxyLKzVnsQRDOQwdloVvnUbt%2B7yvn3n1oNqXREXwIwmM34KGfs8QNm2b%2Bn7zV7TxBM3k2udfvABwQHV1ykbXzcE%2FMnYvJGlsjpbG8G9dDwtp3sHH4Y6R0CYJhDrR19Rv0NW19W9Z3VPlOEOU16BI%2FSNa%2BP2TW19CIYh1qoUZPVNg4hiNUAee1g5r1eBqGE&X-Amz-Signature=366338ebf62d1ae40e843378782d88f0828a5511077f402b29baee9560ffbde6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
