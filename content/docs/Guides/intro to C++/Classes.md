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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYG2BNQ2%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIAX5Gxh06YMx8xchm%2BxIJLqBUaSHvIp%2B9C%2BqseGwvqN3AiAO4N%2FEEyodyY4ZgDXY4GPVj6S5F739aAieG%2Fb4tb%2B6tyr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIMcU%2BLG2ocNr2BnKwPKtwDDMjeHTUQXnmAfaBsooMDExU0GRScbgX%2FGkqluqi9jv8fe6hWvN5MAk0%2BJHPU1z9iH18Fq6SeyOrDEhDISM%2FGQhtX4yUbQmEwr0jG6MUd%2FadYIwseMkAGkGsmQWcmCEMJZdJTGPNP7nEH4oOHfg2jYmkncxyuaDgrtsrjXYpOaFwtckiYr3h%2FXn%2FSyUa1vPCo6g2BVhdHJ7fDSUBbNSz8QwmZa5gY7IG1fGXNkGr4Wb7aUvdBQd2kjCQ0zMhwEdQK59lSM182KRt8CyFoBjhJfl64GlZ3zHype4PbuQR%2BhIc7Xz0JAHFkqltVwE4f5ZM4JHdiQYDtkWxyM76%2FWD%2FU%2BA3%2B0s84hotYjjxBf8l85uiK2Wn5bdBzQqoDatiuFP5coGxiiHgfIRHMsb72shgCkZwc3F2uU7Yk%2Bj83Sm404QdM%2BXGQ%2BSZ5V4vaPOkTKf7xIfK1FEsIEJH2f1eL3a317u%2FKFmM7QE%2F4XNcPKb4R1BejhyMWfIf0r%2Fji7tGmIhcmOS5YtcuPN27mJUdA52N3zeA3tI2HKqMr7nXOMtQIi2xZPMoRp%2BSZX6Hc6t1jxce5g%2BCQsNPOI3O3Y%2Bby7lrIljA%2FkoHiTGuRhG10X9VlQ%2FtsXnoepy3YjXnaMVcwod64yQY6pgF0bTst3Dl4nNVZ%2BHpYsJNv0Mwa4%2FWa3fdxcICkUkGs2EyeaPYjzcd6Nsxc8fS88GWB01aRbuZ6zH9TDopg%2FoQcj4aeahnLDihtNgCeOixVtnVyP6Krkd5tnziyIsVSJ4NLsQThPc45LZZ2Zl5XFiEvlccG9zvu1Mk6Fa%2Fc%2BaDlSCeumZs97k90%2FaeR7OMUW0Y2USGGSoT5y33JSqOkkey%2FhcklFQEv&X-Amz-Signature=82101883d61aa98984a3d6994b59d3853dfb93d6631e2d2a6eb7e3accb8a4e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
