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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVLZI5M5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCcs3X6GNagRiWeoE%2FkkGlgb5vdPYnugsF5AZ%2F1Zr0r0gIgZn7s6MyVbj2Og96lxx%2B%2B4rM5ve%2F%2BYmGE57UwlMfDGz4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIkZxCO2i2JnSlPvAircA4JWkd58%2F4MnsO5tscKr2jt1uZfubZRKEY0X5SQW%2F4vYdgzTrsmnLMv%2F0EScaOzTqJLgjZzsUMFJtoqCfvRuo9OlQ0A9pjeJzWzUeIjjsjHv5MCYzi0hza3U9z6taQMXaPBWvifqbJ%2F7Y3INxECTBGri3VWJWEo2yNbmVf8R4PysYcZj%2FvGrAiPMkGT6M%2FsmPGg%2FFsBmMmhO3zcnaRXvadshFudoZiU%2FP49R3v8vEgy2%2Bm6JogDeFYLctZlxLQHjlx6kL69XRNWpfC1lpdYDOKGO6TdySvDtZWNfxy4jYlA15Gs2yxt3lzFAcmPPvng%2Brip4PyE1%2B8WyvD0qFJ0i8o8iHPlqI2tXV9l79jrcZK8T9HhVmeQHvQ2qZC0P9K5UJob3dB3yeHWQW048LDffv9fvzGSEUzYzQXOyeD%2BYTlBLEhM8w5zM5PwTENopC3LxnhKS%2Fq0oTmVjqAyJ%2B2e%2BBH2cpjo0TuXpJLaikhqBrXXfhBQgickI2gyd2982fnhXtIj4hsaLEhFKnzosA5hFmLIuBKoBVhZHH3Bp5mZg33j3DmBYYC62cVFH4BwBdHwLomw9Zy8pFGPE7%2BqfPmbb4sWw2t45RBA5%2FcOKICPyDb4LL5g6iaNgjkURGrCUMOvp4MAGOqUBRbUwmzHrugiM9CeGiCKHNBl5m9neEHNPKBAF6W5dbQcrYFrNsvE7yLZcxLMBgeDN%2BPJzylpOsyZDKGCXJ5o5%2B9jycR7pY85HUWeqoAgXO%2BhihGKV3F8Ryz20kCoweR6thVjnFKvu3zhiqpbhv1kBCvCbpMT6Lj%2FUp9sCI4YHm7SPnHg1wUy6wZWGl9wwwm1lu5Ipi8tLI8g%2FSEh5CXIxtiQSgQvv&X-Amz-Signature=bd1258b92a961b9eeb6e8b1ac34090969bd98e4c03f819064153e58d32393c00&X-Amz-SignedHeaders=host&x-id=GetObject)

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
