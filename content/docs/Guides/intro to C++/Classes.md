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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H6ZQGPU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCXt9u4qPe3L2yNnIQABE2ivawKlc4nmQ6JXQ9%2Bxkd8%2BwIgKajplBIBmIVjJAWwiO3gdTZEZAxb2JnJ%2FG%2B5TKK%2FsEcqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNENLvm5X9dDaOARLyrcA%2FA5zupLtMjr4sPvY8V6YDDxJx%2FtWMxxL2FkDyXqQiPiSpsLrkoO2xwfURKrWMqwq%2B38hzejNFhlgJONzEhj7cN0C8mp7Cp9Rkx7nZjef5rslNqU84yxhgsOGhPnqK2rBfmRiSBqxl6GYiiAxxrKUInwmNB8MO6b9nwcEbU4KwF6WxTsSP6KuJ%2FCLp1ZienB07UWKKhPSnvSummrXHnHMluRc0wWOTY2iz5E4zIUgd9KODAWqj6SD8a1YNhuUKNf5sh5voikB4F00kVPyVL%2BmJ556i7LRK83dHLg1eqo1R9gUnTcDKjOf326aGV%2F%2B9mCBF2Rn5d%2F5KVsLdywGiRuroqdHXKPWqI6ieU0EwRm6%2BSa5%2Bx%2F1S0Zv3sTYz0g85sYpWoXiHoM9L8pyfaf53Wj6ZcZM3eQtGXX4b90XPyXF%2BHZyylx5921oMVLAsywDJhX5HWI89hVw5Cwm5muQM2FvjnTIZifH%2FnsctEntfvDD0RFFiETna0kFktqu788S41upGwQgS67Cc6Tv7Z9vVserfZhhSmAbhuFTGblyodaFDS9tIDxQn48cA0BwRMVSnKoB%2FB%2BdKssDy31RnEYVtPLQchUJ1YxWMFVV50bEPq%2FtarcKN8X12886i2obLj6MOuw678GOqUB6iWTBnPnXzF4tc8m%2FoW%2BW0x1I9pup7WMKl3xtTzPoHhxMGiI8cpIrLBinJf%2FjnH5qsHnCRX28hwxMqw3EMb3F3H4%2FGOBCK37gQVVazuW6E5QB5ApsewpsN1wadHFPvdENQ3MIf9zZJzKO7N%2BogWOajF2jdSu7ry9AKY%2FBmSJihSk7RPNBOAuQswrhj%2BjWZGEX6q9V282AbrCJVBZOcVaX2q5VejU&X-Amz-Signature=522e96c9ead805fd03f23c7e6a68a9c1a91b4b25717803567fd137905cccdac2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
