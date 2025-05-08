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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVTMLUU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2%2BVeNO3F4MFg5Q4A9Dc0PLeUUWf%2F%2BFsROIDfNXWSw%2FgIgLrY%2FFz%2BXt5jp9r12AYlP8OXrgnUtNn2sinitkX5N398q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPSMmvYH7ar%2F1W2pWircA8kOIw7Ufy3Ra0Qa2zf%2Blcy8AUo%2BMg55fa0yAm3YitdLCpc3r%2BGixJ6TXK4uiN3DLoCEIDHgdbASdpYoF4fGm6SPBNGlaTcqUdEnnXDMPuD14%2FuC7OimYRn5F4bbTrfvGLV7bsN6OlStoWzGyZj9B5mIGZTgARAFvwtaG097eUeTC5MI8OEbOQ66mK1AjTQeKUPmO9W6M5dY%2FbvVldQ%2FT5R%2FOGUxnHu0LJaF9qDsItgMkWT%2BhRn%2BO6iVJ35AVljr22EeOwamMaK681bjjzf5UGqNNABcZKjXjGnzOmGIwDgQrMx%2B0Tbg5KZkyRl%2FRa%2FboJzUkyWbm7BTiXOQSV%2FlnYTOp%2FYiA9qzvOiBw5K5mNznWZFPA%2FHnXjcuqhXi61ZsLzh4U49kJUpTY%2B3w3FMnWcodAL8Dklw4GxdzSO6LAxMG8WV3qu1xEBW8vkIwlP2ducjdMpvl%2Fo5nNVSabGOSESnBOptMwHXKLCdqTTHoVO0eaWQoJK37%2FTHOtaC4TJSupH%2FHzUnQb00LLIOXBcKmirs8FBnP8Fnx7HnxTTGK6KBYKsEDVU3zUunB9%2FjXH910fFGHkNhnUEgZUPAmI6SOgA1yS1%2Ft8S5bTKO93e%2BdJek8OpB0PB7IXrlZr1i7MIWa88AGOqUBxFtsIynLvs7NZjKZlOmubsyRjVqTlYB69XoJpPXX%2Fno87jLrgRdGlmzFM7sIAqAB%2FxKLbtaLqaxzDb8h6OKQmkjAvWjyqlDlsl%2BMDWgJOizsVNSJDgO4MRQaX%2FlAJ%2FTOmTkKf7yienM1fOAlKFwZJ9RFbEAY9KPYqMnZjYyZCDiHCnyBgSzaK5YQdWot2pYf2ujbHeguWa2qVg0bw6lIzeIfE6sb&X-Amz-Signature=31329b5c2fe3b04bd7c44c1020c82d71d0cbcb494f3485b1d63978fea15cc21c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
