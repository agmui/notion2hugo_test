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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNE6IHNA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDT1JTZlNMsYDnWcTtUYIY0V2q53KCSKHk1hfAXIpbpvgIhALNC99RvdmFOpDZqscuUuCZHnVlj07Uh0exRHMTSvZieKv8DCEwQABoMNjM3NDIzMTgzODA1IgySQRF7nrpn6vyNsp8q3AOyRi8eJDdgbn3KAsGltzTh8pe30QCJvXs7Wb54jWeQayPrx5fvcv6qwXeM5PK6yio2Fl8fqVS6t7MQgh4qyCl7h3JP%2BoUN2FFcnfITMtOF4se0dCncMCGMCU%2BF4pxVS3vfGquWiGNONRoz7CJuiXMA7uU4GFs3e2gjdxcCNCjA8%2BCSKL%2FaH2dAyDxkNI9T6OTyh6sPQNNVBjG%2FDIRYaMxUIbaeTMW2csDKjVI9jx1KY%2Btk6Bnx30gB%2FIFZ9ATwZ6ELnEm7L%2FvhKAIm58ZMT%2FxTS8q6k9KO%2Fd2vMqB5MlJs5dgo9Z3g3bwFXxuNkMDJz3vdOWJO4uFlLAuCx0K9TgX33zV1%2FKl6XkfgNQRR1It%2B6gTFd1F1MNSi5bJTeclvzjU%2FZ5RmIqdKJcgjVEpHuwQaiRsExknewNIUhd7cjf6CaiOz5Vx5FMg5DJba7PvGuiZo0ZhQLGGF22DfEWeiWuVK2L%2FfT0Jr3pxbBsQvV24uyhsoEmdedPnHNG2CKuyrHMS442ujdESkqmfbqm5W448IDeor9qUQNjN%2FXZoNYjjCPbNrcK4060lZBtHEVYMc7PSiTEGGgUZbC9lz1IZhK9TQ3oK4e2RCP2E3hUuwfcjclzIGI5mEov%2F%2B1dT6hTD59aXDBjqkAcrm3TVsgLEW%2B2mf7fitXCB51hCVAMjUBvkLXHRmy6UHbnqzRnLvL%2B16zyA0HI3klAmnDnG%2B9gra%2B15WXP8BchF6XsOXi50XjgJ%2BMAryopC6b1isUMbIYtm94YyKU4dO7CaVpFEX5mH77PrlPuJmYb7ssr6bxCB4JayGAkE9Adzq%2BgBT6%2FDJC1AQkq0hfBr9Qj23DbaYh2FQ3hw45X%2Bi6QQTasEc&X-Amz-Signature=581ab8530e2ffa557940242de1059dad05bf822780c8b4243fbb37996b2b156b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
