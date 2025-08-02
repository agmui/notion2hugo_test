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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5QBNJ6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSdWMZrROcN1XisjO%2Bdodn3c5JNkbi%2F9vM3O6A3vhfAAIgdEcLJ6XlnHgB8aQbbLB8s01rqtgkbzkjlGOpILB9BnEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAIQN39gt49npfPt1ircAxe3Odt7VZshC%2FTrflTNcmqmAa8uNBCx6Xt9He%2FLdLg38bejo%2BbxiEA8F5xnVbDez7mrOczI89r7YykC2zEbZMAGmGlc6VbPaK4YiwjYSnAO7wgcRk5fYf7UnOllOX6sf0CxHy5S6J6Qn0hx1kHC31LIZQdihdhGf2%2B4nRf3yde3GZ9PkgbsgP8t9g3G4vMyHE0Z3EgKTweEF95nhDypKtK3lsjB%2FjufqRGRzf1cdze90L%2BO7MkT8p7sgszW8yVmsZux5XfvE78bD4z2LW6JwvS3aBK22uZEaF7qAegnOWaKg%2BP42aAEGlp9tLDQ1dLEbRTtnSyinvdJlF4%2FRKH1SNX2GEleZJk3aO%2F9TQwNaXAiH%2FGDlf9ghijwiSxiyEYaY9hbwfAEs4E4TyIBtVKKTi1RLXpJ7oYBrMFUcKhDpng%2BFwwNnAFKs6wg05HwZIC97paUgOMtGvQ0yAMAMRnkAtVeQxr2w0GPSxbDXuL%2BzBdDwt9R3q2tolNWl1GmXmBOhrkj%2Bl5QESRLVsNgFvDI17HuhNcutv%2FE9cZ79o6MXlLHtfXaku0WwC3Bkif%2FTn1A1BRRKz%2BbJVZyKA8WHjPxOTx97E1WRUT8CrzbJPofgeusLLPp8O6y161zoYVUMPHvtsQGOqUBHgoHkgSz65wmq3TdejCQjGdXrUVvXnE7eddDvm9LsDH9VU%2FbDZBHFieMpkhUKnjSUTSQZsCE1kpQhSM3icWe8MNPT2auNtHtDHSggThBHG6WfbUVb5XukScHEcPWc0GW7rSViNdKz%2F3ZzjyZpOMUcKkR1lt0q%2Fa%2BK3r0lquYuZ812FLb7e3ZyoiAy6XdN3y2SY38jDHM6t8XR%2BG34jl6pbQNuCAT&X-Amz-Signature=e01b0ff9a1ad50b717a9e33d232a27c8ed2df55feb2f771d40da07fc2ff1bae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
