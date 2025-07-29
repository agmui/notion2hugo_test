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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBK2KCML%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9OD2ndEpUIZUyI7hQmiFQcEF92CAscvbSdl4LRTYMCgIhAKUhvp6GLRe%2Ff7wd72%2FTQN9TbQtHuDHf25pOt9YqEZSSKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxg6gRrnnU1OW7TlSMq3AO0c68sq8qrA7rL5nxVB4y6ri4GWMUkl9wkPOM6ikRbbyg2CVldo2Ieq%2B%2BVyE%2BgJ1M3S2u7F1kE0mA5pgnx9Q3WLyDJ6fzQhK1ATg6NILPmxrRn%2BQAoYNWRWF0SLfcMW468gFP3XIcnM0SvqkF%2FfoYQoP9BL%2BgFKCoEC7LJcn2kpzD0%2FmhETjhcqJKHhtkJOrU%2BZMeQiVcUeRcOMiF%2BsMWP%2Fh851mgM398%2F7DCPx1B5Sg%2FCWvZcdLrkVgLraCb%2FCiwVlI%2FZV6mdeW0U2vJpeF%2Fyr975Y0rABqbgqgPLvkU3%2B%2BFNTnlYRi9YbQYwgEJMDv9boNyG%2BLlFw8br56CImS8wruKN7xhwvgxZFBzphkRl%2FVF8M6l8gBOxgbTEfBbeDrCHwBUH7GDJTKlb6eiBXDCxmcYgmtoULVm98LFJdceJNVmvrXJqePXR2NT81SObDKbFv%2Ffny5DW4ovMZxjs4Zew060swtJpTXYPX1hGMuZsQz8bBJvtzYmooTPRfdBkOSpU79h3dw%2F31fyZRq2v8KKfltw3cG13lJNlBzUoW8iWRtqrj63ZDAEYjb9vmV40%2FbJgDoDRxJscSZFRV2DH08wr6LcV9sopeDezUMgrQJGiP92rJf92LvFQBndCRzC9iqXEBjqkAeD5ZqZ8sPVtGVSOrfSEHleTechC4jJCUMGafSC038CAaj6jHHePnOsh0rrS1crf%2Fk1Q84l6oahsdDAaANWUK1bUx7F%2FjsRZeV7z7hDoDVf2M%2BX4WykZfrZyoj5R1Od%2Fb9Xd23zZVL8O3D83iqfaR4euwBrB5UwUF%2FepT2oItxwLFF6UyVeqPM72uwlLof%2BvwmjFRzJ0txqDCVeIeBwP4ic9J2Px&X-Amz-Signature=862aaaaf7e4f810733bf79cf7cc8411d4735847c373d1d8a825449fd25edd0dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
