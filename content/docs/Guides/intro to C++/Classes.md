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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUCT3VXC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAyo3fRJy1r3196uCXOGdp%2BeBPZF0yeXsyItNHcnGnSAiBHHZEz1tTHoUZpcXrEGYy587EW3wi00lpwbhCwFFCRoir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMmdskBIx6sghlZbrSKtwDMOiiYlPExYKsvLrlijovcQhO0bN45rqG0U0vlDVXq9%2FksycEIbjFevDeiL3MqhwPS6HyOWv4X71j7Cp5ySQrJZM5ZhbiMRapmcMnn%2FX%2BkE6aJy3mo%2FXvr6%2BEl6iPsqKzsEO38fw404ULHYVBmY8iiokZc9SW8pLIMU6CUYjP5%2BHqGNj8HcF4N7nFyvLKlWPc66s0DMkHHXPRtc%2Bh9ADv7JTQPuuVvWQyjYFrHxLq7QF7zcKYWp63hIeVa9irjXVXFb%2FeF2W%2B31T989tdXD3b%2Fqgz6PJB8UKfhhHPcMNWb5imW6iNxTpCDwkqSNkwRrMNT%2FrrkMcFBfsLihlcs9PjaBYR1aFuhBEnd1ENZCoOtzvWu6Cf3z8LNf%2Fr0zUSx4auo8gO%2B4a6P1Am%2BTmINnLUbbvvOdqWbOEQKwPDU%2BDN5XJ7TWOrVG8X5I64jHrKmbZodY3qm08d7LOKEbdi3yk2kNdDGAx%2B15mDA%2Bbhn84xoyVQN9x2YfvsNs5ymDJx5IY31HmoE%2Fq6ePep6PpH0hOnyqOcLYdKedyXmZ4DArtXVSxP%2FzKge5%2F%2B%2BiZWlxaZ4dIoqDVa39WAr3rRDthZ6Gunwy2A9hLfzesijbyMOF6CQG9z17Z5lnhgp54Z18EwxPuCwAY6pgFr7DS%2Fm90Xn4QHJuWBg3dAvmkgQev0xVRZeQJvn7nzpQUSh%2FRjXvce5GjEi1LrNhdyDgNSbNKalHApaOZm9kd%2B8BT54N9dkV6cc4JGMdn8HgRe175lhYWXvAlszh28YCFBiGl%2FaPfnqGEx6Rsxac2xekOG7UdpY21CZZwzoMpo3EdxuHD%2FhZBeLxFT83tFQ6RJ3L%2F0M%2F7WyhZOLNFY2Xxn3V9vIYhV&X-Amz-Signature=5f2ceaa2d6c8a8ecebd76a308a7dbb97d660fa1df97b2595487dd5b31070dd3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
