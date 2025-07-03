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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MDYA3PF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIEQBYcRJ9242QMMo02WzvlntvdzWMHfQOTg8MFwGDNNtAiAbQOpcFwfaxR3zfYznrDbkO%2B5B4mTWyiki2sbnIdju9Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMcL82bVj6kLZ1Z7ZlKtwD7OsMg2SHb7VF6BW6TafMo0LuuT79simo3Wm%2F9rsqyvEpxZhI5V3wA7kxt8%2BJeGYfIldoqARu4b%2B5OVXMoc6sdRE02sbt6tLRUs%2F5zR0iz8dS08lryKlDfos4tuWnXrrwS1m29d50ODum6N4yUzHuHoVcFL%2BHw0UFHnU0olrEP%2BA3LxRPMpvUJez5FxfoPl9BPSCfbnfAqZtSTSSKdJ7ym3myRW%2BwMhG1k6cCUEWBCRCVaXgacDHHKLf8td5X11q4AQfCskRbzogjvncDLtRCXvZhAYcjBcGAfVpk4DuubriY9G3oPvz1B6Q8kcvOqNXFddnlvpbdqVd1rh3qeVYkoO4zdYxiOFatCXAsMdzlEfq%2BxTM1VHpIq4HhSbIYqTrrPU%2FBdYUooSP4z2aiAAOhUqipiV8WIkDAwX3OBonziLLyI%2BkCuhlsr8BuPVnvFlufUla4ADBYtXjojQVLMSeKOjXako%2FaigEvkfeXC0estDADXABnhs03DVSjjpYRQ45%2BFIJSQKRrRIQL3ZnZS%2BmL%2FmaDmKbvb5rwRdEHiUAvrt%2F6wzA5E6tu%2FCv7VS7bXZ97R4Gy22Z9d%2FU8g%2BOm5seQ8pIcG%2FrRvviz8Hrp4fHFm4llqz7dsWIre%2BTz6zcw1eSbwwY6pgEOtwEFpONMmYocpLv7A%2FUBbnDSIuAN8L72l1H2DA%2BS2AWGXNZfBxYdLTv3fAHzlFDlMMcelPQZVO19PeQhO8m6c0ZZ0zslVZAMGEGnpVOhWJHcmPUKbhGAUzlmb%2BOpG%2FNzCh0OuYLL5y7HrMCgypAJec%2FoyyE%2FUfE23FgyyBr7URXbKquztoIKuKMYiGVGHlN1FKIqOTVMmO2rXEWcpcNHzRDtXhp3&X-Amz-Signature=9f52de59ca58656d3ea4a46432e2b05230aa66a56db91474740453961fae0672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
