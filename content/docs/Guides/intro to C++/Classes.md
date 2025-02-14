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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBUKIJYP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnWnruRsRE%2Bq0GYmqvVystfdoEakUn8C11DH8WO%2FqzgAiBxXIhCsUhUdqsGS3yfIPVbPgEA4%2B2uhZPZnSiEH%2BphQSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMviwrww9vAWutLXroKtwDLLxMkIdQWaIH20rz53SE2cMF7T34O%2B8Im4b2bezVaLaA7l8rhyLVmhMG65xAIsDgflZlOOeVAddOr%2BhRrusAd%2FbrG1opKSAmQcEQILm8zRF6pqzZ0giUKTwalMzfG4IPZ93WmqegpmWSYdOH4pfTWS1MjfXWYYA0%2Ftivwr%2Fypp3j0idaZNvXORfpdCdyKQI495b5geLG3uIJC73i%2FSA00Q%2BIIz0MQDLAN%2F%2FrSVW23oqnnoFZj7t5UtkbBmdBKmsoJF91VkLUwkz2W7NIjOgpCwiTkTkzj1s6VfEeqACbdD8bZP0TeG92T2EB%2Fp0HysQGA1R%2B9Vkj1zNAEbZ81WoVvkNByRE%2BunlSYnlqjOv5TqCAlRKFclz%2BAN6srZXCGTe5s3PwELAwdsEPbCtqKuCQz2zXA%2FgdVo25jEtjzUMiiXKYkMs9jCT3hcSsWSFLKiiKYQZiCDgPKliRkGzWgfFrmEPWrM%2BdyMVGkgLmAttcr2lGmm3HfBl%2FShibBAUB4u3O0VZqkDiaTJUxFguECWscDPQBzkZxv5BIf6Ln9Q4ROvkMmYY%2FEceIH%2FsI3MdIjVrf9nuWLFKpzXr4M2DY2vORA6vwDtSJ%2BXcMnNWW9g2JEMNgEfyfXieuinyYFMMwqqi6vQY6pgE9tHUOIO8iM%2F4Ce9fu7UfQQHS6cXu00vr5dFd%2BEe%2Bor8GvPnefBhAUY4cWcNIX4%2F2jCqlzuz5nR6YDjKMyjKx0mOBHV6AfED5%2F%2Fsr4Sf6LxGwe6TO6wVOgdBqBhOh6ZE8YctWBqXJzVZ7sXqsksIPtAkuzdGJ%2BFLQyUJrJN9HauoXhVMfCk1SxX45RO%2BoMcUcAC1%2BeHjn%2BJYJ33NeZmDytA9Sq4Z0I&X-Amz-Signature=aa3d28f147e8f099fa7dceba11bf162476069bf2f98945dd5e2548709f5eee55&X-Amz-SignedHeaders=host&x-id=GetObject)

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
