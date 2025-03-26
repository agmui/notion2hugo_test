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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z66G5UH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLeAGhP4xC%2BHP1YivZriOMvW%2BGoNfXtSFcRLCRbTeLaQIhANIoR71Lp%2BnAA8AueC9vi3vGvZw898nXQRrcgwhOpb8oKv8DCCUQABoMNjM3NDIzMTgzODA1IgyDUfxWc6k6lK1dfoAq3APwUe%2BMvaY%2BQnMPqCp4VHGXhLdgiU7frFxeOw578n44PQokhMxU6iStV5PiLt65tw8R4aLzjjs3duuArEZvkhokeTZjrHHTEpo6hHJy%2FKfQFQ%2BSciJw1aLMUA9l9f%2FPEkJwUltcj3WO4hkWSwIcd77x3CRrYZE8A8ZxTCyEAZQYgYL6V0eYxCGJqj5r8Rox6pP7A%2BueUUGV9vMZPghRxgo7s1Uo6lbNrEWTBNOk5FPJEPNwzKiTbpaMDbAX%2FV8jtIfRupnrmMVmT5MakZdluKQsqxoGhWfZXcMfAmP2JL1mpootGyFP59TFUhQXNr1eadspChMU3oohTHxSAARrmLwQegMhImAKMMbhQCPkuUKBW1KP%2Bq7BrJTRE3Uzrk%2Bn4gBws6GQUnrI1CJx9JlTf0ym8sYVOU8tbxNV9IbiW26eb4LazmzJFCpVJAEcvXfQZewjAbopGQfJeRdAJLm27y1NPl7ukAzip3t3AQ8Lg4gjyni5RxJclHzcPP4uxC0%2BLqENmGeajIM0r2st3o31oTobreuWIf1%2BKC5J3TLkDCpHGqLw86FMQtP71lTu9KkruBWivbhIAUdayCzaDT5PfqoreTbR9mFaRXMzP4zjHYkazIb%2FSedtKhepA9ol6zCQ6o2%2FBjqkAXt396sBGS76OQ%2BFx62xjPJh0jJqGtYeFUGvw6ry2nQgBTWvB15A1gwRi0CAUubOW%2BLwwoHriyfcOhxm5v5PPxACLBWMPlZD7Tz4EUQtPb2899h6LuMcbZiCzrfI774FfEXVaMunJvg8Wzz4xZdEaRmY5Rp1N3gAeXFpdSxkhFF47g5BSEaoPs8rdPzuWfoYl%2FyOV%2B45CKBeRQZd74If0GOielDx&X-Amz-Signature=120ee2a6cf8cae2a47404b2088f300fe0aadabf32d1da7cf899b564e37e6ba79&X-Amz-SignedHeaders=host&x-id=GetObject)

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
