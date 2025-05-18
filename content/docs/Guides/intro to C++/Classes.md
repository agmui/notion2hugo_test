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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QE5LVDX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXGEiFtbppQP43I%2F83FmtCOQBEZoUv45P3Sv6mIWZBgAiACSX0Sbq9PZTAoaOCs1t9ylYjc9OvaJXoEL%2FmWBJd8oyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMPu%2Bcc4ZFUY0CuV1ZKtwDijFOm2FbuKkksRmukJvH36%2FaM%2F9JgsVAuvaFfAiU%2FO5pyNWI%2BBaD0tKRHyHckzSS0%2BQyKo5C51t5oRqncJdFn5d8WD7e2%2FF4oxyIK7aZMyRpvNsriuSQbJBYWXyB1gymvoC18g5AhBuZwG2%2Fg%2Bx3LW5leBh8kr%2FtWBAMBIE2Tc4WaA4AIjnpR7nHEKOkbn7Q8tVliAtBDW9rQW8Z3zgi%2BH9ROK6C1YxwC%2BZNhJQW4S6reH7hAWAi0vDrPCrvsg9kRgduyYug%2BEepE7pC%2FK1fY6%2BfSBdUkAt%2FnM4RIn%2FugkSf8wDzlIAzFk3A4SFuI6zSPY%2BOpxUxy2XIJWyPqPcEFHO%2FRtp4WElDlgMQyQx1JIuP4JHd76zzW1z28j2KCN8MU8JzpNHFmuw6Tz1qRnP6yJzOK7EtmsPk7MiG2OJjhTohIRQ%2B9gx%2B83cGXhWEiaena5kTwdJkGcQs%2FJN2rwHdqsUuhD9nZo741O2s5k06Vby2tgxTJjdsOQHKCInwshg6Czpc3W0V9X4Owl79y%2BZ75QNUnoLJ17WwoBGl5wbpCGwhLKRTmYIQEqCA6UAREfg4izRQ7IMVpNjRgom4rA8jhcMZ0xA4h2qebmAGeGmGdbjTP7Y0Nbj4n6juo5UwjNamwQY6pgHcKqOqSnHuUh2Rr0kFlfDof0KMzvtZOBDSTx6VSijMqR0BBZy4uwIr5oHFVls86m1FgZabTBGR%2BSWl4fwqk63cPMhOuJqci0KfYVl96A%2F0ex9Lbpbn75L04JqY%2BLb37s61D18w2MT9cVWCVYwF%2Bjgk3b2ROsqE%2FC7ulx%2BkTWOmYyUgrBAIpsowF8DHgbuCMfkkg05Oc0DgGqsRWWjgMX8S%2BRYzNvtx&X-Amz-Signature=4aad69a532e039da3ab2dac307e74fb97a5b3c10aaed8f48d849604d08e392b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
