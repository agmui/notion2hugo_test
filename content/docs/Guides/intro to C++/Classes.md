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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPCP5M4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIG6imvLpVLmf5D2UXXaEBNa%2BTEGHEOxIsTkqDmBkca81AiAwgKPTdhMOhKdeOLl8xGCurvUhDvYUHyMIGwER9%2FpWyCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMNWFTf5TZ3%2FBWxU32KtwDxqTUS5ul7rrsYyUblrEUJfmSynvvQt4%2FCVeQtIKnk42HzgnN1f4H9Zqp9C7sv2kFmSdJLWi9q1E9T0OknVzq9LAV5xCpGntBdhUZjiikd2pnSvThW%2BR8KMI78JuOAqPo1hwrIzR9H%2FcqYJlFWnGxOdEcu%2Fcn3Dzh6B2v9q8%2F0eb90qDHaPMfiZVCzSHrrjl3ec0%2FZ7HBJ2A2Yw3V9C5EMSYngtb%2F7VCU2JIPn3RN61d0iMr8kgrQu%2FomyC5khYs9KLs7OcgVJXhMJE4eF5z9eFGmdinhwOXdihYzhhv7k3n12po26dARZNKe6f5YWiU23a2MzfLf4wR5vJKQEz%2BVMaiW5auUF5ujndwkEEipcLfLJSDJyZICLN%2B2Ov1Le054Rflff9adRLFg0CXJh760bWSlo%2FRqCpH2rDTv07ac6SjhQgEmoOKZDZuHdKVuXQoMJnrPg6A3Q5Fg2P0ig1OXjRzHu7c1aF%2FjaWGYH5szuZrIWb0Gp66XsfM%2FwRF%2FEkGXN2u198qDFISxGN5mGFC46HqYZ3dh6y1zBKH1HgiQJ1nKha48yBvQKjTUkpeD%2B9qsL2jr9H4V92UOYfyy32CYPHaU8PJh3q9xjoj8hOAjMdHTbwoNPol3YXbF4eYwkMeYvQY6pgFfo42jPXFYlgcBkl4mYCDgW5guoiMFatnDYkgyS%2BwIFLyZ8HzKQIVSPBPaarEOf%2FLLXjQlP%2FDon0i%2BE7AP%2FfINAhNN2FzFVn3sy4BWguffg%2FPhoT7me4W99G1ypdQL6njvrr41m5g%2FN1Lke8yFLlX1zIJXIUBI33GjNvbhD1YO24IofsX6pCFXIfSXktwxyKdQQQvJZnh16FEfxPLJRhlqMak%2F3WYh&X-Amz-Signature=8a48973cfd2644775a43f6be59bb2ccdc36e4d957c64dc498f5a0f0910e78cd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
