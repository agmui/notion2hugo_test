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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXABBVKJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BughTo2KVzloec6j%2BiL2BKapX5b8vf2w4IzrodzSikwIgV7yx451yjTOEoqEhhq2%2Fow5GDtP%2BxLBOivl14Sydr6gqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG22f2iofmqkmgyb%2FircA56GtYXjJhRIP6uoO8q4LmhnHUxZpHjaWFHGpFzNjOtpC6qFvX1MrjSKcjvvMb9Xr8ltGd3HCjmTXesx%2BG95sxKY7AKvOMywg4QTha3NRdey2oSAe9xZU9fz545Uz8y7RgCw%2BgWWJamHwbo9XRxFrSZeduRPNS9N85ALOTKlkJ1YAidl%2Ft2hhwCAsAos2mcXElUkvtOLbt824iCIruy%2Fog5I%2BSyehI442sO5ag5CzF%2FQ9OYQ4TB2BAYvBFPGH%2BHaevKKvr5urKimKf%2BPyiwW8b65OENqvKkOhAJPKGk7sDXmXMzSyiLjcYG5cULfy3djHXOIAkDjSfQpxkaZVx9jUCWZJnWjYDUulzuBpPcKmlxwxxn%2F14BS03N0zxdZcAq%2F1RP2rSWanUh1%2Bc2dC8YoTdVrmr2fNm9L5c1zXwkcdqkW0oU2SbwCnu4p2G%2F7MkZhPUKRgsGBL8hDXRrlzjOTDC0lPj6So4%2BrBfZe%2BMF%2FYoM8zh8p40BmcLHcR%2Bpr6KTvcrQmlgENmFQ8mGPrsgsCN4yOovrckghsclaeoRFaioFyQuryXa2%2F1kqac7VPw0gdco1WewyX04NXavIpsiN7Rp7H5Zx%2FgrB2Q0SAzF8UdWHcV8Vw2ka2OU%2FpA%2B2oMO7Hs8MGOqUBV6K%2FAam9QmDpbHfRUQbPyH4q%2FjKHBhBci%2BYua6tEGdWxKbJD6CYkkF2iccSwC%2Fm9qI6GLGwVtCc5HN30MA4HRnUUXGqTagqoQPAIsdgFpQoHPws5FHiNsnPiEAawqDxcbTan3lnJsFhLsg1NR45EIv3b%2FNzFaab7bawauf4pjNZHeGdJUJgsZl6G%2BGxg9yIcR7sZAsmiiqCnOFt44Q0TIkyJpG8X&X-Amz-Signature=03169b7b18bf15381448515a79b752712b63ad27388351a8d1a8794aee0af1d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
