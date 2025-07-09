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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVRSTEHA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAw3jkEB%2B0oMGzDsGLvPQRTAWxTqcfva%2FpYyx6Jj5%2BTlAiBmH1SKLH8xqURridTX06JQ%2BE7Cv0Lifj5VqH4UYv3jWyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMclT9nUYk0xoySlI7KtwDjg%2BiQk8%2BkD1lbiZsnYyxo56AYwcWln%2B7rPl%2FQyK3A9yA0%2B3q5RHuk99iA2LaW2zTEXlBFm5473RDH2Vtx0YCqjP9ypzzZvcMiCwqApKddDJzThB6bZYB0rxf91lVTQM%2FVPgCF5hrk20shIZ1UjqnwvlDSzP%2FF8ZX08ezAu8nUtxMA4dqnBe5zUWEHgdPNdX9Jq0teS%2F%2FFyOnCHuFX47Uo%2FJNR5wR%2FmzbHJYJBFTXh%2Ff5SnntrMUN4skQ1%2FA6mowy8mcDXV%2FOY0qQaxoX8LZYUL3OZ2RQysP1azKP3k4HQrJBAeM4pjUOIWRdsLMMCuwWAoXv%2BFPzwd4TaLrvFvPb89LT7NusqpIJCbBXzY1YcLfczlA5ObShc0RX8bj9XJPuw4jiub8CrGU69NuBQwgZOFI6gDGHAV8NqdLkvbRUwrEN4sD9rqSUZlcu%2FP5%2F44vuLyX4dsKtou0MTD0CLDSgzNgAkF7gITsi8cAGjrLPrJ7kHp4L2uOYXY%2F3pz26RURprs%2F14o5yHVA0YAcdNwnUV5eAIWUemV8%2BJdQrxXjUlhaHrfs2ozUzTJswChtOGr5MotfKSir640tDAe1Hx3HGEuFotKTC1gi%2Fr6%2BB7nJSpk%2F%2BoFknEFNXUc%2FyCgUwnuq5wwY6pgFHH5we7pYxovslHrVV%2FryjGcYu8Tk2YGM41TBlBSL6FcZwW2Gifb4raDN%2By4zTQAhJ%2FAGPgOrAjaXNytuGr%2Be%2BpNxiN8bx64MQ3oE0Po7DbXpoQ%2FjF%2BRtSNfFq4ZsKYiiyr2CVcnAlgIJwEJoWC9zQfJUkqn8KtymqVemLvWfxcdO6iHY1Do61Dv9rI7PYWnhBX%2FC%2FAW%2FcEDCEtvf%2FOyo6y5UBKSDv&X-Amz-Signature=74f2c8c080326f52ec046fe0743db9b13bca135403a9883375270b6a9203c0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
