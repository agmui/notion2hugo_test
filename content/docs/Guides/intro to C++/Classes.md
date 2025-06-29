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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZX73NNJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeMEXJYeJlaK4traZcskiwhQTQQgzjfI6GTMLoS%2BjG%2FwIhAPct83nedddJT6cOF7Cw0DKpFlqV8x9l8ndLbObrPMYpKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMrCrPfClHC7Re0KIq3ANU3AXyvhnHHzIwNVV9Xv%2F%2BAWaT0JGTTcW0icmyuy5XeIw4RWkpVj6GRr6I6HUY%2BCEDPOZ2A54ZPRNGx%2B7o9pEIDDhJGXqqgmAUhQbTWnq2HeKJwRJa0UZBYAqy%2BW254OSNk4D6tLFw7hG6D09oz8AQb1QQEgY6Q%2FT8ywjzoZYV8tbqtzLNbBOyFdqXJ94gnnEOW3iOXxLI973Y%2FYG5CAJiqjklxCiCgRMVaVCJP7VXPyAoACw6ssgzfgA5%2FRvpZuSA7I2f%2FPRMc8g8VjtXrURUiOLHYW1TeF0Ip3Nx8ja%2F30bhU75Ye5d%2FYG2iUE%2BEISELIhrhTvird0QUYQCJQ57w779EWKf2X2bXGbLRggmUfS%2BP5tl3m9wjsTwloRTJ%2F6y1aPfmeo4FT5DnJ%2BJx8eW9NFMW4vLt524ohF%2FUsx61vO%2BRW65uxohXX8Ov35Z0JHJhSiBKCimMN4IeH22LEUu02aOcRUlgLTgwxYhGvFDuRhkO%2BuLs1NaSm6B1ZAn3iHdY4YACGSOmARoMYMiJ%2FtPwxq%2B3FfAQa0n81xqjvWse%2BP7PbKsIlVccEGnq2Bxx1KF4xVKmgIa%2FCAIsBeDEe88KI3e3Bl49MHs72gHggJm8moc7q4aR4pgB1lClZzDDzYbDBjqkASOUCLtOxgszTcMl%2FBZTkz9pDYMvJGT2twjLm32tBun74UpuOnhY%2Bzarv912OeAGYUonry0cBld2OhFavfeWrs7KaEALED%2FK%2B9uLCKWle7%2FWwtwF24%2FG1hWc%2B4UYeQEvHnNE9It1f7GALhph%2BnH4FRCMnmtJ1HA9rh%2FVgEcfo%2BMYnG82FCq5%2BpYFq7aqe9qMC3YQPB6%2Bmp3CFl68JhudJ0MBXShE&X-Amz-Signature=dbf8e7584ec7eeaabc5643c3b49731076acfcb8e2abd8f5896b3fa337d97fbbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
