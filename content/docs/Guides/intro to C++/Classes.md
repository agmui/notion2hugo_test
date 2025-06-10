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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKIWS24%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIBvEl%2FFQ3feFCvdWkicrTUr43WEC8hKwcCFXg5MrFKAIgRdUpPFczfDFzDRsUJdG%2F3OHei3eClEQ2Zxd7cYcoVUwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHcmpr%2BF1PoIrGawCrcA9wFtrDChenbas47DDT1a5kx0jH30PKYiFZnPA38Ijjkx%2FV66qMrrJKYcSnKHJtcJMUStflngzyyI1FSXVyIQjY09oNbQHXZjKcs%2BHfgNtRfe0MN6x%2BZkMYyl%2FUD6tsZVziPichu%2BhLHlE72hr9%2Fx2U7gfrz%2BnbUAdwDZuJCsr7h0%2BsnNI6TxvtIH0g%2FtOFo4eUnnLbaIgFNC6fMpY9crMkSiTuci6UtlXW4Qp0Z5VWPYMJRD5SXYVITO8tLXIfFP1wvsgmqcHvjhjVE%2BUpM%2BAmG1%2F%2FFJAvDcpbloM%2FFrlqlQKnRhJidzjH90%2B6L9fON7Y2J6dBMmmiIMJwLoAQLxK02PYh93iMME4d1Q5YKFEt2vqVgP9nbFFhMfZwQrasK4fN%2Bb5qC0MbJ%2F45cIfyIdqF7Hk%2BxUQSVu4LwzY2%2FTthALDO6Pcf8pz0tbA62cFZAwrhQOUZpqpjv048pylDbxcvwJFUAZBVYc5989LyxFzCv93fVs8n26e9%2F0exQAb7dNJSGnjl54L4gsjXpIa3krwPeZReAifFx1oF4ZZRqAgW%2FZTdxvpcf1lwNjf5AxD0vBHn4QLnMLKtlYGQAIVhmMRc9XyMkpTwdsYFhqiNuL39je23GmnkL2scDsa3LMKvKocIGOqUBoYJUmxMEywKoJrNVPjxXUd1H2YY8PlFHhmrga4HnPT96vVcVKhnHG2lmHiEAOV49IpGdWt24NOF4og4xLwGR%2FHS6ItkD8INyL1ppFN3cd8fkLu0hDxbERiK5OmEgt3Yh13NdEekwQkp2JbP5M%2FHnPhl770Eyq6C2xxjAAEG0YuXj%2B9Lnz65rg8923CWWheRR6lqxHMWk9wfGwTPf6w%2BIhGmT8%2BP4&X-Amz-Signature=bcedc46ca9eb565a2ae474997f015cfc01564c1e3d0e8e07635de10a200e259b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
