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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLKDY2WD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIEFPpIgkv33cEJ9Zaqi8Vv1CLzvukuhXJgFLTiPsCFXzAiEAimKAGKZpq8x4SbCE%2BjAXqtOzlvDrcZ7iIcmWUS6hucoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrH2z%2BpMZSNriAA2CrcA2TxIAPNfPO8QxF4w6mhOjJRgHsHc%2FOolsJBSIYPOPLwja7XaOELWbDofdE4YrJrLo4nnRbslTiS7%2FZQdrxg%2BC%2F4AMWHFFtvSU9zOq9l5aluwaCbKOzkuYutc2QY%2Foo9UzrG9sMPLd9ixGYso9AYyespwwAGBaCtt2tBE7oeRe8qFwEXKW8T55OV76yUGjjMPE1caFa8JTu4pV8sdP7I4P6Q1gUVQL%2BP9FVxUxR%2F0vud2fB4GiI7WqWhra9Zb2E%2BYeYYZ6xZU3TD2eZdrbV%2BpDTsMc3HLmNEhx46Ty0ExKdb%2BVeBVOI%2FVbeAhporvm6IgpisuHOoWA2ZsOOnZe8AI2glBYDqj2Y%2FS8T2BfGM%2BQ5BomaCEhTFFq6Qtde4kBr%2BinYZhAq%2Fl7EQGXWto96UI0R1YUWpvrkHKbzR%2FDm43RV3QaquwF2pxitMJ%2BHPUeTXGyBZTyyVyelZrdEcstNFGTtsfMj%2FvgWCYL6JhkzqK2a1k5vzlr0BaBSri02U8uBtvMG%2BfjhnR3NstJKuN9qLDXxsfFHjzEO90MynfdglUaVXww9HyqHnYk3zJMXTuEwKtaN9yPeDdZyJ0eGgAFy2Zf%2B%2FCqDxEf%2Ff%2BxvT35a6huzlI%2Bvmw4gRbeoh73RrMLrwo78GOqUBjmDuWmPULSyHD3AQXXs3LDYcIeoeb9hqPXCi0bwBxQBXk1JgZdvfSm35ALrFrV7Exl9saQ7UqzzBXTwgSwanc4LlqXChtfaO0ptvfilN9mQBi8nI404JIbeGsUkcA%2F1UxKFI%2BGfVqFt2xeW1tb22l%2Fa6y%2BeIaAOj3jDHzSdjZi7YfrBNbI7W%2FxYot%2BM%2Bszf7BCRVTZjZFxGDZgdchz8jG3xHmLFo&X-Amz-Signature=8fde16ebb250776eb91228a61474ff26894ea8a706dbd72cef4c582a745f52d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
