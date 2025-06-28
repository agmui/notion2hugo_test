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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTMWBFZM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArT2cYfgzJt1HSe7UIVpcqcy26bZp9YDOMW%2FJ98wI6iAiBLDh%2FUUEimH0AWBxNTJmlwam5TTooaHsKTLkMjvkYgUiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy2YPNiZXg19U8oIwKtwDtF%2F7oYn7Eq2Gv0jTW3KBJ991xy9a1uT44L1M0AWCs%2F%2BJcCMICwNGtwwPbxKnPlSpxQI5llHeo%2BYGFSefJnNlRuTlT0mdawv2VLW4X2%2FzH8vd0yzhEU3K2TmRGieVXSBkDDyccQxyoFFoO9T04006ehJHS3ZDUGHWJwOIoHTF17xLIyXYE04eGuaaU3ykKLLVJYnCqXvebbpdy0T0STspbc%2FNjUxpom6zSAYeTZWOnnip7tmP5ltnF5JxRImdE4KItwIwJYin6zc44KlJqesUjJ0Lr3M3OuGMkejEwOEDHgXh5pJP3Am7eMnDuJ8%2FHz8d0wnOpDeJNyDgGlSyWshfU%2FPNcBIY5qaxqgFe0U1jFItP9HoDHiJnM3V2hlpLE%2FgSFx8WnP%2F3nnZ%2BcPyT%2BnHCpAuvCfYqUWZ2UTm4Sk5pVI3A%2F0k%2BotJTvKdMr8J%2Bym2hpdHti3IkhUtN34%2B0wWBtAO98%2B7JyyRt9F%2BRu5dvT1%2B3pKu2%2FMNCgqBcL2EiQXI%2BR%2BRHyixR3h0OYkt1YcqEeYRKEbnlm3nX4eNNdzM%2Fn%2F9Ja2WhaN4i2vRmAbRqPOZX2dVavCRH6V3kdmy0GbEW609C%2FhnCFT1qX%2B%2F9v%2Bd6upNlU5XdykSwU4xQO2WQwmpD%2FwgY6pgFEuAs5G0PvxDOAEkn%2B9YYX%2BK0nxNHKF%2BdTY2QZQ2BkFz8Ys1uJ3kZiortL%2Frx51M1PpY3JleWs%2BvsDtnRCoBOCY9SQ2ySsAqdhdziUQStfCNky3HQFsl4jrFXm2KNMFF6ggjyQ1%2BjQOwzVp6gM8szplH%2BB1COsgPLwimzpp%2FFLoX8LNXvg9%2BoIKUy%2BL7nlLD2sDH5jUXMLV68LvQ0ZN9Nq1yfnyZTM&X-Amz-Signature=d42a7aec97d03c1d49878e2625b7870a613e8a1903212f483d7d1c309c3f95f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
