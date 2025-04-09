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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOH5OK6Y%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFkAXanuQS74oGn4VZQ6bVjS2muy08UFnmzFVrMDXWP4AiAUGvZrX9mbQAd764nYjHBvoml24q5rzh2pHBk1HT14jSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXCfsh2g1zRJ3T9CuKtwDAo%2FZma3KFUk9xNIDMOru9eZjuW%2BbWkRmIWb2YOiY2pMop9LrpWbus%2BUGkoZZqH6vU7xtd%2Bjw2XW5%2FF6Vr4Mdd0s3BUc75Mt%2FrdqI3sW%2B7QGUz%2FWx2SgZeEq8SCvPQnN7W3n0PCqa%2FcM6eR9nCub%2BjjEPIPEjpXTExKdWkfJsW0dH62RTGVW3TALB8yG9NJt3zWaUZAR7xnTUd7F9nTzV9OtVciX%2FDtqjY0byf0ebWLDe%2FgnlllEHzGeCbIcfw5vqA7fagfzsBebe48Ao%2Bobc0GqFXWB0ru9hojFhyVShVDnba09Ny3WwLszu7C5hTjA5%2BoAkQs3CLxl%2B0y2x2kfau9hT7K70RGSrLhaHBgykoDVre2rHWP5hlqTv7aSlcP7f0PZT7oiz9CoNuCxuD5p2dfOAbZsFhVC0oDFZCFROrjI%2Blbtp9gVksnkgK7G1L6tnBSTnW1pdhdLUqw0DmV3BnzmsNUdHdAKDzTwjU04Wf2lqvQcZd7CVpUHUiiSu%2FPU4NC%2BhAkSW92XZbpRcxkLPDp4cJZKyekdJDJ92fY7wdDpLxTi4O15FxwTd8EuRznkQruCct5BRsq5Ladw3OXjcIirhPYxI1LN7X59svtIRiOpUSfcITD55P6P34fkwyfLXvwY6pgH5l%2FYhBu5H2BrQr1Jz8rXwAYgy7N1yhaALm9YQxq4YLcHxVhivtsbeCj5S1L%2BHpKfOLrcrJvBuCyTKv%2BIMCYllXT0JPPgdwCazxqvFTWN6CcUqfTKJmugHvM1p%2BkkkFvA%2BJMGRKxkUjJlLRStF4tiTj1cxtDKO1kdVPXRjgiLRpcmBpXN8t%2BXq7IRRw%2FCJf7yUTbTlSZWKVMgdP7%2F7%2Bo%2BBhwt7vqLy&X-Amz-Signature=dacb7d5f69e883ef871797709dd733eea4bb1ec50eaf99d32472d63d70d4365c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
