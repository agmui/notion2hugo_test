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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRK7SWO%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHkOWWh2%2Bwz9pRn5ffwwRhYrbIJX09v%2FjKMWgNLoIAReAiEAjU6fgHL%2FDemYdmnhQb56YEsOwW5c3rNlKbKOVA0OhVMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEssEyzyn%2Bz4uZcWircA8910dikApgoQ1pcDWXtwpJmDRDylOFrsVXSmjHQK6E1%2FmqWOzkdpGRqnv2ggR113vgR3zRMiHHNkaH0aP9Weq5CcmHaJlR0RUdnzJrvPMNyASoSxClHM3oYm4EobQmtfSQa3W7eYoE1Js%2FWci6CAtetEbqHUONqicpbIXarEyEoX9E%2Bs2OZ5tkj6w5ciq%2B8t3xcR%2FMo%2FqPFTgx0mtpPMBMmakIY2HBfoHKdbd%2FWdEy83F%2FhtfhmVJmfnMUDlSHLCkUSENe%2BZTtp%2FMFPOU4Y9HS6kKBL4UXsK4cn0twRX8jT1LDM1W8ZK7l43ZnuplDMVMOxIN3JYSYG3qbUhqheMxLpjR%2BLwk9dCY9JQsVxH3eWV9nI155YWNL7RjOhM7HY%2BgvviVByIq19aBDlLZ6Z8%2BDd5oZ%2BxiN%2BuhFwmRkLXK6LCIxEWQT5xTJoRUGsylDSLmy306DgYnJgRgBL82gvXW2W4184WXcXU7PGqr6nCJjDDfIAiU5U803FuHLS51tpztKn6Gl%2FXIzfqi%2BPA48zLrj2ntrmRK40OWm95WI0foe9huy%2Baw5BzxM5EfCPx6LN2jQfTcZrGrEryPiC%2FEfggyKqRk8m%2FtUNmHfxkV2blzS4xv%2BMq8RVe9JkypgbMPSooccGOqUBbNgYGUWs3hzOTwAOzjFXkCQU45IrveaBokPQNs9UWdF%2Bl9M9WeuQ%2FwnG7BOz5oX4mgSJif6yRNWO003ODiUfL2PT0Bk2%2FBWWj291vilPZuLYxK6zlkSNHpNW0c2CSGj0yYaQudVdBAyzohaotop%2FkDAxqTxyr4HquK0%2BSUlhLTvFbjQoJOeELtvys3uUfvdLU5xPyLg%2BisUI6ioGvdGrehSyblpD&X-Amz-Signature=3c718cea6d70cfa365d19ab8c17d88a761cfbe396b127dc31160bb3b0b1c79f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
